module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Country_data.js":
/*!************************************!*\
  !*** ./components/Country_data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Country_data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 //import '../style/style.css'

const getPearsonCorrelation = __webpack_require__(/*! ../functions/calc_correlation */ "./functions/calc_correlation.js");

const string_to_list = __webpack_require__(/*! ../functions/string_to_list */ "./functions/string_to_list.js");

const fetch_from_map = __webpack_require__(/*! ../functions/fetch_from_map */ "./functions/fetch_from_map.js");


function Country_data(props) {
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('all');
  const handleSelectChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setSelected(value), []);
  console.log('props.product_id_title_map is ', props.product_id_title_map);
  var options = fetch_from_map(props.select, props.tabs, props.maps, props.product_id_title_map, selected, props.product_id_price_map, props.fx_map);
  const store_currency = props.store_currency;
  /*
  options = [
  {label: 'All products', value: 'allProducts'},
  {label: 'Oldest update', value: 'oldestUpdate'},
  {label: 'Most spent', value: 'mostSpent'},
  {label: 'Most orders', value: 'mostOrders'},
  {label: 'Last name A–Z', value: 'lastNameAlpha'},
  {label: 'Last name Z–A', value: 'lastNameReverseAlpha'},
  ];*/

  console.log("options are ", options);
  console.log("selected from dropdown is ", selected);
  console.log("on tab ", props.select);
  console.log("tabs are ", props.tabs);
  console.log("map is ", props.maps);
  const date_string = localStorage.getItem('date');
  const price_string = localStorage.getItem('price');
  const exchange_rate_string = localStorage.getItem('exchange_rate');
  const current_level_string = localStorage.getItem('current_level');
  const correlation = localStorage.getItem('correlation');
  const regression_fx_string = localStorage.getItem('regression_fx');
  const regression_sales_string = localStorage.getItem('regression_sales');
  const regression_predicted_sales_string = localStorage.getItem('regression_predicted_sales');
  const regression_slope = localStorage.getItem('slope');
  const today_product_price = localStorage.getItem('today_product_price');
  const product_array_rank_string = localStorage.getItem('product_array_rank');
  const slope_rank_string = localStorage.getItem('slope_rank');
  const indicated_sale = localStorage.getItem('indicated_sale');
  var date = [];
  var price = [];
  var exchange_rate = [];
  var current_level = [];
  var regression_fx = [];
  var regression_sales = [];
  var regression_predicted_sales = [];
  var product_array_rank = [];
  var slope_rank = [];
  var min_bar = 0;
  var max_bar = 0;
  var min_line = 0;
  var max_line = 0;
  var min_price_range = 0;
  var max_price_range = 0;
  var min_sales_range = 0;
  var max_sales_range = 0;

  if (date_string.includes(',')) {
    date = string_to_list(localStorage.getItem('date'), '');
    /*
    price = string_to_list(store.get('price'),'float')
    exchange_rate = string_to_list(store.get('exchange_rate'),'float')
    current_level = string_to_list(store.get('current_level'),'float')  */

    price = string_to_list(price_string, 'float');
    exchange_rate = string_to_list(exchange_rate_string, 'float');
    current_level = string_to_list(current_level_string, 'float');
    regression_fx = string_to_list(regression_fx_string, 'float');
    regression_sales = string_to_list(regression_sales_string, 'float');
    regression_predicted_sales = string_to_list(regression_predicted_sales_string, 'float');
    product_array_rank = string_to_list(product_array_rank_string, '');
    slope_rank = string_to_list(slope_rank_string, 'float');
    min_price_range = Math.min.apply(Math, regression_fx);
    max_price_range = Math.max.apply(Math, regression_fx);
    min_sales_range = Math.min.apply(Math, regression_sales);
    max_sales_range = Math.max.apply(Math, regression_sales);
    min_bar = Math.min.apply(Math, price) * 0.8;
    max_bar = (Math.max.apply(Math, price) - min_bar) * 2.2 + min_bar;
    max_line = Math.max.apply(Math, exchange_rate);
    min_line = max_line - (max_line - Math.min.apply(Math, exchange_rate)) * 2.2;
    console.log("y is ", [min_bar, max_bar, min_line, max_line]);
  } else {
    date = [date_string];
    price = [price_string];
    exchange_rate = [exchange_rate_string];
    current_level = string_to_list(store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('current_level'), 'float');
  }

  console.log("regression_fx is ", regression_fx);
  console.log("regression_sales is ");
  console.log("regression_predicted_sales is ", regression_predicted_sales);
  console.log("product_array_rank is ", product_array_rank);
  console.log("slope_rank is ", slope_rank); //console.log("product_array_rank[0] is ", product_array_rank[0]==="");

  console.log("indicated_sale is ", indicated_sale); //const level = store.get('level') 

  var r = Math.min(Math.abs(parseFloat(correlation)), 3); //r = parseInt(Math.min(Math.abs(getPearsonCorrelation([34,37,24,67,42 ],[1.23,1.22, 1.23, 1.24, 1.25])), 1) * 100)

  var doughnut = [r, 3 - r];
  var leve_num1 = [Math.max(current_level[0] * 100 - 2, 0), Math.max(current_level[1] * 100 - 2, 0), Math.max(current_level[2] * 100 - 2, 0), Math.max(current_level[3] * 100 - 2, 0)]; //console.log("level-num1 is ", leve_num1)

  var leve_num3 = [98 - leve_num1[0], 98 - leve_num1[1], 98 - leve_num1[2], 98 - leve_num1[3]]; //console.log("level-num3 is ", leve_num3)

  const leve_num2 = [2, 2, 2, 2];
  /*
  console.log("date is ", date)
  console.log("price is ", price)
  console.log("exchange_rate is ", exchange_rate)
  console.log("current_level is ", current_level)
  console.log("correlation is ", correlation)*/

  var color = '';
  var text = '';

  if (r < 1) {
    color = '#63b7af';
    text = 'LOW';
  } else if (r < 2) {
    color = '#ffa41b';
    text = 'MODERATE';
  } else {
    color = '#ff6f5e';
    text = 'HIGH';
  }

  const doughnutChartData = {
    labels: [text + ': ' + Math.round(Math.abs(correlation) * 100) / 100],
    datasets: [{
      //backgroundColor: ["#FF6D2D","#45853C"],
      backgroundColor: [color, "#ECECEC"],
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      data: doughnut
    }]
  };
  const doughnutChartOptions = {
    circumference: 1 * Math.PI,
    rotation: Math.PI,
    maintainAspectRatio: true,
    cutoutPercentage: 80,
    tooltips: {
      enabled: false
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        fontSize: 20,
        boxWidth: 0,
        fontColor: '#222831'
      }
    },
    pieceLabel: {
      render: 'value' + '%',
      fontColor: "white"
    },
    layout: {
      padding: {
        left: 80,
        right: 20,
        top: 20,
        bottom: 20
      }
    }
  };
  var lineChartData = {
    //labels: ["2020-05-08", "2020-05-09", "2020-05-10"],
    labels: date,
    //lables: [price[0],price[1],price[2]],
    datasets: [{
      yAxisID: 'A',
      type: "bar",
      label: "sales in store currency",
      fill: false,
      lineTension: 0,
      backgroundColor: "#63b7af",
      borderColor: "#63b7af",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgb(1, 2, 58)",
      pointBackgroundColor: "rgb(1, 2, 58)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(1, 2, 58)",
      pointHoverBorderColor: "rgb(1, 2, 58)",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      //data: [89.54, 96.8, 246.51],
      data: price,
      //data: [store.get('price')],
      spanGaps: false,
      barPercentage: 0.3
    }, {
      yAxisID: 'B',
      type: "line",
      label: "product price",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#ee8572",
      borderColor: "#ee8572",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#ee8572",
      pointBackgroundColor: "#ee8572",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#ee8572",
      pointHoverBorderColor: "#ee8572",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      //data: [0.8072950291, 0.8072950291, 0.8072950291],
      data: exchange_rate,
      //data: [store.get('exchange_rate')],
      spanGaps: false
    }]
  };
  var lineChartOptions = {
    maintainAspectRatio: true,
    tooltips: {
      enabled: true
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        },
        ticks: {
          min: min_bar,
          max: max_bar
        }
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        },
        ticks: {
          min: min_line,
          max: max_line
        }
      }],
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }]
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 20,
        bottom: 20
      }
    }
  };
  var lineRegressionChartData = {
    //labels: ["2020-05-08", "2020-05-09", "2020-05-10"],
    //labels: [0.8,0.9,1.0],
    labels: regression_fx,
    datasets: [{
      type: "line",
      label: "sales in store currency",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderWidth: 0,
      borderColor: "rgba(0, 0, 0, 0)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#ffa41b",
      pointBackgroundColor: "#ffa41b",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#ffa41b",
      pointHoverBorderColor: "#ffa41b",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      //data: [89.54, 96.8, 246.51],
      //data: [209, 555, 143],
      data: regression_sales,
      spanGaps: false,
      barPercentage: 0.3
    }, {
      type: "line",
      label: "fitted model",
      fill: false,
      backgroundColor: "#D3D3D3",
      borderColor: "#D3D3D3",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#D3D3D3",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#D3D3D3",
      pointHoverBorderColor: "#D3D3D3",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      //data: [100,200,300],
      data: regression_predicted_sales,
      spanGaps: false
    }]
  };
  var lineRegressionChartOptions = {
    maintainAspectRatio: true,
    tooltips: {
      enabled: true
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        //position: 'left',
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        } //ticks: {min: min_bar,
        //    max: max_bar}

      }],
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }]
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 20,
        bottom: 20
      }
    }
  };
  const barChartData = {
    //labels: ['China - Monthly CPI', 'US - Monthly CPI', 'China - Quarterly GDP','US - Aaa Corporate Bonds', 'US - S&P 500'],
    labels: product_array_rank,
    datasets: [{
      backgroundColor: ['#63b7af', "#ff6f5e", '#ffa41b', '#b2ebf2', '#35495e'],
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      //data: [0.65, 0.50, 0.47, 0.39, 0.37]
      data: slope_rank
    }]
  };
  const barChartOptions = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Sales change in " + store_currency + " with 1 " + props.tabs[props.select]['id'] + " price change"
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }],
      yAxes: [{
        barPercentage: 0.3,
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }]
    },
    layout: {
      padding: {
        left: 20,
        right: 80,
        top: 20,
        bottom: 20
      }
    }
  };
  const rangeChartData = {
    labels: ['past 3 days', 'past 1 week', 'past 1 month', 'past 3 months'],
    datasets: [{
      label: 'range',
      backgroundColor: '#35495e',
      stack: '3',
      data: leve_num1
    }, {
      backgroundColor: '#63b7af',
      stack: '3',
      data: leve_num2
    }, {
      label: 'range2',
      backgroundColor: '#35495e',
      stack: '3',
      data: leve_num3
    }]
  };
  const rangeChartOptions = {
    maintainAspectRatio: true,
    tooltips: {
      enabled: false
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        },
        ticks: {
          min: 0,
          max: 100,
          callback: function (value) {
            return value + "%";
          }
        }
      }],
      yAxes: [{
        stacked: true,
        barPercentage: 0.4,
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }]
    },
    layout: {
      padding: {
        left: 20,
        right: 80,
        top: 20,
        bottom: 20
      }
    }
  }; //console.log("height is ", [height2, h1, h2, h3])

  function renderTooltip1(props) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], _extends({
      id: "button-tooltip"
    }, props, {
      style: _objectSpread({
        backgroundColor: 'rgb(233,246,251)',
        padding: '3px 10px',
        color: 'rgb(1, 2, 58)',
        fontFamily: 'lato',
        borderRadius: 3
      }, props.style)
    }), __jsx("p", {
      className: "text_footnote"
    }, "The score is price elasticity. It is defined", __jsx("br", null), "as the % demand change per 1% price change.", __jsx("br", null), "When score < 1, the market has low price ", __jsx("br", null), "sensitivty; when score <2, the market has ", __jsx("br", null), "moderate price sensitivty; when the score", __jsx("br", null), "> 2, the market has high price sensitivity."));
  }

  function renderTooltip2(props) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], _extends({
      id: "button-tooltip"
    }, props, {
      style: _objectSpread({
        backgroundColor: 'rgb(233,246,251)',
        padding: '3px 10px',
        color: 'rgb(1, 2, 58)',
        fontFamily: 'lato',
        borderRadius: 3
      }, props.style)
    }), __jsx("p", {
      className: "text_footnote"
    }, "This is the ranking of products that you", __jsx("br", null), "have sold to this country based on how ", __jsx("br", null), "price sensitive they are. The x axis is", __jsx("br", null), "the estimated sales change when you reduce ", __jsx("br", null), "1 unit price."));
  }

  function renderTooltip3(props) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], _extends({
      id: "button-tooltip"
    }, props, {
      style: _objectSpread({
        backgroundColor: 'rgb(233,246,251)',
        padding: '3px 10px',
        color: 'rgb(1, 2, 58)',
        fontFamily: 'lato',
        borderRadius: 3
      }, props.style)
    }), __jsx("p", {
      className: "text_footnote"
    }, "The line is the product price in the local", __jsx("br", null), "currency by date; the bar is the sales in", __jsx("br", null), "the store currency by date."));
  }

  function renderTooltip4(props) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], _extends({
      id: "button-tooltip"
    }, props, {
      style: _objectSpread({
        backgroundColor: 'rgb(233,246,251)',
        padding: '3px 10px',
        color: 'rgb(1, 2, 58)',
        fontFamily: 'lato',
        borderRadius: 3
      }, props.style)
    }), __jsx("p", {
      className: "text_footnote"
    }, "After logging in, you can monitor bank", __jsx("br", null), "USD/CNY, markets USD/CNH, major ", __jsx("br", null), "brokers\u2019 market views, and upcoming ", __jsx("br", null), "events that will move USD/CNH. ", __jsx("span", {
      className: "highlight"
    }, "Avoid ", __jsx("br", null), "the hassle of self-monitoring exchange ", __jsx("br", null), "rates."), __jsx("br", null), __jsx("br", null), __jsx("a", {
      href: "https://www.nasdaq.com/articles/cnh-vs-cny-differences-between-two-yuan-2018-09-12"
    }, "Read more"), " on CNY vs CNH"));
  }

  function renderTooltip5(props) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], _extends({
      id: "button-tooltip"
    }, props, {
      style: _objectSpread({
        backgroundColor: 'rgb(233,246,251)',
        padding: '3px 10px',
        color: 'rgb(1, 2, 58)',
        fontFamily: 'lato',
        borderRadius: 3
      }, props.style)
    }), __jsx("p", {
      className: "text_footnote"
    }, "After logging in, you can monitor bank", __jsx("br", null), "USD/CNY, markets USD/CNH, major ", __jsx("br", null), "brokers\u2019 market views, and upcoming ", __jsx("br", null), "events that will move USD/CNH. ", __jsx("span", {
      className: "highlight"
    }, "Avoid ", __jsx("br", null), "the hassle of self-monitoring exchange ", __jsx("br", null), "rates."), __jsx("br", null), __jsx("br", null), __jsx("a", {
      href: "https://www.nasdaq.com/articles/cnh-vs-cny-differences-between-two-yuan-2018-09-12"
    }, "Read more"), " on CNY vs CNH"));
  }

  const Example1 = () => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["OverlayTrigger"], {
    placement: "bottom",
    delay: {
      show: 100,
      hide: 400
    },
    overlay: renderTooltip1
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegQuestionCircle"], null));

  const Example2 = () => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["OverlayTrigger"], {
    placement: "bottom",
    delay: {
      show: 100,
      hide: 400
    },
    overlay: renderTooltip2
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegQuestionCircle"], null));

  const Example3 = () => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["OverlayTrigger"], {
    placement: "bottom",
    delay: {
      show: 100,
      hide: 400
    },
    overlay: renderTooltip3
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegQuestionCircle"], null));

  const Example4 = () => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["OverlayTrigger"], {
    placement: "bottom",
    delay: {
      show: 100,
      hide: 400
    },
    overlay: renderTooltip4
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegQuestionCircle"], null));

  const Example5 = () => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["OverlayTrigger"], {
    placement: "bottom",
    delay: {
      show: 100,
      hide: 400
    },
    overlay: renderTooltip5
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegQuestionCircle"], null));

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    sectioned: false
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneHalf: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "Analytics on",
    labelInline: true,
    options: options,
    onChange: handleSelectChange,
    value: selected
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Sensitivity",
    sectioned: true
  }, __jsx(Example1, null), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    height: "100vh",
    data: doughnutChartData,
    options: doughnutChartOptions
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Most Price Sentitive Products in the Country",
    sectioned: true
  }, __jsx(Example2, null), product_array_rank[0] !== "" ? __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["HorizontalBar"], {
    height: "100vh",
    data: barChartData,
    options: barChartOptions
  }) : __jsx("p", null, "No enough data. Come back when you have more international orders :) You can do it!")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price And Sales By Date",
    sectioned: true
  }, __jsx(Example3, null), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    height: "220vh",
    data: lineChartData,
    options: lineChartOptions
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneHalf: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Sales And Prices Correlation",
    sectioned: true
  }, __jsx(Example4, null), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    height: "150vh",
    data: lineRegressionChartData,
    options: lineRegressionChartOptions
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Analytics",
    sectioned: true
  }, __jsx("p", null, __jsx("b", null, "Price range:"), " ", min_price_range, " ", props.tabs[props.select]['id'], " - ", max_price_range, " ", props.tabs[props.select]['id']), __jsx("br", null), __jsx("p", null, __jsx("b", null, "Sales range:"), " ", min_sales_range, " ", store_currency, " - ", max_sales_range, " ", store_currency, " per day"), __jsx("br", null), __jsx("p", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegArrowAltCircleDown"], null), " 1 ", props.tabs[props.select]['id'], " in price"), __jsx("br", null), __jsx("p", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegArrowAltCircleUp"], null), " ", regression_slope, " ", store_currency, " sales/day"), __jsx("br", null), __jsx("p", null, __jsx("b", null, "Current price:"), " ", today_product_price, " ", props.tabs[props.select]['id']), __jsx("br", null), __jsx("p", null, __jsx("b", null, "Projected sales:"), " ", indicated_sale, " ", store_currency, " per day"), __jsx("br", null))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "The current price level",
    sectioned: true
  }, __jsx(Example5, null), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["HorizontalBar"], {
    height: "100vh",
    data: rangeChartData,
    options: rangeChartOptions
  }))));
}

