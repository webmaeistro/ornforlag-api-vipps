(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{6664:function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function o(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function i(e,t){return c(e)||u(e,t)||a(e,t)||l()}function c(e){if(Array.isArray(e))return e}function u(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}function a(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function m(){}m.resetWarningCache=d;var y=function(){function e(e,t,n,r,o,i){if(i!==f){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:m,resetWarningCache:d};return n.PropTypes=n,n},v=p((function(e){e.exports=y()})),h=function(e){return null!==e&&"object"===n(e)},b=function(e){return h(e)&&"function"===typeof e.then},g=function(e){return h(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},E="[object Object]",j=function e(t,n){if(!h(t)||!h(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===E;if(o!==(Object.prototype.toString.call(n)===E))return!1;if(!o&&!r)return!1;var i=Object.keys(t),c=Object.keys(n);if(i.length!==c.length)return!1;for(var u={},a=0;a<i.length;a+=1)u[i[a]]=!0;for(var s=0;s<c.length;s+=1)u[c[s]]=!0;var l=Object.keys(u);if(l.length!==i.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},w=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},O="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",S=function(e){if(null===e||g(e))return e;throw new Error(O)},k=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(S)};var t=S(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},P=t.createContext(null);P.displayName="ElementsContext";var x=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},C=function(e){var n=e.stripe,r=e.options,o=e.children,c=t.useRef(!1),u=t.useRef(!0),a=t.useMemo((function(){return k(n)}),[n]),s=i(t.useState((function(){return{stripe:null,elements:null}})),2),l=s[0],p=s[1],f=w(n),d=w(r);return null!==f&&(f!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),j(r,d)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),c.current||("sync"===a.tag&&(c.current=!0,p({stripe:a.stripe,elements:a.stripe.elements(r)})),"async"===a.tag&&(c.current=!0,a.stripePromise.then((function(e){e&&u.current&&p({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){u.current=!1}}),[]),t.useEffect((function(){var e=l.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.4.1"}),e.registerAppInfo({name:"react-stripe-js",version:"1.4.1",url:"https://stripe.com/docs/stripe-js/react"}))}),[l.stripe]),t.createElement(P.Provider,{value:l},o)};C.propTypes={stripe:v.any,options:v.object};var I=function(e){var n=t.useContext(P);return x(n,e)},A=function(){return I("calls useElements()").elements},_=function(){return I("calls useStripe()").stripe},R=function(e){return(0,e.children)(I("mounts <ElementsConsumer>"))};R.propTypes={children:v.func.isRequired};var M=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},T=function(e){return h(e)?(e.paymentRequest,o(e,["paymentRequest"])):{}},B=function(){},N=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},q=function(e,n){var r="".concat(N(e),"Element"),o=n?function(e){I("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,i=n.className,c=n.options,u=void 0===c?{}:c,a=n.onBlur,s=void 0===a?B:a,l=n.onFocus,p=void 0===l?B:l,f=n.onReady,d=void 0===f?B:f,m=n.onChange,y=void 0===m?B:m,v=n.onEscape,h=void 0===v?B:v,b=n.onClick,g=void 0===b?B:b,E=I("mounts <".concat(r,">")).elements,w=t.useRef(null),O=t.useRef(null),S=M(d),k=M(s),P=M(p),x=M(g),C=M(y),A=M(h);t.useLayoutEffect((function(){if(null==w.current&&E&&null!=O.current){var t=E.create(e,u);w.current=t,t.mount(O.current),t.on("ready",(function(){return S(t)})),t.on("change",C),t.on("blur",k),t.on("focus",P),t.on("escape",A),t.on("click",x)}}));var _=t.useRef(u);return t.useEffect((function(){_.current&&_.current.paymentRequest!==u.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=T(u);0===Object.keys(e).length||j(e,T(_.current))||w.current&&(w.current.update(e),_.current=u)}),[u]),t.useLayoutEffect((function(){return function(){w.current&&w.current.destroy()}}),[]),t.createElement("div",{id:o,className:i,ref:O})};return o.propTypes={id:v.string,className:v.string,onChange:v.func,onBlur:v.func,onFocus:v.func,onReady:v.func,onClick:v.func,options:v.object},o.displayName=r,o.__elementType=e,o},$="undefined"===typeof window,F=q("auBankAccount",$),W=q("card",$),D=q("cardNumber",$),L=q("cardExpiry",$),U=q("cardCvc",$),Z=q("fpxBank",$),Y=q("iban",$),z=q("idealBank",$),Q=q("p24Bank",$),G=q("epsBank",$),H=q("payment",$),K=q("paymentRequestButton",$),V=q("afterpayClearpayMessage",$);e.AfterpayClearpayMessageElement=V,e.AuBankAccountElement=F,e.CardCvcElement=U,e.CardElement=W,e.CardExpiryElement=L,e.CardNumberElement=D,e.Elements=C,e.ElementsConsumer=R,e.EpsBankElement=G,e.FpxBankElement=Z,e.IbanElement=Y,e.IdealBankElement=z,e.P24BankElement=Q,e.PaymentElement=H,e.PaymentRequestButtonElement=K,e.useElements=A,e.useStripe=_,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},1279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(2809),o=n(219),i=n(266),c=n(809),u=n.n(c),a=n(7294),s=n(9008),l=n(8767);function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f="https://js.stripe.com/v3",d=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,m="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",y=null,v=function(e){return null!==y?y:y=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(m),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(f,'"]')),t=0;t<e.length;t++){var n=e[t];if(d.test(n.src))return n}return null}();r&&e?console.warn(m):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(f).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))},h=function(e,t){if(null===e)return null;var n=e.apply(void 0,p(t));return function(e){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.8.0"})}(n),n},b=Promise.resolve().then((function(){return v(null)})),g=!1;b.catch((function(e){g||console.warn(e)}));var E=n(6664),j=n(3475),w=n(5617),O=n(2756),S=n(5893),k=["checkoutModel"];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=e.stripeClientSecret,n=e.checkoutModel,r=e.onSuccess,o=e.onError,c=(0,O.$G)("checkout").t,s=(0,E.useStripe)(),l=(0,E.useElements)(),p=(0,a.useState)("idle"),f=p[0],d=p[1];return(0,S.jsxs)("form",{onSubmit:function(e){function c(){return a.apply(this,arguments)}function a(){return(a=(0,i.Z)(u().mark((function e(){var i,a,p,f,m,y,v,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s&&l){e.next=3;break}return setTimeout(c,100),e.abrupt("return");case 3:return i=n.customer,e.next=6,s.confirmCardPayment(t,{payment_method:{card:l.getElement(E.CardElement),billing_details:{name:"".concat(i.firstName," ").concat(i.lastName)}}});case 6:if(a=e.sent,p=a.error,f=a.paymentIntent,!p){e.next=13;break}d({error:p}),e.next=19;break;case 13:if("succeeded"!==f.status){e.next=19;break}return e.next=16,(0,j.Z)({query:"\n              mutation confirmStripeOrder($checkoutModel: CheckoutModelInput!, $paymentIntentId: String!) {\n                paymentProviders {\n                  stripe {\n                    confirmOrder(checkoutModel: $checkoutModel, paymentIntentId: $paymentIntentId) {\n                      success\n                      orderId\n                    }\n                  }\n                }\n              }\n            ",variables:{checkoutModel:n,paymentIntentId:f.id}});case 16:m=e.sent,y=m.data.paymentProviders.stripe.confirmOrder,v=y.success,h=y.orderId,v?r(h):o();case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),d("confirming"),c()},children:[(0,S.jsx)(E.CardElement,{}),(0,S.jsx)("div",{style:{marginTop:25},children:(0,S.jsx)(w.zx,{type:"submit",state:"confirming"===f?"loading":null,disabled:"confirming"===f,children:c("payNow")})})]})}function I(e){var t,n,r,i,c,u=e.checkoutModel,p=(0,o.Z)(e,k),f=(0,a.useState)(null),d=f[0],m=f[1],y=(0,l.useQuery)("stripeConfig",(function(){return(0,j.Z)({query:"\n      {\n        paymentProviders {\n          stripe {\n            config\n          }\n        }\n      }\n    "})}));(0,a.useEffect)((function(){y.data&&!d&&m(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g=!0,b.then((function(e){return h(e,t)}))}(y.data.data.paymentProviders.stripe.config.publishableKey))}),[y,d]);var v=(0,l.useQuery)("stripePaymentIntent",(function(){return(0,j.Z)({query:"\n        mutation StripePaymentIntent($checkoutModel: CheckoutModelInput!) {\n          paymentProviders {\n            stripe {\n              createPaymentIntent(checkoutModel: $checkoutModel)\n            }\n          }\n        }\n      ",variables:{checkoutModel:u}})})),O=null===v||void 0===v||null===(t=v.data)||void 0===t||null===(n=t.data)||void 0===n||null===(r=n.paymentProviders)||void 0===r||null===(i=r.stripe)||void 0===i||null===(c=i.createPaymentIntent)||void 0===c?void 0:c.client_secret;return!y.loading&&d&&O?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s.default,{children:(0,S.jsx)("script",{src:"https://js.stripe.com/v3/",async:!0},"stripe-js")}),(0,S.jsx)(E.Elements,{locale:"en",stripe:d,children:(0,S.jsx)(C,x(x({},p),{},{checkoutModel:u,stripeClientSecret:O}))})]}):(0,S.jsx)(w.$j,{})}}}]);