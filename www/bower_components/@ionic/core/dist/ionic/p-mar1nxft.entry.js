import{r as t,d as s,c as i,h,H as e,e as a}from"./p-271776e1.js";import{b as o}from"./p-9825fcb7.js";import{d as n,r as c}from"./p-0af5fad6.js";import{c as r}from"./p-72ca39bb.js";const l=class{constructor(i){t(this,i),this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.noAnimate=!0,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon=o.get("backButtonIcon","arrow-back-sharp"),this.cancelButtonText="Cancel",this.debounce=250,this.disabled=!1,this.placeholder="Search",this.showCancelButton="never",this.spellcheck=!1,this.type="search",this.value="",this.onClearInput=t=>{this.ionClear.emit(),t&&(t.preventDefault(),t.stopPropagation()),setTimeout(()=>{""!==this.getValue()&&(this.value="",this.ionInput.emit())},64)},this.onCancelSearchbar=t=>{t&&(t.preventDefault(),t.stopPropagation()),this.ionCancel.emit(),this.onClearInput(),this.nativeInput&&this.nativeInput.blur()},this.onInput=t=>{const s=t.target;s&&(this.value=s.value),this.ionInput.emit(t)},this.onBlur=()=>{this.focused=!1,this.ionBlur.emit(),this.positionElements()},this.onFocus=()=>{this.focused=!0,this.ionFocus.emit(),this.positionElements()},this.ionInput=s(this,"ionInput",7),this.ionChange=s(this,"ionChange",7),this.ionCancel=s(this,"ionCancel",7),this.ionClear=s(this,"ionClear",7),this.ionBlur=s(this,"ionBlur",7),this.ionFocus=s(this,"ionFocus",7),this.ionStyle=s(this,"ionStyle",7)}debounceChanged(){this.ionChange=n(this.ionChange,this.debounce)}valueChanged(){const t=this.nativeInput,s=this.getValue();t&&t.value!==s&&(t.value=s),this.ionChange.emit({value:s})}showCancelButtonChanged(){requestAnimationFrame(()=>{this.positionElements(),this.el.forceUpdate()})}connectedCallback(){this.emitStyle()}componentDidLoad(){this.positionElements(),this.debounceChanged(),setTimeout(()=>{this.noAnimate=!1},300)}emitStyle(){this.ionStyle.emit({searchbar:!0})}async setFocus(){this.nativeInput&&this.nativeInput.focus()}getInputElement(){return Promise.resolve(this.nativeInput)}positionElements(){const t=this.getValue(),s=this.shouldAlignLeft,h=i(this),e=!this.animated||""!==t.trim()||!!this.focused;this.shouldAlignLeft=e,"ios"===h&&(s!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const t=this.nativeInput;if(!t)return;const s="rtl"===document.dir,i=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)t.removeAttribute("style"),i.removeAttribute("style");else{const h=document,e=h.createElement("span");e.innerText=this.placeholder||"",h.body.appendChild(e),c(()=>{const h=e.offsetWidth;e.remove();const a="calc(50% - "+h/2+"px)",o="calc(50% - "+(h/2+30)+"px)";s?(t.style.paddingRight=a,i.style.marginRight=o):(t.style.paddingLeft=a,i.style.marginLeft=o)})}}positionCancelButton(){const t="rtl"===document.dir,s=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),i=this.shouldShowCancelButton();if(s&&i!==this.isCancelVisible){const h=s.style;if(this.isCancelVisible=i,i)t?h.marginLeft="0":h.marginRight="0";else{const i=s.offsetWidth;i>0&&(t?h.marginLeft=-i+"px":h.marginRight=-i+"px")}}}getValue(){return this.value||""}hasValue(){return""!==this.getValue()}shouldShowCancelButton(){return!("never"===this.showCancelButton||"focus"===this.showCancelButton&&!this.focused)}render(){const t=this.animated&&o.getBoolean("animated",!0),s=i(this),a=this.clearIcon||("ios"===s?"close-circle":"close-sharp"),n=this.searchIcon||("ios"===s?"search-outline":"search-sharp"),c="never"!==this.showCancelButton&&h("button",{"aria-label":"cancel",type:"button",tabIndex:"ios"!==s||this.shouldShowCancelButton()?void 0:-1,onMouseDown:this.onCancelSearchbar,onTouchStart:this.onCancelSearchbar,class:"searchbar-cancel-button"},h("div",null,"md"===s?h("ion-icon",{"aria-hidden":"true",mode:s,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText));return h(e,{role:"search","aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},r(this.color)),{[s]:!0,"searchbar-animated":t,"searchbar-disabled":this.disabled,"searchbar-no-animate":t&&this.noAnimate,"searchbar-has-value":this.hasValue(),"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused,"searchbar-should-show-cancel":this.shouldShowCancelButton()})},h("div",{class:"searchbar-input-container"},h("input",{"aria-label":"search text",disabled:this.disabled,ref:t=>this.nativeInput=t,class:"searchbar-input",inputMode:this.inputmode,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,placeholder:this.placeholder,type:this.type,value:this.getValue(),autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===s&&c,h("ion-icon",{mode:s,icon:n,lazy:!1,class:"searchbar-search-icon"}),h("button",{"aria-label":"reset",type:"button","no-blur":!0,class:"searchbar-clear-button",onMouseDown:this.onClearInput,onTouchStart:this.onClearInput},h("ion-icon",{"aria-hidden":"true",mode:s,icon:a,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===s&&c)}get el(){return a(this)}static get watchers(){return{debounce:["debounceChanged"],value:["valueChanged"],showCancelButton:["showCancelButtonChanged"]}}static get style(){return".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color,#fff);--box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--clear-button-color:initial;--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md, .searchbar-search-icon.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}"}};export{l as ion_searchbar};