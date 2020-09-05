/* 
input: currency pair, amount_seller_currency, amount_buyer_currency, locked rate
output: direction, quantity, limit order@

1. decide direction and quantity
    a. GBP, EUR, AUD, NZD to USD: USD at right
        i. buyer at left, seller at right
        ii. seller at left, buyer ar right
    b. CAD, CHF, CNH, CZK, DKK, HKD, HUF, JPY, MXN, NOK, PLN, SAR, SEK, SGD, THB, TRY, ZAR: USD at left
    c. non-USD currency pair
2. request the latest price for that direction and quantity
3. check the locked rate vs the latest price (if locked rate is better than the latest price, tell users to refresh the new locked rate)
4. place order with direction, quantity, limit order @ locked rate
5. after receiving confirm message, send back to shopify
*/

function positionIndicator(currency_pair_buyer, currency_pair_seller) {
    // decide direction and quantity
    var currency_pair = "";
    var tradeDirection = "";
    var primary_currency = ["GBP", "EUR", "AUD", "NZD", "USD"];
    if (primary_currency.includes(currency_pair_buyer) && primary_currency.includes(currency_pair_seller)){
        if (currency_pair_seller == "USD"){
            tradeDirection = "sell";
            currency_pair = currency_pair_buyer.concat("/",currency_pair_seller)
        }
        else if (currency_pair_buyer == "USD"){
            tradeDirection = "buy";
            currency_pair = currency_pair_seller.concat("/",currency_pair_buyer)
        }
    }
    // request the latest price for that direction and quantity
    return [tradeDirection, currency_pair];  
  }



function positionTrader(currency_pair_buyer, currency_pair_seller, amount_buyer_currency, locked_rate) {
    // decide direction and quantity
    var tradeDirection = "";
    var tradeQuantity = 0;
    var primary_currency = ["GBP", "EUR", "AUD", "NZD", "USD"];
    if (primary_currency.includes(currency_pair_buyer) && primary_currency.includes(currency_pair_seller)){
        if (currency_pair_seller == "USD"){
            tradeDirection = "sell";
            amount_seller_currency = amount_buyer_currency * locked_rate;
            tradeQuantity = amount_seller_currency;
            currency_pair = currency_pair_buyer.concat("/",currency_pair_seller);
        }
        else if (currency_pair_buyer == "USD"){
            tradeDirection = "buy";
            tradeQuantity = amount_buyer_currency;
            currency_pair = currency_pair_seller.concat("/",currency_pair_buyer);
        }
    }

    // request the latest price for that direction and quantity
    
    return [tradeDirection, tradeQuantity, currency_pair];  
  }

  
  function closePosition(currency_pair_buyer, currency_pair_seller, amount_buyer_currency, locked_rate) {
    // decide direction and quantity
    var tradeDirection = "";
    var tradeQuantity = 0;
    var primary_currency = ["GBP", "EUR", "AUD", "NZD", "USD"];
    if (primary_currency.includes(currency_pair_buyer) && primary_currency.includes(currency_pair_seller)){
        if (currency_pair_seller == "USD"){
            tradeDirection = "buy";
            tradeQuantity = amount_buyer_currency * locked_rate;
            currency_pair = currency_pair_buyer.concat("/",currency_pair_seller);
        }
        else if (currency_pair_buyer == "USD"){
            tradeDirection = "sell";
            tradeQuantity = amount_buyer_currency;
            currency_pair = currency_pair_seller.concat("/",currency_pair_buyer);
        }
    }
    // request the latest price for that direction and quantity
    
    return [tradeDirection, tradeQuantity, currency_pair];  
  }

exports.positionIndicator = positionIndicator;
exports.positionTrader = positionTrader;
exports.closePosition = closePosition;


