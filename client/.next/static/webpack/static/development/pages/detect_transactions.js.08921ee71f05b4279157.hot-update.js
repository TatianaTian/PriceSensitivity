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

  var perc_price_change = 1 / avgProductPrice;
  var perc_revenue_change = slope / avgSales;
  var elasticity = perc_revenue_change / perc_price_change;
  console.log(elasticity);
};

module.exports = price_elasticity;

/***/ })

})
//# sourceMappingURL=detect_transactions.js.08921ee71f05b4279157.hot-update.js.map