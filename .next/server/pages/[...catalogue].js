"use strict";
(() => {
var exports = {};
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 6258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ GenericCatalogueItem),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: ./src/lib/graph/index.js
var graph = __webpack_require__(6712);
// EXTERNAL MODULE: ./src/lib/search.js
var search = __webpack_require__(8181);
// EXTERNAL MODULE: ./src/lib/app-config.js + 1 modules
var app_config = __webpack_require__(9841);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/shape/components/index.js + 8 modules
var shape_components = __webpack_require__(6537);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: ./src/components/video-player.js
var video_player = __webpack_require__(348);
// EXTERNAL MODULE: ./src/components/topic-tag.js
var topic_tag = __webpack_require__(4151);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@crystallize/react-image"
var react_image_ = __webpack_require__(5173);
;// CONCATENATED MODULE: ./src/shapes/document/microformat/styles.js


const Outer = external_styled_components_default().a.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-fioo8b-0"
})(["height:100%;width:100%;position:relative;border:4px solid #fff;"]);
const Inner = external_styled_components_default().div.withConfig({
  displayName: "styles__Inner",
  componentId: "sc-fioo8b-1"
})(["height:100%;width:100%;position:relative;display:flex;display:grid;grid-template-columns:90px 1fr;grid-gap:20px;padding-bottom:10px;border-bottom:1px solid #dfdfdf;"]);
const Tags = external_styled_components_default().div.withConfig({
  displayName: "styles__Tags",
  componentId: "sc-fioo8b-2"
})(["display:flex;flex-wrap:wrap;z-index:4;width:100%;.tag{font-size:12px !important;margin-right:8px;}"]);
const MediaWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__MediaWrapper",
  componentId: "sc-fioo8b-3"
})(["flex:0 0 auto;border:1px solid #dfdfdf;height:120px;figure{height:100%;}.react-video{flex:0 0 auto;width:100%;height:100%;}img,.react-video video{display:block;object-fit:cover;object-position:center;width:100%;height:100%;overflow:hidden;}"]);
const Img = external_styled_components_default()(react_image_.Image).withConfig({
  displayName: "styles__Img",
  componentId: "sc-fioo8b-4"
})(["width:100%;height:100%;overflow:hidden;"]);
const Text = external_styled_components_default().div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-fioo8b-5"
})(["padding:5px 0;color:var(--color-text-main);h3{display:block;padding:5px 0 0px;font-size:20px;font-family:var(--font-family-main);color:inherit;margin:0;line-height:1.4em;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/shapes/document/microformat/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function DocumentItem({
  data
}) {
  var _data$components, _images$content, _images$content$image, _data$components2, _video$content, _video$content$videos, _data$topics;

  if (!data) {
    return null;
  }

  const {
    name,
    path
  } = data;
  const images = (_data$components = data.components) === null || _data$components === void 0 ? void 0 : _data$components.find(c => c.type === 'images');
  const image = images === null || images === void 0 ? void 0 : (_images$content = images.content) === null || _images$content === void 0 ? void 0 : (_images$content$image = _images$content.images) === null || _images$content$image === void 0 ? void 0 : _images$content$image[0];
  const video = (_data$components2 = data.components) === null || _data$components2 === void 0 ? void 0 : _data$components2.find(c => c.name === 'Video');
  let media;

  if (video !== null && video !== void 0 && (_video$content = video.content) !== null && _video$content !== void 0 && (_video$content$videos = _video$content.videos) !== null && _video$content$videos !== void 0 && _video$content$videos.length) {
    media = /*#__PURE__*/jsx_runtime_.jsx(video_player/* default */.Z, _objectSpread(_objectSpread({}, video.content.videos[0]), {}, {
      autoPlay: true,
      loop: true,
      controls: false
    }));
  } else if (image) {
    media = /*#__PURE__*/jsx_runtime_.jsx(Img, _objectSpread(_objectSpread({}, image), {}, {
      alt: name,
      sizes: `(min-width ${ui/* screen.md */.sp.md}px) 33vw, 100vw`
    }));
  } else {
    media = null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: path,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(Outer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Inner, {
        children: [!!media && /*#__PURE__*/jsx_runtime_.jsx(MediaWrapper, {
          children: media
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Tags, {
            children: data === null || data === void 0 ? void 0 : (_data$topics = data.topics) === null || _data$topics === void 0 ? void 0 : _data$topics.map(topic => /*#__PURE__*/(0,external_react_.createElement)(topic_tag/* default */.Z, _objectSpread(_objectSpread({}, topic), {}, {
              key: `listing-${topic.id}-${data === null || data === void 0 ? void 0 : data.id}`,
              underline: true
            })))
          }), /*#__PURE__*/jsx_runtime_.jsx(ui.H3, {
            children: name
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./src/lib/pricing.js
var lib_pricing = __webpack_require__(4175);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
;// CONCATENATED MODULE: ./src/shapes/product/microformat/components/price/styles.js


const Price = external_styled_components_default().span.withConfig({
  displayName: "styles__Price",
  componentId: "sc-aay5ty-0"
})(["color:var(--color-price);position:relative;font-weight:bold;display:flex;font-size:var(--font-listing-price-size);padding-bottom:5px;align-items:center;", ""], external_styled_is_default()('discounted')`
    color:var(--color-discount);
  `);
const BeforePrice = external_styled_components_default().div.withConfig({
  displayName: "styles__BeforePrice",
  componentId: "sc-aay5ty-1"
})(["font-size:0.8em;opacity:0.7;padding:0 15px 0 5px;font-weight:500;text-decoration:line-through;color:var(--color-price);"]);
const Percentage = external_styled_components_default().div.withConfig({
  displayName: "styles__Percentage",
  componentId: "sc-aay5ty-2"
})(["font-size:12px;margin-top:10px;position:absolute;right:0;top:0;background:var(--color-discount);color:#fff;display:inline-block;border-radius:2px;z-index:15;padding:5px 10px;font-weight:600;"]);
;// CONCATENATED MODULE: ./src/shapes/product/microformat/components/price/index.js






function Pricing({
  pricing
}) {
  const {
    discountPrice,
    defaultPrice,
    discountPercentage
  } = pricing;
  const hasDiscount = Boolean(discountPrice);
  const hasDiscountPercentage = Boolean(discountPercentage);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [hasDiscount ? /*#__PURE__*/jsx_runtime_.jsx(PriceWithDiscount, {
      currentPricing: discountPrice,
      oldPricing: defaultPrice
    }) : /*#__PURE__*/jsx_runtime_.jsx(DefaultPricing, {
      pricing: defaultPrice
    }), hasDiscountPercentage && /*#__PURE__*/jsx_runtime_.jsx(Percentage, {
      children: `-${discountPercentage}%`
    })]
  });
}

function DefaultPricing({
  pricing
}) {
  const {
    price,
    currency
  } = pricing;
  return /*#__PURE__*/jsx_runtime_.jsx(Price, {
    children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
      children: /*#__PURE__*/jsx_runtime_.jsx(TranslatedPrice, {
        amount: price,
        currency: currency
      })
    })
  });
}

function PriceWithDiscount({
  currentPricing,
  oldPricing
}) {
  const {
    price,
    currency
  } = currentPricing;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Price, {
    discounted: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
      children: /*#__PURE__*/jsx_runtime_.jsx(TranslatedPrice, {
        amount: price,
        currency: currency
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(OldPricing, {
      pricing: oldPricing
    })]
  });
}

function OldPricing({
  pricing
}) {
  const {
    price,
    currency
  } = pricing;
  return /*#__PURE__*/jsx_runtime_.jsx(BeforePrice, {
    children: /*#__PURE__*/jsx_runtime_.jsx(TranslatedPrice, {
      amount: price,
      currency: currency
    })
  });
}

function TranslatedPrice({
  amount,
  currency
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return t('price', {
    value: amount,
    currency
  });
}
;// CONCATENATED MODULE: ./src/shapes/product/microformat/styles.js


const styles_Outer = external_styled_components_default().a.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1p286cq-0"
})(["height:100%;color:var(--color-main-background);border:4px solid #fff;display:block;transition:all 0.1s ease-in-out;"]);
const styles_Inner = external_styled_components_default().div.withConfig({
  displayName: "styles__Inner",
  componentId: "sc-1p286cq-1"
})(["height:100%;width:100%;position:relative;display:grid;align-items:center;grid-template-columns:90px 1fr;grid-gap:20px;padding-bottom:10px;border-bottom:1px solid #dfdfdf;"]);
const ImageWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImageWrapper",
  componentId: "sc-1p286cq-2"
})(["position:relative;z-index:1;height:120px;overflow:hidden;border:1px solid #dfdfdf;background:var(--listformat-product-background);figure{height:100%;}"]);
const Footer = external_styled_components_default().div.withConfig({
  displayName: "styles__Footer",
  componentId: "sc-1p286cq-3"
})(["padding:5px 0;color:var(--color-text-main);h3{display:block;padding:0 0 10px;font-size:20px;font-family:var(--font-family-main);color:inherit;margin:0;}"]);
const styles_Img = external_styled_components_default()(react_image_.Image).withConfig({
  displayName: "styles__Img",
  componentId: "sc-1p286cq-4"
})(["width:100%;height:100%;overflow:hidden;> img{display:block;object-fit:var(--microformat-image-fit);object-position:var(--microformat-image-position);width:100%;height:100%;overflow:hidden;}"]);
// EXTERNAL MODULE: ./src/shapes/product/utils.js
var utils = __webpack_require__(8069);
;// CONCATENATED MODULE: ./src/shapes/product/microformat/index.js
function microformat_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function microformat_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { microformat_ownKeys(Object(source), true).forEach(function (key) { microformat_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { microformat_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function microformat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function ProductItem({
  data
}) {
  var _variant$images;

  const locale = (0,app_config/* useLocale */.bU)();

  if (!data) {
    return null;
  }

  const {
    name,
    path,
    type,
    variants,
    matchingVariant
  } = data;
  const variant = matchingVariant || (0,utils/* findDefaultVariant */.lm)(variants) || {};
  const image = (variant === null || variant === void 0 ? void 0 : (_variant$images = variant.images) === null || _variant$images === void 0 ? void 0 : _variant$images[0]) || (variant === null || variant === void 0 ? void 0 : variant.image);
  const pricing = (0,lib_pricing/* default */.Z)({
    variant,
    locale
  });
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: path,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(styles_Outer, {
      type: type,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Inner, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ImageWrapper, {
          children: image && /*#__PURE__*/jsx_runtime_.jsx(styles_Img, microformat_objectSpread(microformat_objectSpread({}, image), {}, {
            alt: name,
            sizes: "250px"
          }))
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ui.H3, {
            children: name
          }), /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
            pricing: pricing
          })]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/shapes/folder/microformat/styles.js

const microformat_styles_Outer = external_styled_components_default().a.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-ksssg5-0"
})(["align-items:center;background:var(--color-primary-action);border:4px solid #fff;box-shadow:0 0px 0px rgba(0,0,0,0);color:var(--color-primary-action-content);display:flex;height:100%;padding:15px 25px;position:relative;transition:all 0.1s ease-in-out;"]);
const styles_Text = external_styled_components_default().div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-ksssg5-1"
})(["z-index:2;bottom:0;left:0;width:100%;h3{font-size:var(--font-size-s);text-align:center;font-weight:600;margin:0 0 0 5px;color:inherit;}"]);
;// CONCATENATED MODULE: ./src/shapes/folder/microformat/index.js





function FolderItem({
  data
}) {
  if (!data) {
    return null;
  }

  const {
    name,
    path
  } = data;
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: path,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(microformat_styles_Outer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(styles_Text, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ui.H3, {
          children: name
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/microformat/index.js
function components_microformat_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_microformat_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_microformat_ownKeys(Object(source), true).forEach(function (key) { components_microformat_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_microformat_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_microformat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Microformat({
  item
}) {
  if (!item) {
    return null;
  }

  const commonProps = {
    key: item.path
  };
  const types = {
    product: /*#__PURE__*/jsx_runtime_.jsx(ProductItem, components_microformat_objectSpread(components_microformat_objectSpread({}, commonProps), {}, {
      data: item
    })),
    folder: /*#__PURE__*/jsx_runtime_.jsx(FolderItem, components_microformat_objectSpread(components_microformat_objectSpread({}, commonProps), {}, {
      data: item
    })),
    document: /*#__PURE__*/jsx_runtime_.jsx(DocumentItem, components_microformat_objectSpread(components_microformat_objectSpread({}, commonProps), {}, {
      data: item
    }))
  };
  return types[item.type] || null;
}
;// CONCATENATED MODULE: ./src/shapes/document/utils.js
function getArticlesWithoutRepeatedElements(articles) {
  if (!articles || articles.length === 0) {
    return null;
  } // We store into an array all the ids of the article items


  const articlesIds = articles.map(a => a.node.id) || []; // Then, we create an array taking away the repeated ids.

  const articleIdsWithoutRepeatedElements = createArrayWithoutRepeatedElements(articlesIds); // For each unique id of a related content, to get the full item.

  const uniqueRelatedArticles = articleIdsWithoutRepeatedElements.map(id => articles.find(a => a.node.id === id));
  return uniqueRelatedArticles;
}

function createArrayWithoutRepeatedElements(array) {
  // We can filter the repeated elements from an array by executing
  // `Array.from(new Set(yourArray))` or `[...new Set(yourArray)]`
  //
  // Set objects have unique values. By Creating a set object and generating an array
  // from that Set object created, we assure that there are no repeated elements.
  // FYI: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  return Array.from(new Set(array));
}

function getDocumentTitle(doc) {
  var _doc$components, _titleComponent$conte;

  const titleComponent = doc === null || doc === void 0 ? void 0 : (_doc$components = doc.components) === null || _doc$components === void 0 ? void 0 : _doc$components.find(c => c.name === 'Title');
  const title = titleComponent === null || titleComponent === void 0 ? void 0 : (_titleComponent$conte = titleComponent.content) === null || _titleComponent$conte === void 0 ? void 0 : _titleComponent$conte.text;
  return title || doc.name;
}
function getHumanReadableDate(date) {
  return date.toDateString();
}
;// CONCATENATED MODULE: ./src/components/social/icons.js

function Pintrest() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "50px",
    height: "50px",
    viewBox: "0 0 50 50",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#333333",
      d: "M25.424,16.25c-4.936,0-7.424,3.521-7.424,6.458c0,1.778,0.676,3.361,2.127,3.95\nc0.238,0.097,0.451,0.003,0.521-0.259c0.047-0.182,0.161-0.64,0.212-0.829c0.069-0.26,0.043-0.352-0.149-0.577\nc-0.418-0.491-0.686-1.127-0.686-2.027c0-2.613,1.964-4.952,5.113-4.952c2.79,0,4.322,1.696,4.322,3.962\nc0,2.981-1.325,5.498-3.292,5.498c-1.087,0-1.9-0.895-1.641-1.991c0.312-1.31,0.917-2.725,0.917-3.669\nc0-0.847-0.456-1.552-1.4-1.552c-1.111,0-2.004,1.143-2.004,2.675c0,0.977,0.332,1.637,0.332,1.637s-1.137,4.794-1.335,5.634\nc-0.397,1.672-0.061,3.723-0.032,3.929c0.017,0.123,0.175,0.152,0.247,0.06c0.103-0.133,1.425-1.76,1.875-3.384\nc0.127-0.459,0.73-2.842,0.73-2.842c0.361,0.686,1.415,1.289,2.537,1.289c3.34,0,5.605-3.03,5.605-7.086\nC32,19.106,29.39,16.25,25.424,16.25z"
    })
  });
}
function LinkedIn() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "50px",
    height: "50px",
    viewBox: "0 0 50 50",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#333333",
      d: "M20.907,19.217c0,1.088-0.875,1.969-1.954,1.969c-1.078,0-1.953-0.881-1.953-1.969 c0-1.086,0.875-1.967,1.953-1.967C20.032,17.25,20.907,18.131,20.907,19.217z M20.621,22.582h-3.303V33.25h3.303V22.582z M25.901,22.582h-3.168V33.25h3.168c0,0,0-3.957,0-5.6c0-1.5,0.69-2.393,2.013-2.393c1.215,0,1.798,0.857,1.798,2.393s0,5.6,0,5.6 H33c0,0,0-3.896,0-6.754s-1.62-4.238-3.883-4.238s-3.216,1.762-3.216,1.762V22.582L25.901,22.582z"
    })
  });
}
function Twitter() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "50px",
    height: "50px",
    viewBox: "0 0 50 50",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#333333",
      d: "M34,19.526c-0.662,0.301-1.374,0.505-2.121,0.596c0.762-0.468,1.348-1.21,1.623-2.095 c-0.713,0.434-1.503,0.749-2.345,0.919c-0.674-0.736-1.633-1.196-2.695-1.196c-2.383,0-4.136,2.281-3.597,4.649 c-3.069-0.157-5.791-1.665-7.612-3.957c-0.968,1.702-0.502,3.929,1.143,5.056c-0.604-0.02-1.175-0.19-1.672-0.474 c-0.04,1.754,1.186,3.395,2.961,3.761c-0.52,0.145-1.089,0.179-1.667,0.065c0.47,1.504,1.833,2.6,3.449,2.63 c-1.553,1.247-3.508,1.805-5.467,1.568c1.634,1.074,3.575,1.701,5.66,1.701c6.856,0,10.729-5.938,10.497-11.264 C32.878,20.953,33.505,20.286,34,19.526z"
    })
  });
}
function Facebook() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "50px",
    height: "50px",
    viewBox: "0 0 50 50",
    enableBackground: "new 0 0 50 50",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#333333",
      d: "M22.814,22.135H21v3.077h1.814v9.038h3.491v-9.077h2.436L29,22.135h-2.694 c0,0,0-1.135,0-1.73c0-0.717,0.14-1,0.806-1c0.537,0,1.889,0,1.889,0V16.25c0,0-1.99,0-2.417,0c-2.597,0-3.769,1.188-3.769,3.461 C22.814,21.693,22.814,22.135,22.814,22.135z"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/social/styles.js