/***/ }),

/***/ "./components/Main_data.js":
/*!*********************************!*\
  !*** ./components/Main_data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main_data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapChart */ "./components/MapChart.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/price_sensitive_market */ "./functions/price_sensitive_market.js");
/* harmony import */ var _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const country_code_to_name = __webpack_require__(/*! ../functions/country_code_to_name */ "./functions/country_code_to_name.js"); //import france_flag from '../images/france_flag';


function Main_data(props) {
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const currency_list = _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5___default()(props.tabs, props.maps);
  console.log("currency_list is", currency_list);
  var rows_price_sensitive = [//['Emerald Silk Gown', '$875.00'],
    //['Mauve Cashmere Scarf', '$230.00'],
  ];
  var rows_price_range = [//['Emerald Silk Gown', '$875.00'],
    //['Mauve Cashmere Scarf', '$230.00'],
  ];
  const countryListMap = props.countryListMap;
  const percChangeMap = props.perc_change_map;
  console.log("countryListMap is", countryListMap);
  console.log("percChangeMap is", percChangeMap); // price elasticity

  for (var i = 0; i < currency_list.length; i++) {
    const currency = currency_list[i];
    const country = countryListMap.get(currency);
    console.log("currency is", currency);
    console.log("country is", country);
    var country_string = '';

    for (var j = 0; j < country.length; j++) {
      if (country_code_to_name(country[j]) != undefined) {
        country_string += country_code_to_name(country[j]) + ', ';
      }
    }

    var country_string = country_string.substring(0, country_string.length - 2);
    console.log("country_string is", country_string);
    rows_price_sensitive.push([currency, country_string]);
    console.log("percChangeMap.get(currency_list[i]) is ", percChangeMap.get(currency_list[i]));
    const perc = Math.round(percChangeMap.get(currency_list[i]) * 10000) / 100 + '%';
    rows_price_range.push([currency, perc]);
  }

  var rows_price_change = [['EUR', '12%'], ['CAD', '15%'], ['GBP', '17%']];
  var rows_price_volatie = [['EUR', 'France, Italy, Germany'], ['CAD', 'Canada'][('GBP', 'UK')]];
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Range Analyzed",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'text'],
    headings: ['Currency', 'Price Moving % Range'],
    rows: rows_price_range
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Sentitive Markets",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'text'],
    headings: ['Currency', 'Price Sensitive Country'],
    rows: rows_price_sensitive
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Volatile Markets",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'text'],
    headings: ['Currency', 'Price Volatile Country'],
    rows: rows_price_sensitive
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Change Magnitue",
    sectioned: true
  }, __jsx(_MapChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setTooltipContent: setContent
  }), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, null, content))));
}

