webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./functions/price_elasticity.js":
/*!***************************************!*\
  !*** ./functions/price_elasticity.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var price_elasticity = function price_elasticity(sales, product_price, slope) {
  var avgSales = function avgSales(_avgSales) {
    return sales.reduce(function (a, b) {
      return a + b;
    }, 0) / sales.length;
  };

  var avgProductPrice = function avgProductPrice(_avgProductPrice) {
    return product_price.reduce(function (a, b) {
      return a + b;
    }, 0) / product_price.length;
  };

  console.log(avgSales);
  console.log(avgProductPrice);
  var perc_price_change = 1 / avgProductPrice;
  var perc_revenue_change = slope / avgSales;
  var elasticity = perc_revenue_change / perc_price_change;
  console.log(elasticity);
};

module.exports = price_elasticity;
price_elasticity([1, 2], [2, 3], 5);

/***/ })

})
//# sourceMappingURL=detect_transactions.js.9636433fc0f9b18beb1c.hot-update.js.map