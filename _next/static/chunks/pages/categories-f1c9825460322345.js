(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return n(6951)}])},2349:function(e,t,n){"use strict";n.d(t,{W1:function(){return d},ZP:function(){return l},gI:function(){return m}});var r=n(1527),i=n(3119),o=n.n(i),s=n(2714),a=n(9858),c=n(7234);function l(e){let{mode:t,title:n,posts:i}=e;return(0,r.jsxs)(d,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(o(),{href:"/categories",legacyBehavior:!0,children:t.toUpperCase()}),(0,r.jsx)("h1",{children:n})]}),Object.keys(i).sort((e,t)=>e<t?1:-1).map(e=>(0,r.jsxs)(h,{children:[(0,r.jsx)(u,{children:e}),(0,r.jsx)(p,{children:i[e].map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(o(),{href:"/posts/".concat(e.id),legacyBehavior:!0,children:e.title}),(0,r.jsx)(f,{children:e.date.slice(5,10)})]},e.id))})]},e))]})}let d=(0,s.ZP)(c.kn).withConfig({componentId:"sc-e1172b6-0"})(["@media screen and (max-width:580px){padding:0 48px 48px 48px;}"]),m=s.ZP.div.withConfig({componentId:"sc-e1172b6-1"})(["margin:0 auto;text-align:center;padding:3rem 0 1rem 0;a,span{opacity:.5;transition:opacity .3s;}a:hover{opacity:1;}"]),h=s.ZP.section.withConfig({componentId:"sc-e1172b6-2"})(["display:flex;margin:2rem 0;@media screen and (max-width:780px){flex-direction:column;}"]),u=s.ZP.div.withConfig({componentId:"sc-e1172b6-3"})(["font-size:2rem;font-weight:bold;flex:1 1 0;@media screen and (max-width:780px){font-size:1.5rem;}"]),f=s.ZP.span.withConfig({componentId:"sc-e1172b6-4"})(["padding:0 .5rem;font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray),p=s.ZP.ul.withConfig({componentId:"sc-e1172b6-5"})(["margin:.125rem 0;padding-left:1.5rem;flex:2.5 1 0;@media screen and (max-width:780px){margin:1rem 0;}a{transition:box-shadow .3s;}a:hover{","}li{display:block;position:relative;}li::before{content:'•';position:absolute;left:-1.5rem;padding-right:1rem;}"],()=>a.XC.s)},1624:function(e,t,n){"use strict";n.d(t,{K_:function(){return o},l0:function(){return i},sG:function(){return s}});var r=n(6001);function i(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"dateYMD",i=r.Z.t,o=r.Z.resolvedLanguage;function s(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}switch(t){case"day":return i(n,{year:e.getFullYear(),month:"en"!==o?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==o?e.getDate():s(e.getDate())});case"miniute":return i(n,{year:e.getFullYear(),month:"en"!==o?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==o?e.getDate():s(e.getDate()),hour:e.getHours(),minute:e.getMinutes()})}}function s(e){if(e instanceof Date)return e;let t=new Date(e);if("Invalid Date"!==t.toString())return t;{let t=e.slice(0,11)+"23:59:59",n=new Date(t);return"Invalid Date"!==n.toString()?n:(console.error('[date.ts] error: unable to parse date string "'.concat(t,'"\n	set date to -1')),new Date(-1))}}},8563:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(8248).Z)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]])},6951:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return f}});var r=n(1527),i=n(8325),o=n.n(i),s=n(3119),a=n.n(s),c=n(2714),l=n(7980),d=n(7234),m=n(2349),h=n(8574),u=!0;function f(e){let{categories:t,tags:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"".concat(h.d.author,"'s Blog - Categories")}),(0,r.jsx)(l.CommonHead,{})]}),(0,r.jsx)(d.ZP,{children:(0,r.jsxs)(m.W1,{children:[(0,r.jsxs)(m.gI,{children:[(0,r.jsx)("span",{children:"CATEGORIES"}),(0,r.jsx)("h1",{children:"分类"})]}),(0,r.jsx)(p,{children:Object.keys(t).map(e=>(0,r.jsx)(a(),{href:"/categories/".concat(e),passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(g,{children:"".concat(e,"(").concat(t[e],")")})},e))}),(0,r.jsxs)(m.gI,{children:[(0,r.jsx)("span",{children:"TAGS"}),(0,r.jsx)("h1",{children:"标签"})]}),(0,r.jsx)(p,{children:Object.keys(n).map(e=>{if(0!==n[e])return(0,r.jsx)(a(),{href:"/tags/".concat(e),passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(g,{children:"".concat(e,"(").concat(n[e],")")})},e)})})]})})]})}let p=c.ZP.div.withConfig({componentId:"sc-d9b9306f-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;align-content:flex-start;"]),g=c.ZP.a.withConfig({componentId:"sc-d9b9306f-1"})(["opacity:.8;margin:.3em;background-color:",";padding:.3em 1em;border-radius:1em;transition:opacity .3s,transform .3s;font-size:0.875rem;&:hover{opacity:1;transform:scale(1.15);}"],e=>e.theme.colors.hoverBg)},7980:function(e,t,n){"use strict";n.r(t),n.d(t,{CommonHead:function(){return b},__N_SSG:function(){return v},default:function(){return C}});var r=n(1527),i=n(8563),o=n(8325),s=n.n(o),a=n(3119),c=n.n(a),l=n(959),d=n(7034),m=n(2714),h=n(7234),u=n(1913);function f(e){let{items:t,current:n,setCurrent:i}=e,o=(0,l.useRef)(null),[s,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{a(!0)},t=()=>{a(!1)};o.current&&(o.current.addEventListener("mouseenter",e),o.current.addEventListener("mouseleave",t));let n=(0,u.P)(function(e){o.current&&s&&(e.preventDefault(),o.current.scrollLeft+=e.deltaY)},20);window.addEventListener("wheel",n,{passive:!1});let r=o.current;return()=>{window.removeEventListener("wheel",n),r&&(r.removeEventListener("mouseenter",e),r.removeEventListener("mouseleave",t))}}),(0,r.jsx)(p,{ref:o,children:t.map((e,t)=>{let o=n===t;return(0,r.jsx)(g,{onClick:()=>{i(t)},className:o?"current":void 0,children:(0,r.jsxs)("span",{children:[e[0]," ",e[1]]})},t)})})}let p=m.ZP.nav.withConfig({componentId:"sc-af3c1718-0"})(["display:flex;margin-top:1rem;padding:1rem 0 1rem 0;overflow-x:auto;&::-webkit-scrollbar{display:none}position:sticky;top:-1px;background:",";z-index:1;"],e=>e.theme.colors.bg),g=m.ZP.button.withConfig({componentId:"sc-af3c1718-1"})(["font-size:.875rem;padding:0.3rem 0.625rem;margin-right:1rem;cursor:pointer;border-radius:2rem;border:1px solid ",";text-wrap:nowrap;color:",";&.current{background:",";color:",";}"],e=>e.theme.colors.textGray,e=>e.theme.colors.textPrimary,e=>e.theme.colors.bgInverse,e=>e.theme.colors.bg);var x=n(1624),w=n(8574),j=n(9858),v=!0;let b=()=>(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function y(e){let{p:t,i:n}=e;return(0,r.jsx)(k,{href:"/posts/"+t.id,$num:n+1,passHref:!0,children:(0,r.jsxs)(I,{$num:n+1,children:[(0,r.jsxs)("div",{className:"meta",children:[(0,r.jsx)("span",{className:"date",children:(0,x.K_)((0,x.sG)(t.date))}),(0,r.jsx)(i.Z,{size:"1em",style:{marginLeft:"0.5em",marginRight:"0.25em",marginBottom:"0.125rem"}}),(0,r.jsx)("span",{className:"category",children:t.categories})]}),(0,r.jsxs)("div",{className:"post-container",children:[(0,r.jsx)("span",{className:"title",children:t.title}),(0,r.jsx)("div",{className:"meta description",children:t.description})]})]})})}var C=e=>{let{posts:t,categories:n}=e,[i,o]=(0,l.useState)(0),a=(0,l.useMemo)(()=>0===i?t:t.filter(e=>e.categories===n[i][0]),[i,t,n]),[c,m]=(0,d.$G)(),u=(0,l.useMemo)(()=>n.map(e=>"All Posts"===e[0]?[c("allposts"),e[1]]:e),[n,c]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"".concat(w.d.author," - Blog")}),(0,r.jsx)(b,{})]}),(0,r.jsx)(h.ZP,{children:(0,r.jsxs)(h.kn,{children:[(0,r.jsx)(f,{items:u,current:i,setCurrent:o}),(0,r.jsx)(P,{children:a.map((e,t)=>(0,r.jsx)(y,{p:e,i:t},e.id))})]})})]})};let P=m.ZP.section.withConfig({componentId:"sc-2e78c9dc-0"})(["display:grid;justify-content:center;grid-template-columns:1fr 1fr;grid-column-gap:4rem;@media screen and (max-width:780px){grid-template-columns:repeat(1,100%);}"]),k=(0,m.ZP)(c()).withConfig({componentId:"sc-2e78c9dc-1"})(["display:block;min-height:6rem;cursor:pointer;animation-fill-mode:forwards;position:relative;.title{font-size:1.375rem;font-weight:600;transition:box-shadow .5s;}.post-container{transform:translateX(0);transition:transform .5s;}.post-container::before{content:'';position:absolute;left:0px;width:0px;height:2.25rem;background:",";transform:translateX(0px);transition:transform .5s ease,width 0.1s linear;border-radius:3px;}@media (any-hover:hover){&:hover{.post-container{transform:translateX(16px);}.post-container::before{width:6px;transform:translateX(-16px);transition:transform .5s ease,width 0.1s linear .2s;}.title{","}}}@media screen and (max-width:780px){.title{font-size:1.25rem;}min-height:5.25rem;}"],e=>e.theme.colors.textPrimary,j.Pg),I=m.ZP.div.withConfig({componentId:"sc-2e78c9dc-2"})(["padding:1rem 0 2.5rem 0;position:relative;.meta{margin:0.5rem 0;color:",";}.description{color:",";}.date{font-weight:500;font-size:0.875rem;}.category{font-weight:500;font-size:0.875rem;display:inline-block;}"],e=>e.theme.colors.textGray3,e=>e.theme.colors.textSecondary);m.ZP.div.withConfig({componentId:"sc-2e78c9dc-3"})(["position:fixed;bottom:5px;left:0;color:",";width:100%;text-align:right;font-size:0.875rem;padding-right:1.5rem;"],e=>e.theme.colors.accent)},8325:function(e,t,n){e.exports=n(5868)}},function(e){e.O(0,[5,234,888,774,179],function(){return e(e.s=511)}),_N_E=e.O()}]);