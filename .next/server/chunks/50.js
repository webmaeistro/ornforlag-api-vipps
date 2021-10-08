exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ attribute_list)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/attribute-list/styles.js

const Attributes = external_styled_components_default().div.withConfig({
  displayName: "styles__Attributes",
  componentId: "sc-ey3psl-0"
})(["display:flex;flex-wrap:wrap;margin-top:5px;"]);
const Attribute = external_styled_components_default().div.withConfig({
  displayName: "styles__Attribute",
  componentId: "sc-ey3psl-1"
})(["background:var(--color-text-main);color:var(--color-main-background);font-size:0.8rem;border:0;text-transform:capitalize;margin-bottom:0.2rem;margin-right:0.2rem;padding:0.45rem;border-radius:0.2rem;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/attribute-list/index.js




const AttributeList = ({
  attributes
}) => /*#__PURE__*/jsx_runtime_.jsx(Attributes, {
  children: attributes.map(({
    attribute,
    value
  }) => /*#__PURE__*/jsx_runtime_.jsx(Attribute, {
    children: value
  }, attribute))
});

/* harmony default export */ const attribute_list = (AttributeList);

/***/ }),

/***/ 2575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Totals)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/ui/spinner.js
var spinner = __webpack_require__(298);
// EXTERNAL MODULE: ./src/components/basket/index.js + 4 modules
var basket = __webpack_require__(7384);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/basket/totals/styles.js

const Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1gbym7p-0"
})(["flex-grow:1;"]);
const Rows = external_styled_components_default().div.withConfig({
  displayName: "styles__Rows",
  componentId: "sc-1gbym7p-1"
})(["position:relative;"]);
const SpinnerWrap = external_styled_components_default().div.withConfig({
  displayName: "styles__SpinnerWrap",
  componentId: "sc-1gbym7p-2"
})(["position:absolute;top:0;right:0;height:100%;display:flex;align-items:center;"]);
const Row = external_styled_components_default().div.withConfig({
  displayName: "styles__Row",
  componentId: "sc-1gbym7p-3"
})(["display:grid;grid-template-columns:2fr 1fr;font-size:13px;&:not(:last-child){margin-bottom:5px;}"]);
const RowValue = external_styled_components_default().span.withConfig({
  displayName: "styles__RowValue",
  componentId: "sc-1gbym7p-4"
})(["font-weight:600;text-align:right;opacity:", ";"], p => p.hide ? '0' : '1');
const StrikeThrough = external_styled_components_default().span.withConfig({
  displayName: "styles__StrikeThrough",
  componentId: "sc-1gbym7p-5"
})(["text-decoration:line-through;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/basket/totals/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Totals(props) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)(['common', 'basket']);
  const {
    cart,
    total,
    status
  } = (0,basket/* useBasket */.K)();

  if (cart.length === 0) {
    return null;
  }

  const {
    currency
  } = total;

  function printCurrencyAmount(value) {
    return t('price', {
      value,
      currency
    });
  }

  const hasDiscount = (total === null || total === void 0 ? void 0 : total.discount) > 0;
  const isLoading = status === 'server-basket-is-stale';
  return /*#__PURE__*/jsx_runtime_.jsx(Outer, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Rows, {
      children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx(SpinnerWrap, {
        children: /*#__PURE__*/jsx_runtime_.jsx(spinner/* Spinner */.$, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
        modifier: "total-price",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [t('basket:totalPrice'), ":"]
        }), /*#__PURE__*/jsx_runtime_.jsx(RowValue, {
          hide: isLoading,
          children: printCurrencyAmount(total.gross + total.discount)
        })]
      }), hasDiscount && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
        modifier: "total-discout",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [t('basket:discount'), ":"]
        }), /*#__PURE__*/jsx_runtime_.jsx(RowValue, {
          hide: isLoading,
          children: printCurrencyAmount(total.discount * -1)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
        modifier: "total-tax",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [t('basket:tax'), ":"]
        }), /*#__PURE__*/jsx_runtime_.jsx(RowValue, {
          hide: isLoading,
          children: printCurrencyAmount(parseInt((total.gross - total.net) * 100, 10) / 100)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
        modifier: "to-pay",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [t('basket:totalToPay'), ":"]
        }), /*#__PURE__*/jsx_runtime_.jsx(RowValue, {
          hide: isLoading,
          children: printCurrencyAmount(total.gross)
        })]
      })]
    })
  }));
}

/***/ }),

/***/ 6381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@crystallize/react-layout"
var react_layout_ = __webpack_require__(7890);
var react_layout_default = /*#__PURE__*/__webpack_require__.n(react_layout_);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/ui/global.js

/* harmony default export */ const global = ((0,external_styled_components_.createGlobalStyle)([":root{--font-family-main:\"Trebuchet MS\",sans-serif;--font-size-xxl:40px;--font-size-xl:32px;--font-size-l:26px;--font-size-m:20px;--font-size-s:16px;--font-size-xs:14px;--font-size-body:var(--font-size-m);--font-size-secondary:var(--font-size-s);--font-size-tags:var(--font-size-xs);--font-listing-name-size:var(--font-size-s);--font-listing-price-size:var(--font-size-s);--font-max-width:800px;--color-main-background:#fff;--color-text-main:#080708;--color-text-sub:#4c505b;--color-box-background:#efefef;--color-price:var(--color-text-main);--color-error:#EF4836;--color-discount:#EE6969;--color-blockquote:var(--color-text-main);--color-primary-action:#FBDCCE;--color-primary-action-content:#080708;--color-icon-details:var(--color-primary-action);--color-ui-details:var(--color-primary-action);--content-padding:50px;--content-max-width:1800px;--content-padding-xs:0 0 0 25px;--listformat-product-height-xl:500px;--listformat-product-height-lg:580px;--listformat-product-height-md:500px;--listformat-product-height-sm:600px;--listformat-product-height-xs:400px;--listformat-product-image-fit:cover;--listformat-product-image-position:center;--listformat-product-background:#efefef;--listformat-document-height-xl:750px;--listformat-document-height-lg:750px;--listformat-document-height-md:750px;--listformat-document-height-sm:750px;--listformat-document-height-xs:450px;--listformat-document-image-fit:cover;--listformat-document-background:var(--color-primary-action);--microformat-image-fit:cover;--microformat-image-position:left;--image-object-fit:cover;--grid-row-height:500px;}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;font:14px/1 Helvetica,Arial,Verdana,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background:var(--color-main-background);color:var(--color-text-sub);}*{box-sizing:border-box;}h1,h2,h3,h4,p,blockquote,ol,ul{margin:0 0 2em;padding:0;}figure{margin:0;figcaption{margin-top:1em;}}main{display:block;}h1,h2,h3,h4{font-size:inherit;}strong{font-weight:bold;}a,button{color:inherit;}a{text-decoration:none;&:hover{text-decoration:underline;}}p > a{border-bottom:2px solid black;font-weight:600;&:hover{text-decoration:none;border-bottom-color:transparent;}}button{overflow:visible;border:0;font:inherit;-webkit-font-smoothing:inherit;letter-spacing:inherit;background:none;cursor:pointer;}::-moz-focus-inner{padding:0;border:0;}::-webkit-input-placeholder{color:var(--color-text-sub);}::placeholder{color:var(--color-text-sub);}img{max-width:100%;height:auto;border:0;}.crystallize-layout__menu{display:flex;}"]));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/basket/index.js + 4 modules
var components_basket = __webpack_require__(7384);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/attribute-list/index.js + 1 modules
var attribute_list = __webpack_require__(154);
// EXTERNAL MODULE: external "@crystallize/react-image"
var react_image_ = __webpack_require__(5173);
;// CONCATENATED MODULE: ./src/components/basket/tiny-basket/item/styles.js


