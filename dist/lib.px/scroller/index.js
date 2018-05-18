/*! vue-hui v0.0.3 by HUI TEAM (c) 2018 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(s){if(o[s])return o[s].exports;var i=o[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/dist/",e(0)}({0:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Scroller=void 0;var i=o(364),r=s(i);e.Scroller=r.default},1:function(t,e){t.exports=function(t,e,o,s){var i,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,r=t.default);var n="function"==typeof r?r.options:r;if(e&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns),o&&(n._scopeId=o),s){var l=n.computed||(n.computed={});Object.keys(s).forEach(function(t){var e=s[t];l[t]=function(){return e}})}return{esModule:i,exports:r,options:n}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(s[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&s[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},4:function(t,e,o){function s(t){for(var e=0;e<t.length;e++){var o=t[e],s=u[o.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](o.parts[i]);for(;i<o.parts.length;i++)s.parts.push(r(o.parts[i]));s.parts.length>o.parts.length&&(s.parts.length=o.parts.length)}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(r(o.parts[i]));u[o.id]={id:o.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function r(t){var e,o,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(f)return v;s.parentNode.removeChild(s)}if(m){var r=c++;s=h||(h=i()),e=a.bind(null,s,r,!1),o=a.bind(null,s,r,!0)}else s=i(),e=n.bind(null,s),o=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else o()}}function a(t,e,o,s){var i=o?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function n(t,e){var o=e.css,s=e.media,i=e.sourceMap;if(s&&t.setAttribute("media",s),i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document,d=o(5),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,c=0,f=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o){f=o;var i=d(t,e);return s(i),function(e){for(var o=[],r=0;r<i.length;r++){var a=i[r],n=u[a.id];n.refs--,o.push(n)}e?(i=d(t,e),s(i)):i=[];for(var r=0;r<o.length;r++){var n=o[r];if(0===n.refs){for(var l=0;l<n.parts.length;l++)n.parts[l]();delete u[n.id]}}}};var g=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var o=[],s={},i=0;i<e.length;i++){var r=e[i],a=r[0],n=r[1],l=r[2],d=r[3],u={id:t+":"+i,css:n,media:l,sourceMap:d};s[a]?s[a].parts.push(u):o.push(s[a]={id:a,parts:[u]})}return o}},228:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={INITIAL:0,UPINDENT:1,UPREADY:2,UPLOADING:3,DOWNINDENT:-1,DOWNLOADING:-3,NOMORE:-9};e.default={name:"hui-scroller",props:{touch:{default:!0},autoLoad:Boolean,distance:{type:Number,default:50},threshold:{type:Number,default:20},onScroll:Function,refresh:Function,loadMore:Function,hasMore:Boolean,useMask:Boolean,options:{type:Object,default:function(){return{tips:{upPull:"↓ 继续下拉刷新",upRelease:"↑ 释放更新列表",upLoading:"正在刷新...",downPull:"↑上拉加载更多",downLoading:"正在加载下一页数据...",downEnd:"没有更多数据了"}}}}},data:function(){return{PULLSTATUS:o,pullStatus:0,offsetHeight:0,animateUp:!1,loading:!1}},methods:{done:function(t){(this._direction="down")&&(this.offsetHeight=0),this.loading=!1,this.pullStatus=o.INITIAL;var e=this;setTimeout(function(){if(e.$el){e._scrollHeight=e.$el.scrollHeight,e._offsetHeight=e.$el.offsetHeight;var s=e.$el.querySelector(".dropload-down");s&&s.offsetTop<e._offsetHeight&&e.hasMore&&e.loadMore&&!t&&(e._direction="up",e.loading=!0,e.pullStatus=o.DOWNLOADING,e.loadMore())}},500)},_onTouchStart:function(t){!this.loading&&this.touch&&(this.animateUp=!1,this._touchScrollTop=this.$el.scrollTop)},_onTouchMove:function(t,e,s,i){if(!this.loading&&this.touch){this._moveY=t.y,this._moveY>0?this._direction="down":this._direction="up";var r=Math.abs(this._moveY);this.refresh&&this._touchScrollTop<=0&&"down"===this._direction&&(i.preventDefault(),r<=this.distance?(this.offsetHeight=r,this.pullStatus=o.UPINDENT):r>this.distance&&r<=2*this.distance?(this.offsetHeight=this.distance+.5*(r-this.distance),this.pullStatus=o.UPREADY):this.offsetHeight=this.distance+.5*this.distance+.2*(r-2*this.distance))}},_onTouchEnd:function(){if(!this.loading&&this.touch){var t=Math.abs(this._moveY);this.refresh&&this._touchScrollTop<=0&&"down"===this._direction&&(this.animateUp=!0,t>this.distance?(this.offsetHeight=50,this.pullStatus=o.UPLOADING,this.loading=!0,this.refresh()):this.offsetHeight=0,this._moveY=0)}},_onScroll:function(t){if(this.touch&&("function"==typeof this.onScroll&&this.onScroll(this.$el.clientHeight,this.$el.scrollTop),!this.loading&&(this._scrollTop=this.$el.scrollTop,this._direction="up",this.loadMore&&"up"===this._direction))){var e=this.$el.scrollHeight-(this.$el.offsetHeight+this.$el.scrollTop);if(e>50&&this.pullStatus===o.DOWNINDENT)this.pullStatus=o.INITIAL;else if(e<=50&&e>this.threshold&&this.hasMore)this.pullStatus=o.DOWNINDENT;else if(e<=this.threshold)if(this.loading=!0,this.hasMore)this.pullStatus=o.DOWNLOADING,this.loadMore();else{this.pullStatus=o.NOMORE;var s=this;setTimeout(function(){s.done()},1e3)}}}},mounted:function(){this.autoLoad&&this.refresh&&(this.animateUp=!0,this.offsetHeight=50,this.pullStatus=o.UPLOADING,this.refresh())}}},273:function(t,e,o){e=t.exports=o(3)(),e.push([t.id,".vmc-dropload{height:100%;box-sizing:border-box;overflow-y:scroll}.vmc-dropload .dropload-mask{position:absolute;left:0;top:0;right:0;bottom:0}.vmc-dropload .dropload-down,.vmc-dropload .dropload-up{position:relative;height:0;overflow:hidden;font-size:12px;-webkit-transform:translateZ(0);transform:translateZ(0)}.vmc-dropload .dropload-down{height:50px}.vmc-dropload .dropload-load,.vmc-dropload .dropload-noData,.vmc-dropload .dropload-refresh,.vmc-dropload .dropload-update{height:50px;line-height:50px;text-align:center}.vmc-dropload .dropload-load .loading{display:inline-block;height:15px;width:15px;border-radius:100%;margin:6px;border:2px solid #666;border-bottom-color:transparent;vertical-align:middle;-webkit-animation:a .75s linear infinite;animation:a .75s linear infinite}@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg)}to{-webkit-transform:rotate(1turn)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vmc-dropload .animate-disappear{-webkit-transition:all .3s linear;transition:all .3s linear}",""])},364:function(t,e,o){o(434);var s=o(1)(o(228),o(378),null,null);t.exports=s.exports},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"touch-events",rawName:"v-touch-events"}],ref:"vueScroll",staticClass:"vmc-dropload",on:{scroll:t._onScroll}},[t.refresh?o("div",{staticClass:"dropload-up",class:{"animate-disappear":t.animateUp},style:{height:t.offsetHeight+"px"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.pullStatus==t.PULLSTATUS.UPINDENT,expression:"pullStatus == PULLSTATUS.UPINDENT"}],staticClass:"dropload-refresh"},[t._v(t._s(t.options.tips.upPull))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.pullStatus==t.PULLSTATUS.UPREADY,expression:"pullStatus == PULLSTATUS.UPREADY"}],staticClass:"dropload-update"},[t._v(t._s(t.options.tips.upRelease))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.pullStatus==t.PULLSTATUS.UPLOADING,expression:"pullStatus == PULLSTATUS.UPLOADING"}],staticClass:"dropload-load"},[o("span",{staticClass:"loading"}),t._v(" "+t._s(t.options.tips.upLoading))])]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.loadMore?o("div",{staticClass:"dropload-down"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.pullStatus==t.PULLSTATUS.DOWNINDENT,expression:"pullStatus == PULLSTATUS.DOWNINDENT"}],staticClass:"dropload-refresh"},[t._v(t._s(t.options.tips.downPull))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.pullStatus==t.PULLSTATUS.DOWNLOADING,expression:"pullStatus == PULLSTATUS.DOWNLOADING"}],staticClass:"dropload-load"},[o("span",{staticClass:"loading"}),t._v(" "+t._s(t.options.tips.downLoading))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.pullStatus==t.PULLSTATUS.NOMORE,expression:"pullStatus == PULLSTATUS.NOMORE"}],staticClass:"dropload-noData"},[t._v(t._s(t.options.tips.downEnd))])]):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.loading&&t.useMask,expression:"loading && useMask"},{name:"stop",rawName:"v-stop"}],staticClass:"dropload-mask"})],2)},staticRenderFns:[]}},434:function(t,e,o){var s=o(273);"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);o(4)("a6546d4c",s,!0)}})});