
const query_exchange_rate = require('./query_exchange_rate')



// 3 days -> 3 months; distance to the min 
const calc_price_change = async (store_currency, buyer_currency,start_date, end_date) => {
    const start = start_date.substring(0,10)
    const end = end_date.substring(0,10)

    //var start_format = start.substring(0,4)+'-'+substring(0,10)+'-'+date_format(start.getDate()-1);
    //var end_format = end.getFullYear()+'-'+date_format(end.getMonth()+1)+'-'+date_format(end.getDate());

    const history_rate = await query_exchange_rate(start, end, store_currency, buyer_currency)
    console.log("history_rate is ", history_rate)
    const perc_change= find_min_max(history_rate, buyer_currency, start, end)
    return perc_change
};
  
//calc_price_change('USD','GBP','2020-05-10T01:27:21Z','2020-05-17T00:13:35Z')
module.exports = calc_price_change;  


function find_min_max(rate, buyer_currency, start, end){
    var rate_list = []

    var month, day;
    var dateI = new Date();
    dateI.setDate(dateI.getDate() - 1);

    var start_date = new Date();
    var end_date = new Date();

    console.log("1start date is ", start_date)
    console.log("1end date is ", end_date)
    
    
    


    start_date.setDate(start.substring(8,))
    console.log("start.substring(8,) is ", start.substring(8,))
    console.log("start date is ", start_date)
    start_date.setMonth(parseInt(start.substring(5,7))-1)
    console.log("start.substring(5,7) is ", start.substring(5,7))
    console.log("start date is ", start_date)
    start_date.setFullYear(parseInt(start.substring(0,5)))
    console.log("start.substring(0,5) is ", start.substring(0,4))
    console.log("start date is ", start_date)

    end_date.setDate(parseInt(end.substring(8,))+1)
    end_date.setMonth(parseInt(end.substring(5,7))-1)
    end_date.setFullYear(parseInt(end.substring(0,5)))

    console.log("start date is ", start_date)
    console.log("end date is ", end_date)

    const difference_day = (end_date - start_date)/(1000*60*60*24)

    console.log("difference_day is ", difference_day)

    dateI = end_date


    for (var i=0; i<difference_day+1; i++){
        dateI.setDate(dateI.getDate() - 1);
        console.log('date is ', dateI)

        dateI_format = dateI.getFullYear()+'-'+date_format(dateI.getMonth()+1)+'-'+date_format(dateI.getDate());

        if (rate[dateI_format]!== undefined){
            // 3 month list
            rate_list.push(rate[dateI_format][buyer_currency])
            // 1 month list
        }
    }

    
    const max = Math.max.apply(Math, rate_list) 
    const min = Math.min.apply(Math, rate_list)
    const perc_change = (max-min)/min

    const list = [[max, min]]
    console.log(list)
    console.log(perc_change)
    
    return perc_change
}

function date_format(num){
    if (num<10){
        return '0'+num
    }
    else {
        return num
    }
}