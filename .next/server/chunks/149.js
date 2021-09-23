"use strict";
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 9149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripeWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(420);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3317);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_service_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3475);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5617);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["checkoutModel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













function Form({
  stripeClientSecret,
  checkoutModel,
  onSuccess,
  onError
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('checkout');
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements)();
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('idle');

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('confirming');
    go();

    async function go() {
      if (!stripe || !elements) {
        setTimeout(go, 100);
        return;
      }

      const {
        customer
      } = checkoutModel;
      const {
        error,
        paymentIntent
      } = await stripe.confirmCardPayment(stripeClientSecret, {
        payment_method: {
          card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement),
          billing_details: {
            name: `${customer.firstName} ${customer.lastName}`
          }
        }
      });

      if (error) {
        setStatus({
          error
        });
      } else {
        // The payment has been processed!
        if (paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          const response = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
            query: `
              mutation confirmStripeOrder($checkoutModel: CheckoutModelInput!, $paymentIntentId: String!) {
                paymentProviders {
                  stripe {
                    confirmOrder(checkoutModel: $checkoutModel, paymentIntentId: $paymentIntentId) {
                      success
                      orderId
                    }
                  }
                }
              }
            `,
            variables: {
              checkoutModel,
              paymentIntentId: paymentIntent.id
            }
          });
          const {
            success,
            orderId
          } = response.data.paymentProviders.stripe.confirmOrder;

          if (success) {
            onSuccess(orderId);
          } else {
            onError();
          }
        }
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      style: {
        marginTop: 25
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ui__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .zx, {
        type: "submit",
        state: status === 'confirming' ? 'loading' : null,
        disabled: status === 'confirming',
        children: t('payNow')
      })
    })]
  });
}

function StripeWrapper(_ref) {
  var _stripePaymentIntent$, _stripePaymentIntent$2, _stripePaymentIntent$3, _stripePaymentIntent$4, _stripePaymentIntent$5;

  let {
    checkoutModel
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: stripeLoader,
    1: setStripeLoader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const stripeConfig = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)('stripeConfig', () => (0,lib_service_api__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    query: `
      {
        paymentProviders {
          stripe {
            config
          }
        }
      }
    `
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripeConfig.data && !stripeLoader) {
      setStripeLoader((0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)(stripeConfig.data.data.paymentProviders.stripe.config.publishableKey));
    }
  }, [stripeConfig, stripeLoader]); // Get new paymentIntent

  const stripePaymentIntent = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)('stripePaymentIntent', () => (0,lib_service_api__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    query: `
        mutation StripePaymentIntent($checkoutModel: CheckoutModelInput!) {
          paymentProviders {
            stripe {
              createPaymentIntent(checkoutModel: $checkoutModel)
            }
          }
        }
      `,
    variables: {
      checkoutModel
    }
  }));
  const stripeClientSecret = stripePaymentIntent === null || stripePaymentIntent === void 0 ? void 0 : (_stripePaymentIntent$ = stripePaymentIntent.data) === null || _stripePaymentIntent$ === void 0 ? void 0 : (_stripePaymentIntent$2 = _stripePaymentIntent$.data) === null || _stripePaymentIntent$2 === void 0 ? void 0 : (_stripePaymentIntent$3 = _stripePaymentIntent$2.paymentProviders) === null || _stripePaymentIntent$3 === void 0 ? void 0 : (_stripePaymentIntent$4 = _stripePaymentIntent$3.stripe) === null || _stripePaymentIntent$4 === void 0 ? void 0 : (_stripePaymentIntent$5 = _stripePaymentIntent$4.createPaymentIntent) === null || _stripePaymentIntent$5 === void 0 ? void 0 : _stripePaymentIntent$5.client_secret;

  if (stripeConfig.loading || !stripeLoader || !stripeClientSecret) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ui__WEBPACK_IMPORTED_MODULE_5__/* .Spinner */ .$j, {});
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("script", {
        src: "https://js.stripe.com/v3/",
        async: true
      }, "stripe-js")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.Elements, {
      locale: "en",
      stripe: stripeLoader,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Form, _objectSpread(_objectSpread({}, props), {}, {
        checkoutModel: checkoutModel,
        stripeClientSecret: stripeClientSecret
      }))
    })]
  });
}

/***/ })

};
;