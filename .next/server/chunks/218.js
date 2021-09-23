"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 2218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchPage),
  "Y": () => (/* reexport */ getData)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: ./src/components/layout/index.js + 21 modules
var layout = __webpack_require__(6381);
// EXTERNAL MODULE: ./src/lib/graph/index.js
var graph = __webpack_require__(6712);
// EXTERNAL MODULE: ./src/lib/search.js
var lib_search = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/lib/graph/fragments.js
var fragments = __webpack_require__(3123);
;// CONCATENATED MODULE: ./src/page-components/search/query.js

/* harmony default export */ const query = (`
  query SEARCH_PAGE($language: String!, $path: String, $version: VersionLabel!) {
    searchPage: catalogue(language: $language, path: $path, version: $version) {
      ...item

      children {
        ...item
        ...product
      }
    }
  }

  ${fragments/* default */.Z}
`);
;// CONCATENATED MODULE: ./src/page-components/search/utils.js

function cleanFilterForTotalAggregations(filter) {
  return external_immer_default()(filter, draft => {
    delete draft.productVariants.priceRange;
    delete draft.productVariants.attributes;
  });
}
;// CONCATENATED MODULE: ./src/page-components/search/get-data.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





async function getData({
  asPath,
  preview,
  language,
  searchSpec
}) {
  const [searchQueryResponse, catalogueQueryResponse] = await Promise.all([(0,graph/* simplyFetchFromSearchGraph */.nx)({
    query: lib_search/* SEARCH_QUERY */.dZ,
    variables: _objectSpread(_objectSpread({}, searchSpec), {}, {
      aggregationsFilter: cleanFilterForTotalAggregations(searchSpec.filter)
    })
  }), asPath ? (0,graph/* simplyFetchFromGraph */.dY)({
    query: query,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published'
    }
  }) : {}]);

  if (!searchQueryResponse.data) {
    return {
      search: null,
      catalogue: null,
      language
    };
  }

  const {
    search,
    aggregations: {
      aggregations
    } = {}
  } = searchQueryResponse.data;
  return {
    search: {
      search,
      aggregations
    },
    catalogue: catalogueQueryResponse.data || null,
    language
  };
}
// EXTERNAL MODULE: ./src/lib/app-config.js + 1 modules
var app_config = __webpack_require__(9841);
// EXTERNAL MODULE: external "@crystallize/content-transformer/toText"
var toText_ = __webpack_require__(4880);
var toText_default = /*#__PURE__*/__webpack_require__.n(toText_);
// EXTERNAL MODULE: ./src/components/page-header.js
var page_header = __webpack_require__(1964);
// EXTERNAL MODULE: ./src/components/stackable.js + 2 modules
var stackable = __webpack_require__(1930);
;// CONCATENATED MODULE: ./src/page-components/search/styles.js


const ListOuter = external_styled_components_default().div.withConfig({
  displayName: "styles__ListOuter",
  componentId: "sc-14zoxk6-0"
})(["max-width:1600px;margin:0 auto;"]);
const SearchActions = external_styled_components_default().div.withConfig({
  displayName: "styles__SearchActions",
  componentId: "sc-14zoxk6-1"
})(["display:flex;justify-content:space-between;margin-bottom:30px;position:relative;align-items:center;", "{align-items:flex-start;}"], ui/* responsive.mdPlus */.jW.mdPlus);
const LocateRight = external_styled_components_default().div.withConfig({
  displayName: "styles__LocateRight",
  componentId: "sc-14zoxk6-2"
})(["", "{position:absolute;right:0;top:5px;}"], ui/* responsive.smPlus */.jW.smPlus);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/page-components/search/order-by/styles.js

