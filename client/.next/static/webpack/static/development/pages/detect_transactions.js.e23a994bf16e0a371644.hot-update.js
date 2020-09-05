webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./components/MapChart.js":
/*!********************************!*\
  !*** ./components/MapChart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-simple-maps */ "./node_modules/react-simple-maps/dist/index.umd.js");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var rounded = function rounded(num) {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

var geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
var colorScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().domain([0.29, 0.68]).range(["#ffeeeb", "#ff5233"]);

var MapChart = function MapChart(_ref) {
  var setTooltipContent = _ref.setTooltipContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(d3_fetch__WEBPACK_IMPORTED_MODULE_1__["csv"])("/vulnerability.csv").then(function (data) {
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
  }, function (_ref2) {
    var geographies = _ref2.geographies;
    return geographies.map(function (geo) {
      var d = data.find(function (s) {
        return s.ISO3 === geo.properties.ISO_A3;
      });
      return __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__["Geography"], {
        key: geo.rsmKey,
        geography: geo,
        onMouseEnter: function onMouseEnter() {
          var _geo$properties = geo.properties,
              NAME = _geo$properties.NAME,
              POP_EST = _geo$properties.POP_EST;
          setTooltipContent("".concat(NAME, " \u2014 ").concat(rounded(POP_EST)));
        },
        onMouseLeave: function onMouseLeave() {
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
    });
  }) // </ZoomableGroup>
  );
};

/* harmony default export */ __webpack_exports__["default"] = (MapChart);

/***/ })

})
//# sourceMappingURL=detect_transactions.js.e23a994bf16e0a371644.hot-update.js.map