function displayBlock(currency) {
  render({
    currency
  });
}

/***/ }),

/***/ "./components/MapChart.js":
/*!********************************!*\
  !*** ./components/MapChart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-fetch */ "d3-fetch");
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-simple-maps */ "react-simple-maps");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const colorScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().domain([0.29, 0.68]).range(["#ffeeeb", "#ff5233"]);

const MapChart = ({
  setTooltipContent
}) => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(d3_fetch__WEBPACK_IMPORTED_MODULE_1__["csv"])(`/vulnerability.csv`).then(data => {
      setData(data);
    });
  }, []);
  return __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__["ComposableMap"], {
    projectionConfig: {
      rotate: [-10, 0, 0],
      scale: 150
    } //width={180}
    //height={180}
    ,
    "data-tip": ""
  }, __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__["Sphere"], {
    stroke: "#E4E5E6",
    strokeWidth: 0.5
  }), __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__["Graticule"], {
    stroke: "#E4E5E6",
    strokeWidth: 0.5
  }), data.length > 0 && //<ZoomableGroup zoom={1}>
  __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__["Geographies"], {
    geography: geoUrl
  }, ({
    geographies
  }) => geographies.map(geo => {
    const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
    return __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__["Geography"], {
      key: geo.rsmKey,
      geography: geo,
      onMouseEnter: () => {
        const {
          NAME,
          POP_EST
        } = geo.properties;
        setTooltipContent(`${NAME} — ${Math.round(POP_EST / 1000000)}%`);
      },
      onMouseLeave: () => {
        setTooltipContent("");
      },
      fill: d ? colorScale(d["2017"]) : "#F5F4F6",
      style: {
        hover: {
          fill: "#abf0e9",
          outline: "none"
        }
      }
    });
  })) // </ZoomableGroup>
  );
};

