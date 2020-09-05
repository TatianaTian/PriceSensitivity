import store from 'store-js';
import { KeypressListener } from '@shopify/polaris';
import { json } from 'body-parser';

const getPearsonCorrelation = require('./calc_correlation')
const linear_regression = require('./linear_regression')
const price_elasticity = require('./price_elasticity')

const fetch_from_map = (select, tabs, maps, product_id_title_map, dropdown_select, product_id_price_map, fx_map) => {


    //try{
        
        if (select !== 0){
            // fetch data for graphs
            const selected_currency = tabs[select]['id']
            console.log("selected currency is ", selected_currency)
            console.log("dropdown_select is ", dropdown_select)


            const selected_data_all_products = maps.get(selected_currency)
            const selected_data = selected_data_all_products.get(dropdown_select)
            const product_price = product_id_price_map.get(dropdown_select)
            const today_fx = fx_map.get(selected_currency)
            console.log("product_price is ", product_price)

            var product_price_list = selected_data[2].map(function(element) {
                return Math.round(element*product_price*100)/100;
            });

            console.log("selected_data[1] is ", selected_data[1]);
            console.log("product_price_list is ", product_price_list);
            const [regression_fx, regression_sales, regression_predicted_sales, slope, intercept] = linear_regression(selected_data[1],product_price_list)

            const elasticity = price_elasticity(selected_data[1], product_price_list, Math.abs(slope))

   
            console.log("indicated_sale is ", Math.round((today_fx*product_price*slope+intercept)*100)/100);
            console.log("regression_fx is ", regression_fx);
            console.log("regression_sales is ", regression_sales);
            console.log("regression_predicted_sales is ", regression_predicted_sales);
            console.log("slope is ", slope);
            console.log("intercept is ", intercept)
            console.log("today_product_price is ", today_fx*product_price);
            console.log("selected data is ", selected_data)

            localStorage.setItem('date', selected_data[0]);
            localStorage.setItem('price', selected_data[1]);
            localStorage.setItem('exchange_rate', product_price_list);
            localStorage.setItem('current_level', selected_data[3]);
            //localStorage.setItem('correlation', getPearsonCorrelation(selected_data[1],selected_data[2]));
            localStorage.setItem('correlation', elasticity);
            //localStorage.setItem('regression_fx', regression_fx);
            localStorage.setItem('regression_fx', regression_fx);
            localStorage.setItem('regression_sales', regression_sales);
            localStorage.setItem('regression_predicted_sales', regression_predicted_sales);
            localStorage.setItem('slope', Math.abs(slope));
            localStorage.setItem('today_product_price', Math.round(today_fx*product_price*100)/100);
            localStorage.setItem('indicated_sale', Math.round((today_fx*product_price*slope+intercept)*100)/100);

            console.log("done storing")
            /*
            console.log("localStorage.getItem('date') is",localStorage.getItem('date'))
            console.log("localStorage.getItem('price') is",localStorage.getItem('price'))
            console.log("localStorage.getItem('exchange_rate') is",localStorage.getItem('exchange_rate'))*/

            // find the product price







            // filter options
            console.log("selected_data_all_products is",selected_data_all_products)
            console.log('product_id_title_map is ', product_id_title_map)
            var num_dates = 0
            var options = []
            var product_options = []
            for (let [key, value] of selected_data_all_products) {
                num_dates = value[0].length
                if (num_dates>1){
                    var price_set = new Set(value[1]);
                    var fx_set = new Set(value[2]);
                    if (price_set.size>1 && fx_set.size>1){
                        console.log('use key to get name ', product_id_title_map.get(key))
                        options.push(
                            {
                                label:product_id_title_map.get(key), value: key
                            }
                        )
                        product_options.push(key)
                    }
                }
                console.log(key + ' = ' + value)
            }

            // Find the most sensitive product
            let slope_map = new Map()
            var slope_list = []

            console.log("product_options is ", product_options)

            for (var k=0; k<product_options.length; k++){
                if (product_options[k] !== 'all'){
                    const product_price_rank = product_id_price_map.get(product_options[k])
                    console.log("product_price_rank is ", product_price_rank)
                    
                    var product_price_list_rank = selected_data_all_products.get(product_options[k])[2].map(function(element) {
                        return element*product_price_rank;
                    });
    
                    const slope_rank = linear_regression(selected_data_all_products.get(product_options[k])[1],product_price_list_rank)[3]
                    //slope_rank = product_price_rank/100*slope_rank
    
                    console.log("slope_rank is ", slope_rank)
    
                    if (slope_map.has(slope_rank)){
                        const value = slope_map.get(slope_rank)
                        value.push(product_id_title_map.get(product_options[k]))
                        slope_map.set(slope_rank, value)
                    } else {
                        
                        console.log("product_id_title_map is ", product_id_title_map)
                        console.log("product_options[k] is ", product_options[k])
                        console.log("product_id_title_map.get([product_options[k]] is ", product_id_title_map.get(product_options[k]))
                        
                        slope_map.set(slope_rank, product_id_title_map.get(product_options[k]))
                    }
                    slope_list.push(slope_rank)
                }
            }

            console.log("slope_map is ", slope_map)
            slope_list.sort(function(a, b){return b-a});
            console.log("slope_list is ", slope_list)

            const product_set_rank = new Set();
            for (var f=0;f<slope_list.length;f++){
                const product_options_list = slope_map.get(slope_list[f])
                console.log("product_options_list is ", product_options_list)
                product_set_rank.add(product_options_list)
            }

            console.log("product_set_rank is ", product_set_rank)

            let product_array_rank = Array.from(product_set_rank);
            localStorage.setItem('product_array_rank', product_array_rank);
            localStorage.setItem('slope_rank', slope_list);

            console.log("product_array_rank is ", product_array_rank)
        }

        



    //} catch(err){
     //   console.log("no id")
    //}
    
    return options
}

module.exports = fetch_from_map; 

