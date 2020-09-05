// import 
let position = require('./positionGenerator');
//let insertDoc = require('../mongotest3')
//require('mongoose')
let store = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/client/node_modules/store-js/dist/store.legacy')

function request_bid_ask(buyer_currency){
    // user asks for quote: collect buyer/seller currencies and units from Shopify
    //var buyer_currency = 'GBP';
    var seller_currency = 'USD';
    console.log("buyer currency is ", buyer_currency)

    // connect to ONADA
    let common = require('./lib/common');
    let config = require('./lib/config');    

    //let conf = new config.Config(argv.config);
    let conf = new config.Config();
    let ctx = conf.createContext();
    var price = '';

    // generate the trading direction
    var [trade_direction, currency_pair] = position.positionIndicator(buyer_currency,seller_currency);
    if (trade_direction === 'buy'){
        account = conf.buyAccount
    }
    else if (trade_direction === 'sell'){
        account = conf.sellAccount
    }

    // request prices
    ctx.pricing.get(
        account,
        {
            instruments: currency_pair,
        },

        (response) => {
            var obj = JSON.parse(response['rawBody']);
            if (trade_direction === "buy"){
                price = obj.prices[0].asks
                indicate_trade_price = price[0].price
                indicate_locked_rate =  indicate_trade_price * 1.005
            }
            else if (trade_direction === "sell"){
                price = obj.prices[0].bids
                indicate_trade_price = price[0].price
                indicate_locked_rate =  indicate_trade_price * 0.99
            }

            // solution 1: write data to mongoDB
            //insertDoc.insertDoc(indicate_locked_rate)
            // solution 2: write to LocalStorage
            //insertDoc.insertDoc();
            store.set('user', { name: 'Amy', quote: indicate_locked_rate })
            console.log("locked_rate is ", indicate_locked_rate)


            // indicate_trade_price is the price from ONADA, indicated_locked_rate is the marked up rate, send indicate_trade_price value back to Shopify
        }
    )
    
}

exports.request_bid_ask = request_bid_ask
request_bid_ask('EUR');

  