/* harmony default export */ __webpack_exports__["default"] = (MapChart);

/***/ }),

/***/ "./functions/calc_correlation.js":
/*!***************************************!*\
  !*** ./functions/calc_correlation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const getPearsonCorrelation = (x, y) => {
  var shortestArrayLength = 0;

  if (x.length == y.length) {
    shortestArrayLength = x.length;
  } else if (x.length > y.length) {
    shortestArrayLength = y.length;
    console.error('x has more items in it, the last ' + (x.length - shortestArrayLength) + ' item(s) will be ignored');
  } else {
    shortestArrayLength = x.length;
    console.error('y has more items in it, the last ' + (y.length - shortestArrayLength) + ' item(s) will be ignored');
  }

  var xy = [];
  var x2 = [];
  var y2 = [];

  for (var i = 0; i < shortestArrayLength; i++) {
    xy.push(x[i] * y[i]);
    x2.push(x[i] * x[i]);
    y2.push(y[i] * y[i]);
  }

  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_x2 = 0;
  var sum_y2 = 0;

  for (var i = 0; i < shortestArrayLength; i++) {
    sum_x += x[i];
    sum_y += y[i];
    sum_xy += xy[i];
    sum_x2 += x2[i];
    sum_y2 += y2[i];
  }

  var step1 = shortestArrayLength * sum_xy - sum_x * sum_y;
  var step2 = shortestArrayLength * sum_x2 - sum_x * sum_x;
  var step3 = shortestArrayLength * sum_y2 - sum_y * sum_y;
  var step4 = Math.sqrt(step2 * step3);
  var answer = step1 / step4;
  /*
  console.log("sum_y2 is ", sum_y2)
  console.log("sum_y is ", sum_y)
  console.log("shortestArrayLength is ", shortestArrayLength)
  console.log("step1 is ", step1)
  console.log("step2 is ", step2)
  console.log("step3 is ", step3)
  console.log("step4 is ", step4)
  console.log("answer is ", answer)*/

  return answer;
};

module.exports = getPearsonCorrelation;
getPearsonCorrelation([275.88, 273.03, 175.43], [0.8072950291, 0.8072950291, 0.8072950291]);

/***/ }),

/***/ "./functions/change_format2.js":
/*!*************************************!*\
  !*** ./functions/change_format2.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storeJs = _interopRequireDefault(__webpack_require__(/*! store-js */ "store-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getPearsonCorrelation = __webpack_require__(/*! ./calc_correlation */ "./functions/calc_correlation.js");