const Btn = external_styled_components_default().button.withConfig({
  displayName: "styles__Btn",
  componentId: "sc-1nijhnx-0"
})(["border-radius:2px;&:hover{background:#efefef;}"]);
const social_styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1nijhnx-1"
})(["display:flex;", "{align-items:flex-end;flex-direction:column;width:60px;position:fixed;transform:translateX(-85px);top:167px;transform:translateX(-85px);}"], ui/* responsive.mdPlus */.jW.mdPlus);
;// CONCATENATED MODULE: ./src/components/social/index.js





function SocialBar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(social_styles_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Btn, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Twitter, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Btn, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Facebook, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Btn, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Pintrest, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Btn, {
      children: /*#__PURE__*/jsx_runtime_.jsx(LinkedIn, {})
    })]
  });
}
;// CONCATENATED MODULE: ./src/shapes/document/page/components/header/styles.js


const Header = external_styled_components_default().div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-103b9j3-0"
})(["font-size:20px;margin-bottom:50px;", "{display:grid;grid-template-columns:minmax(600px,1000px) minmax(300px,1fr);}"], ui/* responsive.mdPlus */.jW.mdPlus);
const HeaderInner = external_styled_components_default().div.withConfig({
  displayName: "styles__HeaderInner",
  componentId: "sc-103b9j3-1"
})(["", "{max-width:800px;}p{font-size:20px;line-height:36px;font-weight:500;}"], ui/* responsive.smPlus */.jW.smPlus);
const Byline = external_styled_components_default().div.withConfig({
  displayName: "styles__Byline",
  componentId: "sc-103b9j3-2"
})(["font-size:16px;padding-bottom:15px;span{margin-right:10px;}"]);
// EXTERNAL MODULE: ./src/components/page-header.js
var page_header = __webpack_require__(1964);
;// CONCATENATED MODULE: ./src/shapes/document/page/components/header/index.js
function header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_ownKeys(Object(source), true).forEach(function (key) { header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function DocumentHeader({
  document
}) {
  var _document$components, _document$topics, _description$content;

  const description = document === null || document === void 0 ? void 0 : (_document$components = document.components) === null || _document$components === void 0 ? void 0 : _document$components.find(c => c.name === 'Intro');
  const publicatedAt = new Date(document === null || document === void 0 ? void 0 : document.publishedAt);
  const ISODate = publicatedAt.toISOString();
  const humanReadableDate = getHumanReadableDate(publicatedAt);
  const topics = document !== null && document !== void 0 && document.topics ? document === null || document === void 0 ? void 0 : (_document$topics = document.topics) === null || _document$topics === void 0 ? void 0 : _document$topics.map(topic => /*#__PURE__*/(0,external_react_.createElement)(topic_tag/* default */.Z, header_objectSpread(header_objectSpread({
    underline: true
  }, topic), {}, {
    key: topic.id
  }))) : null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderInner, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Byline, {
        children: [topics, /*#__PURE__*/jsx_runtime_.jsx("time", {
          dateTime: ISODate,
          children: humanReadableDate
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
        title: getDocumentTitle(document),
        description: description === null || description === void 0 ? void 0 : (_description$content = description.content) === null || _description$content === void 0 ? void 0 : _description$content.json
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(SocialBar, {})]
  });
}
;// CONCATENATED MODULE: ./src/shapes/document/page/components/related-content/styles.js


const related_content_styles_Outer = external_styled_components_default().aside.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-385dog-0"
})(["display:block;margin-bottom:50px;padding-bottom:10px;"]);
const Title = external_styled_components_default()(ui.H2).withConfig({
  displayName: "styles__Title",
  componentId: "sc-385dog-1"
})(["color:var(--color-text-main);font-size:1rem;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-385dog-2"
})(["display:grid;grid-gap:5px;"]);
;// CONCATENATED MODULE: ./src/shapes/document/page/components/related-content/index.js



function DocumentRelatedContentSection({
  title,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(related_content_styles_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      children: children
    })]
  });
}
// EXTERNAL MODULE: ./src/lib/graph/fragments.js
var fragments = __webpack_require__(3123);
;// CONCATENATED MODULE: ./src/shapes/document/query.js