const Outer = external_styled_components_default().select.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1pjrabs-0"
})(["padding:10px 15px;outline:none;border:none;font-size:1rem;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/page-components/search/order-by/index.js




function OrderBy({
  orderBy,
  onChange
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('search');

  const handleOnChange = e => {
    const index = lib_search/* orderByOptions.findIndex */.vy.findIndex(({
      value
    }) => value === e.target.value);
    onChange(lib_search/* orderByOptions */.vy[index], index);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Outer, {
    value: orderBy === null || orderBy === void 0 ? void 0 : orderBy.value,
    onChange: handleOnChange,
    "aria-label": t('orderTitle'),
    children: lib_search/* orderByOptions.map */.vy.map(option => /*#__PURE__*/jsx_runtime_.jsx("option", {
      value: option.value,
      children: t(`order.${option.value}`)
    }, option.value))
  });
}
// EXTERNAL MODULE: ./src/components/listformat/index.js + 8 modules
var listformat = __webpack_require__(8198);
;// CONCATENATED MODULE: ./src/page-components/search/results/styles.js


const styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1djmnob-0"
})(["ul{display:grid;grid-auto-rows:var(--listformat-product-height-lg);grid-gap:15px;grid-template-columns:1fr;list-style:none;", "{grid-template-columns:repeat(2,1fr);}", "{padding-left:0;padding-right:0;grid-template-columns:repeat(4,1fr);}> li{margin:0;padding:0;}}"], ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.mdPlus */.jW.mdPlus);
;// CONCATENATED MODULE: ./src/page-components/search/results/pagination.js



const pagination_Outer = external_styled_components_default().div.withConfig({
  displayName: "pagination__Outer",
  componentId: "sc-19mrsxs-0"
})(["display:flex;justify-content:space-between;"]);
const Button = external_styled_components_default().button.withConfig({
  displayName: "pagination__Button",
  componentId: "sc-19mrsxs-1"
})(["background:transparent;border:2px solid #000;padding:10px;text-transform:uppercase;font-weight:600;font-size:14px;&:disabled{opacity:0;}"]);
function Pagination({
  navigate,
  pageInfo
}) {
  const {
    hasPreviousPage,
    hasNextPage
  } = pageInfo;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(pagination_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Button, {
      onClick: () => navigate({
        direction: 'prevPage'
      }),
      disabled: !hasPreviousPage,
      children: "\u2190"
    }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
      onClick: () => navigate({
        direction: 'nextPage'
      }),
      disabled: !hasNextPage,
      children: "\u2192"
    })]
  });
}
;// CONCATENATED MODULE: ./src/page-components/search/results/index.js





function SearchResults({
  edges = [],
  navigate,
  pageInfo
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: edges === null || edges === void 0 ? void 0 : edges.map(({
        cursor,
        node
      }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(listformat/* default */.Z, {
          item: node
        })
      }, cursor))
    }), /*#__PURE__*/jsx_runtime_.jsx(Pagination, {
      navigate: navigate,
      pageInfo: pageInfo
    })]
  });
}
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
;// CONCATENATED MODULE: ./src/page-components/search/facets/styles.js



const facets_styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1qouaiz-0"
})(["width:100%;"]);
const FacetsDisplayer = external_styled_components_default().div.withConfig({
  displayName: "styles__FacetsDisplayer",
  componentId: "sc-1qouaiz-1"
})(["", "{display:none;margin-top:15px;", ";}", "{display:none;", ";}> *:not(:first-child):not(:last-child){border-top:1px solid #dfdfdf;margin-top:35px;padding-top:30px;", "{margin-top:0;}}"], ui/* responsive.smAndLess */.jW.smAndLess, external_styled_is_default()('$show')`
      background: #fff;
      display: block;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      height: calc(var(--vh) * 100);
      width: 100%;
      overflow-y: auto;
      padding: 50px 15px 85px;
    `, ui/* responsive.mdPlus */.jW.mdPlus, external_styled_is_default()('$show')`
      display: block;
      display: grid;
      margin-bottom: 2rem;
      margin-top: 1rem;
      padding: 0;
      grid-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    `, ui/* responsive.mdPlus */.jW.mdPlus);
const FacetGroupOfAttributes = external_styled_components_default().div.withConfig({
  displayName: "styles__FacetGroupOfAttributes",
  componentId: "sc-1qouaiz-2"
})(["display:grid;grid-gap:0.25rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));"]);
const ButtonCloseFacets = external_styled_components_default().div.withConfig({
  displayName: "styles__ButtonCloseFacets",
  componentId: "sc-1qouaiz-3"
})(["display:none;", "{display:block;position:fixed;right:15px;bottom:15px;z-index:1;}"], ui/* responsive.smAndLess */.jW.smAndLess);
// EXTERNAL MODULE: external "rc-slider"
var external_rc_slider_ = __webpack_require__(4500);
;// CONCATENATED MODULE: ./src/page-components/search/facets/price/styles.js

const price_styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-19dzaxa-0"
})([""]);
const Values = external_styled_components_default().div.withConfig({
  displayName: "styles__Values",
  componentId: "sc-19dzaxa-1"
})(["display:grid;justify-content:center;align-items:center;margin-bottom:15px;grid-template-columns:1fr 1fr;input:first-child{border-right-color:transparent;}"]);
const Input = external_styled_components_default().input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-19dzaxa-2"
})(["background:white;border:1px solid #000;padding:8px 15px;flex:0 1 auto;width:100%;"]);
const RangeWrap = external_styled_components_default().div.withConfig({
  displayName: "styles__RangeWrap",
  componentId: "sc-19dzaxa-3"
})(["margin:0 10px;.rc-slider-track{background:#000;}.rc-slider-handle{border-color:#000;&.rc-slider-handle-dragging{border-color:#000;box-shadow:0 0 0 5px #000;}}"]);
;// CONCATENATED MODULE: ./src/page-components/search/facets/price/index.js
const _excluded = ["value", "onChange"];