const drawAttentionDuration = 400;
const drawAttention = (0,external_styled_components_.keyframes)(["0%{transform:scale(1);}25%{transform:scale(0.95);}50%{transform:scale(0.97);}75%{transform:scale(0.93);}100%{transform:scale(1);}"]);
const Row = external_styled_components_default().div.withConfig({
  displayName: "styles__Row",
  componentId: "sc-d0kzd0-0"
})(["width:100%;"]);
const ItemDelete = external_styled_components_default().button.withConfig({
  displayName: "styles__ItemDelete",
  componentId: "sc-d0kzd0-1"
})(["position:absolute;top:2px;right:2px;font-size:0px;display:none;&:before{content:'+';display:block;transform:rotate(45deg);font-size:12px;}"]);
const Item = external_styled_components_default().div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-d0kzd0-2"
})(["display:grid;grid-template-columns:1fr 2fr 0.5fr;padding:15px 0;border-bottom:1px solid #eee;position:relative;column-gap:10px;", ";&:hover{", "{display:block;}}"], p => p.animate && (0,external_styled_components_.css)(["animation:", " ", "ms 1;"], drawAttention, drawAttentionDuration), ItemDelete);
const ItemInfo = external_styled_components_default().span.withConfig({
  displayName: "styles__ItemInfo",
  componentId: "sc-d0kzd0-3"
})(["display:flex;flex-direction:column;width:100%;justify-content:center;"]);
const ItemInfoText = external_styled_components_default().div.withConfig({
  displayName: "styles__ItemInfoText",
  componentId: "sc-d0kzd0-4"
})([""]);
const imageWidth = '50px';
const ItemImage = external_styled_components_default()(react_image_.Image).attrs(() => ({
  sizes: imageWidth
})).withConfig({
  displayName: "styles__ItemImage",
  componentId: "sc-d0kzd0-5"
})(["width:", ";position:relative;img{display:block;width:100%;height:100%;object-fit:contain;}"], imageWidth);
const ImageImageEmpty = external_styled_components_default().div.withConfig({
  displayName: "styles__ImageImageEmpty",
  componentId: "sc-d0kzd0-6"
})(["display:inline-block;width:50px;"]);
const ItemName = external_styled_components_default().div.withConfig({
  displayName: "styles__ItemName",
  componentId: "sc-d0kzd0-7"
})(["text-transform:uppercase;font-size:14px;font-weight:600;"]);
const ItemQuantityChanger = external_styled_components_default().span.withConfig({
  displayName: "styles__ItemQuantityChanger",
  componentId: "sc-d0kzd0-8"
})(["display:flex;flex-direction:column-reverse;align-items:center;justify-content:space-between;button{margin:6px 0;}"]);
const ItemQuantity = external_styled_components_default().span.withConfig({
  displayName: "styles__ItemQuantity",
  componentId: "sc-d0kzd0-9"
})(["display:inline-block;margin:0 3px;min-width:23px;text-align:center;"]);
const PriceWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__PriceWrapper",
  componentId: "sc-d0kzd0-10"
})(["font-size:16px;padding:5px 10px 0 0;margin:4px 0;color:var(--color-text-main);"]);
const PriceWrap = external_styled_components_default().div.withConfig({
  displayName: "styles__PriceWrap",
  componentId: "sc-d0kzd0-11"
})(["display:flex;"]);
const Price = external_styled_components_default().div.withConfig({
  displayName: "styles__Price",
  componentId: "sc-d0kzd0-12"
})(["", ";"], p => p.isDiscounted && 'text-decoration: line-through');
const SubInfoOuter = external_styled_components_default().div.withConfig({
  displayName: "styles__SubInfoOuter",
  componentId: "sc-d0kzd0-13"
})(["font-size:0.8rem;"]);
const SubInfoLine = external_styled_components_default().div.withConfig({
  displayName: "styles__SubInfoLine",
  componentId: "sc-d0kzd0-14"
})(["margin-top:5px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/basket/tiny-basket/item/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TinyBasketItem({
  item
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)(['common', 'basket']);
  const {
    0: drawAttention,
    1: setDrawAttention
  } = (0,external_react_.useState)(false);
  const {
    attentionCartItem,
    actions
  } = (0,components_basket/* useBasket */.K)();
  const {
    attributes,
    images
  } = item; // Draw users attention when the item is added to the basket

  (0,external_react_.useEffect)(() => {
    if (attentionCartItem.sku === item.sku) {
      setDrawAttention(true);
      let timeout = setTimeout(() => setDrawAttention(false), drawAttentionDuration);
      return () => clearTimeout(timeout);
    }
  }, [attentionCartItem.sku, item.sku]);

  function increment() {
    actions.incrementItem(item);
  }

  function decrement() {
    actions.decrementItem(item);
  }

  function remove() {
    actions.removeItem(item);
  }

  if (item.sku.startsWith('--voucher--')) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ImageImageEmpty, {
        children: item.name
      }), /*#__PURE__*/jsx_runtime_.jsx(PriceWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx(PriceWrap, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Price, {
            children: t('price', {
              value: item.price.gross,
              currency: item.price.currency
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemDelete, {
        onClick: actions.removeVoucherCode,
        children: t('basket:removeItem', item)
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
    animate: drawAttention,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ItemImage, _objectSpread({}, images === null || images === void 0 ? void 0 : images[0])), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemInfo, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ItemName, {
          children: item.name
        }), (attributes === null || attributes === void 0 ? void 0 : attributes.length) > 0 && /*#__PURE__*/jsx_runtime_.jsx(attribute_list/* default */.Z, {
          attributes: attributes
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(PriceWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx(PriceWrap, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Price, {
            children: t('price', {
              value: item.price.gross,
              currency: item.price.currency
            })
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemQuantityChanger, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: decrement,
          type: "button",
          disabled: item.quantity === 1,
          children: "-"
        }), /*#__PURE__*/jsx_runtime_.jsx(ItemQuantity, {
          children: item.quantity
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: increment,
          type: "button",
          children: "+"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ItemDelete, {
      onClick: remove,
      children: t('basket:removeItem', item)
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/basket/tiny-basket/styles.js

const Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-kttoj1-0"
})(["flex:1 1 auto;position:relative;z-index:15;display:flex;flex-direction:column;justify-content:space-between;"]);
const Items = external_styled_components_default().ul.withConfig({
  displayName: "styles__Items",
  componentId: "sc-kttoj1-1"
})(["margin:0;flex-grow:3;padding:0;list-style:none;overflow-y:auto;"]);
const BasketIsEmpty = external_styled_components_default().div.withConfig({
  displayName: "styles__BasketIsEmpty",
  componentId: "sc-kttoj1-2"
})(["text-align:center;margin:25px;"]);
const RemainingUntilFreeShipping = external_styled_components_default().div.withConfig({
  displayName: "styles__RemainingUntilFreeShipping",
  componentId: "sc-kttoj1-3"
})(["text-align:left;flex-grow:1;padding:15px 0px;font-size:14px;margin-top:15px;font-weight:600;border-top:1px dashed #dfdfdf;"]);
const ItemOuter = external_styled_components_default().li.withConfig({
  displayName: "styles__ItemOuter",
  componentId: "sc-kttoj1-4"
})(["display:block;margin:0;"]);
const ItemIsSubscription = external_styled_components_default().strong.withConfig({
  displayName: "styles__ItemIsSubscription",
  componentId: "sc-kttoj1-5"
})(["display:block;font-weight:bold;"]);
;// CONCATENATED MODULE: ./src/components/basket/tiny-basket/index.js






function TinyBasket() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('basket');
  const {
    status,
    cart
  } = (0,components_basket/* useBasket */.K)();

  if (status === 'not-hydrated') {
    return null;
  }

  if (!(cart !== null && cart !== void 0 && cart.length)) {
    return /*#__PURE__*/jsx_runtime_.jsx(Outer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(BasketIsEmpty, {
        children: t('empty')
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Outer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Items, {
      children: cart.map(item => /*#__PURE__*/jsx_runtime_.jsx(ItemOuter, {
        item: item,
        children: /*#__PURE__*/jsx_runtime_.jsx(TinyBasketItem, {
          item: item
        })
      }, item.sku))
    })
  });
}
// EXTERNAL MODULE: ./src/components/basket/totals/index.js + 1 modules
var totals = __webpack_require__(2575);
// EXTERNAL MODULE: ./src/ui/spinner.js
var spinner = __webpack_require__(298);
;// CONCATENATED MODULE: ./src/components/layout/aside/styles.js

const styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1u09k43-0"
})(["flex:1;position:relative;padding:0 25px;display:flex;flex-direction:column;position:relative;background:var(--color-main-background);z-index:15;max-height:calc(var(--vh,1vh) * 100);"]);
const Heading = external_styled_components_default().h4.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1u09k43-1"
})(["flex:0 0 100px;padding:50px 0 35px;margin:0;display:flex;align-items:center;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1u09k43-2"
})(["flex:1 1 auto;overflow-x:hidden;overflow-y:auto;"]);
const Footer = external_styled_components_default().div.withConfig({
  displayName: "styles__Footer",
  componentId: "sc-1u09k43-3"
})(["padding:25px 0 0;flex:0 0 auto;"]);
;// CONCATENATED MODULE: ./src/components/layout/aside/index.js












const CheckoutBtn = external_styled_components_default()(ui/* Button */.zx).withConfig({
  displayName: "aside__CheckoutBtn",
  componentId: "sc-1jale60-0"
})(["width:100%;margin:20px 0;border:2px solid var(--color-text-main);padding:10px 20px;display:block;font-size:16px;font-weight:600;text-align:center;&:not([disabled]):hover{background:var(--color-text-main);color:var(--color-main-background);text-decoration:none;}&[disabled]{cursor:default;opacity:0.5;text-decoration:none;}"]);
function Aside() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('basket');
  const basket = (0,components_basket/* useBasket */.K)();
  const {
    0: going,
    1: setGoing
  } = (0,external_react_.useState)(false);

  const onCheckoutClick = evt => {
    if (!basket.cart.length) {
      evt.preventDefault();
      return;
    }

    setGoing(true);
  };

  if (basket.status === 'not-hydrated') {
    return t('loading');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Outer, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Heading, {
      children: [t('title'), basket.status === 'server-basket-is-stale' && /*#__PURE__*/jsx_runtime_.jsx(spinner/* Spinner */.$, {
        style: {
          marginLeft: 15
        }
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      children: /*#__PURE__*/jsx_runtime_.jsx(TinyBasket, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(totals/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/checkout",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(CheckoutBtn, {
          as: "a",
          state: going ? 'loading' : null,
          disabled: !basket.cart.length,
          onClick: onCheckoutClick,
          children: t('goToCheckout')
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/settings-context.js
var settings_context = __webpack_require__(6288);
;// CONCATENATED MODULE: ./src/ui/icons/user.js


function IconUser() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    viewBox: "0 0 33 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M25.9369 22.8347L25.3645 20.1204C25.2159 19.406 24.9231 18.7294 24.5041 18.132C24.0851 17.5346 23.5486 17.0289 22.9275 16.6459L19.4887 14.5174C20.0228 13.8048 20.3549 12.9613 20.4502 12.0759L20.7229 9.50465C20.7969 8.81075 20.7242 8.10906 20.5094 7.44511C20.2946 6.78116 19.9426 6.1698 19.4762 5.65072C19.0098 5.13163 18.4395 4.71642 17.8022 4.43203C17.165 4.14765 16.4751 4.00046 15.7772 4H15.2272C14.529 3.99983 13.8386 4.14656 13.2008 4.43067C12.563 4.71478 11.9922 5.1299 11.5253 5.64905C11.0584 6.16821 10.706 6.77979 10.491 7.44405C10.2759 8.10831 10.203 8.81038 10.2771 9.50465L10.5543 12.0759C10.6495 12.9613 10.9817 13.8048 11.5157 14.5174L8.07253 16.6459C7.45141 17.0289 6.91493 17.5346 6.4959 18.132C6.07687 18.7294 5.78409 19.406 5.63546 20.1204L5.06308 22.8347C4.97321 23.2601 4.97944 23.7001 5.08132 24.1228C5.18321 24.5454 5.37817 24.9399 5.65199 25.2776C5.92581 25.6153 6.27157 25.8875 6.66403 26.0745C7.05649 26.2615 7.48576 26.3585 7.92049 26.3584H23.0795C23.5142 26.3585 23.9435 26.2615 24.336 26.0745C24.7284 25.8875 25.0742 25.6153 25.348 25.2776C25.6218 24.9399 25.8168 24.5454 25.9187 24.1228C26.0206 23.7001 26.0268 23.2601 25.9369 22.8347ZM13.1881 7.13018C13.4455 6.84542 13.7603 6.61847 14.1118 6.4643C14.4632 6.31014 14.8434 6.23228 15.2272 6.23584H15.7772C16.1617 6.23549 16.542 6.31615 16.8932 6.47259C17.2445 6.62903 17.5588 6.85772 17.8157 7.14377C18.0727 7.42982 18.2664 7.76679 18.3844 8.13274C18.5024 8.49869 18.542 8.88539 18.5005 9.26765L18.2277 11.8344C18.1556 12.5069 17.8373 13.129 17.3342 13.581C16.8311 14.033 16.1786 14.283 15.5022 14.283C14.8259 14.283 14.1734 14.033 13.6703 13.581C13.1672 13.129 12.8489 12.5069 12.7767 11.8344L12.504 9.26765C12.4569 8.8831 12.4937 8.49292 12.6118 8.12394C12.7299 7.75496 12.9265 7.41594 13.1881 7.13018ZM23.6116 23.8543C23.5487 23.935 23.4679 24.0001 23.3756 24.0443C23.2832 24.0885 23.1819 24.1107 23.0795 24.1092H7.92049C7.81812 24.1107 7.71678 24.0885 7.62445 24.0443C7.53211 24.0001 7.4513 23.935 7.38836 23.8543C7.32341 23.7781 7.2761 23.6884 7.24981 23.5918C7.22353 23.4952 7.21892 23.3939 7.23632 23.2953L7.8087 20.581C7.89934 20.163 8.07364 19.7676 8.32109 19.4187C8.56855 19.0698 8.88404 18.7746 9.24858 18.5509L13.3312 16.0199C14.0067 16.3495 14.7484 16.5208 15.5 16.5208C16.2516 16.5208 16.9933 16.3495 17.6688 16.0199L21.7514 18.5509C22.1135 18.776 22.4264 19.0718 22.6715 19.4206C22.9166 19.7694 23.0888 20.1641 23.1779 20.581L23.7503 23.2953C23.7716 23.395 23.7702 23.4982 23.7462 23.5973C23.7222 23.6964 23.6762 23.7888 23.6116 23.8677V23.8543Z",
      fill: "#080708"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19.7483 20.0981H17.5125C16.895 20.0981 16.3945 20.5987 16.3945 21.2161C16.3945 21.8335 16.895 22.334 17.5125 22.334H19.7483C20.3657 22.334 20.8662 21.8335 20.8662 21.2161C20.8662 20.5987 20.3657 20.0981 19.7483 20.0981Z",
      fill: "#FBDCCE"
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/layout/header/burger-button.js




const burger_button_Outer = external_styled_components_default().button.attrs(() => ({
  type: 'button'
})).withConfig({
  displayName: "burger-button__Outer",
  componentId: "sc-id4pv3-0"
})(["cursor:pointer;background:transparent;width:35px;height:35px;position:fixed;margin-top:0px;margin-left:-70px;z-index:100;padding:0;", "{display:block;position:absolute;right:15px;}"], ui/* responsive.smAndLess */.jW.smAndLess);
const Lines = external_styled_components_default().div.withConfig({
  displayName: "burger-button__Lines",
  componentId: "sc-id4pv3-1"
})(["width:100%;position:absolute;background:", ";height:3px;top:50%;margin-top:-2px;border-radius:2px;transition:all 0.2s ease-out;&:before,&:after{width:100%;top:-14px;background:var(--color-text-main);height:3px;content:'';position:absolute;left:0;transition:all 0.2s ease-out;}&:after{transform:", ";left:", ";width:", ";top:", ";", "{left:", ";}}&:before{transform:", ";top:", ";}"], p => p.open ? 'transparent' : 'var(--color-text-main)', p => p.open ? 'rotate(-45deg)' : 'rotate(0deg)', p => p.open ? '0px' : '0px', p => p.open ? '100%' : 'calc(100% - 8px)', p => p.open ? '0' : '10px', ui/* responsive.smAndLess */.jW.smAndLess, p => p.open ? '0px' : '8px', p => p.open ? 'rotate(45deg)' : 'rotate(0deg)', p => p.open ? '0' : '-10px');
function BurgerButton({
  active,
  onClick
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(burger_button_Outer, {
    open: active,
    onClick: onClick,
    "aria-label": t('menu'),
    children: /*#__PURE__*/jsx_runtime_.jsx(Lines, {
      open: active
    })
  });
}
;// CONCATENATED MODULE: ./src/ui/icons/basket.js


function IconBasket() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    viewBox: "0 0 33 33",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M24.0271 9.14004H16.3789C16.0719 9.14004 15.7775 9.2612 15.5604 9.47687C15.3434 9.69254 15.2214 9.98505 15.2214 10.29C15.2214 10.5951 15.3434 10.8876 15.5604 11.1032C15.7775 11.3189 16.0719 11.4401 16.3789 11.4401H24.0271C24.1231 11.4392 24.2181 11.4594 24.3053 11.4993C24.3926 11.5391 24.4699 11.5976 24.5318 11.6705C24.5937 11.7434 24.6386 11.829 24.6634 11.9212C24.6882 12.0133 24.6922 12.1098 24.6752 12.2037L22.9206 20.5619C22.8944 20.7126 22.8154 20.8493 22.6977 20.9478C22.5799 21.0462 22.431 21.1002 22.277 21.1001H14.777C14.6231 21.1002 14.4741 21.0462 14.3563 20.9478C14.2386 20.8493 14.1597 20.7126 14.1335 20.5619L11.5733 5.92001C11.5217 5.66023 11.3808 5.42637 11.1747 5.25852C10.9686 5.09066 10.7101 4.99927 10.4436 5H5.15654C4.98017 5.00014 4.80617 5.04032 4.64782 5.11747C4.48947 5.19463 4.35095 5.30672 4.24286 5.44519C4.13477 5.58365 4.05995 5.74483 4.02413 5.91642C3.9883 6.088 3.99242 6.26545 4.03616 6.43522C4.10651 6.68932 4.26061 6.91263 4.4738 7.06942C4.687 7.2262 4.94696 7.3074 5.21209 7.30002H9.49917L11.8696 20.9529C11.9889 21.6347 12.3453 22.2531 12.8767 22.7004C13.408 23.1476 14.0806 23.3953 14.777 23.4002H22.277C22.9766 23.3996 23.6536 23.1539 24.1888 22.7063C24.724 22.2586 25.0831 21.6378 25.203 20.9529L26.9576 12.5901C27.0304 12.1663 27.0092 11.7318 26.8955 11.317C26.7817 10.9022 26.5782 10.517 26.2991 10.1885C26.0201 9.85994 25.6721 9.59589 25.2797 9.4148C24.8873 9.23371 24.4598 9.13994 24.0271 9.14004V9.14004Z",
      fill: "#080708"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M20.8397 15.5803C21.1466 15.5803 21.441 15.4591 21.6581 15.2435C21.8751 15.0278 21.9971 14.7353 21.9971 14.4303C21.9971 14.1253 21.8751 13.8328 21.6581 13.6171C21.441 13.4014 21.1466 13.2803 20.8397 13.2803H17.1359C16.829 13.2803 16.5346 13.4014 16.3175 13.6171C16.1005 13.8328 15.9785 14.1253 15.9785 14.4303C15.9785 14.7353 16.1005 15.0278 16.3175 15.2435C16.5346 15.4591 16.829 15.5803 17.1359 15.5803H20.8397Z",
      fill: "#080708"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M15.2864 27.9998C16.1813 27.9998 16.9068 27.279 16.9068 26.3898C16.9068 25.5006 16.1813 24.7798 15.2864 24.7798C14.3915 24.7798 13.666 25.5006 13.666 26.3898C13.666 27.279 14.3915 27.9998 15.2864 27.9998Z",
      fill: "#080708"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21.7669 27.9998C22.6618 27.9998 23.3873 27.279 23.3873 26.3898C23.3873 25.5006 22.6618 24.7798 21.7669 24.7798C20.872 24.7798 20.1465 25.5006 20.1465 26.3898C20.1465 27.279 20.872 27.9998 21.7669 27.9998Z",
      fill: "#080708"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21.073 18.11C21.073 17.805 20.9511 17.5125 20.734 17.2968C20.517 17.0811 20.2226 16.96 19.9156 16.96H17.6008C17.2938 16.96 16.9994 17.0811 16.7824 17.2968C16.5653 17.5125 16.4434 17.805 16.4434 18.11C16.4434 18.415 16.5653 18.7075 16.7824 18.9231C16.9994 19.1388 17.2938 19.26 17.6008 19.26H19.9156C20.2226 19.26 20.517 19.1388 20.734 18.9231C20.9511 18.7075 21.073 18.415 21.073 18.11V18.11Z",
      fill: "#FBDCCE"
    })]
  });
}
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
;// CONCATENATED MODULE: ./src/components/layout/header/styles.js



const header_styles_Outer = external_styled_components_default().header.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-11zo9d4-0"
})(["text-align:center;padding:20px 100px;max-width:var(--content-max-width);display:flex;justify-content:flex-start;align-items:center;position:relative;margin:0 auto 50px;", "{padding:10px 65px 10px 10px;display:flex;align-items:center;justify-content:space-between;}"], ui/* responsive.smAndLess */.jW.smAndLess);
const Logo = external_styled_components_default().a.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-11zo9d4-1"
})(["height:84px;display:block;object-fit:contain;position:relative;z-index:99;img,svg{display:block;height:100%;}", "{height:40px;width:110px;margin-left:25px;}"], ui/* responsive.xs */.jW.xs);
const Nav = external_styled_components_default().nav.withConfig({
  displayName: "styles__Nav",
  componentId: "sc-11zo9d4-2"
})(["display:flex;margin:6px 0 0 15px;padding-left:15px;width:100%;color:#000;font-size:18px;font-family:var(--font-family-main);", "{display:none;position:absolute;z-index:99;top:0;left:0;min-height:100vh;height:100%;overflow-x:auto;scroll-behavior:smooth;border:none;background:#fafafa;margin:0;padding:2em;font-size:1.5rem;", ";}"], ui/* responsive.smAndLess */.jW.smAndLess, external_styled_is_default()('open')`
      display: block;
    `);
const NavList = external_styled_components_default().ul.withConfig({
  displayName: "styles__NavList",
  componentId: "sc-11zo9d4-3"
})(["display:inline-block;list-style:none;margin:0;padding:0;", "{margin-top:30px;}"], ui/* responsive.smAndLess */.jW.smAndLess);
const NavListItem = external_styled_components_default().li.withConfig({
  displayName: "styles__NavListItem",
  componentId: "sc-11zo9d4-4"
})(["margin:0;padding:0;display:inline-block;margin:0 5px;> a{display:inline-block;padding:10px 10px;transition:all 100ms;font-weight:600;letter-spacing:1px;&:hover{text-decoration:underline;}}", "{display:block;}"], ui/* responsive.smAndLess */.jW.smAndLess);
const Btn = external_styled_components_default().button.withConfig({
  displayName: "styles__Btn",
  componentId: "sc-11zo9d4-5"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:50px;height:50px;padding:0;border-radius:5px;justify-self:flex-end;margin-left:10px;img,svg{width:45px;}&:hover,&:active{background:rgba(0,0,0,0.05);}", "{width:40px;height:40px;margin-left:5px;}"], ui/* responsive.xs */.jW.xs);
const BasketQuantity = external_styled_components_default().div.withConfig({
  displayName: "styles__BasketQuantity",
  componentId: "sc-11zo9d4-6"
})(["position:absolute;font-weight:600;font-size:11px;top:0px;display:flex;justify-content:center;align-items:center;color:#fff;right:-6px;border-radius:50%;width:25px;height:25px;background:#080708;border:3px solid #fff;"]);
const NavActions = external_styled_components_default().div.withConfig({
  displayName: "styles__NavActions",
  componentId: "sc-11zo9d4-7"
})(["margin:8px 10px 0;display:flex;text-transform:uppercase;align-items:center;button,a{padding:5px 10px;font-size:14px;font-weight:500;border:1.4px solid var(--color-text-main);color:var(--color-text-main);white-space:nowrap;cursor:pointer;&:hover{background:var(--color-text-main);color:var(--color-main-background);text-decoration:none;}}", "{display:none;position:absolute;top:40px;left:0;width:100%;z-index:99;text-align:center;margin:0;font-size:1.5rem;", ";}"], ui/* responsive.smAndLess */.jW.smAndLess, external_styled_is_default()('open')`
      display: flex;
      justify-content: center;
    `);
const PreviewBar = external_styled_components_default().div.withConfig({
  displayName: "styles__PreviewBar",
  componentId: "sc-11zo9d4-8"
})(["background:#000;color:#fff;padding:20px;text-align:center;"]);
const IconBar = external_styled_components_default().div.withConfig({
  displayName: "styles__IconBar",
  componentId: "sc-11zo9d4-9"
})(["display:flex;> a{cursor:pointer;}"]);
;// CONCATENATED MODULE: ./src/components/layout/header/basket-button.js









const BasketButton = () => {
  var _layout$actions;

  const {
    totalQuantity
  } = (0,components_basket/* useBasket */.K)();
  const layout = external_react_default().useContext(react_layout_.LayoutContext);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('basket');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Btn, {
    onClick: layout === null || layout === void 0 ? void 0 : (_layout$actions = layout.actions) === null || _layout$actions === void 0 ? void 0 : _layout$actions.showRight,
    type: "button",
    "aria-label": t('title'),
    children: [/*#__PURE__*/jsx_runtime_.jsx(IconBasket, {}), /*#__PURE__*/jsx_runtime_.jsx(BasketQuantity, {
      children: totalQuantity
    })]
  });
};

/* harmony default export */ const basket_button = (BasketButton);
// EXTERNAL MODULE: ./src/lib/app-config.js + 1 modules
var app_config = __webpack_require__(9841);
;// CONCATENATED MODULE: ./src/components/layout/header/locale-switcher.js





const locale_switcher_Outer = external_styled_components_default().div.withConfig({
  displayName: "locale-switcher__Outer",
  componentId: "sc-u0c321-0"
})(["flex:1 1 auto;display:inline-flex;margin:0 20px;&:hover{background:#efefef;}"]);
const SelectAsText = external_styled_components_default().div.withConfig({
  displayName: "locale-switcher__SelectAsText",
  componentId: "sc-u0c321-1"
})(["flex:1 1 auto;position:relative;white-space:nowrap;padding:0 15px;display:inline-flex;align-items:center;color:#000;text-transform:uppercase;font-weight:700;select{position:absolute;top:0;left:0;width:100%;height:100%;font-size:1rem;opacity:0;cursor:pointer;}"]);
function LocaleSwitcher() {
  const router = (0,router_.useRouter)();
  const locale = (0,app_config/* useLocale */.bU)();

  function onChange(e) {
    router.push('/', '/', {
      locale: e.target.value
    });
  }

  if (router.locales.length < 2) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(locale_switcher_Outer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectAsText, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: locale.displayName
      }), /*#__PURE__*/jsx_runtime_.jsx("select", {
        onChange: onChange,
        defaultValue: locale.locale,
        children: router.locales.map(app_config/* getLocaleFromName */.eF).map(l => /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: l.locale,
          children: l.displayName
        }, l.locale))
      })]
    })
  });
}
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
// EXTERNAL MODULE: ./src/lib/graph/index.js
var graph = __webpack_require__(6712);
// EXTERNAL MODULE: ./src/lib/search.js
var search = __webpack_require__(8181);
;// CONCATENATED MODULE: ./src/components/layout/header/search/styles.js



const SearchWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__SearchWrapper",
  componentId: "sc-b9lmwu-0"
})(["position:fixed;left:0;width:100%;top:0;background:#fff;z-index:10;box-shadow:8px 8px 16px rgba(0,0,0,0.05);transform:translateY(-100%);opacity:0;transition:all 0.2s ease-in-out;max-height:100vh;", "{padding:0 25px;}", ""], ui/* responsive.smAndLess */.jW.smAndLess, external_styled_is_default()('isOpen')`
    transform: translateY(-0);
    opacity: 1;
  `);
const SearchLabel = external_styled_components_default().label.withConfig({
  displayName: "styles__SearchLabel",
  componentId: "sc-b9lmwu-1"
})(["font-size:1rem;text-transform:uppercase;font-weight:600;padding:0 0 15px;display:block;", "{padding:0 0 15px 25px;text-align:left;}"], ui/* responsive.smAndLess */.jW.smAndLess);
const search_styles_Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-b9lmwu-2"
})(["max-width:600px;margin:0 auto;display:block;padding-top:60px;padding-bottom:25px;min-height:180px;width:100%;position:relative;", "{border-top:1px solid #dfdfdf;padding-top:40px;margin-top:120px;max-width:100%;}"], ui/* responsive.smAndLess */.jW.smAndLess);
const Result = external_styled_components_default().div.withConfig({
  displayName: "styles__Result",
  componentId: "sc-b9lmwu-3"
})(["top:120px;left:0;width:100%;background:#fff;text-align:left;> h3{margin:0;font-size:14px;padding:15px 35px;padding-bottom:0;}ul{min-height:40px;transition:height 0.15s ease-in-out;display:block;list-style:none;margin:10px 0 0;padding:0;overflow:hidden;li{margin:0;padding:0;}a{font-size:0.9rem;display:block;padding:10px 35px;background:transparent;border-radius:0;&:active,&:focus{outline:none;font-weight:600;text-decoration:underline;}}}"]);
const BodyOverlay = external_styled_components_default().div.withConfig({
  displayName: "styles__BodyOverlay",
  componentId: "sc-b9lmwu-4"
})(["background:rgba(0,0,0,0.6);position:fixed;left:0%;top:0;right:0;bottom:0;z-index:5;"]);
const CloseBtn = external_styled_components_default().button.withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-b9lmwu-5"
})(["width:50px;height:50px;border-radius:50%;position:absolute;right:30px;top:30px;", "{display:none;}&:hover{background:#efefef;}&:before,&:after{border-radius:4px;position:absolute;right:10px;width:30px;height:3px;background:black;content:'';transition:all 0.1s ease-in-out;}&:before{transform:rotate(-45deg);}&:after{transform:rotate(45deg);}"], ui/* responsive.smAndLess */.jW.smAndLess);
;// CONCATENATED MODULE: ./src/components/layout/header/search/index.js
const _excluded = ["action"];

