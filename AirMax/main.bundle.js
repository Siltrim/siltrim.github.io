!function(){"use strict";var e={91:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},521:function(e,t,n){e.exports=n.p+"assets/airpods_black.webp"},7:function(e,t,n){e.exports=n.p+"assets/airpods_blue.webp"},756:function(e,t,n){e.exports=n.p+"assets/airpods_green.webp"},446:function(e,t,n){e.exports=n.p+"assets/airpods_red.webp"},964:function(e,t,n){e.exports=n.p+"assets/airpods_white.webp"},580:function(e,t,n){e.exports=n.p+"assets/case_black.webp"},220:function(e,t,n){e.exports=n.p+"assets/case_blue.webp"},491:function(e,t,n){e.exports=n.p+"assets/case_green.webp"},495:function(e,t,n){e.exports=n.p+"assets/case_red.webp"},472:function(e,t,n){e.exports=n.p+"assets/case_white.webp"},588:function(e,t,n){e.exports=n.p+"assets/favicon.png"},213:function(e,t,n){e.exports=n.p+"assets/favicon.svg"},737:function(e,t,n){e.exports=n.p+"assets/logo-white.svg"},483:function(e,t,n){e.exports=n.p+"assets/logo.svg"},513:function(e,t,n){e.exports=n.p+"assets/side_black.webp"},98:function(e,t,n){e.exports=n.p+"assets/side_blue.webp"},130:function(e,t,n){e.exports=n.p+"assets/side_green.webp"},344:function(e,t,n){e.exports=n.p+"assets/side_red.webp"},16:function(e,t,n){e.exports=n.p+"assets/side_white.webp"},468:function(e,t,n){e.exports=n.p+"assets/airpods-black.webp"},358:function(e,t,n){e.exports=n.p+"assets/airpods-blue.webp"},717:function(e,t,n){e.exports=n.p+"assets/airpods-green.webp"},806:function(e,t,n){e.exports=n.p+"assets/airpods-red.webp"},554:function(e,t,n){e.exports=n.p+"assets/airpods-silver.webp"}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var o=s.length-1;o>-1&&!e;)e=s[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){var e=n(91),t=n.n(e),s=new URL(n(213),n.b),o=new URL(n(588),n.b),r=new URL(n(483),n.b),c=new URL(n(7),n.b),i=new URL(n(756),n.b),p=new URL(n(446),n.b),a=new URL(n(521),n.b),u=new URL(n(964),n.b),b=new URL(n(358),n.b),f=new URL(n(554),n.b),w=new URL(n(806),n.b),l=new URL(n(468),n.b),d=new URL(n(717),n.b),x=new URL(n(98),n.b),L=new URL(n(513),n.b),_=new URL(n(16),n.b),h=new URL(n(130),n.b),v=new URL(n(344),n.b),R=new URL(n(220),n.b),U=new URL(n(495),n.b),g=new URL(n(491),n.b),m=new URL(n(472),n.b),y=new URL(n(580),n.b),E=new URL(n(737),n.b),S=(t()(s),t()(o),t()(r),t()(c),t()(i),t()(p),t()(a),t()(u),t()(b),t()(f),t()(w),t()(l),t()(d),t()(x),t()(L),t()(_),t()(h),t()(v),t()(R),t()(U),t()(g),t()(m),t()(y),t()(E),document.querySelectorAll(".choose-color__btn")),k=document.querySelectorAll(".content-item");function j(e){var t=e.currentTarget,n=t.dataset.button,s=document.querySelectorAll(".".concat(n));S.forEach((function(e){return e.classList.remove("choose-color__btn--active")})),t.classList.add("choose-color__btn--active"),k.forEach((function(e){return e.classList.remove("content-item__active")})),s.forEach((function(e){return e.classList.add("content-item__active")}))}S.forEach((function(e){return e.addEventListener("click",j)}))}()}();