function price_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function price_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { price_ownKeys(Object(source), true).forEach(function (key) { price_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { price_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function price_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function Price({
  min,
  max,
  value,
  onChange
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('search');
  const {
    0: priceValue,
    1: setPriceValue
  } = (0,external_react_.useState)(value);
  (0,external_react_.useEffect)(() => {
    setPriceValue(value);
  }, [value]);

  function onRangeChange(newValue) {
    setPriceValue({
      min: newValue[0],
      max: newValue[1]
    });
  }

  function onRangeDone() {
    onChange(priceValue);
  }

  function onMinChange(min) {
    onChange({
      min,
      max: priceValue.max > min ? priceValue.max : max
    });
  }

  function onMaxChange(max) {
    onChange({
      min: priceValue.min < max ? priceValue.min : min,
      max
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(price_styles_Outer, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Values, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(InputValue, {
        value: priceValue.min,
        onChange: onMinChange,
        "aria-label": t('facets.price.min')
      }), /*#__PURE__*/jsx_runtime_.jsx(InputValue, {
        value: priceValue.max,
        onChange: onMaxChange,
        "aria-label": t('facets.price.max')
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(RangeWrap, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_rc_slider_.Range, {
        min: min,
        max: max,
        value: [priceValue.min, priceValue.max],
        onChange: onRangeChange,
        onAfterChange: onRangeDone
      })
    })]
  });
}

function InputValue(_ref) {
  let {
    value,
    onChange
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  function onInputChange(evt) {
    onChange(parseFloat(evt.target.value));
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Input, price_objectSpread({
    type: "number",
    value: value,
    onChange: onInputChange
  }, rest));
}
;// CONCATENATED MODULE: ./src/page-components/search/facets/toggle-facets-button/styles.js

const Text = external_styled_components_default().span.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1ggfrw1-0"
})(["white-space:nowrap;"]);
const styles_Button = external_styled_components_default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1ggfrw1-1"
})(["align-items:center;appearance:none;background:var(--color-background);border:none;color:var(--color-text);cursor:pointer;display:inline-flex;font-family:var(--font-family-main);font-size:18px;font-weight:600;letter-spacing:0.5px;padding:0.75rem 1rem;position:relative;text-align:center;text-decoration:none;&:hover{background:var(--color-background-hover);color:var(--color-text-hover);border-radius:4px;}", "{margin-right:0.5rem;}"], Text);
;// CONCATENATED MODULE: ./src/ui/icons/filters.js


function IconFilters() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "31",
      height: "31"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M20.0063 13.5718H22.6C22.8457 13.5718 23.0813 13.4714 23.255 13.2928C23.4287 13.1142 23.5263 12.872 23.5263 12.6194C23.5263 12.3668 23.4287 12.1245 23.255 11.9459C23.0813 11.7673 22.8457 11.667 22.6 11.667H20.0063C19.7606 11.667 19.525 11.7673 19.3513 11.9459C19.1776 12.1245 19.08 12.3668 19.08 12.6194C19.08 12.872 19.1776 13.1142 19.3513 13.2928C19.525 13.4714 19.7606 13.5718 20.0063 13.5718ZM10.7432 11.667H5.92632C5.68064 11.667 5.44503 11.7673 5.27131 11.9459C5.09759 12.1245 5 12.3668 5 12.6194C5 12.872 5.09759 13.1142 5.27131 13.2928C5.44503 13.4714 5.68064 13.5718 5.92632 13.5718H10.7432C10.9888 13.5718 11.2244 13.4714 11.3982 13.2928C11.5719 13.1142 11.6695 12.872 11.6695 12.6194C11.6695 12.3668 11.5719 12.1245 11.3982 11.9459C11.2244 11.7673 10.9888 11.667 10.7432 11.667ZM8.52 20.4289H5.92632C5.68064 20.4289 5.44503 20.5292 5.27131 20.7078C5.09759 20.8864 5 21.1287 5 21.3813C5 21.6339 5.09759 21.8761 5.27131 22.0547C5.44503 22.2333 5.68064 22.3337 5.92632 22.3337H8.52C8.76567 22.3337 9.00129 22.2333 9.175 22.0547C9.34872 21.8761 9.44632 21.6339 9.44632 21.3813C9.44632 21.1287 9.34872 20.8864 9.175 20.7078C9.00129 20.5292 8.76567 20.4289 8.52 20.4289ZM22.6 20.4289H17.7832C17.5375 20.4289 17.3019 20.5292 17.1282 20.7078C16.9544 20.8864 16.8568 21.1287 16.8568 21.3813C16.8568 21.6339 16.9544 21.8761 17.1282 22.0547C17.3019 22.2333 17.5375 22.3337 17.7832 22.3337H22.6C22.8457 22.3337 23.0813 22.2333 23.255 22.0547C23.4287 21.8761 23.5263 21.6339 23.5263 21.3813C23.5263 21.1287 23.4287 20.8864 23.255 20.7078C23.0813 20.5292 22.8457 20.4289 22.6 20.4289Z",
      fill: "#080708"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M11.855 17.7619C11.1588 17.7619 10.4782 17.9742 9.89936 18.3718C9.32049 18.7695 8.86933 19.3347 8.60291 19.996C8.33649 20.6573 8.26678 21.385 8.4026 22.087C8.53842 22.789 8.87367 23.4339 9.36595 23.94C9.85823 24.4461 10.4854 24.7908 11.1682 24.9305C11.8511 25.0701 12.5588 24.9984 13.202 24.7245C13.8452 24.4506 14.395 23.9867 14.7817 23.3916C15.1685 22.7964 15.375 22.0967 15.375 21.381C15.375 20.4211 15.0041 19.5006 14.344 18.8219C13.6839 18.1432 12.7885 17.7619 11.855 17.7619ZM11.855 23.0952C11.5252 23.0952 11.2028 22.9947 10.9286 22.8063C10.6544 22.618 10.4407 22.3502 10.3145 22.037C10.1883 21.7237 10.1553 21.3791 10.2196 21.0465C10.284 20.714 10.4428 20.4085 10.676 20.1688C10.9091 19.929 11.2062 19.7658 11.5297 19.6996C11.8531 19.6335 12.1884 19.6674 12.493 19.7972C12.7977 19.9269 13.0581 20.1466 13.2413 20.4285C13.4245 20.7105 13.5223 21.0419 13.5223 21.381C13.5214 21.8353 13.3454 22.2708 13.0329 22.592C12.7204 22.9133 12.2969 23.0942 11.855 23.0952ZM16.6718 9C15.9756 9 15.2951 9.21225 14.7162 9.60992C14.1373 10.0076 13.6862 10.5728 13.4197 11.2341C13.1533 11.8954 13.0836 12.6231 13.2194 13.3251C13.3553 14.0271 13.6905 14.672 14.1828 15.1781C14.6751 15.6842 15.3023 16.0289 15.9851 16.1686C16.6679 16.3082 17.3757 16.2365 18.0189 15.9626C18.662 15.6887 19.2118 15.2248 19.5986 14.6297C19.9854 14.0345 20.1918 13.3348 20.1918 12.619C20.1918 12.1438 20.1008 11.6732 19.9239 11.2341C19.747 10.795 19.4877 10.3961 19.1608 10.06C18.834 9.72393 18.4459 9.45736 18.0189 9.27548C17.5918 9.09361 17.1341 9 16.6718 9V9ZM16.6718 14.3333C16.342 14.3333 16.0197 14.2328 15.7455 14.0444C15.4713 13.8561 15.2576 13.5883 15.1314 13.2751C15.0052 12.9618 14.9721 12.6171 15.0365 12.2846C15.1008 11.9521 15.2596 11.6466 15.4928 11.4069C15.726 11.1671 16.0231 11.0038 16.3465 10.9377C16.67 10.8716 17.0052 10.9055 17.3099 11.0353C17.6146 11.165 17.875 11.3847 18.0582 11.6666C18.2414 11.9486 18.3392 12.28 18.3392 12.619C18.3382 13.0734 18.1622 13.5088 17.8497 13.8301C17.5373 14.1514 17.1137 14.3323 16.6718 14.3333Z",
      fill: "#F6CACA"
    })]
  });
}
;// CONCATENATED MODULE: ./src/page-components/search/facets/toggle-facets-button/index.js
const toggle_facets_button_excluded = ["areFacetsShown"];

