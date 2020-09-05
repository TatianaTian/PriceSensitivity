webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./pages/detect_transactions.js":
/*!**************************************!*\
  !*** ./pages/detect_transactions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Country_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Country_data */ "./components/Country_data.js");
/* harmony import */ var _components_Main_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Main_data */ "./components/Main_data.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_17__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








 //import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



var change_format2 = __webpack_require__(/*! ../functions/change_format2 */ "./functions/change_format2.js");

var ResourceListWithProducts = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ResourceListWithProducts, _React$Component);

  var _super = _createSuper(ResourceListWithProducts);

  function ResourceListWithProducts(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ResourceListWithProducts);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getList", function () {
      fetch('http://localhost:5000/api/tabs').then(function (res) {
        return res.json();
      }).then(function (list2) {
        return _this.setState({
          list2: list2
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getCountryData", function () {
      fetch('http://localhost:5000/api/country_data').then(function (res) {
        return res.json();
      }).then(function (country_data) {
        return _this.setState({
          country_data: country_data
        });
      });
      console.log("3");
    });

    _this.state = {
      list: [[], [], []],
      selected: 0,
      list2: [[], []]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceListWithProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getList(); //this.getCountryData();

      console.log("here"); //console.log("list is ", this.state.list)
      //change_format2(this.state.list)
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          list = _this$state.list,
          selected = _this$state.selected,
          list2 = _this$state.list2; //change_format2(list)

      /*
      if (list2===null){
        console.log("loading...")
      }{
        console.log("list2 is ")
      }*/

      var tab = list2[0]; //try {

      console.log("list2 is ", list2);
      console.log("selected is ", selected);

      var _change_format = change_format2(list2),
          _change_format2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_change_format, 5),
          map = _change_format2[0],
          product_id_title_map = _change_format2[1],
          product_id_price_map = _change_format2[2],
          store_currency = _change_format2[3],
          fx_map = _change_format2[4];

      console.log('product_id_title_map is ', product_id_title_map);
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
      }, list2[0][0] === undefined ? __jsx("div", null, __jsx("h2", null, "Working Hard And Analyzing..."), __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "Oval",
        color: "#63b7af",
        height: 80,
        width: 80,
        timeout: 20000 //3 secs

      })) : __jsx("div", {
        className: "main_background_image"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Tabs"], {
        tabs: tab,
        selected: selected,
        onSelect: function onSelect(selected) {
          return _this2.setState({
            selected: selected
          });
        },
        fitted: true
      }, selected === 0 ? __jsx(_components_Main_data__WEBPACK_IMPORTED_MODULE_16__["default"], {
        tabs: tab,
        maps: map
      }) : __jsx(_components_Country_data__WEBPACK_IMPORTED_MODULE_15__["default"], {
        select: selected,
        tabs: tab,
        maps: map,
        product_id_title_map: product_id_title_map,
        product_id_price_map: product_id_price_map,
        store_currency: store_currency,
        fx_map: fx_map
      }))));
    }
  }]);

  return ResourceListWithProducts;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_14__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ })

})
//# sourceMappingURL=detect_transactions.js.0e768b5fe914b1ba3df2.hot-update.js.map