import store from 'store-js';

const getPearsonCorrelation = require('./calc_correlation')

const change_format2 = (allList) => {
    let myMap = new Map();
    let countryListMap = new Map();
    //console.log("all list is ", alllist)

    const store_currency = allList[3]
    //localStorage.setItem('store_currency', store_currency);
    /*
    if(window.localStorage) {
        // localStorage can be used
        localStorage.setItem('store_currency', store_currency);
      } else {
        // can't be used
        //localStorage.setItem('store_currency', store_currency);
        console.log("error in localstorage")
      }*/
    

    const list = allList[1]
   // try{
    console.log("list in format is ", list)
    // i is currency iterator
    for (var i=0; i<list.length; i++){
        //console.log("i is ", i)
        const currency = list[i][0]
        const detail = list[i][3]
        const current_level = list[i][2]
        const country_list = list[i][1]

        countryListMap.set(currency, country_list)
        //console.log("currency is ", currency)

        // j is products/all iterator
        let map2 = new Map();
        for (var j=0; j<detail.length; j++){
            //console.log("j is ", j)
            var date_list = []
            var revenue_list = []
            var fx_list = []


            const product_id = list[i][3][j][0]
            for (var k=0; k<list[i][3][j][1].length; k++){
                    
                date_list.push(list[i][3][j][1][k][0])
                //date_list.push('*')
                revenue_list.push(parseFloat(list[i][3][j][1][k][1][0]))
                //revenue_list.push('*')
                fx_list.push(parseFloat(list[i][3][j][1][k][1][1]))
                //fx_list.push('*')
            }
            map2.set(product_id, [date_list, revenue_list, fx_list, current_level, country_list])
        }
        myMap.set(currency, map2)

    }
    //console.log("myMap is ", myMap)

    const product_id_title = allList[2]
    let product_id_title_map = new Map();
    let product_id_price_map = new Map();

    //console.log('product_id_title is ', product_id_title)
    
    try{
        for (var k=0; k<product_id_title.length; k++){
            product_id_title_map.set(product_id_title[k][0],product_id_title[k][1])
            product_id_price_map.set(product_id_title[k][0],product_id_title[k][2])
        }
    } catch(error){
        console.log("error id title")
    }

    // build today fx map
    let fx_map = new Map();
    try{
        fx_list = allList[4]
        console.log("fx_list length is ", fx_list.length)
        for (var f=0;f<fx_list.length;f++){
            fx_map.set(fx_list[f][0], fx_list[f][1])
        }

    } catch(error){
        console.log("fx_list length error")
    }
    

    console.log("fx_map is ", fx_map)


    // build perc change map
    let perc_change_map = new Map();
    try{
        const per_change_list = allList[5]
        console.log("per_change_list is ", per_change_list)
        console.log("per_change_list length is ", per_change_list.length)
        for (var g=0;g<per_change_list.length;g++){
            perc_change_map.set(per_change_list[g][0], per_change_list[g][1])
        }

    } catch(error){
        console.log("perc_change_map error")
    }


    console.log("perc_change_map is ", perc_change_map)

    return [myMap, product_id_title_map, product_id_price_map, store_currency, fx_map, countryListMap, perc_change_map]
}

module.exports = change_format2; 