/*! vue-hui v0.0.3 by HUI TEAM (c) 2018 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckBoxGroup=t.CheckBox=void 0;var r=n(205),i=o(r),c=n(204),a=o(c);t.CheckBox=i.default,t.CheckBoxGroup=a.default},1:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var s=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];s[e]=function(){return t}})}return{esModule:r,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var c=t[r];"number"==typeof c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},3:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var c=[],r=0;r<n.parts.length;r++)c.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:c}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(p)return v;o.parentNode.removeChild(o)}if(m){var i=f++;o=h||(h=r()),t=c.bind(null,o,i,!1),n=c.bind(null,o,i,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document,u=n(4),l={},d=s&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var r=u(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var c=r[i],a=l[c.id];a.refs--,n.push(a)}t?(r=u(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete l[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],c=i[0],a=i[1],s=i[2],u=i[3],l={id:e+":"+r,css:a,media:s,sourceMap:u};o[c]?o[c].parts.push(l):n.push(o[c]={id:c,parts:[l]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),o=function(){return{lock:function(e){r&&u(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){r&&l(e||document.body,"g-fix-ios-prevent-scroll")}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},c=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-o,i=r+t.offsetHeight;return r>=0&&r<n||i>0&&i<=n},s=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},u=function(e,t){s(e,t)||(e.className=""===e.className?t:e.className+" "+t)},l=function(e,t){if(s(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(n,o,r){if(n===o)return void("function"==typeof i&&i());var c=n+r>o?o:n+r;n>o&&(c=n-r<o?o:n-r),e===window?window.scrollTo(c,c):e.scrollTop=c,window.requestAnimationFrame(function(){return t(c,o,r)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var c=Math.abs(n-o),a=Math.ceil(c/r*50);t(n,o,a)};t.pageScroll=n,t.preventScroll=o,t.isIOS=r,t.isColor=i,t.getScrollview=c,t.checkInview=a,t.addClass=u,t.removeClass=l,t.scrollTop=d},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default={name:"hui-checkbox-group",props:{value:{type:Array,default:[]},color:{validator:function(e){return!e||(0,o.isColor)(e)},default:"#4CD864"},size:{validator:function(e){return/^([1-9]\d*)$/.test(e)},default:20}},methods:{updateValue:function(){var e=this.value;this.childrens=this.$children.filter(function(e){return"hui-checkbox"===e.$options.name}),this.childrens&&this.childrens.forEach(function(t){t.model=e})},change:function(e){this.$emit("input",e)}},watch:{value:function(){this.updateValue()}},mounted:function(){this.$nextTick(this.updateValue)}}},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);t.default={name:"hui-checkbox",data:function(){return{model:[],group:!1,checked:this.value,update:this.change}},directives:{checkall:{bind:function(e,t){e.addEventListener("click",t.value)}}},props:{change:{type:Function},value:{type:[Boolean,String,Number],default:!1},val:{type:[Boolean,String,Number]},disabled:{type:Boolean,default:!1},color:{validator:function(e){return!e||(0,o.isColor)(e)},default:"#4CD864"},size:{validator:function(e){return/^([1-9]\d*)$/.test(e)},default:20},shape:{validator:function(e){return["square","circle"].indexOf(e)>-1},default:"square"},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1}},methods:{changeHandler:function(){var e=this;this.disabled||setTimeout(function(){e.$parent.change(e.model)},0)},iconStyles:function(){var e=(this.group?this.$parent.size:this.size)+"px",t=this.group?this.$parent.color:this.color;return{width:e,height:e,color:t}},checkIconStyles:function(){var e=this.group?this.$parent.size:this.size;return{width:Math.round(e/3.2)+"px",height:Math.round(e/1.7)+"px"}}},watch:{checked:function(e){this.$emit("input",e)},value:function(e){this.checked=e}},created:function(){this.$parent.color&&(this.group=!0)}}},175:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.hui-checkbox{display:inline-block;padding-right:10px}.hui-checkbox>input[type=checkbox]{position:absolute;left:-9999em}.hui-checkbox>input[type=checkbox]:checked+.hui-checkbox-icon{background-color:currentColor;border-color:currentColor}.hui-checkbox>input[type=checkbox]:checked+.hui-checkbox-icon>i{-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(1);transform:translate(-50%,-50%) rotate(45deg) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.hui-checkbox>input[type=checkbox]:disabled~.hui-checkbox-text{color:#ccc}.hui-checkbox>input[type=checkbox]:disabled+.hui-checkbox-icon{border-color:#ccc;background-color:#f3f3f3}.hui-checkbox>input[type=checkbox]:disabled+.hui-checkbox-icon>i{border-color:#ccc}.hui-checkbox-icon{border:1px solid #ccc;border-radius:2px;display:inline-block;position:relative;z-index:10;vertical-align:bottom;pointer-events:none}.hui-checkbox-icon>i{content:"";position:absolute;top:45%;left:50%;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(0);transform:translate(-50%,-50%) rotate(45deg) scale(0)}.hui-checkbox-text{margin-left:1px;font-size:15px;color:#666;pointer-events:none}.hui-checkbox-circle .hui-checkbox-icon{border-radius:50%}',""])},204:function(e,t,n){var o=n(1)(n(70),n(276),null,null);e.exports=o.exports},205:function(e,t,n){n(335);var o=n(1)(n(71),n(291),null,null);e.exports=o.exports},276:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},staticRenderFns:[]}},291:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"hui-checkbox",class:"circle"==e.shape?"hui-checkbox-circle":""},[e.group?[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"checkbox",disabled:e.disabled},domProps:{value:e.val,checked:Array.isArray(e.model)?e._i(e.model,e.val)>-1:e.model},on:{change:[function(t){var n=e.model,o=t.target,r=!!o.checked;if(Array.isArray(n)){var i=e.val,c=e._i(n,i);o.checked?c<0&&(e.model=n.concat([i])):c>-1&&(e.model=n.slice(0,c).concat(n.slice(c+1)))}else e.model=r},e.changeHandler]}})]:[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"},{name:"checkall",rawName:"v-checkall",value:e.update,expression:"update"}],attrs:{type:"checkbox",disabled:e.disabled,"true-value":e.trueValue,"false-value":e.falseValue},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e._q(e.checked,e.trueValue)},on:{change:function(t){var n=e.checked,o=t.target,r=o.checked?e.trueValue:e.falseValue;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&(e.checked=n.concat([i])):c>-1&&(e.checked=n.slice(0,c).concat(n.slice(c+1)))}else e.checked=r}}})],e._v(" "),n("span",{staticClass:"hui-checkbox-icon",style:e.iconStyles()},[n("i",{style:e.checkIconStyles()})]),e._v(" "),e.$slots.default?[n("span",{staticClass:"hui-checkbox-text"},[e._t("default")],2)]:[n("span",{staticClass:"hui-checkbox-text"},[e._v(e._s(e.val))])]],2)},staticRenderFns:[]}},335:function(e,t,n){var o=n(175);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(3)("6757daaa",o,!0)}})});