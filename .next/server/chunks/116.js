"use strict";
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 4116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aC": () => (/* binding */ useAuth),
/* harmony export */   "Bg": () => (/* binding */ loginWithMagicLink),
/* harmony export */   "Ho": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* unused harmony export AuthContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3475);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
const useAuth = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);
async function loginWithMagicLink(email) {
  const response = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    query: `
      mutation {
        user {
          sendMagicLink(
            email: "${email}"
            redirectURLAfterLogin: "${location.protocol}//${location.host}/account"
          ) {
            success
            error
          }
        }
      }
    `
  });
  const {
    success,
    error
  } = response.data.user.sendMagicLink;
  return {
    success,
    error
  };
}
function AuthProvider({
  children
}) {
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function checkIfLoggedIn() {
      try {
        const response = await (0,lib_service_api__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
          query: `
            {
              user {
                isLoggedIn
                logoutLink
                email
              }
            }
          `
        });
        const {
          user
        } = response.data;
        /**
         * Specify where the user should land after logging out
         * ?redirect=http://example.com
         */

        const redirectToPath = '/';
        const logoutLinkWithRedirect = new URL(user.logoutLink);
        logoutLinkWithRedirect.searchParams.append('redirect', encodeURIComponent(`${location.protocol}//${location.host}${redirectToPath}`));
        setStatus(_objectSpread(_objectSpread({}, user), {}, {
          logoutLink: logoutLinkWithRedirect
        }));
      } catch (error) {
        console.log(error);
      }
    }

    checkIfLoggedIn();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(AuthContext.Provider, {
    value: status,
    children: children
  });
}

/***/ })

};
;