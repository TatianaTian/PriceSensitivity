webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./functions/change_format2.js":
/*!*************************************!*\
  !*** ./functions/change_format2.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _storeJs = _interopRequireDefault(__webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js"));

var getPearsonCorrelation = __webpack_require__(/*! ./calc_correlation */ "./functions/calc_correlation.js");

var change_format2 = function change_format2(allList) {
  var myMap = new Map();
  var countryListMap = new Map(); //console.log("all list is ", alllist)

  var store_currency = allList[3]; //localStorage.setItem('store_currency', store_currency);

  /*
  if(window.localStorage) {
      // localStorage can be used
      localStorage.setItem('store_currency', store_currency);
    } else {
      // can't be used
      //localStorage.setItem('store_currency', store_currency);
      console.log("error in localstorage")
    }*/

  var list = allList[1]; // try{

  console.log("list in format is ", list); // i is currency iterator

  for (var i = 0; i < list.length; i++) {
    //console.log("i is ", i)
    var currency = list[i][0];
    var detail = list[i][3];
    var current_level = list[i][2];
    var country_list = list[i][1];
    countryListMap.set(currency, country_list); //console.log("currency is ", currency)
    // j is products/all iterator

    var map2 = new Map();

    for (var j = 0; j < detail.length; j++) {
      //console.log("j is ", j)
      var date_list = [];
      var revenue_list = [];
      var fx_list = [];
      var product_id = list[i][3][j][0];

      for (var k = 0; k < list[i][3][j][1].length; k++) {
        date_list.push(list[i][3][j][1][k][0]); //date_list.push('*')

        revenue_list.push(parseFloat(list[i][3][j][1][k][1][0])); //revenue_list.push('*')

        fx_list.push(parseFloat(list[i][3][j][1][k][1][1])); //fx_list.push('*')
      }

      map2.set(product_id, [date_list, revenue_list, fx_list, current_level, country_list]);
    }

    myMap.set(currency, map2);
  } //console.log("myMap is ", myMap)


  var product_id_title = allList[2];
  var product_id_title_map = new Map();
  var product_id_price_map = new Map(); //console.log('product_id_title is ', product_id_title)

  try {
    for (var k = 0; k < product_id_title.length; k++) {
      product_id_title_map.set(product_id_title[k][0], product_id_title[k][1]);
      product_id_price_map.set(product_id_title[k][0], product_id_title[k][2]);
    }
  } catch (error) {
    console.log("error id title");
  } // build today fx map


  var fx_map = new Map();

  try {
    fx_list = allList[4];
    console.log("fx_list length is ", fx_list.length);

    for (var f = 0; f < fx_list.length; f++) {
      fx_map.set(fx_list[f][0], fx_list[f][1]);
    }
  } catch (error) {
    console.log("fx_list length error");
  }

  console.log("fx_map is ", fx_map);
  return [myMap, product_id_title_map, product_id_price_map, store_currency, fx_map];
};

module.exports = change_format2;

/***/ })

})
//# sourceMappingURL=detect_transactions.js.07b7ddfeb18967310906.hot-update.js.map