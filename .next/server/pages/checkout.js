"use strict";
(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 6364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ CheckoutWithLayout),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/basket/index.js + 4 modules
var components_basket = __webpack_require__(7384);
// EXTERNAL MODULE: ./src/components/layout/index.js + 21 modules
var layout = __webpack_require__(6381);
// EXTERNAL MODULE: ./src/components/order-items/index.js + 1 modules
var order_items = __webpack_require__(7537);
// EXTERNAL MODULE: ./src/components/basket/totals/index.js + 1 modules
var totals = __webpack_require__(2575);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/lib/service-api.js
var service_api = __webpack_require__(3475);
// EXTERNAL MODULE: ./src/ui/spinner.js
var spinner = __webpack_require__(298);
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
;// CONCATENATED MODULE: ./src/page-components/checkout/styles.js



const Outer = external_styled_components_default()(ui/* Outer */.mI).withConfig({
  displayName: "styles__Outer",
  componentId: "sc-ay12ty-0"
})(["", ";"], external_styled_is_default()('center')`
    padding-top: 20vh;
    text-align: center;
  `);
const Inner = external_styled_components_default().div.withConfig({
  displayName: "styles__Inner",
  componentId: "sc-ay12ty-1"
})(["", "{display:grid;grid-gap:15px;grid-template-columns:1fr 1fr;padding-top:30px;}"], ui/* responsive.smPlus */.jW.smPlus);
const Label = external_styled_components_default().div.withConfig({
  displayName: "styles__Label",
  componentId: "sc-ay12ty-2"
})(["font-size:0.7rem;font-weight:600;opacity:1;padding-bottom:8px;text-transform:uppercase;"]);
const InputGroup = external_styled_components_default().div.withConfig({
  displayName: "styles__InputGroup",
  componentId: "sc-ay12ty-3"
})(["width:100%;padding-right:15px;"]);
const Input = external_styled_components_default().input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-ay12ty-4"
})(["background:var(--color-main-background);border-bottom:1px solid var(--color-box-background);border:none;color:var(--color-text-sub);font-size:1rem;font-weight:500;margin-bottom:0.5rem;padding:15px 15px;transition:border 0.2s ease-in-out;width:100%;&::placeholder{font-size:12px;opacity:0.5;padding-left:10px;}&:valid{border-bottom:1px solid #b7e2e4;}&:invalid{border-bottom:1px solid var(--color-error);}&[value='']{border-bottom:1px solid var(--color-box-background);}"]);
const ErrorMessage = external_styled_components_default().p.withConfig({
  displayName: "styles__ErrorMessage",
  componentId: "sc-ay12ty-5"
})(["color:var(--color-error);font-size:16px;margin-top:1rem;"]);
const StripeWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__StripeWrapper",
  componentId: "sc-ay12ty-6"
})(["padding-bottom:1rem;width:100%;"]);
const PaymentProviders = external_styled_components_default().div.withConfig({
  displayName: "styles__PaymentProviders",
  componentId: "sc-ay12ty-7"
})(["display:flex;flex-direction:column;overflow:hidden;"]);
const PaymentButton = external_styled_components_default().button.withConfig({
  displayName: "styles__PaymentButton",
  componentId: "sc-ay12ty-8"
})(["background:", ";border-radius:10px;font-size:18px;height:80px;margin-right:1%;margin-bottom:3%;padding:0.5rem;min-width:125px;img{display:block;margin:0 auto;max-height:25px;max-width:100px;}&:last-child{border-bottom:none;}opacity:0.5;", ";"], p => p.color, external_styled_is_default()('selected')`
    opacity: 1;
  `);
