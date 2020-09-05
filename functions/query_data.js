global.fetch = require("node-fetch");
const query_exchange_rate = require('./query_exchange_rate')
const country_to_currency = require('./country_to_currency')
const calc_data_all = require('./calc_data_all')

const query_data = async (currency, country_list) => {
    const query_order_list = JSON.stringify({
        query: `query {
            orders(first: 249) {
                edges {
                  node {
                    id
                    totalPriceSet {
                      presentmentMoney {
                        amount
                        currencyCode
                      }
                      shopMoney {
                        amount
                        currencyCode
                      }
                    }
                    createdAt
                    currencyCode
                    shippingAddress {
                        country
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
        
        body: query_order_list
    })
    const orderJson = await response.json();
    var all;

    try{
      //console.log("query_data orderJson is ",orderJson.data.orders.edges)

    all = await calc_data_all(orderJson, currency, country_list)
    
    //console.log("all in query_data is ", all)
    } catch(error){
      console.log("Error query_data")
      console.log("Error orderJson is ",orderJson)
      all = "error"
    }


    return all
    
    
};
  
query_data('EUR',['FR','IT','GE'])
module.exports = query_data; 


