
const query_exchange_rate = require('./query_exchange_rate')



// 3 days -> 3 months; distance to the min 
const calc_price_level = async (store_currency, buyer_currency) => {
    var level_list = []
    var date = new Date();
    var date2 = new Date();
    date2.setDate(date.getDate() - 91);
    
    var date_format = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate()-1);
    var date2_format = date2.getFullYear()+'-'+(date2.getMonth()+1)+'-'+(date2.getDate());

    const history_rate = await query_exchange_rate(date2_format, date_format, store_currency, buyer_currency)
    const [rate_list, today_rate] = find_min_max(history_rate, buyer_currency)
    //console.log(rate_list[0][0])

    for (var i=0; i<4; i++){
        //console.log(today_rate)

        const perc = (today_rate - rate_list[i][1]) / (rate_list[i][0] - rate_list[i][1])
        level_list.push(perc)
    }

    console.log(level_list)
    return level_list
    
    
};
  
calc_price_level('USD','GBP')
module.exports = calc_price_level;  


function find_min_max(rate, buyer_currency){
    var rate_list_3mon = []
    var rate_list_1mon = []
    var rate_list_1w = []
    var rate_list_3d = []

    var month, day;
    var dateI = new Date();
    dateI.setDate(dateI.getDate() - 1);

    for (var i=0; i<91; i++){
        dateI.setDate(dateI.getDate() - 1);
        // convert month format to mm
        if (dateI.getMonth()+1 < 10){
            month = '0' + (dateI.getMonth()+1)
        } else {
            month = (dateI.getMonth()+1)
        }
        // convert date format to dd
        if (dateI.getDate()<10){
            day = '0' + dateI.getDate()
        } else {
            day = dateI.getDate()
        }
        dateI_format = dateI.getFullYear()+'-'+month+'-'+day;

        if (rate[dateI_format]!== undefined){
            // 3 month list
            rate_list_3mon.push(rate[dateI_format][buyer_currency])
            // 1 month list
            if (i < 30){
                rate_list_1mon.push(rate[dateI_format][buyer_currency])
            }
            if (i < 8){
                rate_list_1w.push(rate[dateI_format][buyer_currency])
            }
            if (i < 3){
                rate_list_3d.push(rate[dateI_format][buyer_currency])
            }
        }
    }
    /*
    console.log(rate_list_3mon.length)
    console.log(rate_list_1mon.length)
    console.log(rate_list_1w.length)
    console.log(rate_list_3d.length)*/
    
    const max_3m = Math.max.apply(Math, rate_list_3mon) 
    const min_3m = Math.min.apply(Math, rate_list_3mon)
    const max_1m = Math.max.apply(Math, rate_list_1mon) 
    const min_1m = Math.min.apply(Math, rate_list_1mon) 
    const max_1w = Math.max.apply(Math, rate_list_1w)
    const min_1w = Math.min.apply(Math, rate_list_1w) 
    const max_3d = Math.max.apply(Math, rate_list_3d) 
    const min_3d = Math.min.apply(Math, rate_list_3d) 
    const list = [[max_3d, min_3d], [max_1w, min_1w], [max_1m, min_1m], [max_3m, min_3m]]
    //console.log(list)
    return [list, rate_list_3mon[0]]
}