const PaymentProvider = external_styled_components_default().div.withConfig({
  displayName: "styles__PaymentProvider",
  componentId: "sc-ay12ty-9"
})(["display:flex;flex-direction:column;padding:2rem 0;"]);
const PaymentSelector = external_styled_components_default().div.withConfig({
  displayName: "styles__PaymentSelector",
  componentId: "sc-ay12ty-10"
})(["display:flex;flex-wrap:wrap;", "{flex-wrap:no-wrap;}"], ui/* responsive.mdPlus */.jW.mdPlus);
const SectionHeader = external_styled_components_default()(ui.H3).withConfig({
  displayName: "styles__SectionHeader",
  componentId: "sc-ay12ty-11"
})(["border-bottom:1px solid #dfdfdf;font-size:16px;font-weight:600;margin-top:0;padding-bottom:20px;text-transform:uppercase;"]);
const CheckoutFormGroup = external_styled_components_default().div.withConfig({
  displayName: "styles__CheckoutFormGroup",
  componentId: "sc-ay12ty-12"
})(["", ""], props => props.withUpperMargin && `
    margin-top: 50px;
  `);
const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-ay12ty-13"
})(["background:var(--color-box-background);margin-bottom:25px;padding:50px 30px;width:100%;", "{margin-bottom:0;}", "{padding:50px 75px;}"], ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.mdPlus */.jW.mdPlus);
;// CONCATENATED MODULE: ./src/page-components/checkout/voucher/styles.js


const VoucherDisplayer = external_styled_components_default().div.withConfig({
  displayName: "styles__VoucherDisplayer",
  componentId: "sc-w0bvef-0"
})(["display:flex;align-items:stretch;", "{margin-bottom:0;}"], Input);
const ShowForm = external_styled_components_default().div.withConfig({
  displayName: "styles__ShowForm",
  componentId: "sc-w0bvef-1"
})(["cursor:pointer;&:hover{text-decoration:underline;}"]);
const styles_ErrorMessage = external_styled_components_default().span.withConfig({
  displayName: "styles__ErrorMessage",
  componentId: "sc-w0bvef-2"
})(["color:var(--color-text-sub);display:block;font-size:16px;font-style:italic;margin-top:1rem;"]);
const VoucherApplied = external_styled_components_default().div.withConfig({
  displayName: "styles__VoucherApplied",
  componentId: "sc-w0bvef-3"
})(["span{display:inline-block;padding:5px 8px;background:#fff;margin:0 5px 0 10px;}button{appearance:none;border:none;text-decoration:underline;&:hover{text-decoration:none;}}"]);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./src/page-components/checkout/voucher/reducer.js

const initialVoucherState = {
  showForm: false,
  status: 'idle',
  voucherCode: ''
};
/* harmony default export */ const reducer = (external_immer_default()(function reducer(draft, {
  action,
  payload
}) {
  switch (action) {
    case 'show-form':
      {
        draft.showForm = true;
        break;
      }

    case 'update-voucher':
      {
        draft.voucherCode = payload.voucherCode;
        draft.status = initialVoucherState.status;
        break;
      }

    case 'voucher-validating':
      {
        draft.status = 'voucher-validating';
        break;
      }

    case 'voucher-validation-failed':
      {
        draft.status = 'voucher-invalid';
        break;
      }

    case 'voucher-validation-successfully':
      {
        draft.status = 'voucher-valid';
        break;
      }

    default:
      throw new Error(`Action "${action}" not provided nor supported!`);
  }
}));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/page-components/checkout/voucher/index.js










