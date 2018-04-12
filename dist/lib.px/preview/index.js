/*! vue-hui v0.0.3 by HUI TEAM (c) 2018 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}({0:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewItem=t.PreviewHeader=t.Preview=void 0;var n=i(356),o=r(n),s=i(354),a=r(s),l=i(355),f=r(l);t.Preview=o.default,t.PreviewHeader=a.default,t.PreviewItem=f.default},1:function(e,t){e.exports=function(e,t,i,r){var n,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(n=e,o=e.default);var a="function"==typeof o?o.options:o;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),i&&(a._scopeId=i),r){var l=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:n,exports:o,options:a}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},4:function(e,t,i){function r(e){for(var t=0;t<e.length;t++){var i=e[t],r=d[i.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](i.parts[n]);for(;n<i.parts.length;n++)r.parts.push(o(i.parts[n]));r.parts.length>i.parts.length&&(r.parts.length=i.parts.length)}else{for(var s=[],n=0;n<i.parts.length;n++)s.push(o(i.parts[n]));d[i.id]={id:i.id,refs:1,parts:s}}}}function n(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function o(e){var t,i,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(x){var o=p++;r=c||(c=n()),t=s.bind(null,r,o,!1),i=s.bind(null,r,o,!0)}else r=n(),t=a.bind(null,r),i=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else i()}}function s(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,n);else{var o=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var i=t.css,r=t.media,n=t.sourceMap;if(r&&e.setAttribute("media",r),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document,f=i(5),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),c=null,p=0,h=!1,v=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){h=i;var n=f(e,t);return r(n),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o],a=d[s.id];a.refs--,i.push(a)}t?(n=f(e,t),r(n)):n=[];for(var o=0;o<i.length;o++){var a=i[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var m=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var i=[],r={},n=0;n<t.length;n++){var o=t[n],s=o[0],a=o[1],l=o[2],f=o[3],d={id:e+":"+n,css:a,media:l,sourceMap:f};r[s]?r[s].parts.push(d):i.push(r[s]={id:s,parts:[d]})}return i}},218:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-preview-header"}},219:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-preview-item"}},220:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-preview",props:{buttons:[Array]},methods:{clickHander:function(e){"function"==typeof e&&e()}}}},304:function(e,t,i){t=e.exports=i(3)(),t.push([e.id,'.hui-preview{background-color:#fff;position:relative;z-index:2}.hui-preview:before{top:0;border-top:1px solid #d9d9d9}.hui-preview:after,.hui-preview:before{content:"";position:absolute;z-index:0;left:0;width:100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-preview:after{bottom:0;border-bottom:1px solid #d9d9d9}.hui-preview-header{height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-left:12px;padding-right:12px;position:relative;color:#999;font-size:14px;margin-bottom:10px}.hui-preview-header:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-preview-header>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.hui-preview-header>:first-child{margin-right:10px}.hui-preview-header>:last-child{text-align:right;color:#333;font-size:16px}.hui-preview-item{padding:0 12px;font-size:13px;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-bottom:7px}.hui-preview-item>*{display:block}.hui-preview-item>:first-child{min-width:55px;text-align-last:justify;margin-right:20px;height:100%;text-align:right}.hui-preview-item>:last-child{word-break:normal;word-wrap:break-word;text-align:right;line-height:22px;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.hui-preview-item:last-child{padding-bottom:12px}.hui-preview-footer{height:50px;-ms-flex-align:center;font-size:14px;color:#999;margin-top:5px}.hui-preview-footer,.hui-preview-footer>*{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.hui-preview-footer>*{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:inherit;-ms-flex-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.hui-preview-footer>:not(:first-child):after{content:"";position:absolute;z-index:0;top:0;left:0;height:100%;border-left:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-preview-footer:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}',""])},354:function(e,t,i){var r=i(1)(i(218),i(428),null,null);e.exports=r.exports},355:function(e,t,i){var r=i(1)(i(219),i(406),null,null);e.exports=r.exports},356:function(e,t,i){i(465);var r=i(1)(i(220),i(429),null,null);e.exports=r.exports},406:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hui-preview-item"},[e._t("left"),e._v(" "),e._t("right")],2)},staticRenderFns:[]}},428:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hui-preview-header"},[e._t("left"),e._v(" "),e._t("right")],2)},staticRenderFns:[]}},429:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hui-preview"},[e._t("default"),e._v(" "),e.buttons.length>0?i("div",{staticClass:"hui-preview-footer"},[e._l(e.buttons,function(t){return["object"==typeof t.link?[i("router-link",{style:{color:t.color},attrs:{to:t.link},nativeOn:{click:function(i){e.clickHander(t.click)}}},[e._v(e._s(t.text))])]:[i("a",{style:{color:t.color},attrs:{href:t.link?t.link:"javascript:;"},on:{click:function(i){e.clickHander(t.click)}}},[e._v(e._s(t.text))])]]})],2):e._e()],2)},staticRenderFns:[]}},465:function(e,t,i){var r=i(304);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);i(4)("ef6d37fc",r,!0)}})});