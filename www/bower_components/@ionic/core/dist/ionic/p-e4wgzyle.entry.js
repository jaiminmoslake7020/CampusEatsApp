import{r as t,h as s,c as r,H as e}from"./p-271776e1.js";import"./p-9825fcb7.js";import{o as i,c}from"./p-72ca39bb.js";const n=class{constructor(s){t(this,s),this.button=!1,this.type="button",this.disabled=!1,this.routerDirection="forward"}isClickable(){return void 0!==this.href||this.button}renderCard(t){const r=this.isClickable();if(!r)return[s("slot",null)];const{href:e,routerDirection:c}=this,n=r?void 0===e?"button":"a":"div";return s(n,Object.assign({},"button"===n?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target},{class:"card-native",disabled:this.disabled,onClick:t=>i(e,t,c)}),s("slot",null),r&&"md"===t&&s("ion-ripple-effect",null))}render(){const t=r(this);return s(e,{class:Object.assign(Object.assign({[t]:!0},c(this.color)),{"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(t))}static get style(){return":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-item-background,var(--ion-background-color,#fff));--color:var(--ion-color-step-550,#737373);margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}"}},o=class{constructor(s){t(this,s)}render(){const t=r(this);return s(e,{class:{[t]:!0,[`card-content-${t}`]:!0}})}static get style(){return"ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:400;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}"}},a=class{constructor(s){t(this,s),this.translucent=!1}render(){const t=r(this);return s(e,{class:Object.assign(Object.assign({},c(this.color)),{"card-header-translucent":this.translucent,"ion-inherit-color":!0,[t]:!0})},s("slot",null))}static get style(){return":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}"}},l=class{constructor(s){t(this,s)}render(){const t=r(this);return s(e,{role:"heading","aria-level":"3",class:Object.assign(Object.assign({},c(this.color)),{"ion-inherit-color":!0,[t]:!0})},s("slot",null))}static get style(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550,#737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}"}},h=class{constructor(s){t(this,s)}render(){const t=r(this);return s(e,{role:"heading","aria-level":"2",class:Object.assign(Object.assign({},c(this.color)),{"ion-inherit-color":!0,[t]:!0})},s("slot",null))}static get style(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}"}};export{n as ion_card,o as ion_card_content,a as ion_card_header,l as ion_card_subtitle,h as ion_card_title};