const QUERY_DOCUMENT = `
  query DOCUMENT_PAGE($language: String!, $path: String, $version: VersionLabel! ) {

    document: catalogue(language: $language, path: $path, version: $version) {
      ...item
      ...product
      publishedAt
      topics {
        id
        name
        parent {
          name
        }
        items(first:2){
          edges{
            node{
              ...item
              ...product
              id
              topics {
                id
                name
              }
            }
          }
        }
      }
     }
  }

  ${fragments/* default */.Z}
`;
;// CONCATENATED MODULE: ./src/shapes/document/get-data.js
function get_data_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function get_data_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { get_data_ownKeys(Object(source), true).forEach(function (key) { get_data_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { get_data_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function get_data_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



async function getData({
  asPath,
  language,
  preview = null
}) {
  const {
    data
  } = await (0,graph/* simplyFetchFromGraph */.dY)({
    query: QUERY_DOCUMENT,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published'
    }
  });
  return get_data_objectSpread(get_data_objectSpread({}, data), {}, {
    preview
  });
}
;// CONCATENATED MODULE: ./src/shapes/document/page/styles.js



const page_styles_Outer = external_styled_components_default()(ui/* Inner */.Nh).withConfig({
  displayName: "styles__Outer",
  componentId: "sc-ofh1tb-0"
})(["margin:0 auto;", "{max-width:var(--content-max-width);}"], ui/* responsive.mdPlus */.jW.mdPlus);
const styles_Header = external_styled_components_default().div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-ofh1tb-1"
})(["font-size:20px;margin-bottom:50px;", "{display:grid;grid-template-columns:minmax(600px,1000px) minmax(300px,1fr);}"], ui/* responsive.mdPlus */.jW.mdPlus);
const styles_HeaderInner = external_styled_components_default().div.withConfig({
  displayName: "styles__HeaderInner",
  componentId: "sc-ofh1tb-2"
})(["margin-bottom:50px;", "{max-width:800px;}p{font-size:20px;line-height:36px;font-weight:500;}"], ui/* responsive.smPlus */.jW.smPlus);
const styles_Byline = external_styled_components_default().div.withConfig({
  displayName: "styles__Byline",
  componentId: "sc-ofh1tb-3"
})(["font-size:16px;padding-bottom:15px;span{margin-right:10px;}"]);
const styles_Title = external_styled_components_default().h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-ofh1tb-4"
})(["color:var(--color-text-main);font-family:'Trebuchet MS','Lucida Sans Unicode','Lucida Grande','Lucida Sans',Arial,sans-serif;font-size:50px;line-height:1.2em;margin-bottom:15px;margin:0;max-width:800px;"]);
const HeroImage = external_styled_components_default().div.withConfig({
  displayName: "styles__HeroImage",
  componentId: "sc-ofh1tb-5"
})(["display:grid;grid-gap:5px;grid-template-columns:repeat(2,1fr);margin-bottom:100px;> figure:first-child{grid-column-end:span 2;}"]);
const page_styles_Img = external_styled_components_default()(react_image_.Image).withConfig({
  displayName: "styles__Img",
  componentId: "sc-ofh1tb-6"
})(["height:100%;overflow:hidden;width:100%;> img{display:block;height:100%;object-fit:cover;object-position:center;overflow:hidden;width:100%;}"]);
const DocumentContent = external_styled_components_default().div.withConfig({
  displayName: "styles__DocumentContent",
  componentId: "sc-ofh1tb-7"
})(["display:grid;grid-gap:200px;grid-template-columns:1fr;", "{grid-template-columns:minmax(600px,1000px) minmax(300px,1fr);}"], ui/* responsive.mdPlus */.jW.mdPlus);
const Article = external_styled_components_default().article.withConfig({
  displayName: "styles__Article",
  componentId: "sc-ofh1tb-8"
})(["p,li{margin-left:25px !important;margin-right:25px;", "{padding-right:100px;margin-left:50px !important;margin-right:0;}}h2{font-size:var(--font-size-l);}h3{margin-left:25px;font-size:var(--font-size-l);line-height:38px;", "{margin-left:50px;}}"], ui/* responsive.mdPlus */.jW.mdPlus, ui/* responsive.mdPlus */.jW.mdPlus);
const Sidebar = external_styled_components_default().div.withConfig({
  displayName: "styles__Sidebar",
  componentId: "sc-ofh1tb-9"
})(["margin-top:-15px;overflow-y:auto;"]);
;// CONCATENATED MODULE: ./src/shapes/document/page/index.js
function page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { page_ownKeys(Object(source), true).forEach(function (key) { page_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function Document({
  document,
  asPath
}) {
  var _document$components, _document$components2, _document$components3, _topics$map, _topics$map$flat, _featured$content, _images$content, _images$content$image;

  const images = document === null || document === void 0 ? void 0 : (_document$components = document.components) === null || _document$components === void 0 ? void 0 : _document$components.find(c => c.name === 'Image');
  const featured = document === null || document === void 0 ? void 0 : (_document$components2 = document.components) === null || _document$components2 === void 0 ? void 0 : _document$components2.find(c => c.name === 'Featured');
  const body = document === null || document === void 0 ? void 0 : (_document$components3 = document.components) === null || _document$components3 === void 0 ? void 0 : _document$components3.find(c => c.name === 'Body');
  const topics = document === null || document === void 0 ? void 0 : document.topics; // Find all topic maps, as a parent, then filter on "document" type
  // Comment in the first filter line with your topic name to filter on a specific topic
  // Comment in the "document" if to only show articles

  const relatedArticles = topics // ?.filter((topic) => topic?.parent?.name === '[YOUR-TOPIC-MAP-NAME]')
  === null || topics // ?.filter((topic) => topic?.parent?.name === '[YOUR-TOPIC-MAP-NAME]')
  === void 0 ? void 0 : (_topics$map = topics // ?.filter((topic) => topic?.parent?.name === '[YOUR-TOPIC-MAP-NAME]')
  .map(topic => {
    var _topic$items;

    return topic === null || topic === void 0 ? void 0 : (_topic$items = topic.items) === null || _topic$items === void 0 ? void 0 : _topic$items.edges;
  })) === null || _topics$map === void 0 ? void 0 : (_topics$map$flat = _topics$map.flat()) === null || _topics$map$flat === void 0 ? void 0 : _topics$map$flat.filter(node => {
    var _node$node;

    return (node === null || node === void 0 ? void 0 : (_node$node = node.node) === null || _node$node === void 0 ? void 0 : _node$node.path) !== asPath;
  });
  const relatedArticlesWithoutRepeatedElements = getArticlesWithoutRepeatedElements(relatedArticles);
  const featuredItems = featured === null || featured === void 0 ? void 0 : (_featured$content = featured.content) === null || _featured$content === void 0 ? void 0 : _featured$content.items;
  const hasFeaturedItems = Boolean(featuredItems === null || featuredItems === void 0 ? void 0 : featuredItems.length);
  const hasRelatedArticles = Boolean(relatedArticlesWithoutRepeatedElements === null || relatedArticlesWithoutRepeatedElements === void 0 ? void 0 : relatedArticlesWithoutRepeatedElements.length);
  const hasContentToShowOnTheSide = hasFeaturedItems || hasRelatedArticles;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_styles_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(DocumentHeader, {
      document: document
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DocumentContent, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Article, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(HeroImage, {
          children: images === null || images === void 0 ? void 0 : (_images$content = images.content) === null || _images$content === void 0 ? void 0 : (_images$content$image = _images$content.images) === null || _images$content$image === void 0 ? void 0 : _images$content$image.map((img, i) => /*#__PURE__*/(0,external_react_.createElement)(page_styles_Img, page_objectSpread(page_objectSpread({}, img), {}, {
            key: img.url,
            alt: img.altText,
            sizes: i > 0 ? '40vw' : '80vw'
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx(shape_components/* default */.Z, {
          components: [body]
        })]
      }), hasContentToShowOnTheSide && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Sidebar, {
        children: [hasFeaturedItems && /*#__PURE__*/jsx_runtime_.jsx(DocumentRelatedContentSection, {
          title: "Featured",
          children: featuredItems.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(Microformat, {
            item: item
          }, i))
        }), hasRelatedArticles && /*#__PURE__*/jsx_runtime_.jsx(DocumentRelatedContentSection, {
          title: "Related",
          children: relatedArticlesWithoutRepeatedElements.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(Microformat, {
            item: item === null || item === void 0 ? void 0 : item.node
          }, i))
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/layout/index.js + 21 modules
var layout = __webpack_require__(6381);
// EXTERNAL MODULE: external "@crystallize/content-transformer/toText"
var toText_ = __webpack_require__(4880);
var toText_default = /*#__PURE__*/__webpack_require__.n(toText_);
;// CONCATENATED MODULE: ./src/page-components/document/index.js






const document_getData = getData;
function DocumentPage({
  document,
  preview
}) {
  var _document$components, _document$components2, _description$content, _images$content, _images$content$image, _images$content$image2;

  const router = (0,router_.useRouter)();
  const asPath = router === null || router === void 0 ? void 0 : router.asPath;
  const title = getDocumentTitle(document);
  const description = document === null || document === void 0 ? void 0 : (_document$components = document.components) === null || _document$components === void 0 ? void 0 : _document$components.find(c => c.name === 'Intro');
  const images = document === null || document === void 0 ? void 0 : (_document$components2 = document.components) === null || _document$components2 === void 0 ? void 0 : _document$components2.find(c => c.name === 'Image');
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: title,
    description: toText_default()(description === null || description === void 0 ? void 0 : (_description$content = description.content) === null || _description$content === void 0 ? void 0 : _description$content.json),
    image: images === null || images === void 0 ? void 0 : (_images$content = images.content) === null || _images$content === void 0 ? void 0 : (_images$content$image = _images$content.images) === null || _images$content$image === void 0 ? void 0 : (_images$content$image2 = _images$content$image[0]) === null || _images$content$image2 === void 0 ? void 0 : _images$content$image2.url,
    preview: preview,
    children: /*#__PURE__*/jsx_runtime_.jsx(Document, {
      document: document,
      asPath: asPath
    })
  });
}
// EXTERNAL MODULE: ./src/page-components/folder/index.js + 6 modules
var folder = __webpack_require__(2274);
;// CONCATENATED MODULE: ./src/page-components/product/schema.js




const SchemaOrg = ({
  variants,
  summary
}) => {
  const router = (0,router_.useRouter)();
  let schema = [];
  variants === null || variants === void 0 ? void 0 : variants.forEach(variant => {
    var _variant$priceVariant, _summary$content, _variant$images, _variant$images$;

    const {
      price,
      currency
    } = ((_variant$priceVariant = variant.priceVariants) === null || _variant$priceVariant === void 0 ? void 0 : _variant$priceVariant.find(pv => pv.identifier === 'default')) || {};
    schema.push({
      '@context': 'https://schema.org/',
      '@type': 'Product',
      sku: variant === null || variant === void 0 ? void 0 : variant.sku,
      name: variant === null || variant === void 0 ? void 0 : variant.name,
      description: toText_default()(summary === null || summary === void 0 ? void 0 : (_summary$content = summary.content) === null || _summary$content === void 0 ? void 0 : _summary$content.json),
      image: variant === null || variant === void 0 ? void 0 : (_variant$images = variant.images) === null || _variant$images === void 0 ? void 0 : (_variant$images$ = _variant$images[0]) === null || _variant$images$ === void 0 ? void 0 : _variant$images$.url,
      offers: {
        '@type': 'Offer',
        // priceValidUntil: 'YYYY-MM-DD',
        priceCurrency: currency,
        url: router === null || router === void 0 ? void 0 : router.asPath,
        availability: (variant === null || variant === void 0 ? void 0 : variant.stock) > 0 ? `https://schema.org/InStock` : `https://schema.org/OutOfStock`,
        price,
        currency
      }
    });
  });
  return /*#__PURE__*/jsx_runtime_.jsx("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema)
    }
  });
};

/* harmony default export */ const schema = (SchemaOrg);
// EXTERNAL MODULE: ./src/ui/content-transformer.js
var content_transformer = __webpack_require__(9006);
// EXTERNAL MODULE: ./src/components/item-collection.js + 2 modules
var item_collection = __webpack_require__(2880);
;// CONCATENATED MODULE: external "lodash/isEqual"
const isEqual_namespaceObject = require("lodash/isEqual");
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_namespaceObject);
;// CONCATENATED MODULE: ./src/shapes/product/page/components/variant-selector/styles.js


const variant_selector_styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1suhdb3-0"
})(["margin:30px 0;"]);
const Variant = external_styled_components_default().div.withConfig({
  displayName: "styles__Variant",
  componentId: "sc-1suhdb3-1"
})(["margin-bottom:15px;"]);
const Values = external_styled_components_default().div.withConfig({
  displayName: "styles__Values",
  componentId: "sc-1suhdb3-2"
})([""]);
const Button = external_styled_components_default().button.attrs(() => ({
  type: 'button'
})).withConfig({
  displayName: "styles__Button",
  componentId: "sc-1suhdb3-3"
})(["appearance:none;background:white;border:none;color:var(--color-text-sub);cursor:pointer;font-weight:bold;margin:0;padding:8px 20px;position:relative;text-transform:capitalize;width:100%;&:focus,&:active{outline:none;}", ";"], external_styled_is_default()('selected')`
    background: #000;
    color: white;
    border: 1px solid #000;
  `);
const AttributeName = external_styled_components_default().h4.withConfig({
  displayName: "styles__AttributeName",
  componentId: "sc-1suhdb3-4"
})(["color:var(--color-text-main);font-size:var(--font-size-s);font-weight:600;margin:25px 0 10px;"]);
const AttributeSelector = external_styled_components_default().div.withConfig({
  displayName: "styles__AttributeSelector",
  componentId: "sc-1suhdb3-5"
})(["display:flex;margin-bottom:0.5rem;"]);
const AttributeButton = external_styled_components_default().button.withConfig({
  displayName: "styles__AttributeButton",
  componentId: "sc-1suhdb3-6"
})(["align-items:flex-end;border:1px solid #dfdfdf;display:flex;flex-wrap:wrap;font-weight:bold;justify-content:center;padding:10px 0;text-transform:capitalize;width:25%;", ";", ""], external_styled_is_default()('selected')`
    border-color: var(--color-text-main);
  `, ({
  hasVariantForAttribute
}) => !hasVariantForAttribute && `
      position: relative;
      :after {
        background-color: rgba(1,1,1,0.05);
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
    `);
const VariantImage = external_styled_components_default().div.withConfig({
  displayName: "styles__VariantImage",
  componentId: "sc-1suhdb3-7"
})(["img{width:100%;height:100%;object-fit:contain;}max-width:100px;position:relative;width:100%;"]);
;// CONCATENATED MODULE: ./src/shapes/product/page/components/variant-selector/index.js
function variant_selector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function variant_selector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { variant_selector_ownKeys(Object(source), true).forEach(function (key) { variant_selector_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { variant_selector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function variant_selector_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function reduceAttributes(variants) {
  return variants.reduce((acc, variant) => {
    const attrs = acc;
    variant.attributes.forEach(({
      attribute,
      value
    }) => {
      const currentAttribute = attrs[attribute];

      if (!currentAttribute) {
        attrs[attribute] = [value];
        return;
      }

      const valueExists = currentAttribute.find(str => str === value);

      if (!valueExists) {
        attrs[attribute].push(value);
      }
    });
    return attrs;
  }, {});
}

function attributesToObject({
  attributes
}) {
  return Object.assign({}, ...attributes.map(({
    attribute,
    value
  }) => ({
    [attribute]: value
  })));
}

function VariantAttributeValue({
  value,
  images = []
}) {
  const [image] = images || [];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [image && /*#__PURE__*/jsx_runtime_.jsx(VariantImage, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_image_.Image, variant_selector_objectSpread(variant_selector_objectSpread({}, image), {}, {
        sizes: "100px"
      }))
    }), value]
  });
}

function VariantSelector({
  variants,
  selectedVariant,
  onVariantChange
}) {
  const attributes = reduceAttributes(variants);

  if (!Object.keys(attributes).length) {
    return /*#__PURE__*/jsx_runtime_.jsx(variant_selector_styles_Outer, {
      children: variants.map(variant => /*#__PURE__*/jsx_runtime_.jsx(Variant, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Values, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Button, {
            selected: variant.id === selectedVariant.id,
            onClick: () => onVariantChange(variant),
            children: variant.name
          }, variant.id)
        })
      }, variant.id))
    });
  }

  function onAttributeSelect({
    attributeName,
    value
  }) {
    const selectedAttributes = attributesToObject(selectedVariant);
    selectedAttributes[attributeName] = value; // Get the most suitable variant

    let variant = variants.find(variant => isEqual_default()(selectedAttributes, attributesToObject(variant)));
    /**
     * No variant matches all attributes. Let's select the first one
     * that matches just the new set
     */

    if (!variant) {
      variant = variants.find(variant => variant.attributes.some(a => a.attribute === attributeName && a.value === value));
    }

    onVariantChange(variant);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(variant_selector_styles_Outer, {
    children: Object.keys(attributes).map(attributeName => {
      const valuesForEachAttribute = attributes[attributeName];
      const selectedAttr = selectedVariant.attributes.find(a => a.attribute === attributeName);

      if (!selectedAttr) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(AttributeName, {
          children: attributeName
        }), /*#__PURE__*/jsx_runtime_.jsx(AttributeSelector, {
          children: valuesForEachAttribute.map(value => {
            const selectedAttributes = attributesToObject(selectedVariant);
            selectedAttributes[attributeName] = value; // Get the most suitable variant

            const mostSuitableVariant = variants.find(variant => isEqual_default()(selectedAttributes, attributesToObject(variant)));
            const hasVariantForAttribute = Boolean(mostSuitableVariant);
            return /*#__PURE__*/jsx_runtime_.jsx(AttributeButton, {
              onClick: () => onAttributeSelect({
                attributeName,
                value
              }),
              type: "button",
              selected: value === selectedAttr.value,
              hasVariantForAttribute: hasVariantForAttribute,
              children: /*#__PURE__*/jsx_runtime_.jsx(VariantAttributeValue, {
                images: mostSuitableVariant === null || mostSuitableVariant === void 0 ? void 0 : mostSuitableVariant.images,
                value: value
              })
            }, value);
          })
        })]
      }, attributeName);
    })
  });
}
// EXTERNAL MODULE: external "@crystallize/react-layout"
var react_layout_ = __webpack_require__(7890);
// EXTERNAL MODULE: ./src/components/basket/index.js + 4 modules
var components_basket = __webpack_require__(7384);
;// CONCATENATED MODULE: ./src/shapes/product/page/components/buy/styles.js



