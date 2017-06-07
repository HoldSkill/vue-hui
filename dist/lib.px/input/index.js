/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var a=r(193),o=n(a);t.Input=o.default},2:function(e,t){e.exports=function(e,t,r,n){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var l=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:a,exports:o,options:u}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},4:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(o(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(o(r.parts[a]));c[r.id]={id:r.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return f;n.parentNode.removeChild(n)}if(v){var o=m++;n=p||(p=a()),t=i.bind(null,n,o,!1),r=i.bind(null,n,o,!0)}else n=a(),t=u.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function u(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document,s=r(5),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,m=0,h=!1,f=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var a=s(e,t);return n(a),function(t){for(var r=[],o=0;o<a.length;o++){var i=a[o],u=c[i.id];u.refs--,r.push(u)}t?(a=s(e,t),n(a)):a=[];for(var o=0;o<r.length;o++){var u=r[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete c[u.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var o=t[a],i=o[0],u=o[1],l=o[2],s=o[3],c={id:e+":"+a,css:u,media:l,sourceMap:s};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}},170:function(e,t,r){t=e.exports=r(3)(),t.push([e.id,'.m-input{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-input>input{display:block;width:100%;height:100%;border:none;font-size:inherit}.m-input>.input-clear,.m-input>.input-error,.m-input>.input-password,.m-input>.input-success{padding-left:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-input>.input-clear:after,.m-input>.input-error:after,.m-input>.input-password:after,.m-input>.input-success:after{font-family:HUI-INLAY}.m-input>.input-clear:after{content:"\\E60C";color:#b2b2b2;font-size:15px}.m-input>.input-error:after{content:"\\E614";color:#f43530;font-size:20px}.m-input>.input-success:after{content:"\\E601";color:#09bb07;font-size:20px}.m-input>.input-password:after{content:"\\E77E";color:#b2b2b2;font-size:22px}.m-input>.input-password-open:after{content:"\\E77D";color:#434343}',""])},193:function(e,t,r){r(232);var n=r(2)(r(260),r(210),null,null);e.exports=n.exports},210:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-input"},["mobile"==e.regex?[r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"tel",pattern:"[0-9]*",name:e.name,maxlength:"11",placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}})]:["password"==e.type?[e.showPwd?e._e():r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"password",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),e.showPwd?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"text",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e()]:e._e(),e._v(" "),"text"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"text",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"number"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"number",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:[e.blurHandler,function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"email"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"email",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"tel"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"tel",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"datetime-local"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"datetime-local",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"date"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"date",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e(),e._v(" "),"time"==e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"time",name:e.name,maxlength:e.max,placeholder:e.placeholder,autocomplete:e.autocomplete,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.currentValue},on:{focus:function(t){e.showClear=!0},blur:e.blurHandler,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):e._e()],e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.showClearIcon&&e.showClear&&!e.isempty,expression:"showClearIcon && showClear && !isempty"}],staticClass:"input-clear",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:e.clearInput}}),e._v(" "),e.showErrorIcon?r("span",{directives:[{name:"show",rawName:"v-show",value:(!!e.regex||!!e.min||!!e.max||e.required)&&"password"!=e.type&&e.iserror||e.checkRequired,expression:"((!!regex || !!min || !!max || required) && type != 'password' && iserror) || checkRequired"}],staticClass:"input-error"}):e._e(),e._v(" "),e.showSuccessIcon?r("span",{directives:[{name:"show",rawName:"v-show",value:(!!e.regex||!!e.min||!!e.max||e.required)&&"password"!=e.type&&!e.iserror&&""!=e.currentValue,expression:"(!!regex || !!min || !!max || required) && type != 'password' && !iserror && currentValue != ''"}],staticClass:"input-success"}):e._e(),e._v(" "),"password"==e.type?r("a",{staticClass:"input-password",class:e.showPwd?"input-password-open":"",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:function(t){t.stopPropagation(),e.showPwd=!e.showPwd}}}):e._e()],2)},staticRenderFns:[]}},232:function(e,t,r){var n=r(170);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(4)("2c569260",n,!0)},260:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-input",data:function(){return{currentValue:"",isempty:!0,iserror:!1,showPwd:!1,showClear:!1,checkRequired:!1,valid:!0,errorMsg:"",errorCode:"",regexObj:{email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",mobile:"^(86)?1[3,4,5,7,8]\\d{9}$",bankcard:"^\\d{15,19}$"}}},props:{name:String,placeholder:String,value:[String,Number],readonly:Boolean,disabled:Boolean,regex:String,autocomplete:{type:String,default:"off"},showClearIcon:{type:Boolean,default:!0},showErrorIcon:{type:Boolean,default:!0},showSuccessIcon:{type:Boolean,default:!0},required:{type:Boolean,default:!1},type:{validator:function(e){return["text","password","email","number","tel","datetime-local","date","time"].indexOf(e)>-1},default:"text"},max:{validator:function(e){return/^\d*$/.test(e)}},min:{validator:function(e){return/^\d*$/.test(e)}}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.isempty=!e,this.validatorInput(e),this.emitInput()}},methods:{init:function(){return this.currentValue=this.value,this.required&&""==this.currentValue?void this.setError("不能为空","NOT_NULL"):void(this.min&&this.currentValue.length<this.min&&this.setError("最少输入"+this.min+"位字符","NOT_MIN_SIZE"))},validatorInput:function(e){if(""==e)return void(this.required&&(this.setError("不能为空","NOT_NULL"),this.iserror=!0,this.checkRequired=!0));if(this.checkRequired=!1,this.min&&e.length<this.min&&0!=e.length)return this.setError("最少输入"+this.min+"位字符","NOT_MIN_SIZE"),void(this.iserror=!0);var t="bankcard"==this.regex?e.replace(/\s/g,""):e,r=this.regexObj[this.regex]?this.regexObj[this.regex]:this.trim(this.regex,"/");return this.regex&&!new RegExp(r).test(t)?(this.setError("输入字符不符合规则","NOT_REGEX_RULE"),void(this.iserror=!0)):(this.iserror=!1,this.valid=!0,this.errorMsg="",void(this.errorCode=""))},blurHandler:function(){var e=this;this.validatorInput(this.currentValue),setTimeout(function(){e.showClear=!1},200)},clearInput:function(){this.currentValue="",this.emitInput()},emitInput:function(){return"bankcard"==this.regex?(/\S{5}/.test(this.currentValue)&&(this.currentValue=this.currentValue.replace(/\s/g,"").replace(/(.{4})/g,"$1 ")),void this.$emit("input",this.currentValue.replace(/\s/g,""))):void this.$emit("input",this.currentValue)},setError:function(e,t){this.errorMsg=e,this.errorCode=t,this.valid=!1},trim:function(e,t){return e?e.replace(new RegExp("^\\"+t+"+|\\"+t+"+$","g"),""):e}},created:function(){this.init()}}}})});