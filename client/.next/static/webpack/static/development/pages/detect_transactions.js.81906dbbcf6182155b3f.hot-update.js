webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./components/Main_data.js":
/*!*********************************!*\
  !*** ./components/Main_data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main_data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapChart */ "./components/MapChart.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/price_sensitive_market */ "./functions/price_sensitive_market.js");
/* harmony import */ var _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var country_code_to_name = __webpack_require__(/*! ../functions/country_code_to_name */ "./functions/country_code_to_name.js");

function Main_data(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      content = _useState[0],
      setContent = _useState[1];

  var currency_list = _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5___default()(props.tabs, props.maps);
  console.log("currency_list is", currency_list);
  var rows = [['Emerald Silk Gown', '$875.00'], ['Mauve Cashmere Scarf', '$230.00']];
  var countryListMap = props.countryListMap;
  console.log("countryListMap is", countryListMap);

  for (var i = 0; i < currency_list.length; i++) {
    var currency = currency_list[i];
    var country = countryListMap.get(currency);
    console.log("currency is", currency);
    console.log("country is", country);
    var country_string = '';

    for (var j = 0; j < country.length; j++) {
      country_string += country[j] + ', ';
    }

    var country_string = country_string.substring(0, country_string.length - 2);
    console.log("country_string is", country_string); //rows.push([currency, country_string])
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Range Analyzed",
    sectioned: true
  }, "EUR: 2%", __jsx("br", null), "CAD: 5%", __jsx("br", null), "GBP: 10%", __jsx("br", null))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Sentitive Markets",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'text'],
    headings: ['Currency', 'Country'],
    rows: rows
  }), "EUR: France, Italy, Germany", __jsx("br", null), "CAD: Countries: Canada", __jsx("br", null), "GBP: Countries: UK", __jsx("br", null))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Volatile Markets",
    sectioned: true
  }, "EUR: France, Italy, Germany", __jsx("br", null), "CAD: Countries: Canada", __jsx("br", null), "GBP: Countries: UK", __jsx("br", null))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Change Magnitue the Past 30 Days",
    sectioned: true
  }, __jsx(_MapChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setTooltipContent: setContent
  }), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], null, content))));
}

function displayBlock(currency) {
  render({
    currency: currency
  });
}

/***/ }),

