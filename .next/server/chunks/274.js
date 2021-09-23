"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 6537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/ui/content-transformer.js
var content_transformer = __webpack_require__(9006);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
// EXTERNAL MODULE: external "styled-is"
var external_styled_is_ = __webpack_require__(6584);
var external_styled_is_default = /*#__PURE__*/__webpack_require__.n(external_styled_is_);
;// CONCATENATED MODULE: ./src/components/shape/components/paragraph-collection/styles.js

 // import { responsive } from 'ui';

const Paragraphs = external_styled_components_default().div.withConfig({
  displayName: "styles__Paragraphs",
  componentId: "sc-yh4vjo-0"
})([""]);
const Outer = external_styled_components_default().div.withConfig({
  displayName: "styles__Outer",
  componentId: "sc-yh4vjo-1"
})(["margin:0;grid-template-areas:'content content content content . media media media media media media media ';&:nth-child(even){grid-template-areas:'media media media media media media . content content content content content';}", ";", ";"], (0,external_styled_is_.isNot)('$text')`
    grid-template-areas: 'media media media media media media media media media media media media' ;
  `, (0,external_styled_is_.isNot)('$media')`
    grid-template-areas: '. . . . content content content content . . . .';
  `);
const Title = external_styled_components_default().div.withConfig({
  displayName: "styles__Title",
  componentId: "sc-yh4vjo-2"
})(["margin:1em 0;"]);
const Body = external_styled_components_default().div.withConfig({
  displayName: "styles__Body",
  componentId: "sc-yh4vjo-3"
})(["margin:1em 0;"]);
const Text = external_styled_components_default().div.withConfig({
  displayName: "styles__Text",
  componentId: "sc-yh4vjo-4"
})(["grid-area:content;margin-bottom:100px;"]);
const Media = external_styled_components_default().div.withConfig({
  displayName: "styles__Media",
  componentId: "sc-yh4vjo-5"
})(["grid-area:media;margin-bottom:100px;"]);
// EXTERNAL MODULE: external "@crystallize/react-image"
var react_image_ = __webpack_require__(5173);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/shape/components/images.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const images_Outer = external_styled_components_default().div.withConfig({
  displayName: "images__Outer",
  componentId: "sc-28fgdl-0"
})(["margin:0 0 2em;"]);
const ImgContainer = external_styled_components_default().div.withConfig({
  displayName: "images__ImgContainer",
  componentId: "sc-28fgdl-1"
})(["border:4px solid #fff;width:50%;max-width:100%;flex-grow:1;position:relative;figure{height:100%;}img{object-fit:cover;overflow:hidden;width:100%;height:100%;border:1px solid #dfdfdf;}", " &:first-child{width:100%;}"], external_styled_is_default()('portrait')`
    width:33.333%;
    max-width:50%;
  `);