const ProductFooter = external_styled_components_default().div.withConfig({
  displayName: "styles__ProductFooter",
  componentId: "sc-npica3-0"
})(["display:flex;flex-direction:column;padding:15px 0 15px;border-top:1px solid #cecece;border-bottom:1px solid #cecece;align-items:center;", "{margin-bottom:0;flex-direction:row;flex-wrap:wrap;justify-content:space-between;}button{", "{flex-grow:0;}}"], ui/* responsive.mdPlus */.jW.mdPlus, ui/* responsive.mdPlus */.jW.mdPlus);
const styles_Price = external_styled_components_default().div.withConfig({
  displayName: "styles__Price",
  componentId: "sc-npica3-1"
})(["align-items:center;color:var(--color-text-sub);display:flex;flex-direction:column;font-size:var(--font-size-xl);margin-bottom:20px;margin-top:20px;", " ", "{flex-grow:1;}", "{margin-right:20px;}"], external_styled_is_default()('discounted')`
    color:var(--color-discount);
  `, ui/* responsive.xs */.jW.xs, ui/* responsive.mdPlus */.jW.mdPlus);
const DiscountDetails = external_styled_components_default().span.withConfig({
  displayName: "styles__DiscountDetails",
  componentId: "sc-npica3-2"
})(["display:block;display:flex;font-size:0.55em;font-weight:400;justify-content:space-between;text-align:left;"]);
const styles_BeforePrice = external_styled_components_default().div.withConfig({
  displayName: "styles__BeforePrice",
  componentId: "sc-npica3-3"
})(["color:var(--color-text-sub);opacity:0.6;padding:5px 0;text-decoration:line-through;"]);
const styles_Percentage = external_styled_components_default().div.withConfig({
  displayName: "styles__Percentage",
  componentId: "sc-npica3-4"
})(["font-weight:600;padding:5px 15px;"]);
;// CONCATENATED MODULE: ./src/shapes/product/page/components/buy/index.js









