System.register(["./p-5a0aa855.system.js","./p-950f5a68.system.js"],(function(e){"use strict";var t,i,n,s,r,a;return{setters:[function(e){t=e.r;i=e.d;n=e.c;s=e.h;r=e.H;a=e.e},function(){}],execute:function(){var l="split-pane-main";var o="split-pane-side";var u={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};var h=e("ion_split_pane",function(){function e(e){t(this,e);this.visible=false;this.disabled=false;this.when=u["lg"];this.ionSplitPaneVisible=i(this,"ionSplitPaneVisible",7)}e.prototype.visibleChanged=function(e){var t={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(t)};e.prototype.connectedCallback=function(){this.styleChildren();this.updateState()};e.prototype.disconnectedCallback=function(){if(this.rmL){this.rmL();this.rmL=undefined}};e.prototype.updateState=function(){var e=this;if(this.rmL){this.rmL();this.rmL=undefined}if(this.disabled){this.visible=false;return}var t=this.when;if(typeof t==="boolean"){this.visible=t;return}var i=u[t]||t;if(i.length===0){this.visible=false;return}if(window.matchMedia){var n=function(t){e.visible=t.matches};var s=window.matchMedia(i);s.addListener(n);this.rmL=function(){return s.removeListener(n)};this.visible=s.matches}};e.prototype.isPane=function(e){if(!this.visible){return false}return e.parentElement===this.el&&e.classList.contains(o)};e.prototype.styleChildren=function(){var e=this.contentId;var t=this.el.children;var i=this.el.childElementCount;var n=false;for(var s=0;s<i;s++){var r=t[s];var a=e!==undefined&&r.id===e;if(a){if(n){console.warn("split pane cannot have more than one main node");return}n=true}d(r,a)}if(!n){console.warn("split pane does not have a specified main node")}};e.prototype.render=function(){var e;var t=n(this);return s(r,{class:(e={},e[t]=true,e["split-pane-"+t]=true,e["split-pane-visible"]=this.visible,e)},s("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-main),:host(.split-pane-visible) ::slotted(.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}"},enumerable:true,configurable:true});return e}());var d=function(e,t){var i;var n;if(t){i=l;n=o}else{i=o;n=l}var s=e.classList;s.add(i);s.remove(n)}}}}));