const change_format2 = allList => {
  let myMap = new Map();
  let countryListMap = new Map(); //console.log("all list is ", alllist)

  const store_currency = allList[3]; //localStorage.setItem('store_currency', store_currency);

  /*
  if(window.localStorage) {
      // localStorage can be used
      localStorage.setItem('store_currency', store_currency);
    } else {
      // can't be used
      //localStorage.setItem('store_currency', store_currency);
      console.log("error in localstorage")
    }*/

  const list = allList[1]; // try{

  console.log("list in format is ", list); // i is currency iterator

  for (var i = 0; i < list.length; i++) {
    //console.log("i is ", i)
    const currency = list[i][0];
    const detail = list[i][3];
    const current_level = list[i][2];
    const country_list = list[i][1];
    countryListMap.set(currency, country_list); //console.log("currency is ", currency)
    // j is products/all iterator

    let map2 = new Map();

    for (var j = 0; j < detail.length; j++) {
      //console.log("j is ", j)
      var date_list = [];
      var revenue_list = [];
      var fx_list = [];
      const product_id = list[i][3][j][0];

      for (var k = 0; k < list[i][3][j][1].length; k++) {
        date_list.push(list[i][3][j][1][k][0]); //date_list.push('*')

        revenue_list.push(parseFloat(list[i][3][j][1][k][1][0])); //revenue_list.push('*')

        fx_list.push(parseFloat(list[i][3][j][1][k][1][1])); //fx_list.push('*')
      }

      map2.set(product_id, [date_list, revenue_list, fx_list, current_level, country_list]);
    }

    myMap.set(currency, map2);
  } //console.log("myMap is ", myMap)


  const product_id_title = allList[2];
  let product_id_title_map = new Map();
  let product_id_price_map = new Map(); //console.log('product_id_title is ', product_id_title)

  try {
    for (var k = 0; k < product_id_title.length; k++) {
      product_id_title_map.set(product_id_title[k][0], product_id_title[k][1]);
      product_id_price_map.set(product_id_title[k][0], product_id_title[k][2]);
    }
  } catch (error) {
    console.log("error id title");
  } // build today fx map


  let fx_map = new Map();

  try {
    fx_list = allList[4];
    console.log("fx_list length is ", fx_list.length);

    for (var f = 0; f < fx_list.length; f++) {
      fx_map.set(fx_list[f][0], fx_list[f][1]);
    }
  } catch (error) {
    console.log("fx_list length error");
  }

  console.log("fx_map is ", fx_map); // build perc change map

  let perc_change_map = new Map();

  try {
    const per_change_list = allList[5];
    console.log("per_change_list is ", per_change_list);
    console.log("per_change_list length is ", per_change_list.length);

    for (var g = 0; g < per_change_list.length; g++) {
      perc_change_map.set(per_change_list[g][0], per_change_list[g][1]);
    }
  } catch (error) {
    console.log("perc_change_map error");
  }

  console.log("perc_change_map is ", perc_change_map);
  return [myMap, product_id_title_map, product_id_price_map, store_currency, fx_map, countryListMap, perc_change_map];
};

module.exports = change_format2;

/***/ }),

/***/ "./functions/country_code_to_name.js":
/*!*******************************************!*\
  !*** ./functions/country_code_to_name.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let myMap = new Map([['AF', 'Afghanistan'], ['AL', 'Albania'], ['DZ', 'Algeria'], ['AS', 'American Samoa'], ['AD', 'Andorra'], ['AO', 'Angola'], ['AI', 'Anguilla'], ['AQ', 'Antarctica'], ['AG', 'Antigua and Barbuda'], ['AR', 'Argentina'], ['AM', 'Armenia'], ['AW', 'Aruba'], ['AU', 'Australia'], ['AT', 'Austria'], ['AZ', 'Azerbaijan'], ['BS', 'Bahamas (the)'], ['BH', 'Bahrain'], ['BD', 'Bangladesh'], ['BB', 'Barbados'], ['BY', 'Belarus'], ['BE', 'Belgium'], ['BZ', 'Belize'], ['BJ', 'Benin'], ['BM', 'Bermuda'], ['BT', 'Bhutan'], ['BO', 'Bolivia'], ['BQ', 'Bonaire'], ['BA', 'Bosnia and Herzegovina'], ['BW', 'Botswana'], ['BV', 'Bouvet Island'], ['BR', 'Brazil'], ['IO', 'British Indian Ocean Territory'], ['BN', 'Brunei Darussalam'], ['BG', 'Bulgaria'], ['BF', 'Burkina Faso'], ['BI', 'Burundi'], ['CV', 'Cabo Verde'], ['KH', 'Cambodia'], ['CM', 'Cameroon'], ['CA', 'Canada'], ['KY', 'Cayman Islands'], ['CF', 'Central African Republic'], ['TD', 'Chad'], ['CL', 'Chile'], ['CN', 'China'], ['CX', 'Christmas Island'], ['CC', 'Cocos (Keeling) Islands'], ['CO', 'Colombia'], ['KM', 'Comoros'], ['CD', 'Congo'], ['CG', 'Congo'], ['CK', 'Cook Islands'], ['CR', 'Costa Rica'], ['HR', 'Croatia'], ['CU', 'Cuba'], ['CW', 'Curaçao'], ['CY', 'Cyprus'], ['CZ', 'Czechia'], ['CI', 'Côte dIvoire'], ['DK', 'Denmark'], ['DJ', 'Djibouti'], ['DM', 'Dominica'], ['DO', 'Dominican Republic'], ['EC', 'Ecuador'], ['EG', 'Egypt'], ['SV', 'El Salvador'], ['GQ', 'Equatorial Guinea'], ['ER', 'Eritrea'], ['EE', 'Estonia'], ['SZ', 'Eswatini'], ['ET', 'Ethiopia'], ['FK', 'Falkland Islands'], ['FO', 'Faroe Islands'], ['FJ', 'Fiji'], ['FI', 'Finland'], ['FR', 'France'], ['GF', 'French Guiana'], ['PF', 'French Polynesia'], ['TF', 'French Southern Territories'], ['GA', 'Gabon'], ['GM', 'Gambia (the)'], ['GE', 'Georgia'], ['DE', 'Germany'], ['GH', 'Ghana'], ['GI', 'Gibraltar'], ['GR', 'Greece'], ['GL', 'Greenland'], ['GD', 'Grenada'], ['GP', 'Guadeloupe'], ['GU', 'Guam'], ['GT', 'Guatemala'], ['GG', 'Guernsey'], ['GN', 'Guinea'], ['GW', 'Guinea-Bissau'], ['GY', 'Guyana'], ['HT', 'Haiti'], ['HM', 'Heard Island and McDonald Islands'], ['VA', 'Holy See (the)'], ['HN', 'Honduras'], ['HK', 'Hong Kong'], ['HU', 'Hungary'], ['IS', 'Iceland'], ['IN', 'India'], ['ID', 'Indonesia'], ['IR', 'Iran'], ['IQ', 'Iraq'], ['IE', 'Ireland'], ['IM', 'Isle of Man'], ['IL', 'Israel'], ['IT', 'Italy'], ['JM', 'Jamaica'], ['JP', 'Japan'], ['JE', 'Jersey'], ['JO', 'Jordan'], ['KZ', 'Kazakhstan'], ['KE', 'Kenya'], ['KI', 'Kiribati'], ['KP', "Korea"], ['KR', 'Korea'], ['KW', 'Kuwait'], ['KG', 'Kyrgyzstan'], ['LA', "Lao"], ['LV', 'Latvia'], ['LB', 'Lebanon'], ['LS', 'Lesotho'], ['LR', 'Liberia'], ['LY', 'Libya'], ['LI', 'Liechtenstein'], ['LT', 'Lithuania'], ['LU', 'Luxembourg'], ['MO', 'Macao'], ['MG', 'Madagascar'], ['MW', 'Malawi'], ['MY', 'Malaysia'], ['MV', 'Maldives'], ['ML', 'Mali'], ['MT', 'Malta'], ['MH', 'Marshall Islands'], ['MQ', 'Martinique'], ['MR', 'Mauritania'], ['MU', 'Mauritius'], ['YT', 'Mayotte'], ['MX', 'Mexico'], ['FM', 'Micronesia'], ['MD', 'Moldova'], ['MC', 'Monaco'], ['MN', 'Mongolia'], ['ME', 'Montenegro'], ['MS', 'Montserrat'], ['MA', 'Morocco'], ['MZ', 'Mozambique'], ['MM', 'Myanmar'], ['NA', 'Namibia'], ['NR', 'Nauru'], ['NP', 'Nepal'], ['NL', 'Netherlands'], ['NC', 'New Caledonia'], ['NZ', 'New Zealand'], ['NI', 'Nicaragua'], ['NE', 'Niger'], ['NG', 'Nigeria'], ['NU', 'Niue'], ['NF', 'Norfolk Island'], ['MP', 'Northern Mariana Islands'], ['NO', 'Norway'], ['OM', 'Oman'], ['PK', 'Pakistan'], ['PW', 'Palau'], ['PS', 'Palestine, State of'], ['PA', 'Panama'], ['PG', 'Papua New Guinea'], ['PY', 'Paraguay'], ['PE', 'Peru'], ['PH', 'Philippines'], ['PN', 'Pitcairn'], ['PL', 'Poland'], ['PT', 'Portugal'], ['PR', 'Puerto Rico'], ['QA', 'Qatar'], ['MK', 'Republic of North Macedonia'], ['RO', 'Romania'], ['RU', 'Russian Federation'], ['RW', 'Rwanda'], ['RE', 'Réunion'], ['BL', 'Saint Barthélemy'], ['SH', 'Saint Helena'], ['KN', 'Saint Kitts and Nevis'], ['LC', 'Saint Lucia'], ['MF', 'Saint Martin'], ['PM', 'Saint Pierre and Miquelon'], ['VC', 'Saint Vincent and the Grenadines'], ['WS', 'Samoa'], ['SM', 'San Marino'], ['ST', 'Sao Tome and Principe'], ['SA', 'Saudi Arabia'], ['SN', 'Senegal'], ['RS', 'Serbia'], ['SC', 'Seychelles'], ['SL', 'Sierra Leone'], ['SG', 'Singapore'], ['SX', 'Sint Maarten'], ['SK', 'Slovakia'], ['SI', 'Slovenia'], ['SB', 'Solomon Islands'], ['SO', 'Somalia'], ['ZA', 'South Africa'], ['GS', 'South Georgia and the South Sandwich Islands'], ['SS', 'South Sudan'], ['ES', 'Spain'], ['LK', 'Sri Lanka'], ['SD', 'Sudan'], ['SR', 'Suriname'], ['SJ', 'Svalbard and Jan Mayen'], ['SE', 'Sweden'], ['CH', 'Switzerland'], ['SY', 'Syrian Arab Republic'], ['TW', 'Taiwan'], ['TJ', 'Tajikistan'], ['TZ', 'Tanzania, United Republic of'], ['TH', 'Thailand'], ['TL', 'Timor-Leste'], ['TG', 'Togo'], ['TK', 'Tokelau'], ['TO', 'Tonga'], ['TT', 'Trinidad and Tobago'], ['TN', 'Tunisia'], ['TR', 'Turkey'], ['TM', 'Turkmenistan'], ['TC', 'Turks and Caicos Islands'], ['TV', 'Tuvalu'], ['UG', 'Uganda'], ['UA', 'Ukraine'], ['AE', 'United Arab Emirates'], ['GB', 'UK'], ['UM', 'United States Minor Outlying Islands'], ['US', 'USA'], ['UY', 'Uruguay'], ['UZ', 'Uzbekistan'], ['VU', 'Vanuatu'], ['VE', 'Venezuela'], ['VN', 'Viet Nam'], ['VG', 'Virgin Island'], ['VI', 'Virgin Islands'], ['WF', 'Wallis and Futuna'], ['EH', 'Western Sahara'], ['YE', 'Yemen'], ['ZM', 'Zambia'], ['ZW', 'Zimbabwe'], ['AX', 'Åland Islands']]);

const country_code_to_name = country_code => {
  //console.log(myMap.get(country_code))
  return myMap.get(country_code);
}; //country_to_currency('US')


module.exports = country_code_to_name;

/***/ }),

