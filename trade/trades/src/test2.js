let request_bid_ask = require('./request_bid_ask')
let test = require('./test')

request_bid_ask.request_bid_ask();
//var price = test.pick_up();
//console.log("pass to test2 price is ", price)


// call request_bid_ask function, then wriet test.js into index.js, in the setTimeOut function, write other handle sumbit code





/*export function handleSubmit() {
    //console.log('website server running');
    //let request_bid_ask = require('../trade/trades/src/request_bid_ask')
   // var price = request_bid_ask.request_bid_ask()
    //var price = request_bid_ask.request_bid_ask();
    //setTimeout(function(){ console.log('Guaranteed exchange rate is ',price)}, 2000);
    console.log('Guaranteed exchange rate is ')
    

  };*/

  let request_bid_ask = require('./request_bid_ask')
  request_bid_ask.request_bid_ask();
  
  var price = '';
  var fs = require("fs");
  
  
  for (i = 1; i <= 5; ++i) {
      setDelay(i);
  }
  
  function setDelay(i) {
      setTimeout(function(){
          if (i === 1){
              price = fs.readFileSync("newfile.txt").toString(); 
              if (price !== ''){
                  //set quote in state as price
                  show_quote(price)
              }
          }
          else{
              if (price === ''){
                  price = fs.readFileSync("newfile.txt").toString();
                  if (price !== ''){
                      //set quote in state as price
                      show_quote(price)
                  }
              }
          }
  
  
  
      }, 1000);
  };
  
  function show_quote(price){
      console.log('show quote price is ', price);
      
      
  
  
  }
  
  
  
  //console.log("pickup function price is ", price)
  
  