import{r as s,c as i,d as t,h as o,H as a,e as n}from"./p-271776e1.js";import{b as r}from"./p-9825fcb7.js";import"./p-0af5fad6.js";import{c as e}from"./p-c4c0e844.js";import"./p-1ca72347.js";import{B as c,d as p,e as d,f as l,g as h}from"./p-7af149c0.js";import{g as f}from"./p-72ca39bb.js";import{s as m}from"./p-ed5df1e2.js";const g=s=>{const i=e(),t=e(),o=e();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},y=s=>{const i=e(),t=e(),o=e();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},u=s=>{const i=e(),t=e(),o=e();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},b=s=>{const i=e(),t=e(),o=e();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},v=class{constructor(o){s(this,o),this.presented=!1,this.mode=i(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,c)},p(this.el),this.didPresent=t(this,"ionLoadingDidPresent",7),this.willPresent=t(this,"ionLoadingWillPresent",7),this.willDismiss=t(this,"ionLoadingWillDismiss",7),this.didDismiss=t(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const s=i(this);this.spinner=r.get("loadingSpinner",r.get("spinner","ios"===s?"lines":"crescent"))}}async present(){await d(this,"loadingEnter",g,u,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(s,i){return this.durationTimeout&&clearTimeout(this.durationTimeout),l(this,s,i,"loadingLeave",y,b)}onDidDismiss(){return h(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return h(this.el,"ionLoadingWillDismiss")}render(){const{message:s,spinner:t}=this,n=i(this);return o(a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign(Object.assign({},f(this.cssClass)),{[n]:!0,"loading-translucent":this.translucent})},o("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{class:"loading-wrapper",role:"dialog"},t&&o("div",{class:"loading-spinner"},o("ion-spinner",{name:t})),s&&o("div",{class:"loading-content",innerHTML:m(s)})))}get el(){return n(this)}static get style(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);--backdrop-opacity:var(--ion-backdrop-opacity,0.3);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}};export{v as ion_loading};