/***/ "./functions/fetch_from_map.js":
/*!*************************************!*\
  !*** ./functions/fetch_from_map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storeJs = _interopRequireDefault(__webpack_require__(/*! store-js */ "store-js"));

var _polaris = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getPearsonCorrelation = __webpack_require__(/*! ./calc_correlation */ "./functions/calc_correlation.js");

const linear_regression = __webpack_require__(/*! ./linear_regression */ "./functions/linear_regression.js");

const price_elasticity = __webpack_require__(/*! ./price_elasticity */ "./functions/price_elasticity.js");

const fetch_from_map = (select, tabs, maps, product_id_title_map, dropdown_select, product_id_price_map, fx_map) => {
  //try{
  if (select !== 0) {
    // fetch data for graphs
    const selected_currency = tabs[select]['id'];
    console.log("selected currency is ", selected_currency);
    console.log("dropdown_select is ", dropdown_select);
    const selected_data_all_products = maps.get(selected_currency);
    const selected_data = selected_data_all_products.get(dropdown_select);
    const product_price = product_id_price_map.get(dropdown_select);
    const today_fx = fx_map.get(selected_currency);
    console.log("product_price is ", product_price);
    var product_price_list = selected_data[2].map(function (element) {
      return Math.round(element * product_price * 100) / 100;
    });
    console.log("selected_data[1] is ", selected_data[1]);
    console.log("product_price_list is ", product_price_list);
    const [regression_fx, regression_sales, regression_predicted_sales, slope, intercept] = linear_regression(selected_data[1], product_price_list);
    const elasticity = price_elasticity(selected_data[1], product_price_list, Math.abs(slope));
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
    localStorage.setItem('current_level', selected_data[3]); //localStorage.setItem('correlation', getPearsonCorrelation(selected_data[1],selected_data[2]));

    localStorage.setItem('correlation', elasticity); //localStorage.setItem('regression_fx', regression_fx);

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

    for (let [key, value] of selected_data_all_products) {
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


    let slope_map = new Map();
    var slope_list = [];
    console.log("product_options is ", product_options);

    for (var k = 0; k < product_options.length; k++) {
      if (product_options[k] !== 'all') {
        const product_price_rank = product_id_price_map.get(product_options[k]);
        console.log("product_price_rank is ", product_price_rank);
        var product_price_list_rank = selected_data_all_products.get(product_options[k])[2].map(function (element) {
          return element * product_price_rank;
        });
        const slope_rank = linear_regression(selected_data_all_products.get(product_options[k])[1], product_price_list_rank)[3]; //slope_rank = product_price_rank/100*slope_rank

        console.log("slope_rank is ", slope_rank);

        if (slope_map.has(slope_rank)) {
          const value = slope_map.get(slope_rank);
          value.push(product_id_title_map.get(product_options[k]));
          slope_map.set(slope_rank, value);
        } else {
          console.log("product_id_title_map is ", product_id_title_map);
          console.log("product_options[k] is ", product_options[k]);
          console.log("product_id_title_map.get([product_options[k]] is ", product_id_title_map.get(product_options[k]));
          slope_map.set(slope_rank, product_id_title_map.get(product_options[k]));
        }

        slope_list.push(slope_rank);
      }
    }

    console.log("slope_map is ", slope_map);
    slope_list.sort(function (a, b) {
      return b - a;
    });
    console.log("slope_list is ", slope_list);
    const product_set_rank = new Set();

    for (var f = 0; f < slope_list.length; f++) {
      const product_options_list = slope_map.get(slope_list[f]);
      console.log("product_options_list is ", product_options_list);
      product_set_rank.add(product_options_list);
    }

    console.log("product_set_rank is ", product_set_rank);
    let product_array_rank = Array.from(product_set_rank);
    localStorage.setItem('product_array_rank', product_array_rank);
    localStorage.setItem('slope_rank', slope_list);
    console.log("product_array_rank is ", product_array_rank);
  } //} catch(err){
  //   console.log("no id")
  //}


  return options;
};

module.exports = fetch_from_map;

/***/ }),

