webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./functions/price_sensitive_market.js":
/*!*********************************************!*\
  !*** ./functions/price_sensitive_market.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var linear_regression = __webpack_require__(/*! ./linear_regression */ "./functions/linear_regression.js");

var price_elasticity = __webpack_require__(/*! ./price_elasticity */ "./functions/price_elasticity.js");

var price_sensitive_market = function price_sensitive_market(tabs, maps) {
  //let myMap = new Map();
  //try{
  var elasticity_list = [];
  console.log("tabs.length is ", tabs);

  for (var i = 1; i < tabs.length; i++) {
    var selected_currency = tabs[i]['id'];
    console.log("selected_currency is ", selected_currency);
    var selected_data_all_products = maps.get(selected_currency);
    var selected_data = selected_data_all_products.get('all');
    var product_price_list = selected_data[2].map(function (element) {
      return Math.round(element * product_price * 100) / 100;
    });
    var slope = linear_regression(selected_data[1], product_price_list)[3];
    console.log("slope is ", slope);
    var elasticity = price_elasticity(selected_data[1], product_price_list, Math.abs(slope));
    console.log("elasticity is ", elasticity);

    if (myMap.has(elasticity)) {
      var value = myMap.get(elasticity);
      value.push(selected_currency);
      myMap.set(elasticity, value);
    } else {
      myMap.set(elasticity, [selected_currency]);
    }

    elasticity_list.push(elasticity);
  }

  elasticity_list.sort(function (a, b) {
    return b - a;
  });
  console.log("elasticity_list is ", elasticity_list);
  var currency_rank = [];

  for (var j = 1; j < tabs.length; j++) {
    var currency = elasticity_list[j];

    if (!currency_rank.includes(currency[0])) {
      currency_rank.push(currency);
    }
  }

  console.log("currency_rank is ", currency_rank); //localStorage.setItem('currency_elasticity_rank', currency_rank);

  return currency_rank; //} catch (error){
  // console.log("error in price sensitive market")
  //}
};

module.exports = price_sensitive_market;

/***/ })

})
//# sourceMappingURL=detect_transactions.js.e08bed1f6cf4b332cbc2.hot-update.js.map