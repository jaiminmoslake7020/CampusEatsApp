System.register(["./p-5a0aa855.system.js","./p-950f5a68.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.f;e=t.w},function(){}],execute:function(){var r=t("startStatusTap",(function(){var t=window;t.addEventListener("statusTap",(function(){n((function(){var n=t.innerWidth;var r=t.innerHeight;var i=document.elementFromPoint(n/2,r/2);if(!i){return}var o=i.closest("ion-content");if(o){o.componentOnReady().then((function(){e((function(){return o.scrollToTop(300)}))}))}}))}))}))}}}));