/***/ "./functions/linear_regression.js":
/*!****************************************!*\
  !*** ./functions/linear_regression.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var jsregression = __webpack_require__(/*! js-regression */ "js-regression");

const linear_regression = (sales, exchange_rate) => {
  var [myMap, exchange_rate_round, sales_round] = reformat_data(sales, exchange_rate); //console.log("data is ", data)

  const [m, b] = findLineByLeastSquares(exchange_rate_round, sales_round);
  /*
  var regression = new jsregression.LinearRegression(  {alpha: 0.001, // 
      iterations: 300,
      lambda: 0.0});
  console.log("here")
  var model = regression.fit(data);
  */

  let myMap2 = new Map();
  myMap2 = myMap; // sort exchange rate

  exchange_rate_round.sort(function (a, b) {
    return a - b;
  });
  var regression_fx = [];
  var regression_sales = [];
  var regression_predicted_sales = [];

  for (j = 0; j < exchange_rate_round.length; j++) {
    regression_fx.push(exchange_rate_round[j]);
    regression_sales.push(myMap2.get(exchange_rate_round[j]));
    regression_predicted_sales.push(m * exchange_rate_round[j] + b);
    console.log("predicted number is ", m * exchange_rate_round[j] + b);
  }

  console.log("m is ", m);
  console.log("b is ", b);
  return [regression_fx, regression_sales, regression_predicted_sales, Math.round(m * 100) / 100, Math.round(b * 100) / 100];
};

function reformat_data(sales, exchange_rate) {
  var round_sales;
  const exchange_rate_round = [];
  const sales_round = [];
  let myMap = new Map();

  for (i = 0; i < exchange_rate.length; i++) {
    var round_fx = Math.round(100 * exchange_rate[i]) / 100;

    if (myMap.has(round_fx)) {
      var sales_list = myMap.get(round_fx);
      round_sales = Math.round(100 * sales[i]) / 100;
      sales_list.push(round_sales);
      myMap.set(round_fx, sales_list);
    }

    round_sales = Math.round(100 * sales[i]) / 100;
    myMap.set(round_fx, [round_sales]);
  }

  for (let [k, v] of myMap) {
    let sum = v.reduce((previous, current) => current += previous);
    let avg = sum / v.length;
    sales_round.push(avg);
    exchange_rate_round.push(k);
  }

  return [myMap, exchange_rate_round, sales_round];
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
    return [[], []];
  }
  /*
   * Calculate the sum for each of the parts necessary.
   */


  for (let i = 0; i < values_length; i++) {
    x = values_x[i];
    y = values_y[i];
    x_sum += x;
    y_sum += y;
    xx_sum += x * x;
    xy_sum += x * y;
    count++;
  }
  /*
   * Calculate m and b for the line equation:
   * y = x * m + b
   */


  var m = (count * xy_sum - x_sum * y_sum) / (count * xx_sum - x_sum * x_sum);
  var b = y_sum / count - m * x_sum / count;
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

  console.log(result_values_x);
  console.log(result_values_y);
  return [m, b];
}

findLineByLeastSquares([0.921, 0.922, 0.926], [209.8, 555.4, 93.56]); //linear_regression([20,50,60],[4,9,7])

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

/***/ }),

/***/ "./functions/price_elasticity.js":
/*!***************************************!*\
  !*** ./functions/price_elasticity.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const price_elasticity = (sales, product_price, slope) => {
  const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const avgPrice = arrAvg(product_price);
  const avgSales = arrAvg(sales);
  console.log("avgSales is ", avgSales);
  console.log("avgPrice is ", avgPrice);
  const perc_price_change = 1 / avgPrice;
  const perc_revenue_change = slope / avgSales;
  const elasticity = perc_revenue_change / perc_price_change;
  console.log("elasticity is ", elasticity);
  return elasticity;
};

module.exports = price_elasticity;
price_elasticity([1, 2], [2, 3], 5);

/***/ }),

/***/ "./functions/price_sensitive_market.js":
/*!*********************************************!*\
  !*** ./functions/price_sensitive_market.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const linear_regression = __webpack_require__(/*! ./linear_regression */ "./functions/linear_regression.js");

const price_elasticity = __webpack_require__(/*! ./price_elasticity */ "./functions/price_elasticity.js");

