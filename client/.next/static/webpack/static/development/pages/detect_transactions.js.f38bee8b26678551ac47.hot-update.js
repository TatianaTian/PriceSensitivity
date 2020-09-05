webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./functions/price_elasticity.js":
/*!***************************************!*\
  !*** ./functions/price_elasticity.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var price_elasticity = function price_elasticity(sales, product_price, slope) {
  var arrAvg = function arrAvg(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0) / arr.length;
  };

  var avgPrice = arrAvg(product_price);
  var avgSales = arrAvg(sales);
  console.log("avgSales is ", avgSales);
  console.log("avgPrice is ", avgPrice);
  var perc_price_change = 1 / avgPrice;
  var perc_revenue_change = slope / avgSales;
  var elasticity = perc_revenue_change / perc_price_change;
  console.log("elasticity is ", elasticity);
  return elasticity;
};

module.exports = price_elasticity;
price_elasticity([1, 2], [2, 3], 5);

/***/ })

})
//# sourceMappingURL=detect_transactions.js.f38bee8b26678551ac47.hot-update.js.map