"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{9319:(e,t,r)=>{r.d(t,{cBR:()=>y,r9V:()=>p,rXt:()=>v,vCw:()=>g});var n=r(3266),a=r(683),i=r(851);let l=n.oc?window:void 0,u=n.oc?window.document:void 0;function o(...e){let t,r,i,u;if("string"==typeof e[0]||Array.isArray(e[0])?([r,i,u]=e,t=l):[t,r,i,u]=e,!t)return n.lQ;Array.isArray(r)||(r=[r]),Array.isArray(i)||(i=[i]);let s=[],d=()=>{s.forEach(e=>e()),s.length=0},f=(e,t,r,n)=>(e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)),c=(0,a.wB)(()=>[function(e){var t;let r=(0,n.BA)(e);return null!=(t=null==r?void 0:r.$el)?t:r}(t),(0,n.BA)(u)],([e,t])=>{if(d(),!e)return;let a=(0,n.Gv)(t)?{...t}:t;s.push(...r.flatMap(t=>i.map(r=>f(e,t,r,a))))},{immediate:!0,flush:"post"}),m=()=>{c(),d()};return(0,n.Uo)(m),m}n.oc&&window.navigator,n.oc&&window.location;let s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d="__vueuse_ssr_handlers__",f=(d in s||(s[d]=s[d]||{}),s[d]),c={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},m="vueuse-storage";function v(e,t,r,u={}){var s,d;let{flush:y="pre",deep:p=!0,listenToStorageChanges:w=!0,writeDefaults:g=!0,mergeDefaults:A=!1,shallow:h,window:b=l,eventFilter:S,onError:E=e=>{console.error(e)},initOnMounted:N}=u,I=(h?i.IJ:i.KR)("function"==typeof t?t():t);if(!r)try{r=(d=()=>null==l?void 0:l.localStorage,f.getDefaultStorage||d)()}catch(e){E(e)}if(!r)return I;let _=(0,n.BA)(t),B=null==_?"any":_ instanceof Set?"set":_ instanceof Map?"map":_ instanceof Date?"date":"boolean"==typeof _?"boolean":"string"==typeof _?"string":"object"==typeof _?"object":Number.isNaN(_)?"any":"number",O=null!=(s=u.serializer)?s:c[B],{pause:C,resume:F}=(0,n.Hr)(I,()=>(function(t){try{if(null==t)r.removeItem(e);else{let n=O.write(t),a=r.getItem(e);a!==n&&(r.setItem(e,n),b&&b.dispatchEvent(new CustomEvent(m,{detail:{key:e,oldValue:a,newValue:n,storageArea:r}})))}}catch(e){E(e)}})(I.value),{flush:y,deep:p,eventFilter:S});return b&&w&&(0,n.rd)(()=>{o(b,"storage",q),o(b,m,R),N&&q()}),N||q(),I;function R(e){q(e.detail)}function q(t){if(!t||t.storageArea===r){if(t&&null==t.key){I.value=_;return}if(!t||t.key===e){C();try{(null==t?void 0:t.newValue)!==O.write(I.value)&&(I.value=function(t){let n=t?t.newValue:r.getItem(e);if(null==n)return g&&null!=_&&r.setItem(e,O.write(_)),_;if(!t&&A){let e=O.read(n);return"function"==typeof A?A(e,_):"object"!==B||Array.isArray(e)?e:{..._,...e}}return"string"!=typeof n?n:O.read(n)}(t))}catch(e){E(e)}finally{t?(0,a.dY)(F):F()}}}}}function y(e={}){let{controls:t=!1,interval:r="requestAnimationFrame"}=e,a=(0,i.KR)(new Date),u=()=>a.value=new Date,o="requestAnimationFrame"===r?function(e,t={}){let{immediate:r=!0,fpsLimit:a,window:u=l}=t,o=(0,i.KR)(!1),s=a?1e3/a:null,d=0,f=null;function c(t){if(!o.value||!u)return;let r=t-(d||t);if(s&&r<s){f=u.requestAnimationFrame(c);return}e({delta:r,timestamp:t}),d=t,f=u.requestAnimationFrame(c)}function m(){!o.value&&u&&(o.value=!0,f=u.requestAnimationFrame(c))}function v(){o.value=!1,null!=f&&u&&(u.cancelAnimationFrame(f),f=null)}return r&&m(),(0,n.Uo)(v),{isActive:(0,i.tB)(o),pause:v,resume:m}}(u,{immediate:!0}):(0,n.Rg)(u,r,{immediate:!0});return t?{now:a,...o}:a}function p(e,t=n.lQ,r={}){let{immediate:a=!0,manual:l=!1,type:o="text/javascript",async:s=!0,crossOrigin:d,referrerPolicy:f,noModule:c,defer:m,document:v=u,attrs:y={}}=r,w=(0,i.KR)(null),g=null,A=r=>new Promise((a,i)=>{let l=e=>(w.value=e,a(e),e);if(!v){a(!1);return}let u=!1,p=v.querySelector(`script[src="${(0,n.BA)(e)}"]`);p?p.hasAttribute("data-loaded")&&l(p):((p=v.createElement("script")).type=o,p.async=s,p.src=(0,n.BA)(e),m&&(p.defer=m),d&&(p.crossOrigin=d),c&&(p.noModule=c),f&&(p.referrerPolicy=f),Object.entries(y).forEach(([e,t])=>null==p?void 0:p.setAttribute(e,t)),u=!0),p.addEventListener("error",e=>i(e)),p.addEventListener("abort",e=>i(e)),p.addEventListener("load",()=>{p.setAttribute("data-loaded","true"),t(p),l(p)}),u&&(p=v.head.appendChild(p)),r||l(p)}),h=(e=!0)=>(g||(g=A(e)),g),b=()=>{if(!v)return;g=null,w.value&&(w.value=null);let t=v.querySelector(`script[src="${(0,n.BA)(e)}"]`);t&&v.head.removeChild(t)};return a&&!l&&(0,n.rd)(h),l||(0,n.uO)(b),{scriptTag:w,load:h,unload:b}}let w=0;function g(e,t={}){let r=(0,i.KR)(!1),{document:l=u,immediate:o=!0,manual:s=!1,id:d=`vueuse_styletag_${++w}`}=t,f=(0,i.KR)(e),c=()=>{},m=()=>{if(!l)return;let e=l.getElementById(d)||l.createElement("style");e.isConnected||(e.id=d,t.media&&(e.media=t.media),l.head.appendChild(e)),r.value||(c=(0,a.wB)(f,t=>{e.textContent=t},{immediate:!0}),r.value=!0)},v=()=>{l&&r.value&&(c(),l.head.removeChild(l.getElementById(d)),r.value=!1)};return o&&!s&&(0,n.rd)(m),s||(0,n.Uo)(v),{id:d,css:f,unload:v,load:m,isLoaded:(0,i.tB)(r)}}Number.POSITIVE_INFINITY,n.D_}}]);