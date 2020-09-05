global.fetch = require("node-fetch");





const query_exchange_rate = async (start, end, store_currency, buyer_currency) => {
   /* const path = 'https://api.exchangeratesapi.io/history?start_at=' + start + '&end_at=' + end + '&base=' + store_currency + '&symbols=' + buyer_currency
    //const path = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-01-02&base=USD&symbols=JPY'
    //console.log('path is ', path)
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const orderJson = await response.json();


    console.log(orderJson.rates)*/
    

    

    if (start === end){
        var current_date = ''
        rates = await query_now(start, end, store_currency, buyer_currency)
        current_date = start
        if (rates[start] === undefined){
            var d = new Date(start);
            //console.log("d1 is ", d)
            d.setDate(d.getDate() - 1);
            const new_date = d.getFullYear()+'-'+date_format(d.getMonth()+1)+'-'+date_format(d.getDate()+1)
            //console.log("d.getDate() is ", d.getDate())
            //console.log("new date 1 is ", new_date)
            current_date = new_date
            rates = await query_now(new_date, new_date, store_currency, buyer_currency)
            if (rates[new_date] === undefined){
                d.setDate(d.getDate() - 1);
                const new_date = d.getFullYear()+'-'+date_format(d.getMonth()+1)+'-'+date_format(d.getDate()+1)
                //console.log("new date 2 is ", new_date)
                current_date = new_date
                rates = await query_now(new_date, new_date, store_currency, buyer_currency)
                if (rates[new_date] === undefined){
                    d.setDate(d.getDate() - 1);
                    const new_date = d.getFullYear()+'-'+date_format(d.getMonth()+1)+'-'+date_format(d.getDate()+1)
                    current_date = new_date
                    //console.log(new_date)
                    rates = await query_now(new_date, new_date, store_currency, buyer_currency)
                    if (rates[new_date] === undefined){
                        d.setDate(d.getDate() - 1);
                        const new_date = d.getFullYear()+'-'+date_format(d.getMonth()+1)+'-'+date_format(d.getDate()+1)
                        current_date = new_date
                        //console.log(new_date)
                        rates = await query_now(new_date, new_date, store_currency, buyer_currency)
                    }
                }
            }
        }
        //console.log(rates)
        //console.log(current_date)

        return [rates, current_date]
    } 
    else{
        rates = await query_now(start, end, store_currency, buyer_currency)
        //console.log(rates)
        return rates
    }
}
    

module.exports = query_exchange_rate; 


var today = new Date();
today = today.getFullYear()+'-'+date_format(today.getMonth()+1)+'-'+today.getDate()

//today = today.substring(0, 10)
//console.log("today is ", today)
query_exchange_rate(today,today,'USD','GBP')
// https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-01-02&base=USD`
// product price = store currency price * query exchange rate



async function query_now(start, end, store_currency, buyer_currency){
    const path = 'https://api.exchangeratesapi.io/history?start_at=' + start + '&end_at=' + end + '&base=' + store_currency + '&symbols=' + buyer_currency
    //const path = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-01-02&base=USD&symbols=JPY'
    //console.log('path is ', path)
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const orderJson = await response.json();


    //console.log(orderJson.rates)


    return orderJson.rates
}


function date_format(num){
    if (num<10){
        return '0'+num
    }
    else {
        return num
    }
}