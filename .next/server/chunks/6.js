"use strict";
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 3950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ GridItem),
  "Z": () => (/* binding */ Grid)
});

// EXTERNAL MODULE: external "@crystallize/grid-renderer"
var grid_renderer_ = __webpack_require__(1454);
var grid_renderer_default = /*#__PURE__*/__webpack_require__.n(grid_renderer_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/listformat/index.js + 8 modules
var listformat = __webpack_require__(8198);
;// CONCATENATED MODULE: ./src/components/grid/grid-item.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Cell = external_styled_components_default().div.withConfig({
  displayName: "grid-item__Cell",
  componentId: "sc-1e6hk2b-0"
})(["height:100%;width:100%;position:relative;grid-column-end:span ", ";grid-row-end:span ", ";"], p => p.colspan, p => p.rowspan);
function GridItem({
  data,
  gridCell
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Cell, _objectSpread(_objectSpread({}, gridCell === null || gridCell === void 0 ? void 0 : gridCell.layout), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(listformat/* default */.Z, {
      item: data
    })
  }));
}
;// CONCATENATED MODULE: ./src/components/grid/index.js
const _excluded = ["model"];

function grid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function grid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { grid_ownKeys(Object(source), true).forEach(function (key) { grid_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { grid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function grid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const StyledGrid = external_styled_components_default()((grid_renderer_default())).withConfig({
  displayName: "grid__StyledGrid",
  componentId: "sc-pbrn2j-0"
})(["grid-template-rows:", ";", "{grid-template-columns:1fr !important;grid-template-rows:unset !important;grid-auto-rows:var(--grid-row-height);> *{grid-column:initial !important;grid-row:initial !important;}}"], p => {
  var _p$model$rows;

  return `repeat(${(_p$model$rows = p.model.rows) === null || _p$model$rows === void 0 ? void 0 : _p$model$rows.length}, var(--grid-row-height))`;
}, ui/* responsive.xs */.jW.xs);
function Grid(_ref) {
  let {
    model
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (!model) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(StyledGrid, grid_objectSpread({
    model: model
  }, rest));
}

/***/ }),

/***/ 2880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ItemCollection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: ./src/ui/content-transformer.js
var content_transformer = __webpack_require__(9006);
;// CONCATENATED MODULE: ./src/lib/use-resize-observer.js

function useResizeObserver({
  ref
}) {
  const {
    0: {
      inline,
      block
    },
    1: setEntry
  } = (0,external_react_.useState)({
    inline: 1,
    block: 1
  });
  (0,external_react_.useEffect)(() => {
    function onResize([entry]) {
      if (entry.contentBoxSize) {
        // Checking for chrome as using a non-standard array
        if (entry.contentBoxSize[0]) {
          setEntry({
            inline: entry.contentBoxSize[0].inlineSize,
            block: entry.contentBoxSize[0].blockSize
          });
        } else {
          setEntry({
            inline: entry.contentBoxSize.inlineSize,
            block: entry.contentBoxSize.blockSize
          });
        }
      } else {
        setEntry({
          inline: entry.contentRect.width,
          block: entry.contentRect.height
        });
      }
    }

    if (ref.current && 'ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(ref.current);
    }
  }, [ref, setEntry]);
  return {
    inline,
    block,
    width: inline,
    height: block
  };
}
;// CONCATENATED MODULE: ./src/lib/use-scroll-ended.js

function useScrollEnded(ref, onEnd) {
  const timeoutRef = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    const el = ref.current;

    function onScroll() {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onEnd(), 100);
    }

    if (el) {
      el.addEventListener('scroll', onScroll, false);
      return () => el.removeEventListener('scroll', onScroll, false);
    }
  }, [ref, onEnd]);
  return null;
}
// EXTERNAL MODULE: ./src/components/listformat/index.js + 8 modules
var listformat = __webpack_require__(8198);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/item-collection.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Outer = external_styled_components_default().div.withConfig({
  displayName: "item-collection__Outer",
  componentId: "sc-9qtoy2-0"
})(["margin-bottom:100px;"]);
const Title = external_styled_components_default()(ui.H1).withConfig({
  displayName: "item-collection__Title",
  componentId: "sc-9qtoy2-1"
})(["font-size:var(--font-size-xl);font-weight:600;margin:0 4px;margin-bottom:15px;max-width:var(--font-max-width);", "{padding:var(--content-padding-xs);padding-right:10px;}"], ui/* responsive.xs */.jW.xs);
const Description = external_styled_components_default().div.withConfig({
  displayName: "item-collection__Description",
  componentId: "sc-9qtoy2-2"
})(["margin:0 4px 45px;max-width:var(--font-max-width);", "{padding:var(--content-padding-xs);padding-right:10px;}"], ui/* responsive.xs */.jW.xs);
const Arrow = external_styled_components_default().button.withConfig({
  displayName: "item-collection__Arrow",
  componentId: "sc-9qtoy2-3"
})(["position:absolute;z-index:99;background:var(--color-text-main);border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.25);height:80px;width:80px;top:50%;font-size:25px;color:#fff;opacity:0;transition:transform 150ms,opacity 150ms;display:none;", "{display:block;}&.next{right:0;transform:translate(50%,-60%) scale(0.5);", ";}&.prev{transform:translate(-50%,-60%) scale(-0.5,0.5);left:0;", ";}"], ui/* responsive.mdPlus */.jW.mdPlus, external_styled_is_default()('$show')`
      transform: translate(50%, -60%) scale(1);
      opacity: 1;
    `, external_styled_is_default()('$show')`
      transform: translate(-50%, -60%) scale(-1, 1);
      opacity: 1;
    `);
