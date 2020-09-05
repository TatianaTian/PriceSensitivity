webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./functions/fetch_from_map.js":
/*!*************************************!*\
  !*** ./functions/fetch_from_map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

var _storeJs = _interopRequireDefault(__webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js"));

var _polaris = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");

var _bodyParser = __webpack_require__(/*! body-parser */ "./node_modules/body-parser/index.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getPearsonCorrelation = __webpack_require__(/*! ./calc_correlation */ "./functions/calc_correlation.js");

var linear_regression = __webpack_require__(/*! ./linear_regression */ "./functions/linear_regression.js");

var fetch_from_map = function fetch_from_map(select, tabs, maps, product_id_title_map, dropdown_select, product_id_price_map, fx_map) {
  //try{
  if (select !== 0) {
    // fetch data for graphs
    var selected_currency = tabs[select]['id'];
    console.log("selected currency is ", selected_currency);
    console.log("dropdown_select is ", dropdown_select);
    var selected_data_all_products = maps.get(selected_currency);
    var selected_data = selected_data_all_products.get(dropdown_select);
    var product_price = product_id_price_map.get(dropdown_select);
    var today_fx = fx_map.get(selected_currency);
    console.log("product_price is ", product_price);
    var product_price_list = selected_data[2].map(function (element) {
      return Math.round(element * product_price * 100) / 100;
    });
    console.log("selected_data[1] is ", selected_data[1]);
    console.log("product_price_list is ", product_price_list);

    var _linear_regression = linear_regression(selected_data[1], product_price_list),
        _linear_regression2 = (0, _slicedToArray2["default"])(_linear_regression, 5),
        regression_fx = _linear_regression2[0],
        regression_sales = _linear_regression2[1],
        regression_predicted_sales = _linear_regression2[2],
        slope = _linear_regression2[3],
        intercept = _linear_regression2[4];

    var price_elasticity = price_elasticity(selected_data[1], product_price_list, Math.abs(slope));
    console.log("indicated_sale is ", Math.round((today_fx * product_price * slope + intercept) * 100) / 100);
    console.log("regression_fx is ", regression_fx);
    console.log("regression_sales is ", regression_sales);
    console.log("regression_predicted_sales is ", regression_predicted_sales);
    console.log("slope is ", slope);
    console.log("intercept is ", intercept);
    console.log("today_product_price is ", today_fx * product_price);
    console.log("selected data is ", selected_data);
    localStorage.setItem('date', selected_data[0]);
    localStorage.setItem('price', selected_data[1]);
    localStorage.setItem('exchange_rate', product_price_list);
    localStorage.setItem('current_level', selected_data[3]);
    localStorage.setItem('correlation', getPearsonCorrelation(selected_data[1], selected_data[2])); //localStorage.setItem('regression_fx', regression_fx);

    localStorage.setItem('regression_fx', regression_fx);
    localStorage.setItem('regression_sales', regression_sales);
    localStorage.setItem('regression_predicted_sales', regression_predicted_sales);
    localStorage.setItem('slope', Math.abs(slope));
    localStorage.setItem('today_product_price', Math.round(today_fx * product_price * 100) / 100);
    localStorage.setItem('indicated_sale', Math.round((today_fx * product_price * slope + intercept) * 100) / 100);
    console.log("done storing");
    /*
    console.log("localStorage.getItem('date') is",localStorage.getItem('date'))
    console.log("localStorage.getItem('price') is",localStorage.getItem('price'))
    console.log("localStorage.getItem('exchange_rate') is",localStorage.getItem('exchange_rate'))*/
    // find the product price
    // filter options

    console.log("selected_data_all_products is", selected_data_all_products);
    console.log('product_id_title_map is ', product_id_title_map);
    var num_dates = 0;
    var options = [];
    var product_options = [];

    var _iterator = _createForOfIteratorHelper(selected_data_all_products),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        num_dates = value[0].length;

        if (num_dates > 1) {
          var price_set = new Set(value[1]);
          var fx_set = new Set(value[2]);

          if (price_set.size > 1 && fx_set.size > 1) {
            console.log('use key to get name ', product_id_title_map.get(key));
            options.push({
              label: product_id_title_map.get(key),
              value: key
            });
            product_options.push(key);
          }
        }

        console.log(key + ' = ' + value);
      } // Find the most sensitive product

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var slope_map = new Map();
    var slope_list = [];
    console.log("product_options is ", product_options);

    for (var k = 0; k < product_options.length; k++) {
      if (product_options[k] !== 'all') {
        var product_price_list_rank;

        (function () {
          var product_price_rank = product_id_price_map.get(product_options[k]);
          console.log("product_price_rank is ", product_price_rank);
          product_price_list_rank = selected_data_all_products.get(product_options[k])[2].map(function (element) {
            return element * product_price_rank;
          });
          var slope_rank = linear_regression(selected_data_all_products.get(product_options[k])[1], product_price_list_rank)[3]; //slope_rank = product_price_rank/100*slope_rank

          console.log("slope_rank is ", slope_rank);

          if (slope_map.has(slope_rank)) {
            var value = slope_map.get(slope_rank);
            value.push(product_id_title_map.get(product_options[k]));
            slope_map.set(slope_rank, value);
          } else {
            console.log("product_id_title_map is ", product_id_title_map);
            console.log("product_options[k] is ", product_options[k]);
            console.log("product_id_title_map.get([product_options[k]] is ", product_id_title_map.get(product_options[k]));
            slope_map.set(slope_rank, product_id_title_map.get(product_options[k]));
          }

          slope_list.push(slope_rank);
        })();
      }
    }

    console.log("slope_map is ", slope_map);
    slope_list.sort(function (a, b) {
      return b - a;
    });
    console.log("slope_list is ", slope_list);
    var product_set_rank = new Set();

    for (var f = 0; f < slope_list.length; f++) {
      var product_options_list = slope_map.get(slope_list[f]);
      console.log("product_options_list is ", product_options_list);
      product_set_rank.add(product_options_list);
    }

    console.log("product_set_rank is ", product_set_rank);
    var product_array_rank = Array.from(product_set_rank);
    localStorage.setItem('product_array_rank', product_array_rank);
    localStorage.setItem('slope_rank', slope_list);
    console.log("product_array_rank is ", product_array_rank);
  } //} catch(err){
  //   console.log("no id")
  //}


  return options;
};

module.exports = fetch_from_map;

/***/ })

})
//# sourceMappingURL=detect_transactions.js.d4d65d8986fe9b4062e5.hot-update.js.map