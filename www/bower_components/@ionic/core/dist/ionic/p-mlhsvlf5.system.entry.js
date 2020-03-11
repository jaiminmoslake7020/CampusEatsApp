var __awaiter=this&&this.__awaiter||function(t,e,i,n){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function o(t){try{u(n.next(t))}catch(e){r(e)}}function a(t){try{u(n["throw"](t))}catch(e){r(e)}}function u(t){t.done?i(t.value):s(t.value).then(o,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,s&&(r=o[0]&2?s["return"]:o[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;if(s=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;s=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=e.call(t,i)}catch(a){o=[6,a];s=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-5a0aa855.system.js","./p-950f5a68.system.js","./p-43ab7c15.system.js","./p-f091fd90.system.js","./p-e7e1b90f.system.js","./p-a4f88ff3.system.js","./p-827e9e93.system.js","./p-3169db1e.system.js","./p-61d1f5a5.system.js"],(function(t,e){"use strict";var i,n,s,r,o,a,u,c,l,h,d,f,p,m,b;return{setters:[function(t){i=t.r;n=t.c;s=t.d;r=t.h;o=t.H;a=t.e},function(t){u=t.b},function(t){c=t.i;l=t.b;h=t.c},function(){},function(t){d=t.g},function(t){f=t.GESTURE_CONTROLLER},function(){},function(t){p=t.m},function(t){m=t.c;b=t.h}],execute:function(){var v=this;var g="cubic-bezier(0.32,0.72,0,1)";var y="cubic-bezier(0.0,0.0,0.2,1)";var _="cubic-bezier(1, 0, 0.68, 0.28)";var E="cubic-bezier(0.4, 0, 0.6, 1)";var w=t("ion_menu",function(){function t(t){i(this,t);this.lastOnEnd=0;this.blocker=f.createBlocker({disableScroll:true});this.mode=n(this);this.easing=this.mode==="ios"?g:y;this.easingReverse=this.mode==="ios"?_:E;this.isAnimating=false;this._isOpen=false;this.isPaneVisible=false;this.isEndSide=false;this.disabled=false;this.side="start";this.swipeGesture=true;this.maxEdgeStart=50;this.ionWillOpen=s(this,"ionWillOpen",7);this.ionWillClose=s(this,"ionWillClose",7);this.ionDidOpen=s(this,"ionDidOpen",7);this.ionDidClose=s(this,"ionDidClose",7);this.ionMenuChange=s(this,"ionMenuChange",7)}t.prototype.typeChanged=function(t,e){var i=this.contentEl;if(i){if(e!==undefined){i.classList.remove("menu-content-"+e)}i.classList.add("menu-content-"+t);i.removeAttribute("style")}if(this.menuInnerEl){this.menuInnerEl.removeAttribute("style")}this.animation=undefined};t.prototype.disabledChanged=function(){this.updateState();this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.sideChanged=function(){this.isEndSide=c(this.side)};t.prototype.swipeGestureChanged=function(){this.updateState()};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,i,n,s;var r=this;return __generator(this,(function(o){switch(o.label){case 0:if(this.type===undefined){this.type=u.get("menuType","overlay")}t=this.el;i=t.parentNode;if(this.contentId===undefined){console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n')}n=this.contentId!==undefined?document.getElementById(this.contentId):i&&i.querySelector&&i.querySelector("[main]");if(!n||!n.tagName){console.error('Menu: must have a "content" element to listen for drag events on.');return[2]}this.contentEl=n;n.classList.add("menu-content");this.typeChanged(this.type,undefined);this.sideChanged();p._register(this);s=this;return[4,e.import("./p-a4f88ff3.system.js")];case 1:s.gesture=o.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return r.canStart(t)},onWillStart:function(){return r.onWillStart()},onStart:function(){return r.onStart()},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}});this.updateState();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen});this.updateState();return[2]}))}))};t.prototype.disconnectedCallback=function(){this.blocker.destroy();p._unregister(this);if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.animation=undefined;this.contentEl=this.backdropEl=this.menuInnerEl=undefined};t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el);this.updateState()};t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var e=t.composedPath?!t.composedPath().includes(this.menuInnerEl):false;if(e){t.preventDefault();t.stopPropagation();this.close()}}};t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)};t.prototype.isActive=function(){return Promise.resolve(this._isActive())};t.prototype.open=function(t){if(t===void 0){t=true}return this.setOpen(true,t)};t.prototype.close=function(t){if(t===void 0){t=true}return this.setOpen(false,t)};t.prototype.toggle=function(t){if(t===void 0){t=true}return this.setOpen(!this._isOpen,t)};t.prototype.setOpen=function(t,e){if(e===void 0){e=true}return p._setOpen(this,t,e)};t.prototype._setOpen=function(t,e){if(e===void 0){e=true}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){switch(i.label){case 0:if(!this._isActive()||this.isAnimating||t===this._isOpen){return[2,false]}this.beforeAnimation(t);return[4,this.loadAnimation()];case 1:i.sent();return[4,this.startAnimation(t,e)];case 2:i.sent();this.afterAnimation(t);return[2,true]}}))}))};t.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:t=this.menuInnerEl.offsetWidth;if(t===this.width&&this.animation!==undefined){return[2]}this.width=t;if(this.animation){this.animation.destroy();this.animation=undefined}e=this;return[4,p._createAnimation(this.type,this)];case 1:e.animation=i.sent();if(!u.getBoolean("animated",true)){this.animation.duration(0)}this.animation.fill("both");return[2]}}))}))};t.prototype.startAnimation=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i,n;return __generator(this,(function(s){switch(s.label){case 0:i=!t;n=this.animation.direction(i?"reverse":"normal").easing(i?this.easingReverse:this.easing).onFinish((function(){if(n.getDirection()==="reverse"){n.direction("normal")}}));if(!e)return[3,2];return[4,n.play()];case 1:s.sent();return[3,3];case 2:n.play({sync:true});s.label=3;case 3:return[2]}}))}))};t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible};t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()};t.prototype.canStart=function(t){var e=!!document.querySelector("ion-modal.show-modal");if(e||!this.canSwipe()){return false}if(this._isOpen){return true}else if(p._getOpenSync()){return false}return A(window,t.currentX,this.isEndSide,this.maxEdgeStart)};t.prototype.onWillStart=function(){this.beforeAnimation(!this._isOpen);return this.loadAnimation()};t.prototype.onStart=function(){if(!this.isAnimating||!this.animation){l(false,"isAnimating has to be true");return}this.animation.progressStart(true,this._isOpen?1:0)};t.prototype.onMove=function(t){if(!this.isAnimating||!this.animation){l(false,"isAnimating has to be true");return}var e=O(t.deltaX,this._isOpen,this.isEndSide);var i=e/this.width;this.animation.progressStep(this._isOpen?1-i:i)};t.prototype.onEnd=function(t){var e=this;if(!this.isAnimating||!this.animation){l(false,"isAnimating has to be true");return}var i=this._isOpen;var n=this.isEndSide;var s=O(t.deltaX,i,n);var r=this.width;var o=s/r;var a=t.velocityX;var u=r/2;var c=a>=0&&(a>.2||t.deltaX>u);var f=a<=0&&(a<-.2||t.deltaX<-u);var p=i?n?c:f:n?f:c;var m=!i&&p;if(i&&!p){m=true}this.lastOnEnd=t.currentTime;var b=p?.001:-.001;var v=o<0?.01:o;b+=d([0,0],[.4,0],[.6,1],[1,1],h(0,v,.9999))[0]||0;var g=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(m)}),{oneTimeCallback:true}).progressEnd(g?1:0,this._isOpen?1-b:b,300)};t.prototype.beforeAnimation=function(t){l(!this.isAnimating,"_before() should not be called while animating");this.el.classList.add(C);if(this.backdropEl){this.backdropEl.classList.add(S)}this.blocker.block();this.isAnimating=true;if(t){this.ionWillOpen.emit()}else{this.ionWillClose.emit()}};t.prototype.afterAnimation=function(t){l(this.isAnimating,"_before() should be called while animating");this._isOpen=t;this.isAnimating=false;if(!this._isOpen){this.blocker.unblock()}if(t){if(this.contentEl){this.contentEl.classList.add(k)}this.ionDidOpen.emit()}else{this.el.classList.remove(C);if(this.contentEl){this.contentEl.classList.remove(k)}if(this.backdropEl){this.backdropEl.classList.remove(S)}if(this.animation){this.animation.stop()}this.ionDidClose.emit()}};t.prototype.updateState=function(){var t=this._isActive();if(this.gesture){this.gesture.enable(t&&this.swipeGesture)}if(!t&&this._isOpen){this.forceClosing()}if(!this.disabled){p._setActiveMenu(this)}l(!this.isAnimating,"can not be animating")};t.prototype.forceClosing=function(){l(this._isOpen,"menu cannot be closed");this.isAnimating=true;var t=this.animation.direction("reverse");t.play({sync:true});this.afterAnimation(false)};t.prototype.render=function(){var t;var e=this;var i=this,n=i.isEndSide,s=i.type,a=i.disabled,u=i.mode,c=i.isPaneVisible;return r(o,{role:"navigation",class:(t={},t[u]=true,t["menu-type-"+s]=true,t["menu-enabled"]=!a,t["menu-side-end"]=n,t["menu-side-start"]=!n,t["menu-pane-visible"]=c,t)},r("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},r("slot",null)),r("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:false,stopPropagation:false}))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0 16px rgba(0,0,0,.18);box-shadow:4px 0 16px rgba(0,0,0,.18)}"},enumerable:true,configurable:true});return t}());var O=function(t,e,i){return Math.max(0,e!==i?-t:t)};var A=function(t,e,i,n){if(i){return e>=t.innerWidth-n}else{return e<=n}};var C="show-menu";var S="show-backdrop";var k="menu-content-open";var P=function(t){return __awaiter(v,void 0,void 0,(function(){var e,i;return __generator(this,(function(n){switch(n.label){case 0:return[4,p.get(t)];case 1:e=n.sent();i=e;if(!i)return[3,3];return[4,e.isActive()];case 2:i=n.sent();n.label=3;case 3:return[2,!!i]}}))}))};var L=t("ion_menu_button",function(){function t(t){var e=this;i(this,t);this.visible=false;this.disabled=false;this.autoHide=true;this.type="button";this.onClick=function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(t){return[2,p.toggle(this.menu)]}))}))}}t.prototype.componentDidLoad=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,P(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=this,i=e.color,s=e.disabled;var a=n(this);var c=u.get("menuIcon",a==="ios"?"menu-outline":"menu-sharp");var l=this.autoHide&&!this.visible;var h={type:this.type};return r(o,{onClick:this.onClick,"aria-disabled":s?"true":null,"aria-hidden":l?"true":null,class:Object.assign(Object.assign((t={},t[a]=true,t),m(i)),{button:true,"menu-button-hidden":l,"menu-button-disabled":s,"in-toolbar":b("ion-toolbar",this.el),"in-toolbar-color":b("ion-toolbar[color]",this.el),"ion-activatable":true,"ion-focusable":true})},r("button",Object.assign({},h,{disabled:s,class:"button-native"}),r("span",{class:"button-inner"},r("slot",null,r("ion-icon",{icon:c,mode:a,lazy:false}))),a==="md"&&r("ion-ripple-effect",{type:"unbounded"})))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}\@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity,0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused):after{background:var(--ion-color-base)}\@media (any-hover:hover){:host(.ion-color:hover) .button-native:after{background:var(--ion-color-base)}}"},enumerable:true,configurable:true});return t}());var j=t("ion_menu_toggle",function(){function t(t){var e=this;i(this,t);this.visible=false;this.autoHide=true;this.onClick=function(){return p.toggle(e.menu)}}t.prototype.connectedCallback=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,P(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=n(this);var i=this.autoHide&&!this.visible;return r(o,{onClick:this.onClick,"aria-hidden":i?"true":null,class:(t={},t[e]=true,t["menu-toggle-hidden"]=i,t)},r("slot",null))};Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:true,configurable:true});return t}())}}}));