var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(t){o(t)}}function u(e){try{l(n["throw"](e))}catch(t){o(t)}}function l(e){e.done?i(e.value):r(e.value).then(a,u)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return l([e,t])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(a[0]===6&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}if(o[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-5a0aa855.system.js","./p-950f5a68.system.js","./p-43ab7c15.system.js","./p-61d1f5a5.system.js"],(function(e){"use strict";var t,i,n,r,o,a,u,l,s;return{setters:[function(e){t=e.r;i=e.d;n=e.c;r=e.h;o=e.H;a=e.e},function(){},function(e){u=e.f},function(e){l=e.c;s=e.h}],execute:function(){var c=e("ion_radio",function(){function e(e){var n=this;t(this,e);this.inputId="ion-rb-"+h++;this.radioGroup=null;this.checked=false;this.name=this.inputId;this.disabled=false;this.updateState=function(){if(n.radioGroup){n.checked=n.radioGroup.value===n.value}};this.onFocus=function(){n.ionFocus.emit()};this.onBlur=function(){n.ionBlur.emit()};this.ionStyle=i(this,"ionStyle",7);this.ionFocus=i(this,"ionFocus",7);this.ionBlur=i(this,"ionBlur",7)}e.prototype.connectedCallback=function(){if(this.value===undefined){this.value=this.inputId}var e=this.radioGroup=this.el.closest("ion-radio-group");if(e){this.updateState();e.addEventListener("ionChange",this.updateState)}};e.prototype.disconnectedCallback=function(){var e=this.radioGroup;if(e){e.removeEventListener("ionChange",this.updateState);this.radioGroup=null}};e.prototype.componentWillLoad=function(){this.emitStyle()};e.prototype.emitStyle=function(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})};e.prototype.render=function(){var e;var t=this,i=t.inputId,a=t.disabled,c=t.checked,h=t.color,d=t.el;var f=n(this);var p=i+"-lbl";var b=u(d);if(b){b.id=p}return r(o,{role:"radio","aria-disabled":a?"true":null,"aria-checked":""+c,"aria-labelledby":p,class:Object.assign(Object.assign({},l(h)),(e={},e[f]=true,e["in-item"]=s("ion-item",d),e["interactive"]=true,e["radio-checked"]=c,e["radio-disabled"]=a,e))},r("div",{class:"radio-icon"},r("div",{class:"radio-inner"})),r("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:a}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"},enumerable:true,configurable:true});return e}());var h=0;var d=e("ion_radio_group",function(){function e(e){var n=this;t(this,e);this.inputId="ion-rg-"+f++;this.labelId=this.inputId+"-lbl";this.allowEmptySelection=false;this.name=this.inputId;this.onClick=function(e){var t=e.target&&e.target.closest("ion-radio");if(t){var i=n.value;var r=t.value;if(r!==i){n.value=r}else if(n.allowEmptySelection){n.value=undefined}}};this.ionChange=i(this,"ionChange",7)}e.prototype.valueChanged=function(e){this.ionChange.emit({value:e})};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i;return __generator(this,(function(n){e=this.el;t=e.querySelector("ion-list-header")||e.querySelector("ion-item-divider");if(t){i=t.querySelector("ion-label");if(i){this.labelId=i.id=this.name+"-lbl"}}return[2]}))}))};e.prototype.render=function(){return r(o,{role:"radiogroup","aria-labelledby":this.labelId,onClick:this.onClick,class:n(this)})};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:true,configurable:true});return e}());var f=0}}}));