const List = external_styled_components_default().div.withConfig({
  displayName: "images__List",
  componentId: "sc-28fgdl-2"
})(["display:flex;flex-wrap:wrap;margin-bottom:100px;> picture{min-height:300px;", "{min-height:100px;}&:nth-child(3n){grid-column-start:span 2;}}img{display:block;height:100%;width:100%;object-fit:cover;}"], ui/* responsive.xs */.jW.xs);
function Images({
  images
}) {
  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return /*#__PURE__*/jsx_runtime_.jsx(images_Outer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_image_.Image, _objectSpread(_objectSpread({}, images[0]), {}, {
        sizes: "80vw"
      }))
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(images_Outer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(List, {
      children: images.map((image, index) => {
        var _image$variants, _image$variants2, _image$variants2$;

        return /*#__PURE__*/jsx_runtime_.jsx(ImgContainer, {
          portrait: (image === null || image === void 0 ? void 0 : (_image$variants = image.variants) === null || _image$variants === void 0 ? void 0 : _image$variants[0].height) >= (image === null || image === void 0 ? void 0 : (_image$variants2 = image.variants) === null || _image$variants2 === void 0 ? void 0 : (_image$variants2$ = _image$variants2[0]) === null || _image$variants2$ === void 0 ? void 0 : _image$variants2$.width),
          children: /*#__PURE__*/jsx_runtime_.jsx(react_image_.Image, _objectSpread(_objectSpread({}, image), {}, {
            sizes: "80vw"
          }))
        }, index);
      })
    })
  });
}
// EXTERNAL MODULE: ./src/components/video-player.js
var video_player = __webpack_require__(348);
;// CONCATENATED MODULE: ./src/components/shape/components/videos.js
function videos_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function videos_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { videos_ownKeys(Object(source), true).forEach(function (key) { videos_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { videos_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function videos_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const videos_Outer = external_styled_components_default().div.withConfig({
  displayName: "videos__Outer",
  componentId: "sc-ba6utv-0"
})(["margin:0 0 2em;"]);
const videos_List = external_styled_components_default().div.withConfig({
  displayName: "videos__List",
  componentId: "sc-ba6utv-1"
})([""]);
function Videos({
  videos
}) {
  if (!videos || videos.length === 0) {
    return null;
  }

  if (videos.length === 1) {
    return /*#__PURE__*/jsx_runtime_.jsx(videos_Outer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(video_player/* default */.Z, videos_objectSpread({}, videos[0]))
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(videos_Outer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(videos_List, {
      children: videos.map((video, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          margin: '0 0 2em'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(video_player/* default */.Z, videos_objectSpread({}, video))
      }, index))
    })
  });
}
;// CONCATENATED MODULE: ./src/components/shape/components/paragraph-collection/paragraph.js








const Paragraph = ({
  body,
  title,
  images,
  videos,
  headingComponent: HeadingComponent = ui.H3
}) => {
  var _body$json;

  const hasText = !!(body !== null && body !== void 0 && (_body$json = body.json) !== null && _body$json !== void 0 && _body$json.length);
  const hasMedia = !!images || !!videos;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Outer, {
    $media: hasMedia,
    $text: hasText,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
      children: [!!title && title.text && /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: /*#__PURE__*/jsx_runtime_.jsx(HeadingComponent, {
          children: title.text
        })
      }), hasText && /*#__PURE__*/jsx_runtime_.jsx(Body, {
        children: /*#__PURE__*/jsx_runtime_.jsx(content_transformer/* default */.Z, {
          json: body.json
        })
      })]
    }), hasMedia && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Media, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Images, {
        images: images
      }), /*#__PURE__*/jsx_runtime_.jsx(Videos, {
        videos: videos
      })]
    })]
  });
};

