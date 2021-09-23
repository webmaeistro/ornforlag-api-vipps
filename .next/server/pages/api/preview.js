"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 8855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preview)
/* harmony export */ });
/* harmony import */ var lib_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6712);
/* harmony import */ var lib_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9841);
/**
 * Preview catalogue items from Crystallize by setting a cookie
 * for the user session. Read more about the Next.JS preview mode:
 * https://nextjs.org/docs/advanced-features/preview-mode
 */


async function preview(req, res) {
  // Leave preview mode
  if ('leave' in req.query) {
    res.clearPreviewData();
    res.writeHead(307, {
      Location: req.query.leave ? decodeURIComponent(req.query.leave) : '/'
    });
    res.end();
    return;
  }
  /**
   * You should implement some kind of security check here to not
   * open the preview mode up to anybody
   */
  // if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.slug) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }
  // Always allow preview for these paths


  const whitelistedPreviewPaths = ['/'];
  let redirectTo;
  const whitelistMatch = whitelistedPreviewPaths.find(w => w === req.query.slug);

  if (whitelistMatch) {
    redirectTo = whitelistMatch;
  } else {
    /**
     * If the path is not in the whitelist, we need to check
     * if it is a match in Crystallize
     */
    const {
      data: {
        catalogue: {
          path
        }
      }
    } = await (0,lib_graph__WEBPACK_IMPORTED_MODULE_1__/* .simplyFetchFromGraph */ .dY)({
      query: `
        query ITEM_TYPE($language: String!, $path: String!) {
          catalogue(language: $language, path: $path) {
            path
          }
        }
      `,
      variables: {
        language: req.query.language || lib_app_config__WEBPACK_IMPORTED_MODULE_0__/* .defaultLocale.crystallizeCatalogueLanguage */ .al.crystallizeCatalogueLanguage,
        path: req.query.slug
      }
    }); // If the slug doesn't exist prevent preview mode from being enabled

    if (!path) {
      return res.status(401).json({
        message: 'Invalid slug'
      });
    }

    redirectTo = path;
  } // Enable Preview Mode by setting the cookies


  res.setPreviewData({}); // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities

  res.writeHead(307, {
    Location: redirectTo
  });
  res.end();
}

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [561], () => (__webpack_exec__(8855)));
module.exports = __webpack_exports__;

})();