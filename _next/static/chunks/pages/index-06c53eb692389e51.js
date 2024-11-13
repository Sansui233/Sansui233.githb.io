(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7623:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8853)}])},6750:(e,t,r)=>{"use strict";r.d(t,{Wm:()=>i,_U:()=>s,b5:()=>o});var n=r(7682);function i(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dateNatural",r=n.A.t,i=n.A.resolvedLanguage;return r(t,"dateNatural"!==t||"en"!==i?{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes()}:{year:e.getFullYear(),month:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:e.getDate(),daySuffix:function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}(e.getDate()),hour:e.getHours(),minute:e.getMinutes()})}function s(e){if(e instanceof Date)return e;let t=new Date(e);if("Invalid Date"!==t.toString())return t;{let t=e.slice(0,11)+"23:59:59",r=new Date(t);return"Invalid Date"!==r.toString()?r:(console.error('[date.ts] error: unable to parse date string "'.concat(t,'"\n	set date to -1')),new Date(-1))}}},1390:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(5982).A)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]])},8853:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CommonHead:()=>b,__N_SSG:()=>y,default:()=>_});var n=r(4584),i=r(1390),o=r(3575),s=r.n(o),a=r(81),l=r.n(a),c=r(3732),d=r(3025),m=r(1297),u=r(5217),h=r(5749);function p(e){let{items:t,current:r,setCurrent:i}=e,o=(0,c.useRef)(null),[s,a]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=()=>{a(!0)},t=()=>{a(!1)};o.current&&(o.current.addEventListener("mouseenter",e),o.current.addEventListener("mouseleave",t));let r=(0,h.n)(function(e){o.current&&s&&(e.preventDefault(),o.current.scrollLeft+=e.deltaY)},20);window.addEventListener("wheel",r,{passive:!1});let n=o.current;return()=>{window.removeEventListener("wheel",r),n&&(n.removeEventListener("mouseenter",e),n.removeEventListener("mouseleave",t))}}),(0,n.jsx)(f,{ref:o,children:t.map((e,t)=>{let o=r===t;return(0,n.jsx)(g,{onClick:()=>{i(t)},className:o?"current":void 0,children:(0,n.jsxs)("span",{children:[e[0]," ",e[1]]})},t)})})}let f=m.Ay.nav.withConfig({componentId:"sc-4899db0f-0"})(["display:flex;margin-top:1rem;padding:1rem 0 1rem 0;overflow-x:auto;&::-webkit-scrollbar{display:none}position:sticky;top:-1px;background:",";z-index:1;"],e=>e.theme.colors.bg),g=m.Ay.button.withConfig({componentId:"sc-4899db0f-1"})(["font-size:.875rem;padding:0.3rem 0.625rem;margin-right:1rem;cursor:pointer;border-radius:0.75rem;border:1px solid ",";text-wrap:nowrap;color:",";&.current{background:",";color:",";}"],e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.textGray,e=>e.theme.colors.bgInverse,e=>e.theme.colors.bg);var x=r(6750),w=r(6539),v=r(6856),y=!0;let b=()=>(0,n.jsxs)(c.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function j(e){let{p:t,i:r}=e;return(0,n.jsx)(A,{href:"/posts/"+t.id,$num:r+1,passHref:!0,children:(0,n.jsxs)(N,{$num:r+1,children:[(0,n.jsxs)("div",{className:"meta",children:[(0,n.jsx)("span",{className:"date",children:(0,x.b5)((0,x._U)(t.date))}),(0,n.jsx)(i.A,{size:"1em",style:{marginLeft:"0.5em",marginRight:"0.25em",marginBottom:"0.125rem"}}),(0,n.jsx)("span",{className:"category",children:t.categories})]}),(0,n.jsxs)("div",{className:"post-container",children:[(0,n.jsx)("span",{className:"title",children:t.title}),(0,n.jsx)("div",{className:"meta description",children:t.description})]})]})})}let _=e=>{let{posts:t,categories:r}=e,[i,o]=(0,c.useState)(0),a=(0,c.useMemo)(()=>0===i?t:t.filter(e=>e.categories===r[i][0]),[i,t,r]),[l,m]=(0,d.Bd)(),h=(0,c.useMemo)(()=>r.map(e=>"All Posts"===e[0]?[l("allposts"),e[1]]:e),[r,l]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"".concat(w.E.author," - Blog")}),(0,n.jsx)(b,{})]}),(0,n.jsx)(u.Ay,{children:(0,n.jsxs)(u.VS,{children:[(0,n.jsx)(p,{items:h,current:i,setCurrent:o}),(0,n.jsx)(k,{children:a.map((e,t)=>(0,n.jsx)(j,{p:e,i:t},e.id))})]})})]})},k=m.Ay.section.withConfig({componentId:"sc-3020a33-0"})(["display:grid;justify-content:center;grid-template-columns:1fr 1fr;grid-column-gap:4rem;@media screen and (max-width:780px){grid-template-columns:repeat(1,100%);}"]),A=(0,m.Ay)(l()).withConfig({componentId:"sc-3020a33-1"})(["display:block;min-height:6rem;cursor:pointer;animation-fill-mode:forwards;position:relative;.title{font-size:1.25rem;font-weight:600;transition:box-shadow .5s;}.post-container{transform:translateX(0);transition:transform .5s;}.post-container::before{content:'';position:absolute;left:0px;width:0px;height:2.25rem;background:",";transform:translateX(0px);transition:transform .5s ease,width 0.1s linear;border-radius:3px;}@media (any-hover:hover){&:hover{.post-container{transform:translateX(16px);}.post-container::before{width:6px;transform:translateX(-16px);transition:transform .5s ease,width 0.1s linear .2s;}.title{","}}}@media screen and (max-width:780px){.title{font-size:1.25rem;}min-height:5.25rem;}"],e=>e.theme.colors.textPrimary,v.Gr),N=m.Ay.div.withConfig({componentId:"sc-3020a33-2"})(["padding:1rem 0 2.5rem 0;position:relative;.meta{margin:0.5rem 0;color:",";}.description{color:",";}.date{font-weight:500;font-size:0.875rem;}.category{font-weight:500;font-size:0.875rem;display:inline-block;}"],e=>e.theme.colors.textGray2,e=>e.theme.colors.textSecondary);m.Ay.div.withConfig({componentId:"sc-3020a33-3"})(["position:fixed;bottom:5px;left:0;color:",";width:100%;text-align:right;font-size:0.875rem;padding-right:1.5rem;"],e=>e.theme.colors.accent)},3575:(e,t,r)=>{e.exports=r(3951)}},e=>{var t=t=>e(e.s=t);e.O(0,[455,217,636,593,411],()=>t(7623)),_N_E=e.O()}]);