function toggle_facets_button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function toggle_facets_button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { toggle_facets_button_ownKeys(Object(source), true).forEach(function (key) { toggle_facets_button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { toggle_facets_button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function toggle_facets_button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggle_facets_button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = toggle_facets_button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function toggle_facets_button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const ButtonToggleFacets = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    areFacetsShown
  } = _ref,
      rest = toggle_facets_button_objectWithoutProperties(_ref, toggle_facets_button_excluded);

  const {
    t
  } = (0,external_next_i18next_.useTranslation)(['common', 'search']);
  const textToggleFacetsButton = areFacetsShown ? t('close') : t('search:filter');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Button, toggle_facets_button_objectSpread(toggle_facets_button_objectSpread({}, rest), {}, {
    ref: ref,
    style: {
      '--color-background': 'white',
      '--color-text': 'var(--color-primary-action-content)',
      '--color-background-hover': '#f7f7f7',
      '--color-text-hover': 'var(--color-primary-action-content)'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(Text, {
      children: textToggleFacetsButton
    }), /*#__PURE__*/jsx_runtime_.jsx(IconFilters, {})]
  }));
});
ButtonToggleFacets.displayName = 'ButtonToggleFacets';
;// CONCATENATED MODULE: ./src/page-components/search/facets/group/styles.js