/* harmony default export */ const paragraph_collection_paragraph = (Paragraph);
;// CONCATENATED MODULE: ./src/components/shape/components/paragraph-collection/index.js
function paragraph_collection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function paragraph_collection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { paragraph_collection_ownKeys(Object(source), true).forEach(function (key) { paragraph_collection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { paragraph_collection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function paragraph_collection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ParagraphCollection = ({
  paragraphs
}) => {
  if (!paragraphs) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Paragraphs, {
    children: paragraphs.map((paragraph, index) => /*#__PURE__*/jsx_runtime_.jsx(paragraph_collection_paragraph, paragraph_collection_objectSpread({}, paragraph), index))
  });
};

/* harmony default export */ const paragraph_collection = (ParagraphCollection);
;// CONCATENATED MODULE: ./src/components/shape/components/properties-table.js




const Section = external_styled_components_default().div.withConfig({
  displayName: "properties-table__Section",
  componentId: "sc-5h8bj8-0"
})(["margin:3em 0;h3{margin:0 0 0.5em 0;font-size:var(--font-size-l);}"]);
const PropertiesOuter = external_styled_components_default().div.withConfig({
  displayName: "properties-table__PropertiesOuter",
  componentId: "sc-5h8bj8-1"
})(["overflow:hidden;border-bottom:1px solid #dfdfdf;"]);
const Properties = external_styled_components_default().table.withConfig({
  displayName: "properties-table__Properties",
  componentId: "sc-5h8bj8-2"
})(["width:100%;border-collapse:collapse;td{width:50%;padding:1em 0;border:0px solid #dfdfdf;&.key{width:30%;font-weight:600;}&.value{width:70%;}}tr:not(:first-child) td{border-top-width:1px;}"]);
function PropertiesTable({
  sections
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: sections === null || sections === void 0 ? void 0 : sections.map((section, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui.H3, {
        children: section.title
      }), /*#__PURE__*/jsx_runtime_.jsx(PropertiesOuter, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Properties, {
          children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
            children: section.properties.map((property, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "key",
                children: property.key
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "value",
                children: property.value
              })]
            }, i))
          })
        })
      })]
    }, i))
  });
}
// EXTERNAL MODULE: ./src/components/listformat/index.js + 8 modules
var listformat = __webpack_require__(8198);
;// CONCATENATED MODULE: ./src/components/shape/components/item-relations.js
function item_relations_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function item_relations_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { item_relations_ownKeys(Object(source), true).forEach(function (key) { item_relations_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { item_relations_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function item_relations_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const item_relations_Outer = external_styled_components_default().ul.withConfig({
  displayName: "item-relations__Outer",
  componentId: "sc-1oszmij-0"
})(["display:grid;list-style:none;margin:0;padding:0;grid-gap:20px;", "{grid-template-columns:1fr 1fr;}", "{grid-template-columns:repeat(4,1fr);}"], ui/* responsive.sm */.jW.sm, ui/* responsive.mdPlus */.jW.mdPlus);
const ListItem = external_styled_components_default().li.withConfig({
  displayName: "item-relations__ListItem",
  componentId: "sc-1oszmij-1"
})([""]);
function ItemRelations({
  items
}) {
  if (!items) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(item_relations_Outer, {
    children: items.map(item => /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx(listformat/* default */.Z, item_relations_objectSpread({}, item))
    }, item.id))
  });
}
// EXTERNAL MODULE: ./src/components/grid/index.js + 1 modules
var components_grid = __webpack_require__(3950);
;// CONCATENATED MODULE: ./src/components/shape/components/grid-relations.js


function GridRelations({
  grids
}) {
  if (!grids) {
    return null;
  }

  return grids.map((grid, index) => /*#__PURE__*/jsx_runtime_.jsx(components_grid/* default */.Z, {
    model: grid,
    cellComponent: ({
      cell
    }) => /*#__PURE__*/jsx_runtime_.jsx(components_grid/* GridItem */.P, {
      data: cell.item,
      gridCell: cell
    })
  }, index));
}
;// CONCATENATED MODULE: ./src/components/shape/components/index.js
const _excluded = ["type"];

function components_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_ownKeys(Object(source), true).forEach(function (key) { components_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const ContentOuter = external_styled_components_default().div.withConfig({
  displayName: "components__ContentOuter",
  componentId: "sc-6sjj6s-0"
})(["margin:0em 0;", "{margin:0;}"], ui/* responsive.xs */.jW.xs);

const ShapeComponents = ({
  components = [],
  overrides
}) => {
  if (!components || !Array.isArray(components)) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: components.filter(component => (component === null || component === void 0 ? void 0 : component.content) != null).map((_ref, index) => {
      let {
        type
      } = _ref,
          component = _objectWithoutProperties(_ref, _excluded);

      const key = index;
      let Component; // Check for overrides

      if (overrides && overrides[component.name]) {
        Component = overrides[component.name];
      }

      if (type === 'paragraphCollection') {
        if (!component.content.paragraphs) {
          return null;
        }

        Component = Component || paragraph_collection;
        return /*#__PURE__*/jsx_runtime_.jsx(Component, {
          paragraphs: component.content.paragraphs
        }, key);
      }

      if (type === 'images') {
        if (!component.content || !component.content.images) {
          return null;
        }

        return /*#__PURE__*/jsx_runtime_.jsx(Images, {
          images: component.content.images
        }, key);
      }

      if (type === 'videos') {
        if (false) {}

        if (!component.content || !component.content.videos) {
          return null;
        }

        return /*#__PURE__*/jsx_runtime_.jsx(Videos, {
          videos: component.content.videos
        }, key);
      }

      if (type === 'richText') {
        if (!component.content.json) {
          return null;
        }

        Component = Component || 'div';
        return /*#__PURE__*/jsx_runtime_.jsx(ContentOuter, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, {
            children: /*#__PURE__*/jsx_runtime_.jsx(content_transformer/* default */.Z, {
              json: component.content.json
            })
          })
        }, key);
      }

      if (type === 'singleLine') {
        Component = Component || 'div';
        return /*#__PURE__*/jsx_runtime_.jsx(ContentOuter, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, {
            children: component.content.text
          })
        }, key);
      }

      if (type === 'propertiesTable') {
        Component = Component || PropertiesTable;
        return /*#__PURE__*/jsx_runtime_.jsx(ContentOuter, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, components_objectSpread({}, component.content))
        }, key);
      }

      if (type === 'itemRelations') {
        Component = Component || ItemRelations;
        return /*#__PURE__*/jsx_runtime_.jsx(Component, {
          items: component.content.items
        }, key);
      }

      if (type === 'gridRelations') {
        Component = Component || GridRelations;
        return /*#__PURE__*/jsx_runtime_.jsx(Component, {
          grids: component.content.grids
        }, key);
      }

      if (false) {}

      return /*#__PURE__*/jsx_runtime_.jsx("span", {}, key);
    })
  });
};

/* harmony default export */ const components = (ShapeComponents);

/***/ }),

/***/ 2274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ folder_FolderPage),
  "Y": () => (/* binding */ folder_getData)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/grid/index.js + 1 modules
