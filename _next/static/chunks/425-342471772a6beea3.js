"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{3886:function(e,t,o){var r=o(1527);o(959);let n=o(2714).ZP.button.withConfig({componentId:"sc-d1583b70-0"})(["position:fixed;bottom:2rem;right:1rem;height:2.5rem;width:2.5rem;font-size:1.25rem;border-radius:0.625rem;border:0;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:",";background-color:",";z-index:10;cursor:pointer;svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);}@media (any-hover:hover){&:hover{color:",";}}@media (any-hover:none){&:active{background:",";color:",";}}"],e=>e.theme.colors.textGray2,e=>e.theme.colors.tagBg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover,e=>e.theme.colors.textPrimary);t.Z=function(e){let{Icon:t,clickHandler:o,...i}=e;return(0,r.jsx)(n,{onClick:o,...i,children:(0,r.jsx)(t,{size:"1em"})})}},3952:function(e,t,o){o.d(t,{n:function(){return g},g:function(){return f}});var r=o(1527),n=o.t(r,2),i=o(2615),s=o(959),a=o(2714),l=o(7642),c=o(637),u=o(2875);function m(e){let[t,o]=(0,s.useState)(!1);(0,s.useEffect)(()=>{o(!0)},[]);let[n,i]=(0,s.useState)(!1),[a,u]=(0,s.useState)(!0),m=(0,s.useRef)(null),p=(0,s.useRef)(null),[f,g]=(0,s.useState)({width:"100%",height:"auto"}),[x,b]=(0,s.useState)({cursor:"zoom-in",transform:"scale(1) translate(0,0)"}),v=(0,c.hV)(),j=(0,c.aA)();(0,s.useEffect)(()=>{if(!t||!m.current)return;let e=()=>{u(!1)},o=m.current;return o.complete?e():(o.onload=e,o.onerror=()=>{u(!1)}),()=>{o.onload=null,o.onerror=null}},[t]),(0,l.I)("scroll",()=>{n&&(i(!1),w())},!1,[n]);let w=(0,s.useCallback)(()=>{if(n&&m.current&&p.current)b(e=>({...e,transform:"scale(1) translate(0,0)",cursor:"zoom-in"})),setTimeout(()=>{b(e=>({...e,zIndex:"auto"})),g(e=>({...e,height:"auto",zIndex:"auto"}))},300);else if(m.current&&p.current){let e=m.current.getBoundingClientRect(),t=p.current.getBoundingClientRect(),o=e.width,r=e.height,n=-(e.y-j/2+r/2),i=e.x-2*t.x-t.width/2+v/2,s=Math.min(v/o,j/r)-.05;g(e=>({...e,height:r+"px"})),b(e=>({...e,transform:"translateX(".concat(i,"px) translateY(").concat(n,"px) scale(").concat(s,")"),zIndex:11,cursor:"zoom-out"}))}else console.error("[Error] img nothing happened, ref not inited");i(!n)},[n,j,v]);if(t)return(0,r.jsxs)(h,{ref:p,style:{...f},children:[a&&(0,r.jsx)(d,{children:(0,r.jsx)("span",{})}),(0,r.jsx)("img",{ref:m,loading:"lazy",onClick:w,style:{...x,position:"relative",transition:"transform .3s ease"},...e}),n?(0,r.jsx)("div",{onClick:w,style:{position:"fixed",backdropFilter:"blur(10px)",top:0,left:0,WebkitBackdropFilter:"blur(10px)",right:0,bottom:0,cursor:"zoom-out",zIndex:10}}):null]})}let h=a.ZP.div.withConfig({componentId:"sc-35384481-0"})(["position:relative;transition:all .3s ease-in-out;margin:1.5rem 0;"]),d=a.ZP.div.withConfig({componentId:"sc-35384481-1"})(["position:absolute;top:0px;width:100%;text-align:center;span{display:inline-block;padding:10px;width:120px;height:20px;background:linear-gradient(#000 0 0) left/20px 20px no-repeat #ddd;animation:"," 1s infinite linear;}pointer-events:none;"],u.Tc);function p(e){let t={Fragment:s.Fragment,...n,baseUrl:"file:///C:/Users/lingn/git/blog/components/mdx.tsx"};return(0,i.W)(e,t)}function f(e){let t=(0,s.useMemo)(()=>p(e),[e]),o=(0,s.useMemo)(()=>({img:m}),[]);return(0,r.jsx)(t.default,{components:o})}function g(e,t){let o=(0,s.useMemo)(()=>p(e),[e]),n=(0,s.useMemo)(()=>({Tag:function(e){let{text:o}=e;return(0,r.jsxs)("span",{className:"tag",onClick:()=>{t&&t("#".concat(o),!0)},children:["#",o," "]})}}),[t]);return(0,r.jsx)(o.default,{components:n})}},1186:function(e,t,o){o.d(t,{j:function(){return i}});var r=o(2714),n=o(9858);let i=r.ZP.div.withConfig({componentId:"sc-584e939e-0"})(["color:",";h1,h2,h3,h4,h5{color:",";}h6{color:",";}hr{background-color:",";}img,picture,video,canvas,svg,pre{margin:1.5rem auto;display:block;}img,picture{border-radius:1rem;box-shadow:rgb(0 0 0 / 15%) 0px 2px 6px;}blockquote{margin:1.5rem 0;}a{position:relative;font-weight:bold;color:",";transition:box-shadow .3s ease;box-shadow:inset 0 -2px 0 ",";}a:hover{","}a:hover::before{height:0.4em;}code{color:",";background-color:",";border-radius:3px;padding:0.2rem 0.375rem;margin:0rem 1px;font-size:0.875rem;}pre code{color:",";border-radius:0.5rem;padding:1rem 2rem;margin:unset;overflow:auto;}blockquote{border-left:solid 2px;padding-left:1.5em;color:",';}del{opacity:.33;}ul li{display:block;position:relative;}ul li::before{content:"•";position:absolute;color:',";left:-1rem;}@media screen and (min-width:580px){img,picture,video,canvas,svg,pre{display:block;}}.hljs{background:",";}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}.hljs-link{text-decoration:underline;}.hljs-comment,.hljs-quote{color:#a79b87ba;font-style:italic;}.hljs-params,.hljs-type{color:#a79b87c4;}.hljs-punctuation,.hljs-attr{color:rgb(89 161 197);}.hljs-selector-tag,.hljs-name,.hljs-meta,.hljs-operator,.hljs-char.escape_{color:#c56200;}.hljs-keyword,.hljs-deletion{color:#799f67;}.hljs-regexp,.hljs-selector-pseudo,.hljs-selector-attr,.hljs-variable.language_{color:#cc5e91;}.hljs-subst,.hljs-property,.hljs-code,.hljs-formula,.hljs-section,.hljs-title.function_{color:#e36b6b;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition,.hljs-selector-class,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-meta .hljs-string{color:#c68032;}.hljs-variable,.hljs-template-variable,.hljs-number,.hljs-literal,.hljs-link,.hljs-built_in,.hljs-title,.hljs-selector-id,.hljs-tag,.hljs-doctag,.hljs-attribute,.hljs-template-tag,.hljs-meta .hljs-keyword{color:",";}"],e=>e.theme.colors.textSecondary,e=>e.theme.colors.textPrimary,e=>e.theme.colors.textGray,e=>e.theme.colors.uiLineGray3,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover,n.Pg,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.textSecondary,e=>e.theme.colors.textGray,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.accent)},1624:function(e,t,o){o.d(t,{K_:function(){return i},l0:function(){return n},sG:function(){return s}});var r=o(6001);function n(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"dateYMD",n=r.Z.t,i=r.Z.resolvedLanguage;function s(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}switch(t){case"day":return n(o,{year:e.getFullYear(),month:"en"!==i?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==i?e.getDate():s(e.getDate())});case"miniute":return n(o,{year:e.getFullYear(),month:"en"!==i?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==i?e.getDate():s(e.getDate()),hour:e.getHours(),minute:e.getMinutes()})}}function s(e){if(e instanceof Date)return e;let t=new Date(e);if("Invalid Date"!==t.toString())return t;{let t=e.slice(0,11)+"23:59:59",o=new Date(t);return"Invalid Date"!==o.toString()?o:(console.error('[date.ts] error: unable to parse date string "'.concat(t,'"\n	set date to -1')),new Date(-1))}}},7642:function(e,t,o){o.d(t,{I:function(){return n}});var r=o(959);function n(e,t,o,n){(0,r.useEffect)(()=>(document.addEventListener(e,t,o),()=>{document.removeEventListener(e,t,o)}),[e,t,o,...n||[]])}},637:function(e,t,o){o.d(t,{aA:function(){return n},hV:function(){return i}});var r=o(959);function n(){let[e,t]=(0,r.useState)(globalThis.innerHeight);return(0,r.useEffect)(()=>{let e=()=>{t(globalThis.innerHeight)};return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[]),e}function i(){let[e,t]=(0,r.useState)(globalThis.innerWidth);return(0,r.useEffect)(()=>{let e=()=>{t(globalThis.innerWidth)};return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[]),e}},3658:function(e,t,o){o.r(t),o.d(t,{CommonHead:function(){return D},__N_SSG:function(){return k},default:function(){return z}});var r=o(1527),n=o(8563),i=o(8325),s=o.n(i),a=o(3119),l=o.n(a),c=o(959),u=o(7034),m=o(2714),h=o(7234),d=o(1104),p=o(9858);function f(e){let{items:t,current:o,setCurrent:n}=e,[i,s]=(0,c.useState)(!1);return(0,r.jsxs)(g,{onClick:()=>{s(!i)},children:[(0,r.jsxs)(v,{children:[(0,r.jsxs)("span",{className:i?"is-open":"",children:[t[o][0]," ",(0,r.jsx)(j,{children:t[o][1]})]}),(0,r.jsx)(d.Z,{className:i?"is-open":"",size:"1em"})]}),(0,r.jsx)(x,{className:i?"is-open":"",children:t.map((e,t)=>(0,r.jsx)(b,{onClick:()=>{n(t),s(!1)},children:(0,r.jsxs)("span",{children:[e[0]," ",e[1]]})},t))})]})}let g=m.ZP.nav.withConfig({componentId:"sc-7be6842d-0"})(["text-align:right;position:relative;padding:1rem 0;"]),x=m.ZP.div.withConfig({componentId:"sc-7be6842d-1"})(["position:absolute;right:0;opacity:0;pointer-events:none;margin-top:.625rem;margin-right:1px;border-right:2px solid ",";padding-left:2.5rem;transform:none;",";transform:translateY(-0.5rem);transition:opacity .3s ease,transform .3s ease;&.is-open{z-index:1;opacity:1;transform:translate(0);pointer-events:auto;}"],e=>e.theme.colors.accentHover,e=>e.theme.colors.navBgGradient),b=m.ZP.div.withConfig({componentId:"sc-7be6842d-2"})(["font-size:0.875rem;padding:0.3em .6em;cursor:pointer;position:relative;&:hover span{color:",";}"],e=>e.theme.colors.accent),v=m.ZP.div.withConfig({componentId:"sc-7be6842d-3"})(["cursor:pointer;color:",";& > span{position:relative;}& > span::before{"," height:2px;transition:height .3s;}& > span.is-open::before{height:0.4em;}svg{transition:transform .3s;margin-right:-0.4em;margin-top:-2px;margin-left:2px;}svg.is-open{transform:rotateX(180deg);}"],e=>e.theme.colors.textSecondary,p.iG),j=m.ZP.span.withConfig({componentId:"sc-7be6842d-4"})(["font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray2);var w=o(1624),y=o(8574),k=!0;let D=()=>(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function C(e){let{p:t,i:o}=e;return(0,r.jsx)(P,{href:"/posts/"+t.id,$num:o+1,passHref:!0,children:(0,r.jsxs)(F,{$num:o+1,children:[(0,r.jsxs)("div",{className:"meta",children:[(0,r.jsx)("span",{className:"date",children:(0,w.K_)((0,w.sG)(t.date))}),(0,r.jsx)(n.Z,{size:"1em",style:{marginLeft:"0.5em",marginRight:"0.25em",marginBottom:"0.125rem"}}),(0,r.jsx)("span",{className:"category",children:t.categories})]}),(0,r.jsxs)("div",{className:"post-container",children:[(0,r.jsx)("span",{className:"title",children:t.title}),(0,r.jsx)("div",{className:"meta description",children:t.description})]})]})})}var z=e=>{let{posts:t,categories:o}=e,[n,i]=(0,c.useState)(0),a=(0,c.useMemo)(()=>0===n?t:t.filter(e=>e.categories===o[n][0]),[n,t,o]),[l,m]=(0,u.$G)(),d=(0,c.useMemo)(()=>o.map(e=>"All Posts"===e[0]?[l("allposts"),e[1]]:e),[o,l]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"".concat(y.d.author," - Blog")}),(0,r.jsx)(D,{})]}),(0,r.jsx)(h.ZP,{children:(0,r.jsxs)(h.kn,{children:[(0,r.jsx)(f,{items:d,current:n,setCurrent:i}),(0,r.jsx)(I,{children:a.map((e,t)=>(0,r.jsx)(C,{p:e,i:t},e.id))}),(0,r.jsxs)(S,{children:["✿ ",(0,r.jsx)("span",{children:"\uD835\uDC51\uD835\uDC4E\uD835\uDC60 \uD835\uDC63\uD835\uDC52\uD835\uDC5F\uD835\uDC54\uD835\uDC56\uD835\uDC60\uD835\uDC60\uD835\uDC5A\uD835\uDC52\uD835\uDC56\uD835\uDC5B\uD835\uDC5B\uD835\uDC56\uD835\uDC50ℎ\uD835\uDC61"}),"\xa0"]})]})})]})};let I=m.ZP.section.withConfig({componentId:"sc-4cce15a8-0"})(["display:grid;justify-content:center;grid-template-columns:1fr 1fr;grid-column-gap:4rem;@media screen and (max-width:780px){grid-template-columns:repeat(1,100%);}"]),P=(0,m.ZP)(l()).withConfig({componentId:"sc-4cce15a8-1"})(['display:block;min-height:6rem;cursor:pointer;animation-fill-mode:forwards;position:relative;&::before{content:"No.0x','";position:absolute;right:0;bottom:1rem;font-style:italic;font-size:1.125rem;font-variant-numeric:tabular-nums;font-weight:bold;color:',";}.title{font-size:1.375rem;font-weight:600;transition:box-shadow .5s;}.post-container{transform:translateX(0);transition:transform .5s;}.post-container::before{content:'';position:absolute;left:0px;width:0px;height:100%;background:",";transform:translateX(0px);transition:transform ease .5s,width linear 0.3s;}&:hover{.post-container{transform:translateX(16px);}.post-container::before{width:6px;transform:translateX(-16px);}.title{","}}@media screen and (max-width:780px){.title{font-size:1.25rem;}min-height:5.25rem;}"],e=>e.$num.toString(16).padStart(2,"0"),e=>e.theme.colors.uiLineGray3,e=>e.theme.colors.textPrimary,p.Pg),F=m.ZP.div.withConfig({componentId:"sc-4cce15a8-2"})(["padding:1rem 0 2.5rem 0;position:relative;.meta{margin:0.5rem 0;color:",";}.description{color:",";}.date{font-weight:500;font-size:0.875rem;}.category{font-weight:500;font-size:0.875rem;display:inline-block;}"],e=>e.theme.colors.textGray2,e=>e.theme.colors.textSecondary),S=m.ZP.div.withConfig({componentId:"sc-4cce15a8-3"})(["position:fixed;bottom:5px;left:0;color:",";width:100%;text-align:right;font-size:0.875rem;padding-right:1.5rem;"],e=>e.theme.colors.accent)},2875:function(e,t,o){o.d(t,{ER:function(){return i},Tc:function(){return s},r$:function(){return n}});var r=o(2714);(0,r.F4)(["0%{opacity:0;}100%{opacity:1;}"]);let n=(0,r.F4)(["0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}"]),i=(0,r.F4)(["0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0;}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;}"]);(0,r.F4)(["0%{-webkit-filter:blur(12px);filter:blur(12px);opacity:0;}100%{-webkit-filter:blur(0px);filter:blur(0px);opacity:1;}"]),(0,r.F4)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),(0,r.F4)(["0%{transform:translateY(0);}100%{transform:translateY(-100%);}"]),(0,r.F4)(["0%{transform:translateX(-1000px);opacity:0;}100%{transform:translateX(0);opacity:1;}"]),(0,r.F4)(["0%{transform:translateX(1000px);opacity:0;}100%{transform:translateX(0);opacity:1;}"]);let s=(0,r.F4)(["50%{background-position:right}"])},9858:function(e,t,o){o.d(t,{$_:function(){return l},Cz:function(){return c},Pg:function(){return a},Ve:function(){return n},XC:function(){return i},iG:function(){return s}});var r=o(2714);let n=(0,r.iv)(["-webkit-text-stroke:1px;-webkit-text-fill-color:transparent;"]),i={s:(0,r.iv)(["box-shadow:inset 0 -0.3em 0 ",";"],e=>e.theme.colors.hoverBg),m:(0,r.iv)(["box-shadow:inset 0 -0.5em 0 ",";"],e=>e.theme.colors.hoverBg),l:(0,r.iv)(["box-shadow:inset 0 -0.8em 0 ",";"],e=>e.theme.colors.hoverBg),f:(0,r.iv)(["box-shadow:inset 0 -1em 0 ",";"],e=>e.theme.colors.hoverBg)},s=(0,r.iv)(["content:'';position:absolute;left:0;bottom:0;width:100%;border-radius:0.4em;height:0.4em;background:",";mix-blend-mode:",";"],e=>e.theme.colors.accentHover,e=>e.theme.colors.bgFilter),a=(0,r.iv)(["box-shadow:inset 0 -0.5em 0 ",";"],e=>e.theme.colors.accentHover);(0,r.iv)(["box-shadow:0 0 2px 0px ",",0 0 8px 0px ",";"],e=>e.theme.colors.shadowBg,e=>e.theme.colors.shadowBg);let l=(0,r.iv)(["box-shadow:0 0 2px 0px ",",0 0 8px 0px ",";"],e=>e.theme.colors.accent+"33",e=>e.theme.colors.accent+"33");(0,r.iv)(["background:",";box-shadow:rgb(0 0 0 / 10%) 0px 2px 4px;"],e=>e.theme.colors.bg);let c=(0,r.iv)(["border-radius:0.75rem;background:",";box-shadow:rgb(0 0 0 / 15%) 0px 0px 7px;"],e=>e.theme.colors.bg);(0,r.iv)(["&::-webkit-scrollbar{display:none;}"])}}]);