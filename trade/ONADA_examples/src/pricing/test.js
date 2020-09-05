// import 
let a = require('./test2');
let position = require('../positionGenerator');


// connect to ONADA
let common = require('../lib/common');
let config = require('../lib/config');

let argv = require('yargs')
.alias('config', 'c')
.nargs('config', 1)
.describe('config', "v20 Configuration File to use")
.default('config', config.defaultConfigFile())
.argv;

let conf = new config.Config(argv.config);
let ctx = conf.createContext();
var price = '';
var trade_direction = position.positionIndicator('USD','GBP','100');


ctx.pricing.get(
    conf.activeAccount,
    {
        //instruments: instrument1,
        instruments: "GBP/USD",
    },
    (response) => {
        var obj = JSON.parse(response['rawBody']);
        if (trade_direction === "buy"){
            price = obj.prices[0].asks
        }
        else if (trade_direction === "sell"){
            price = obj.prices[0].bids
        }
        // indicate_trade_price is the price from ONADA
        var indicate_trade_price = price[0].price 
        console.log(indicate_trade_price) 
    }
)    


  