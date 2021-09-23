"use strict";
exports.id = 561;
exports.ids = [561];
exports.modules = {

/***/ 9841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "al": () => (/* binding */ defaultLocale),
  "Vi": () => (/* binding */ getLocaleFromContext),
  "eF": () => (/* binding */ getLocaleFromName),
  "bU": () => (/* binding */ useLocale)
});

// UNUSED EXPORTS: default, locales

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./app.config.json
const app_config_namespaceObject = JSON.parse('{"locales":[{"locale":"en","displayName":"en","appLanguage":"en-US","crystallizeCatalogueLanguage":"en","crystallizePriceVariant":"default"},{"locale":"no","displayName":"no","appLanguage":"nb-NO","crystallizeCatalogueLanguage":"en","crystallizePriceVariant":"default"}]}');
;// CONCATENATED MODULE: ./src/lib/app-config.js

 // Validate locales

if (!app_config_namespaceObject.locales) {
  throw new Error('app.config.js: locales is not defined');
}

if (app_config_namespaceObject.locales.filter(l => l.isDefault).length > 1) {
  throw new Error('app.config.js: cannot have more than one default locale');
}

const appConfig = app_config_namespaceObject;
const locales = appConfig.locales;
const defaultLocale = appConfig.locales.find(l => l.isDefault) || appConfig.locales[0]; // Get the current locale

function useLocale() {
  const router = (0,router_.useRouter)();
  return getLocaleFromContext(router);
}
function getLocaleFromName(name) {
  return appConfig.locales.find(l => l.locale === name) || defaultLocale;
}
function getLocaleFromContext({
  locale,
  query,
  asPath
} = {}) {
  if (locale) {
    return getLocaleFromName(locale);
  }

  if (query !== null && query !== void 0 && query.locale) {
    return getLocaleFromName(query.locale);
  } // Fallback to using the first part of the asPath


  return getLocaleFromName(asPath === null || asPath === void 0 ? void 0 : asPath.split('/').filter(Boolean)[0]);
}
/* harmony default export */ const app_config = ((/* unused pure expression or super */ null && (appConfig)));

/***/ }),

/***/ 6712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dY": () => (/* binding */ simplyFetchFromGraph),
/* harmony export */   "nx": () => (/* binding */ simplyFetchFromSearchGraph)
/* harmony export */ });
/* unused harmony export safePathQuery */
const _excluded = ["variables"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Helper for getting a catalogue item with a path
 * from url, removing any query params from the variables
 */
function safePathQuery(_ref) {
  let {
    variables
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (variables && 'path' in variables) {
    const safePath = (variables.path || '').split('?')[0].split('#')[0].replace(/\/$/, '');
    return _objectSpread({
      variables: _objectSpread(_objectSpread({}, variables), {}, {
        path: safePath
      })
    }, rest);
  }

  return _objectSpread({
    variables
  }, rest);
}
/**
 * If you have enabled authentication on your APIs, then you need to
 * proxy the requests through the Service API:
 * const apiUrlBase = process.env.NEXT_PUBLIC_SERVICE_API_URL.replace(
 *  '/graphql',
 *  '/crystallize'
 * );
 * Read more about authentication for the APIs here:
 * https://crystallize.com/learn/developer-guides/api-overview/authentication
 */

const apiUrlBase = `https://api.crystallize.com/${"orn-forlag"}`;
async function simplyFetchFromGraph({
  uri = `${apiUrlBase}/catalogue`,
  query,
  variables
}) {
  const body = JSON.stringify(safePathQuery({
    query,
    variables
  }));
  const response = await fetch(uri, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
function simplyFetchFromSearchGraph(args) {
  return simplyFetchFromGraph(_objectSpread({
    uri: `${apiUrlBase}/search`
  }, args));
}

/***/ })

};
;