function search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_ownKeys(Object(source), true).forEach(function (key) { search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const initialState = {
  searchTerm: '',
  status: 'idle',
  isOpen: false,
  searchResult: {
    totalCount: 0,
    edges: []
  }
};
const searchReducer = external_immer_default()(function reducer(draft, _ref) {
  let {
    action
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  switch (action) {
    case 'setSearchTerm':
      {
        const {
          value
        } = rest;

        if (value.length > 0) {
          draft.status = 'searching';
        }

        draft.searchTerm = value;
        break;
      }

    case 'setResult':
      {
        const {
          search,
          aggregations
        } = rest;
        draft.searchResult.edges = search.edges;
        draft.searchResult.totalCount = aggregations.aggregations.totalResults;
        draft.status = 'got-results';
        break;
      }

    case 'focus':
      {
        draft.isOpen = true;
        break;
      }

    case 'blur':
      {
        if (draft.isOpen) {
          draft.isOpen = false;
          document.activeElement.blur();
        }

        break;
      }

    default:
      {
        throw new Error(`Action ${action} not supported`);
      }
  }
});
function Search() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const router = (0,router_.useRouter)();
  const outerRef = (0,external_react_.useRef)();
  const searchInput = (0,external_react_.useRef)();
  const locale = (0,app_config/* useLocale */.bU)();
  const {
    0: {
      searchTerm,
      status,
      searchResult,
      isOpen
    },
    1: dispatch
  } = (0,external_react_.useReducer)(searchReducer, initialState);

  function onClickSearchBtn() {
    dispatch({
      action: 'focus'
    });
    searchInput.current.focus();
  } // Do new search


  (0,external_react_.useEffect)(() => {
    async function doSearch() {
      const filter = {
        searchTerm,
        productVariants: {
          isDefault: true
        }
      };
      const response = await (0,graph/* simplyFetchFromSearchGraph */.nx)({
        query: search/* SEARCH_QUERY */.dZ,
        variables: {
          filter,
          aggregationsFilter: filter,
          language: locale.crystallizeCatalogueLanguage
        }
      });
      dispatch(search_objectSpread({
        action: 'setResult'
      }, response.data));
    }

    if (status === 'searching') {
      doSearch();
    }
  }, [searchTerm, status, locale]);

  function onSubmit(e) {
    e.preventDefault();
    const options = {
      pathname: '/search'
    };

    if (searchTerm) {
      options.query = {
        searchTerm
      };
    }

    if (router.pathname === '/search') {
      router.replace(options, undefined, {
        shallow: true
      });
    } else {
      router.push(options);
    }

    dispatch({
      action: 'blur'
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Btn, {
      type: "button",
      onClick: onClickSearchBtn,
      "aria-label": t('search.label'),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 33 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M28.4155 25.7638L23.6818 21.0311C23.4491 20.7993 23.134 20.6691 22.8055 20.6691C22.4769 20.6691 22.1618 20.7993 21.9291 21.0311C20.6818 22.2369 19.0696 22.995 17.3451 23.1865C15.6207 23.3781 13.8814 22.9923 12.3998 22.0897C10.9181 21.187 9.7778 19.8185 9.15748 18.1984C8.53715 16.5784 8.47185 14.7984 8.97181 13.1372C9.47177 11.4761 10.5088 10.0277 11.9203 9.01897C13.3318 8.01022 15.0382 7.49811 16.772 7.56286C18.5059 7.62761 20.1692 8.26556 21.5016 9.37678C22.8339 10.488 23.7599 12.0097 24.1346 13.7035C24.403 14.9323 24.3753 16.2073 24.0539 17.4233C24.0159 17.5657 24.0064 17.7142 24.0258 17.8604C24.0452 18.0065 24.0933 18.1473 24.1671 18.2749C24.241 18.4024 24.3393 18.5142 24.4564 18.6038C24.5735 18.6934 24.7071 18.759 24.8495 18.797C25.1372 18.8736 25.4436 18.8329 25.7013 18.6837C25.9589 18.5345 26.1468 18.2891 26.2235 18.0015C26.841 15.6807 26.6115 13.2159 25.576 11.0491C24.5405 8.88221 22.7668 7.15507 20.5729 6.17736C18.379 5.19965 15.9085 5.03534 13.6044 5.71389C11.3003 6.39245 9.31341 7.86947 7.99995 9.88009C6.68649 11.8907 6.13242 14.3034 6.43711 16.6855C6.7418 19.0676 7.88531 21.2632 9.66258 22.8786C11.4398 24.4941 13.7346 25.4237 16.1353 25.5007C18.536 25.5777 20.8857 24.7971 22.7629 23.2989L26.8286 27.3593C26.9327 27.4636 27.0564 27.5464 27.1925 27.6029C27.3287 27.6594 27.4746 27.6885 27.622 27.6885C27.7694 27.6885 27.9154 27.6594 28.0515 27.6029C28.1877 27.5464 28.3114 27.4636 28.4155 27.3593C28.5212 27.2551 28.6051 27.1309 28.6624 26.9939C28.7197 26.857 28.7492 26.71 28.7492 26.5615C28.7492 26.4131 28.7197 26.2661 28.6624 26.1292C28.6051 25.9922 28.5212 25.868 28.4155 25.7638V25.7638Z",
          fill: "#080708"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M19.8356 18.7679C19.6565 18.6016 19.4273 18.4995 19.1838 18.4776C18.9404 18.4557 18.6966 18.5152 18.4908 18.6469C17.9096 19.0054 17.2429 19.2016 16.5602 19.215C15.8774 19.2284 15.2036 19.0586 14.6088 18.7231C14.4072 18.6055 14.1729 18.5563 13.9409 18.583C13.709 18.6096 13.492 18.7107 13.3223 18.871L13.2551 18.9338C13.1347 19.0484 13.0424 19.1893 12.9854 19.3455C12.9284 19.5017 12.9082 19.6689 12.9264 19.8341C12.9446 19.9994 13.0008 20.1582 13.0904 20.2982C13.1801 20.4382 13.3009 20.5556 13.4433 20.6413C14.4017 21.1937 15.4927 21.474 16.5986 21.4519C17.7046 21.4297 18.7835 21.1061 19.719 20.5158C19.8557 20.429 19.9711 20.3125 20.0567 20.1751C20.1423 20.0377 20.1959 19.8828 20.2135 19.7218C20.2312 19.5609 20.2124 19.3981 20.1586 19.2454C20.1048 19.0927 20.0174 18.954 19.9028 18.8396L19.8356 18.7679Z",
          fill: "#FBDCCE"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchWrapper, {
      isOpen: isOpen,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(search_styles_Outer, {
        ref: outerRef,
        children: [/*#__PURE__*/jsx_runtime_.jsx(SearchLabel, {
          children: t('search.placeholder')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui/* InputGroup */.BZ, {
          as: "form",
          method: "get",
          role: "search",
          onSubmit: onSubmit,
          children: [/*#__PURE__*/jsx_runtime_.jsx(ui/* Input */.II, {
            ref: searchInput,
            type: "search",
            value: searchTerm,
            onFocus: () => dispatch({
              action: 'focus'
            }),
            onChange: e => dispatch({
              action: 'setSearchTerm',
              value: e.target.value
            }),
            placeholder: t('search.placeholder'),
            "aria-label": t('search.label')
          }), status === 'searching' && /*#__PURE__*/jsx_runtime_.jsx(ui/* InputSpinner */.Gn, {}), /*#__PURE__*/jsx_runtime_.jsx(ui/* InputButton */.Rg, {
            children: "\u2794"
          })]
        }), status !== 'idle' && isOpen && searchTerm !== '' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Result, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            children: [searchResult.totalCount, " suggestions"]
          }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            style: {
              height: 40 * (searchResult.edges.length + 1)
            },
            children: searchResult.edges.map(({
              cursor,
              node
            }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: node.path,
                onClick: () => dispatch({
                  action: 'blue'
                }),
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: node.name
                })
              })
            }, cursor))
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(CloseBtn, {
        onClick: () => dispatch({
          action: 'blur'
        })
      })]
    }), !!isOpen && /*#__PURE__*/jsx_runtime_.jsx(BodyOverlay, {
      onClick: () => dispatch({
        action: 'blur'
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/layout/header/index.js













function Header({
  simple,
  preview
}) {
  const {
    mainNavigation
  } = (0,settings_context/* useSettings */.rV)();
  const router = (0,router_.useRouter)();
  const {
    0: navOpen,
    1: setNavOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [preview && /*#__PURE__*/(0,jsx_runtime_.jsxs)(PreviewBar, {
      children: ["You are in preview mode (", /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: '/api/preview?leave=' + encodeURIComponent(router.asPath),
        children: "leave"
      }), ")"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(header_styles_Outer, {
      simple: simple,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
          "aria-label": "Logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/shop-logo.svg",
            alt: "\xF8rn forlag",
            width: "207",
            height: "35"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
        open: navOpen,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavList, {
          children: mainNavigation === null || mainNavigation === void 0 ? void 0 : mainNavigation.map(category => /*#__PURE__*/jsx_runtime_.jsx(NavListItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: category.path,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => setNavOpen(false),
                children: category.name
              })
            })
          }, category.path))
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconBar, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LocaleSwitcher, {}), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/account",
          children: /*#__PURE__*/jsx_runtime_.jsx(Btn, {
            as: "a",
            "aria-label": "User area",
            children: /*#__PURE__*/jsx_runtime_.jsx(IconUser, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Search, {}), /*#__PURE__*/jsx_runtime_.jsx(basket_button, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx(BurgerButton, {
        active: navOpen,
        onClick: () => setNavOpen(!navOpen)
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/ui/icons/nextjs.js

function IconNextjs() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "35",
    height: "21",
    viewBox: "0 0 35 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.11668 5.41253H14.6046V5.9282H8.7114V9.80929H14.2532V10.325H8.7114V14.586H14.6722V15.1017H8.11668V5.41253ZM15.1858 5.41253H15.8752L18.9299 9.67359L22.0522 5.41253L26.2991 0L19.3219 10.1214L22.9173 15.1017H22.2009L18.9299 10.5692L15.6454 15.1017H14.9425L18.565 10.1214L15.1858 5.41253ZM23.1741 5.9282V5.41253H30.5676V5.9282H27.1615V15.1017H26.5667V5.9282H23.1741ZM0 5.41253H0.743409L10.9946 20.7524L6.75827 15.1017L0.62176 6.14532L0.594727 15.1017H0V5.41253ZM30.5077 14.4304C30.3862 14.4304 30.2951 14.3363 30.2951 14.2146C30.2951 14.0929 30.3862 13.9988 30.5077 13.9988C30.6307 13.9988 30.7204 14.0929 30.7204 14.2146C30.7204 14.3363 30.6307 14.4304 30.5077 14.4304ZM31.0921 13.8626H31.4103C31.4147 14.035 31.5405 14.1509 31.7257 14.1509C31.9325 14.1509 32.0497 14.0263 32.0497 13.7931V12.3157H32.3737V13.7946C32.3737 14.2146 32.1307 14.4565 31.7286 14.4565C31.351 14.4565 31.0921 14.2218 31.0921 13.8626ZM32.7975 13.8438H33.1187C33.1462 14.0422 33.34 14.1682 33.6192 14.1682C33.8795 14.1682 34.0705 14.0335 34.0705 13.8482C34.0705 13.6888 33.949 13.5932 33.6727 13.5281L33.4036 13.4629C33.0261 13.3745 32.854 13.192 32.854 12.885C32.854 12.5127 33.1577 12.2651 33.6134 12.2651C34.0372 12.2651 34.3468 12.5127 34.3656 12.8647H34.0502C34.0198 12.6721 33.8521 12.5518 33.609 12.5518C33.353 12.5518 33.1823 12.675 33.1823 12.8632C33.1823 13.0124 33.2923 13.0979 33.5642 13.1616L33.7942 13.2181C34.2224 13.318 34.3988 13.4918 34.3988 13.8062C34.3988 14.2059 34.0893 14.4565 33.5946 14.4565C33.1317 14.4565 32.8207 14.2175 32.7975 13.8438Z",
      fill: "#E0E0E0"
    })
  });
}
;// CONCATENATED MODULE: ./src/ui/icons/logo-crystallize.js


function LogoCrystallize() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    version: "1.1",
    viewBox: "0 0 317.1 143.5",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M113.9,86.3c1.2,0,2.3-0.3,3.3-0.8c1-0.6,1.8-1.3,2.4-2.3L122,85c-0.9,1.3-2.1,2.3-3.5,3s-2.9,1.1-4.6,1.1 c-1.4,0-2.7-0.3-3.9-0.8c-1.2-0.5-2.3-1.3-3.2-2.2s-1.6-2-2.1-3.2s-0.8-2.5-0.8-4c0-1.4,0.3-2.7,0.8-4c0.5-1.2,1.2-2.3,2.1-3.2 s2-1.6,3.2-2.2s2.5-0.8,3.9-0.8c1.7,0,3.2,0.4,4.6,1.1c1.4,0.7,2.6,1.7,3.5,3l-2.4,1.8c-0.6-0.9-1.4-1.7-2.4-2.3 c-1-0.6-2.1-0.8-3.3-0.8c-1,0-1.9,0.2-2.7,0.6c-0.8,0.4-1.6,0.9-2.2,1.6c-0.6,0.7-1.1,1.4-1.5,2.3c-0.4,0.9-0.6,1.8-0.6,2.9 s0.2,2,0.6,2.9c0.4,0.9,0.9,1.7,1.5,2.3c0.6,0.7,1.4,1.2,2.2,1.6C112,86.1,112.9,86.3,113.9,86.3z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M140.3,78c-0.3,0.8-0.6,1.6-1.2,2.2c-0.5,0.7-1.1,1.2-1.9,1.7c0,0-0.1,0.1-0.1,0.1s-0.1,0-0.1,0.1l3.6,7h-3.1 l-3.1-6.1c-0.2,0-0.4,0.1-0.7,0.1c-0.2,0-0.5,0-0.7,0h-3.6v6h-3V68.8h6.6c0.8,0,1.6,0.1,2.3,0.3c0.7,0.2,1.4,0.5,2,0.9 c1.5,0.9,2.5,2.3,3,4c0,0.1,0,0.2,0.1,0.2c0,0.1,0,0.2,0.1,0.2v0.1c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.3v0c0,0.1,0,0.2,0,0.3 c0,0.1,0,0.2,0,0.4v0V76c0,0.1,0,0.2,0,0.3s0,0.2,0,0.3v0.1c0,0.1,0,0.2,0,0.3s0,0.2-0.1,0.3v0.1C140.4,77.7,140.3,77.9,140.3,78z M133.3,80.5c0.6,0,1.2-0.1,1.7-0.4c0.5-0.3,0.9-0.6,1.3-1c0.4-0.4,0.7-0.9,0.9-1.5s0.3-1.1,0.3-1.7c0-0.6-0.1-1.1-0.3-1.7 c-0.2-0.6-0.5-1-0.9-1.5c-0.4-0.4-0.8-0.8-1.3-1c-0.5-0.3-1.1-0.4-1.7-0.4h-4v9.1H133.3z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M160.5,68.8L160.5,68.8l-6.3,13.7v6.7v0h-3v0v-6.7L145,68.8h0l0,0h3.3l4.5,10.9l4.5-10.9H160.5z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M176.1,79c0.1,0.1,0.2,0.2,0.4,0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.4,0.5,0.8,1.1,1,1.8s0.4,1.3,0.4,2 c0,0.2,0,0.3,0,0.4c-0.1,1-0.4,2-0.9,2.8c-0.5,0.8-1.2,1.4-2,1.8s-1.7,0.7-2.7,0.7h-1.8c-1,0-1.9-0.2-2.7-0.7s-1.5-1.1-2-1.8 c-0.1-0.2-0.3-0.5-0.4-0.8l2.6-2c0.1,0.4,0.2,0.7,0.3,1c0.2,0.3,0.4,0.6,0.7,0.8s0.6,0.4,0.9,0.5c0.3,0.1,0.7,0.2,1.1,0.2h1.1 c0.8,0,1.4-0.2,2-0.7c0.6-0.5,0.9-1.1,1-1.8c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.4-0.1-0.8-0.2-1.1c-0.1-0.4-0.4-0.7-0.6-0.9 c-0.3-0.3-0.6-0.5-0.9-0.7c-0.4-0.2-0.7-0.3-1.1-0.3h-1.6h-0.1c-0.7,0-1.3-0.2-1.9-0.4c-0.6-0.2-1.1-0.6-1.6-1 c-0.3-0.2-0.5-0.4-0.7-0.7c-0.4-0.5-0.8-1.1-1-1.8s-0.4-1.3-0.4-2v-0.4c0.1-1.1,0.4-2,1-2.8c0.5-0.8,1.2-1.4,2-1.8 c0.8-0.5,1.7-0.7,2.7-0.7h1.8c1,0,1.9,0.2,2.7,0.7c0.8,0.5,1.5,1.1,2,1.8c0.1,0.1,0.1,0.2,0.2,0.3s0.1,0.2,0.2,0.3l-2.5,2 c-0.2-0.7-0.5-1.2-1.1-1.7c-0.5-0.4-1.2-0.7-1.9-0.7H171c-0.4,0-0.7,0.1-1.1,0.2c-0.3,0.1-0.6,0.3-0.9,0.5 c-0.3,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.3,0.6-0.3,1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.4,0.1,0.8,0.2,1.1 c0.1,0.4,0.4,0.7,0.6,0.9c0.3,0.3,0.6,0.5,0.9,0.7c0.4,0.2,0.7,0.3,1.1,0.3h1.6h0.1c0.7,0,1.3,0.2,1.9,0.4 C175,78.2,175.6,78.6,176.1,79z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M182.5,68.8h13v2.9h-5v17.4h-2.9V71.7h-5V68.8z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M199.8,89.1l8.3-20.3l8.3,20.3h-3l-0.6-1.6h-9.3l-0.6,1.6H199.8z M204.5,84.9h7.3l-3.6-9.3L204.5,84.9z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M223.8,86.2h8.3v2.9h-11.3V68.8h3V86.2z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M239.4,86.2h8.3v2.9h-11.3V68.8h3V86.2z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M252.1,68.8h3v20.3h-3V68.8z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M272.4,68.8l-8.3,17.4h8.2v0v2.9v0h-12.9v0l8.2-17.5h-7.1v-2.9v0L272.4,68.8L272.4,68.8L272.4,68.8z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#717070",
          d: "M279.7,86.2h9v2.9h-12V68.8h11.8v2.9h-8.8v3.2v1.7v2h8v2.8h-8V86.2z"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        fill: "#A5D9DC",
        points: "74.8,66.4 62.2,115.2 45.9,104.8 58.5,28.3 76.9,58.2 \t"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        fill: "#D2ECED",
        points: "39.9,67.9 35.6,98.2 33.2,96.6 28.3,61.4 \t"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        fill: "#BBE2E5",
        points: "53.7,47.7 44.5,103.9 37.1,99.1 46.1,36 \t"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        fill: "#8ECFD3",
        points: "86.9,64.2 76.4,104.4 69.5,110.1 64,114.6 75.8,69 \t"
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/layout/footer/styles.js

const footer_styles_Outer = external_styled_components_default().footer.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1x677e1-0"
})(["display:grid;grid-template-columns:repeat(2,1fr);max-width:1600px;margin:50px auto;border-top:2px solid var(--color-box-background);padding:50px 50px;justify-content:space-between;"]);
const styles_Logo = external_styled_components_default().div.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-1x677e1-1"
})(["width:70px;"]);
const Powered = external_styled_components_default().div.withConfig({
  displayName: "styles__Powered",
  componentId: "sc-1x677e1-2"
})(["width:100%;display:block;display:flex;align-items:center;font-size:12px;font-weight:600;p{margin:0;}svg{width:120px;}"]);
const styles_NavList = external_styled_components_default().footer.withConfig({
  displayName: "styles__NavList",
  componentId: "sc-1x677e1-3"
})(["list-style:none;font-weight:500;font-size:1rem;display:block;margin:0 0 0 auto;li{line-height:1.5rem;}h5{font-size:0.7rem;font-weight:400;margin-bottom:10px;}"]);
;// CONCATENATED MODULE: ./src/components/layout/footer/index.js
/* eslint-disable @next/next/no-img-element */









function footer_Footer() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    mainNavigation
  } = (0,settings_context/* useSettings */.rV)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(footer_styles_Outer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(styles_Logo, {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/shop-logo.svg",
            alt: "\xD8rn forlag logo"
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_NavList, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: t('layout.menu')
      }), mainNavigation.map(category => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          as: category.path,
          href: "/[...catalogue]",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: category.name
          })
        })
      }, category.path))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("address", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "\xD8rn forlag"
        }), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Vest\xE5sen 4", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "1362, Hosle, Norge", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "Tlf.:"
      }), " (+47) 909 60 404 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "Org.nr."
      }), ": 994304399 MVA ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "Kontonr."
      }), ": 9235.27.10220"]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Powered, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Nettside av: "
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/webmaeistro/",
        "aria-label": "Martin-Andersen",
        children: "Martin Andersen"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Powered, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://crystallize.com",
        "aria-label": "Crystallize",
        children: /*#__PURE__*/jsx_runtime_.jsx(LogoCrystallize, {
          size: 2
        })
      }), ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://nextjs.org/",
        "aria-label": "NextJs",
        children: /*#__PURE__*/jsx_runtime_.jsx(IconNextjs, {
          size: 2
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Powered, {
      children: "\xA9 2021 - \xD8rn forlag."
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/layout/styles.js
/* eslint no-unused-expressions: 0 */

const Main = external_styled_components_default().main.withConfig({
  displayName: "styles__Main",
  componentId: "sc-181bj3j-0"
})(["padding-bottom:50px;border-style:solid;border-color:var(--color-main-background);"]);
const LoadingWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__LoadingWrapper",
  componentId: "sc-181bj3j-1"
})(["margin:5em;min-height:calc(75vh - 10em);display:flex;align-items:center;justify-content:center;"]);
const SpinnerWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__SpinnerWrapper",
  componentId: "sc-181bj3j-2"
})(["margin-bottom:50px;text-align:center;"]);
const LoadingTextWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__LoadingTextWrapper",
  componentId: "sc-181bj3j-3"
})(["text-align:center;"]);
;// CONCATENATED MODULE: ./src/components/layout/index.js














