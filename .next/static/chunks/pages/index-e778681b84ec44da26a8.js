(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{149:function(e,t,n){const r=n(5826);function a(e){return e?e.replace(/^\r|\n/,"").replace(/\r|\n$/,""):""}e.exports=function(e){function t(e){if(!e)return"";let n="";e.children&&(n=e.children.reduce(((e,n)=>e+t(n)),""));let r="";return r+=e.textContent||n||"","block"===e.kind&&(r=`\n${r}\n`),r}return r(e)?a(e.map(t).join("")):a(t(e))}},1039:function(e,t,n){e.exports=n(149)},2660:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";var r=n(3);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,l){if(l!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(0),l=n.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){var t=e.cellComponent,n=e.cells,r=e.children,o=e.totalColSpan,l=void 0===o?4:o,i=e.style,s=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["cellComponent","cells","children","totalColSpan","style"]),f=t;return a.a.createElement("div",c({style:u({display:"grid",gridTemplateColumns:"repeat(".concat(l,", 1fr)")},i),className:"crystallize-grid crystallize-grid--css-grid"},s),r?r({cells:n,totalColSpan:l}):n.map((function(e,t){return a.a.createElement("div",{key:"cell-".concat(t),className:"crystallize-grid__cell",style:{gridColumn:"span ".concat(e.layout.colspan),gridRow:"span ".concat(e.layout.rowspan)}},a.a.createElement(f,{cell:e,totalColSpan:l}))})))};f.propTypes={cellComponent:l.a.oneOfType([l.a.node,l.a.func]),cells:l.a.arrayOf(l.a.object).isRequired,children:l.a.func,totalColSpan:l.a.number};var p=f;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e){var t=e.cellComponent,n=e.children,r=e.rows,o=e.totalColSpan,l=void 0===o?4:o,c=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["cellComponent","children","rows","totalColSpan"]),i=t;return a.a.createElement("table",d({className:"crystallize-grid crystallize-grid--table"},c),a.a.createElement("thead",null,a.a.createElement("tr",null,new Array(l).fill(0).map((function(e,t){return a.a.createElement("th",{key:"th-".concat(t)})})))),a.a.createElement("tbody",null,n?n({rows:r,totalColSpan:l}):r.map((function(e,t){return a.a.createElement("tr",{key:"row-".concat(t)},e.columns.map((function(e,n){return a.a.createElement("td",{key:"cell-".concat(t,"-").concat(n),className:"crystallize-grid__cell",rowSpan:e.layout.rowspan,colSpan:e.layout.colspan},a.a.createElement(i,{cell:e,totalColSpan:l}))})))}))))};m.propTypes={cellComponent:l.a.oneOfType([l.a.node,l.a.func]),children:l.a.func,rows:l.a.arrayOf(l.a.object),totalColSpan:l.a.number};var y=m;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"CSSGrid",(function(){return p})),n.d(t,"Table",(function(){return y}));var b=function(e){var t=e.cellComponent,n=e.children,r=e.model,o=e.type,l=void 0===o?"grid":o,c=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["cellComponent","children","model","type"]);if(!t&&!n)return console.error("@crystallize/grid-renderer: missing \xb4cellComponent` or children function"),null;var i=r.rows;if(!i.length)return null;var u=function(e){return{totalColSpan:e[0].columns.reduce((function(e,t){return e+t.layout.colspan}),0)}}(i).totalColSpan;if("table"===l)return a.a.createElement(y,v({cellComponent:t,rows:i,totalColSpan:u},c),n);var s=i.map((function(e){return e.columns})),f=[].concat.apply([],s);return a.a.createElement(p,v({cellComponent:t,cells:f,totalColSpan:u},c),n)};b.propTypes={cellComponent:l.a.oneOfType([l.a.node,l.a.func]),children:l.a.func,model:l.a.oneOfType([l.a.object,l.a.arrayOf(l.a.object)]).isRequired,type:l.a.string},t.default=b}])},4124:function(e,t,n){"use strict";e.exports=n(9582)},9582:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r,l={link:function(e){var t;return o.createElement("a",{href:null==(t=e.metadata)?void 0:t.href},o.createElement(i,Object.assign({},e)))},"unordered-list":function(e){return o.createElement("ul",null,o.createElement(i,Object.assign({},e)))},"ordered-list":function(e){return o.createElement("ol",null,o.createElement(i,Object.assign({},e)))},list:function(e){return o.createElement("ul",null,o.createElement(i,Object.assign({},e)))},"list-item":function(e){return o.createElement("li",null,o.createElement(i,Object.assign({},e)))},quote:function(e){return o.createElement("block"===e.kind?"blockquote":"q",null,o.createElement(i,Object.assign({},e)))},paragraph:function(e){return o.createElement("p",null,o.createElement(i,Object.assign({},e)))},preformatted:function(e){return o.createElement("pre",null,o.createElement(i,Object.assign({},e)))},code:function(e){return o.createElement("code",null,o.createElement(i,Object.assign({},e)))},underlined:function(e){return o.createElement("u",null,o.createElement(i,Object.assign({},e)))},strong:function(e){return o.createElement("strong",null,o.createElement(i,Object.assign({},e)))},emphasized:function(e){return o.createElement("em",null,o.createElement(i,Object.assign({},e)))},div:function(e){return o.createElement("div",null,o.createElement(i,Object.assign({},e)))},span:function(e){return o.createElement(i,Object.assign({},e))},"line-break":function(){return o.createElement("br",null)}},c=a.createContext(null),i=function(e){var t=e.textContent;return t?u(t):e.children?o.createElement(a.Fragment,null,e.children.map((function(e,t){return o.createElement(s,Object.assign({key:t},e))}))):null};function u(e){var t=e.split(/\n/g);return o.createElement(a.Fragment,null,1===t.length?e:t.map((function(e,n){var r=n.toString();return n===t.length-1?o.createElement(a.Fragment,{key:r},"part"):o.createElement(a.Fragment,{key:r},e,o.createElement("br",null))})))}var s=function(e){var t=l.span,n=a.useContext(c),r=e.type,i=e.textContent;if(r&&(t=(null==n?void 0:n[r])||l[r]),!t)if(t=l.span,"container"===r&&"block"===e.kind)t=l.div;else if(null===r&&i)return u(i);return o.createElement(t,Object.assign({},e))};t.ContentTransformer=function(e){var t=e.overrides,n=void 0===t?null:t,r=e.json;return r?Array.isArray(r)?o.createElement(c.Provider,{value:n},r.map((function(e,t){return o.createElement(s,Object.assign({key:t},e))}))):o.createElement(c.Provider,{value:n},o.createElement(s,Object.assign({},r))):null},t.NodeContent=i},7879:function(e,t,n){"use strict";e.exports=n(5119)},5119:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r,l=n(3343),c=!1,i=!1;t.Video=function(e){var t=e.playlists,n=e.thumbnails,r=e.thumbnailProps,u=e.videoProps,s=e.autoPlay,f=e.loop,p=void 0!==f&&f,d=e.muted,m=void 0!==d&&d,y=e.controls,v=void 0===y||y,b=e.poster,g=e.playButtonText,h=void 0===g?"Play video":g,O=e.className,E=a.useState(!0),j=E[0],w=E[1],S=a.useState(!1),C=S[0],_=S[1],P=a.useState(!1),x=P[0],k=P[1],T=a.useRef(null);a.useEffect((function(){if(s){var e=navigator.connection;e&&e.saveData||_(!0)}}),[]),a.useEffect((function(){if(C&&!x){var e=T.current;if(!e)throw new Error("Cannot initialize video. Unable to find the video HTML node");e.addEventListener("playing",(function(){return w(!1)}),{once:!0});var n=function(){try{var e=navigator.connection;return e.downlink>=5&&!e.saveData}catch(e){return!1}}();if(a="WebKitMediaSource"in window,o="MediaSource"in window,a||o)new Promise((function(e){if(!c){var t=document.createElement("script");t.src="https://cdn.dashjs.org/latest/dash.all.min.js",t.defer=!0,document.head.appendChild(t),c=!0}!function t(){"dashjs"in window?e(window.dashjs):setTimeout(t,10)}()})).then((function(r){var a=t.find((function(e){return e.endsWith(".mpd")}));if(!a)throw new Error("Cannot find a valid Dash source for video");var o=r.MediaPlayer().create();o.initialize(),o.updateSettings({debug:{logLevel:r.Debug.LOG_LEVEL_NONE},streaming:{scheduleWhilePaused:!1,fastSwitchEnabled:!0,abr:{usePixelRatioInLimitBitrateByPortal:!0,initialBitrate:{audio:-1,video:n?5e3:-1}}}}),o.setAutoPlay(!0),o.attachView(e),o.attachSource(a),k(!0)}));else{var r=t.find((function(e){return e.endsWith(".m3u8")}));if(!r)throw new Error("Cannot find a valid HLS source for video");e.canPlayType("application/vnd.apple.mpegurl")?(e.autoplay=!0,e.src=r,k(!0)):new Promise((function(e){if(!i){var t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/hls.js@latest",t.defer=!0,document.head.appendChild(t),i=!0}!function t(){"Hls"in window?e(window.Hls):setTimeout(t,10)}()})).then((function(t){t.loadSource(r),t.attachMedia(e),k(!0)}))}}var a,o}),[C]);var N={zIndex:j?2:1,opacity:j?1:0},z=b||function(e){if(e&&e.length>0){var t=e[0].variants.filter((function(e){return!e.url.endsWith(".webp")&&!e.url.endsWith(".avif")}));return t.filter((function(e){return e.width>500})).sort((function(e,t){return e.width-t.width}))[0].url||t[0].url}}(n);return o.createElement("div",{className:"react-video"+(O?" "+O:""),style:{position:"relative"}},n&&n.length>0?o.createElement(l.Image,Object.assign({},n[0],{className:"react-video__thumbnail"},r,{style:N})):o.createElement("div",{className:"react-video__thumbnail-placeholder",style:N}),!C&&o.createElement("button",{className:"react-video__play-btn",onClick:function(e){e.preventDefault(),_(!0)}},h,o.createElement("svg",{viewBox:"0 0 100 100",className:"react-video__play-icon"},o.createElement("path",{d:"M78.158 51.843L25.842 82.048c-1.418.819-3.191-.205-3.191-1.843v-60.41c0-1.638 1.773-2.661 3.191-1.843l52.317 30.205c1.418.819 1.418 2.867-.001 3.686z"}))),o.createElement("video",Object.assign({className:"react-video__video",ref:T,controls:v,playsInline:!0,muted:m,loop:p,poster:z,style:{opacity:x?1:0,zIndex:j?1:2}},u)))}},5826:function(e){var t={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},9666:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(2274),a=!0;t.default=r.Z},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9666)}])},1234:function(){}},function(e){e.O(0,[127,381,6,274,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);