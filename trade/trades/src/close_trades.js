// import 
let position = require('./positionGenerator');

function close_trade(buyer_currency, units_buyer, seller_currency, locked_rate, tradeID, limit_price){
    console.log('entered close trade')
    // user had a sale: collect buyer/seller currencies, sold price in buyer's currency, locked_rate from Shopify, FIFO rule - find the trade ID
    // get below from webhook
    var units_buyer = '10'; //in buyer's currency
    var buyer_currency = 'GBP';
    var seller_currency = 'USD';
    var locked_rate = '1.22'; 
    var tradeID = '296'

    // connect to ONADA
    let common = require('./lib/common');
    let config = require('./lib/config');

    let conf = new config.Config();
    let ctx = conf.createContext();

    // generate the trading direction and quantity
    var [tradeDirection, tradeQuantity, currency_pair] = position.closePosition(buyer_currency, seller_currency, units_buyer, locked_rate);

    if (tradeDirection === 'buy'){
        account = conf.sellAccount
    }
    else if (tradeDirection === 'sell'){
        account = conf.buyAccount
    }


    // market sell
    ctx.trade.close(
        account,
        tradeID,
        //{units:Math.round(tradeQuantity).toString()},
        {},
        response => {
            common.handleErrorResponse(response);
            common.dumpOrderCreateResponse(response);
        }
    )    
}

exports.close_trade = close_trade;



  