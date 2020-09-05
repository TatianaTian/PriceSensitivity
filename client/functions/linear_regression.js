var jsregression = require('js-regression');

const linear_regression = (sales, exchange_rate)=>{
    
    var [myMap, exchange_rate_round, sales_round] = reformat_data(sales, exchange_rate)
    //console.log("data is ", data)
    const [m, b] = findLineByLeastSquares(exchange_rate_round, sales_round)
    /*
    var regression = new jsregression.LinearRegression(  {alpha: 0.001, // 
        iterations: 300,
        lambda: 0.0});
    console.log("here")
    var model = regression.fit(data);
    */
    let myMap2 = new Map();
    myMap2 = myMap

    // sort exchange rate
    exchange_rate_round.sort(function(a, b){return a-b});
    var regression_fx = []
    var regression_sales = []
    var regression_predicted_sales = []
    
    for (j=0;j<exchange_rate_round.length;j++){
        regression_fx.push(exchange_rate_round[j])
        regression_sales.push(myMap2.get(exchange_rate_round[j]))
        
        regression_predicted_sales.push(m*exchange_rate_round[j]+b)
        console.log("predicted number is ", m*exchange_rate_round[j]+b)
    }
    console.log("m is ",m)
    console.log("b is ",b)
    return [regression_fx, regression_sales, regression_predicted_sales, Math.round(m*100)/100, Math.round(b*100)/100]
}

function reformat_data(sales, exchange_rate){
    var round_sales
    const exchange_rate_round = []
    const sales_round = []
    let myMap = new Map()
    for (i=0;i<exchange_rate.length;i++){
        var round_fx = Math.round(100*exchange_rate[i])/100;
        if (myMap.has(round_fx)){
            var sales_list = myMap.get(round_fx)
            round_sales = Math.round(100*sales[i])/100;
            sales_list.push(round_sales)
            myMap.set(round_fx,sales_list)
        }
        round_sales = Math.round(100*sales[i])/100;
        myMap.set(round_fx,[round_sales])
    }
    for (let [k, v] of myMap) {
        let sum = v.reduce((previous, current) => current += previous);
        let avg = sum / v.length;
        sales_round.push(avg)
        exchange_rate_round.push(k)
    }

    return [myMap, exchange_rate_round, sales_round]
}
 
module.exports = linear_regression; 


function findLineByLeastSquares(values_x, values_y) {
    var x_sum = 0;
    var y_sum = 0;
    var xy_sum = 0;
    var xx_sum = 0;
    var count = 0;

    /*
     * The above is just for quick access, makes the program faster
     */
    var x = 0;
    var y = 0;
    var values_length = values_x.length;

    if (values_length != values_y.length) {
        throw new Error('The parameters values_x and values_y need to have same size!');
    }

    /*
     * Above and below cover edge cases
     */
    if (values_length === 0) {
        return [ [], [] ];
    }

    /*
     * Calculate the sum for each of the parts necessary.
     */
    for (let i = 0; i< values_length; i++) {
        x = values_x[i];
        y = values_y[i];
        x_sum+= x;
        y_sum+= y;
        xx_sum += x*x;
        xy_sum += x*y;
        count++;
    }

    /*
     * Calculate m and b for the line equation:
     * y = x * m + b
     */
    var m = (count*xy_sum - x_sum*y_sum) / (count*xx_sum - x_sum*x_sum);
    var b = (y_sum/count) - (m*x_sum)/count;

    /*
     * We then return the x and y data points according to our fit
     */
    var result_values_x = [];
    var result_values_y = [];

    for (let i = 0; i < values_length; i++) {
        x = values_x[i];
        y = x * m + b;
        result_values_x.push(x);
        result_values_y.push(y);
    }
    console.log(result_values_x)
    console.log(result_values_y)
    return [m, b];
}


findLineByLeastSquares([0.921,0.922,0.926],[209.8,555.4,93.56])





//linear_regression([20,50,60],[4,9,7])

/*
var data = [];
data = [[1,2],[2,3],[3,4]]
 
// === Create the linear regression === //
var regression = new jsregression.LinearRegression();
// can also use default configuration: var regression = new jsregression.LinearRegression(); 
 
// === Train the linear regression === //
var model = regression.fit(data);
 
// === Print the trained model === //
console.log(model);
console.log(regression.transform([3]));
 
 /*
// === Testing the trained linear regression === //
var testingData = [];
for(var x = 1.0; x < 100.0; x += 1.0) {
  var actual_y = 2.0 + 5.0 * x + 2.0 * x * x + Math.random() * 1.0;
  var predicted_y = regression.transform([x, x * x]);
  console.log("actual: " + actual_y + " predicted: " + predicted_y); 
}*/
