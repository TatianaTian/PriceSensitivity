
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tatiana:tatiispretty@cluster0-cigjb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });



async function findDoc(shop_domain, buyer_currency, field) {
  var res;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection("shop_info");
      let query = { shop_domain: shop_domain }
      res = await collection.findOne(query);
      var lock = "lock_".concat(buyer_currency)
      return res[lock][field]


  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

async function insertDoc(){
  var res;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection('shop_info');
      let query = new_user_schema()
      res = await collection.insertOne(query);
      return res.quote;
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

async function updateLock(shop_domain, buyer_currency){
  var res;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection('shop_info');
      var filter = { shop_domain: shop_domain };
       var newvalues = {
      //   "$set": {
      //    "shop_domain": 'haloy.myshopify.com'
      //   }
        "$set": new_lock_schema(buyer_currency)
      };
      res = await collection.updateOne(filter, newvalues);     
      return res.quote;
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

async function updateTransaction(shop_domain, buyer_currency){
  var res;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection('shop_info');
      var filter = { shop_domain: shop_domain };
       var newvalues = {
      //   "$set": {
      //    "shop_domain": 'haloy.myshopify.com'
      //   }
        "$set": transaction_details_schema(buyer_currency, order_id)
      };
      res = await collection.updateOne(filter, newvalues);     
      return res.quote;
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

async function updateQuote(shop_domain, buyer_currency){
  var res;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection('shop_info');
      var filter = { shop_domain: shop_domain };
       var newvalues = {
      //   "$set": {
      //    "shop_domain": 'haloy.myshopify.com'
      //   }
        "$set": quote_schema(buyer_currency)
      };
      res = await collection.updateOne(filter, newvalues);     
      return res.quote;
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

async function updateDoc(shop_domain, field, value){
  var res;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection('shop_info');
      var filter = { shop_domain: shop_domain };
      var newvalues = {
      //   "$set": {
      //    "shop_domain": 'haloy.myshopify.com'
      //   }
        "$set": {
          [field]: [value]
        }
      };
      res = await collection.updateOne(filter, newvalues);     
      return res.quote;
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

async function findLockedCurrency(shop_domain) {
  var res;
  var currency = [];
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection("shop_info");
      var allKeys=await collection.findOne()
      let query = { shop_domain: shop_domain }
      res = await collection.findOne(query);
      for (var key in allKeys){
        if (key.includes("lock_")){
          //console.log(res)
          console.log(res[key]['buyer_currency'])
          currency.push(res[key]['buyer_currency'])
        }
      }
      //console.log(currency)
      return currency
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}

async function revenueHedging(shop_domain) {
  var res;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db("shop");
      let collection = db.collection('shop_info');
      var filter = { shop_domain: shop_domain };
      var newvalues = {
      //   "$set": {
      //    "shop_domain": 'haloy.myshopify.com'
      //   }
        "$set": revenue_hedging_schema(buyer_currency)
      };
      res = await collection.updateOne(filter, newvalues);     
      return res.quote;
  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
}


function new_user_schema(){
  var user_info;
  user_info = 
  {
    shop_id: '123',
    shop_domain: '',
    shop_currency: '',
    total_extra_revenue: '',
    total_start_deposit: '',
    total_left_deposit: '',
    total_available_deposit: '',
  }
  return user_info
}

function new_lock_schema(buyer_currency){
  var lock_info;
  var lock_key = "lock_".concat(buyer_currency)
  lock_info = 
  {
    [lock_key]:
    {
      buyer_currency:'',
      locked_rate:'1.2',
      locked_amount:'',
      left_amount:'',
      start_deposit:'',
      left_deposit:'',
      availabe_deposit: '',
      extra_revenue: '',
      ONADA_trade_account: '',
      ONADA_trade_id: '',
      ONADA_trade_price: '',
      ONADA_trade_account:'' 
    }
  }
  return lock_info
}

function quote_schema(buyer_currency_code, quote_rate, amount){
  var quote_info;
  quote_info = 
  {
    quote:
    {
      buyer_currency:buyer_currency_code,
      quote:quote_rate,
      quoted_amount:amount,
    }
  }
  return quote_info
}

function transaction_details_schema(buyer_currency,order_id){
  var transaction_info;
  transaction_info = 
  {
    [buyer_currency]:
    {
      [order_id]:{
        date:'',
        order_price:'',
        PSP_exchange_rate:'',
        PSP_revenue:'',
        locked_rate:'',
        locked_revenue: '',
        matched_revenue: ''
      }
    }
  }
  return transaction_info
}

function revenue_hedging_schema(shop_currency){
  var revenue_hedging;
  revenue_hedging = 
  {
    revenue_hedging:
    {
      [order_id]:{
        matched_revenue_USD:'',
        matched_revenue_shop_currency:'',
        hedging_trade_id:'',
        hedging_trade_price:'',
      }
    }

  }
  return transaction_info
}

exports.insertDoc = insertDoc;
exports.findDoc = findDoc;
exports.updateLock = updateLock;
exports.findLockedCurrency = findLockedCurrency;
exports.updateTransaction = updateTransaction;
exports.updateQuote = updateQuote;
exports.updateDoc = updateDoc;
exports.revenueHedging = revenueHedging;


//insertDoc()
//updateDoc("EUR")
findLockedCurrency("haloy.myshopify.com", 'EUR', "locked_rate")
/*
(async () => {
  var data = await findDoc('haloy.myshopify.com', 'EUR', "locked_rate")
  console.log(data)
})();

*/

