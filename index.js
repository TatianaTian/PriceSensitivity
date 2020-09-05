const express = require('express');
const path = require('path');
//const insertDoc = require('/Users/tatianatian/Desktop/Startup/shopify_app/trade/trades/mongotest3.js')
const app = express();
const findDoc = require('./database/mongodb')
const query_tabs = require('./functions/query_tabs')
const query_data = require('./functions/query_data')


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
console.log('dir is ', __dirname)

// An api endpoint that returns a short list of items
app.get('/api/getList', async (req,res) => {
    var name = await findDoc.findDoc("haloy.myshopify.com","EUR","locked_rate");
   
    res.setHeader('Access-Control-Allow-Origin', 'https://0797096e.ngrok.io');
    //var list = ["item1", "item2"];
    console.log('name is ', name)
    var list = [name]
    res.json(list);
    console.log('Sent list of items');
});

// An api endpoint that returns a short list of items
app.get('/api/tabs', async (req,res) => {
    console.log("arrived tabs")
    var all_data = await query_tabs();
    
    res.setHeader('Access-Control-Allow-Origin', 'https://0797096e.ngrok.io');
    //var list = ["item1", "item2"];
    console.log('tabs is ', all_data)
    var list = all_data
    res.json(list);
    
    console.log('Sent tabs');
});

// An api endpoint that returns a short list of items
app.get('/api/country_data', async (req,res) => {
    console.log("arrived data")
    console.log("req.body is", req.body)
    var all_data = await query_tabs();
    console.log("data is ", all_data)
    
    res.setHeader('Access-Control-Allow-Origin', 'https://0797096e.ngrok.io');
    var list = all_data[1]
    res.json(list);
    
    console.log('Sent data');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);