function BuyButton({
  product,
  selectedVariant,
  pricing
}) {
  var _pricing$defaultPrice, _pricing$defaultPrice2, _pricing$discountPric2, _pricing$discountPric3;

  const {
    0: buying,
    1: setBuying
  } = (0,external_react_.useState)(false);
  const basket = (0,components_basket/* useBasket */.K)();
  const layout = (0,external_react_.useContext)(react_layout_.LayoutContext);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)(['common', 'product']);
  const locale = (0,app_config/* useLocale */.bU)();

  function buy() {
    var _pricing$discountPric;

    /**
     * Give user immidiate feedback that they've triggered
     * the buy action. This is important for user gratification
     * and conveys trust in the service
     */
    setBuying(true);
    basket.actions.addItem({
      sku: selectedVariant.sku,
      path: product.path,
      priceVariantIdentifier: pricing !== null && pricing !== void 0 && pricing.discountPrice ? pricing === null || pricing === void 0 ? void 0 : (_pricing$discountPric = pricing.discountPrice) === null || _pricing$discountPric === void 0 ? void 0 : _pricing$discountPric.identifier : (pricing === null || pricing === void 0 ? void 0 : pricing.defaultPrice.identifier) || locale.crystallizePriceVariant
    });
  }

  const textDefaultPrice = t('price', {
    value: pricing === null || pricing === void 0 ? void 0 : (_pricing$defaultPrice = pricing.defaultPrice) === null || _pricing$defaultPrice === void 0 ? void 0 : _pricing$defaultPrice.price,
    currency: pricing === null || pricing === void 0 ? void 0 : (_pricing$defaultPrice2 = pricing.defaultPrice) === null || _pricing$defaultPrice2 === void 0 ? void 0 : _pricing$defaultPrice2.currency
  });
  /**
   * Draw attention to the item when the server state has
   * been updated
   */

  (0,external_react_.useEffect)(() => {
    async function drawAttentionToItemInBasket() {
      setBuying(false); // Wait for the layout menu to open

      await layout.actions.showRight();
      /**
       * Give the user time to rest their eyes after the
       * right layou menu has been shown
       */

      setTimeout(() => {
        basket.actions.drawAttention(selectedVariant.sku);
      }, 250);
    }

    if (buying && basket.status === 'ready') {
      drawAttentionToItemInBasket();
    }
  }, [buying, basket.status, basket.actions, selectedVariant, layout]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductFooter, {
    children: [pricing !== null && pricing !== void 0 && pricing.discountPrice ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Price, {
      discounted: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: t('price', {
          value: pricing === null || pricing === void 0 ? void 0 : (_pricing$discountPric2 = pricing.discountPrice) === null || _pricing$discountPric2 === void 0 ? void 0 : _pricing$discountPric2.price,
          currency: pricing === null || pricing === void 0 ? void 0 : (_pricing$discountPric3 = pricing.discountPrice) === null || _pricing$discountPric3 === void 0 ? void 0 : _pricing$discountPric3.currency
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DiscountDetails, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(styles_BeforePrice, {
          children: textDefaultPrice
        }), /*#__PURE__*/jsx_runtime_.jsx(styles_Percentage, {
          children: `-${pricing === null || pricing === void 0 ? void 0 : pricing.discountPercentage}%`
        })]
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(styles_Price, {
      children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: textDefaultPrice
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ui/* Button */.zx, {
      width: "250px",
      onClick: buy,
      disabled: !(pricing !== null && pricing !== void 0 && pricing.defaultPrice.currency),
      state: buying && 'loading',
      children: t('product:addToBasket')
    })]
  });
}
;// CONCATENATED MODULE: ./src/shapes/product/query.js

const QUERY_PRODUCT = `
  query PRODUCT_PAGE($language: String!, $path: String, $version: VersionLabel!) {
    product: catalogue(language: $language, path: $path, version: $version) {
      ...item
      ...product

      topics {
        id
        name
        items(first: 4) {
          edges {
            node {
              ...item
              ...product
            }
          }
        }
      }
    }
  }

  ${fragments/* default */.Z}
`;
;// CONCATENATED MODULE: ./src/shapes/product/get-data.js
function product_get_data_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function product_get_data_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_get_data_ownKeys(Object(source), true).forEach(function (key) { product_get_data_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_get_data_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_get_data_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



async function get_data_getData({
  asPath,
  language,
  preview = null
}) {
  const {
    data
  } = await (0,graph/* simplyFetchFromGraph */.dY)({
    query: QUERY_PRODUCT,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published'
    }
  });
  return product_get_data_objectSpread(product_get_data_objectSpread({}, data), {}, {
    preview
  });
}
;// CONCATENATED MODULE: ./src/ui/icons/stock.js


function IconStock() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M14.658 3.405L12.876 0.831C12.698 0.574831 12.4608 0.365481 12.1845 0.220788C11.9081 0.0760947 11.6009 0.000347282 11.289 0L3.711 0C3.39908 0.000347282 3.09187 0.0760947 2.81554 0.220788C2.53922 0.365481 2.30196 0.574831 2.124 0.831L0.342 3.405C0.119767 3.72696 0.000508337 4.10879 0 4.5L0 13.068C0 13.5804 0.203549 14.0718 0.56587 14.4341C0.92819 14.7965 1.4196 15 1.932 15H13.068C13.5804 15 14.0718 14.7965 14.4341 14.4341C14.7965 14.0718 15 13.5804 15 13.068V4.5C14.9995 4.10879 14.8802 3.72696 14.658 3.405ZM11.289 1.5C11.3587 1.49993 11.4273 1.51682 11.489 1.54923C11.5507 1.58164 11.6035 1.62858 11.643 1.686L12.759 3.3H8.259V1.5H11.289ZM3.357 1.686C3.39647 1.62858 3.44932 1.58164 3.511 1.54923C3.57268 1.51682 3.64133 1.49993 3.711 1.5H6.75V3.3H2.25L3.357 1.686ZM13.5 13.068C13.5004 13.1248 13.4895 13.1812 13.4679 13.2338C13.4464 13.2864 13.4146 13.3342 13.3744 13.3744C13.3342 13.4146 13.2864 13.4464 13.2338 13.4679C13.1812 13.4895 13.1248 13.5004 13.068 13.5H1.932C1.87516 13.5004 1.8188 13.4895 1.76621 13.4679C1.71362 13.4464 1.66584 13.4146 1.62564 13.3744C1.58545 13.3342 1.55364 13.2864 1.53207 13.2338C1.5105 13.1812 1.4996 13.1248 1.5 13.068V5.175C1.5 5.07554 1.53951 4.98016 1.60984 4.90983C1.68016 4.83951 1.77554 4.8 1.875 4.8H13.125C13.2245 4.8 13.3198 4.83951 13.3902 4.90983C13.4605 4.98016 13.5 5.07554 13.5 5.175V13.068Z",
      fill: "#080708"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      id: "detail",
      d: "M9.75 6.2998H5.25C4.83579 6.2998 4.5 6.63559 4.5 7.0498C4.5 7.46402 4.83579 7.7998 5.25 7.7998H9.75C10.1642 7.7998 10.5 7.46402 10.5 7.0498C10.5 6.63559 10.1642 6.2998 9.75 6.2998Z",
      fill: "#FBDCCE"
    })]
  });
}
;// CONCATENATED MODULE: ./src/ui/icons/index.js
// export * from './basket';

