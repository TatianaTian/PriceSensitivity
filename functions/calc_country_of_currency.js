const country_to_currency = require('./country_to_currency')

const calc_country_of_currency = (currency, country_set) => {
    var country_list = []
    const iterator1 = country_set.values();
    //console.log(country_set)
    //console.log("country_set is", country_set)
    //console.log("country_set size is", country_set.size)
    for (i=0; i<country_set.size; i++){
        //console.log(i)
        const country = iterator1.next().value
        //console.log("country is ", country)
        const currency_the_country = country_to_currency(country)
        //console.log("currency_the_country is ", currency_the_country)
        if (currency_the_country === currency){
            country_list.push(country)
        }
        //currency_list.push(currency)
        //country_list.push(country)
    }
    //console.log(currency_list)
    //console.log(country_list)
    /*
    const iterator2 = currency_set.values();
    for (j=0; j<currency_set.size; j++){
        const currency = iterator2.next().value
        var temp_list = []
        for (k=0; k<currency_list.length; k++){
            if (currency  === currency_list[k]){
                temp_list.push(country_list[k])
            }
        }
        map_list.push(temp_list)
    }
    return map_list*/
    //console.log(country_list)
    return country_list
}

module.exports = calc_country_of_currency; 

let country_set = new Set()
country_set.add('GB')
country_set.add('CA')
country_set.add('FR')
country_set.add('DE')
country_set.add('IT')
//const country_set = new Set( 'GB', 'CA', 'FR', 'DE', 'IT' )

calc_country_of_currency('GBP', country_set)