/*! vue-hui v0.0.3 by HUI TEAM (c) 2018 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Upload=void 0;var i=n(375),a=r(i);t.Upload=a.default},1:function(e,t){e.exports=function(e,t,n,r){var i,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:i,exports:a,options:s}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},4:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(a(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(a(n.parts[i]));c[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(g){var a=p++;r=d||(d=i()),t=o.bind(null,r,a,!1),n=o.bind(null,r,a,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,u=n(5),c={},f=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,m=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var i=u(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=c[o.id];s.refs--,n.push(s)}t?(i=u(e,t),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],o=a[0],s=a[1],l=a[2],u=a[3],c={id:e+":"+i,css:s,media:l,sourceMap:u};r[o]?r[o].parts.push(c):n.push(r[o]={id:o,parts:[c]})}return n}},26:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-card",props:{status:String},data:function(){return{state:this.status,height:"auto",minHeight:0,maxHeight:0}},methods:{toggle:function(){switch(this.state){case"collapse":this.height=this.maxHeight,this.state="expand";break;case"expand":this.height=this.minHeight,this.state="collapse"}}},mounted:function(){var e=this;this.$nextTick(function(){if(e.state){var t=e.$el.querySelector(".card-header");if(!t)return e.state="";e.minHeight=t.clientHeight+"px",e.maxHeight=e.$el.clientHeight+"px",e.state="collapse"===e.state?"expand":"collapse",e.toggle()}})},render:function(e){var t=this,n={header:null,content:null,footer:null},r={header:"card-header",content:"card-content vmc-1px-top",footer:"card-footer vmc-1px-top"},i=this.$slots.default;return i&&i.length&&i.forEach(function(i){var a=i.data&&i.data.attrs&&i.data.attrs.name;if(a&&void 0!==n[a]){var o=i.data,s=o.staticClass;s=s?" "+s:"",s=r[a]+s,o=Object.assign({},o,{staticClass:s}),"header"===a&&(o.on={click:t.toggle}),n[a]=e(i.tag,o,i.children)}}),e("div",{class:["vmc-card",this.state],style:{height:this.height}},[n.header,n.content,n.footer])}}},36:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'.vmc-card{background:#fff;overflow-y:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-property:height;transition-property:height;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(0,1,.5,1);transition-timing-function:cubic-bezier(0,1,.5,1)}.vmc-card+.vmc-card{margin-top:15px}.vmc-card .no-border:after,.vmc-card .no-border:before{border:none}.vmc-card.with-shadow{box-shadow:0 1px 2px rgba(0,0,0,.3)}.vmc-card>:first-child:after,.vmc-card>:first-child:before{border:none}.vmc-card.collapse .card-header:after,.vmc-card.expand .card-header:after{content:" ";display:block;height:8px;width:8px;border-width:1px 1px 0 0;border-color:#c8c8cd;border-style:solid;position:absolute;top:50%;right:15px;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.vmc-card.collapse .card-header:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);margin-top:-3px}.vmc-card.expand .card-header:after{-webkit-transform:rotate(135deg);transform:rotate(135deg);margin-top:-8px}.vmc-card .card-header{height:45px;line-height:45px;font-size:15px;padding:0 12px;position:relative}.vmc-card .card-content{font-size:15px;padding:10px 12px}.vmc-card .card-footer{color:#5f646e;height:40px;line-height:40px;font-size:13px;padding:0 .24;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}',""])},42:function(e,t,n){n(60);var r=n(1)(n(26),null,null,null);e.exports=r.exports},60:function(e,t,n){var r=n(36);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(4)("21fe87af",r,!0)},239:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(42),a=r(i),o=n(313),s=r(o);t.default={name:"hui-upload",extends:a.default,props:{title:{default:"请上传图片"},upload:{type:Function,default:function(){console.log("未传入函数")}},images:{default:[]},name:{type:String},accept:{type:String,default:"image/*"},body:{type:Object,default:function(){}},multiple:{type:Boolean,default:!1},validator:Function,input:{type:Boolean,default:!1}},data:function(){return{uploadImages:this.images}},watch:{images:function(e){this.uploadImages=e}},methods:{empty:function(e){return s.default.empty(e)},_upload:function(){this.upload()},_sliceImages:function(e){this.multiple?this.uploadImages.splice(e,1):this.uploadImages="",this.$emit("on-slice",this.uploadImages)},_onChange:function(){var e=this.$el.querySelector("input[type=file]").files;e.length&&this._uploadFile(e)},_uploadFile:function(e){var t=this;Promise.resolve().then(function(){for(var n=0,r=e.length;n<r;n++){var i=e[n],a=new FileReader;a.readAsDataURL(i),a.onload=function(e){t.upload(e.target.result)}}}).then(function(){t._clearInputFile()}).catch(function(e){console(e)})},_clearInputFile:function(){var e=this.$el.querySelector("input[type=file]");if(e.value){try{e.value=""}catch(e){}if(e.value){var t=document.createElement("form"),n=e.nextSibling,r=e.parentNode;t.appendChild(e),t.reset(),r.insertBefore(e,n)}}}}}},290:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".image-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.image-list .image{width:64px;height:64px;position:relative;margin-right:15px}.image-list .image img{width:100%;height:100%}.image-list .image .vmc-badge{position:absolute;right:-8px;top:-8px}.vmc-upload{height:60px;width:60px;border:2px dashed #ccc;border-radius:5px;position:relative}.vmc-upload .fileInput{position:absolute;top:0;left:0;opacity:0;width:100%;height:100%}.vmc-upload .vmc-upload-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:100%}.vmc-upload .vmc-upload-button i{color:#ccc;display:block;-webkit-transform:scale(1.875px);transform:scale(1.875px)}.vmc-badge{display:inline-block;text-align:center;background:#f74c31;color:#fff;font-size:12px;height:16px;line-height:16px;min-width:16px;border-radius:8px;padding:0 4px;box-sizing:border-box}",""])},313:function(e,t){"use strict";/**!
	 * is
	 * the definitive JavaScript type testing library
	 *
	 * @copyright 2013-2014 Enrico Marino / Jordan Harband
	 * @license MIT
	 */