;// CONCATENATED MODULE: ./src/shapes/product/page/components/stock/styles.js

const stock_styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-k9m6e9-0"
})(["align-items:center;display:flex;font-size:var(--font-size-secondary);font-weight:600;margin-top:50px;svg{margin-right:10px;}"]);
const StockColorIndicator = external_styled_components_default().span.withConfig({
  displayName: "styles__StockColorIndicator",
  componentId: "sc-k9m6e9-1"
})(["background:", ";border-radius:50%;height:10px;margin-left:10px;width:10px;"], p => p.color);
;// CONCATENATED MODULE: ./src/shapes/product/page/components/stock/index.js






const STOCK_LIMIT = 20;
const STOCK_COLOR_INDICATOR = {
  NO_STOCK: 'red',
  ABOVE_LIMIT: '#DAF5CB',
  BEETWEN_ZERO_AND_LIMIT: '#FFD23F'
};

const Stock = ({
  selectedVariant
}) => {
  const stockCount = selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.stock;
  const hasStock = stockCount >= 1;
  const hasMoreStockThanLimit = stockCount > STOCK_LIMIT;
  let stockColor;

  if (!hasStock) {
    stockColor = STOCK_COLOR_INDICATOR.NO_STOCK;
  } else if (hasMoreStockThanLimit) {
    stockColor = STOCK_COLOR_INDICATOR.ABOVE_LIMIT;
  } else {
    stockColor = STOCK_COLOR_INDICATOR.BEETWEN_ZERO_AND_LIMIT;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(stock_styles_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(IconStock, {}), hasStock ? /*#__PURE__*/jsx_runtime_.jsx(StockCount, {
      count: stockCount
    }) : /*#__PURE__*/jsx_runtime_.jsx(OutOfStock, {}), /*#__PURE__*/jsx_runtime_.jsx(StockColorIndicator, {
      color: stockColor
    })]
  });
};

