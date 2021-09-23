"use strict";
exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 7537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OrderItems)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/attribute-list/index.js + 1 modules
var attribute_list = __webpack_require__(154);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@crystallize/react-image"
var react_image_ = __webpack_require__(5173);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
;// CONCATENATED MODULE: ./src/components/order-items/styles.js



const Items = external_styled_components_default().div.withConfig({
  displayName: "styles__Items",
  componentId: "sc-1o92uho-0"
})(["display:block;width:100%;margin-right:1rem;", "{margin-right:0;}"], ui/* responsive.xs */.jW.xs);
const Item = external_styled_components_default().div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-1o92uho-1"
})(["color:var(--color-text-sub);margin-bottom:1rem;padding:15px;display:flex;align-items:center;border-radius:0.2rem;border-bottom:1px dashed #dfdfdf;"]);
const ItemAmount = external_styled_components_default().div.withConfig({
  displayName: "styles__ItemAmount",
  componentId: "sc-1o92uho-2"
})(["text-align:right;"]);
const ItemImage = external_styled_components_default()(react_image_.Image).attrs(() => ({
  sizes: '80px'
})).withConfig({
  displayName: "styles__ItemImage",
  componentId: "sc-1o92uho-3"
})(["display:flex;flex:0 0 auto;width:60px;justify-content:center;align-items:center;margin:0 25px 0 0;img{max-height:100px;}"]);
const ItemInfo = external_styled_components_default().div.withConfig({
  displayName: "styles__ItemInfo",
  componentId: "sc-1o92uho-4"
})(["flex-grow:1;"]);
const ItemName = external_styled_components_default().p.withConfig({
  displayName: "styles__ItemName",
  componentId: "sc-1o92uho-5"
})(["font-size:1.2rem;font-weight:500;margin:0 0 10px;"]);
const ItemQuantity = external_styled_components_default().div.withConfig({
  displayName: "styles__ItemQuantity",
  componentId: "sc-1o92uho-6"
})(["color:#999;font-size:0.8rem;"]);
const ItemPrice = external_styled_components_default().div.withConfig({
  displayName: "styles__ItemPrice",
  componentId: "sc-1o92uho-7"
})(["font-size:1.2rem;font-weight:600;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/order-items/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function OrderItem({
  item
}) {
  var _item$images, _item$price$gross2, _item$price3, _item$price4, _item$price$gross3, _item$price5, _item$price6;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)(['common', 'basket']);

  if (item.sku.startsWith('--voucher--')) {
    var _item$price$gross, _item$price, _item$price2;

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemInfo, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ItemName, {
          children: t('basket:vouchers.title')
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: item.name
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemAmount, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ItemPrice, {
          children: t('price', {
            value: (_item$price$gross = (_item$price = item.price) === null || _item$price === void 0 ? void 0 : _item$price.gross) !== null && _item$price$gross !== void 0 ? _item$price$gross : 0,
            currency: (_item$price2 = item.price) === null || _item$price2 === void 0 ? void 0 : _item$price2.currency
          })
        })
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
    children: [item.imageUrl ? /*#__PURE__*/jsx_runtime_.jsx(ItemImage, {
      src: item.imageUrl,
      alt: item.name,
      sizes: "50vw"
    }) : ((_item$images = item.images) === null || _item$images === void 0 ? void 0 : _item$images[0]) && /*#__PURE__*/jsx_runtime_.jsx(ItemImage, _objectSpread(_objectSpread({}, item.images[0]), {}, {
      alt: item.name,
      sizes: "50vw"
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemInfo, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ItemName, {
        children: item.name
      }), item.attributes ? /*#__PURE__*/jsx_runtime_.jsx(attribute_list/* default */.Z, {
        attributes: item.attributes
      }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: item.sku
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemAmount, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemQuantity, {
        children: [item.quantity, " x", ' ', t('price', {
          value: (_item$price$gross2 = (_item$price3 = item.price) === null || _item$price3 === void 0 ? void 0 : _item$price3.gross) !== null && _item$price$gross2 !== void 0 ? _item$price$gross2 : 0,
          currency: (_item$price4 = item.price) === null || _item$price4 === void 0 ? void 0 : _item$price4.currency
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemPrice, {
        children: t('price', {
          value: ((_item$price$gross3 = (_item$price5 = item.price) === null || _item$price5 === void 0 ? void 0 : _item$price5.gross) !== null && _item$price$gross3 !== void 0 ? _item$price$gross3 : 0) * item.quantity,
          currency: (_item$price6 = item.price) === null || _item$price6 === void 0 ? void 0 : _item$price6.currency
        })
      })]
    })]
  });
}

function OrderItems({
  cart
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Items, {
    children: cart.map(item => /*#__PURE__*/jsx_runtime_.jsx(OrderItem, {
      item: item
    }, item.sku))
  });
}

/***/ })

};
;