const price_sensitive_market = (tabs, maps) => {
  let myMap = new Map(); //try{

  var elasticity_list = [];
  console.log("tabs.length is ", tabs);
  console.log("maps is ", maps);

  for (var i = 1; i < tabs.length; i++) {
    const selected_currency = tabs[i]['id'];
    console.log("selected_currency is ", selected_currency);
    const selected_data_all_products = maps.get(selected_currency);
    const selected_data = selected_data_all_products.get('all');
    const product_price = 100;
    var product_price_list = selected_data[2].map(function (element) {
      return Math.round(element * product_price * 100) / 100;
    });

    if (selected_data[1].length > 1) {
      console.log("selected_data[1] is ", selected_data[1]);
      console.log("product_price_list is ", product_price_list);
      const slope = linear_regression(selected_data[1], product_price_list)[3];
      console.log("slope is ", slope);
      const elasticity = price_elasticity(selected_data[1], product_price_list, Math.abs(slope));
      console.log("elasticity is ", elasticity);

      if (myMap.has(elasticity)) {
        console.log("myMap has elasticity");
        var value = myMap.get(elasticity);
        value.push(selected_currency);
        myMap.set(elasticity, value);
      } else {
        console.log("myMap doesn't have elasticity");
        console.log("[selected_currency] is ", selected_currency);
        myMap.set(elasticity, [selected_currency]);
      }

      elasticity_list.push(elasticity);
    }
  }

  elasticity_list.sort(function (a, b) {
    return b - a;
  });
  console.log("elasticity_list is ", elasticity_list);
  var currency_rank = [];

  for (var j = 0; j < elasticity_list.length; j++) {
    var elasticity_element = elasticity_list[j];
    console.log("myMap.get(elasticity_element) is ", myMap.get(elasticity_element));

    if (!currency_rank.includes(myMap.get(elasticity_element)[0])) {
      console.log("myMap.get(elasticity_element).length is ", myMap.get(elasticity_element).length);

      for (var k = 0; k < myMap.get(elasticity_element).length; k++) {
        currency_rank.push(myMap.get(elasticity_element)[k]);
      }
    }
  }

  console.log("currency_rank is ", currency_rank); //localStorage.setItem('currency_elasticity_rank', currency_rank);

  return currency_rank; //} catch (error){
  // console.log("error in price sensitive market")
  //}
};

module.exports = price_sensitive_market;

/***/ }),

/***/ "./functions/string_to_list.js":
/*!*************************************!*\
  !*** ./functions/string_to_list.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const string_to_list = (string, type) => {
  //try{

  /*
  if (string.includes(",")){
  const res = string.split(",");
  var convert_list = []
  for (i=0; i<res.length; i++){
      if (type === 'float'){
          const num = parseFloat(res[i])
          convert_list.push(num)
      } else{
          const str = res[i].toString()
          convert_list.push(str)
      }
  }
  console.log(convert_list)
  return convert_list
  } else {
  if (type === 'float'){
      return [parseFloat(string)]
  } else {
      return [string.toString()]
  }
  
  }*/

  /*
      } catch(error){
          console.log("string is ", string)
      }
      */
  //
  try {
    const res = string.split(",");
    var convert_list = [];

    for (i = 0; i < res.length; i++) {
      if (type === 'float') {
        const num = parseFloat(res[i]);
        convert_list.push(num);
      } else {
        const str = res[i].toString();
        convert_list.push(str);
      }
    } //console.log(convert_list)


    return convert_list;
  } catch (error) {//console.log("string is ", string)
  }
};

string_to_list('209.28', 'float');
module.exports = string_to_list;

/***/ }),

/***/ "./pages/detect_transactions.js":
/*!**************************************!*\
  !*** ./pages/detect_transactions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Country_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Country_data */ "./components/Country_data.js");
/* harmony import */ var _components_Main_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Main_data */ "./components/Main_data.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



const change_format2 = __webpack_require__(/*! ../functions/change_format2 */ "./functions/change_format2.js");

class ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getList", () => {
      fetch('http://localhost:5000/api/tabs').then(res => res.json()).then(list2 => this.setState({
        list2
      }));
    });

    _defineProperty(this, "getCountryData", () => {
      fetch('http://localhost:5000/api/country_data').then(res => res.json()).then(country_data => this.setState({
        country_data
      }));
      console.log("3");
    });

    this.state = {
      list: [[], [], []],
      selected: 0,
      list2: [[], []]
    };
  }

  componentDidMount() {
    this.getList(); //this.getCountryData();

    console.log("here"); //console.log("list is ", this.state.list)
    //change_format2(this.state.list)
  }

  render() {
    const {
      list,
      selected,
      list2
    } = this.state; //change_format2(list)

    /*
    if (list2===null){
      console.log("loading...")
    }{
      console.log("list2 is ")
    }*/

    const tab = list2[0]; //try {

    console.log("list2 is ", list2);
    console.log("selected is ", selected);
    const [map, product_id_title_map, product_id_price_map, store_currency, fx_map, countryListMap, perc_change_map] = change_format2(list2);
    console.log('product_id_title_map is ', product_id_title_map);
    console.log('perc_change_map is ', perc_change_map);
    /*
    const currency = tab[select]
    const [date, revenue, fx] = myMap.get(currency)
       console.log("date is ", date)
    console.log("price is ", revenue)
    console.log("exchange_rate is ", fx)
      store.set('date', date)
    store.set('price', revenue)
    store.set('exchange_rate', fx)*/

    /*}
    catch(err) {
      console.log("loading...")
    }*/
    //store.set('date',[2,3])
    //console.log("store get in detect transaction is", localStorage.getItem('date'))
    //console.log("lis1 is ", list[0])
    //console.log("list is ", list[1])
    //console.log("selected is ", selected)

    var i = 0;

    if (selected > 0) {
      i = selected - 1;
    }
    /*
    const date = list[1][i][0]
    const price = list[1][i][1]
    const exchange_rate = list[1][i][2]
    store.set('date', date)
    store.set('price', price)
    store.set('exchange_rate', exchange_rate)
     const level = list[2]
    store.set('level', level)
    //console.log('level is ', level)
    */
    // var tab = list[0]


    console.log("tab is ", tab);
    return __jsx("div", {
      className: "main_background_image"
    }, list2[0][0] === undefined ? __jsx("div", null, __jsx("h2", null, "Working Hard And Analyzing..."), __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "Oval",
      color: "#63b7af",
      height: 80,
      width: 80,
      timeout: 20000 //3 secs

    })) : __jsx("div", {
      className: "main_background_image"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      tabs: tab,
      selected: selected,
      onSelect: selected => this.setState({
        selected
      }),
      fitted: true
    }, selected === 0 ? __jsx(_components_Main_data__WEBPACK_IMPORTED_MODULE_8__["default"], {
      tabs: tab,
      maps: map,
      countryListMap: countryListMap,
      perc_change_map: perc_change_map
    }) : __jsx(_components_Country_data__WEBPACK_IMPORTED_MODULE_7__["default"], {
      select: selected,
      tabs: tab,
      maps: map,
      product_id_title_map: product_id_title_map,
      product_id_price_map: product_id_price_map,
      store_currency: store_currency,
      fx_map: fx_map
    }))));
  }

}

_defineProperty(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./pages/detect_transactions.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tatianatian/Desktop/Startup/shopify_front_back_end/client/pages/detect_transactions.js */"./pages/detect_transactions.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "d3-fetch":
/*!***************************!*\
  !*** external "d3-fetch" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-fetch");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "js-regression":
/*!********************************!*\
  !*** external "js-regression" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-regression");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "react-simple-maps":
/*!************************************!*\
  !*** external "react-simple-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=detect_transactions.js.map