import{r as o,c as t,d as i,h as s,H as e,e as r}from"./p-271776e1.js";import"./p-9825fcb7.js";import"./p-0af5fad6.js";import{c as p}from"./p-c4c0e844.js";import"./p-e4d75972.js";import"./p-1ca72347.js";import{B as n,d as a,e as c,f as l,g as h}from"./p-7af149c0.js";import{g as v}from"./p-72ca39bb.js";import{a as d,d as m}from"./p-a2dd86d8.js";import{d as f}from"./p-09e04284.js";const b=(o,t)=>{let i="top",s="left";const e=o.querySelector(".popover-content"),r=e.getBoundingClientRect(),n=r.width,a=r.height,c=o.ownerDocument.defaultView.innerWidth,l=o.ownerDocument.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),v=null!=h&&"top"in h?h.top:l/2-a/2,d=null!=h&&"left"in h?h.left:c/2,m=h&&h.width||0,f=h&&h.height||0,b=o.querySelector(".popover-arrow"),D=b.getBoundingClientRect(),P=D.width,w=D.height;null==h&&(b.style.display="none");const y={top:v+f,left:d+m/2-P/2},j={top:v+f+(w-1),left:d+m/2-n/2};let x=!1,k=!1;j.left<u+25?(x=!0,j.left=u):n+u+j.left+25>c&&(k=!0,j.left=c-n-u,s="right"),v+f+a>l&&v-a>0?(y.top=v-(w+1),j.top=v-a-(w-1),o.className=o.className+" popover-bottom",i="bottom"):v+f+a>l&&(e.style.bottom=u+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",e.style.top=j.top+"px",e.style.left=j.left+"px",x&&(e.style.left=`calc(${j.left}px + var(--ion-safe-area-left, 0px))`),k&&(e.style.left=`calc(${j.left}px - var(--ion-safe-area-right, 0px))`),e.style.transformOrigin=i+" "+s;const W=p(),g=p(),E=p();return g.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),E.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),W.addElement(o).easing("ease").duration(100).addAnimation([g,E])},u=5,D=o=>{const t=p(),i=p(),s=p();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(o).easing("ease").duration(500).addAnimation([i,s])},P=(o,t)=>{const i=o.ownerDocument,s="rtl"===i.dir;let e="top",r=s?"right":"left";const n=o.querySelector(".popover-content"),a=n.getBoundingClientRect(),c=a.width,l=a.height,h=i.defaultView.innerWidth,v=i.defaultView.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),m=null!=d&&"bottom"in d?d.bottom:v/2-l/2,f=d&&d.height||0,b={top:m,left:null!=d&&"left"in d?s?d.left-c+d.width:d.left:h/2-c/2};b.left<12?(b.left=12,r="left"):c+12+b.left>h&&(b.left=h-c-12,r="right"),m+f+l>v&&m-l>0?(b.top=m-l-f,o.className=o.className+" popover-bottom",e="bottom"):m+f+l>v&&(n.style.bottom="12px");const u=p(),D=p(),P=p(),w=p(),y=p();return D.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),P.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(n).beforeStyles({top:`${b.top}px`,left:`${b.left}px`,"transform-origin":`${e} ${r}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([D,P,w,y])},w=o=>{const t=p(),i=p(),s=p();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(o).easing("ease").duration(500).addAnimation([i,s])},y=class{constructor(s){o(this,s),this.presented=!1,this.mode=t(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,n)},this.onLifecycle=o=>{const t=this.usersElement,i=j[o.type];if(t&&i){const s=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:o.detail});t.dispatchEvent(s)}},a(this.el),this.didPresent=i(this,"ionPopoverDidPresent",7),this.willPresent=i(this,"ionPopoverWillPresent",7),this.willDismiss=i(this,"ionPopoverWillDismiss",7),this.didDismiss=i(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await d(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t),await f(this.usersElement),c(this,"popoverEnter",b,P,this.event)}async dismiss(o,t){const i=await l(this,o,t,"popoverLeave",D,w,this.event);return i&&await m(this.delegate,this.usersElement),i}onDidDismiss(){return h(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return h(this.el,"ionPopoverWillDismiss")}render(){const o=t(this),{onLifecycle:i}=this;return s(e,{"aria-modal":"true","no-router":!0,style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},v(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:i,onIonPopoverWillPresent:i,onIonPopoverWillDismiss:i,onIonPopoverDidDismiss:i,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},s("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),s("div",{class:"popover-wrapper"},s("div",{class:"popover-arrow"}),s("div",{class:"popover-content"})))}get el(){return r(this)}static get style(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"}},j={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};export{y as ion_popover};