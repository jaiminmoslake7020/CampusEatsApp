import{s as e,c as t,a as n,b as l,d as o,i as s}from"./p-9825fcb7.js";let i,r,c,a=0,f=!1,u=!1,$=!1,d=!1,m=!1;const p="undefined"!=typeof window?window:{},w=p.CSS,h=p.document||{head:{}},y={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},b=(()=>(h.head.attachShadow+"").indexOf("[native")>-1)(),g=e=>Promise.resolve(e),v=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),j=new WeakMap,_=e=>j.get(e),k=(e,t)=>j.set(t.o=e,t),O=(e,t)=>t in e,R=e=>console.error(e),x=new Map,M=new Map,S=[],U=[],C=[],L=(e,t)=>n=>{e.push(n),f||(f=!0,t&&4&y.t?T(E):y.raf(E))},P=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){R(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},E=()=>{a++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){R(t)}e.length=0})(S);const e=2==(6&y.t)?performance.now()+10*Math.ceil(a*(1/22)):1/0;P(U,e),P(C,e),U.length>0&&(C.push(...U),U.length=0),(f=S.length+U.length+C.length>0)?y.raf(E):a=0},T=e=>g().then(e),I=L(S,!1),W=L(U,!0),A={},D=e=>"object"==(e=typeof e)||"function"===e,F=()=>w&&w.supports&&w.supports("color","var(--c)")?g():__sc_import_ionic("./p-1826e5f0.js").then(()=>(y.s=p.__cssshim)?(!1).i():0),H=()=>{y.s=p.__cssshim;const e=Array.from(h.querySelectorAll("script")).find(e=>new RegExp("/ionic(\\.esm)?\\.js($|\\?|#)").test(e.src)||"ionic"===e.getAttribute("data-stencil-namespace")),t={};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,p.location.href)).href,N(t.resourcesUrl,e),p.customElements?g(t):__sc_import_ionic("./p-3b66a627.js").then(()=>t))},N=(e,t)=>{const n=`__sc_import_${"ionic".replace(/\s|-/g,"_")}`;try{p[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;p[n]=l=>{const s=new URL(l,e).href;let i=o.get(s);if(!i){const e=h.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(t=>{e.onload=()=>{t(p[n].m),e.remove()}}),o.set(s,i),h.head.appendChild(e)}return i}}},q="http://www.w3.org/1999/xlink",B=new WeakMap,V=(e,t,n)=>{let l=M.get(e);v&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,M.set(e,l)},z=(e,t,n)=>{let l=G(t.u,n),o=M.get(l);if(e=11===e.nodeType?e:h,o||(l=G(t.u),o=M.get(l)),o)if("string"==typeof o){let t,n=B.get(e=e.head||e);n||B.set(e,n=new Set),n.has(l)||(e.host&&(t=e.querySelector(`[sty-id="${l}"]`))?t.innerHTML=o:(t=h.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link"))),n&&n.add(l))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l},G=(e,t)=>"sc-"+(t?e+"-"+t:e),J=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!D(l))&&(l=String(l)),i&&r?c[c.length-1].$+=l:c.push(i?K(null,l):l),r=i)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,X);const f=K(e,null);return f.p=t,c.length>0&&(f.h=c),f.g=o,f.v=s,f},K=(e,t)=>({t:0,j:e,$:t,_:null,h:null,p:null,g:null,v:null}),Q={},X={forEach:(e,t)=>e.map(Y).forEach(t),map:(e,t)=>e.map(Y).map(t).map(Z)},Y=e=>({vattrs:e.p,vchildren:e.h,vkey:e.g,vname:e.v,vtag:e.j,vtext:e.$}),Z=e=>{const t=K(e.vtag,e.vtext);return t.p=e.vattrs,t.h=e.vchildren,t.g=e.vkey,t.v=e.vname,t},ee=(e,t,n,l,o,s)=>{if(n!==l){let r=O(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=ne(n),s=ne(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const a=D(l);if((r||a&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?f?e.removeAttributeNS(q,t):e.removeAttribute(t):(!r||4&s||o)&&!a&&(l=!0===l?"":l,f?e.setAttributeNS(q,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):O(p,c)?c.slice(2):c[2]+t.slice(3),n&&y.rel(e,t,n,!1),l&&y.ael(e,t,l,!1)}},te=/\s/,ne=e=>e?e.split(te):[],le=(e,t,n,l)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.p||A,i=t.p||A;for(l in s)l in i||ee(o,l,s[l],void 0,n,t.t);for(l in i)ee(o,l,s[l],i[l],n,t.t)},oe=(e,t,n,l)=>{let o,s,a,f=t.h[n],$=0;if(u||(d=!0,"slot"===f.j&&(i&&l.classList.add(i+"-s"),f.t|=f.h?2:1)),null!==f.$)o=f._=h.createTextNode(f.$);else if(1&f.t)o=f._=h.createTextNode("");else{if(m||(m="svg"===f.j),o=f._=h.createElementNS(m?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&f.t?"slot-fb":f.j),m&&"foreignObject"===f.j&&(m=!1),le(null,f,m),null!=i&&o["s-si"]!==i&&o.classList.add(o["s-si"]=i),f.h)for($=0;$<f.h.length;++$)s=oe(e,f,$,o),s&&o.appendChild(s);"svg"===f.j?m=!1:"foreignObject"===o.tagName&&(m=!0)}return o["s-hn"]=c,3&f.t&&(o["s-sr"]=!0,o["s-cr"]=r,o["s-sn"]=f.v||"",a=e&&e.h&&e.h[n],a&&a.j===f.j&&e._&&se(e._,!1)),o},se=(e,t)=>{y.t|=1;const n=e.childNodes;for(let l=n.length-1;l>=0;l--){const e=n[l];e["s-hn"]!==c&&e["s-ol"]&&(fe(e).insertBefore(e,ae(e)),e["s-ol"].remove(),e["s-ol"]=void 0,d=!0),t&&se(e,t)}y.t&=-2},ie=(e,t,n,l,o,s)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===c&&(r=r.shadowRoot);o<=s;++o)l[o]&&(i=oe(null,n,o,e),i&&(l[o]._=i,r.insertBefore(i,ae(t))))},re=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l._,we(l),$=!0,o["s-ol"]?o["s-ol"].remove():se(o,!0),o.remove())},ce=(e,t)=>e.j===t.j&&("slot"===e.j?e.v===t.v:e.g===t.g),ae=e=>e&&e["s-ol"]||e,fe=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ue=(e,t)=>{const n=t._=e._,l=e.h,o=t.h,s=t.j,i=t.$;let r;null===i?(m="svg"===s||"foreignObject"!==s&&m,"slot"===s||le(e,t,m),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],d=l.length-1,m=l[0],p=l[d];for(;i<=f&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==m)m=l[++r];else if(null==p)p=l[--d];else if(ce(u,m))ue(u,m),u=t[++i],m=l[++r];else if(ce($,p))ue($,p),$=t[--f],p=l[--d];else if(ce(u,p))"slot"!==u.j&&"slot"!==p.j||se(u._.parentNode,!1),ue(u,p),e.insertBefore(u._,$._.nextSibling),u=t[++i],p=l[--d];else if(ce($,m))"slot"!==u.j&&"slot"!==p.j||se($._.parentNode,!1),ue($,m),e.insertBefore($._,u._),$=t[--f],m=l[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].g&&t[a].g===m.g){c=a;break}c>=0?(s=t[c],s.j!==m.j?o=oe(t&&t[r],n,c,e):(ue(s,m),t[c]=void 0,o=s._),m=l[++r]):(o=oe(t&&t[r],n,r,e),m=l[++r]),o&&fe(u._).insertBefore(o,ae(u._))}i>f?ie(e,null==l[d+1]?null:l[d+1]._,n,l,r,d):r>d&&re(t,i,f)})(n,l,t,o):null!==o?(null!==e.$&&(n.textContent=""),ie(n,null,t,o,0,o.length-1)):null!==l&&re(l,0,l.length-1),m&&"svg"===s&&(m=!1)):(r=n["s-cr"])?r.parentNode.textContent=i:e.$!==i&&(n.data=i)},$e=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}$e(t)}},de=[],me=e=>{let t,n,l,o,s,i,r=0,c=e.childNodes,a=c.length;for(;r<a;r++){if(t=c[r],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(pe(n,o)?(s=de.find(e=>e.k===n),$=!0,n["s-sn"]=n["s-sn"]||o,s?s.O=t:de.push({O:t,k:n}),n["s-sr"]&&de.forEach(e=>{pe(e.k,n["s-sn"])&&(s=de.find(e=>e.k===n),s&&(e.O=s.O))})):de.some(e=>e.k===n)||de.push({k:n}));1===t.nodeType&&me(t)}},pe=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,we=e=>{e.p&&e.p.ref&&e.p.ref(null),e.h&&e.h.forEach(we)},he=(e,t)=>{t&&!e.R&&t["s-p"].push(new Promise(t=>e.R=t))},ye=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const o=t.o,s=()=>be(e,t,n,o,l);let i;return he(t,t.M),l&&(t.t|=256,t.S&&(t.S.forEach(([e,t])=>_e(o,e,t)),t.S=null),i=_e(o,"componentWillLoad")),i=ke(i,()=>_e(o,"componentWillRender")),ke(i,()=>W(s))},be=(e,t,n,l,o)=>{const s=e["s-rc"];o&&((e,t,n)=>{const l=z(b&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,n);10&t.t&&(e["s-sc"]=l,e.classList.add(l+"-h"),2&t.t&&e.classList.add(l+"-s"))})(e,n,t.U),((e,t,n,l)=>{c=e.tagName;const o=t.C||K(null,null),s=(a=l)&&a.j===Q?l:J(null,null,l);var a;if(n.L&&(s.p=s.p||{},n.L.forEach(([t,n])=>s.p[n]=e[t])),s.j=null,s.t|=4,t.C=s,s._=o._=e.shadowRoot||e,i=e["s-sc"],r=e["s-cr"],u=b&&0!=(1&n.t),$=!1,ue(o,s),d){let e,t,n,l,o,i;me(s._);let r=0;for(;r<de.length;r++)e=de[r],t=e.k,t["s-ol"]||(n=h.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(y.t|=1,r=0;r<de.length;r++)if(e=de[r],t=e.k,e.O){for(l=e.O.parentNode,o=e.O.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(i=n["s-nr"],i&&i["s-sn"]===t["s-sn"]&&l===i.parentNode&&(i=i.nextSibling,!i||!i["s-nr"])){o=i;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0);y.t&=-2}$&&$e(s._),de.length=0})(e,t,n,ge(l)),t.t&=-17,t.t|=2,s&&(s.forEach(e=>e()),e["s-rc"]=void 0);{const l=e["s-p"],o=()=>ve(e,t,n);0===l.length?o():(Promise.all(l).then(o),t.t|=4,l.length=0)}},ge=e=>{try{e=e.render&&e.render()}catch(t){R(t)}return e},ve=(e,t,n)=>{const l=t.o,o=t.M;64&t.t?_e(l,"componentDidUpdate"):(t.t|=64,Oe(e),_e(l,"componentDidLoad"),t.P(e),o||je()),t.T(e),t.R&&(t.R(),t.R=void 0),512&t.t&&T(()=>ye(e,t,n,!1)),t.t&=-517},je=()=>{Oe(h.documentElement),y.t|=2},_e=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){R(l)}},ke=(e,t)=>e&&e.then?e.then(t):t(),Oe=e=>e.classList.add("hydrated"),Re=(e,t,n,l,o,s,i)=>{let r,c,a,f;if(1===s.nodeType){for(r=s.getAttribute("c-id"),r&&(c=r.split("."),c[0]!==i&&"0"!==c[0]||(a={t:0,I:c[0],W:c[1],A:c[2],D:c[3],j:s.tagName.toLowerCase(),_:s,p:null,h:null,g:null,v:null,$:null},t.push(a),s.removeAttribute("c-id"),e.h||(e.h=[]),e.h[a.D]=a,e=a,l&&"0"===a.A&&(l[a.D]=a._))),f=s.childNodes.length-1;f>=0;f--)Re(e,t,n,l,o,s.childNodes[f],i);if(s.shadowRoot)for(f=s.shadowRoot.childNodes.length-1;f>=0;f--)Re(e,t,n,l,o,s.shadowRoot.childNodes[f],i)}else if(8===s.nodeType)c=s.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(r=c[0],a={t:0,I:c[1],W:c[2],A:c[3],D:c[4],_:s,p:null,h:null,g:null,v:null,j:null,$:null},"t"===r?(a._=s.nextSibling,a._&&3===a._.nodeType&&(a.$=a._.textContent,t.push(a),s.remove(),e.h||(e.h=[]),e.h[a.D]=a,l&&"0"===a.A&&(l[a.D]=a._))):a.I===i&&("s"===r?(a.j="slot",s["s-sn"]=c[5]?a.v=c[5]:"",s["s-sr"]=!0,l&&(a._=h.createElement(a.j),a.v&&a._.setAttribute("name",a.v),s.parentNode.insertBefore(a._,s),s.remove(),"0"===a.A&&(l[a.D]=a._)),n.push(a),e.h||(e.h=[]),e.h[a.D]=a):"r"===r&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.j){const t=K(null,s.textContent);t._=s,t.D="0",e.h=[t]}},xe=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)xe(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)xe(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},Me=(e,t,n)=>{if(t.F){e.watchers&&(t.H=e.watchers);const l=Object.entries(t.F),o=e.prototype;if(l.forEach(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return t=e,_(this).N.get(t);var t},set(n){((e,t,n,l)=>{const o=_(this),s=o.q,i=o.N.get(t),r=o.t,c=o.o;var a,f;if(f=l.F[t][0],!((n=null==(a=n)||D(a)?a:4&f?"false"!==a&&(""===a||!!a):2&f?parseFloat(a):1&f?String(a):a)===i||8&r&&void 0!==i)&&(o.N.set(t,n),c)){if(l.H&&128&r){const e=l.H[t];e&&e.forEach(e=>{try{c[e](n,i,t)}catch(l){R(l)}})}2==(18&r)&&ye(s,o,l,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=_(this);return n.B.then(()=>n.o[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){y.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.L.push([e,o]),o})}}return e},Se=[],Ue=e=>{_e(e,"connectedCallback")},Ce=(e,t)=>{if(0==(1&y.t)){const n=()=>{},l=_(e);if(t.V&&(l.G=((e,t,n)=>{t.S=t.S||[];const l=n.map(([n,l,o])=>{const s=((e,t)=>4&t?h:8&t?p:32&t?h.body:16&t?e.parentElement:e)(e,n),i=((e,t)=>n=>{256&e.t?e.o[t](n):e.S.push([t,n])})(t,o),r=(e=>0!=(2&e))(n);return y.ael(s,l,i,r),()=>y.rel(s,l,i,r)});return()=>l.forEach(e=>e())})(e,l,t.V)),!(1&l.t)){let n;if(l.t|=1,n=e.getAttribute("s-id"),n){if(b&&1&t.t){const n=z(e.shadowRoot,t,e.getAttribute("s-mode"));e.classList.remove(n+"-h",n+"-s")}((e,t,n,l)=>{const o=e.shadowRoot,s=[],i=o?[]:null,r=l.C=K(t,null);y.J||xe(h.body,y.J=new Map),e["s-id"]=n,e.removeAttribute("s-id"),Re(r,s,[],i,e,e,n),s.forEach(e=>{const n=e.I+"."+e.W,l=y.J.get(n),s=e._;l&&b&&""===l["s-en"]&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=t,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),y.J.delete(n)}),o&&i.forEach(e=>{e&&o.appendChild(e)})})(e,t.u,n,l)}n||(4&t.t||8&t.t)&&Le(e);{let t=e;for(;t=t.parentNode||t.host;)if(1===t.nodeType&&t.hasAttribute("s-id")||t["s-p"]){he(l,l.M=t);break}}t.F&&Object.entries(t.F).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),T(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32,null==t.U&&(t.U="string"!=typeof n.K?(e=>Se.map(t=>t(e)).find(e=>!!e))(e):"");{if((o=((e,t)=>{const n=e.u.replace(/-/g,"_"),l="string"!=typeof e.K?e.K[t.U]:e.K,o=x.get(l);return o?o[n]:__sc_import_ionic(`./${l}.entry.js`).then(e=>(x.set(l,e),e[n]),R)})(n,t)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.H=o.watchers,Me(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){R(r)}t.t&=-9,t.t|=128,e(),Ue(t.o)}const l=G(n.u,t.U);if(!M.has(l)&&o.style){const e=()=>{};let s=o.style;"string"!=typeof s&&(s=s[t.U]),8&n.t&&(s=await __sc_import_ionic("./p-93e23355.js").then(e=>e.scopeCss(s,l,!1))),V(l,s,!!(1&n.t)),e()}}const s=t.M,i=()=>ye(e,t,n,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(e,l,t))}Ue(l.o),n()}},Le=e=>{const t=e["s-cr"]=h.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Pe=(e,t={})=>{const n=[],l=t.exclude||[],o=p.customElements,s=h.head,i=s.querySelector("meta[charset]"),r=h.createElement("style"),c=[],a=h.querySelectorAll("[sty-id]");let f,u=!0,$=0;for(Object.assign(y,t),y.l=new URL(t.resourcesUrl||"./",h.baseURI).href,t.syncQueue&&(y.t|=4),y.t|=2;$<a.length;$++)V(a[$].getAttribute("sty-id"),a[$].innerHTML.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),!0);e.forEach(e=>e[1].forEach(t=>{const s={t:t[0],u:t[1],F:t[2],V:t[3]};s.F=t[2],s.V=t[3],s.L=[],s.H={},!b&&1&s.t&&(s.t|=8);const i=s.u,r=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,q:e,N:new Map};t.B=new Promise(e=>t.T=e),t.X=new Promise(e=>t.P=e),e["s-p"]=[],e["s-rc"]=[],j.set(e,t)})(e=this),1&s.t&&(b?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),u?c.push(this):y.jmp(()=>Ce(this,s))}disconnectedCallback(){y.jmp(()=>(()=>{if(0==(1&y.t)){const e=_(this),t=e.o;e.G&&(e.G(),e.G=void 0),_e(t,"disconnectedCallback"),_e(t,"componentDidUnload")}})())}forceUpdate(){((e,t)=>{{const n=_(e);n.q.isConnected&&2==(18&n.t)&&ye(e,n,t,!1)}})(this,s)}componentOnReady(){return _(this).X}};s.K=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,Me(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),u=!1,c.length>0?c.forEach(e=>e.connectedCallback()):y.jmp(()=>f=setTimeout(je,30))},Ee=(e,t,n)=>{const l=Ie(e);return{emit:e=>{const o=new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});return l.dispatchEvent(o),o}}},Te=e=>{const t=new URL(e,y.l);return t.origin!==p.location.origin?t.href:t.pathname},Ie=e=>_(e).q;let We;const Ae=e=>e&&(e=>_(e).U)(e)||We,De=()=>{(()=>{const i=document,r=window,c=r.Ionic=r.Ionic||{};e(r);const a=Object.assign(Object.assign(Object.assign(Object.assign({},t(r)),{persistConfig:!1}),c.config),n(r));l.reset(a),l.getBoolean("persistConfig")&&o(r,a),c.config=l,c.mode=We=l.get("mode",i.documentElement.getAttribute("mode")||(s(r,"ios")?"ios":"md")),l.set("mode",We),i.documentElement.setAttribute("mode",We),i.documentElement.classList.add(We),l.getBoolean("_testing")&&l.set("animated",!1),Se.push(e=>{for(;e;){const t=e.mode||e.getAttribute("mode");if(t)return t;e=e.parentElement}return We})})()};export{Q as H,F as a,Pe as b,Ae as c,Ee as d,Ie as e,I as f,De as g,J as h,Te as i,H as p,k as r,W as w};