/***/ "./functions/country_code_to_name.js":
/*!*******************************************!*\
  !*** ./functions/country_code_to_name.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var myMap = new Map([['AF', 'Afghanistan'], ['AL', 'Albania'], ['DZ', 'Algeria'], ['AS', 'American Samoa'], ['AD', 'Andorra'], ['AO', 'Angola'], ['AI', 'Anguilla'], ['AQ', 'Antarctica'], ['AG', 'Antigua and Barbuda'], ['AR', 'Argentina'], ['AM', 'Armenia'], ['AW', 'Aruba'], ['AU', 'Australia'], ['AT', 'Austria'], ['AZ', 'Azerbaijan'], ['BS', 'Bahamas (the)'], ['BH', 'Bahrain'], ['BD', 'Bangladesh'], ['BB', 'Barbados'], ['BY', 'Belarus'], ['BE', 'Belgium'], ['BZ', 'Belize'], ['BJ', 'Benin'], ['BM', 'Bermuda'], ['BT', 'Bhutan'], ['BO', 'Bolivia (Plurinational State of)'], ['BQ', 'Bonaire, Sint Eustatius and Saba'], ['BA', 'Bosnia and Herzegovina'], ['BW', 'Botswana'], ['BV', 'Bouvet Island'], ['BR', 'Brazil'], ['IO', 'British Indian Ocean Territory (the)'], ['BN', 'Brunei Darussalam'], ['BG', 'Bulgaria'], ['BF', 'Burkina Faso'], ['BI', 'Burundi'], ['CV', 'Cabo Verde'], ['KH', 'Cambodia'], ['CM', 'Cameroon'], ['CA', 'Canada'], ['KY', 'Cayman Islands (the)'], ['CF', 'Central African Republic (the)'], ['TD', 'Chad'], ['CL', 'Chile'], ['CN', 'China'], ['CX', 'Christmas Island'], ['CC', 'Cocos (Keeling) Islands (the)'], ['CO', 'Colombia'], ['KM', 'Comoros (the)'], ['CD', 'Congo (the Democratic Republic of the)'], ['CG', 'Congo (the)'], ['CK', 'Cook Islands (the)'], ['CR', 'Costa Rica'], ['HR', 'Croatia'], ['CU', 'Cuba'], ['CW', 'Curaçao'], ['CY', 'Cyprus'], ['CZ', 'Czechia'], ['CI', 'Côte dIvoire'], ['DK', 'Denmark'], ['DJ', 'Djibouti'], ['DM', 'Dominica'], ['DO', 'Dominican Republic (the)'], ['EC', 'Ecuador'], ['EG', 'Egypt'], ['SV', 'El Salvador'], ['GQ', 'Equatorial Guinea'], ['ER', 'Eritrea'], ['EE', 'Estonia'], ['SZ', 'Eswatini'], ['ET', 'Ethiopia'], ['FK', 'Falkland Islands (the) [Malvinas]'], ['FO', 'Faroe Islands (the)'], ['FJ', 'Fiji'], ['FI', 'Finland'], ['FR', 'France'], ['GF', 'French Guiana'], ['PF', 'French Polynesia'], ['TF', 'French Southern Territories (the)'], ['GA', 'Gabon'], ['GM', 'Gambia (the)'], ['GE', 'Georgia'], ['DE', 'Germany'], ['GH', 'Ghana'], ['GI', 'Gibraltar'], ['GR', 'Greece'], ['GL', 'Greenland'], ['GD', 'Grenada'], ['GP', 'Guadeloupe'], ['GU', 'Guam'], ['GT', 'Guatemala'], ['GG', 'Guernsey'], ['GN', 'Guinea'], ['GW', 'Guinea-Bissau'], ['GY', 'Guyana'], ['HT', 'Haiti'], ['HM', 'Heard Island and McDonald Islands'], ['VA', 'Holy See (the)'], ['HN', 'Honduras'], ['HK', 'Hong Kong'], ['HU', 'Hungary'], ['IS', 'Iceland'], ['IN', 'India'], ['ID', 'Indonesia'], ['IR', 'Iran (Islamic Republic of)'], ['IQ', 'Iraq'], ['IE', 'Ireland'], ['IM', 'Isle of Man'], ['IL', 'Israel'], ['IT', 'Italy'], ['JM', 'Jamaica'], ['JP', 'Japan'], ['JE', 'Jersey'], ['JO', 'Jordan'], ['KZ', 'Kazakhstan'], ['KE', 'Kenya'], ['KI', 'Kiribati'], ['KP', "Korea (the Democratic People's Republic of)"], ['KR', 'Korea (the Republic of)'], ['KW', 'Kuwait'], ['KG', 'Kyrgyzstan'], ['LA', "Lao People's Democratic Republic (the)"], ['LV', 'Latvia'], ['LB', 'Lebanon'], ['LS', 'Lesotho'], ['LR', 'Liberia'], ['LY', 'Libya'], ['LI', 'Liechtenstein'], ['LT', 'Lithuania'], ['LU', 'Luxembourg'], ['MO', 'Macao'], ['MG', 'Madagascar'], ['MW', 'Malawi'], ['MY', 'Malaysia'], ['MV', 'Maldives'], ['ML', 'Mali'], ['MT', 'Malta'], ['MH', 'Marshall Islands (the)'], ['MQ', 'Martinique'], ['MR', 'Mauritania'], ['MU', 'Mauritius'], ['YT', 'Mayotte'], ['MX', 'Mexico'], ['FM', 'Micronesia (Federated States of)'], ['MD', 'Moldova (the Republic of)'], ['MC', 'Monaco'], ['MN', 'Mongolia'], ['ME', 'Montenegro'], ['MS', 'Montserrat'], ['MA', 'Morocco'], ['MZ', 'Mozambique'], ['MM', 'Myanmar'], ['NA', 'Namibia'], ['NR', 'Nauru'], ['NP', 'Nepal'], ['NL', 'Netherlands (the)'], ['NC', 'New Caledonia'], ['NZ', 'New Zealand'], ['NI', 'Nicaragua'], ['NE', 'Niger (the)'], ['NG', 'Nigeria'], ['NU', 'Niue'], ['NF', 'Norfolk Island'], ['MP', 'Northern Mariana Islands (the)'], ['NO', 'Norway'], ['OM', 'Oman'], ['PK', 'Pakistan'], ['PW', 'Palau'], ['PS', 'Palestine, State of'], ['PA', 'Panama'], ['PG', 'Papua New Guinea'], ['PY', 'Paraguay'], ['PE', 'Peru'], ['PH', 'Philippines (the)'], ['PN', 'Pitcairn'], ['PL', 'Poland'], ['PT', 'Portugal'], ['PR', 'Puerto Rico'], ['QA', 'Qatar'], ['MK', 'Republic of North Macedonia'], ['RO', 'Romania'], ['RU', 'Russian Federation (the)'], ['RW', 'Rwanda'], ['RE', 'Réunion'], ['BL', 'Saint Barthélemy'], ['SH', 'Saint Helena, Ascension and Tristan da Cunha'], ['KN', 'Saint Kitts and Nevis'], ['LC', 'Saint Lucia'], ['MF', 'Saint Martin (French part)'], ['PM', 'Saint Pierre and Miquelon'], ['VC', 'Saint Vincent and the Grenadines'], ['WS', 'Samoa'], ['SM', 'San Marino'], ['ST', 'Sao Tome and Principe'], ['SA', 'Saudi Arabia'], ['SN', 'Senegal'], ['RS', 'Serbia'], ['SC', 'Seychelles'], ['SL', 'Sierra Leone'], ['SG', 'Singapore'], ['SX', 'Sint Maarten (Dutch part)'], ['SK', 'Slovakia'], ['SI', 'Slovenia'], ['SB', 'Solomon Islands'], ['SO', 'Somalia'], ['ZA', 'South Africa'], ['GS', 'South Georgia and the South Sandwich Islands'], ['SS', 'South Sudan'], ['ES', 'Spain'], ['LK', 'Sri Lanka'], ['SD', 'Sudan (the)'], ['SR', 'Suriname'], ['SJ', 'Svalbard and Jan Mayen'], ['SE', 'Sweden'], ['CH', 'Switzerland'], ['SY', 'Syrian Arab Republic'], ['TW', 'Taiwan (Province of China)'], ['TJ', 'Tajikistan'], ['TZ', 'Tanzania, United Republic of'], ['TH', 'Thailand'], ['TL', 'Timor-Leste'], ['TG', 'Togo'], ['TK', 'Tokelau'], ['TO', 'Tonga'], ['TT', 'Trinidad and Tobago'], ['TN', 'Tunisia'], ['TR', 'Turkey'], ['TM', 'Turkmenistan'], ['TC', 'Turks and Caicos Islands (the)'], ['TV', 'Tuvalu'], ['UG', 'Uganda'], ['UA', 'Ukraine'], ['AE', 'United Arab Emirates (the)'], ['GB', 'United Kingdom of Great Britain and Northern Ireland (the)'], ['UM', 'United States Minor Outlying Islands (the)'], ['US', 'United States of America (the)'], ['UY', 'Uruguay'], ['UZ', 'Uzbekistan'], ['VU', 'Vanuatu'], ['VE', 'Venezuela (Bolivarian Republic of)'], ['VN', 'Viet Nam'], ['VG', 'Virgin Islands (British)'], ['VI', 'Virgin Islands (U.S.)'], ['WF', 'Wallis and Futuna'], ['EH', 'Western Sahara'], ['YE', 'Yemen'], ['ZM', 'Zambia'], ['ZW', 'Zimbabwe'], ['AX', 'Åland Islands']]);

var country_code_to_name = function country_code_to_name(country_code) {
  //console.log(myMap.get(country_code))
  return myMap.get(country_code);
}; //country_to_currency('US')


module.exports = country_code_to_name;

/***/ })

})
//# sourceMappingURL=detect_transactions.js.81906dbbcf6182155b3f.hot-update.js.map