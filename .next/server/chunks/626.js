"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 3224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MollieWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_service_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3475);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function MollieWrapper({
  checkoutModel,
  basketActions,
  onSuccess
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('checkout');
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('loading');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function load() {
      var _response$data, _response$data$paymen, _response$data$paymen2;

      setStatus('loading');
      const response = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
        query: `
          mutation mollieCreatePayment(
            $checkoutModel: CheckoutModelInput!
          ) {
            paymentProviders {
              mollie {
                createPayment(
                  checkoutModel: $checkoutModel
                ) {
                  success
                  checkoutLink
                  crystallizeOrderId
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
        success,
        crystallizeOrderId,
        checkoutLink
      } = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$paymen = _response$data.paymentProviders) === null || _response$data$paymen === void 0 ? void 0 : (_response$data$paymen2 = _response$data$paymen.mollie) === null || _response$data$paymen2 === void 0 ? void 0 : _response$data$paymen2.createPayment) || {};

      if (success) {
        basketActions.setCrystallizeOrderId(crystallizeOrderId);
        onSuccess(checkoutLink);
      } else {
        setStatus('error');
      }
    }

    load(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'error') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      children: t('loadingPaymentGatewayFailed', {
        name: 'Mollie'
      })
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
    children: t('loadingPaymentGateway')
  });
}

/***/ })

};
;