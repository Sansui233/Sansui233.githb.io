"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[412],{3886:function(e,t,r){var n=r(1527);r(959);let o=r(2714).ZP.button.withConfig({componentId:"sc-d1583b70-0"})(["position:fixed;bottom:2rem;right:1rem;height:2.5rem;width:2.5rem;font-size:1.25rem;border-radius:0.625rem;border:0;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:",";background-color:",";z-index:10;cursor:pointer;svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);}@media (any-hover:hover){&:hover{color:",";}}@media (any-hover:none){&:active{background:",";color:",";}}"],e=>e.theme.colors.textGray2,e=>e.theme.colors.tagBg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover,e=>e.theme.colors.textPrimary);t.Z=function(e){let{Icon:t,clickHandler:r,...i}=e;return(0,n.jsx)(o,{onClick:r,...i,children:(0,n.jsx)(t,{size:"1em"})})}},3952:function(e,t,r){r.d(t,{n:function(){return f},g:function(){return p}});var n=r(1527),o=r.t(n,2),i=r(2615),s=r(959),l=r(2714),a=r(7642),c=r(637),d=r(2875);function u(e){let[t,r]=(0,s.useState)(!1);(0,s.useEffect)(()=>{r(!0)},[]);let[o,i]=(0,s.useState)(!1),[l,d]=(0,s.useState)(!0),u=(0,s.useRef)(null),g=(0,s.useRef)(null),[p,f]=(0,s.useState)({width:"100%",height:"auto"}),[x,b]=(0,s.useState)({cursor:"zoom-in",transform:"scale(1) translate(0,0)"}),j=(0,c.hV)(),v=(0,c.aA)();(0,s.useEffect)(()=>{if(!t||!u.current)return;let e=()=>{d(!1)},r=u.current;return r.complete?e():(r.onload=e,r.onerror=()=>{d(!1)}),()=>{r.onload=null,r.onerror=null}},[t]),(0,a.I)("scroll",()=>{o&&(i(!1),w())},!1,[o]);let w=(0,s.useCallback)(()=>{if(o&&u.current&&g.current)b(e=>({...e,transform:"scale(1) translate(0,0)",cursor:"zoom-in"})),setTimeout(()=>{b(e=>({...e,zIndex:"auto"})),f(e=>({...e,height:"auto",zIndex:"auto"}))},300);else if(u.current&&g.current){let e=u.current.getBoundingClientRect(),t=g.current.getBoundingClientRect(),r=e.width,n=e.height,o=-(e.y-v/2+n/2),i=e.x-2*t.x-t.width/2+j/2,s=Math.min(j/r,v/n)-.05;f(e=>({...e,height:n+"px"})),b(e=>({...e,transform:"translateX(".concat(i,"px) translateY(").concat(o,"px) scale(").concat(s,")"),zIndex:11,cursor:"zoom-out"}))}else console.error("[Error] img nothing happened, ref not inited");i(!o)},[o,v,j]);if(t)return(0,n.jsxs)(m,{ref:g,style:{...p},children:[l&&(0,n.jsx)(h,{children:(0,n.jsx)("span",{})}),(0,n.jsx)("img",{ref:u,loading:"lazy",onClick:w,style:{...x,position:"relative",transition:"transform .3s ease"},...e}),o?(0,n.jsx)("div",{onClick:w,style:{position:"fixed",backdropFilter:"blur(10px)",top:0,left:0,WebkitBackdropFilter:"blur(10px)",right:0,bottom:0,cursor:"zoom-out",zIndex:10}}):null]})}let m=l.ZP.div.withConfig({componentId:"sc-35384481-0"})(["position:relative;transition:all .3s ease-in-out;margin:1.5rem 0;"]),h=l.ZP.div.withConfig({componentId:"sc-35384481-1"})(["position:absolute;top:0px;width:100%;text-align:center;span{display:inline-block;padding:10px;width:120px;height:20px;background:linear-gradient(#000 0 0) left/20px 20px no-repeat #ddd;animation:"," 1s infinite linear;}pointer-events:none;"],d.Tc);function g(e){let t={Fragment:s.Fragment,...o,baseUrl:"file:///C:/Users/lingn/git/blog/components/mdx.tsx"};return(0,i.W)(e,t)}function p(e){let t=(0,s.useMemo)(()=>g(e),[e]),r=(0,s.useMemo)(()=>({img:u}),[]);return(0,n.jsx)(t.default,{components:r})}function f(e,t){let r=(0,s.useMemo)(()=>g(e),[e]),o=(0,s.useMemo)(()=>({Tag:function(e){let{text:r}=e;return(0,n.jsxs)("span",{className:"tag",onClick:()=>{t&&t("#".concat(r),!0)},children:["#",r," "]})}}),[t]);return(0,n.jsx)(r.default,{components:o})}},1186:function(e,t,r){r.d(t,{j:function(){return i}});var n=r(2714),o=r(9858);let i=n.ZP.div.withConfig({componentId:"sc-584e939e-0"})(["color:",";h1,h2,h3,h4,h5{color:",";}h6{color:",";}hr{background-color:",";}img,picture,video,canvas,svg,pre{margin:1.5rem auto;display:block;}img,picture{border-radius:1rem;box-shadow:rgb(0 0 0 / 15%) 0px 2px 6px;}blockquote{margin:1.5rem 0;}a{position:relative;font-weight:bold;color:",";transition:box-shadow .3s ease;box-shadow:inset 0 -2px 0 ",";}a:hover{","}a:hover::before{height:0.4em;}code{color:",";background-color:",";border-radius:3px;padding:0.2rem 0.375rem;margin:0rem 1px;font-size:0.875rem;}pre code{color:",";border-radius:0.5rem;padding:1rem 2rem;margin:unset;overflow:auto;}blockquote{border-left:solid 2px;padding-left:1.5em;color:",';}del{opacity:.33;}ul li{display:block;position:relative;}ul li::before{content:"•";position:absolute;color:',";left:-1rem;}@media screen and (min-width:580px){img,picture,video,canvas,svg,pre{display:block;}}.hljs{background:",";}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}.hljs-link{text-decoration:underline;}.hljs-comment,.hljs-quote{color:#a79b87ba;font-style:italic;}.hljs-params,.hljs-type{color:#a79b87c4;}.hljs-punctuation,.hljs-attr{color:rgb(89 161 197);}.hljs-selector-tag,.hljs-name,.hljs-meta,.hljs-operator,.hljs-char.escape_{color:#c56200;}.hljs-keyword,.hljs-deletion{color:#799f67;}.hljs-regexp,.hljs-selector-pseudo,.hljs-selector-attr,.hljs-variable.language_{color:#cc5e91;}.hljs-subst,.hljs-property,.hljs-code,.hljs-formula,.hljs-section,.hljs-title.function_{color:#e36b6b;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition,.hljs-selector-class,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-meta .hljs-string{color:#c68032;}.hljs-variable,.hljs-template-variable,.hljs-number,.hljs-literal,.hljs-link,.hljs-built_in,.hljs-title,.hljs-selector-id,.hljs-tag,.hljs-doctag,.hljs-attribute,.hljs-template-tag,.hljs-meta .hljs-keyword{color:",";}"],e=>e.theme.colors.textSecondary,e=>e.theme.colors.textPrimary,e=>e.theme.colors.textGray,e=>e.theme.colors.uiLineGray3,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover,o.Pg,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.textSecondary,e=>e.theme.colors.textGray,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.accent)},1624:function(e,t,r){r.d(t,{K_:function(){return i},l0:function(){return o},sG:function(){return s}});var n=r(6001);function o(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"dateYMD",o=n.Z.t,i=n.Z.resolvedLanguage;function s(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}switch(t){case"day":return o(r,{year:e.getFullYear(),month:"en"!==i?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==i?e.getDate():s(e.getDate())});case"miniute":return o(r,{year:e.getFullYear(),month:"en"!==i?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==i?e.getDate():s(e.getDate()),hour:e.getHours(),minute:e.getMinutes()})}}function s(e){if(e instanceof Date)return e;let t=new Date(e);if("Invalid Date"!==t.toString())return t;{let t=e.slice(0,11)+"23:59:59",r=new Date(t);return"Invalid Date"!==r.toString()?r:(console.error('[date.ts] error: unable to parse date string "'.concat(t,'"\n	set date to -1')),new Date(-1))}}},7642:function(e,t,r){r.d(t,{I:function(){return o}});var n=r(959);function o(e,t,r,o){(0,n.useEffect)(()=>(document.addEventListener(e,t,r),()=>{document.removeEventListener(e,t,r)}),[e,t,r,...o||[]])}},637:function(e,t,r){r.d(t,{aA:function(){return o},hV:function(){return i}});var n=r(959);function o(){let[e,t]=(0,n.useState)(globalThis.innerHeight);return(0,n.useEffect)(()=>{let e=()=>{t(globalThis.innerHeight)};return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[]),e}function i(){let[e,t]=(0,n.useState)(globalThis.innerWidth);return(0,n.useEffect)(()=>{let e=()=>{t(globalThis.innerWidth)};return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[]),e}},7980:function(e,t,r){r.r(t),r.d(t,{CommonHead:function(){return w},__N_SSG:function(){return v},default:function(){return k}});var n=r(1527),o=r(8563),i=r(8325),s=r.n(i),l=r(3119),a=r.n(l),c=r(959),d=r(7034),u=r(2714),m=r(7234),h=r(1913);function g(e){let{items:t,current:r,setCurrent:o}=e,i=(0,c.useRef)(null),[s,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=()=>{l(!0)},t=()=>{l(!1)};i.current&&(i.current.addEventListener("mouseenter",e),i.current.addEventListener("mouseleave",t));let r=(0,h.P)(function(e){i.current&&s&&(e.preventDefault(),i.current.scrollLeft+=e.deltaY)},20);window.addEventListener("wheel",r,{passive:!1});let n=i.current;return()=>{window.removeEventListener("wheel",r),n&&(n.removeEventListener("mouseenter",e),n.removeEventListener("mouseleave",t))}}),(0,n.jsx)(p,{ref:i,children:t.map((e,t)=>{let i=r===t;return(0,n.jsx)(f,{onClick:()=>{o(t)},className:i?"current":void 0,children:(0,n.jsxs)("span",{children:[e[0]," ",e[1]]})},t)})})}let p=u.ZP.nav.withConfig({componentId:"sc-af3c1718-0"})(["display:flex;margin-top:1rem;padding:1rem 0 1rem 0;overflow-x:auto;&::-webkit-scrollbar{display:none}position:sticky;top:-1px;background:",";z-index:1;"],e=>e.theme.colors.bg),f=u.ZP.button.withConfig({componentId:"sc-af3c1718-1"})(["font-size:.875rem;padding:0.3rem 0.625rem;margin-right:1rem;cursor:pointer;border-radius:2rem;border:1px solid ",";text-wrap:nowrap;color:",";&.current{background:",";color:",";}"],e=>e.theme.colors.textGray,e=>e.theme.colors.textPrimary,e=>e.theme.colors.bgInverse,e=>e.theme.colors.bg);var x=r(1624),b=r(8574),j=r(9858),v=!0;let w=()=>(0,n.jsxs)(c.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function y(e){let{p:t,i:r}=e;return(0,n.jsx)(C,{href:"/posts/"+t.id,$num:r+1,passHref:!0,children:(0,n.jsxs)(E,{$num:r+1,children:[(0,n.jsxs)("div",{className:"meta",children:[(0,n.jsx)("span",{className:"date",children:(0,x.K_)((0,x.sG)(t.date))}),(0,n.jsx)(o.Z,{size:"1em",style:{marginLeft:"0.5em",marginRight:"0.25em",marginBottom:"0.125rem"}}),(0,n.jsx)("span",{className:"category",children:t.categories})]}),(0,n.jsxs)("div",{className:"post-container",children:[(0,n.jsx)("span",{className:"title",children:t.title}),(0,n.jsx)("div",{className:"meta description",children:t.description})]})]})})}var k=e=>{let{posts:t,categories:r}=e,[o,i]=(0,c.useState)(0),l=(0,c.useMemo)(()=>0===o?t:t.filter(e=>e.categories===r[o][0]),[o,t,r]),[a,u]=(0,d.$G)(),h=(0,c.useMemo)(()=>r.map(e=>"All Posts"===e[0]?[a("allposts"),e[1]]:e),[r,a]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"".concat(b.d.author," - Blog")}),(0,n.jsx)(w,{})]}),(0,n.jsx)(m.ZP,{children:(0,n.jsxs)(m.kn,{children:[(0,n.jsx)(g,{items:h,current:o,setCurrent:i}),(0,n.jsx)(z,{children:l.map((e,t)=>(0,n.jsx)(y,{p:e,i:t},e.id))})]})})]})};let z=u.ZP.section.withConfig({componentId:"sc-2e78c9dc-0"})(["display:grid;justify-content:center;grid-template-columns:1fr 1fr;grid-column-gap:4rem;@media screen and (max-width:780px){grid-template-columns:repeat(1,100%);}"]),C=(0,u.ZP)(a()).withConfig({componentId:"sc-2e78c9dc-1"})(["display:block;min-height:6rem;cursor:pointer;animation-fill-mode:forwards;position:relative;.title{font-size:1.375rem;font-weight:600;transition:box-shadow .5s;}.post-container{transform:translateX(0);transition:transform .5s;}.post-container::before{content:'';position:absolute;left:0px;width:0px;height:2.25rem;background:",";transform:translateX(0px);transition:transform .5s ease,width 0.1s linear;border-radius:3px;}@media (any-hover:hover){&:hover{.post-container{transform:translateX(16px);}.post-container::before{width:6px;transform:translateX(-16px);transition:transform .5s ease,width 0.1s linear .2s;}.title{","}}}@media screen and (max-width:780px){.title{font-size:1.25rem;}min-height:5.25rem;}"],e=>e.theme.colors.textPrimary,j.Pg),E=u.ZP.div.withConfig({componentId:"sc-2e78c9dc-2"})(["padding:1rem 0 2.5rem 0;position:relative;.meta{margin:0.5rem 0;color:",";}.description{color:",";}.date{font-weight:500;font-size:0.875rem;}.category{font-weight:500;font-size:0.875rem;display:inline-block;}"],e=>e.theme.colors.textGray3,e=>e.theme.colors.textSecondary);u.ZP.div.withConfig({componentId:"sc-2e78c9dc-3"})(["position:fixed;bottom:5px;left:0;color:",";width:100%;text-align:right;font-size:0.875rem;padding-right:1.5rem;"],e=>e.theme.colors.accent)}}]);