/* harmony default export */ const stock = (Stock);

function OutOfStock() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('product');
  return /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: t('outOfStock')
  });
}

function StockCount({
  count
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('product');
  const stockCountToDisplay = count > STOCK_LIMIT ? `${STOCK_LIMIT}+` : count;
  return /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: t('stock', {
      stockCount: stockCountToDisplay
    })
  });
}
;// CONCATENATED MODULE: ./src/shapes/product/page/styles.js



const page_styles_Inner = external_styled_components_default()(ui/* Inner */.Nh).withConfig({
  displayName: "styles__Inner",
  componentId: "sc-1b8d9i3-0"
})(["display:flex;flex-direction:column-reverse;padding:0 15px;", "{display:grid;padding:0 30px;grid-template-columns:repeat(12,1fr);column-gap:30px;grid-template-areas:'content content content content content content content actions actions actions actions actions';}", "{padding-left:100px;padding-right:100px;column-gap:initial;grid-template-areas:'content content content content content content content . actions actions actions actions';}figcaption{margin-top:0.5rem;}"], ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.mdPlus */.jW.mdPlus);
const styles_Content = external_styled_components_default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1b8d9i3-1"
})(["margin-top:30px;", "{margin-top:0;grid-area:content;}"], ui/* responsive.smPlus */.jW.smPlus);
const Actions = external_styled_components_default().div.withConfig({
  displayName: "styles__Actions",
  componentId: "sc-1b8d9i3-2"
})(["", "{grid-area:actions;}"], ui/* responsive.smPlus */.jW.smPlus);
const ActionsSticky = external_styled_components_default().div.withConfig({
  displayName: "styles__ActionsSticky",
  componentId: "sc-1b8d9i3-3"
})(["", "{position:sticky;top:50px;}"], ui/* responsive.smPlus */.jW.smPlus); // The specs and DescriptionWrapper padding-right
// must be the same so the content looks aligned

const Specs = external_styled_components_default().div.withConfig({
  displayName: "styles__Specs",
  componentId: "sc-1b8d9i3-4"
})(["border-left:0;display:block;margin-top:15px;padding:20px 0;margin-left:25px;margin-right:25px;", "{padding:0 100px 0 25px;}", "{padding:0 0px 0 25px;}"], ui/* responsive.mdPlus */.jW.mdPlus, ui/* responsive.md */.jW.md);
const Description = external_styled_components_default().div.withConfig({
  displayName: "styles__Description",
  componentId: "sc-1b8d9i3-5"
})(["color:var(--color-text-sub);", "{padding:100px 0;margin-top:50px;}"], ui/* responsive.mdPlus */.jW.mdPlus);
const DescriptionWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__DescriptionWrapper",
  componentId: "sc-1b8d9i3-6"
})(["p,li{margin-left:25px !important;margin-right:25px;", "{padding-right:100px;margin-left:50px !important;margin-right:0;}}h2{font-size:var(--font-size-md);}h3{margin-left:25px;line-height:38px;", "{margin-left:50px;}}"], ui/* responsive.mdPlus */.jW.mdPlus, ui/* responsive.mdPlus */.jW.mdPlus);
const Media = external_styled_components_default().div.withConfig({
  displayName: "styles__Media",
  componentId: "sc-1b8d9i3-7"
})(["position:relative;display:flex;flex-wrap:wrap;"]); // Creating a gallery based on image orientation

const ImgContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ImgContainer",
  componentId: "sc-1b8d9i3-8"
})(["border:4px solid #fff;width:50%;max-width:100%;flex-grow:1;position:relative;figure{height:100%;}img{object-fit:var(--image-object-fit);overflow:hidden;width:100%;height:100%;border:1px solid #dfdfdf;}", " &:first-child{width:100%;}"], external_styled_is_default()('portrait')`
    width:33.333%;
    max-width:50%;
    &:only-child {
      max-width:100%;
      width:100%
    }
  `);
const page_styles_Title = external_styled_components_default()(ui.H1).withConfig({
  displayName: "styles__Title",
  componentId: "sc-1b8d9i3-9"
})(["font-size:var(--font-size-xl);font-weight:900;"]);
const Summary = external_styled_components_default().div.withConfig({
  displayName: "styles__Summary",
  componentId: "sc-1b8d9i3-10"
})(["color:var(--color-text-sub);font-size:var(--font-size-body);line-height:1.4;margin-bottom:15px;"]);
const RelatedContainer = external_styled_components_default()(ui/* Inner */.Nh).withConfig({
  displayName: "styles__RelatedContainer",
  componentId: "sc-1b8d9i3-11"
})(["margin-top:100px;min-height:0;"]);
;// CONCATENATED MODULE: ./src/shapes/product/page/index.js
function product_page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function product_page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_page_ownKeys(Object(source), true).forEach(function (key) { product_page_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function ProductShape({
  product,
  locale
}) {
  var _components$find, _components$find$cont, _selectedVariant$imag, _summaryComponent$con;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('product');
  const {
    name,
    components = [],
    variants = [],
    topics = []
  } = product; // Set the selected variant to the default

  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = (0,external_react_.useState)(variants.find(variant => variant.isDefault));

  function onVariantChange(variant) {
    setSelectedVariant(variant);
  }

  const pricing = (0,lib_pricing/* default */.Z)({
    variant: selectedVariant,
    locale
  });
  const summaryComponent = components.find(utils/* isSumaryComponent */.q9);
  const descriptionComponent = components.find(utils/* isDescriptionComponent */.uy);
  const specifications = components.find(utils/* isSpecsComponent */.SS);
  const relatedProducts = (_components$find = components.find(utils/* isRelatedProductsComponent */.Nf)) === null || _components$find === void 0 ? void 0 : (_components$find$cont = _components$find.content) === null || _components$find$cont === void 0 ? void 0 : _components$find$cont.items; // At Crystallize you can create variants of the same product.
  // It could work for sizes, colors, textures, and so on.
  // Every time we create a Product, a default variant is created of that product
  // that's why we will always have at least 1 variant.

  const hasVariants = variants.length > 1;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(page_styles_Inner, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Content, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Media, {
          children: selectedVariant === null || selectedVariant === void 0 ? void 0 : (_selectedVariant$imag = selectedVariant.images) === null || _selectedVariant$imag === void 0 ? void 0 : _selectedVariant$imag.map(img => {
            var _img$variants, _img$variants$, _img$variants2;

            return /*#__PURE__*/jsx_runtime_.jsx(ImgContainer, {
              portrait: verifyImagePotraitOrientation({
                width: img === null || img === void 0 ? void 0 : (_img$variants = img.variants) === null || _img$variants === void 0 ? void 0 : (_img$variants$ = _img$variants[0]) === null || _img$variants$ === void 0 ? void 0 : _img$variants$.width,
                height: img === null || img === void 0 ? void 0 : (_img$variants2 = img.variants) === null || _img$variants2 === void 0 ? void 0 : _img$variants2[0].height
              }),
              children: /*#__PURE__*/jsx_runtime_.jsx(react_image_.Image, product_page_objectSpread(product_page_objectSpread({}, img), {}, {
                alt: name
              }))
            }, img === null || img === void 0 ? void 0 : img.url);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Specs, {
          children: /*#__PURE__*/jsx_runtime_.jsx(shape_components/* default */.Z, {
            components: [specifications]
          })
        }), descriptionComponent && /*#__PURE__*/jsx_runtime_.jsx(Description, {
          children: /*#__PURE__*/jsx_runtime_.jsx(DescriptionWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx(shape_components/* default */.Z, {
              className: "description",
              components: [descriptionComponent]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Actions, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ActionsSticky, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(page_styles_Title, {
            children: name
          }), summaryComponent && /*#__PURE__*/jsx_runtime_.jsx(Summary, {
            children: /*#__PURE__*/jsx_runtime_.jsx(content_transformer/* default */.Z, {
              json: summaryComponent === null || summaryComponent === void 0 ? void 0 : (_summaryComponent$con = summaryComponent.content) === null || _summaryComponent$con === void 0 ? void 0 : _summaryComponent$con.json
            })
          }), topics === null || topics === void 0 ? void 0 : topics.map(topic => /*#__PURE__*/(0,external_react_.createElement)(topic_tag/* default */.Z, product_page_objectSpread(product_page_objectSpread({}, topic), {}, {
            key: topic.id
          }))), hasVariants && /*#__PURE__*/jsx_runtime_.jsx(VariantSelector, {
            variants: variants,
            selectedVariant: selectedVariant,
            onVariantChange: onVariantChange
          }), /*#__PURE__*/jsx_runtime_.jsx(BuyButton, {
            product: product,
            selectedVariant: selectedVariant,
            pricing: pricing
          }), /*#__PURE__*/jsx_runtime_.jsx(stock, {
            selectedVariant: selectedVariant
          })]
        })
      })]
    }), Boolean(relatedProducts) && /*#__PURE__*/jsx_runtime_.jsx(RelatedContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(item_collection/* default */.Z, {
        items: relatedProducts,
        title: t('relatedProduct')
      })
    })]
  });
}

