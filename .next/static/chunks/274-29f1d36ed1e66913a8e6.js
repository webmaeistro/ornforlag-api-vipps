"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{6537:function(e,t,n){n.d(t,{Z:function(){return U}});var r,i,o,a=n(2809),l=n(219),s=(n(7294),n(9163)),d=n(9006),c=n(5617),u=n(2209),p=n(9366),f=s.default.div.withConfig({displayName:"styles__Paragraphs",componentId:"sc-yh4vjo-0"})([""]),m=s.default.div.withConfig({displayName:"styles__Outer",componentId:"sc-yh4vjo-1"})(["margin:0;grid-template-areas:'content content content content . media media media media media media media ';&:nth-child(even){grid-template-areas:'media media media media media media . content content content content content';}",";",";"],(0,p.Ym)("$text")(r||(r=(0,u.Z)(["\n    grid-template-areas: 'media media media media media media media media media media media media' ;\n  "]))),(0,p.Ym)("$media")(i||(i=(0,u.Z)(["\n    grid-template-areas: '. . . . content content content content . . . .';\n  "])))),v=s.default.div.withConfig({displayName:"styles__Title",componentId:"sc-yh4vjo-2"})(["margin:1em 0;"]),h=s.default.div.withConfig({displayName:"styles__Body",componentId:"sc-yh4vjo-3"})(["margin:1em 0;"]),g=s.default.div.withConfig({displayName:"styles__Text",componentId:"sc-yh4vjo-4"})(["grid-area:content;margin-bottom:100px;"]),j=s.default.div.withConfig({displayName:"styles__Media",componentId:"sc-yh4vjo-5"})(["grid-area:media;margin-bottom:100px;"]),y=n(3343),b=n(5893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=s.default.div.withConfig({displayName:"images__Outer",componentId:"sc-28fgdl-0"})(["margin:0 0 2em;"]),P=s.default.div.withConfig({displayName:"images__ImgContainer",componentId:"sc-28fgdl-1"})(["border:4px solid #fff;width:50%;max-width:100%;flex-grow:1;position:relative;figure{height:100%;}img{object-fit:cover;overflow:hidden;width:100%;height:100%;border:1px solid #dfdfdf;}"," &:first-child{width:100%;}"],(0,p.ZP)("portrait")(o||(o=(0,u.Z)(["\n    width:33.333%;\n    max-width:50%;\n  "])))),_=s.default.div.withConfig({displayName:"images__List",componentId:"sc-28fgdl-2"})(["display:flex;flex-wrap:wrap;margin-bottom:100px;> picture{min-height:300px;","{min-height:100px;}&:nth-child(3n){grid-column-start:span 2;}}img{display:block;height:100%;width:100%;object-fit:cover;}"],c.jW.xs);function C(e){var t=e.images;return t&&0!==t.length?1===t.length?(0,b.jsx)(w,{children:(0,b.jsx)(y.Image,O(O({},t[0]),{},{sizes:"80vw"}))}):(0,b.jsx)(w,{children:(0,b.jsx)(_,{children:t.map((function(e,t){var n,r,i;return(0,b.jsx)(P,{portrait:(null===e||void 0===e||null===(n=e.variants)||void 0===n?void 0:n[0].height)>=(null===e||void 0===e||null===(r=e.variants)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.width),children:(0,b.jsx)(y.Image,O(O({},e),{},{sizes:"80vw"}))},t)}))})}):null}var Z=n(348);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=s.default.div.withConfig({displayName:"videos__Outer",componentId:"sc-ba6utv-0"})(["margin:0 0 2em;"]),S=s.default.div.withConfig({displayName:"videos__List",componentId:"sc-ba6utv-1"})([""]);function k(e){var t=e.videos;return t&&0!==t.length?1===t.length?(0,b.jsx)(D,{children:(0,b.jsx)(Z.Z,N({},t[0]))}):(0,b.jsx)(D,{children:(0,b.jsx)(S,{children:t.map((function(e,t){return(0,b.jsx)("div",{style:{margin:"0 0 2em"},children:(0,b.jsx)(Z.Z,N({},e))},t)}))})}):null}var E=function(e){var t,n=e.body,r=e.title,i=e.images,o=e.videos,a=e.headingComponent,l=void 0===a?c.H3:a,s=!(null===n||void 0===n||null===(t=n.json)||void 0===t||!t.length),u=!!i||!!o;return(0,b.jsxs)(m,{$media:u,$text:s,children:[(0,b.jsxs)(g,{children:[!!r&&r.text&&(0,b.jsx)(v,{children:(0,b.jsx)(l,{children:r.text})}),s&&(0,b.jsx)(h,{children:(0,b.jsx)(d.Z,{json:n.json})})]}),u&&(0,b.jsxs)(j,{children:[(0,b.jsx)(C,{images:i}),(0,b.jsx)(k,{videos:o})]})]})};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var z=function(e){var t=e.paragraphs;return t?(0,b.jsx)(f,{children:t.map((function(e,t){return(0,b.jsx)(E,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),t)}))}):null},W=s.default.div.withConfig({displayName:"properties-table__Section",componentId:"sc-5h8bj8-0"})(["margin:3em 0;h3{margin:0 0 0.5em 0;font-size:var(--font-size-l);}"]),q=s.default.div.withConfig({displayName:"properties-table__PropertiesOuter",componentId:"sc-5h8bj8-1"})(["overflow:hidden;border-bottom:1px solid #dfdfdf;"]),H=s.default.table.withConfig({displayName:"properties-table__Properties",componentId:"sc-5h8bj8-2"})(["width:100%;border-collapse:collapse;td{width:50%;padding:1em 0;border:0px solid #dfdfdf;&.key{width:30%;font-weight:600;}&.value{width:70%;}}tr:not(:first-child) td{border-top-width:1px;}"]);function L(e){var t=e.sections;return(0,b.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,b.jsxs)(W,{children:[(0,b.jsx)(c.H3,{children:e.title}),(0,b.jsx)(q,{children:(0,b.jsx)(H,{children:(0,b.jsx)("tbody",{children:e.properties.map((function(e,t){return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"key",children:e.key}),(0,b.jsx)("td",{className:"value",children:e.value})]},t)}))})})})]},t)}))})}var T=n(8198);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=s.default.ul.withConfig({displayName:"item-relations__Outer",componentId:"sc-1oszmij-0"})(["display:grid;list-style:none;margin:0;padding:0;grid-gap:20px;","{grid-template-columns:1fr 1fr;}","{grid-template-columns:repeat(4,1fr);}"],c.jW.sm,c.jW.mdPlus),Y=s.default.li.withConfig({displayName:"item-relations__ListItem",componentId:"sc-1oszmij-1"})([""]);function F(e){var t=e.items;return t?(0,b.jsx)(R,{children:t.map((function(e){return(0,b.jsx)(Y,{children:(0,b.jsx)(T.Z,B({},e))},e.id)}))}):null}var G=n(3950);function M(e){var t=e.grids;return t?t.map((function(e,t){return(0,b.jsx)(G.Z,{model:e,cellComponent:function(e){var t=e.cell;return(0,b.jsx)(G.P,{data:t.item,gridCell:t})}},t)})):null}var V=["type"];function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=s.default.div.withConfig({displayName:"components__ContentOuter",componentId:"sc-6sjj6s-0"})(["margin:0em 0;","{margin:0;}"],c.jW.xs),U=function(e){var t=e.components,n=void 0===t?[]:t,r=e.overrides;return n&&Array.isArray(n)?(0,b.jsx)("div",{children:n.filter((function(e){return null!=(null===e||void 0===e?void 0:e.content)})).map((function(e,t){var n,i=e.type,o=(0,l.Z)(e,V),a=t;return r&&r[o.name]&&(n=r[o.name]),"paragraphCollection"===i?o.content.paragraphs?(n=n||z,(0,b.jsx)(n,{paragraphs:o.content.paragraphs},a)):null:"images"===i?o.content&&o.content.images?(0,b.jsx)(C,{images:o.content.images},a):null:"videos"===i?o.content&&o.content.videos?(0,b.jsx)(k,{videos:o.content.videos},a):null:"richText"===i?o.content.json?(n=n||"div",(0,b.jsx)(Q,{children:(0,b.jsx)(n,{children:(0,b.jsx)(d.Z,{json:o.content.json})})},a)):null:"singleLine"===i?(n=n||"div",(0,b.jsx)(Q,{children:(0,b.jsx)(n,{children:o.content.text})},a)):"propertiesTable"===i?(n=n||L,(0,b.jsx)(Q,{children:(0,b.jsx)(n,K({},o.content))},a)):"itemRelations"===i?(n=n||F,(0,b.jsx)(n,{items:o.content.items},a)):"gridRelations"===i?(n=n||M,(0,b.jsx)(n,{grids:o.content.grids},a)):(0,b.jsx)("span",{},a)}))}):null}},2274:function(e,t,n){n.d(t,{Z:function(){return $},Y:function(){return E}});n(7294);var r=n(3789),i=n(3950),o=n(8198),a=n(9163),l=n(5617),s=(a.default.h1.withConfig({displayName:"styles__H1",componentId:"sc-1r1s5sq-0"})([""]),(0,a.default)(l.mI).withConfig({displayName:"styles__Outer",componentId:"sc-1r1s5sq-1"})(["min-height:initial;","{max-width:var(--content-max-width);}"],l.jW.mdPlus)),d=a.default.div.withConfig({displayName:"styles__List",componentId:"sc-1r1s5sq-2"})(["display:grid;grid-template-columns:1fr;grid-auto-rows:minmax(250px,auto);","{grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-rows:minmax(300px,auto);}"],l.jW.smPlus),c=a.default.div.withConfig({displayName:"styles__SubNavigation",componentId:"sc-1r1s5sq-3"})(["display:flex;flex-wrap:wrap;padding-bottom:50px;margin-bottom:100px;","{flex-wrap:nowrap;overflow:scroll;padding-left:25px;padding-top:5px;padding-bottom:10px;position:relative;}"],l.jW.xs),u=a.default.div.withConfig({displayName:"styles__Item",componentId:"sc-1r1s5sq-4"})(["&.item-product{grid-column-end:span 1;}&.item-document{grid-column-end:span 2;}"]),p=n(1930),f=n(1964),m=n(6537),v=n(6381),h=n(5893);function g(){return(0,h.jsx)(v.Z,{title:"Homepage",children:(0,h.jsxs)(s,{children:[(0,h.jsx)(f.Z,{title:"Welcome \ud83e\udd73"}),(0,h.jsxs)("div",{style:{fontSize:"var(--font-size-s)"},children:[(0,h.jsx)("p",{children:"To show a Crystallize catalogue item here, you can do the following:"}),(0,h.jsxs)("ol",{children:[(0,h.jsx)("li",{children:'Create an item with the path of "/frontpage-2021"'}),(0,h.jsx)("li",{children:"Pull in a different item by changing /pages/index.js"}),(0,h.jsx)("li",{children:"Create something completely custom \ud83c\udf89 "})]})]})]})})}var j=n(2809),y=n(266),b=n(809),x=n.n(b),O=n(6712),w=n(3123),P="\n  query FOLDER_PAGE($language: String!, $path: String, $version: VersionLabel!) {\n    folder: catalogue(language: $language, path: $path, version: $version) {\n      ...item\n\n      children {\n        ...item\n        ...product\n      }\n    }\n  }\n\n  ".concat(w.Z,"\n");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(){return(Z=(0,y.Z)(x().mark((function e(t){var n,r,i,o,a,l;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.asPath,r=t.language,i=t.preview,o=void 0===i?null:i,e.next=3,(0,O.dY)({query:P,variables:{path:n,language:r,version:o?"draft":"published"}});case 3:return a=e.sent,l=a.data,e.abrupt("return",C(C({},l),{},{preview:o}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){var t,n,r;return(null===e||void 0===e||null===(t=e.components)||void 0===t||null===(n=t.find((function(e){return"Title"===e.name})))||void 0===n||null===(r=n.content)||void 0===r?void 0:r.text)||e.name}function N(e){var t,n,a,l,v,j,y,b=e.folder,x=e.hideHeader;if(!b)return(0,h.jsx)(g,{});var O=b.children,w=b.components,P=null===w||void 0===w||null===(t=w.filter((function(e){return"gridRelations"===e.type})))||void 0===t?void 0:t.reduce((function(e,t){var n;return[].concat((0,r.Z)(e),(0,r.Z)((null===t||void 0===t||null===(n=t.content)||void 0===n?void 0:n.grids)||[]))}),[]),_=null===w||void 0===w||null===(n=w.find((function(e){return"Brief"===e.name})))||void 0===n||null===(a=n.content)||void 0===a?void 0:a.json,C=null===w||void 0===w||null===(l=w.find((function(e){return"Stackable content"===e.name})))||void 0===l||null===(v=l.content)||void 0===v?void 0:v.items,Z=null===(j=b.components)||void 0===j?void 0:j.filter((function(e){return"Body"===e.name})),N=null===O||void 0===O?void 0:O.filter(D),S=Boolean(null===N||void 0===N?void 0:N.length),k=(null===P||void 0===P?void 0:P.length)>0;return(0,h.jsxs)(s,{children:[!x&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Z,{title:I(b),description:_}),S&&(0,h.jsx)(c,{children:N.map((function(e,t){return(0,h.jsx)(o.Z,{item:e},t)}))})]}),(null===Z||void 0===Z?void 0:Z.length)>0&&(0,h.jsx)(m.Z,{components:Z}),k&&P.map((function(e,t){return(0,h.jsx)(i.Z,{model:e,cellComponent:function(e){var t=e.cell;return(0,h.jsx)(i.P,{data:t.item,gridCell:t})}},t)})),(0,h.jsx)(p.Z,{stacks:C}),(0,h.jsx)(d,{children:null===O||void 0===O||null===(y=O.filter((function(e){return!D(e)})))||void 0===y?void 0:y.map((function(e,t){return(0,h.jsx)(u,{className:"item-".concat(null===e||void 0===e?void 0:e.type),children:(0,h.jsx)(o.Z,{item:e})},t)}))})]})}function D(e){return"folder"===e.type}var S=n(1039),k=n.n(S),E=function(e){return Z.apply(this,arguments)};function $(e){var t,n,r,i,o,a=e.folder,l=e.preview,s=e.hidePageHeader;if(!a)return(0,h.jsx)(g,{});var d=a.components,c=I(a),u=null===d||void 0===d||null===(t=d.find((function(e){return"Brief"===e.name})))||void 0===t||null===(n=t.content)||void 0===n?void 0:n.json,p=null===d||void 0===d?void 0:d.find((function(e){return"Icon"===e.name}));return(0,h.jsx)(v.Z,{title:c,description:k()(u),image:null===p||void 0===p||null===(r=p.content)||void 0===r||null===(i=r.images)||void 0===i||null===(o=i[0])||void 0===o?void 0:o.url,preview:l,children:(0,h.jsx)(N,{folder:a,hideHeader:s})})}},3789:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(6586);var i=n(6988);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);