function Voucher() {
  var _basket$basketModel;

  const basket = (0,components_basket/* useBasket */.K)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('basket'); // We can create the initial state lazily by passing a function as third parameter that returns
  // the inital state desired. This is usually done when it depends on props.
  // See more at https://reactjs.org/docs/hooks-reference.html#lazy-initialization

  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, initialVoucherState);
  const {
    voucherCode,
    status
  } = state;

  async function onSubmit(e) {
    var _response$data, _response$data$vouche;

    e.preventDefault(); // If a voucher code has been validated and applied,
    // the user can't submit many times the same value.

    if (state.voucherCode === basket.basketModel.voucherCode) {
      return;
    }

    dispatch({
      action: 'voucher-validating'
    });
    const response = await (0,service_api/* default */.Z)({
      query: `
        query getVoucher($code: String!) {
          voucher(code: $code) {
            isValid,
            voucher {
              code
              discountAmount
              discountPercent
            } 
          }
        }
      `,
      variables: {
        code: voucherCode
      }
    });

    if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && (_response$data$vouche = _response$data.voucher) !== null && _response$data$vouche !== void 0 && _response$data$vouche.isValid) {
      dispatch({
        action: 'voucher-validation-successfully'
      });
      basket.actions.addVoucherCode(voucherCode);
      return;
    }

    dispatch({
      action: 'voucher-validation-failed'
    });
  }

  function handleOnChange(e) {
    dispatch({
      action: 'update-voucher',
      payload: {
        voucherCode: e.target.value
      }
    });
  }

  if (basket !== null && basket !== void 0 && (_basket$basketModel = basket.basketModel) !== null && _basket$basketModel !== void 0 && _basket$basketModel.voucherCode) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(VoucherApplied, {
      children: [t('vouchers.title'), ":", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: basket.basketModel.voucherCode
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        onClick: basket.actions.removeVoucherCode,
        children: t('vouchers.remove')
      })]
    });
  }

  if (!state.showForm) {
    return /*#__PURE__*/jsx_runtime_.jsx(ShowForm, {
      onClick: () => dispatch({
        action: 'show-form'
      }),
      children: t('vouchers.inputPlaceholder')
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputGroup, {
    as: "form",
    onSubmit: onSubmit,
    autoComplete: "off",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
      htmlFor: "voucherCode",
      children: t('vouchers.title')
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(VoucherDisplayer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input, {
        name: "voucherCode",
        value: voucherCode,
        autoFocus: true,
        onChange: handleOnChange
      }), /*#__PURE__*/jsx_runtime_.jsx(ui/* Button */.zx, {
        type: "submit",
        state: status === 'voucher-validating' && 'loading',
        children: t('vouchers.applyCode')
      })]
    }), status === 'voucher-invalid' && /*#__PURE__*/jsx_runtime_.jsx(styles_ErrorMessage, {
      children: t('vouchers.invalidCode', {
        code: voucherCode
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/page-components/checkout/payment/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/display-name */













const StripeCheckout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 149).then(__webpack_require__.bind(__webpack_require__, 9149)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9149)],
    modules: ["../page-components/checkout/payment/index.js -> " + './stripe']
  }
});
const KlarnaCheckout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 443).then(__webpack_require__.bind(__webpack_require__, 443)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(443)],
    modules: ["../page-components/checkout/payment/index.js -> " + './klarna']
  }
});
const VippsCheckout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 430).then(__webpack_require__.bind(__webpack_require__, 7430)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7430)],
    modules: ["../page-components/checkout/payment/index.js -> " + './vipps']
  }
});
const MollieCheckout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 626).then(__webpack_require__.bind(__webpack_require__, 3224)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3224)],
    modules: ["../page-components/checkout/payment/index.js -> " + './mollie']
  }
});
const PaypalCheckout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 144).then(__webpack_require__.bind(__webpack_require__, 6301)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6301)],
    modules: ["../page-components/checkout/payment/index.js -> " + './paypal']
  }
});
const Row = external_styled_components_default().div.withConfig({
  displayName: "payment__Row",
  componentId: "sc-pljra7-0"
})(["display:flex;margin-bottom:10px;"]);
const payment_Inner = external_styled_components_default().div.withConfig({
  displayName: "payment__Inner",
  componentId: "sc-pljra7-1"
})([""]);
function Payment() {
  var _paymentProviders$fin;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)(['checkout', 'customer']);
  const router = (0,router_.useRouter)();
  const {
    basketModel,
    actions
  } = (0,components_basket/* useBasket */.K)();
  const {
    0: selectedPaymentProvider,
    1: setSelectedPaymentProvider
  } = (0,external_react_.useState)(null);
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    firstName: '',
    lastName: '',
    email: ''
  });
  const paymentConfig = (0,external_react_query_.useQuery)('paymentConfig', () => (0,service_api/* default */.Z)({
    query: `
      {
        paymentProviders {
          stripe {
            enabled
          }
          klarna {
            enabled
          }
          mollie {
            enabled
          }
          vipps {
            enabled
          }
          paypal {
            enabled
          }
        }
      }
    `
  })); // Handle locale with sub-path routing

  let multilingualUrlPrefix = '';

  if (window.location.pathname.startsWith(`/${router.locale}/`)) {
    multilingualUrlPrefix = '/' + router.locale;
  }

  const {
    firstName,
    lastName,
    email
  } = state;

  function getURL(path) {
    return `${location.protocol}//${location.host}${multilingualUrlPrefix}${path}`;
  }
  /**
   * The checkout model shared between all the payment providers
   * It contains everything needed to make a purchase and complete
   * an order
   */


  const checkoutModel = {
    basketModel,
    customer: {
      firstName,
      lastName,
      addresses: [{
        type: 'billing',
        email: email || null
      }]
    },
    confirmationURL: getURL(`/confirmation/{crystallizeOrderId}?emptyBasket`),
    checkoutURL: getURL(`/checkout`),
    termsURL: getURL(`/terms`)
  };
  const paymentProviders = [{
    name: 'stripe',
    color: '#6773E6',
    logo: '/static/stripe-logo.png',
    render: () => /*#__PURE__*/jsx_runtime_.jsx(PaymentProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(StripeCheckout, {
        checkoutModel: checkoutModel,
        onSuccess: crystallizeOrderId => {
          router.push(checkoutModel.confirmationURL.replace('{crystallizeOrderId}', crystallizeOrderId));
          scrollTo(0, 0);
        }
      })
    })
  }, {
    name: 'klarna',
    color: '#F8AEC2',
    logo: '/static/klarna-logo.png',
    render: () => /*#__PURE__*/jsx_runtime_.jsx(PaymentProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(KlarnaCheckout, {
        checkoutModel: checkoutModel,
        basketActions: actions,
        getURL: getURL
      })
    })
  }, {
    name: 'vipps',
    color: '#fff',
    logo: '/static/vipps-logo.png',
    render: () => /*#__PURE__*/jsx_runtime_.jsx(PaymentProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(VippsCheckout, {
        checkoutModel: checkoutModel,
        basketActions: actions,
        onSuccess: url => {
          if (url) window.location = url;
        }
      })
    })
  }, {
    name: 'mollie',
    color: '#fff',
    logo: '/static/mollie-vector-logo.png',
    render: () => /*#__PURE__*/jsx_runtime_.jsx(PaymentProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(MollieCheckout, {
        checkoutModel: checkoutModel,
        basketActions: actions,
        onSuccess: url => {
          if (url) window.location = url;
        }
      })
    })
  }, {
    name: 'paypal',
    color: '#fff',
    logo: '/static/paypal-logo.png',
    render: () => /*#__PURE__*/jsx_runtime_.jsx(PaymentProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(PaypalCheckout, {
        checkoutModel: checkoutModel,
        basketActions: actions,
        onSuccess: crystallizeOrderId => {
          router.push(checkoutModel.confirmationURL.replace('{crystallizeOrderId}', crystallizeOrderId));
          scrollTo(0, 0);
        }
      })
    })
  }];
  const enabledPaymentProviders = [];

  if (!paymentConfig.loading && paymentConfig.data) {
    const {
      paymentProviders
    } = paymentConfig.data.data;

    if (paymentProviders.klarna.enabled) {
      enabledPaymentProviders.push('klarna');
    }

    if (paymentProviders.mollie.enabled) {
      enabledPaymentProviders.push('mollie');
    }

    if (paymentProviders.vipps.enabled) {
      enabledPaymentProviders.push('vipps');
    }

    if (paymentProviders.stripe.enabled) {
      enabledPaymentProviders.push('stripe');
    }

    if (paymentProviders.paypal.enabled) {
      enabledPaymentProviders.push('paypal');
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(payment_Inner, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckoutFormGroup, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SectionHeader, {
        children: t('title')
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        noValidate: true,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(InputGroup, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
              htmlFor: "firstname",
              children: t('customer:firstName')
            }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
              name: "firstname",
              type: "text",
              value: firstName,
              onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
                firstName: e.target.value
              })),
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputGroup, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
              htmlFor: "lastname",
              children: t('customer:lastName')
            }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
              name: "lastname",
              type: "text",
              value: lastName,
              onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
                lastName: e.target.value
              })),
              required: true
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputGroup, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
              htmlFor: "email",
              children: t('customer:email')
            }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
              name: "email",
              type: "email",
              value: email,
              onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
                email: e.target.value
              })),
              required: true
            })]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Voucher, {}), /*#__PURE__*/jsx_runtime_.jsx(CheckoutFormGroup, {
      withUpperMargin: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SectionHeader, {
          children: t('choosePaymentMethod')
        }), paymentConfig.loading ? /*#__PURE__*/jsx_runtime_.jsx(spinner/* Spinner */.$, {}) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: enabledPaymentProviders.length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("i", {
            children: t('noPaymentProvidersConfigured')
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(PaymentProviders, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(PaymentSelector, {
              children: enabledPaymentProviders.map(paymentProviderName => {
                const paymentProvider = paymentProviders.find(p => p.name === paymentProviderName);

                if (!paymentProvider) {
                  return /*#__PURE__*/jsx_runtime_.jsx("small", {
                    children: t('paymentProviderNotConfigured', {
                      name: paymentProviderName
                    })
                  });
                }

                return /*#__PURE__*/jsx_runtime_.jsx(PaymentButton, {
                  color: paymentProvider.color,
                  type: "button",
                  selected: selectedPaymentProvider === paymentProvider.name,
                  onClick: () => setSelectedPaymentProvider(paymentProvider.name),
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: paymentProvider.logo,
                    alt: t('paymentProviderLogoAlt', {
                      name: paymentProvider.name
                    })
                  })
                }, paymentProvider.name);
              })
            }), (_paymentProviders$fin = paymentProviders.find(p => p.name === selectedPaymentProvider)) === null || _paymentProviders$fin === void 0 ? void 0 : _paymentProviders$fin.render()]
          })
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/page-components/checkout/index.js
function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Checkout() {
  const basket = (0,components_basket/* useBasket */.K)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('basket');

  if (basket.status === 'not-hydrated') {
    return /*#__PURE__*/jsx_runtime_.jsx(Outer, {
      center: true,
      children: t('loading')
    });
  }

  const {
    cart
  } = basket;

  if (basket.status === 'ready' && !(cart !== null && cart !== void 0 && cart.length)) {
    return /*#__PURE__*/jsx_runtime_.jsx(Outer, {
      center: true,
      children: t('empty', {
        context: 'inCheckout'
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Outer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Inner, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Payment, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckoutFormGroup, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(SectionHeader, {
            children: t('title')
          }), /*#__PURE__*/jsx_runtime_.jsx(order_items/* default */.Z, {
            cart: cart
          }), /*#__PURE__*/jsx_runtime_.jsx(totals/* default */.Z, {
            style: {
              padding: '0 15px'
            }
          })]
        })
      })]
    })
  });
}

function CheckoutWithLayout(props) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('checkout');
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: t('title'),
    simple: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(Checkout, checkout_objectSpread({}, props))
  });
}
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(2147);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/checkout.js
function pages_checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function pages_checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_checkout_ownKeys(Object(source), true).forEach(function (key) { pages_checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




async function getStaticProps(context) {
  return {
    props: pages_checkout_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(context.locale, ['common', 'basket', 'checkout'], (next_i18next_config_default())))
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

/***/ 3317:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 420:
/***/ ((module) => {

module.exports = require("@stripe/stripe-js");

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

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 8689:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,152,561,22,50,537], () => (__webpack_exec__(6364)));
module.exports = __webpack_exports__;

})();