var components_grid = __webpack_require__(3950);
// EXTERNAL MODULE: ./src/components/listformat/index.js + 8 modules
var listformat = __webpack_require__(8198);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/ui/index.js + 7 modules
var ui = __webpack_require__(5617);
;// CONCATENATED MODULE: ./src/shapes/folder/page/styles.js


const H1 = external_styled_components_default().h1.withConfig({
  displayName: "styles__H1",
  componentId: "sc-1r1s5sq-0"
})([""]);
const Outer = external_styled_components_default()(ui/* Outer */.mI).withConfig({
  displayName: "styles__Outer",
  componentId: "sc-1r1s5sq-1"
})(["min-height:initial;", "{max-width:var(--content-max-width);}"], ui/* responsive.mdPlus */.jW.mdPlus);
const List = external_styled_components_default().div.withConfig({
  displayName: "styles__List",
  componentId: "sc-1r1s5sq-2"
})(["display:grid;grid-template-columns:1fr;grid-auto-rows:minmax(250px,auto);", "{grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-rows:minmax(300px,auto);}"], ui/* responsive.smPlus */.jW.smPlus);
const SubNavigation = external_styled_components_default().div.withConfig({
  displayName: "styles__SubNavigation",
  componentId: "sc-1r1s5sq-3"
})(["display:flex;flex-wrap:wrap;padding-bottom:50px;margin-bottom:100px;", "{flex-wrap:nowrap;overflow:scroll;padding-left:25px;padding-top:5px;padding-bottom:10px;position:relative;}"], ui/* responsive.xs */.jW.xs);
const Item = external_styled_components_default().div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-1r1s5sq-4"
})(["&.item-product{grid-column-end:span 1;}&.item-document{grid-column-end:span 2;}"]);
// EXTERNAL MODULE: ./src/components/stackable.js + 2 modules
var stackable = __webpack_require__(1930);
// EXTERNAL MODULE: ./src/components/page-header.js
var page_header = __webpack_require__(1964);
// EXTERNAL MODULE: ./src/components/shape/components/index.js + 8 modules
var shape_components = __webpack_require__(6537);
// EXTERNAL MODULE: ./src/components/layout/index.js + 21 modules
var layout = __webpack_require__(6381);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/shapes/folder/page/components/folder-not-found/index.js





function FolderNotFound() {
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: "Homepage",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Outer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
        title: "Welcome \uD83E\uDD73"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          fontSize: 'var(--font-size-s)'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "To show a Crystallize catalogue item here, you can do the following:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ol", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Create an item with the path of \"/frontpage-2021\""
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Pull in a different item by changing /pages/index.js"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Create something completely custom \uD83C\uDF89 "
          })]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/lib/graph/index.js
var graph = __webpack_require__(6712);
// EXTERNAL MODULE: ./src/lib/graph/fragments.js
var fragments = __webpack_require__(3123);
;// CONCATENATED MODULE: ./src/shapes/folder/query.js

const QUERY_FOLDER = `
  query FOLDER_PAGE($language: String!, $path: String, $version: VersionLabel!) {
    folder: catalogue(language: $language, path: $path, version: $version) {
      ...item

      children {
        ...item
        ...product
      }
    }
  }

  ${fragments/* default */.Z}
`;
;// CONCATENATED MODULE: ./src/shapes/folder/get-data.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



async function getData({
  asPath,
  language,
  preview = null
}) {
  const {
    data
  } = await (0,graph/* simplyFetchFromGraph */.dY)({
    query: QUERY_FOLDER,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published'
    }
  });
  return _objectSpread(_objectSpread({}, data), {}, {
    preview
  });
}
;// CONCATENATED MODULE: ./src/shapes/folder/utils.js
function getFolderTitle(folder) {
  var _folder$components, _folder$components$fi, _folder$components$fi2;

  const title = folder === null || folder === void 0 ? void 0 : (_folder$components = folder.components) === null || _folder$components === void 0 ? void 0 : (_folder$components$fi = _folder$components.find(c => c.name === 'Title')) === null || _folder$components$fi === void 0 ? void 0 : (_folder$components$fi2 = _folder$components$fi.content) === null || _folder$components$fi2 === void 0 ? void 0 : _folder$components$fi2.text;
  return title || folder.name;
}
;// CONCATENATED MODULE: ./src/shapes/folder/page/index.js














