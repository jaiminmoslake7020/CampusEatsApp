import"./p-271776e1.js";import"./p-9825fcb7.js";import"./p-0af5fad6.js";import{c as t}from"./p-c4c0e844.js";import"./p-e4d75972.js";import{g as o}from"./p-09e04284.js";const r=(r,i)=>{const p="back"===i.direction,a=i.leavingEl,s=o(i.enteringEl),e=s.querySelector("ion-toolbar"),c=t();if(c.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible"),p?c.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):c.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),e){const o=t();o.addElement(e),c.addAnimation(o)}if(a&&p){c.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const r=t();r.addElement(o(a)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),c.addAnimation(r)}return c};export{r as mdTransitionAnimation};