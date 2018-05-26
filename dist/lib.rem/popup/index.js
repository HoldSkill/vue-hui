/*! vue-hui v0.0.3 by HUI TEAM (c) 2018 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/dist/",e(0)}({0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;var i=o(231),r=n(i);e.Popup=r.default},1:function(t,e){t.exports=function(t,e,o,n){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),o&&(a._scopeId=o),n){var u=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];u[t]=function(){return e}})}return{esModule:i,exports:r,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},3:function(t,e,o){function n(t){for(var e=0;e<t.length;e++){var o=t[e],n=l[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(r(o.parts[i]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(r(o.parts[i]));l[o.id]={id:o.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function r(t){var e,o,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(d)return v;n.parentNode.removeChild(n)}if(m){var r=h++;n=f||(f=i()),e=s.bind(null,n,r,!1),o=s.bind(null,n,r,!0)}else n=i(),e=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}function s(t,e,o,n){var i=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var o=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var u="undefined"!=typeof document,p=o(4),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,d=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o){d=o;var i=p(t,e);return n(i),function(e){for(var o=[],r=0;r<i.length;r++){var s=i[r],a=l[s.id];a.refs--,o.push(a)}e?(i=p(t,e),n(i)):i=[];for(var r=0;r<o.length;r++){var a=o[r];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var g=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var o=[],n={},i=0;i<e.length;i++){var r=e[i],s=r[0],a=r[1],u=r[2],p=r[3],l={id:t+":"+i,css:a,media:u,sourceMap:p};n[s]?n[s].parts.push(l):o.push(n[s]={id:s,parts:[l]})}return o}},8:function(t,e,o){o(13);var n=o(1)(o(9),o(12),null,null);t.exports=n.exports},9:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hui-overlay",props:{transparent:Boolean},methods:{_onClick:function(){this.$emit("on-click")}}}},11:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".overlay-mask{position:absolute;top:0;left:0;right:0;bottom:0;z-index:200}.overlay-mask.transparent{background-color:transparent}.overlay-mask.black{background-color:rgba(0,0,0,.4)}",""])},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"stop",rawName:"v-stop.move",modifiers:{move:!0}}],staticClass:"overlay-mask",class:t.transparent?"transparent":"black",on:{click:function(e){return e.stopPropagation(),t._onClick(e)}}})},staticRenderFns:[]}},13:function(t,e,o){var n=o(11);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("7bd03882",n,!0)},96:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(8),r=n(i);e.default={name:"hui-popup",components:{"hui-overlay":r.default},props:{show:Boolean,mask:{default:null},height:{default:null},width:{default:"100%"},hideOnMask:{default:!0},position:{type:String,default:"bottom"}},computed:{style:function(){return{width:this.getCSSSize(this.width),height:this.getCSSSize(this.getHeight)}},getHeight:function(){if(null!==this.height)return this.height;switch(this.position){case"top":return"auto";default:return"100%"}},showMask:function(){var t=this.mask;if(null!==t)return t;switch(this.position){case"top":return!1;default:return!0}}},methods:{_onMaskClick:function(){this.hideOnMask&&this._hide()},_hide:function(){this.localShow=!1,this.$emit("on-hide"),this.$emit("on-sync-show",!1)},isNumeric:function(t){return!Array.isArray(t)&&!isNaN(parseFloat(t))&&isFinite(t)},isCSSSize:function(t){return/[0-9.]+\s*(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/.test(t)},getCSSSize:function(t){return this.isCSSSize(t)?t:this.isNumeric(t)?t+"px":t}},data:function(){return{localShow:this.show}},watch:{show:function(t){var e=this;this.localShow!==t&&(this.localShow=t),"top"===this.position&&t===!0&&setTimeout(function(){e._hide()},1e3)}}}},179:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".hui-popup{background:#fff;position:absolute;z-index:200}.hui-popup-left{top:0;bottom:0;left:0}.hui-popup-right{top:0;bottom:0;right:0}.hui-popup-top{top:0;left:0;right:0;text-align:center;min-height:50px;line-height:50px;color:#fff;background:rgba(0,0,0,.7)}.hui-popup-bottom{left:0;right:0;bottom:0}.hui-popup-fade-enter-active,.hui-popup-fade-leave-active{opacity:1;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.hui-popup-fade-enter,.hui-popup-fade-leave-active{opacity:0}.hui-popup-bottom-enter-active,.hui-popup-bottom-leave-active,.hui-popup-left-enter-active,.hui-popup-left-leave-active,.hui-popup-right-enter-active,.hui-popup-right-leave-active,.hui-popup-top-enter-active,.hui-popup-top-leave-active{-webkit-transition:-webkit-transform .3s ease-out .1s;transition:-webkit-transform .3s ease-out .1s;transition:transform .3s ease-out .1s;transition:transform .3s ease-out .1s,-webkit-transform .3s ease-out .1s}.hui-popup-top-enter,.hui-popup-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.hui-popup-bottom-enter,.hui-popup-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.hui-popup-left-enter,.hui-popup-left-leave-active{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.hui-popup-right-enter,.hui-popup-right-leave-active{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},231:function(t,e,o){o(339);var n=o(1)(o(96),o(300),null,null);t.exports=n.exports},300:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hui-popup-wrapper"},[o("transition",{attrs:{name:"hui-popup-fade"}},[t.showMask?o("hui-overlay",{directives:[{name:"show",rawName:"v-show",value:t.localShow,expression:"localShow"}],on:{"on-click":t._onMaskClick}}):t._e()],1),t._v(" "),o("transition",{attrs:{name:"hui-popup-"+t.position}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.localShow,expression:"localShow"}],staticClass:"hui-popup",class:"hui-popup-"+t.position,style:t.style},[t._t("default")],2)])],1)},staticRenderFns:[]}},339:function(t,e,o){var n=o(179);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("56e7dbd4",n,!0)}})});