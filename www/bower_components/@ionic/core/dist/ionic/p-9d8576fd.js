import{f as t,w as o}from"./p-271776e1.js";import"./p-9825fcb7.js";const n=()=>{const n=window;n.addEventListener("statusTap",()=>{t(()=>{const t=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(!t)return;const s=t.closest("ion-content");s&&s.componentOnReady().then(()=>{o(()=>s.scrollToTop(300))})})})};export{n as startStatusTap};