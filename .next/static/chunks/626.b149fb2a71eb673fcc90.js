"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{3224:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var c=t(266),r=t(809),a=t.n(r),o=t(7294),l=t(2756),u=t(3475),i=t(5893);function s(e){var n=e.checkoutModel,t=e.basketActions,r=e.onSuccess,s=(0,l.$G)("checkout").t,d=(0,o.useState)("loading"),h=d[0],k=d[1];return(0,o.useEffect)((function(){function e(){return(e=(0,c.Z)(a().mark((function e(){var c,o,l,i,s,d,h,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k("loading"),e.next=3,(0,u.Z)({query:"\n          mutation mollieCreatePayment(\n            $checkoutModel: CheckoutModelInput!\n          ) {\n            paymentProviders {\n              mollie {\n                createPayment(\n                  checkoutModel: $checkoutModel\n                ) {\n                  success\n                  checkoutLink\n                  crystallizeOrderId\n                }\n              }\n            }\n          }\n        ",variables:{checkoutModel:n}});case 3:i=e.sent,s=(null===(c=i.data)||void 0===c||null===(o=c.paymentProviders)||void 0===o||null===(l=o.mollie)||void 0===l?void 0:l.createPayment)||{},d=s.success,h=s.crystallizeOrderId,p=s.checkoutLink,d?(t.setCrystallizeOrderId(h),r(p)):k("error");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),"error"===h?(0,i.jsx)("p",{children:s("loadingPaymentGatewayFailed",{name:"Mollie"})}):(0,i.jsx)("p",{children:s("loadingPaymentGateway")})}}}]);