function Loader({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(LoadingWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SpinnerWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ui/* Spinner */.$j, {
          size: "40"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(LoadingTextWrapper, {
        children: children || 'Please wait...'
      })]
    })
  });
}

function Layout({
  children,
  title,
  description,
  image,
  simple,
  loading,
  preview
}) {
  const router = (0,router_.useRouter)();
  const headTilte = title ? `${title} | ${"orn-forlag"}` : `${"orn-forlag"}`; //@TODO add url to .env

  const siteUrl = null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: headTilte
      }, "title"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "title",
        content: headTilte
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: headTilte
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:title",
        content: headTilte
      }), siteUrl && /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: `${siteUrl}${router === null || router === void 0 ? void 0 : router.asPath}`,
        rel: "canonical"
      }), description && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: description
        }, "description"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:description",
          content: description
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "twitter:description",
          content: description
        })]
      }), image && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:image",
          content: image
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "twitter:image",
          content: image
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://media.crystallize.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/static/favicon.svg"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "mask-icon",
        href: "/static/mask-icon.svg",
        color: "#5bbad5"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/static/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/static/manifest.json"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: siteUrl ? `${siteUrl}${router === null || router === void 0 ? void 0 : router.asPath}` : router === null || router === void 0 ? void 0 : router.asPath
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:url",
        content: siteUrl ? `${siteUrl}${router === null || router === void 0 ? void 0 : router.asPath}` : router === null || router === void 0 ? void 0 : router.asPath
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(global, {}), simple ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        simple: simple,
        preview: preview
      }), /*#__PURE__*/jsx_runtime_.jsx(Main, {
        children: loading ? /*#__PURE__*/jsx_runtime_.jsx(Loader, {}) : children
      }), /*#__PURE__*/jsx_runtime_.jsx(footer_Footer, {})]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)((react_layout_default()), {
      right: Aside,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        simple: simple,
        preview: preview
      }), /*#__PURE__*/jsx_runtime_.jsx(Main, {
        children: loading ? /*#__PURE__*/jsx_runtime_.jsx(Loader, {}) : children
      }), /*#__PURE__*/jsx_runtime_.jsx(footer_Footer, {})]
    })]
  });
}