var n,r=Object.prototype,i=r.hasOwnProperty,a=r.toString;"function"==typeof Symbol&&(n=Symbol.prototype.valueOf);var o=function(e){return e!==e},s={boolean:1,number:1,string:1,undefined:1},l=/^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/,u=/^[A-Fa-f0-9]+$/,c={};c.a=c.type=function(e,t){return typeof e===t},c.defined=function(e){return"undefined"!=typeof e},c.empty=function(e){var t,n=a.call(e);if("[object Array]"===n||"[object Arguments]"===n||"[object String]"===n)return 0===e.length;if("[object Object]"===n){for(t in e)if(i.call(e,t))return!1;return!0}return!e},c.equal=function(e,t){if(e===t)return!0;var n,r=a.call(e);if(r!==a.call(t))return!1;if("[object Object]"===r){for(n in e)if(!(c.equal(e[n],t[n])&&n in t))return!1;for(n in t)if(!(c.equal(e[n],t[n])&&n in e))return!1;return!0}if("[object Array]"===r){if(n=e.length,n!==t.length)return!1;for(;n--;)if(!c.equal(e[n],t[n]))return!1;return!0}return"[object Function]"===r?e.prototype===t.prototype:"[object Date]"===r&&e.getTime()===t.getTime()},c.hosted=function(e,t){var n=typeof t[e];return"object"===n?!!t[e]:!s[n]},c.instance=c.instanceof=function(e,t){return e instanceof t},c.nil=c.null=function(e){return null===e},c.undef=c.undefined=function(e){return"undefined"==typeof e},c.args=c.arguments=function(e){var t="[object Arguments]"===a.call(e),n=!c.array(e)&&c.arraylike(e)&&c.object(e)&&c.fn(e.callee);return t||n},c.array=Array.isArray||function(e){return"[object Array]"===a.call(e)},c.args.empty=function(e){return c.args(e)&&0===e.length},c.array.empty=function(e){return c.array(e)&&0===e.length},c.arraylike=function(e){return!!e&&!c.bool(e)&&i.call(e,"length")&&isFinite(e.length)&&c.number(e.length)&&e.length>=0},c.bool=c.boolean=function(e){return"[object Boolean]"===a.call(e)},c.false=function(e){return c.bool(e)&&Boolean(Number(e))===!1},c.true=function(e){return c.bool(e)&&Boolean(Number(e))===!0},c.date=function(e){return"[object Date]"===a.call(e)},c.date.valid=function(e){return c.date(e)&&!isNaN(Number(e))},c.element=function(e){return void 0!==e&&"undefined"!=typeof HTMLElement&&e instanceof HTMLElement&&1===e.nodeType},c.error=function(e){return"[object Error]"===a.call(e)},c.fn=c.function=function(e){var t="undefined"!=typeof window&&e===window.alert;if(t)return!0;var n=a.call(e);return"[object Function]"===n||"[object GeneratorFunction]"===n||"[object AsyncFunction]"===n},c.number=function(e){return"[object Number]"===a.call(e)},c.infinite=function(e){return e===1/0||e===-(1/0)},c.decimal=function(e){return c.number(e)&&!o(e)&&!c.infinite(e)&&e%1!==0},c.divisibleBy=function(e,t){var n=c.infinite(e),r=c.infinite(t),i=c.number(e)&&!o(e)&&c.number(t)&&!o(t)&&0!==t;return n||r||i&&e%t===0},c.integer=c.int=function(e){return c.number(e)&&!o(e)&&e%1===0},c.maximum=function(e,t){if(o(e))throw new TypeError("NaN is not a valid value");if(!c.arraylike(t))throw new TypeError("second argument must be array-like");for(var n=t.length;--n>=0;)if(e<t[n])return!1;return!0},c.minimum=function(e,t){if(o(e))throw new TypeError("NaN is not a valid value");if(!c.arraylike(t))throw new TypeError("second argument must be array-like");for(var n=t.length;--n>=0;)if(e>t[n])return!1;return!0},c.nan=function(e){return!c.number(e)||e!==e},c.even=function(e){return c.infinite(e)||c.number(e)&&e===e&&e%2===0},c.odd=function(e){return c.infinite(e)||c.number(e)&&e===e&&e%2!==0},c.ge=function(e,t){if(o(e)||o(t))throw new TypeError("NaN is not a valid value");return!c.infinite(e)&&!c.infinite(t)&&e>=t},c.gt=function(e,t){if(o(e)||o(t))throw new TypeError("NaN is not a valid value");return!c.infinite(e)&&!c.infinite(t)&&e>t},c.le=function(e,t){if(o(e)||o(t))throw new TypeError("NaN is not a valid value");return!c.infinite(e)&&!c.infinite(t)&&e<=t},c.lt=function(e,t){if(o(e)||o(t))throw new TypeError("NaN is not a valid value");return!c.infinite(e)&&!c.infinite(t)&&e<t},c.within=function(e,t,n){if(o(e)||o(t)||o(n))throw new TypeError("NaN is not a valid value");if(!c.number(e)||!c.number(t)||!c.number(n))throw new TypeError("all arguments must be numbers");var r=c.infinite(e)||c.infinite(t)||c.infinite(n);return r||e>=t&&e<=n},c.object=function(e){return"[object Object]"===a.call(e)},c.primitive=function(e){return!e||!("object"==typeof e||c.object(e)||c.fn(e)||c.array(e))},c.hash=function(e){return c.object(e)&&e.constructor===Object&&!e.nodeType&&!e.setInterval},c.regexp=function(e){return"[object RegExp]"===a.call(e)},c.string=function(e){return"[object String]"===a.call(e)},c.base64=function(e){return c.string(e)&&(!e.length||l.test(e))},c.hex=function(e){return c.string(e)&&(!e.length||u.test(e))},c.symbol=function(e){return"function"==typeof Symbol&&"[object Symbol]"===a.call(e)&&"symbol"==typeof n.call(e)},e.exports=c},375:function(e,t,n){n(451);var r=n(1)(n(239),n(405),null,null);e.exports=r.exports},405:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hui-card",[n("div",{attrs:{name:"header"}},[e._v(e._s(e.title))]),e._v(" "),n("div",{attrs:{name:"content"}},[n("div",{staticClass:"image-list"},[e._l(e.uploadImages,function(t,r){return 1==e.multiple?n("div",{staticClass:"image"},[n("img",{attrs:{src:t}}),e._v(" "),n("span",{staticClass:"vmc-badge",on:{click:function(t){e._sliceImages(r)}}},[e._v("x")])]):e._e()}),e._v(" "),0!=e.multiple||e.empty(e.uploadImages)?e._e():n("div",{staticClass:"image"},[n("img",{attrs:{src:e.uploadImages}}),e._v(" "),n("span",{staticClass:"vmc-badge",on:{click:e._sliceImages}},[e._v("x")])]),e._v(" "),e.input?e._e():n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.multiple&&e.empty(e.uploadImages)||e.multiple,expression:"(multiple == false && empty(uploadImages)) || multiple"}],staticClass:"vmc-upload",on:{click:e._upload}},[e._t("default",[n("div",{staticClass:"vmc-upload-button"},[n("i",{staticClass:"icono-plus"})])])],2),e._v(" "),e.input?n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.multiple&&e.empty(e.uploadImages)||e.multiple,expression:"(multiple == false && empty(uploadImages)) || multiple"}],staticClass:"vmc-upload"},[e._t("default",[n("div",{staticClass:"vmc-upload-button"},[n("i",{staticClass:"icono-plus"})])]),e._v(" "),e.input?n("input",{staticClass:"fileInput",attrs:{type:"file",name:e.name,accept:e.accept,multiple:e.multiple},on:{change:e._onChange}}):e._e()],2):e._e()],2)])])},staticRenderFns:[]}},451:function(e,t,n){var r=n(290);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(4)("8c4c07f4",r,!0)}})});