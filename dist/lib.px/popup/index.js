/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="/dist/",e(0)}({0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;var r=o(189),a=n(r);e.Popup=a.default},2:function(t,e){t.exports=function(t,e,o,n){var r,a=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(r=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),o&&(s._scopeId=o),n){var u=s.computed||(s.computed={});Object.keys(n).forEach(function(t){var e=n[t];u[t]=function(){return e}})}return{esModule:r,exports:a,options:s}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(n[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&n[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="("+i[2]+") and ("+o+")"),t.push(i))}},t}},4:function(t,e,o){function n(t){for(var e=0;e<t.length;e++){var o=t[e],n=l[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(a(o.parts[r]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var i=[],r=0;r<o.parts.length;r++)i.push(a(o.parts[r]));l[o.id]={id:o.id,refs:1,parts:i}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,o,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(m){var a=d++;n=c||(c=r()),e=i.bind(null,n,a,!1),o=i.bind(null,n,a,!0)}else n=r(),e=s.bind(null,n),o=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}function i(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var o=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var u="undefined"!=typeof document,p=o(5),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),c=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o){h=o;var r=p(t,e);return n(r),function(e){for(var o=[],a=0;a<r.length;a++){var i=r[a],s=l[i.id];s.refs--,o.push(s)}e?(r=p(t,e),n(r)):r=[];for(var a=0;a<o.length;a++){var s=o[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var g=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var o=[],n={},r=0;r<e.length;r++){var a=e[r],i=a[0],s=a[1],u=a[2],p=a[3],l={id:t+":"+r,css:s,media:u,sourceMap:p};n[i]?n[i].parts.push(l):o.push(n[i]={id:i,parts:[l]})}return o}},6:function(t,e,o){o(9);var n=o(2)(o(10),o(8),null,null);t.exports=n.exports},7:function(t,e,o){e=t.exports=o(3)(),e.push([t.id,".overlay-mask{position:absolute;top:0;left:0;right:0;bottom:0;z-index:200}.overlay-mask.transparent{background-color:transparent}.overlay-mask.black{background-color:rgba(0,0,0,.4)}",""])},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"stop",rawName:"v-stop.move",modifiers:{move:!0}}],staticClass:"overlay-mask",class:t.transparent?"transparent":"black",on:{click:function(e){e.stopPropagation(),t._onClick(e)}}})},staticRenderFns:[]}},9:function(t,e,o){var n=o(7);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(4)("498273d4",n,!0)},10:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hui-overlay",props:{transparent:Boolean},methods:{_onClick:function(){this.$emit("on-click")}}}},175:function(t,e,o){e=t.exports=o(3)(),e.push([t.id,".default-popup{background:#fff;position:absolute;z-index:200}.default-popup-left{top:0;bottom:0;left:0}.default-popup-right{top:0;bottom:0;right:0}.default-popup-top{top:0;left:0;right:0;text-align:center;min-height:50px;line-height:50px;color:#fff;background:rgba(0,0,0,.7)}.default-popup-bottom{left:0;right:0;bottom:0}.default-popup-fade-enter-active,.default-popup-fade-leave-active{opacity:1;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.default-popup-fade-enter,.default-popup-fade-leave-active{opacity:0}.default-popup-bottom-enter-active,.default-popup-bottom-leave-active,.default-popup-left-enter-active,.default-popup-left-leave-active,.default-popup-right-enter-active,.default-popup-right-leave-active,.default-popup-top-enter-active,.default-popup-top-leave-active{-webkit-transition:-webkit-transform .3s ease-out .1s;transition:-webkit-transform .3s ease-out .1s;transition:transform .3s ease-out .1s;transition:transform .3s ease-out .1s,-webkit-transform .3s ease-out .1s}.default-popup-top-enter,.default-popup-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.default-popup-bottom-enter,.default-popup-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.default-popup-left-enter,.default-popup-left-leave-active{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.default-popup-right-enter,.default-popup-right-leave-active{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},189:function(t,e,o){o(234);var n=o(2)(o(251),o(218),null,null);t.exports=n.exports},218:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vmc-popup-wrapper"},[o("transition",{attrs:{name:"vmc-popup-fade"}},[t.showMask?o("hui-overlay",{directives:[{name:"show",rawName:"v-show",value:t.localShow,expression:"localShow"}],on:{"on-click":t._onMaskClick}}):t._e()],1),t._v(" "),o("transition",{attrs:{name:"vmc-popup-"+t.position}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.localShow,expression:"localShow"}],staticClass:"vmc-popup",class:"vmc-popup-"+t.position,style:t.style},[t._t("default")],2)])],1)},staticRenderFns:[]}},234:function(t,e,o){var n=o(175);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(4)("7f021caa",n,!0)},251:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(6),a=n(r);e.default={name:"hui-popup",components:{"hui-overlay":a.default},props:{show:Boolean,mask:{default:null},height:{default:null},width:{default:"100%"},hideOnMask:{default:!0},position:{type:String,default:"bottom"}},computed:{style:function(){return{width:this.getCSSSize(this.width),height:this.getCSSSize(this.getHeight)}},getHeight:function(){if(null!==this.height)return this.height;switch(this.position){case"top":return"auto";default:return"100%"}},showMask:function(){var t=this.mask;if(null!==t)return t;switch(this.position){case"top":return!1;default:return!0}}},methods:{_onMaskClick:function(){this.hideOnMask&&this._hide()},_hide:function(){this.localShow=!1,this.$emit("on-hide"),this.$emit("on-sync-show",!1)},isNumeric:function(t){return!Array.isArray(t)&&!isNaN(parseFloat(t))&&isFinite(t)},isCSSSize:function(t){return/[0-9.]+\s*(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/.test(t)},getCSSSize:function(t){return this.isCSSSize(t)?t:this.isNumeric(t)?t+"px":t}},data:function(){return{localShow:this.show}},watch:{show:function(t){var e=this;this.localShow!==t&&(this.localShow=t),"top"===this.position&&t===!0&&setTimeout(function(){e._hide()},1e3)}}}}})});