function FolderPage({
  folder,
  hideHeader
}) {
  var _components$filter, _components$find, _components$find$cont, _components$find2, _components$find2$con, _folder$components, _children$filter;

  if (!folder) {
    return /*#__PURE__*/jsx_runtime_.jsx(FolderNotFound, {});
  }

  const {
    children,
    components
  } = folder;
  const gridRelations = components === null || components === void 0 ? void 0 : (_components$filter = components.filter(c => c.type === 'gridRelations')) === null || _components$filter === void 0 ? void 0 : _components$filter.reduce((acc, g) => {
    var _g$content;

    return [...acc, ...((g === null || g === void 0 ? void 0 : (_g$content = g.content) === null || _g$content === void 0 ? void 0 : _g$content.grids) || [])];
  }, []);
  const description = components === null || components === void 0 ? void 0 : (_components$find = components.find(c => c.name === 'Brief')) === null || _components$find === void 0 ? void 0 : (_components$find$cont = _components$find.content) === null || _components$find$cont === void 0 ? void 0 : _components$find$cont.json;
  const stacks = components === null || components === void 0 ? void 0 : (_components$find2 = components.find(c => c.name === 'Stackable content')) === null || _components$find2 === void 0 ? void 0 : (_components$find2$con = _components$find2.content) === null || _components$find2$con === void 0 ? void 0 : _components$find2$con.items;
  const body = (_folder$components = folder.components) === null || _folder$components === void 0 ? void 0 : _folder$components.filter(c => c.name === 'Body');
  const subFolders = children === null || children === void 0 ? void 0 : children.filter(isFolderType);
  const hasSubfolders = Boolean(subFolders === null || subFolders === void 0 ? void 0 : subFolders.length);
  const hasGridRelation = (gridRelations === null || gridRelations === void 0 ? void 0 : gridRelations.length) > 0;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Outer, {
    children: [!hideHeader && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
        title: getFolderTitle(folder),
        description: description
      }), hasSubfolders && /*#__PURE__*/jsx_runtime_.jsx(SubNavigation, {
        children: subFolders.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(listformat/* default */.Z, {
          item: item
        }, i))
      })]
    }), (body === null || body === void 0 ? void 0 : body.length) > 0 && /*#__PURE__*/jsx_runtime_.jsx(shape_components/* default */.Z, {
      components: body
    }), hasGridRelation && gridRelations.map((grid, index) => /*#__PURE__*/jsx_runtime_.jsx(components_grid/* default */.Z, {
      model: grid,
      cellComponent: ({
        cell
      }) => /*#__PURE__*/jsx_runtime_.jsx(components_grid/* GridItem */.P, {
        data: cell.item,
        gridCell: cell
      })
    }, index)), /*#__PURE__*/jsx_runtime_.jsx(stackable/* default */.Z, {
      stacks: stacks
    }), /*#__PURE__*/jsx_runtime_.jsx(List, {
      children: children === null || children === void 0 ? void 0 : (_children$filter = children.filter(c => !isFolderType(c))) === null || _children$filter === void 0 ? void 0 : _children$filter.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(Item, {
        className: `item-${item === null || item === void 0 ? void 0 : item.type}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(listformat/* default */.Z, {
          item: item
        })
      }, i))
    })]
  });
}

function isFolderType({
  type
}) {
  return type === 'folder';
}
// EXTERNAL MODULE: external "@crystallize/content-transformer/toText"
var toText_ = __webpack_require__(4880);
var toText_default = /*#__PURE__*/__webpack_require__.n(toText_);
;// CONCATENATED MODULE: ./src/page-components/folder/index.js






const folder_getData = getData;
function folder_FolderPage({
  folder,
  preview,
  hidePageHeader
}) {
  var _components$find, _components$find$cont, _icon$content, _icon$content$images, _icon$content$images$;

  if (!folder) {
    return /*#__PURE__*/jsx_runtime_.jsx(FolderNotFound, {});
  }

  const {
    components
  } = folder;
  const title = getFolderTitle(folder);
  const description = components === null || components === void 0 ? void 0 : (_components$find = components.find(c => c.name === 'Brief')) === null || _components$find === void 0 ? void 0 : (_components$find$cont = _components$find.content) === null || _components$find$cont === void 0 ? void 0 : _components$find$cont.json;
  const icon = components === null || components === void 0 ? void 0 : components.find(c => c.name === 'Icon');
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    title: title,
    description: toText_default()(description),
    image: icon === null || icon === void 0 ? void 0 : (_icon$content = icon.content) === null || _icon$content === void 0 ? void 0 : (_icon$content$images = _icon$content.images) === null || _icon$content$images === void 0 ? void 0 : (_icon$content$images$ = _icon$content$images[0]) === null || _icon$content$images$ === void 0 ? void 0 : _icon$content$images$.url,
    preview: preview,
    children: /*#__PURE__*/jsx_runtime_.jsx(FolderPage, {
      folder: folder,
      hideHeader: hidePageHeader
    })
  });
}

/***/ })

};
;