const FacetHeader = external_styled_components_default().h4.withConfig({
  displayName: "styles__FacetHeader",
  componentId: "sc-9eym3s-0"
})(["color:#000;display:flex;font-size:16px;font-weight:600;justify-content:space-between;margin:0 0 15px;min-height:15px;text-transform:capitalize;"]);
const FacetTitle = external_styled_components_default().span.withConfig({
  displayName: "styles__FacetTitle",
  componentId: "sc-9eym3s-1"
})(["span{margin-right:15px;}"]);
const FacetAction = external_styled_components_default().button.withConfig({
  displayName: "styles__FacetAction",
  componentId: "sc-9eym3s-2"
})(["visibility:hidden;opacity:0;transition:opacity 250ms;"]);
const Facet = external_styled_components_default().div.withConfig({
  displayName: "styles__Facet",
  componentId: "sc-9eym3s-3"
})(["", "{padding:2.5rem 2rem;border:1px solid #dfdfdf;}&:hover ", "{visibility:visible;opacity:1;}"], ui/* responsive.mdPlus */.jW.mdPlus, FacetAction);
;// CONCATENATED MODULE: ./src/page-components/search/facets/group/action.js


function FaceGroupAction({
  onClick,
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(FacetAction, {
    onClick: onClick,
    children: children
  });
}
;// CONCATENATED MODULE: ./src/page-components/search/facets/group/index.js




function FacetGroup({
  title,
  action,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Facet, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FacetHeader, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FacetTitle, {
        children: title
      }), action]
    }), children]
  });
}
;// CONCATENATED MODULE: ./src/page-components/search/facets/checkbox/styles.js

const checkbox_styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1w1wi0-0"
})(["padding:4px 0;"]);
const Label = external_styled_components_default().label.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1w1wi0-1"
})(["display:flex;align-items:center;font-size:14px;text-transform:uppercase;font-weight:500;color:#000;"]);
const styles_Input = external_styled_components_default().input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1w1wi0-2"
})(["margin-right:5px;border:1px solid #000;border-radius:0;"]);
const Count = external_styled_components_default().span.withConfig({
  displayName: "styles__Count",
  componentId: "sc-1w1wi0-3"
})(["font-weight:600;margin-left:0.5em;"]);
;// CONCATENATED MODULE: ./src/page-components/search/facets/checkbox/index.js



