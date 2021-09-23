"use strict";
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 6301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaypalWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8689);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_service_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3475);
/* harmony import */ var components_basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7384);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5617);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








function PaypalWrapper({
  checkoutModel,
  onSuccess
}) {
  const {
    total
  } = (0,components_basket__WEBPACK_IMPORTED_MODULE_2__/* .useBasket */ .K)();
  const {
    0: config,
    1: setConfig
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('not-started');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async function fetchPaypalConfig() {
      var _paymentConfig$data, _paymentConfig$data$p, _paymentConfig$data$p2;

      const paymentConfig = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
        query: `
          query {
            paymentProviders {
              paypal {
                config
              }
            }
          }
        `
      });
      const config = paymentConfig === null || paymentConfig === void 0 ? void 0 : (_paymentConfig$data = paymentConfig.data) === null || _paymentConfig$data === void 0 ? void 0 : (_paymentConfig$data$p = _paymentConfig$data.paymentProviders) === null || _paymentConfig$data$p === void 0 ? void 0 : (_paymentConfig$data$p2 = _paymentConfig$data$p.paypal) === null || _paymentConfig$data$p2 === void 0 ? void 0 : _paymentConfig$data$p2.config;

      if (config) {
        setConfig(config);
      } else {
        setStatus('failed #0');
      }
    })();
  }, []);

  function renderPayalCheckout() {
    if (!window.paypal) {
      console.log('window.paypal not available');
      setStatus('failed #1');
      return;
    }

    window.paypal.Buttons({
      createOrder: async function () {
        var _response$data, _response$data$paymen, _response$data$paymen2;

        const response = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          query: `
              mutation paypal($checkoutModel: CheckoutModelInput!) {
                paymentProviders {
                  paypal {
                    createPayment(checkoutModel: $checkoutModel) {
                      success
                      orderId
                    }
                  }
                }
              }
            `,
          variables: {
            checkoutModel
          }
        });
        const result = (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$paymen = _response$data.paymentProviders) === null || _response$data$paymen === void 0 ? void 0 : (_response$data$paymen2 = _response$data$paymen.paypal) === null || _response$data$paymen2 === void 0 ? void 0 : _response$data$paymen2.createPayment) || {};

        if (!(result !== null && result !== void 0 && result.success)) {
          setStatus('failed #2');
          return;
        }

        return result.orderId;
      },
      onApprove: async function (data) {
        var _response$data2, _response$data2$payme, _response$data2$payme2;

        const paypalOrderId = data === null || data === void 0 ? void 0 : data.orderID;

        if (!paypalOrderId) {
          setStatus('failed #3');
          return;
        }
        /**
         * Create an order in Crystallize when the
         * customer has approved it.
         */


        const response = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          query: `
              mutation paypal($orderId: String!, $checkoutModel: CheckoutModelInput!) {
                paymentProviders {
                  paypal {
                    confirmPayment(orderId: $orderId, checkoutModel: $checkoutModel){
                      success
                      orderId
                    }
                  }
                }
              }
             `,
          variables: {
            orderId: paypalOrderId,
            checkoutModel
          }
        });
        const result = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$payme = _response$data2.paymentProviders) === null || _response$data2$payme === void 0 ? void 0 : (_response$data2$payme2 = _response$data2$payme.paypal) === null || _response$data2$payme2 === void 0 ? void 0 : _response$data2$payme2.confirmPayment;

        if (!(result !== null && result !== void 0 && result.success)) {
          setStatus('failed #4');
        } else {
          setStatus('succeeded');
          onSuccess(result.orderId);
        }
      }
    }).render('#paypal-button-container');
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: status.startsWith('failed') ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: ["Something went wrong with the payment (", status, ").", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ui__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
        onClick: () => location.reload(),
        children: "Try again"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [(config === null || config === void 0 ? void 0 : config.clientId) && (total === null || total === void 0 ? void 0 : total.currency) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: `https://www.paypal.com/sdk/js?client-id=${config.clientId}&currency=${total.currency.toUpperCase()}`,
        onLoad: renderPayalCheckout
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        id: "paypal-button-container"
      })]
    })
  });
}

/***/ })

};
;