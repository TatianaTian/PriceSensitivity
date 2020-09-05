
const query_exchange_rate = require('./query_exchange_rate')
const country_to_currency = require('./country_to_currency')
const query_order_product = require('./query_order_product')
const getPearsonCorrelation = require('./calc_correlation')

const calc_data_all = async (orderJson, buyer_currency, country_list) => {
    const data1 = orderJson.data.orders.edges
    const order_date = []
    const order_revenue = []
    const order_exchange_rate = []
    const date_set = new Set();
    let myMap = new Map()
    const order_id_list = []
    const date_list = []
    const store_currency = data1[data1.length-1].node.totalPriceSet.shopMoney.currencyCode
    //console.log(data1[data1.length-1].node)

    //console.log('data1.length is ', data1.length)
    //console.log('country_list is ', country_list)

    for (j = 0; j<country_list.length; j++){
        const country_code = country_list[j]
        for (i = 0; i < data1.length; i++) {
            //console.log('i is ', i)
            if (data1[i].node.shippingAddress!== null){
                //console.log('not null address')
                if (data1[i].node.shippingAddress.countryCode === country_code){
                    
                    //console.log('country code is ', country_code)
                    order_id_list.push(data1[i].node.id)
                    //const buyer_currency_code = country_to_currency(country_code)
                    const date = data1[i].node.createdAt.substring(0, 10)
                    date_list.push(date)
                    const result = await query_exchange_rate(date,date,data1[i].node.totalPriceSet.shopMoney.currencyCode,buyer_currency)
                    const fx_date = result[1]
                    //console.log('exchange_rate is ', result[0][fx_date][buyer_currency])
                    //console.log('fx_date is ', fx_date)

                    if (myMap.has(date)){
                        var revenue = myMap.get(date)[0]
                        revenue = parseFloat(revenue) +  parseFloat(data1[i].node.totalPriceSet.shopMoney.amount)
                        myMap.set(date, [revenue, result[0][fx_date][buyer_currency]])
                    }else{
                        myMap.set(date, [data1[i].node.totalPriceSet.shopMoney.amount,result[0][fx_date][buyer_currency]])
                        //console.log("revenue is ", data1[i].node.totalPriceSet.shopMoney)
                    }
                    
                    
                    //console.log("exchange rate is ", exchange_rate[date][buyer_currency_code])

                    /*
                    order_date.push(data1[i].node.createdAt.substring(0, 10))
                    order_revenue.push(data1[i].node.totalPriceSet.shopMoney.amount)
                    order_exchange_rate.push(exchange_rate[date][buyer_currency_code])
           
                    date_set.add(data1[i].node.createdAt.substring(0, 10))*/
                }
            }
        }
    }

    const start = date_list[0]
    const end = date_list[date_list.length-1]
    

    //console.log("order_id_list is", order_id_list)
    //console.log("store_currency is", store_currency)
    //console.log("buyer_currency is", buyer_currency)
    const produt_to_map = await query_order_product(order_id_list,store_currency , buyer_currency)


    
    //console.log(data)

    //console.log("myMap is ", myMap)
    
    produt_to_map.set('all', myMap)


    //const product_to_map_list = []
    //const single_product_list =[]
    //single_product_list.push('all')







    //produt_to_map['all'] = JSON.stringify(myMap)
    //console.log("produt_to_map is ", produt_to_map)

    const order_date2 = []
    const order_revenue2 = []
    const order_exchange_rate2 = []

    for (let [k, v] of myMap) {
        //console.log(k, v);
        order_date2.push(k)
        order_revenue2.push(v[0])
        order_exchange_rate2.push(v[1])
      }


      //produt_to_map['all'] = 
    const result = [order_date2, order_revenue2, order_exchange_rate2]
   // console.log("result is ", result)
    return produt_to_map
}

module.exports = calc_data_all; 
