"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KlarnaCheckout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_service_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3475);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






function KlarnaCheckout({
  checkoutModel,
  basketActions
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('checkout');
  const paymentContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('loading');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function load() {
      setStatus('loading');

      try {
        const response = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
          query: `
            mutation klarnaRenderCheckout(
              $checkoutModel: CheckoutModelInput!
            ) {
              paymentProviders {
                klarna {
                  renderCheckout(
                    checkoutModel: $checkoutModel
                  ) {
                    crystallizeOrderId
                    klarnaOrderId
                    html
                  }
                }
              }
            }
          `,
          variables: {
            checkoutModel
          }
        });
        const {
          html,
          klarnaOrderId,
          crystallizeOrderId
        } = response.data.paymentProviders.klarna.renderCheckout;
        basketActions.setKlarnaOrderId(klarnaOrderId);
        basketActions.setCrystallizeOrderId(crystallizeOrderId);
        const checkoutContainer = paymentContainerRef.current;
        checkoutContainer.innerHTML = html;
        const scriptsTags = checkoutContainer.getElementsByTagName('script'); // https://developers.klarna.com/documentation/klarna-checkout/integration-guide/render-the-checkout/

        for (let i = 0; i < scriptsTags.length; i++) {
          const {
            parentNode
          } = scriptsTags[i];
          const newScriptTag = document.createElement('script');
          newScriptTag.type = 'text/javascript';
          newScriptTag.text = scriptsTags[i].text;
          parentNode.removeChild(scriptsTags[i]);
          parentNode.appendChild(newScriptTag);
        }

        setStatus('loaded');
      } catch (error) {
        console.log(error);
        setStatus('error');
      }
    }

    load(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [status === 'loading' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      children: t('loadingPaymentGateway')
    }), status === 'error' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      children: t('loadingPaymentGatewayFailed', {
        name: 'Klarna'
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      ref: paymentContainerRef
    })]
  });
}

/***/ })

};
;