function FacetCheckbox({
  attribute,
  value,
  count,
  isChecked,
  onChange
}) {
  function handleChange(evt) {
    onChange({
      attribute,
      value,
      isChecked: evt.target.checked
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(checkbox_styles_Outer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Label, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(styles_Input, {
          type: "checkbox",
          checked: isChecked,
          onChange: handleChange
        }), value]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Count, {
        children: ["(", count, ")"]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/page-components/search/facets/index.js
function facets_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function facets_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { facets_ownKeys(Object(source), true).forEach(function (key) { facets_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { facets_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function facets_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const SCREEN_SIZE_FROM_WE_DONT_BLOCK_SCROLL = 1024;
function Facets({
  aggregations = {},
  spec,
  changeQuery,
  totalResults
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('search');
  const {
    priceRange
  } = spec.filter.productVariants;
  const {
    price
  } = aggregations;
  const {
    0: areFacetsShown,
    1: setAreFacetsShown
  } = (0,external_react_.useState)(false);

  const showFilters = () => setAreFacetsShown(true);

  const hideFilters = () => setAreFacetsShown(false);

  const toggleFilters = () => {
    areFacetsShown ? hideFilters() : showFilters();
  }; // Only for small devices, the facets are shown as a "modal" when opened.
  // After opening them, the window scroll is blocked so the content
  // underneath that modal, can't be scrolled.
  //
  // For larger resolutions than 1024px included, we don't have that behavioir anymore.
  // When the facets are opened, the are toggled below the open/hide buttons.
  // Because of this, the body scroll should not be blocked.
  //
  // Given this requirements, we block the scroll of the body depending on the screen width.
  // Also, we don't check if window !== undefined because React Hooks are always executed
  // in the client side, where the window object exists.


  (0,external_react_.useEffect)(() => {
    if (window.innerWidth < SCREEN_SIZE_FROM_WE_DONT_BLOCK_SCROLL) {
      areFacetsShown ? lockDocumentScroll() : unlockDocumentScroll();
    }
  }, [areFacetsShown]); // Reset a single facet

  function resetFacet({
    name,
    attribute
  }) {
    changeQuery(query => {
      if (name === 'price') {
        delete query.min;
        delete query.max;
        return;
      }

      if (name === 'attribute' && !Array.isArray(query.attrs)) {
        delete query.attrs;
        return;
      }

      const index = query.attrs.findIndex(a => a.startsWith(`${attribute}:`));
      query.attrs.splice(index, 1);
    });
  }

  function onPriceChange(priceRange) {
    changeQuery(query => {
      delete query.min;
      delete query.max;

      if (priceRange.min !== price.min) {
        query.min = priceRange.min.toString();
      }

      if (priceRange.max !== price.max) {
        query.max = priceRange.max.toString();
      }
    });
  }

  function handleOnFacetCheckboxChange({
    attribute,
    value,
    isChecked
  }) {
    changeQuery(query => {
      const newAttrs = external_immer_default()(spec.filter.productVariants.attributes || [], draft => {
        const existingAttr = draft.find(attr => attr.attribute === attribute);

        if (!existingAttr) {
          draft.push({
            attribute,
            values: [value]
          });
          return;
        } // At this point we know for sure that is an existing attribute.


        isChecked ? existingAttr.values.push(value) : existingAttr.values.splice(existingAttr.values.indexOf(value), 1);
      }).filter(({
        values
      }) => values.length > 0);

      if (!newAttrs || newAttrs.length === 0) {
        delete query.attrs;
        return;
      }

      query.attrs = newAttrs.map(singleAttrToQuery);

      if (query.attrs.length === 1) {
        query.attrs = query.attrs[0];
      }
    });
  }

  const hasMinMaxPriceRangeValuesDifferent = priceRange && (priceRange === null || priceRange === void 0 ? void 0 : priceRange.min) !== (price === null || price === void 0 ? void 0 : price.min) && (priceRange === null || priceRange === void 0 ? void 0 : priceRange.max) !== (price === null || price === void 0 ? void 0 : price.max);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(facets_styles_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ButtonToggleFacets, {
      onClick: toggleFilters,
      areFacetsShown: areFacetsShown
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FacetsDisplayer, {
      $show: areFacetsShown,
      children: [price && price.min !== price.max && /*#__PURE__*/jsx_runtime_.jsx(FacetGroup, {
        title: t('facets.price.title'),
        action: hasMinMaxPriceRangeValuesDifferent && /*#__PURE__*/jsx_runtime_.jsx(FaceGroupAction, {
          onClick: () => resetFacet({
            name: 'price'
          }),
          children: t('facets.reset')
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx(Price, facets_objectSpread(facets_objectSpread({}, price), {}, {
          onChange: onPriceChange,
          value: facets_objectSpread(facets_objectSpread({}, price), priceRange)
        }))
      }), getAttributeGroups(aggregations).map(({
        attribute,
        values
      }) => {
        var _spec$filter, _spec$filter$productV, _spec$filter$productV2;

        const hasFiltersApplied = spec === null || spec === void 0 ? void 0 : (_spec$filter = spec.filter) === null || _spec$filter === void 0 ? void 0 : (_spec$filter$productV = _spec$filter.productVariants) === null || _spec$filter$productV === void 0 ? void 0 : (_spec$filter$productV2 = _spec$filter$productV.attributes) === null || _spec$filter$productV2 === void 0 ? void 0 : _spec$filter$productV2.some(a => a.attribute === attribute);

        function handleAttributeValueChange() {
          resetFacet({
            name: 'attribute',
            attribute
          });
        }

        return /*#__PURE__*/jsx_runtime_.jsx(FacetGroup, {
          title: attribute,
          action: hasFiltersApplied && /*#__PURE__*/jsx_runtime_.jsx(FaceGroupAction, {
            onClick: handleAttributeValueChange,
            children: t('facets.reset')
          }),
          children: /*#__PURE__*/jsx_runtime_.jsx(FacetGroupOfAttributes, {
            children: values.map(({
              value,
              count
            }) => {
              var _spec$filter2, _spec$filter2$product, _spec$filter2$product2;

              const isAttributeValueChecked = Boolean((_spec$filter2 = spec.filter) === null || _spec$filter2 === void 0 ? void 0 : (_spec$filter2$product = _spec$filter2.productVariants) === null || _spec$filter2$product === void 0 ? void 0 : (_spec$filter2$product2 = _spec$filter2$product.attributes) === null || _spec$filter2$product2 === void 0 ? void 0 : _spec$filter2$product2.some(attr => attr.attribute === attribute && attr.values.includes(value)));
              return /*#__PURE__*/jsx_runtime_.jsx(FacetCheckbox, {
                attribute: attribute,
                value: value,
                count: count,
                isChecked: isAttributeValueChecked,
                onChange: handleOnFacetCheckboxChange
              }, value);
            })
          })
        }, attribute);
      }), /*#__PURE__*/jsx_runtime_.jsx(ButtonCloseFacets, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ui/* Button */.zx, {
          onClick: hideFilters,
          children: t('facets.viewNResults', {
            count: totalResults
          })
        })
      })]
    })]
  });
}

function lockDocumentScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockDocumentScroll() {
  document.body.style.overflow = 'auto';
}

function singleAttrToQuery(attr) {
  return `${attr.attribute}:${attr.values.join(',')}`;
}

function getAttributeGroups({
  variantAttributes = []
}) {
  const groups = [];
  variantAttributes.forEach(({
    attribute,
    value,
    count
  }) => {
    const existingGroup = groups.find(g => g.attribute === attribute);
    existingGroup ? existingGroup.values.push({
      value,
      count
    }) : groups.push({
      attribute,
      values: [{
        value,
        count
      }]
    });
  });
  return groups;
}
;// CONCATENATED MODULE: ./src/page-components/search/count/index.js




const TotalResults = external_styled_components_default().span.withConfig({
  displayName: "count__TotalResults",
  componentId: "sc-1k8z0la-0"
})(["color:#000;font-weight:600;display:block;margin-bottom:10px;font-size:1rem;"]);
function SearchCount({
  count
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(TotalResults, {
    children: t('search.foundResults', {
      count
    })
  });
}
;// CONCATENATED MODULE: ./src/page-components/search/index.js
const search_excluded = ["query", "asPath"],
      _excluded2 = ["catalogue"],
      _excluded3 = ["catalogue"];

function search_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = search_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function search_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_ownKeys(Object(source), true).forEach(function (key) { search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const search_Outer = external_styled_components_default()(ui/* Inner */.Nh).withConfig({
  displayName: "search__Outer",
  componentId: "sc-l8usc0-0"
})([""]);


async function loadPage(spec) {
  const {
    data
  } = await (0,graph/* simplyFetchFromSearchGraph */.nx)({
    query: lib_search/* SEARCH_QUERY */.dZ,
    variables: search_objectSpread(search_objectSpread({}, spec), {}, {
      aggregationsFilter: cleanFilterForTotalAggregations(spec.filter)
    })
  });
  const {
    search,
    aggregations: {
      aggregations
    } = {}
  } = data || {};
  return {
    search,
    aggregations
  };
}

function SearchPage(props) {
  var _catalogue$searchPage, _catalogue$searchPage2, _catalogue$searchPage3, _catalogue$searchPage4, _catalogue$searchPage5, _catalogue$searchPage6, _catalogue$searchPage7, _catalogue$searchPage8, _catalogue$searchPage9;

  const {
    search,
    catalogue
  } = props;
  const firstLoad = (0,external_react_.useRef)();

  const _useRouter = (0,router_.useRouter)(),
        {
    query,
    asPath
  } = _useRouter,
        router = search_objectWithoutProperties(_useRouter, search_excluded);

  const locale = (0,app_config/* useLocale */.bU)();
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(search);
  /**
   * Memoize the load page function so that it only changes
   * if the asPath or locale changes
   */

  const loadPageCb = (0,external_react_.useCallback)(async query => {
    const {
      catalogue
    } = query,
          rest = search_objectWithoutProperties(query, _excluded2);

    const newData = await loadPage((0,lib_search/* urlToSpec */.kL)({
      query: rest,
      asPath
    }, locale));
    setData(newData);
  }, [asPath, locale]); // The search specifications from the path, locale and query

  const spec = (0,lib_search/* urlToSpec */.kL)({
    query,
    asPath
  }, locale); // Initial data changed

  (0,external_react_.useEffect)(() => {
    setData(search);
  }, [search]); // Query changed

  (0,external_react_.useEffect)(() => {
    if (!firstLoad.current) {
      firstLoad.current = true;

      if (query.catalogue) {
        return;
      }
    }

    loadPageCb(query);
  }, [query, loadPageCb]); // Change the url query params

  function changeQuery(fn) {
    const newQuery = external_immer_default()(query, draft => {
      delete draft.before;
      delete draft.after;
      fn(draft);
    });
    /*
     * We need to extract the [...catalogue] query params
     * in order to get a clean set of query params to work with
     */

    const {
      catalogue
    } = newQuery,
          queryWithoutRouteInfo = search_objectWithoutProperties(newQuery, _excluded3);

    const newQueryAsString = new URLSearchParams(queryWithoutRouteInfo).toString();
    let asPathClean = asPath.split('?')[0];

    if (newQueryAsString) {
      asPathClean += `?${newQueryAsString}`;
    }

    router.replace({
      pathname: router.pathname,
      query: newQuery
    }, asPathClean, {
      shallow: true
    });
  }

  function navigate({
    direction
  }) {
    if (direction === 'nextPage') {
      return changeQuery(query => {
        query.after = data.search.pageInfo.endCursor;
      });
    } else {
      changeQuery(query => {
        query.before = data.search.pageInfo.startCursor;
      });
    }
  }

  function handleOrderByChange(orderBy, index) {
    changeQuery(query => {
      if (index > 0) {
        query.orderby = orderBy.value;
      } else {
        delete query.orderby;
      }
    });
  } // We're waiting for the search result to come in


  const isWaitingForSearchResult = !data || !data.search;

  if (isWaitingForSearchResult) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      title: "Searching...",
      children: /*#__PURE__*/jsx_runtime_.jsx(search_Outer, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListOuter, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(OrderBy, {
            orderBy: spec.orderBy,
            onChange: handleOrderByChange
          }), /*#__PURE__*/jsx_runtime_.jsx(Facets, {
            spec: spec,
            changeQuery: changeQuery
          })]
        })
      })
    });
  }

  const title = catalogue !== null && catalogue !== void 0 && (_catalogue$searchPage = catalogue.searchPage) !== null && _catalogue$searchPage !== void 0 && _catalogue$searchPage.name ? catalogue.searchPage.name : 'Search';
  const description = catalogue === null || catalogue === void 0 ? void 0 : (_catalogue$searchPage2 = catalogue.searchPage) === null || _catalogue$searchPage2 === void 0 ? void 0 : (_catalogue$searchPage3 = _catalogue$searchPage2.components) === null || _catalogue$searchPage3 === void 0 ? void 0 : (_catalogue$searchPage4 = _catalogue$searchPage3.find(c => c.name === 'Brief')) === null || _catalogue$searchPage4 === void 0 ? void 0 : (_catalogue$searchPage5 = _catalogue$searchPage4.content) === null || _catalogue$searchPage5 === void 0 ? void 0 : _catalogue$searchPage5.json;
  const stacks = catalogue === null || catalogue === void 0 ? void 0 : (_catalogue$searchPage6 = catalogue.searchPage) === null || _catalogue$searchPage6 === void 0 ? void 0 : (_catalogue$searchPage7 = _catalogue$searchPage6.components) === null || _catalogue$searchPage7 === void 0 ? void 0 : (_catalogue$searchPage8 = _catalogue$searchPage7.find(c => c.name === 'Stackable content')) === null || _catalogue$searchPage8 === void 0 ? void 0 : (_catalogue$searchPage9 = _catalogue$searchPage8.content) === null || _catalogue$searchPage9 === void 0 ? void 0 : _catalogue$searchPage9.items;
  const totalResults = data.search.aggregations.totalResults;
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: title,
    description: toText_default()(description),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(search_Outer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
        title,
        description
      }), /*#__PURE__*/jsx_runtime_.jsx(stackable/* default */.Z, {
        stacks: stacks
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListOuter, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchActions, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Facets, {
            aggregations: data.aggregations,
            spec: spec,
            changeQuery: changeQuery,
            totalResults: totalResults
          }), /*#__PURE__*/jsx_runtime_.jsx(LocateRight, {
            children: /*#__PURE__*/jsx_runtime_.jsx(OrderBy, {
              orderBy: spec.orderBy,
              onChange: handleOrderByChange
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(SearchCount, {
          count: totalResults
        }), /*#__PURE__*/jsx_runtime_.jsx(SearchResults, search_objectSpread(search_objectSpread({}, data.search), {}, {
          spec: spec,
          navigate: navigate
        }))]
      })]
    })
  });
}

/***/ })

};
;