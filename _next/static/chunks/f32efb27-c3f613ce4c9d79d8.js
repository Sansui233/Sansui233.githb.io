"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[576],{1768:function(e,t,n){n.d(t,{OTC:function(){return g},Pi8:function(){return p},mXi:function(){return y},y$C:function(){return v}});var r=n(652),i=n(6440),a=n(2811);let l=r.C5?window:void 0,u=r.C5?window.document:void 0;function o(...e){let t,n,a,u;if("string"==typeof e[0]||Array.isArray(e[0])?([n,a,u]=e,t=l):[t,n,a,u]=e,!t)return r.ZT;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);let s=[],d=()=>{s.forEach(e=>e()),s.length=0},f=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),c=(0,i.YP)(()=>[function(e){var t;let n=(0,r.Tn)(e);return null!=(t=null==n?void 0:n.$el)?t:n}(t),(0,r.Tn)(u)],([e,t])=>{if(d(),!e)return;let i=(0,r.Kn)(t)?{...t}:t;s.push(...n.flatMap(t=>a.map(n=>f(e,t,n,i))))},{immediate:!0,flush:"post"}),m=()=>{c(),d()};return(0,r.IY)(m),m}r.C5&&window.navigator,r.C5&&window.location;let s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d="__vueuse_ssr_handlers__",f=(d in s||(s[d]=s[d]||{}),s[d]),c={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},m="vueuse-storage";function v(e,t,n,u={}){var s;let{flush:d="pre",deep:v=!0,listenToStorageChanges:y=!0,writeDefaults:p=!0,mergeDefaults:w=!1,shallow:g,window:h=l,eventFilter:b,onError:A=e=>{console.error(e)}}=u,S=(g?a.XI:a.iH)(t);if(!n)try{n=(f.getDefaultStorage||(()=>null==l?void 0:l.localStorage))()}catch(e){A(e)}if(!n)return S;let C=(0,r.Tn)(t),E=null==C?"any":C instanceof Set?"set":C instanceof Map?"map":C instanceof Date?"date":"boolean"==typeof C?"boolean":"string"==typeof C?"string":"object"==typeof C?"object":Number.isNaN(C)?"any":"number",I=null!=(s=u.serializer)?s:c[E],{pause:T,resume:_}=(0,r._I)(S,()=>(function(t){try{if(null==t)n.removeItem(e);else{let r=I.write(t),i=n.getItem(e);i!==r&&(n.setItem(e,r),h&&h.dispatchEvent(new CustomEvent(m,{detail:{key:e,oldValue:i,newValue:r,storageArea:n}})))}}catch(e){A(e)}})(S.value),{flush:d,deep:v,eventFilter:b});return h&&y&&(o(h,"storage",N),o(h,m,function(e){N(e.detail)})),N(),S;function N(t){if(!t||t.storageArea===n){if(t&&null==t.key){S.value=C;return}if(!t||t.key===e){T();try{(null==t?void 0:t.newValue)!==I.write(S.value)&&(S.value=function(t){let r=t?t.newValue:n.getItem(e);if(null==r)return p&&null!==C&&n.setItem(e,I.write(C)),C;if(!t&&w){let e=I.read(r);return"function"==typeof w?w(e,C):"object"!==E||Array.isArray(e)?e:{...C,...e}}return"string"!=typeof r?r:I.read(r)}(t))}catch(e){A(e)}finally{t?(0,i.Y3)(_):_()}}}}}function y(e={}){let{controls:t=!1,interval:n="requestAnimationFrame"}=e,i=(0,a.iH)(new Date),u=()=>i.value=new Date,o="requestAnimationFrame"===n?function(e,t={}){let{immediate:n=!0,window:i=l}=t,u=(0,a.iH)(!1),o=0,s=null;function d(t){if(!u.value||!i)return;let n=t-(o||t);e({delta:n,timestamp:t}),o=t,s=i.requestAnimationFrame(d)}function f(){!u.value&&i&&(u.value=!0,s=i.requestAnimationFrame(d))}function c(){u.value=!1,null!=s&&i&&(i.cancelAnimationFrame(s),s=null)}return n&&f(),(0,r.IY)(c),{isActive:(0,a.OT)(u),pause:c,resume:f}}(u,{immediate:!0}):(0,r.Zv)(u,n,{immediate:!0});return t?{now:i,...o}:i}function p(e,t=r.ZT,n={}){let{immediate:i=!0,manual:l=!1,type:o="text/javascript",async:s=!0,crossOrigin:d,referrerPolicy:f,noModule:c,defer:m,document:v=u,attrs:y={}}=n,p=(0,a.iH)(null),w=null,g=n=>new Promise((i,a)=>{let l=e=>(p.value=e,i(e),e);if(!v){i(!1);return}let u=!1,w=v.querySelector(`script[src="${(0,r.Tn)(e)}"]`);w?w.hasAttribute("data-loaded")&&l(w):((w=v.createElement("script")).type=o,w.async=s,w.src=(0,r.Tn)(e),m&&(w.defer=m),d&&(w.crossOrigin=d),c&&(w.noModule=c),f&&(w.referrerPolicy=f),Object.entries(y).forEach(([e,t])=>null==w?void 0:w.setAttribute(e,t)),u=!0),w.addEventListener("error",e=>a(e)),w.addEventListener("abort",e=>a(e)),w.addEventListener("load",()=>{w.setAttribute("data-loaded","true"),t(w),l(w)}),u&&(w=v.head.appendChild(w)),n||l(w)}),h=(e=!0)=>(w||(w=g(e)),w),b=()=>{if(!v)return;w=null,p.value&&(p.value=null);let t=v.querySelector(`script[src="${(0,r.Tn)(e)}"]`);t&&v.head.removeChild(t)};return i&&!l&&(0,r.u7)(h),l||(0,r.sP)(b),{scriptTag:p,load:h,unload:b}}let w=0;function g(e,t={}){let n=(0,a.iH)(!1),{document:l=u,immediate:o=!0,manual:s=!1,id:d=`vueuse_styletag_${++w}`}=t,f=(0,a.iH)(e),c=()=>{},m=()=>{if(!l)return;let e=l.getElementById(d)||l.createElement("style");e.isConnected||(e.id=d,t.media&&(e.media=t.media),l.head.appendChild(e)),n.value||(c=(0,i.YP)(f,t=>{e.textContent=t},{immediate:!0}),n.value=!0)},v=()=>{l&&n.value&&(c(),l.head.removeChild(l.getElementById(d)),n.value=!1)};return o&&!s&&(0,r.u7)(m),s||(0,r.IY)(v),{id:d,css:f,unload:v,load:m,isLoaded:(0,a.OT)(n)}}r.yR}}]);