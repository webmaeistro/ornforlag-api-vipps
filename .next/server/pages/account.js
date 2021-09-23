"use strict";
(() => {
var exports = {};
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 3635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Login),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: ./src/components/layout/index.js + 21 modules
var layout = __webpack_require__(6381);
// EXTERNAL MODULE: ./src/components/auth.js
var components_auth = __webpack_require__(4116);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/page-components/account/styles.js


const Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-5eh6bk-0"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;"]);
const LoginStyle = external_styled_components_default().div.withConfig({
  displayName: "styles__LoginStyle",
  componentId: "sc-5eh6bk-1"
})(["text-align:center;form{background:var(--color-box-background);padding:50px;margin:100px auto 0;max-width:700px;}h4{margin:0 auto;max-width:400px;}p{margin:50px 20px;}"]);
const Fields = external_styled_components_default().div.withConfig({
  displayName: "styles__Fields",
  componentId: "sc-5eh6bk-2"
})(["display:flex;justify-content:center;margin-top:50px;input{flex:1 1 auto;border:2px solid #000;border-right-width:0;padding:15px;margin:0;}button{flex:0 0 auto;}", "{display:block;input{width:100%;min-width:auto;border-right-width:2px;margin-bottom:20px;}}"], ui/* responsive.smAndLess */.jW.smAndLess);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/page-components/account/index.js








function Login() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('customer');
  const auth = (0,components_auth/* useAuth */.aC)();
  const {
    0: userData,
    1: setUserData
  } = (0,external_react_.useState)({
    loading: false,
    email: '',
    message: '',
    error: ''
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setUserData(Object.assign({}, userData, {
      loading: true,
      error: ''
    }));
    const {
      email
    } = userData;

    try {
      const {
        success,
        error
      } = await (0,components_auth/* loginWithMagicLink */.Bg)(email);
      setUserData(Object.assign({}, userData, {
        loading: false,
        message: success ? 'Check your mail inbox for a login link' : t(`login.error_${error}`) || 'Could not send the login link email =('
      }));
    } catch (error) {
      console.error(error);
      setUserData(Object.assign({}, userData, {
        loading: false,
        error: 'Could not send a magic link email =('
      }));
    }
  }

  if (auth.isLoggedIn) {
    return /*#__PURE__*/jsx_runtime_.jsx(PageLayout, {
      title: t('login.title'),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(ui.H1, {
          children: t('login.loggedIn')
        })
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(PageLayout, {
    title: t('login.title'),
    children: /*#__PURE__*/jsx_runtime_.jsx(Outer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LoginStyle, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ui.H1, {
          children: t('login.title')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: handleSubmit,
          action: "/api/loging",
          method: "post",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: t('login.instructions')
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Fields, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "email",
              name: "email",
              placeholder: t('email'),
              required: true,
              onChange: event => setUserData(Object.assign({}, userData, {
                email: event.target.value
              }))
            }), /*#__PURE__*/jsx_runtime_.jsx(ui/* Button */.zx, {
              state: userData.loading ? 'loading' : null,
              type: "submit",
              value: "Submit",
              children: t('login.sendMagicLink')
            })]
          })]
        }), userData.message ? /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: userData.message
        }) : null, userData.error ? /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: t('login.emailAddressInvalid')
        }) : null]
      })
    })
  });
}

function PageLayout({
  title,
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: title,
    children: /*#__PURE__*/jsx_runtime_.jsx(Outer, {
      children: children
    })
  });
}
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(2147);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/account.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




async function getServerSideProps(context) {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(context.locale, ['common', 'basket', 'customer'], (next_i18next_config_default())))
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,561,22,50,116], () => (__webpack_exec__(3635)));
module.exports = __webpack_exports__;

})();