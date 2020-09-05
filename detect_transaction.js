var mongo = require('./database/mongodb')
var close_trade = require('./trade/trades/src/close_trades')
var place_trade = require('./trade/trades/src/place_trades')


async function detect_transaction(domain, payload){
  var shop_currency_amount = payload.total_price_set.shop_money.amount
  var shop_currency_code = payload.total_price_set.shop_money.currency_code
  var buyer_currency_amount = payload.total_price_set.presentment_money.amount
  var buyer_currency_code = payload.total_price_set.presentment_money.currency_code
  
// check if it's a foreign transaction
  if (shop_currency_code !== buyer_currency_code){

// check if the currency is locked
    var currency_list = await mongo.findLockedCurrency(domain)
    if (currency_list.includes(buyer_currency_code)){

      // update to transaction details
      mongo.updateTransaction()

// calc matched revenue
      var locked_rate = await mongo.findDoc(domain, buyer_currency_code, "locked_rate")
      var category = exchange_rate_convension(buyer_currency_code, seller_currency_code)
      var order_exchange_rate = calc_exchange_rate(shop_currency_amount, buyer_currency_amount, category)
      var matched_revenue = calc_revenue_matched(shop_currency_amount, buyer_currency_amount, locked_rate, category)
    

      if (matched_revenue > 0){
// place closing position trades
        var trade_open_price = await mongo.findDoc(domain, buyer_currency_code, "ONADA_trade_price")
        var limit_price = calc_limit_price(buyer_currency_amount, matched_revenue, trade_open_price, category)
        var tradeID = await mongo.findDoc(domain, buyer_currency_code, "ONADA_trade_id")
        close_trade.close_trade(buyer_currency_code, buyer_currency_amount, shop_currency_code, locked_rate, tradeID, limit_price)
// update database
        mongo.updateLock()
        mongo.updateDoc(domain, "total_extra_revenue", )
        mongo.updateDoc(domain, "total_left_deposit", )
        mongo.updateDoc(domain, "total_available_deposit", )

// place deposit hedging orders if the shop currency is not USD
        if (shop_currency_code !== 'USD'){
          place_trade.place_trade('USD', shop_currency_code, matched_revenue)
// update to database
          mongo.revenueHedging(domain)
        }
      }
    }
  }
}

function exchange_rate_convension(buyer_currency_code, seller_currency_code){
  var category
  var all_pairs = ['AUD/CAD', 'AUD/CHF', 'AUD/HKD', 'AUD/JPY', 'AUD/NZD', 'AUD/SGD', 'AUD/USD', 'CAD/CHF', 'CAD/HKD', 'CAD/JPY', 'CAD/SGD', 'CHF/HKD', 'CHF/JPY', 'CHF/ZAR',
  'EUR/AUD', 'EUR/CAD','EUR/CHF', 'EUR/CZK', 'EUR/DKK', 'EUR/GBP', 'EUR/HKD', 'EUR/HUF', 'EUR/JPY', 'EUR/NOK', 'EUR/NZD', 'EUR/PLN', 'EUR/SEK', 'EUR/SGD', 'EUR/TRY',
  'EUR/USD', 'EUR/ZAR', 'GBP/AUD', 'GBP/CAD', 'GBP/CHF', 'GBP/HKD', 'GBP/JPY', 'GBP/NZD', 'GBP/PLN', 'GBP/SGD', 'GBP/USD', 'GBP/ZAR', 'HKD/JPY', 'NZD/CAD', 'NZD/CHF', 
  'NZD/HKD', 'NZD/JPY', 'NZD/SGD', 'NZD/USD', 'SGD/CHF', 'SGD/HKD', 'SGD/JPY', 'TRY/JPY', 'USD/CAD', 'USD/CHF', 'USD/CNH', 'USD/CZK', 'USD/DKK', 'USD/HKD', 'USD/HUF', 
  'USD/JPY', 'USD/MXN', 'USD/NOK', 'USD/PLN', 'USD/SAR', 'USD/SEK', 'USD/SGD', 'USD/THB', 'USD/TRY', 'USD/ZAR', 'ZAR/JPY']
  if (all_pairs.includes(buyer_currency_code.concat('/',seller_currency_code))){
    category = 1
  }
  else if (all_pairs.includes(seller_currency_code.concat('/',buyer_currency_code))){
    category = 2
  }
  else {
    category = 3
  }
  return category
}


function calc_exchange_rate(shop_currency_amount, buyer_currency_amount, category){
  var exchange_rate = 0
  if (category === 1){
    exchange_rate = shop_currency_amount/buyer_currency_amount
  }
  else if (category === 2){
    exchange_rate = buyer_currency_amount/shop_currency_amount
  }
  return exchange_rate
}

function calc_revenue_matched(shop_currency_amount, buyer_currency_amount, locked_rate, category){
  var matched_revenue = 0
  if (category === 1){
    // this matched_revenue is in shop's currency
    matched_revenue = Math.max(buyer_currency_amount*locked_rate - shop_currency_amount, 0)
  }
  else if (category === 2){
    matched_revenue = Math.max(buyer_currency_amount/locked_rate - shop_currency_amount, 0)
  }
  return matched_revenue
}

function calc_limit_price(buyer_currency_amount, matched_revenue, trade_open_price, category){
  var limit_price = 0
  if (category === 1){
    limit_price = trade_open_price - matched_revenue/(buyer_currency_amount * locked_rate) * trade_open_price
  }
  else if (category === 2){
    limit_price = matched_revenue/(buyer_currency_amount * locked_rate) * trade_open_price + trade_open_price
  }
  return limit_price
}





exports.detect_transaction = detect_transaction