const Slider = external_styled_components_default().div.withConfig({
  displayName: "item-collection__Slider",
  componentId: "sc-9qtoy2-4"
})(["position:relative;"]);
const SliderInner = external_styled_components_default().div.withConfig({
  displayName: "item-collection__SliderInner",
  componentId: "sc-9qtoy2-5"
})(["position:relative;margin-top:45px;display:flex;overflow-x:scroll;scroll-snap-type:x mandatory;scroll-padding:0%;padding-bottom:60px;margin-bottom:60px;&::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.1);background-color:#f5f5f5;}&::-webkit-scrollbar{height:2px;background-color:#f5f5f5;}&::-webkit-scrollbar-thumb{background-color:#000;}", "{padding-bottom:30px;scroll-padding:25px;> *:first-child{margin-left:25px;}&::-webkit-scrollbar-track{margin-left:25px;}&::-webkit-scrollbar{background:transparent;}}"], ui/* responsive.xs */.jW.xs);
const Slide = external_styled_components_default().div.withConfig({
  displayName: "item-collection__Slide",
  componentId: "sc-9qtoy2-6"
})(["scroll-snap-align:start;&.type-document{width:85%;min-width:85%;height:var(--listformat-document-height-xs);", "{width:33.333%;min-width:33.333%;height:var(--listformat-document-height-xl);}", "{width:33.333%;min-width:33.333%;height:var(--listformat-document-height-lg);}", "{width:33.333%;min-width:33.333%;height:var(--listformat-document-height-md);}", "{width:33.333%;min-width:33.333%;height:var(--listformat-document-height-sm);}}&.type-product{min-width:45%;width:45%;height:var(--listformat-product-height-xs);", "{height:var(--listformat-product-height-xl);width:20%;min-width:20%;}", "{height:var(--listformat-product-height-lg);min-width:25%;width:25%;}", "{height:var(--listformat-product-height-md);width:33.333%;min-width:33.333%;}", "{height:var(--listformat-product-height-sm);width:50%;min-width:50%;}}"], ui/* responsive.xl */.jW.xl, ui/* responsive.lg */.jW.lg, ui/* responsive.md */.jW.md, ui/* responsive.sm */.jW.sm, ui/* responsive.xl */.jW.xl, ui/* responsive.lg */.jW.lg, ui/* responsive.md */.jW.md, ui/* responsive.sm */.jW.sm);
const SCROLL_STATES = {
  NO_SCROLL: 'no-scroll',
  BEGINNING: 'BEGINNING',
  MID: 'mid',
  END: 'end'
};
function ItemCollection({
  title,
  description,
  items
}) {
  const ref = (0,external_react_.useRef)();
  const {
    width
  } = useResizeObserver({
    ref
  });
  const {
    0: scrollState,
    1: setScrollState
  } = (0,external_react_.useState)('beginning');
  const checkButtonVisibility = (0,external_react_.useCallback)(() => {
    const el = ref.current;

    if (el) {
      const currentScroll = el.scrollLeft;
      const isScrollAtTheEnd = el.scrollWidth - currentScroll === width;
      const isScrollAtTheBeginning = currentScroll === 0;
      const hasScroll = !(isScrollAtTheBeginning && isScrollAtTheEnd);

      if (!hasScroll) {
        return setScrollState(SCROLL_STATES.NO_SCROLL);
      }

      if (isScrollAtTheEnd) {
        return setScrollState(SCROLL_STATES.END);
      }

      if (isScrollAtTheBeginning) {
        return setScrollState(SCROLL_STATES.BEGINNING);
      }

      return setScrollState(SCROLL_STATES.MID);
    }
  }, [width, setScrollState]);

  function moveScroll(direction) {
    const el = ref.current;

    if (el) {
      const currentScroll = el.scrollLeft;
      el.scrollTo({
        top: 0,
        left: currentScroll + width * 0.75 * direction,
        behavior: 'smooth'
      });
    }
  } // Update button state on resize


  (0,external_react_.useEffect)(() => {
    checkButtonVisibility();
  }, [width, checkButtonVisibility]); // Update button state when scrolling has ended

  useScrollEnded(ref, checkButtonVisibility);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Outer, {
    children: [Boolean(title) && /*#__PURE__*/jsx_runtime_.jsx(Title, {
      as: "h4",
      children: title
    }), Boolean(description) && /*#__PURE__*/jsx_runtime_.jsx(Description, {
      children: /*#__PURE__*/jsx_runtime_.jsx(content_transformer/* default */.Z, {
        json: description
      })
    }), Boolean(items) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Slider, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ScrollLeftButton, {
        scrollState: scrollState,
        onClick: () => moveScroll(-1)
      }), /*#__PURE__*/jsx_runtime_.jsx(SliderInner, {
        ref: ref,
        children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(Slide, {
          className: `type-${item === null || item === void 0 ? void 0 : item.type}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(listformat/* default */.Z, {
            item: item
          })
        }, item.id))
      }), /*#__PURE__*/jsx_runtime_.jsx(ScrollRightButton, {
        scrollState: scrollState,
        onClick: () => moveScroll(1)
      })]
    })]
  });
}

function ArrowLeft(props) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(Arrow, _objectSpread({
    "aria-label": t('slider.previous'),
    className: "prev"
  }, props));
}

function ArrowRight(props) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(Arrow, _objectSpread({
    "aria-label": t('slider.next'),
    className: "next"
  }, props));
}

function ScrollLeftButton({
  scrollState,
  onClick
}) {
  const hasScroll = scrollState !== SCROLL_STATES.NO_SCROLL;
  const isScrollAtBeginning = scrollState === SCROLL_STATES.BEGINNING;
  const isDisplayed = hasScroll && !isScrollAtBeginning;
  return /*#__PURE__*/jsx_runtime_.jsx(ArrowLeft, {
    $show: isDisplayed,
    onClick: onClick,
    disabled: !isDisplayed,
    children: "\u279E"
  });
}

function ScrollRightButton({
  scrollState,
  onClick
}) {
  const hasScroll = scrollState !== SCROLL_STATES.NO_SCROLL;
  const isScrollAtEnd = scrollState === SCROLL_STATES.END;
  const isDisplayed = hasScroll && !isScrollAtEnd;
  return /*#__PURE__*/jsx_runtime_.jsx(ArrowRight, {
    $show: isDisplayed,
    onClick: onClick,
    disabled: !isDisplayed,
    children: "\u279E"
  });
}

/***/ }),

/***/ 8198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ItemListformat)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: ./src/ui/content-transformer.js
var content_transformer = __webpack_require__(9006);
// EXTERNAL MODULE: ./src/components/video-player.js
var video_player = __webpack_require__(348);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@crystallize/react-image"
var react_image_ = __webpack_require__(5173);
;// CONCATENATED MODULE: ./src/shapes/document/item/styles.js



const Outer = external_styled_components_default().a.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-z5zu9b-0"
})(["display:flex;flex-direction:column;height:100%;width:100%;position:relative;border:4px solid #fff;background:var(--listformat-document-background);", "{margin-bottom:15px;}"], ui/* responsive.xs */.jW.xs);
const MediaWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__MediaWrapper",
  componentId: "sc-z5zu9b-1"
})(["flex:0 0 auto;border:1px solid #dfdfdf;width:100%;height:100%;figure{height:100%;}.react-video{flex:0 0 auto;width:100%;height:100%;}img,.react-video video{display:block;object-fit:cover;object-position:center;width:100%;height:100%;overflow:hidden;}"]);
const Img = external_styled_components_default()(react_image_.Image).withConfig({
  displayName: "styles__Img",
  componentId: "sc-z5zu9b-2"
})(["width:100%;height:100%;overflow:hidden;"]);
const Text = external_styled_components_default().div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-z5zu9b-3"
})(["flex:1 1 auto;width:100%;height:50%;left:0px;display:flex;flex-direction:column;justify-content:flex-end;padding:3em var(--content-padding);position:absolute;z-index:2;color:#fff;bottom:0;padding-right:20%;background:linear-gradient( 180deg,rgba(8,7,8,0) 0%,rgba(8,7,8,0.8) 100% );h3{font-size:var(--font-size-l);color:inherit;margin:0;line-height:1.4em;}"]);
const textShadowStyles = `
  text-shadow: 2px 2px 6px black;
`;
const Title = external_styled_components_default()(ui.H3).withConfig({
  displayName: "styles__Title",
  componentId: "sc-z5zu9b-4"
})(["", ""], textShadowStyles);
const Description = external_styled_components_default().div.withConfig({
  displayName: "styles__Description",
  componentId: "sc-z5zu9b-5"
})(["margin-top:10px;color:#fff;", " p{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fff;line-height:1.8em;font-size:var(--font-size-secondary);}"], textShadowStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/shapes/document/item/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function DocumentItem({
  data,
  colSpan = '4'
}) {
  var _data$components, _images$content, _images$content$image, _data$components2, _data$components3, _video$content, _video$content$videos, _description$content;

  if (!data) {
    return null;
  }

  const {
    name,
    path
  } = data;
  const images = (_data$components = data.components) === null || _data$components === void 0 ? void 0 : _data$components.find(c => c.type === 'images');
  const image = images === null || images === void 0 ? void 0 : (_images$content = images.content) === null || _images$content === void 0 ? void 0 : (_images$content$image = _images$content.images) === null || _images$content$image === void 0 ? void 0 : _images$content$image[0];
  const description = (_data$components2 = data.components) === null || _data$components2 === void 0 ? void 0 : _data$components2.find(c => c.name === 'Intro');
  const video = (_data$components3 = data.components) === null || _data$components3 === void 0 ? void 0 : _data$components3.find(c => c.name === 'Video');
  let media = null;

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
  }

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: path,
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Outer, {
      span: colSpan,
      children: [Boolean(media) && /*#__PURE__*/jsx_runtime_.jsx(MediaWrapper, {
        children: media
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx(Description, {
          children: /*#__PURE__*/jsx_runtime_.jsx(content_transformer/* default */.Z, {
            json: description === null || description === void 0 ? void 0 : (_description$content = description.content) === null || _description$content === void 0 ? void 0 : _description$content.json
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/lib/app-config.js + 1 modules
var app_config = __webpack_require__(9841);
// EXTERNAL MODULE: ./src/lib/pricing.js
var lib_pricing = __webpack_require__(4175);
// EXTERNAL MODULE: ./src/components/topic-tag.js
var topic_tag = __webpack_require__(4151);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
;// CONCATENATED MODULE: ./src/shapes/product/item/components/price/styles.js


const Price = external_styled_components_default().span.withConfig({
  displayName: "styles__Price",
  componentId: "sc-4dligq-0"
})(["color:var(--color-price);position:relative;font-weight:bold;display:flex;font-size:var(--font-listing-price-size);padding-bottom:5px;align-items:center;", ""], external_styled_is_default()('discounted')`
    color:var(--color-discount);
  `);
const BeforePrice = external_styled_components_default().div.withConfig({
  displayName: "styles__BeforePrice",
  componentId: "sc-4dligq-1"
})(["font-size:0.8em;opacity:0.7;padding:0 15px 0 5px;font-weight:500;text-decoration:line-through;color:var(--color-price);"]);
const Percentage = external_styled_components_default().div.withConfig({
  displayName: "styles__Percentage",
  componentId: "sc-4dligq-2"
})(["background:var(--color-discount);border-radius:2px;color:#fff;display:inline-block;font-size:14px;font-weight:600;margin-top:10px;padding:5px 10px;position:absolute;right:0;top:0;z-index:15;"]);
;// CONCATENATED MODULE: ./src/shapes/product/item/components/price/index.js






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
;// CONCATENATED MODULE: ./src/shapes/product/item/styles.js


const styles_Outer = external_styled_components_default().a.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1hxtdlk-0"
})(["height:100%;color:var(--color-main-background);border:4px solid #fff;display:block;transition:all 0.1s ease-in-out;"]);
const Inner = external_styled_components_default().div.withConfig({
  displayName: "styles__Inner",
  componentId: "sc-1hxtdlk-1"
})(["height:100%;width:100%;position:relative;display:flex;flex-direction:column;"]);
const ImageWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImageWrapper",
  componentId: "sc-1hxtdlk-2"
})(["position:relative;z-index:1;overflow:hidden;width:100%;height:100%;border:1px solid #dfdfdf;background:var(--listformat-product-background);figure{height:100%;}"]);
const styles_Img = external_styled_components_default()(react_image_.Image).withConfig({
  displayName: "styles__Img",
  componentId: "sc-1hxtdlk-3"
})(["width:100%;height:100%;overflow:hidden;> img{display:block;object-fit:var(--listformat-product-image-fit);object-position:var(--listformat-product-image-position);width:100%;height:100%;overflow:hidden;}"]);
const Footer = external_styled_components_default().div.withConfig({
  displayName: "styles__Footer",
  componentId: "sc-1hxtdlk-4"
})(["width:100%;padding:5px 0;color:var(--color-text-main);h3{display:block;padding:0 0 5px;font-size:var(--font-listing-name-size);font-family:var(--font-family-main);color:inherit;margin:0;}"]);
const Tags = external_styled_components_default().div.withConfig({
  displayName: "styles__Tags",
  componentId: "sc-1hxtdlk-5"
})(["position:absolute;display:flex;z-index:4;bottom:15px;padding:5px;width:100%;"]);
// EXTERNAL MODULE: ./src/shapes/product/utils.js
var utils = __webpack_require__(8069);
;// CONCATENATED MODULE: ./src/shapes/product/item/index.js
function item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { item_ownKeys(Object(source), true).forEach(function (key) { item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function ProductItem({
  data
}) {
  var _variant$images, _data$topics;

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
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Inner, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ImageWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Tags, {
            children: data === null || data === void 0 ? void 0 : (_data$topics = data.topics) === null || _data$topics === void 0 ? void 0 : _data$topics.map(topic => /*#__PURE__*/(0,external_react_.createElement)(topic_tag/* default */.Z, item_objectSpread(item_objectSpread({}, topic), {}, {
              key: `listing-${topic.id}-${data === null || data === void 0 ? void 0 : data.id}`
            })))
          }), image && /*#__PURE__*/jsx_runtime_.jsx(styles_Img, item_objectSpread(item_objectSpread({}, image), {}, {
            alt: name,
            sizes: "250px"
          }))]
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
;// CONCATENATED MODULE: ./src/shapes/folder/item/styles.js

const item_styles_Outer = external_styled_components_default().a.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1fuqvls-0"
})(["height:100%;color:var(--color-primary-action-content);position:relative;display:flex;align-items:center;background:var(--color-primary-action);padding:15px 25px;transition:all 0.1s ease-in-out;box-shadow:0 0px 0px rgba(0,0,0,0);border:4px solid #fff;"]);
const styles_Text = external_styled_components_default().div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1fuqvls-1"
})(["z-index:2;bottom:0;left:0;width:100%;h3{font-size:var(--font-size-s);text-align:center;font-weight:600;margin:0 0 0 5px;color:inherit;}"]);
;// CONCATENATED MODULE: ./src/shapes/folder/item/index.js

 // uncomment this if you want to add a thumbnail
// import { Image } from '@crystallize/react-image';




function FolderItem({
  data
}) {
  if (!data) {
    return null;
  }

  const {
    name,
    path
  } = data; // uncomment this if you want to add a thumbnail
  // const thumbnail = data.components?.find((c) => c.name === 'Thumbnail')
  //   ?.content?.images?.[0];

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: path,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(item_styles_Outer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(styles_Text, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ui.H3, {
          children: name
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/listformat/index.js
function listformat_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function listformat_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { listformat_ownKeys(Object(source), true).forEach(function (key) { listformat_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { listformat_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function listformat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ItemListformat({
  item
}) {
  if (!item) {
    return null;
  }

  const commonProps = {
    key: item.path
  };
  const types = {
    product: /*#__PURE__*/jsx_runtime_.jsx(ProductItem, listformat_objectSpread({
      data: item
    }, commonProps)),
    folder: /*#__PURE__*/jsx_runtime_.jsx(FolderItem, listformat_objectSpread({
      data: item
    }, commonProps)),
    document: /*#__PURE__*/jsx_runtime_.jsx(DocumentItem, listformat_objectSpread({
      data: item
    }, commonProps))
  };
  return types[item.type] || null;
}

/***/ }),

/***/ 1964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_content_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9006);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Outer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "page-header__Outer",
  componentId: "sc-dahxdp-0"
})(["padding-bottom:25px;"]);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "page-header__Description",
  componentId: "sc-dahxdp-1"
})(["max-width:var(--font-max-width);"]);
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "page-header__H1",
  componentId: "sc-dahxdp-2"
})(["font-size:var(--font-size-xl);color:var(--color-text-main);max-width:var(--font-max-width);margin-bottom:15px;"]);
function PageHeader({
  title,
  description
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Outer, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(H1, {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Description, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ui_content_transformer__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        json: description
      })
    })]
  });
}

/***/ }),

/***/ 1930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ stackable)
});

// EXTERNAL MODULE: ./src/components/item-collection.js + 2 modules
var item_collection = __webpack_require__(2880);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/grid/index.js + 1 modules
var components_grid = __webpack_require__(3950);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: ./src/ui/content-transformer.js
var content_transformer = __webpack_require__(9006);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/grid-collection.js







const Outer = external_styled_components_default().div.withConfig({
  displayName: "grid-collection__Outer",
  componentId: "sc-1k1qynj-0"
})(["margin-bottom:100px;"]);
const Title = external_styled_components_default()(ui.H1).withConfig({
  displayName: "grid-collection__Title",
  componentId: "sc-1k1qynj-1"
})(["font-size:var(--font-size-xl);font-weight:600;margin:0 4px;margin-bottom:15px;max-width:var(--font-max-width);"]);
const Description = external_styled_components_default().div.withConfig({
  displayName: "grid-collection__Description",
  componentId: "sc-1k1qynj-2"
})(["margin:0 4px 45px;max-width:var(--font-max-width);"]);
function GridCollection({
  title,
  description,
  grids
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Outer, {
    children: [!!title && /*#__PURE__*/jsx_runtime_.jsx(Title, {
      as: "h4",
      children: title
    }), !!description && /*#__PURE__*/jsx_runtime_.jsx(Description, {
      children: /*#__PURE__*/jsx_runtime_.jsx(content_transformer/* default */.Z, {
        json: description
      })
    }), !!(grids !== null && grids !== void 0 && grids.length) && grids.map((grid, index) => /*#__PURE__*/jsx_runtime_.jsx(components_grid/* default */.Z, {
      model: grid,
      cellComponent: ({
        cell
      }) => /*#__PURE__*/jsx_runtime_.jsx(components_grid/* GridItem */.P, {
        data: cell.item,
        gridCell: cell
      })
    }, grid.id || index))]
  });
}
// EXTERNAL MODULE: external "@crystallize/react-image"
var react_image_ = __webpack_require__(5173);
;// CONCATENATED MODULE: ./src/components/banner.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Img = external_styled_components_default().div.withConfig({
  displayName: "banner__Img",
  componentId: "sc-1s6x2rs-0"
})(["figure{height:100%;}img{width:100%;object-fit:cover;}", "{max-width:50%;}", "{max-width:60%;}"], ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.mdPlus */.jW.mdPlus);
const banner_Description = external_styled_components_default().div.withConfig({
  displayName: "banner__Description",
  componentId: "sc-1s6x2rs-1"
})(["p,li{font-size:var(--font-size-body);line-height:1.8em;}"]);
const banner_Title = external_styled_components_default().h2.withConfig({
  displayName: "banner__Title",
  componentId: "sc-1s6x2rs-2"
})(["font-size:var(--font-size-xl);font-weight:600;margin-bottom:15px;"]);
const Button = external_styled_components_default().a.withConfig({
  displayName: "banner__Button",
  componentId: "sc-1s6x2rs-3"
})(["padding:10px 15px;display:inline-block;margin-top:15px;font-size:var(--font-size-s);font-weight:600;border-radius:4px;color:#fff;background:#000;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "banner__Content",
  componentId: "sc-1s6x2rs-4"
})(["align-items:center;color:var(--font-color-main);display:flex;height:100%;", "{max-width:var(--font-max-width);}"], ui/* responsive.smPlus */.jW.smPlus);
const banner_Outer = external_styled_components_default().div.withConfig({
  displayName: "banner__Outer",
  componentId: "sc-1s6x2rs-5"
})(["position:relative;border:4px solid transparent;border:1px solid #dfdfdf;margin-top:15px;display:flex;margin-bottom:100px;margin-top:15px;position:relative;flex-direction:column;", "{align-items:center;flex-direction:row;justify-content:space-between;overflow:hidden;}.banner-content,.banner-media{padding:2em;", "{padding:0;}}.banner-content{", "{padding:5em 50px;flex-direction:row;margin-right:30px;}}.banner-media{padding:2em;", "{padding:0;}}&.banner--withOverlay{display:block;padding:0;position:relative;.banner-content{padding:1.5em;min-height:350px;", "{padding:0 5em;margin-right:0;}", "{min-height:600px;}", "{min-height:700px;}", "{min-height:800px;}p,li,h1,h2,h3,h4,h5,h6{color:#fff;}}.banner-media{bottom:0;content:'';left:0;padding:0;position:absolute;right:0;top:0;z-index:-1;:after{background:linear-gradient( -90deg,rgba(8,7,8,0) 0%,rgba(8,7,8,0.6) 100% );bottom:0;content:'';left:0;position:absolute;right:0;top:0;}img{position:relative;height:100%;}}.banner-button{color:#000;background:#fff;}.banner-media{max-width:100%;}}"], ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.smPlus */.jW.smPlus, ui/* responsive.mdPlus */.jW.mdPlus, ui/* responsive.lg */.jW.lg, ui/* responsive.xl */.jW.xl);

const Banner = ({
  title,
  description,
  link,
  linkText,
  image,
  addTextAsOverlay
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(banner_Outer, {
  className: addTextAsOverlay ? 'banner--withOverlay' : '',
  children: [/*#__PURE__*/jsx_runtime_.jsx(Content, {
    className: "banner-content",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [!!title && /*#__PURE__*/jsx_runtime_.jsx(banner_Title, {
        children: title
      }), !!description && /*#__PURE__*/jsx_runtime_.jsx(banner_Description, {
        children: /*#__PURE__*/jsx_runtime_.jsx(content_transformer/* default */.Z, {
          json: description
        })
      }), !!link && /*#__PURE__*/jsx_runtime_.jsx(Button, {
        className: "banner-button",
        href: link,
        children: linkText
      })]
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Img, {
    className: "banner-media",
    children: /*#__PURE__*/jsx_runtime_.jsx(react_image_.Image, _objectSpread(_objectSpread({}, image === null || image === void 0 ? void 0 : image[0]), {}, {
      sizes: "(max-width: 700px) 100vw, 1200px"
    }))
  })]
});

/* harmony default export */ const banner = (Banner);
;// CONCATENATED MODULE: ./src/components/stackable.js






const StackRenderer = ({
  stack
}) => {
  var _stack$shape;

  switch (stack === null || stack === void 0 ? void 0 : (_stack$shape = stack.shape) === null || _stack$shape === void 0 ? void 0 : _stack$shape.name) {
    case 'Item collection':
      {
        var _stack$components, _stack$components$fin, _stack$components$fin2, _stack$components2, _stack$components2$fi, _stack$components2$fi2, _stack$components3, _stack$components3$fi, _stack$components3$fi2;

        const title = stack === null || stack === void 0 ? void 0 : (_stack$components = stack.components) === null || _stack$components === void 0 ? void 0 : (_stack$components$fin = _stack$components.find(isTitleComponent)) === null || _stack$components$fin === void 0 ? void 0 : (_stack$components$fin2 = _stack$components$fin.content) === null || _stack$components$fin2 === void 0 ? void 0 : _stack$components$fin2.text;
        const description = stack === null || stack === void 0 ? void 0 : (_stack$components2 = stack.components) === null || _stack$components2 === void 0 ? void 0 : (_stack$components2$fi = _stack$components2.find(isDescriptionComponent)) === null || _stack$components2$fi === void 0 ? void 0 : (_stack$components2$fi2 = _stack$components2$fi.content) === null || _stack$components2$fi2 === void 0 ? void 0 : _stack$components2$fi2.json;
        const items = stack === null || stack === void 0 ? void 0 : (_stack$components3 = stack.components) === null || _stack$components3 === void 0 ? void 0 : (_stack$components3$fi = _stack$components3.find(c => c.name === 'Items')) === null || _stack$components3$fi === void 0 ? void 0 : (_stack$components3$fi2 = _stack$components3$fi.content) === null || _stack$components3$fi2 === void 0 ? void 0 : _stack$components3$fi2.items;
        return /*#__PURE__*/jsx_runtime_.jsx(item_collection/* default */.Z, {
          title: title,
          description: description,
          items: items
        });
      }

    case 'Grid collection':
      {
        var _stack$components4, _stack$components4$fi, _stack$components4$fi2, _stack$components5, _stack$components5$fi, _stack$components5$fi2, _stack$components6, _stack$components6$fi, _stack$components6$fi2;

        const title = stack === null || stack === void 0 ? void 0 : (_stack$components4 = stack.components) === null || _stack$components4 === void 0 ? void 0 : (_stack$components4$fi = _stack$components4.find(isTitleComponent)) === null || _stack$components4$fi === void 0 ? void 0 : (_stack$components4$fi2 = _stack$components4$fi.content) === null || _stack$components4$fi2 === void 0 ? void 0 : _stack$components4$fi2.text;
        const description = stack === null || stack === void 0 ? void 0 : (_stack$components5 = stack.components) === null || _stack$components5 === void 0 ? void 0 : (_stack$components5$fi = _stack$components5.find(isDescriptionComponent)) === null || _stack$components5$fi === void 0 ? void 0 : (_stack$components5$fi2 = _stack$components5$fi.content) === null || _stack$components5$fi2 === void 0 ? void 0 : _stack$components5$fi2.json;
        const grids = stack === null || stack === void 0 ? void 0 : (_stack$components6 = stack.components) === null || _stack$components6 === void 0 ? void 0 : (_stack$components6$fi = _stack$components6.find(isGridComponent)) === null || _stack$components6$fi === void 0 ? void 0 : (_stack$components6$fi2 = _stack$components6$fi.content) === null || _stack$components6$fi2 === void 0 ? void 0 : _stack$components6$fi2.grids;
        return /*#__PURE__*/jsx_runtime_.jsx(GridCollection, {
          title: title,
          description: description,
          grids: grids
        });
      }

    case 'Collection':
      {
        var _stack$components7, _stack$components7$fi, _stack$components7$fi2, _stack$components8, _stack$components8$fi, _stack$components8$fi2, _stack$components9, _stack$components9$fi, _stack$components9$fi2;

        const title = stack === null || stack === void 0 ? void 0 : (_stack$components7 = stack.components) === null || _stack$components7 === void 0 ? void 0 : (_stack$components7$fi = _stack$components7.find(isTitleComponent)) === null || _stack$components7$fi === void 0 ? void 0 : (_stack$components7$fi2 = _stack$components7$fi.content) === null || _stack$components7$fi2 === void 0 ? void 0 : _stack$components7$fi2.text;
        const description = stack === null || stack === void 0 ? void 0 : (_stack$components8 = stack.components) === null || _stack$components8 === void 0 ? void 0 : (_stack$components8$fi = _stack$components8.find(isDescriptionComponent)) === null || _stack$components8$fi === void 0 ? void 0 : (_stack$components8$fi2 = _stack$components8$fi.content) === null || _stack$components8$fi2 === void 0 ? void 0 : _stack$components8$fi2.json;
        const choice = stack === null || stack === void 0 ? void 0 : (_stack$components9 = stack.components) === null || _stack$components9 === void 0 ? void 0 : (_stack$components9$fi = _stack$components9.find(isChoiceComponent)) === null || _stack$components9$fi === void 0 ? void 0 : (_stack$components9$fi2 = _stack$components9$fi.content) === null || _stack$components9$fi2 === void 0 ? void 0 : _stack$components9$fi2.selectedComponent;

        if ((choice === null || choice === void 0 ? void 0 : choice.name) === 'Grid') {
          var _choice$content;

          const grids = (_choice$content = choice.content) === null || _choice$content === void 0 ? void 0 : _choice$content.grids;
          return /*#__PURE__*/jsx_runtime_.jsx(GridCollection, {
            title: title,
            description: description,
            grids: grids
          });
        }

        if ((choice === null || choice === void 0 ? void 0 : choice.name) === 'Items') {
          var _choice$content2;

          const items = (_choice$content2 = choice.content) === null || _choice$content2 === void 0 ? void 0 : _choice$content2.items;
          return /*#__PURE__*/jsx_runtime_.jsx(item_collection/* default */.Z, {
            title: title,
            description: description,
            items: items
          });
        }

        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "No choice has been made"
        });
      }

    case 'Banner':
      {
        var _stack$components10, _stack$components10$f, _stack$components10$f2, _stack$components11, _stack$components11$f, _stack$components11$f2, _stack$components12, _stack$components12$f, _stack$components12$f2, _stack$components13, _stack$components13$f, _stack$components13$f2, _stack$components14, _stack$components14$f, _stack$components14$f2, _stack$components15, _stack$components15$f, _stack$components15$f2;

        const title = stack === null || stack === void 0 ? void 0 : (_stack$components10 = stack.components) === null || _stack$components10 === void 0 ? void 0 : (_stack$components10$f = _stack$components10.find(isTitleComponent)) === null || _stack$components10$f === void 0 ? void 0 : (_stack$components10$f2 = _stack$components10$f.content) === null || _stack$components10$f2 === void 0 ? void 0 : _stack$components10$f2.text;
        const description = stack === null || stack === void 0 ? void 0 : (_stack$components11 = stack.components) === null || _stack$components11 === void 0 ? void 0 : (_stack$components11$f = _stack$components11.find(isDescriptionComponent)) === null || _stack$components11$f === void 0 ? void 0 : (_stack$components11$f2 = _stack$components11$f.content) === null || _stack$components11$f2 === void 0 ? void 0 : _stack$components11$f2.json;
        const linkText = stack === null || stack === void 0 ? void 0 : (_stack$components12 = stack.components) === null || _stack$components12 === void 0 ? void 0 : (_stack$components12$f = _stack$components12.find(isLinkTextComponent)) === null || _stack$components12$f === void 0 ? void 0 : (_stack$components12$f2 = _stack$components12$f.content) === null || _stack$components12$f2 === void 0 ? void 0 : _stack$components12$f2.text;
        const link = stack === null || stack === void 0 ? void 0 : (_stack$components13 = stack.components) === null || _stack$components13 === void 0 ? void 0 : (_stack$components13$f = _stack$components13.find(isLinkComponent)) === null || _stack$components13$f === void 0 ? void 0 : (_stack$components13$f2 = _stack$components13$f.content) === null || _stack$components13$f2 === void 0 ? void 0 : _stack$components13$f2.text;
        const image = stack === null || stack === void 0 ? void 0 : (_stack$components14 = stack.components) === null || _stack$components14 === void 0 ? void 0 : (_stack$components14$f = _stack$components14.find(isImageComponent)) === null || _stack$components14$f === void 0 ? void 0 : (_stack$components14$f2 = _stack$components14$f.content) === null || _stack$components14$f2 === void 0 ? void 0 : _stack$components14$f2.images;
        const addTextAsOverlay = stack === null || stack === void 0 ? void 0 : (_stack$components15 = stack.components) === null || _stack$components15 === void 0 ? void 0 : (_stack$components15$f = _stack$components15.find(isAddTextAsOverlayComponent)) === null || _stack$components15$f === void 0 ? void 0 : (_stack$components15$f2 = _stack$components15$f.content) === null || _stack$components15$f2 === void 0 ? void 0 : _stack$components15$f2.value;
        return /*#__PURE__*/jsx_runtime_.jsx(banner, {
          title: title,
          description: description,
          linkText: linkText,
          link: link,
          image: image,
          addTextAsOverlay: addTextAsOverlay
        });
      }

    default:
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "Stack type not supported"
      });
  }
};

const Stackable = ({
  stacks
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: stacks === null || stacks === void 0 ? void 0 : stacks.map(stack => /*#__PURE__*/jsx_runtime_.jsx(StackRenderer, {
      stack: stack
    }, stack === null || stack === void 0 ? void 0 : stack.id))
  });
};

/* harmony default export */ const stackable = (Stackable);

function isTitleComponent({
  name
}) {
  return name === 'Title';
}

function isDescriptionComponent({
  name
}) {
  return name === 'Description';
}

function isGridComponent({
  name
}) {
  return name === 'Grid';
}

function isChoiceComponent({
  name
}) {
  return name === 'Content';
}

function isLinkTextComponent({
  name
}) {
  return name === 'Link text';
}

function isLinkComponent({
  name
}) {
  return name === 'Link';
}

function isImageComponent({
  name
}) {
  return name === 'Image';
}

function isAddTextAsOverlayComponent({
  name
}) {
  return name === 'Add text as overlay';
}

/***/ }),

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export topicTagsColorMatrix */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6584);
/* harmony import */ var styled_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_is__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "topic-tag__Tag",
  componentId: "sc-1c4et0u-0"
})(["padding:6px 8px;border-radius:2px;background:#fff;font-weight:500;color:var(--color-text-main);font-size:var(--font-size-tags);display:inline-block;margin-right:5px;margin-bottom:15px;", ""], styled_is__WEBPACK_IMPORTED_MODULE_1___default()('underline')`
    font-size: 18px;
    margin-bottom:5px;
    padding: 6px 0;
    margin-right: 20px;
  `);
const topicTagsColorMatrix = {
  Outlet: {
    background: '#ECEAE5',
    color: '#7D7D7C'
  },
  Organic: {
    background: '#DAF5CB',
    color: '#3F4A38'
  },
  'Eco friendly': {
    background: '#D0F0EC',
    color: '#4A5554'
  },
  'New arrival': {
    background: '#F2BBAD',
    color: '#6D5752'
  },
  Livingroom: {
    background: '#DCD7EA',
    color: '#63606C'
  },
  Bathroom: {
    background: '#E2B6C4',
    color: '#7B656C'
  },
  Bedroom: {
    background: '#FDFAD9',
    color: '#928F79'
  },
  Outdoor: {
    background: '#C5B3AA',
    color: '#5F524C'
  },
  Kitchen: {
    background: '#CBCBCD',
    color: '#737373'
  }
};

const TopicTag = ({
  name,
  underline
}) => {
  const tagColor = topicTagsColorMatrix[name] || null;

  if (underline) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Tag, {
      className: "tag",
      underline: true,
      style: tagColor && {
        borderBottomColor: tagColor.background,
        borderBottomWidth: 3,
        borderBottomStyle: 'solid'
      },
      children: name
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Tag, {
    className: "tag",
    style: tagColor && _objectSpread({}, tagColor),
    children: name
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicTag);

/***/ }),

/***/ 348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var _crystallize_react_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7047);
/* harmony import */ var _crystallize_react_video__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_crystallize_react_video__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function VideoPlayer(args) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_crystallize_react_video__WEBPACK_IMPORTED_MODULE_0__.Video, _objectSpread({}, args));
}

/***/ }),

/***/ 3123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`
  fragment product on Product {
    id
    language
    vatType {
      name
      percent
    }
    isVirtual
    isSubscriptionOnly
    variants {
      id
      name
      sku
      priceVariants {
        identifier
        price
        currency
      }
      stock
      isDefault
      attributes {
        attribute
        value
      }
      images {
        url
        altText
        variants {
          url
          width
          height
        }
      }
    }
  }

  fragment item on Item {
    id
    name
    type
    path
    language
    shape {
      name
    }
    components {
      name
      type
      meta {
        key
        value
      }
      content {
        ...singleLine
        ...richText
        ...imageContent
        ...videoContent
        ...paragraphCollection
        ...itemRelations
        ...gridRelations
        ...propertiesTableContent
        ...dateTimeContent
        ...choiceComponent
      }
    }
  }

  fragment singleLine on SingleLineContent {
    text
  }

  fragment richText on RichTextContent {
    json
  }

  fragment image on Image {
    url
    altText
    caption {
      plainText
      html
    }
    variants {
      url
      width
      height
    }
  }

  fragment video on Video {
    title
    playlists
    thumbnails {
      key
      url
      variants {
        url
        width
      }
    }
  }

  fragment imageContent on ImageContent {
    images {
      ...image
    }
  }

  fragment videoContent on VideoContent {
    videos {
      ...video
    }
  }

  fragment paragraphCollection on ParagraphCollectionContent {
    paragraphs {
      title {
        ...singleLine
      }
      body {
        ...richText
      }
      images {
        ...image
      }
    }
  }

  fragment itemRelations on ItemRelationsContent {
    items {
      id
      name
      path
      type
      shape {
        name
        id
      }
      topics {
        id
        name 	
      }
      ... on Product {
        variants {
          priceVariants {
            identifier
            price
            currency
          }
          isDefault
          name
          images {
            ...image
          }
        }
      }
      components {
        name
        type
        content {
          ...singleLine
          ...richText
          ...imageContent
          ...videoContent
          ...gridRelations
          ...choiceComponent
          ... on BooleanContent {
            value
          }
          ... on ItemRelationsContent {
            items {
              id
              name
              type
              path
              ... on Item {
                components {
                  name
                  type
                  meta {
                    key
                    value
                  }
                  content {
                    ...singleLine
                    ...richText
                    ...imageContent
                    ...videoContent
                    ...choiceComponent
                  }
                }
              }
              ... on Product {
                variants {
                  priceVariants {
                    identifier
                    price
                    currency
                  }
                  isDefault
                  name
                  images {
                    ...image
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment gridRelations on GridRelationsContent {
    grids {
      name
      rows {
        columns {
          layout {
            rowspan
            colspan
          }
          itemType
          itemId
          item {
            id
            name
            path
            type
            language
            ... on Product {
              variants {
                id
                name
                sku
                priceVariants {
                  identifier
                  price
                  currency
                }
                stock
                isDefault
                attributes {
                  attribute
                  value
                }
                image {
                  url
                  altText
                  variants {
                    url
                    width
                    height
                  }
                }
              }
              defaultVariant {
                priceVariants {
                  identifier
                  price
                  currency
                }
                isDefault
                name
                images {
                  ...image
                }
              }
            }
            components {
              name
              type
              content {
                ...imageContent
                ...videoContent
              }
            }
          }
        }
      }
    }
  }

  fragment propertiesTableContent on PropertiesTableContent {
    sections {
      title
      properties {
        key
        value
      }
    }
  }
   fragment choiceComponent on ComponentChoiceContent {
    selectedComponent {
      name
      type
      content {
        ...gridRelations
        ...on ItemRelationsContent {
          items {
            id
            name
            path
            type
            shape {
              name
              id
            }
            topics {
              id
              name 	
            }
            ... on Product {
              variants {
                priceVariants {
                  identifier
                  price
                  currency
                }
                isDefault
                name
                images {
                  ...image
                }
              }
            }
            components {
              name
              type
              content {
                ...singleLine
                ...richText
                ...imageContent
                ...videoContent
                ...gridRelations
                ... on BooleanContent {
                  value
                }
              }
            }
          }
        }
      }
    }
  }

  fragment dateTimeContent on DatetimeContent {
    datetime
  }
`);

/***/ }),

/***/ 4175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getRelativePriceVariants)
/* harmony export */ });
function getRelativePriceVariants({
  variant,
  locale
}) {
  var _variant$priceVariant, _variant$priceVariant2;

  const defaultPrice = (variant === null || variant === void 0 ? void 0 : (_variant$priceVariant = variant.priceVariants) === null || _variant$priceVariant === void 0 ? void 0 : _variant$priceVariant.find(pv => pv.identifier === locale.crystallizePriceVariant)) || {}; // Get price variant with identifier "sales" from Crystallize

  const discountPrice = (variant === null || variant === void 0 ? void 0 : (_variant$priceVariant2 = variant.priceVariants) === null || _variant$priceVariant2 === void 0 ? void 0 : _variant$priceVariant2.find(pv => pv.identifier === 'sales' && pv.currency === (defaultPrice === null || defaultPrice === void 0 ? void 0 : defaultPrice.currency))) || null;
  const discountPercentage = 100 * (discountPrice === null || discountPrice === void 0 ? void 0 : discountPrice.price) / (defaultPrice === null || defaultPrice === void 0 ? void 0 : defaultPrice.price);
  return {
    defaultPrice,
    discountPrice: discountPrice,
    discountPercentage: isNaN(discountPercentage) ? 0 : 100 - Math.round(discountPercentage)
  };
}

/***/ }),

/***/ 8069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q9": () => (/* binding */ isSumaryComponent),
/* harmony export */   "uy": () => (/* binding */ isDescriptionComponent),
/* harmony export */   "SS": () => (/* binding */ isSpecsComponent),
/* harmony export */   "Nf": () => (/* binding */ isRelatedProductsComponent),
/* harmony export */   "lm": () => (/* binding */ findDefaultVariant)
/* harmony export */ });
function isSumaryComponent({
  name
}) {
  return name === 'Summary';
}
function isDescriptionComponent({
  name
}) {
  return name === 'Description';
}
function isSpecsComponent({
  name
}) {
  return name === 'Specs';
}
function isRelatedProductsComponent({
  name
}) {
  return name === 'Related products';
}
function findDefaultVariant(variants) {
  return variants === null || variants === void 0 ? void 0 : variants.find(variant => variant.isDefault);
}

/***/ }),

/***/ 9006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StyledContentTransformer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _crystallize_react_content_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7542);
/* harmony import */ var _crystallize_react_content_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_crystallize_react_content_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * An example of how to override the rendering
 * of a link node
 */


const commonTransfomerOverrides = {
  link(props) {
    const {
      href
    } = props.metadata;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
      className: "fancy-link",
      href: href,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_crystallize_react_content_transformer__WEBPACK_IMPORTED_MODULE_2__.NodeContent, _objectSpread({}, props))
    });
  }

};
const ContentTransformerOuter = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "content-transformer__ContentTransformerOuter",
  componentId: "sc-1y4mgem-0"
})(["font-size:var(--font-size-body);color:var(--color-text-main);line-height:1.8em;p,h2{margin:0 auto;padding-top:0;text-align:left;&:empty{display:none;}}p,li{&:empty{display:none;}}ul{margin:1rem 0;padding-left:1.2rem;li{margin-bottom:0.5rem;}}p{margin:2em 0 0;&:first-child{margin-top:0;}}pre{margin-left:calc(-0.5 * var(--content-padding));width:calc(100% + var(--content-padding));box-shadow:rgba(0,0,0,0.05) 2px 1px 1px;line-height:1.6;padding:25px 50px;background:rgb(243,244,246);border-radius:5px;overflow:auto;}blockquote{padding-left:2em;font-size:var(--font-size-l);font-style:italic;position:relative;display:flex;line-height:140%;max-width:800px;align-items:center;margin:3em 0;color:var(--color-blockquote);&:empty{display:none;}&:after{left:0;top:20px;font-size:3em;position:absolute;content:open-quote;}}"]);
function StyledContentTransformer({
  json
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ContentTransformerOuter, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_crystallize_react_content_transformer__WEBPACK_IMPORTED_MODULE_2__.ContentTransformer, {
      json: json,
      overrides: commonTransfomerOverrides
    })
  });
}

/***/ })

};
;