function verifyImagePotraitOrientation({
  width,
  height
}) {
  return height > width;
}
;// CONCATENATED MODULE: ./src/page-components/product/index.js
function product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_ownKeys(Object(source), true).forEach(function (key) { product_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const product_getData = get_data_getData;
function ProductPage({
  product,
  preview
}) {
  var _defaultVariant$image, _defaultVariant$image2, _summaryComponent$con;

  const locale = (0,app_config/* useLocale */.bU)();
  const {
    name,
    components = [],
    variants = []
  } = product; // As default, each variant shares URL
  // that's why we use the default variant for the og:attributes

  const defaultVariant = variants.find(variant => variant.isDefault);
  const summaryComponent = components.find(({
    name
  }) => name === 'Summary');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    title: name,
    image: (_defaultVariant$image = defaultVariant.images) === null || _defaultVariant$image === void 0 ? void 0 : (_defaultVariant$image2 = _defaultVariant$image[0]) === null || _defaultVariant$image2 === void 0 ? void 0 : _defaultVariant$image2.url,
    description: toText_default()(summaryComponent === null || summaryComponent === void 0 ? void 0 : (_summaryComponent$con = summaryComponent.content) === null || _summaryComponent$con === void 0 ? void 0 : _summaryComponent$con.json),
    preview: preview,
    children: [/*#__PURE__*/jsx_runtime_.jsx(schema, product_objectSpread(product_objectSpread({}, product), {}, {
      summary: summaryComponent
    })), /*#__PURE__*/jsx_runtime_.jsx(ProductShape, {
      product: product,
      locale: locale
    })]
  });
}
// EXTERNAL MODULE: ./src/page-components/search/index.js + 22 modules
var page_components_search = __webpack_require__(2218);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(2147);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./src/pages/[...catalogue].js
const _excluded = ["renderer", "asPath"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _catalogue_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _catalogue_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _catalogue_ownKeys(Object(source), true).forEach(function (key) { _catalogue_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _catalogue_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _catalogue_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Example of a wildcard route to deal with unknown urls, e.g.:
 * /teddy-bears/fluffy-teddy
 *
 * WARNING: This strategy is not optimised for performance, and
 * you should instead create separate pages for your different
 * pages that matches your Crystallize catalogue. E.g.:
 * pages
 *  - blog
 *    - [blog-post].js
 *  - chairs
 *    - [chair].js
 */











const renderers = {
  document: {
    component: DocumentPage,
    getData: document_getData
  },
  folder: {
    component: folder/* default */.Z,
    getData: folder/* getData */.Y
  },
  product: {
    component: ProductPage,
    getData: product_getData
  },
  search: {
    component: page_components_search/* default */.Z,
    getData: page_components_search/* getData */.Y
  }
}; // Returns true if more than half of the children are products

function childrenIsMostlyProducts(children) {
  const productsCount = children.filter(c => c.type === 'product').length;
  return productsCount > children.length / 2;
}
/**
 * We need to check on the Crystallize end if this is a valid
 * url, by querying the catalogue to see if there is an item
 * with this url as path.
 */


async function getStaticProps(context) {
  const {
    params,
    preview
  } = context;
  const {
    catalogue
  } = params;
  const locale = (0,app_config/* getLocaleFromContext */.Vi)(context);
  let asPath;

  try {
    asPath = `/${catalogue.join('/')}`; // Get the item type

    const getItemType = await (0,graph/* simplyFetchFromGraph */.dY)({
      query: `
        query ITEM_TYPE($language: String!, $path: String!) {
          catalogue(language: $language, path: $path) {
            type
            language
            children {
              type
            }
          }
        }
      `,
      variables: {
        language: locale.crystallizeCatalogueLanguage,
        path: asPath
      }
    }); // Item not found for path. It's a 404

    if (!getItemType.data.catalogue) {
      return {
        notFound: true
      };
    }

    const translations = await (0,serverSideTranslations_.serverSideTranslations)(context.locale, ['common', 'basket', 'search', 'product'], (next_i18next_config_default()));
    const {
      type,
      children
    } = getItemType.data.catalogue;
    let renderer = 'folder';

    if (type === 'folder' && childrenIsMostlyProducts(children || [])) {
      renderer = 'search';
    } else if (type in renderers) {
      renderer = type;
    }

    const data = await renderers[renderer].getData(_catalogue_objectSpread({
      asPath,
      language: locale.crystallizeCatalogueLanguage,
      preview
    }, renderer === 'search' && {
      searchSpec: _catalogue_objectSpread({
        type: 'PRODUCT'
      }, (0,search/* urlToSpec */.kL)({
        asPath
      }, locale))
    }));
    return {
      props: _catalogue_objectSpread(_catalogue_objectSpread(_catalogue_objectSpread({}, data), translations), {}, {
        asPath,
        renderer
      }),
      revalidate: 1
    };
  } catch (error) {
    console.log(error);
    console.warn(`Could not get data for ${asPath}`);
  }

  return {
    notFound: true
  };
}
async function getStaticPaths({
  locales,
  defaultLocale
}) {
  const paths = [];
  await Promise.all((locales || ['en']).map(handleLocale));

  async function handleLocale(localeName) {
    const locale = (0,app_config/* getLocaleFromName */.eF)(localeName);

    function handleItem({
      path,
      name,
      children
    }) {
      if (path !== '/index' && !(name !== null && name !== void 0 && name.startsWith('_'))) {
        if (defaultLocale !== locale.locale) {
          paths.push(`/${locale.locale}${path}`);
        } else {
          paths.push(path);
        }
      }

      children === null || children === void 0 ? void 0 : children.forEach(handleItem);
    }

    try {
      var _allCatalogueItems$da;

      const allCatalogueItems = await (0,graph/* simplyFetchFromGraph */.dY)({
        query: `
          query GET_ALL_CATALOGUE_ITEMS($language: String!) {
            catalogue(language: $language, path: "/") {
              path
              name
              children {
                path
                name
                children {
                  path
                  name
                  children {
                    path
                    name
                    children {
                      path
                      name
                      children {
                        path
                        name
                        children {
                          path
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          language: locale.crystallizeCatalogueLanguage
        }
      });
      (_allCatalogueItems$da = allCatalogueItems.data.catalogue.children) === null || _allCatalogueItems$da === void 0 ? void 0 : _allCatalogueItems$da.forEach(handleItem);
    } catch (error) {
      console.error('Could not get all catalogue items for ', JSON.stringify(locale, null, 3));
      console.log(error);
    }
  }

  return {
    paths,
    fallback: 'blocking'
  };
}
function GenericCatalogueItem(_ref) {
  let {
    renderer,
    asPath
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const Component = (renderers[renderer] || renderers.folder).component;
  return /*#__PURE__*/jsx_runtime_.jsx(Component, _catalogue_objectSpread({}, rest), asPath);
}

/***/ }),

/***/ 4880:
/***/ ((module) => {

module.exports = require("@crystallize/content-transformer/toText");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = require("@crystallize/grid-renderer");

/***/ }),

/***/ 7542:
/***/ ((module) => {

module.exports = require("@crystallize/react-content-transformer");

/***/ }),

/***/ 5173:
/***/ ((module) => {

module.exports = require("@crystallize/react-image");

/***/ }),

/***/ 7890:
/***/ ((module) => {

module.exports = require("@crystallize/react-layout");

/***/ }),

/***/ 7047:
/***/ ((module) => {

module.exports = require("@crystallize/react-video");

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

/***/ 4500:
/***/ ((module) => {

module.exports = require("rc-slider");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,561,22,50,6,218,274], () => (__webpack_exec__(6258)));
module.exports = __webpack_exports__;

})();