/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Scroller=void 0;var o=n(196),r=i(o);e.Scroller=r.default},2:function(t,e){t.exports=function(t,e,n,i){var o,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var c=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}})}return{esModule:o,exports:r,options:a}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},4:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(v)return g;i.parentNode.removeChild(i)}if(p){var r=h++;i=f||(f=o()),e=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=o(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=A(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document,l=n(5),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,v=!1,g=function(){},p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var o=l(t,e);return i(o),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r],a=d[s.id];a.refs--,n.push(a)}e?(o=l(t,e),i(o)):o=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete d[a.id]}}}};var A=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],c=r[2],l=r[3],d={id:t+":"+o,css:a,media:c,sourceMap:l};i[s]?i[s].parts.push(d):n.push(i[s]={id:s,parts:[d]})}return n}},49:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYzLjY1NyA2My42NTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYzLjY1NyA2My42NTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxwb2x5Z29uIHBvaW50cz0iMzEuODkxLDYzLjY1NyAwLjAxMiwzNS44MzUgMi42NDIsMzIuODIxIDMxLjg4Niw1OC4zNDMgNjEuMDA5LDMyLjgyNCA2My42NDUsMzUuODMyICAgICAiIGZpbGw9IiNhYWFhYWEiLz4KCQkJPC9nPgoJCTwvZz4KCQk8Zz4KCQkJPGc+CgkJCQk8cmVjdCB4PSIyOS44MjciIHdpZHRoPSI0IiBoZWlnaHQ9IjYwIiBmaWxsPSIjYWFhYWFhIi8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="},50:function(t,e){t.exports="data:image/png;base64,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"},167:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".root{height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.div-scroll-inner,.root{position:absolute;width:100%}.div-scroll-inner{overflow-x:hidden;overflow-y:auto}.div-refresh{width:100%;color:#a1a1a1;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.div-refresh .div-down{background:url("+n(49)+") no-repeat 50%;background-size:100%}.div-refresh .div-down,.div-refresh .div-up{display:inline-block;width:20px;height:20px;vertical-align:middle;-webkit-transition-duration:.3s;transition-duration:.3s}.div-refresh .div-up{background:url("+n(49)+") no-repeat 50%;background-size:100%;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.div-refresh .div-refreshing{display:inline-block;width:20px;height:20px;background:url("+n(50)+") no-repeat 50%;background-size:100%;vertical-align:middle;-webkit-animation:rotation 2s linear infinite}.div-refresh span{display:block;text-align:center}.div-loading{width:100%;padding-bottom:20px;color:#a1a1a1;text-align:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.div-loading img{margin:0 auto;width:20px;-webkit-animation:rotation 2s linear infinite}.div-loading span{display:block;margin-left:10px;margin:auto}@-webkit-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}.no-data-text{width:100%;height:44px;z-index:1;text-align:center;line-height:44px;opacity:0;transition:opacity .15s linear;-webkit-transition:opacity .15s linear}.active{opacity:1}",""])},196:function(t,e,n){n(229);var i=n(2)(n(262),n(206),null,null);t.exports=i.exports},206:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"vueScroll",staticClass:"root",on:{touchstart:function(e){t.onTouchStart(e)},touchmove:function(e){t.onTouchMove(e)},touchend:function(e){t.onTouchEnd(e)},scroll:function(e){t.isScroll(e)}}},[i("div",{ref:"scrollInner",staticClass:"div-scroll-inner",style:t.transform?{transform:"translate3d(0,"+t.top+"px,0)"}:""},[!t.onRefresh||t.isLoading||!t.moving&&0==t.state?t._e():i("div",{staticClass:"div-refresh"},[t._t("refresh",[i("div",{class:{"div-down":0===t.state,"div-up":1===t.state,"div-refreshing":2===t.state}}),t._v(" "),0===t.state?i("span",[t._v("下拉刷新")]):t._e(),t._v(" "),1===t.state?i("span",[t._v("释放刷新")]):t._e(),t._v(" "),2===t.state?i("span",[t._v("正在刷新……")]):t._e()])],2),t._v(" "),t._t("default"),t._v(" "),t.isLoading&&!t.loadDisabled&&t.onLoad?i("div",{staticClass:"div-loading"},[i("img",{attrs:{src:n(50)}}),t._v(" "),i("span",[t._v("加载中...")])]):t._e(),t._v(" "),i("div",{staticClass:"no-data-text",class:{active:!t.isLoading&&2==t.loadingState},domProps:{textContent:t._s(t.noDataText)}})],2)])},staticRenderFns:[]}},229:function(t,e,n){var i=n(167);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(4)("9080de0a",i,!0)},262:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hui-scroller",props:{onRefresh:{type:Function,default:void 0},offsetH:{type:Number,default:20},onLoad:{type:Function,default:void 0},loadDisabled:{type:Boolean,default:!0},bottomH:{type:Number,default:20},noDataText:{default:"没有更多数据了"},onScroll:{type:Function,default:void 0}},data:function(){return{top:0,startY:0,state:0,loadingState:0,isLoading:!1,moving:!1,transform:!0}},methods:{onTouchStart:function(t){this.startY=t.touches[0].pageY,this.moving=!1},onTouchMove:function(t){if(this.isLoading=!1,this.onRefresh){var e=t.touches[0].pageY-this.startY;e<0||this.$el.scrollTop>0||(this.moving=!0,t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offsetH:0),2!==this.state&&(this.top>=this.offsetH?this.state=1:this.state=0))}},onTouchEnd:function(t){var e=this;return this.moving=!1,2===this.state?void(this.top=this.offsetH):this.top>this.offsetH?(this.state=2,this.top=this.offsetH,void this.onRefresh(function(){e.state=0,e.top=0})):(this.state=0,void(this.top=0))},isScroll:function(t){var e=this;if("function"==typeof this.onScroll&&this.onScroll(this.$refs.vueScroll.clientHeight,this.$el.scrollTop),this.$el.scrollTop>0?this.transform=!1:this.transform=!0,this.onLoad&&!this.loadDisabled){var n=this.$refs.vueScroll.clientHeight,i=this.$refs.scrollInner.clientHeight;if(i-n-this.bottomH<=this.$el.scrollTop){if(this.loadingState)return;this.loadingState=1,this.isLoading=!0,this.onLoad(setTimeout(function(){e.loadingState=e.loadDisabled?2:0,e.isLoading=!1,console.log(e.loadingState)},1e3))}}}}}}})});