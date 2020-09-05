var findDoc = require('./database/mongodb')

async function detect_transaction(domain){
    var locked_rate = await findDoc.findDoc(domain, 'EUR', "locked_rate")
    console.log('locked_rate ',locked_rate)
}

detect_transaction('haloy.myshopify.com')