exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 2147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(5622);
/**
 * Intl takes the BCP 47 language code as
 * constructor argument, so you (might)
 * need to convert the locale to BCP 47
 */


const localeToBCP47 = {
  en: 'en-US',
  no: 'nb-NO'
}; // For more information on internationalized routing,
// check out the Next.js docs:
// https://nextjs.org/docs/advanced-features/i18n-routing

module.exports = {
  i18n: {
    // Match these locales with app.config.json
    defaultLocale: 'en',
    locales: ['en', 'no'],
    localePath: path.resolve('./public/static/locales')
  },
  serializeConfig: false,
  interpolation: {
    escapeValue: false,

    // react already safe from xss
    format(value, format, locale, {
      currency
    }) {
      const localeBCP47 = localeToBCP47[locale];

      if (format === 'currency') {
        if (typeof value === 'undefined' || !currency) {
          return 'N/A';
        }

        return new Intl.NumberFormat(localeBCP47 || locale, {
          style: 'currency',
          currency
        }).format(value);
      }

      return value;
    }

  }
};

/***/ }),

/***/ 7384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ BasketProvider),
  "K": () => (/* binding */ useBasket)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/lib/service-api.js
var service_api = __webpack_require__(3475);
;// CONCATENATED MODULE: ./src/components/basket/cache.js
const cacheKey = 'app-basket';
async function retrieveFromCache() {
  try {
    const cache = await localStorage.getItem(cacheKey);

    if (cache) {
      return JSON.parse(cache);
    }
  } catch (error) {// We might not have access to localStorage
  }

  return {};
}
function persistToCache(data) {
  try {
    return localStorage.setItem(cacheKey, JSON.stringify(data));
  } catch (error) {// We might not have access to localStorage
  }
}
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/components/basket/reducer.js
const _excluded = ["action"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const initialState = {
  status: 'not-hydrated',

  /**
   * A simplistic basket which gets stored on client side
   * Each client cart item consists of these fields:
   *  - sku
   *  - path
   *  - priceVariantIdentifier
   *  - quantity
   */
  clientBasket: {
    cart: [],
    voucherCode: null,

    /**
     * In some cases we create an order in Crystallize before
     * the checkout is completed. Currently, this is done for
     * Klarna and Vipps payments
     */
    crystallizeOrderId: null,

    /**
     * Track unfinished Klarna order
     * Only used if you're doing Klarna payments
     */
    klarnaOrderId: null
  },
  // The validated basket sent back from the Service API
  serverBasket: null,
  // The basket cart item to draw attention to
  attentionCartItem: {}
};
/* harmony default export */ const reducer = (external_immer_default()(function reducer(draft, _ref) {
  let {
    action
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  /**
   * This flag helps keeping track of if the incoming
   * change is triggered by _this_ browser tab or a
   * different browser tab
   */
  draft.changeTriggeredByOtherTab = false;

  switch (action) {
    case 'hydrate':
      {
        if (draft.status === 'not-hydrated') {
          if (rest.cart) {
            draft.clientBasket = rest || initialState.clientBasket;

            if (!draft.clientBasket.cart) {
              draft.clientBasket.cart = initialState.clientBasket.cart;
            }
          }

          draft.status = 'server-basket-is-stale';
        }

        break;
      }

    case 'channel-update':
      {
        draft.clientBasket = rest.clientBasket;
        draft.serverBasket = rest.serverBasket;
        draft.changeTriggeredByOtherTab = true;
        draft.status = 'ready';
        break;
      }

    case 'set-crystallize-order-id':
      {
        draft.clientBasket.crystallizeOrderId = rest.crystallizeOrderId;
        break;
      }

    case 'set-klarna-order-id':
      {
        draft.clientBasket.klarnaOrderId = rest.klarnaOrderId;
        break;
      }

    case 'server-update-failed':
      {
        draft.status = 'server-update-failed';
        break;
      }

    case 'retry-server-update':
      {
        draft.status = 'server-basket-is-stale';
        break;
      }

    case 'empty':
      {
        draft.clientBasket = initialState.clientBasket;
        draft.status = 'server-basket-is-stale';
        break;
      }

    case 'add-item':
    case 'remove-item':
    case 'increment-item':
    case 'decrement-item':
      {
        const {
          sku,
          path,
          priceVariantIdentifier = 'default'
        } = rest;

        if (!sku || !path) {
          throw new Error(`Please provide "sku" and "path" for ${action}`);
        }

        const itemIndex = draft.clientBasket.cart.findIndex(i => i.sku === sku);

        if (itemIndex !== -1) {
          if (action === 'remove-item') {
            draft.clientBasket.cart.splice(itemIndex, 1);
          } else {
            const item = draft.clientBasket.cart[itemIndex];

            if (action === 'decrement-item') {
              item.quantity -= 1;
            } else {
              item.quantity += 1;
            }
          }
        } else {
          if (!['remove-item', 'decrement-item'].includes(action)) {
            draft.clientBasket.cart.push({
              sku,
              path,
              priceVariantIdentifier,
              quantity: 1
            });
          }
        }

        draft.status = 'server-basket-is-stale';
        break;
      }

    case 'set-server-basket':
      {
        draft.serverBasket = rest.serverBasket;
        draft.status = 'ready';
        /**
         * If running against the Service API demo, we can only
         * add products that are registered for the demo Crystallize
         * tenant, furniture.
         */

        if (false) {}

        break;
      }

    case 'draw-attention':
      {
        draft.attentionCartItem = {
          time: Date.now(),
          sku: rest.sku
        };
        break;
      }

    case 'add-voucher':
      {
        draft.clientBasket.voucherCode = rest.voucherCode;
        draft.status = 'server-basket-is-stale';
        break;
      }

    case 'remove-voucher':
      {
        draft.clientBasket.voucherCode = initialState.clientBasket.voucherCode;
        draft.status = 'server-basket-is-stale';
        break;
      }

    default:
      {
        throw new Error(`Action ${action} not supported`);
      }
  } // A cart item is only valid if we have path and sku


  if (draft.clientBasket.cart.length > 0) {
    draft.clientBasket.cart = draft.clientBasket.cart.filter(function validateCartItem({
      path,
      sku
    }) {
      return path && sku;
    });
  }

  draft.totalQuantity = draft.clientBasket.cart.reduce((acc, c) => acc + c.quantity, 0);
}));
;// CONCATENATED MODULE: ./src/components/basket/shared-channel.js
/**
 * Share basket state across tabs/iframes for browsers
 * that support that
 * https://caniuse.com/#feat=broadcastchannel
 */
let channel;

if (false) {}

function getChannel() {
  return channel;
}
;// CONCATENATED MODULE: ./src/components/basket/get-basket-query.js
/* harmony default export */ const get_basket_query = (`
  query getServerBasket($basketModel: BasketModelInput!) {
    basket(basketModel: $basketModel) {
      total {
        gross
        net
        tax {
          name
          percent
        }
        currency
        discount
      }
      cart {
        sku
        name
        path
        quantity
        attributes {
          attribute
          value
        }
        price {
          gross
          currency
        }
        images {
          url
          variants {
            url
            width
            height
          }
        }
      }
    }
  }
`);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/basket/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BasketContext = /*#__PURE__*/external_react_default().createContext();
const useBasket = () => external_react_default().useContext(BasketContext);

function clientCartItemForAPI({
  sku,
  path,
  quantity,
  priceVariantIdentifier
}) {
  return {
    sku,
    path,
    quantity,
    priceVariantIdentifier
  };
}

function BasketProvider({
  locale,
  children
}) {
  const {
    0: {
      status,
      clientBasket,
      serverBasket,
      totalQuantity,
      changeTriggeredByOtherTab,
      attentionCartItem
    },
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, initialState);
  const sharedChannelRef = (0,external_react_.useRef)(getChannel());
  (0,external_react_.useEffect)(() => {
    // Retrieve cached basket
    (async function init() {
      const cache = await retrieveFromCache();
      dispatch(_objectSpread({
        action: 'hydrate'
      }, cache));
    })(); // Listen for channel updates


    if (sharedChannelRef.current) {
      sharedChannelRef.current.onmessage = function (event) {
        dispatch(_objectSpread({
          action: 'channel-update'
        }, JSON.parse(event.data)));
      };
    }
  }, []); // Persist the basket on the client

  (0,external_react_.useEffect)(() => {
    if (status !== 'not-hydrated') {
      persistToCache(_objectSpread(_objectSpread({}, clientBasket), {}, {
        cart: clientBasket.cart.map(clientCartItemForAPI)
      }));
    }
  }, [status, clientBasket]);
  /**
   * Broadcast this change to anyone listening to the channel
   * This is typically other tabs opened for this site, thus
   * enabling a synced cart across all open tabs
   */

  (0,external_react_.useEffect)(() => {
    if (status === 'ready') {
      if (!changeTriggeredByOtherTab) {
        var _sharedChannelRef$cur;

        (_sharedChannelRef$cur = sharedChannelRef.current) === null || _sharedChannelRef$cur === void 0 ? void 0 : _sharedChannelRef$cur.postMessage(JSON.stringify({
          clientBasket,
          serverBasket
        }));
      }
    }
  }, [status, clientBasket, serverBasket, changeTriggeredByOtherTab]);
  /**
   * Define the basketModel object.
   * Used here and in the checkout
   */

  const basketModel = (0,external_react_.useMemo)(() => ({
    locale,
    cart: clientBasket.cart.map(clientCartItemForAPI),
    voucherCode: clientBasket.voucherCode,
    crystallizeOrderId: clientBasket.crystallizeOrderId,
    klarnaOrderId: clientBasket.klarnaOrderId
  }), [locale, clientBasket]); // Get server state on cart change

  (0,external_react_.useEffect)(() => {
    let stale = false;

    async function getServerBasket() {
      try {
        const response = await (0,service_api/* default */.Z)({
          query: get_basket_query,
          variables: {
            basketModel
          }
        });

        if (!stale && response.data) {
          dispatch({
            action: 'set-server-basket',
            serverBasket: response.data.basket
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          action: 'server-update-failed'
        });
      }
    }

    let timeout;

    if (status === 'server-basket-is-stale') {
      timeout = setTimeout(getServerBasket, 250);
    }

    return () => {
      stale = true;
      clearTimeout(timeout);
    };
  }, [status, locale.crystallizeCatalogueLanguage, basketModel]);

  function dispatchCartItemAction(action) {
    return data => dispatch(_objectSpread({
      action
    }, data));
  }

  function withLocalState(item) {
    // Exclude voucher codes
    if (item.sku.startsWith('--voucher--')) {
      return item;
    }

    const clientBasketCartItem = clientBasket.cart.find(c => c.sku === item.sku);
    /**
     * Don't show the cart item if it is not in
     * the client cache.
     **/

    if (!clientBasketCartItem) {
      return null;
    }

    return _objectSpread(_objectSpread({}, item), {}, {
      quantity: clientBasketCartItem.quantity
    });
  }

  const cart = ((serverBasket === null || serverBasket === void 0 ? void 0 : serverBasket.cart) || []).map(withLocalState).filter(Boolean);
  /**
   * Something went wrong when fetching the basket from the Service API
   * You should not show this feedback in production, and rather deal
   * with Service API errors in a more smooth fashion
   */

  if (status === 'server-update-failed') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        margin: '0 auto',
        maxWidth: 400,
        padding: 50
      },
      children: ["Oh-uh. Something went wrong when getting data from the Service API", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => dispatch({
          action: 'retry-server-update'
        }),
        children: "Try again"
      })]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(BasketContext.Provider, {
    value: {
      status,
      basketModel,
      cart,
      total: (serverBasket === null || serverBasket === void 0 ? void 0 : serverBasket.total) || {},
      totalQuantity,
      attentionCartItem,
      actions: {
        addVoucherCode: voucherCode => dispatch({
          action: 'add-voucher',
          voucherCode
        }),
        removeVoucherCode: () => dispatch({
          action: 'remove-voucher'
        }),
        empty: () => dispatch({
          action: 'empty'
        }),
        addItem: dispatchCartItemAction('add-item'),
        removeItem: dispatchCartItemAction('remove-item'),
        incrementItem: dispatchCartItemAction('increment-item'),
        decrementItem: dispatchCartItemAction('decrement-item'),
        drawAttention: sku => dispatch({
          action: 'draw-attention',
          sku
        }),
        setCrystallizeOrderId: crystallizeOrderId => dispatch({
          action: 'set-crystallize-order-id',
          crystallizeOrderId
        }),
        setKlarnaOrderId: klarnaOrderId => dispatch({
          action: 'set-klarna-order-id',
          klarnaOrderId
        })
      }
    },
    children: children
  });
}

/***/ }),

/***/ 6288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rV": () => (/* binding */ useSettings),
/* harmony export */   "mu": () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* unused harmony export SettingsContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 // A simple context for handling the current settings


const SettingsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  mainNavigation: []
});
const useSettings = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SettingsContext);
const SettingsProvider = ({
  mainNavigation,
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SettingsContext.Provider, {
    value: {
      mainNavigation
    },
    children: children
  });
};

/***/ }),

/***/ 3475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ serviceApi)
/* harmony export */ });
async function serviceApi({
  uri = "http://localhost:3001/api/graphql",
  query,
  variables
}) {
  const body = JSON.stringify({
    query,
    variables
  });
  const response = await fetch(uri, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const json = await response.json();

  if (json.errors) {
    console.error('Service API encountered an error', json.errors);
  }

  return json;
}

/***/ })

};
;