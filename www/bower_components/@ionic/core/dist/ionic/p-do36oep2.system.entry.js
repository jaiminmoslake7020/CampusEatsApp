var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{l(r.next(t))}catch(e){o(e)}}function a(t){try{l(r["throw"](t))}catch(e){o(e)}}function l(t){t.done?n(t.value):i(t.value).then(s,a)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return l([t,e])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(a){s=[6,a];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-5a0aa855.system.js","./p-950f5a68.system.js","./p-43ab7c15.system.js","./p-e7e1b90f.system.js","./p-2fa93388.system.js","./p-61d1f5a5.system.js","./p-4ad78df7.system.js","./p-6079b57f.system.js"],(function(t,e){"use strict";var n,r,i,o,s,a,l,c,u,f,h,d,p,v,b,y,g;return{setters:[function(t){n=t.r;r=t.c;i=t.h;o=t.H;s=t.e;a=t.d;l=t.f;c=t.w},function(t){u=t.b;f=t.i},function(t){h=t.c},function(t){d=t.g},function(){},function(t){p=t.c;v=t.h},function(t){b=t.a;y=t.d},function(t){g=t.t}],execute:function(){var m=t("ion_app",function(){function t(t){n(this,t)}t.prototype.componentDidLoad=function(){{E((function(){var t=f(window,"hybrid");if(!u.getBoolean("_testing")){e.import("./p-89d71da6.system.js").then((function(t){return t.startTapClick(u)}))}if(u.getBoolean("statusTap",t)){e.import("./p-074a5da6.system.js").then((function(t){return t.startStatusTap()}))}if(u.getBoolean("inputShims",S())){e.import("./p-ade61b4f.system.js").then((function(t){return t.startInputShims(u)}))}if(u.getBoolean("hardwareBackButton",t)){e.import("./p-827e9e93.system.js").then((function(t){return t.startHardwareBackButton()}))}e.import("./p-457320e1.system.js").then((function(t){return t.startFocusVisible()}))}))}};t.prototype.render=function(){var t;var e=r(this);return i(o,{class:(t={},t[e]=true,t["ion-page"]=true,t["force-statusbar-padding"]=u.getBoolean("_forceStatusbarPadding"),t)})};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:true,configurable:true});return t}());var S=function(){return f(window,"ios")&&f(window,"mobile")};var E=function(t){if("requestIdleCallback"in window){window.requestIdleCallback(t)}else{setTimeout(t,32)}};var w=t("ion_buttons",function(){function t(t){n(this,t);this.collapse=false}t.prototype.render=function(){var t;var e=r(this);return i(o,{class:(t={},t[e]=true,t["buttons-collapse"]=this.collapse,t)})};Object.defineProperty(t,"style",{get:function(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:currentColor}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s  .button-outline {--border-color:currentColor}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"},enumerable:true,configurable:true});return t}());var _=t("ion_content",function(){function t(t){n(this,t);this.isScrolling=false;this.lastScroll=0;this.queued=false;this.cTop=-1;this.cBottom=-1;this.mode=r(this);this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:undefined,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:undefined,isScrolling:true};this.fullscreen=false;this.scrollX=false;this.scrollY=true;this.scrollEvents=false;this.ionScrollStart=a(this,"ionScrollStart",7);this.ionScroll=a(this,"ionScroll",7);this.ionScrollEnd=a(this,"ionScrollEnd",7)}t.prototype.disconnectedCallback=function(){this.onScrollEnd()};t.prototype.componentDidLoad=function(){this.resize()};t.prototype.onClick=function(t){if(this.isScrolling){t.preventDefault();t.stopPropagation()}};t.prototype.shouldForceOverscroll=function(){var t=this,e=t.forceOverscroll,n=t.mode;return e===undefined?n==="ios"&&f("ios"):e};t.prototype.resize=function(){if(this.fullscreen){l(this.readDimensions.bind(this))}else if(this.cTop!==0||this.cBottom!==0){this.cTop=this.cBottom=0;this.el.forceUpdate()}};t.prototype.readDimensions=function(){var t=L(this.el);var e=Math.max(this.el.offsetTop,0);var n=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);var r=e!==this.cTop||n!==this.cBottom;if(r){this.cTop=e;this.cBottom=n;this.el.forceUpdate()}};t.prototype.onScroll=function(t){var e=this;var n=Date.now();var r=!this.isScrolling;this.lastScroll=n;if(r){this.onScrollStart()}if(!this.queued&&this.scrollEvents){this.queued=true;l((function(n){e.queued=false;e.detail.event=t;C(e.detail,e.scrollEl,n,r);e.ionScroll.emit(e.detail)}))}};t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)};t.prototype.scrollToTop=function(t){if(t===void 0){t=0}return this.scrollToPoint(undefined,0,t)};t.prototype.scrollToBottom=function(t){if(t===void 0){t=0}var e=this.scrollEl.scrollHeight-this.scrollEl.clientHeight;return this.scrollToPoint(undefined,e,t)};t.prototype.scrollByPoint=function(t,e,n){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,n)};t.prototype.scrollToPoint=function(t,e,n){if(n===void 0){n=0}return __awaiter(this,void 0,void 0,(function(){var r,i,o,s,a,l,c,u,f;return __generator(this,(function(h){r=this.scrollEl;if(n<32){if(e!=null){r.scrollTop=e}if(t!=null){r.scrollLeft=t}return[2]}o=0;s=new Promise((function(t){return i=t}));a=r.scrollTop;l=r.scrollLeft;c=e!=null?e-a:0;u=t!=null?t-l:0;f=function(t){var e=Math.min(1,(t-o)/n)-1;var s=Math.pow(e,3)+1;if(c!==0){r.scrollTop=Math.floor(s*c+a)}if(u!==0){r.scrollLeft=Math.floor(s*u+l)}if(s<1){requestAnimationFrame(f)}else{i()}};requestAnimationFrame((function(t){o=t;f(t)}));return[2,s]}))}))};t.prototype.onScrollStart=function(){var t=this;this.isScrolling=true;this.ionScrollStart.emit({isScrolling:true});if(this.watchDog){clearInterval(this.watchDog)}this.watchDog=setInterval((function(){if(t.lastScroll<Date.now()-120){t.onScrollEnd()}}),100)};t.prototype.onScrollEnd=function(){clearInterval(this.watchDog);this.watchDog=null;if(this.isScrolling){this.isScrolling=false;this.ionScrollEnd.emit({isScrolling:false})}};t.prototype.render=function(){var t;var e=this;var n=this,s=n.scrollX,a=n.scrollY;var l=r(this);var c=this.shouldForceOverscroll();var f=l==="ios"&&u.getBoolean("experimentalTransitionShadow",true);this.resize();return i(o,{class:Object.assign(Object.assign({},p(this.color)),(t={},t[l]=true,t["content-sizing"]=v("ion-popover",this.el),t["overscroll"]=c,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},i("div",{id:"background-content"}),i("main",{class:{"inner-scroll":true,"scroll-x":s,"scroll-y":a,overscroll:(s||a)&&c},ref:function(t){return e.scrollEl=t},onScroll:this.scrollEvents?function(t){return e.onScroll(t)}:undefined},i("slot",null)),f?i("div",{class:"transition-effect"},i("div",{class:"transition-cover"}),i("div",{class:"transition-shadow"})):null,i("slot",{name:"fixed"}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}#background-content{background:var(--background)}#background-content,.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute}.inner-scroll{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}"},enumerable:true,configurable:true});return t}());var T=function(t){if(t.parentElement){return t.parentElement}if(t.parentNode&&t.parentNode.host){return t.parentNode.host}return null};var L=function(t){var e=t.closest("ion-tabs");if(e){return e}var n=t.closest("ion-app,ion-page,.ion-page,page-inner");if(n){return n}return T(t)};var C=function(t,e,n,r){var i=t.currentX;var o=t.currentY;var s=t.currentTime;var a=e.scrollLeft;var l=e.scrollTop;var c=n-s;if(r){t.startTime=n;t.startX=a;t.startY=l;t.velocityX=t.velocityY=0}t.currentTime=n;t.currentX=t.scrollLeft=a;t.currentY=t.scrollTop=l;t.deltaX=a-t.startX;t.deltaY=l-t.startY;if(c>0&&c<100){var u=(a-i)/c;var f=(l-o)/c;t.velocityX=u*.7+t.velocityX*.3;t.velocityY=f*.7+t.velocityY*.3}};var H=t("ion_footer",function(){function t(t){n(this,t);this.translucent=false}t.prototype.render=function(){var t;var e=r(this);var n=this.translucent;return i(o,{role:"contentinfo",class:(t={},t[e]=true,t["footer-"+e]=true,t["footer-translucent"]=n,t["footer-translucent-"+e]=n,t)},e==="ios"&&n&&i("div",{class:"footer-background"}),i("slot",null))};Object.defineProperty(t,"style",{get:function(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md.ion-no-border:before{display:none}"},enumerable:true,configurable:true});return t}());var O="all 0.2s ease-in-out";var P=function(t){var e=document.querySelector(t+".ion-cloned-element");if(e!==null){return e}var n=document.createElement(t);n.classList.add("ion-cloned-element");n.style.setProperty("display","none");document.body.appendChild(n);return n};var k=function(t){if(!t){return}var e=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(e).map((function(t){var e=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:e,innerTitleEl:e?e.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}}))||[]}};var j=function(t,e,n){l((function(){var r=t.scrollTop;var i=h(1,1+-r/500,1.1);var o=n.querySelector("ion-refresher.refresher-native");if(o===null){c((function(){A(e.toolbars,i)}))}}))};var D=function(t,e){if(e===undefined){t.background.style.removeProperty("--opacity")}else{t.background.style.setProperty("--opacity",e.toString())}};var B=function(t,e){if(!t[0].isIntersecting){return}var n=t[0].intersectionRatio>.9?0:(1-t[0].intersectionRatio)*100/75;e.toolbars.forEach((function(t){D(t,n===1?undefined:n)}))};var X=function(t,e,n){c((function(){B(t,e);var r=t[0];var i=r.intersectionRect;var o=i.width*i.height;var s=r.rootBounds.width*r.rootBounds.height;var a=o===0&&s===0;var l=Math.abs(i.left-r.boundingClientRect.left);var c=Math.abs(i.right-r.boundingClientRect.right);var u=o>0&&(l>=5||c>=5);if(a||u){return}if(r.isIntersecting){Y(e,false);Y(n)}else{var f=i.x===0&&i.y===0||i.width!==0&&i.height!==0;if(f){Y(e);Y(n,false);D(e.toolbars[0])}}}))};var Y=function(t,e){if(e===void 0){e=true}if(e){t.el.classList.remove("header-collapse-condense-inactive")}else{t.el.classList.add("header-collapse-condense-inactive")}};var A=function(t,e,n){if(t===void 0){t=[]}if(e===void 0){e=1}if(n===void 0){n=false}t.forEach((function(t){var r=t.ionTitleEl;var i=t.innerTitleEl;if(!r||r.size!=="large"){return}i.style.transformOrigin="left center";i.style.transition=n?O:"";i.style.transform="scale3d("+e+", "+e+", 1)"}))};var q=t("ion_header",function(){function t(t){n(this,t);this.collapsibleHeaderInitialized=false;this.translucent=false}t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidUnload=function(){this.destroyCollapsibleHeader()};t.prototype.checkCollapsibleHeader=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,i;return __generator(this,(function(o){switch(o.label){case 0:t=this.collapse==="condense";e=t&&r(this)==="ios"?t:false;if(!(!e&&this.collapsibleHeaderInitialized))return[3,1];this.destroyCollapsibleHeader();return[3,3];case 1:if(!(e&&!this.collapsibleHeaderInitialized))return[3,3];n=this.el.closest("ion-app,ion-page,.ion-page,page-inner");i=n?n.querySelector("ion-content"):null;return[4,this.setupCollapsibleHeader(i,n)];case 2:o.sent();o.label=3;case 3:return[2]}}))}))};t.prototype.destroyCollapsibleHeader=function(){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=undefined}if(this.scrollEl&&this.contentScrollCallback){this.scrollEl.removeEventListener("scroll",this.contentScrollCallback);this.contentScrollCallback=undefined}if(this.collapsibleMainHeader){this.collapsibleMainHeader.classList.remove("header-collapse-main");this.collapsibleMainHeader=undefined}};t.prototype.setupCollapsibleHeader=function(t,e){return __awaiter(this,void 0,void 0,(function(){var n,r,i,o,s;var a=this;return __generator(this,(function(l){switch(l.label){case 0:if(!t||!e){console.error("ion-header requires a content to collapse, make sure there is an ion-content.");return[2]}n=this;return[4,t.getScrollElement()];case 1:n.scrollEl=l.sent();r=e.querySelectorAll("ion-header");this.collapsibleMainHeader=Array.from(r).find((function(t){return t.collapse!=="condense"}));if(!this.collapsibleMainHeader){return[2]}i=k(this.collapsibleMainHeader);o=k(this.el);if(!i||!o){return[2]}Y(i,false);i.toolbars.forEach((function(t){D(t,0)}));s=function(t){X(t,i,o)};this.intersectionObserver=new IntersectionObserver(s,{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]});this.intersectionObserver.observe(o.toolbars[o.toolbars.length-1].el);this.contentScrollCallback=function(){j(a.scrollEl,o,t)};this.scrollEl.addEventListener("scroll",this.contentScrollCallback);c((function(){P("ion-title");P("ion-back-button");a.collapsibleMainHeader.classList.add("header-collapse-main")}));this.collapsibleHeaderInitialized=true;return[2]}}))}))};t.prototype.render=function(){var t;var e=this.translucent;var n=r(this);var s=this.collapse||"none";return i(o,{role:"banner",class:(t={},t[n]=true,t["header-"+n]=true,t["header-translucent"]=this.translucent,t["header-collapse-"+s]=true,t["header-translucent-"+n]=this.translucent,t)},n==="ios"&&e&&i("div",{class:"header-background"}),i("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md.ion-no-border:after{display:none}"},enumerable:true,configurable:true});return t}());var R=t("ion_router_outlet",function(){function t(t){n(this,t);this.animationEnabled=true;this.mode=r(this);this.animated=true;this.ionNavWillLoad=a(this,"ionNavWillLoad",7);this.ionNavWillChange=a(this,"ionNavWillChange",3);this.ionNavDidChange=a(this,"ionNavDidChange",3)}t.prototype.swipeHandlerChanged=function(){if(this.gesture){this.gesture.enable(this.swipeHandler!==undefined)}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t;var n=this;return __generator(this,(function(r){switch(r.label){case 0:t=this;return[4,e.import("./p-3c19e12f.system.js")];case 1:t.gesture=r.sent().createSwipeBackGesture(this.el,(function(){return!!n.swipeHandler&&n.swipeHandler.canStart()&&n.animationEnabled}),(function(){return n.swipeHandler&&n.swipeHandler.onStart()}),(function(t){return n.ani&&n.ani.progressStep(t)}),(function(t,e,r){if(n.ani){n.animationEnabled=false;n.ani.onFinish((function(){n.animationEnabled=true;if(n.swipeHandler){n.swipeHandler.onEnd(t)}}),{oneTimeCallback:true});var i=t?-.001:.001;if(!t){n.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");i+=d([0,0],[1,0],[.68,.28],[1,1],e)[0]}else{i+=d([0,0],[.32,.72],[0,1],[1,1],e)[0]}n.ani.progressEnd(t?1:0,i,r)}}));this.swipeHandlerChanged();return[2]}}))}))};t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.commit=function(t,e,n){return __awaiter(this,void 0,void 0,(function(){var r,i,o;return __generator(this,(function(s){switch(s.label){case 0:return[4,this.lock()];case 1:r=s.sent();i=false;s.label=2;case 2:s.trys.push([2,4,,5]);return[4,this.transition(t,e,n)];case 3:i=s.sent();return[3,5];case 4:o=s.sent();console.error(o);return[3,5];case 5:r();return[2,i]}}))}))};t.prototype.setRouteId=function(t,e,n){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:return[4,this.setRoot(t,e,{duration:n==="root"?0:undefined,direction:n==="back"?"back":"forward"})];case 1:r=i.sent();return[2,{changed:r,element:this.activeEl}]}}))}))};t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.activeEl;return[2,t?{id:t.tagName,element:t}:undefined]}))}))};t.prototype.setRoot=function(t,e,n){return __awaiter(this,void 0,void 0,(function(){var r,i;return __generator(this,(function(o){switch(o.label){case 0:if(this.activeComponent===t){return[2,false]}r=this.activeEl;return[4,b(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)];case 1:i=o.sent();this.activeComponent=t;this.activeEl=i;return[4,this.commit(i,r,n)];case 2:o.sent();return[4,y(this.delegate,r)];case 3:o.sent();return[2,true]}}))}))};t.prototype.transition=function(t,e,n){if(n===void 0){n={}}return __awaiter(this,void 0,void 0,(function(){var r,i,o,s,a;var l=this;return __generator(this,(function(c){switch(c.label){case 0:if(e===t){return[2,false]}this.ionNavWillChange.emit();r=this,i=r.el,o=r.mode;s=this.animated&&u.getBoolean("animated",true);a=this.animation||n.animationBuilder||u.get("navAnimation");return[4,g(Object.assign({mode:o,animated:s,animationBuilder:a,enteringEl:t,leavingEl:e,baseEl:i,progressCallback:n.progressAnimation?function(t){return l.ani=t}:undefined},n))];case 1:c.sent();this.ionNavDidChange.emit();return[2,true]}}))}))};t.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){switch(n.label){case 0:t=this.waitPromise;this.waitPromise=new Promise((function(t){return e=t}));if(!(t!==undefined))return[3,2];return[4,t];case 1:n.sent();n.label=2;case 2:return[2,e]}}))}))};t.prototype.render=function(){return i("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{swipeHandler:["swipeHandlerChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:true,configurable:true});return t}());var z=t("ion_title",function(){function t(t){n(this,t);this.ionStyle=a(this,"ionStyle",7)}t.prototype.sizeChanged=function(){this.emitStyle()};t.prototype.connectedCallback=function(){this.emitStyle()};t.prototype.emitStyle=function(){var t;var e=this.getSize();this.ionStyle.emit((t={},t["title-"+e]=true,t))};t.prototype.getSize=function(){return this.size!==undefined?this.size:"default"};t.prototype.render=function(){var t;var e=r(this);var n=this.getSize();return i(o,{class:Object.assign((t={},t[e]=true,t["title-"+n]=true,t),p(this.color))},i("div",{class:"toolbar-title"},i("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{size:["sizeChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:400}"},enumerable:true,configurable:true});return t}());var M=t("ion_toolbar",function(){function t(t){n(this,t);this.childrenStyles=new Map}t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons"));var e=t.find((function(t){return t.slot==="start"}));if(e){e.classList.add("buttons-first-slot")}var n=t.reverse();var r=n.find((function(t){return t.slot==="end"}))||n.find((function(t){return t.slot==="primary"}))||n.find((function(t){return t.slot==="secondary"}));if(r){r.classList.add("buttons-last-slot")}};t.prototype.childrenStyle=function(t){t.stopPropagation();var e=t.target.tagName;var n=t.detail;var r={};var i=this.childrenStyles.get(e)||{};var o=false;Object.keys(n).forEach((function(t){var e="toolbar-"+t;var s=n[t];if(s!==i[e]){o=true}if(s){r[e]=true}}));if(o){this.childrenStyles.set(e,r);this.el.forceUpdate()}};t.prototype.render=function(){var t;var e=r(this);var n={};this.childrenStyles.forEach((function(t){Object.assign(n,t)}));return i(o,{class:Object.assign(Object.assign((t={"in-toolbar":v("ion-toolbar",this.el)},t[e]=true,t),n),p(this.color))},i("div",{class:"toolbar-background"}),i("div",{class:"toolbar-container"},i("slot",{name:"start"}),i("slot",{name:"secondary"}),i("div",{class:"toolbar-content"},i("slot",null)),i("slot",{name:"primary"}),i("slot",{name:"end"})))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"},enumerable:true,configurable:true});return t}())}}}));