import { STATES } from 'mongoose';

export function handleQuoteSubmit(currency) {
    console.log('website server running');    
    var store = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/client/node_modules/store-js/dist/store.legacy')
    var request_bid_ask = require('./request_bid_ask')
    request_bid_ask.request_bid_ask(currency);
    setTimeout(function(){
        var quote = store.get('user').quote 
        //console.log('quote is ',quote)
        show_quote(quote)
    }, 1000);
  
    function show_quote(price){
        console.log('Guaranteed exchange rate is ', price);
    }
};


export function handleTradeSubmit(currency, amount) {
    console.log('website server running ',currency, ' ',amount);    
    var store = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/client/node_modules/store-js/dist/store.legacy')
    var place_trade = require('./place_trades')
    place_trade.place_trade(currency, amount);
    setTimeout(function(){
        //var quote = (store.get('user').trade === true) 
        console.log('traded? ', store.get('user').trade)
    }, 1000);
};




















//console.log("pickup function price is ", price)


    /* MongoDB solution 

    let findDoc = require('../mongotest')
    let request_bid_ask = require('./request_bid_ask')
    request_bid_ask.request_bid_ask();
    var price = '';
    var got_price = false;


    for (i = 1; i <= 1; ++i) {
        setDelay(i);
    }

    function setDelay(i) {
        setTimeout(function(){
            if (got_price === false){
                async function findDocImport(){
                    price = await findDoc.findDoc();
                    if (price !== ''){
                        got_price = true;
                        //set quote in state as price
                        show_quote(price)
                    }
                }
                findDocImport();
            }
        }, 1000);
    };
    */