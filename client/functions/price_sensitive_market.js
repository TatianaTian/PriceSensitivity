const linear_regression = require('./linear_regression')
const price_elasticity = require('./price_elasticity')

const price_sensitive_market = (tabs, maps) => {
    let myMap = new Map();
    //try{
    var elasticity_list = []
    console.log("tabs.length is ", tabs)
    console.log("maps is ", maps)


    for (var i=1;i<tabs.length;i++){
        const selected_currency = tabs[i]['id']
        console.log("selected_currency is ", selected_currency)

        const selected_data_all_products = maps.get(selected_currency)
        const selected_data = selected_data_all_products.get('all')
        const product_price = 100
        var product_price_list = selected_data[2].map(function(element) {
            return Math.round(element*product_price*100)/100;
        });

        if (selected_data[1].length>1){
            console.log("selected_data[1] is ", selected_data[1])
            console.log("product_price_list is ", product_price_list)
            const slope = linear_regression(selected_data[1],product_price_list)[3]
    
            console.log("slope is ", slope)
    
            const elasticity = price_elasticity(selected_data[1], product_price_list, Math.abs(slope))
    
            console.log("elasticity is ", elasticity)
            
            if (myMap.has(elasticity)){
                console.log("myMap has elasticity")
                var value = myMap.get(elasticity)
                value.push(selected_currency)
                myMap.set(elasticity, value)
            }else{
                console.log("myMap doesn't have elasticity")
                console.log("[selected_currency] is ", selected_currency)
                myMap.set(elasticity, [selected_currency])
            }
            elasticity_list.push(elasticity)
        }
    }

    elasticity_list.sort(function(a, b){return b-a});

    console.log("elasticity_list is ", elasticity_list)

    var currency_rank = []

    for (var j=0;j<elasticity_list.length;j++){
        var elasticity_element = elasticity_list[j]
        console.log("myMap.get(elasticity_element) is ", myMap.get(elasticity_element))
        if (!currency_rank.includes(myMap.get(elasticity_element)[0])){
            console.log("myMap.get(elasticity_element).length is ", myMap.get(elasticity_element).length)
            for (var k=0; k<myMap.get(elasticity_element).length;k++){
                currency_rank.push(myMap.get(elasticity_element)[k])
            }
            
        }
    }

    console.log("currency_rank is ", currency_rank)

    //localStorage.setItem('currency_elasticity_rank', currency_rank);
    return currency_rank
 //} catch (error){
   // console.log("error in price sensitive market")
    //}
}

module.exports = price_sensitive_market; 