var __awaiter=this&&this.__awaiter||function(e,n,r,t){function i(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{s(t.next(e))}catch(n){a(n)}}function u(e){try{s(t["throw"](e))}catch(n){a(n)}}function s(e){e.done?r(e.value):i(e.value).then(o,u)}s((t=t.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return s([e,n])}}function s(o){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=n.call(e,r)}catch(u){o=[6,u];i=0}finally{t=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n].length;for(var t=Array(e),i=0,n=0;n<r;n++)for(var a=arguments[n],o=0,u=a.length;o<u;o++,i++)t[i]=a[o];return t};System.register(["./p-950f5a68.system.js","./p-827e9e93.system.js"],(function(e){"use strict";var n,r;return{setters:[function(e){n=e.b},function(e){r=e.OVERLAY_BACK_BUTTON_PRIORITY}],execute:function(){var t=this;var i=0;var a=e("h",new WeakMap);var o=function(e){return{create:function(n){return h(e,n)},dismiss:function(n,r,t){return y(document,n,r,e,t)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,b(document,e)]}))}))}}};var u=e("a",o("ion-alert"));var s=e("b",o("ion-action-sheet"));var c=e("l",o("ion-loading"));var f=e("m",o("ion-modal"));var l=e("p",o("ion-picker"));var d=e("c",o("ion-popover"));var v=e("t",o("ion-toast"));var p=e("d",(function(e){var n=document;m(n);var r=i++;e.overlayIndex=r;if(!e.hasAttribute("id")){e.id="ion-overlay-"+r}}));var h=function(e,n){return customElements.whenDefined(e).then((function(){var r=document;var t=r.createElement(e);t.classList.add("overlay-hidden");Object.assign(t,n);k(r).appendChild(t);return t.componentOnReady()}))};var m=function(e){if(i===0){i=1;e.addEventListener("focusin",(function(n){var r=b(e);if(r&&r.backdropDismiss&&!D(r,n.target)){var t=r.querySelector("input,button");if(t){t.focus()}}}));e.addEventListener("ionBackButton",(function(n){var t=b(e);if(t&&t.backdropDismiss){n.detail.register(r,(function(){return t.dismiss(undefined,S)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var r=b(e);if(r&&r.backdropDismiss){r.dismiss(undefined,S)}}}))}};var y=function(e,n,r,t,i){var a=b(e,t,i);if(!a){return Promise.reject("overlay does not exist")}return a.dismiss(n,r)};var _=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var b=function(e,n,r){var t=_(e,n);return r===undefined?t[t.length-1]:t.find((function(e){return e.id===r}))};var w=e("e",(function(e,r,i,a,o){return __awaiter(t,void 0,void 0,(function(){var t,u;return __generator(this,(function(s){switch(s.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();t=e.enterAnimation?e.enterAnimation:n.get(r,e.mode==="ios"?i:a);return[4,A(e,t,e.el,o)];case 1:u=s.sent();if(u){e.didPresent.emit()}return[2]}}))}))}));var g=e("f",(function(e,r,i,o,u,s,c){return __awaiter(t,void 0,void 0,(function(){var t,f;return __generator(this,(function(l){switch(l.label){case 0:if(!e.presented){return[2,false]}e.presented=false;l.label=1;case 1:l.trys.push([1,4,,5]);e.willDismiss.emit({data:r,role:i});t=e.leaveAnimation?e.leaveAnimation:n.get(o,e.mode==="ios"?u:s);if(!(i!=="gesture"))return[3,3];return[4,A(e,t,e.el,c)];case 2:l.sent();l.label=3;case 3:e.didDismiss.emit({data:r,role:i});a.delete(e);return[3,5];case 4:f=l.sent();console.error(f);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var k=function(e){return e.querySelector("ion-app")||e.body};var A=function(e,r,i,o){return __awaiter(t,void 0,void 0,(function(){var t,u,s;return __generator(this,(function(c){switch(c.label){case 0:i.classList.remove("overlay-hidden");t=i.shadowRoot||e.el;u=r(t,o);if(!e.animated||!n.getBoolean("animated",true)){u.duration(0)}if(e.keyboardClose){u.beforeAddWrite((function(){var e=i.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}s=a.get(e)||[];a.set(e,__spreadArrays(s,[u]));return[4,u.play()];case 1:c.sent();return[2,true]}}))}))};var E=e("g",(function(e,n){var r;var t=new Promise((function(e){return r=e}));x(e,n,(function(e){r(e.detail)}));return t}));var x=function(e,n,r){var t=function(i){e.removeEventListener(n,t);r(i)};e.addEventListener(n,t)};var L=e("i",(function(e){return e==="cancel"||e===S}));var D=function(e,n){while(n){if(n===e){return true}n=n.parentElement}return false};var B=function(e){return e()};var P=e("s",(function(e,r){if(typeof e==="function"){var t=n.get("_zoneGate",B);return t((function(){try{return e(r)}catch(n){console.error(n)}}))}return undefined}));var S=e("B","backdrop")}}}));