/***/ }),

/***/ 8181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dZ": () => (/* binding */ SEARCH_QUERY),
/* harmony export */   "vy": () => (/* binding */ orderByOptions),
/* harmony export */   "kL": () => (/* binding */ urlToSpec)
/* harmony export */ });
/* unused harmony export defaultSpec */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4584);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SEARCH_QUERY = `
  query CATALOGUE_SEARCH (
    $first: Int
    $after: String
    $orderBy: OrderBy
    $language: String
    $filter: CatalogueSearchFilter
    $aggregationsFilter: CatalogueSearchFilter
  ) {
    aggregations: search(
      filter: $aggregationsFilter
      language: $language
    ) {
      aggregations {
        price {
          min
          max
        }
        variantAttributes {
          attribute
          value
          count
        }
      }
    }

    search (
      first: $first
      after: $after
      orderBy: $orderBy
      filter: $filter
      language: $language
    ) {
      aggregations {
        totalResults
      }
      pageInfo {
        totalNodes
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          path
          type
          ... on Product {
            topics {
              id
              name
            }
            matchingVariant {
              priceVariants {
                identifier
                name
                currency
                price
              }
              images {
                url
                variants {
                  width
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
const orderByOptions = [{
  field: 'ITEM_NAME',
  direction: 'ASC'
}, {
  field: 'ITEM_NAME',
  direction: 'DESC'
}, {
  field: 'PRICE',
  direction: 'ASC'
}, {
  field: 'PRICE',
  direction: 'DESC'
}, {
  field: 'STOCK',
  direction: 'ASC'
}, {
  field: 'STOCK',
  direction: 'DESC'
}].map(o => _objectSpread({
  value: `${o.field}_${o.direction}`
}, o));
const defaultSpec = {
  first: 25,
  orderBy: {
    field: orderByOptions[0].field,
    direction: orderByOptions[0].direction
  },
  filter: {
    priceVariant: 'default'
  },
  include: {}
};
function urlToSpec({
  query = {},
  asPath
}, locale) {
  const spec = immer__WEBPACK_IMPORTED_MODULE_0___default()(defaultSpec, draft => {
    function handleSingleAttribute(attr) {
      const [attribute, valuesAsString] = attr.split(':');
      const values = valuesAsString.split(',');
      draft.filter.productVariants.attributes.push({
        attribute,
        values
      });
    }

    draft.filter.priceVariant = locale.crystallizePriceVariant;
    draft.language = locale.crystallizeCatalogueLanguage;
    draft.filter.productVariants = {};

    if (asPath) {
      const path = asPath.split('?')[0];

      if (path !== '/search') {
        if (!draft.filter.include) {
          draft.filter.include = {};
        } // Category page. Only show products


        draft.filter.type = 'PRODUCT'; // Only find products under this path (ex: /shop/chairs)

        draft.filter.include.paths = [path]; // Only present the default product variants

        draft.filter.productVariants.isDefault = true;
      } else {
        delete draft.filter.include;
      }
    }

    if (query.attrs) {
      draft.filter.productVariants.attributes = [];

      if (Array.isArray(query.attrs)) {
        query.attrs.forEach(handleSingleAttribute);
      } else {
        handleSingleAttribute(query.attrs);
      }
    }

    const min = parseFloat(query.min, 10);
    const max = parseFloat(query.max, 10);

    if (!isNaN(min) || !isNaN(max)) {
      const priceRange = {};

      if (!isNaN(min)) {
        priceRange.min = min;
      }

      if (!isNaN(max)) {
        priceRange.max = max;
      }

      draft.filter.productVariants.priceRange = priceRange;
    }

    const first = parseInt(query.first, 10);

    if (!isNaN(first)) {
      draft.first = first;
    }

    if (query.before) {
      draft.before = query.before;
    }

    if (query.after) {
      draft.after = query.after;
    }

    const orderBy = orderByOptions.find(o => o.value === query.orderby);

    if (orderBy) {
      draft.orderBy = {
        direction: orderBy.direction,
        field: orderBy.field
      };
    }

    if (query.searchTerm) {
      draft.filter.searchTerm = query.searchTerm;
    }
  });
  return spec;
}

/***/ }),

/***/ 5617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "H1": () => (/* reexport */ H1),
  "H2": () => (/* reexport */ H2),
  "H3": () => (/* reexport */ H3),
  "h4": () => (/* reexport */ Header),
  "Nh": () => (/* reexport */ common_Inner),
  "II": () => (/* reexport */ Input),
  "Rg": () => (/* reexport */ InputButton),
  "BZ": () => (/* reexport */ InputGroup),
  "Gn": () => (/* reexport */ InputSpinner),
  "mI": () => (/* reexport */ common_Outer),
  "$j": () => (/* reexport */ spinner/* Spinner */.$),
  "jW": () => (/* reexport */ responsive),
  "sp": () => (/* reexport */ screen)
});

// UNUSED EXPORTS: DiscountLabel

;// CONCATENATED MODULE: ./src/ui/screen.js
// Screen sizes
const screen = new Proxy({
  xs: 500,
  sm: 768,
  md: 1024,
  lg: 1600,
  xl: 1800,

  get xsMin() {
    return this.xs;
  },

  get xsMax() {
    return this.sm - 1;
  },

  get smMin() {
    return this.sm;
  },

  get smMax() {
    return this.md - 1;
  },

  get mdMin() {
    return this.md;
  },

  get mdMax() {
    return this.lg - 1;
  },

  get lgMin() {
    return this.lg;
  },

  get lgMax() {
    return this.xl - 1;
  },

  get xlMin() {
    return this.xl;
  }

}, {
  get: function (obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    if (!['$$typeof', 'prototype'].includes(prop)) {
      console.warn(`screen.${prop} is not available`);
    }

    return 1;
  }
});
;// CONCATENATED MODULE: ./src/ui/responsive.js
 // Ready made media queries

const responsive = new Proxy({
  xs: `@media (max-width: ${screen.xsMax}px)`,
  smAndLess: `@media (max-width: ${screen.smMax}px)`,
  smPlus: `@media (min-width: ${screen.smMin}px)`,
  sm: `@media (min-width: ${screen.smMin}px) and (max-width: ${screen.smMax}px)`,
  mdAndLess: `@media (max-width: ${screen.mdMax}px)`,
  mdPlus: `@media (min-width: ${screen.mdMin}px)`,
  md: `@media (min-width: ${screen.mdMin}px) and (max-width: ${screen.mdMax}px)`,
  lg: `@media (min-width: ${screen.lgMin}px) and (max-width: ${screen.lgMax}px)`,
  lgPlus: `@media (min-width: ${screen.lgMin}px)`,
  xl: `@media (min-width: ${screen.xlMin}px)`
}, {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    if (!['$$typeof', 'prototype'].includes(prop)) {
      console.error(`responsive.${prop} does not exist`);
    }

    return '@media (min-width: 1px)';
  }

});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/ui/headings.js


const H1 = external_styled_components_default().h1.withConfig({
  displayName: "headings__H1",
  componentId: "sc-1imdgq-0"
})(["margin:0 0 15px;font-size:3rem;color:var(--color-text-main);", "{font-size:2.5rem;}"], responsive.smAndLess);
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "headings__H2",
  componentId: "sc-1imdgq-1"
})(["color:var(--color-text-main);font-size:2rem;margin:1rem 0;", "{font-size:1.5rem;}"], responsive.smAndLess);
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "headings__H3",
  componentId: "sc-1imdgq-2"
})(["color:var(--color-text-main);font-size:1.4rem;margin:1rem 0;", "{font-size:1.2rem;}"], responsive.smAndLess);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
// EXTERNAL MODULE: ./src/ui/spinner.js
var spinner = __webpack_require__(298);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/ui/buttons.js
const _excluded = ["children", "state", "width"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const STATES = {
  LOADING: 'loading'
};
const Inner = external_styled_components_default().span.withConfig({
  displayName: "buttons__Inner",
  componentId: "sc-13k5nke-0"
})(["flex:1 1 auto;font-size:16px;background:var(--color-primary-action);color:var(--color-primary-action-content);font-weight:600;text-decoration:none;text-align:center;padding:16px 25px;position:relative;border-radius:4px;"]);
const Outer = external_styled_components_default().button.attrs(p => ({
  type: p.type || 'button'
})).withConfig({
  displayName: "buttons__Outer",
  componentId: "sc-13k5nke-1"
})(["min-width:", ";display:inline-flex;border-radius:0;border:none;padding:0;appearance:none;cursor:pointer;text-decoration:none;&:hover ", "{background:var(--color-text-main);color:var(--color-main-background);}&[disabled]{cursor:default;opacity:0.5;", "{background:#aaa;color:#333;}}"], p => p.width ? p.width : '120px', Inner, Inner);
const Text = external_styled_components_default().span.withConfig({
  displayName: "buttons__Text",
  componentId: "sc-13k5nke-2"
})(["position:relative;z-index:2;transition:opacity 100ms,transform 100ms;white-space:nowrap;", ";"], (0,external_styled_is_.isNot)('shown')`
    opacity: 0;
    transform: scale(0.7);
  `);
const Loading = external_styled_components_default().span.withConfig({
  displayName: "buttons__Loading",
  componentId: "sc-13k5nke-3"
})(["position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;svg{height:50%;width:auto;}"]);
const Button = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    children,
    state,
    width
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Outer, _objectSpread(_objectSpread({
    width: width
  }, rest), {}, {
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Inner, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text, {
        shown: state !== STATES.LOADING,
        children: children
      }), state === STATES.LOADING && /*#__PURE__*/jsx_runtime_.jsx(Loading, {
        children: /*#__PURE__*/jsx_runtime_.jsx(spinner/* Spinner */.$, {})
      })]
    })
  }));
});
Button.displayName = 'Button';
;// CONCATENATED MODULE: ./src/ui/common.js


const common_Outer = external_styled_components_default().div.withConfig({
  displayName: "common__Outer",
  componentId: "sc-g72lus-0"
})(["padding:0 1rem;margin:0 auto;display:block;min-height:75vh;", "{max-width:1600px;padding-left:100px;padding-right:100px;}"], responsive.mdPlus);
const common_Inner = external_styled_components_default().div.withConfig({
  displayName: "common__Inner",
  componentId: "sc-g72lus-1"
})(["margin:0 auto;display:block;min-height:100vh;padding:0 1rem;", "{padding-left:2rem;padding-right:2rem;}", "{max-width:1800px;padding-left:100px;padding-right:100px;}"], responsive.smPlus, responsive.mdPlus);
const Header = external_styled_components_default().div.withConfig({
  displayName: "common__Header",
  componentId: "sc-g72lus-2"
})(["display:flex;flex-direction:column;margin-bottom:50px;padding:100px 50px 50px;max-width:800px;text-align:", ";margin:", ";", "{padding:100px 0 50px;}h1{font-size:2.4rem;margin-bottom:10px;text-transform:uppercase;}p{text-align:", ";font-size:18px;line-height:1.8rem;color:var(--color-text-sub);margin:0;}"], p => p.centerContent ? 'center' : 'left', p => p.centerContent ? '0 auto' : '0 0 50px 0', responsive.xs, p => p.centerContent ? 'center !important' : 'left');
;// CONCATENATED MODULE: ./src/ui/input.js


const InputGroup = external_styled_components_default().div.withConfig({
  displayName: "input__InputGroup",
  componentId: "sc-ggk720-0"
})(["border:1px solid var(--color-text-sub);border-radius:35px;margin:0 auto;display:grid;position:relative;align-items:center;grid-template-columns:1fr 40px;width:100%;"]);
const InputButton = external_styled_components_default().button.withConfig({
  displayName: "input__InputButton",
  componentId: "sc-ggk720-1"
})(["width:36px;height:36px;color:#fff;background:#000;border-radius:50%;"]);
const Input = external_styled_components_default().input.withConfig({
  displayName: "input__Input",
  componentId: "sc-ggk720-2"
})(["font-size:1rem;background:transparent;outline:none;padding:12px 35px;border:none;font-size:1rem;"]);
const InputSpinner = external_styled_components_default()(spinner/* Spinner */.$).withConfig({
  displayName: "input__InputSpinner",
  componentId: "sc-ggk720-3"
})(["position:absolute;top:13px;left:10px;z-index:1;"]);
;// CONCATENATED MODULE: ./src/ui/tags-and-labels.js

const DiscountLabel = external_styled_components_default().div.withConfig({
  displayName: "tags-and-labels__DiscountLabel",
  componentId: "sc-xtr2q-0"
})(["position:absolute;right:10px;top:10px;background:var(--color-discount);border-radius:50%;width:90px;height:90px;color:#fff;display:flex;z-index:10;justify-content:center;align-items:center;font-weight:900;font-size:var(--font-size-xl);"]);
;// CONCATENATED MODULE: ./src/ui/index.js









/***/ }),

/***/ 298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["color", "gap", "thickness", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const speedSwitch = speed => {
  if (speed === 'fast') return 600;
  if (speed === 'slow') return 900;
  return 750;
};

const animation = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{transform:rotate(0deg)}to{transform:rotate(360deg)}"]);
const Svg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "spinner__Svg",
  componentId: "sc-1mokmb4-0"
})(["transition-property:transform;animation-name:", ";animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:", "ms;"], animation, p => speedSwitch(p.speed));
const Spinner = _ref => {
  let {
    color = 'currentColor',
    gap = 4,
    thickness = 3,
    size = '1em'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Svg, _objectSpread(_objectSpread({
    height: size,
    width: size
  }, props), {}, {
    role: "img",
    "aria-labelledby": "title desc",
    viewBox: "0 0 32 32",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
      id: "title",
      children: "Circle loading spinner"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("desc", {
      id: "desc",
      children: "Image of a partial circle indicating &qoute;loading&qoute;."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
      role: "presentation",
      cx: 16,
      cy: 16,
      r: 14 - thickness / 2,
      stroke: color,
      fill: "none",
      strokeWidth: thickness,
      strokeDasharray: Math.PI * 2 * (11 - gap),
      strokeLinecap: "round"
    })]
  }));
};
Spinner.displayName = 'Spinner';

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;