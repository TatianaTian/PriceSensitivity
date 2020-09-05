global.fetch = require("node-fetch");
//const query_data = require('./query_data')
const calc_price_level = require('./calc_price_level')
const country_to_currency = require('./country_to_currency')
const calc_country_of_currency = require('./calc_country_of_currency')
const query_data = require('./query_data')
const change_format = require('./change_format')
var store = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/client/node_modules/store-js/dist/store.legacy')
const query_product_title = require('./query_product_title')
const query_exchange_rate = require('./query_exchange_rate')
const calc_price_change = require('./calc_price_change')


const obj = {}


const query_tabs = async () => {
    const query_short_list = JSON.stringify({
        query: `query {
            
                orders(first: 250) {
                  edges {
                    node {
                      id
                      createdAt
                      currencyCode
                      shippingAddress{
                        countryCode
                      }
                      }
                    }
                  }
            
        }`
    });

    const shop = 'haloy.myshopify.com'
    const accessToken = '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'

    const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-Shopify-Access-Token": accessToken,
        },
        
        body: query_short_list
    })
    const orderJson = await response.json();
   // if (orderJson.order !== undefined){
        console.log("query_tabs orderJson is ", orderJson.data)
        //console.log("order Json is ", orderJson.data.orders.edges)
        const data1 = orderJson.data.orders.edges
        const store_currency = orderJson.data.orders.edges[data1.length-1].node.currencyCode
        //console.log('store currency is ', store_currency)
    
        var i, j;
        const country_set = new Set();
        const currency_set = new Set();
        let currency_date_map = new Map();
        const tab = [{id: "Main", content: "Main"}]
        
        const country_of_currency = []
    
        for (i = 0; i < data1.length; i++) {
            //console.log(i)
            if (data1[i].node.shippingAddress !== null){
                //console.log("here")
                const currency = country_to_currency(data1[i].node.shippingAddress.countryCode)
                //console.log("currency is ", currency)
                if (currency !== store_currency){
                    currency_set.add(currency)
                    country_set.add(data1[i].node.shippingAddress.countryCode);
    
                    if (currency_date_map.has(currency)){
                        const dateCreated = data1[i].node.createdAt
                        console.log("dateCreated is ",dateCreated)
                        var date_map = currency_date_map.get(currency)
                        var start = date_map.get('start')
                        var end = date_map.get('end')
                        console.log("start is ",start)
                        console.log("end is ",end)
                        if (dateCreated < start){
                            date_map.set('start', dateCreated)
                            console.log("new start is ",date_map.get('start'))
                        } else if (dateCreated > end){
                            date_map.set('end', dateCreated)
                            console.log("new end is ",date_map.get('end'))
                        }
                        currency_date_map.set(currency, date_map)
                    } else {
                        let new_map = new Map();
                        const dateCreated = data1[i].node.createdAt
                        new_map.set('start', dateCreated)
                        new_map.set('end', dateCreated)
                        console.log("start2 is ",start)
                        console.log("end2 is ",end)
                        currency_date_map.set(currency, new_map)
                    }
    
    
    
                }
            }
        }
        currency_set.delete('CLP')
        
        var today = new Date();
        today = today.getFullYear()+'-'+date_format(today.getMonth()+1)+'-'+today.getDate()
        var today_fx = []
    
        const iterator2 = currency_set.values();
        var perc_change_map = []
        var all_list = []
        for (j = 0; j < currency_set.size; j++) {
            const detail = {}
            const value = iterator2.next().value
            const a = {
                id: value,
                content: value
            }
            tab.push(a)
    
    
            const exchange_rate_all_results = await query_exchange_rate(today, today, store_currency, value)
            const fx = exchange_rate_all_results[0][exchange_rate_all_results[1]][value]
            today_fx.push([value, fx])
            console.log("today_fx inner is ",today_fx)
            //console.log("value is ",value)
            //console.log("fx is ",fx)
           // console.log("country set is ",country_set)
    
            const country_list = calc_country_of_currency(value, country_set)
    
            
            //CountryMap.push(await query_data(value))
            const current_level = await calc_price_level(store_currency,value)
            
            console.log("country_date_map is ", currency_date_map.get(value))
    
            console.log("difference is ", currency_date_map.get(value).get('end')-currency_date_map.get(value).get('start'))
            const perc_change = await calc_price_change(store_currency,value,currency_date_map.get(value).get('start'),currency_date_map.get(value).get('end'))
            
            
            perc_change_map.push([value, perc_change])
            
    
    
            //const current_level = []
            //current_level.push(await calc_price_level(store_currency,value))
            country_of_currency.push(country_list)
    
            // query data, parameters are (currency, country_list)
            //console.log("country_list is ", country_list)
            //console.log("value is ", value)
    
            product_to_map = await query_data(value, country_list)
            const product_to_list = await change_format(product_to_map)
    
            var the_curreny_all_list = []
            the_curreny_all_list.push(value)
            the_curreny_all_list.push(country_list)
            the_curreny_all_list.push(current_level)
            the_curreny_all_list.push(product_to_list)
            all_list.push(the_curreny_all_list)
    
            //console.log("product_to_map is ", product_to_map)
            console.log("perc change in query_tab is ", perc_change)
    
    
        }
    
        const id_title = await query_product_title()
        console.log("today_fx is ", today_fx)
        //console.log("all in query_tabs is ", [tab, all_list[0][3]])
    
        //query today's exchange rate of all tab currencies
        
        
    
       /* for (k=1;k<tab.length;k++){
            const currency_select = tab[k].id
    
            var today = new Date();
            today = today.getFullYear()+'-'+date_format(today.getMonth()+1)+'-'+today.getDate()
            const exchange_rate_all_results = query_exchange_rate(today, today, store_currency, currency_select)
            const fx = exchange_rate_all_results[0][exchange_rate_all_results[1]]
            today_fx.push[[currency_select, fx]]
        }*/
    
    
    
    
        return [tab, all_list, id_title, store_currency, today_fx, perc_change_map];
        //return all_list
        //return [tab, strMapToJson(country_all_info_map)];
        //return [tab, strMapToJson(test_map)]
   /* } else {
        console.log("error query_tabs")
    }*/
   

};
  
query_tabs()
module.exports = query_tabs; 

function date_format(num){
    if (num<10){
        return '0'+num
    }
    else {
        return num
    }
}