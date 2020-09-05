webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./components/Country_data.js":
/*!************************************!*\
  !*** ./components/Country_data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Country_data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //import '../style/style.css'

var getPearsonCorrelation = __webpack_require__(/*! ../functions/calc_correlation */ "./functions/calc_correlation.js");

var string_to_list = __webpack_require__(/*! ../functions/string_to_list */ "./functions/string_to_list.js");

var fetch_from_map = __webpack_require__(/*! ../functions/fetch_from_map */ "./functions/fetch_from_map.js");


function Country_data(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('all'),
      selected = _useState[0],
      setSelected = _useState[1];

  var handleSelectChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    return setSelected(value);
  }, []);
  console.log('props.product_id_title_map is ', props.product_id_title_map);
  var options = fetch_from_map(props.select, props.tabs, props.maps, props.product_id_title_map, selected, props.product_id_price_map, props.fx_map);
  var store_currency = props.store_currency;
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
  var date_string = localStorage.getItem('date');
  var price_string = localStorage.getItem('price');
  var exchange_rate_string = localStorage.getItem('exchange_rate');
  var current_level_string = localStorage.getItem('current_level');
  var correlation = localStorage.getItem('correlation');
  var regression_fx_string = localStorage.getItem('regression_fx');
  var regression_sales_string = localStorage.getItem('regression_sales');
  var regression_predicted_sales_string = localStorage.getItem('regression_predicted_sales');
  var regression_slope = localStorage.getItem('slope');
  var today_product_price = localStorage.getItem('today_product_price');
  var product_array_rank_string = localStorage.getItem('product_array_rank');
  var slope_rank_string = localStorage.getItem('slope_rank');
  var indicated_sale = localStorage.getItem('indicated_sale');
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

  var leve_num2 = [2, 2, 2, 2];
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

  var doughnutChartData = {
    labels: [text + ': ' + Math.round(Math.abs(correlation) * 100) / 100],
    datasets: [{
      //backgroundColor: ["#FF6D2D","#45853C"],
      backgroundColor: [color, "#ECECEC"],
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      data: doughnut
    }]
  };
  var doughnutChartOptions = {
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
      pointBorderColor: "#63b7af",
      pointBackgroundColor: "#63b7af",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#63b7af",
      pointHoverBorderColor: "#63b7af",
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
  var barChartData = {
    //labels: ['China - Monthly CPI', 'US - Monthly CPI', 'China - Quarterly GDP','US - Aaa Corporate Bonds', 'US - S&P 500'],
    labels: product_array_rank,
    datasets: [{
      backgroundColor: ["#ff6f5e", '#ffa41b', '#b2ebf2', '#35495e', '#63b7af'],
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      //data: [0.65, 0.50, 0.47, 0.39, 0.37]
      data: slope_rank
    }]
  };
  var barChartOptions = {
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
  var rangeChartData = {
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
  var rangeChartOptions = {
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
          callback: function callback(value) {
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
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    height: "100vh",
    data: doughnutChartData,
    options: doughnutChartOptions
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Most Price Sentitive Products in the Country",
    sectioned: true
  }, product_array_rank[0] !== "" ? __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["HorizontalBar"], {
    height: "100vh",
    data: barChartData,
    options: barChartOptions
  }) : __jsx("p", null, "No enough data. Come back when you have more international orders :) You can do it!")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price And Sales By Date",
    sectioned: true
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    height: "220vh",
    data: lineChartData,
    options: lineChartOptions
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneHalf: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Sales And Prices Correlation",
    sectioned: true
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    height: "150vh",
    data: lineRegressionChartData,
    options: lineRegressionChartOptions
  }), __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Analytics",
    sectioned: true
  }, __jsx("p", null, __jsx("b", null, "Price range:"), " ", min_price_range, " ", props.tabs[props.select]['id'], " - ", max_price_range, " ", props.tabs[props.select]['id']), __jsx("br", null), __jsx("p", null, __jsx("b", null, "Sales range:"), " ", min_sales_range, " ", store_currency, " - ", max_sales_range, " ", store_currency, " per day"), __jsx("br", null), __jsx("p", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegArrowAltCircleDown"], null), " 1 ", props.tabs[props.select]['id'], " in price"), __jsx("br", null), __jsx("p", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegArrowAltCircleUp"], null), " ", regression_slope, " ", store_currency, " sales/day"), __jsx("br", null), __jsx("p", null, __jsx("b", null, "Current price:"), " ", today_product_price, " ", props.tabs[props.select]['id']), __jsx("br", null), __jsx("p", null, __jsx("b", null, "Projected sales:"), " ", indicated_sale, " ", store_currency, " per day"), __jsx("br", null)))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "The current price level",
    sectioned: true
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["HorizontalBar"], {
    height: "100vh",
    data: rangeChartData,
    options: rangeChartOptions
  }))));
}

/***/ })

})
//# sourceMappingURL=detect_transactions.js.34e18373e1d8e9babc3b.hot-update.js.map