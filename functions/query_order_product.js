
global.fetch = require("node-fetch");
const query_exchange_rate = require('./query_exchange_rate')

const obj = {}

async function query_order(order_id, store_currency, buyer_currency){
    const query_order_product = JSON.stringify({
        query: `query getOrderProduct($id: ID!){
            order(id: $id) {
                id
                createdAt
                lineItems(first: 20) {
                  edges {
                    node {
                      product {
                        id
                      }
                      quantity
                      originalUnitPrice
                    }
                  }
                }
              }

        }`,
        variables:{ "id": order_id}
    });


    const shop = 'haloy.myshopify.com'
    const accessToken = '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'

    const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-Shopify-Access-Token": accessToken,
        },
        
        body: query_order_product,
    })
    const orderJson = await response.json();

    //console.log(orderJson)


    let myMap = new Map();
    const product_id_set2 = new Set();

   
    try{
        //console.log(orderJson.data.order.lineItems.edges.length)

        const product_to_revenue = {}
        var revenue = 0
        var total_quantity = 0
        for (f=0; f<orderJson.data.order.lineItems.edges.length; f++){
            
            const new_product_id = orderJson.data.order.lineItems.edges[f].node.product.id
            product_id_set2.add(new_product_id)
            total_quantity += orderJson.data.order.lineItems.edges[f].node.quantity

            //console.log("product_id_set2 is ", product_id_set2)
            //console.log("unit price is ", orderJson.data.order.lineItems.edges[i].node.originalUnitPrice)
        // console.log("unit quantity is ", orderJson.data.order.lineItems.edges[i].node.quantity)

            revenue = orderJson.data.order.lineItems.edges[f].node.originalUnitPrice * orderJson.data.order.lineItems.edges[f].node.quantity

            //console.log("revenue is", revenue)

            if (product_to_revenue[new_product_id] === undefined){

                //console.log("product_to_revenue is undefined")

                product_to_revenue[new_product_id] = revenue
            } else {
                const original_revenue = product_to_revenue[new_product_id] 
                const new_revenue = original_revenue + revenue
                product_to_revenue[new_product_id] = new_revenue
            }
            //revenue = revenue + orderJson.data.order.totalPrice
        }

        //console.log("product_to_revenue ", product_to_revenue)

        const date =  orderJson.data.order.createdAt.substring(0, 10)



        const [exchange_rate, fx_date] = await query_exchange_rate(date,date,store_currency, buyer_currency)
        //const exchange_rate = await query_exchange_rate('2020-05-08','2020-05-08','USD','GBP')

        //myMap.set("product id", orderJson.data.order.lineItems.edges[0].node.product.id)
        myMap.set("date", date)
        myMap.set("revenue", product_to_revenue)

        const avg_price = product_to_revenue/total_quantity*exchange_rate[fx_date][buyer_currency]
        myMap.set("fx", exchange_rate[fx_date][buyer_currency])
       //myMap.set("fx", avg_price)


        //obj[order_id] = myMap

        //console.log("myMap ", myMap)
        //console.log("product id ", orderJson.data.order.lineItems.edges[0].node.product.id)
        //console.log("date ", orderJson.data.order.createdAt)
        //console.log("revenue ", orderJson.data.order.totalPrice)
        //console.log(product_id_set2)
        return [product_id_set2, myMap]
    } catch(error){
        return ["error when query " + order_id]
    }
}



const query_order_product = async (order_id_list, store_currency, buyer_currency) =>{

    //console.log("here")

    var product_id_set = new Set();
    const product_to_order={}
    const product_to_map= new Map();
    const order_to_map={}

   // console.log(order_id_list)
    
    for (i=0; i<order_id_list.length; i++){
        var product_id_set2 = new Set();
        let map = new Map();

       // console.log("order ",i)

        const order_id = order_id_list[i]

       // console.log("order id", order_id)

        result = await query_order(order_id, store_currency, buyer_currency)

        if (result.length>1){
            product_id_set2 = result[0]
            map = result[1]
            //console.log("map is ", map)
            order_to_map[order_id] = map
    
            //console.log("order_to_map is ", order_to_map)
    
            
            //console.log("product_id_set is ", product_id_set)
            const iterator1 = product_id_set2.values();
    
            //console.log("product_id_set2 is", product_id_set2)
    
            //console.log("product_id_set2.size is ", product_id_set2.size)
            for (j=0; j<product_id_set2.size; j++){
    
                //console.log("inside loop")
    
                const product = iterator1.next().value
                product_id_set.add(product)
                
    
                if (product_to_order[product] !== undefined){
                    var existing_order_id = []
                    for (k=0; k<product_to_order[product].length; k++){
                        existing_order_id.push(product_to_order[product][k])
                    }
                    existing_order_id.push(order_id)
                    product_to_order[product] = existing_order_id
                } else{
                    product_to_order[product] = [order_id]
                }
                
            }
        }

    }

    //console.log("product_to_order is ", product_to_order)


    const iterator2 = product_id_set.values();
    
    //console.log("product_id_set.size is ", product_id_set.size)

    for (i=0; i<product_id_set.size; i++){
        let myMap = new Map();
        const product_id = iterator2.next().value
        const order_id_list_this_product = product_to_order[product_id]

        //console.log("order_id_list_this_product is ", order_id_list_this_product)

        for (j=0; j<order_id_list_this_product.length; j++){
            const order_id_this_product = order_id_list_this_product[j]

            //console.log("order_to_map[order_id_this_product] is ", order_to_map[order_id_this_product])
            
            const date_this_product = order_to_map[order_id_this_product].get("date")
            const revenue_this_product = order_to_map[order_id_this_product].get("revenue")[product_id]
            
            //console.log("revenue_this_product is ", revenue_this_product)

            const fx_this_product = order_to_map[order_id_this_product].get("fx")

            //console.log("myMap is ", myMap)
            //console.log("date_this_product is ", date_this_product)
            //console.log("revenue_this_product is ", revenue_this_product)
            //console.log("fx_this_product is ", fx_this_product)

            if (myMap.has(date_this_product)){
                var value = myMap.get(date_this_product)
                value[0] = value[0] + revenue_this_product
                myMap.set(date_this_product, [value[0], value[1]])
            } else{
                myMap.set(date_this_product, [revenue_this_product, fx_this_product])
                //console.log("Add new map element; myMap is ", myMap)
            }
        }
        product_to_map.set(product_id, myMap)
        //console.log("product_to_map is ", product_to_map)
    }


  //console.log("product_to_map is ", product_to_map)
  //return strMapToJson(product_to_map)
  return product_to_map
}

query_order_product (["gid://shopify/Order/2239210750011"], 'USD', 'GBP')
module.exports = query_order_product;

