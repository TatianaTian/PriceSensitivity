// import 
let position = require('./positionGenerator');
let store = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/client/node_modules/store-js/dist/store.legacy')

function place_trade(buyer_currency, seller_currency, units_buyer){
    // user confirms the lock: collect buyer/seller currencies, units, locked_rate from Shopify
    //var buyer_currency = 'GBP';
    var seller_currency = 'USD';
    var locked_rate = '1.25';
    //var units_buyer = 75; //in buyer's currencies
    var account = '';

    // connect to ONADA
    let common = require('./lib/common');
    let config = require('./lib/config');

    let conf = new config.Config();
    let ctx = conf.createContext();

    // generate the trading direction
    var [trade_direction, tradeQuantity, currency_pair] = position.positionTrader(buyer_currency,seller_currency,units_buyer,locked_rate);
    if (trade_direction === 'buy'){
        units_buyer = Math.round(tradeQuantity);
        account = conf.buyAccount
    }
    else if (trade_direction === 'sell'){
        units_buyer = Math.round(tradeQuantity * (-1));
        account = conf.sellAccount
    }

    console.log('trade account ', account)

    // place limit trades, buy orders to buy_account, sell orders to sell_account
    let marketOrder = new ctx.order.MarketOrderRequest({
        instrument: currency_pair,
        units: units_buyer,
        timeInForce: 'IOC',
        //priceBound: locked_rate
    });

    ctx.order.market(
        account,
        marketOrder,
        response => {
            common.handleErrorResponse(response);
            var a = common.dumpOrderCreateResponse(response);

            store.set('user', { name: 'Amy', trade: true })
        }
    )    
}

exports.place_trade = place_trade;