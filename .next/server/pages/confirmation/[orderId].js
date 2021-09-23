"use strict";
(() => {
var exports = {};
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 1624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Confirmation),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: ./src/lib/service-api.js
var service_api = __webpack_require__(3475);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/layout/index.js + 21 modules
var layout = __webpack_require__(6381);
// EXTERNAL MODULE: ./src/components/basket/index.js + 4 modules
var components_basket = __webpack_require__(7384);
// EXTERNAL MODULE: ./src/components/order-items/index.js + 1 modules
var order_items = __webpack_require__(7537);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/page-components/checkout/billing-details/index.js






const Outer = external_styled_components_default().div.withConfig({
  displayName: "billing-details__Outer",
  componentId: "sc-2wytmw-0"
})(["width:300px;p{margin-bottom:0.5rem;}", "{width:100%;}"], ui/* responsive.xs */.jW.xs);
const Inner = external_styled_components_default().div.withConfig({
  displayName: "billing-details__Inner",
  componentId: "sc-2wytmw-1"
})(["display:flex;flex-direction:column;width:100%;font-size:16px;"]);

const BillingDetails = ({
  order
}) => {
  var _order$customer$addre;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('customer');
  const {
    email
  } = ((_order$customer$addre = order.customer.addresses) === null || _order$customer$addre === void 0 ? void 0 : _order$customer$addre[0]) || {};
  return /*#__PURE__*/jsx_runtime_.jsx(Outer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Inner, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui.H3, {
        children: "Billing Details"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [t('name'), ":", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          children: [order.customer.firstName, " ", order.customer.lastName]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [t('email'), ": ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: email
        })]
      })]
    })
  });
};

/* harmony default export */ const billing_details = (BillingDetails);
;// CONCATENATED MODULE: ./src/page-components/checkout/confirmation.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const CustomHeader = external_styled_components_default()(ui/* Header */.h4).withConfig({
  displayName: "confirmation__CustomHeader",
  componentId: "sc-a8l730-0"
})(["margin-bottom:0;padding-bottom:0;"]);
const Line = external_styled_components_default().div.withConfig({
  displayName: "confirmation__Line",
  componentId: "sc-a8l730-1"
})(["margin:20px 0;border-bottom:1px solid var(--color-main-background);"]);
const Totals = external_styled_components_default().div.withConfig({
  displayName: "confirmation__Totals",
  componentId: "sc-a8l730-2"
})(["margin:10px 15px;"]);
const TotalLine = external_styled_components_default().div.withConfig({
  displayName: "confirmation__TotalLine",
  componentId: "sc-a8l730-3"
})(["text-align:right;margin-top:5px;", ";"], external_styled_is_default()('bold')`
    font-size: 1.2rem;
    font-weight: 600;
  `);
function Confirmation({
  order
}) {
  var _order$customer$addre, _order$customer$addre2;

  const basket = (0,components_basket/* useBasket */.K)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)(['common', 'checkout', 'order']);
  const router = (0,router_.useRouter)(); // Empty the basket

  (0,external_react_.useEffect)(() => {
    if (router.query) {
      if ('emptyBasket' in router.query) {
        basket.actions.empty();
        const url = new URL(location.href);
        url.searchParams.delete('emptyBasket');
        router.replace({
          pathname: router.pathname,
          query: Object.fromEntries(url.searchParams)
        }, url.pathname + url.search, {
          shallow: true
        });
      }
    }
  });
  (0,external_react_.useEffect)(() => {
    if (!order) {
      const t = setTimeout(() => window.location.reload(), 5000);
      return () => clearTimeout(t);
    }
  }, [order]);

  if (!order) {
    return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      loading: true
    });
  }

  const cart = order.cart.map(item => _objectSpread(_objectSpread({}, item), {}, {
    image: {
      url: item.imageUrl
    }
  }));
  const email = (_order$customer$addre = order.customer.addresses) === null || _order$customer$addre === void 0 ? void 0 : (_order$customer$addre2 = _order$customer$addre[0]) === null || _order$customer$addre2 === void 0 ? void 0 : _order$customer$addre2.email;
  const {
    total
  } = order;
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: t('checkout:confirmation.title'),
    children: /*#__PURE__*/jsx_runtime_.jsx(ui/* Outer */.mI, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CustomHeader, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ui.H1, {
          children: t('checkout:confirmation.title')
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: t('checkout:confirmation.shortStatus', {
            context: email ? 'withEmail' : null,
            email
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Line, {}), /*#__PURE__*/jsx_runtime_.jsx(billing_details, {
          order: order
        }), /*#__PURE__*/jsx_runtime_.jsx(Line, {}), /*#__PURE__*/jsx_runtime_.jsx(ui.H3, {
          children: t('order:item', {
            count: cart.length
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(order_items/* default */.Z, {
          cart: cart
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Totals, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TotalLine, {
            bold: true,
            children: [t('order:total'), ":", ' ', t('price', {
              value: total.gross,
              currency: total.currency
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(TotalLine, {
            children: t('tax', {
              value: total.gross - total.net,
              currency: total.currency
            })
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(2147);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/confirmation/[orderId].js
function _orderId_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _orderId_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _orderId_ownKeys(Object(source), true).forEach(function (key) { _orderId_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _orderId_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _orderId_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





async function getServerSideProps({
  locale,
  query: {
    orderId
  }
}) {
  const response = await (0,service_api/* default */.Z)({
    query: `
      {
        orders {
          get(id: "${orderId}")
        }
      }
    `
  });
  return {
    props: _orderId_objectSpread({
      order: response.data.orders.get
    }, await (0,serverSideTranslations_.serverSideTranslations)(locale, ['common', 'basket', 'checkout'], (next_i18next_config_default())))
  };
}

/***/ }),

/***/ 5173:
/***/ ((module) => {

module.exports = require("@crystallize/react-image");

/***/ }),

/***/ 7890:
/***/ ((module) => {

module.exports = require("@crystallize/react-layout");

/***/ }),

/***/ 4584:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6584:
/***/ ((module) => {

module.exports = require("styled-is");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,561,22,50,537], () => (__webpack_exec__(1624)));
module.exports = __webpack_exports__;

})();