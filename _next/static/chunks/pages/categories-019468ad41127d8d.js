(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return n(6951)}])},2349:function(e,t,n){"use strict";n.d(t,{W1:function(){return d},ZP:function(){return l},gI:function(){return m}});var i=n(1527),r=n(3119),o=n.n(r),s=n(2714),a=n(9858),c=n(7234);function l(e){let{mode:t,title:n,posts:r}=e;return(0,i.jsxs)(d,{children:[(0,i.jsxs)(m,{children:[(0,i.jsx)(o(),{href:"/categories",legacyBehavior:!0,children:t.toUpperCase()}),(0,i.jsx)("h1",{children:n})]}),Object.keys(r).sort((e,t)=>e<t?1:-1).map(e=>(0,i.jsxs)(h,{children:[(0,i.jsx)(u,{children:e}),(0,i.jsx)(g,{children:r[e].map(e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(o(),{href:"/posts/".concat(e.id),legacyBehavior:!0,children:e.title}),(0,i.jsx)(p,{children:e.date.slice(5,10)})]},e.id))})]},e))]})}let d=(0,s.ZP)(c.kn).withConfig({componentId:"sc-e1172b6-0"})(["@media screen and (max-width:580px){padding:0 48px 48px 48px;}"]),m=s.ZP.div.withConfig({componentId:"sc-e1172b6-1"})(["margin:0 auto;text-align:center;padding:3rem 0 1rem 0;a,span{opacity:.5;transition:opacity .3s;}a:hover{opacity:1;}"]),h=s.ZP.section.withConfig({componentId:"sc-e1172b6-2"})(["display:flex;margin:2rem 0;@media screen and (max-width:780px){flex-direction:column;}"]),u=s.ZP.div.withConfig({componentId:"sc-e1172b6-3"})(["font-size:2rem;font-weight:bold;flex:1 1 0;@media screen and (max-width:780px){font-size:1.5rem;}"]),p=s.ZP.span.withConfig({componentId:"sc-e1172b6-4"})(["padding:0 .5rem;font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray),g=s.ZP.ul.withConfig({componentId:"sc-e1172b6-5"})(["margin:.125rem 0;padding-left:1.5rem;flex:2.5 1 0;@media screen and (max-width:780px){margin:1rem 0;}a{transition:box-shadow .3s;}a:hover{","}li{display:block;position:relative;}li::before{content:'•';position:absolute;left:-1.5rem;padding-right:1rem;}"],()=>a.XC.s)},1624:function(e,t,n){"use strict";n.d(t,{K_:function(){return o},l0:function(){return r},sG:function(){return s}});var i=n(6001);function r(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"dateYMD",r=i.Z.t,o=i.Z.resolvedLanguage;function s(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}switch(t){case"day":return r(n,{year:e.getFullYear(),month:"en"!==o?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==o?e.getDate():s(e.getDate())});case"miniute":return r(n,{year:e.getFullYear(),month:"en"!==o?e.getMonth()+1:new Intl.DateTimeFormat("en-US",{month:"short"}).format(e),day:"en"!==o?e.getDate():s(e.getDate()),hour:e.getHours(),minute:e.getMinutes()})}}function s(e){if(e instanceof Date)return e;let t=new Date(e);if("Invalid Date"!==t.toString())return t;{let t=e.slice(0,11)+"23:59:59",n=new Date(t);return"Invalid Date"!==n.toString()?n:(console.error('[date.ts] error: unable to parse date string "'.concat(t,'"\n	set date to -1')),new Date(-1))}}},1104:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});let i=(0,n(8248).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},8563:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});let i=(0,n(8248).Z)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]])},6951:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return p}});var i=n(1527),r=n(8325),o=n.n(r),s=n(3119),a=n.n(s),c=n(2714),l=n(3658),d=n(7234),m=n(2349),h=n(8574),u=!0;function p(e){let{categories:t,tags:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"".concat(h.d.author,"'s Blog - Categories")}),(0,i.jsx)(l.CommonHead,{})]}),(0,i.jsx)(d.ZP,{children:(0,i.jsxs)(m.W1,{children:[(0,i.jsxs)(m.gI,{children:[(0,i.jsx)("span",{children:"CATEGORIES"}),(0,i.jsx)("h1",{children:"分类"})]}),(0,i.jsx)(g,{children:Object.keys(t).map(e=>(0,i.jsx)(a(),{href:"/categories/".concat(e),passHref:!0,legacyBehavior:!0,children:(0,i.jsx)(f,{children:"".concat(e,"(").concat(t[e],")")})},e))}),(0,i.jsxs)(m.gI,{children:[(0,i.jsx)("span",{children:"TAGS"}),(0,i.jsx)("h1",{children:"标签"})]}),(0,i.jsx)(g,{children:Object.keys(n).map(e=>{if(0!==n[e])return(0,i.jsx)(a(),{href:"/tags/".concat(e),passHref:!0,legacyBehavior:!0,children:(0,i.jsx)(f,{children:"".concat(e,"(").concat(n[e],")")})},e)})})]})})]})}let g=c.ZP.div.withConfig({componentId:"sc-d9b9306f-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;align-content:flex-start;"]),f=c.ZP.a.withConfig({componentId:"sc-d9b9306f-1"})(["opacity:.8;margin:.3em;background-color:",";padding:.3em 1em;border-radius:1em;transition:opacity .3s,transform .3s;font-size:0.875rem;&:hover{opacity:1;transform:scale(1.15);}"],e=>e.theme.colors.hoverBg)},3658:function(e,t,n){"use strict";n.r(t),n.d(t,{CommonHead:function(){return y},__N_SSG:function(){return C},default:function(){return k}});var i=n(1527),r=n(8563),o=n(8325),s=n.n(o),a=n(3119),c=n.n(a),l=n(959),d=n(7034),m=n(2714),h=n(7234),u=n(1104),p=n(9858);function g(e){let{items:t,current:n,setCurrent:r}=e,[o,s]=(0,l.useState)(!1);return(0,i.jsxs)(f,{onClick:()=>{s(!o)},children:[(0,i.jsxs)(w,{children:[(0,i.jsxs)("span",{className:o?"is-open":"",children:[t[n][0]," ",(0,i.jsx)(j,{children:t[n][1]})]}),(0,i.jsx)(u.Z,{className:o?"is-open":"",size:"1em"})]}),(0,i.jsx)(x,{className:o?"is-open":"",children:t.map((e,t)=>(0,i.jsx)(v,{onClick:()=>{r(t),s(!1)},children:(0,i.jsxs)("span",{children:[e[0]," ",e[1]]})},t))})]})}let f=m.ZP.nav.withConfig({componentId:"sc-7be6842d-0"})(["text-align:right;position:relative;padding:1rem 0;"]),x=m.ZP.div.withConfig({componentId:"sc-7be6842d-1"})(["position:absolute;right:0;opacity:0;pointer-events:none;margin-top:.625rem;margin-right:1px;border-right:2px solid ",";padding-left:2.5rem;transform:none;",";transform:translateY(-0.5rem);transition:opacity .3s ease,transform .3s ease;&.is-open{z-index:1;opacity:1;transform:translate(0);pointer-events:auto;}"],e=>e.theme.colors.accentHover,e=>e.theme.colors.navBgGradient),v=m.ZP.div.withConfig({componentId:"sc-7be6842d-2"})(["font-size:0.875rem;padding:0.3em .6em;cursor:pointer;position:relative;&:hover span{color:",";}"],e=>e.theme.colors.accent),w=m.ZP.div.withConfig({componentId:"sc-7be6842d-3"})(["cursor:pointer;color:",";& > span{position:relative;}& > span::before{"," height:2px;transition:height .3s;}& > span.is-open::before{height:0.4em;}svg{transition:transform .3s;margin-right:-0.4em;margin-top:-2px;margin-left:2px;}svg.is-open{transform:rotateX(180deg);}"],e=>e.theme.colors.textSecondary,p.iG),j=m.ZP.span.withConfig({componentId:"sc-7be6842d-4"})(["font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray2);var b=n(1624),D=n(8574),C=!0;let y=()=>(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function Z(e){let{p:t,i:n}=e;return(0,i.jsx)(I,{href:"/posts/"+t.id,passHref:!0,children:(0,i.jsxs)("div",{className:"card-content",children:[(0,i.jsxs)("div",{className:"meta",children:[(0,i.jsx)("span",{className:"date",children:(0,b.K_)((0,b.sG)(t.date))}),(0,i.jsx)(r.Z,{size:"1em",style:{marginLeft:"0.5em",marginRight:"0.25em",marginBottom:"0.125rem"}}),(0,i.jsx)("span",{className:"category",children:t.categories})]}),(0,i.jsx)("span",{className:"title",children:t.title}),(0,i.jsx)("div",{className:"meta description",children:t.description})]})})}var k=e=>{let{posts:t,categories:n}=e,[r,o]=(0,l.useState)(0),a=(0,l.useMemo)(()=>0===r?t:t.filter(e=>e.categories===n[r][0]),[r,t,n]),[c,m]=(0,d.$G)(),u=(0,l.useMemo)(()=>n.map(e=>"All Posts"===e[0]?[c("allposts"),e[1]]:e),[n,c]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"".concat(D.d.author," - Blog")}),(0,i.jsx)(y,{})]}),(0,i.jsx)(h.ZP,{children:(0,i.jsxs)(h.kn,{children:[(0,i.jsx)(g,{items:u,current:r,setCurrent:o}),(0,i.jsx)(P,{children:a.map((e,t)=>(0,i.jsx)(Z,{p:e,i:t},e.id))}),(0,i.jsxs)(_,{children:["✿ ",(0,i.jsx)("span",{children:"\uD835\uDC51\uD835\uDC4E\uD835\uDC60 \uD835\uDC63\uD835\uDC52\uD835\uDC5F\uD835\uDC54\uD835\uDC56\uD835\uDC60\uD835\uDC60\uD835\uDC5A\uD835\uDC52\uD835\uDC56\uD835\uDC5B\uD835\uDC5B\uD835\uDC56\uD835\uDC50ℎ\uD835\uDC61"}),"\xa0"]})]})})]})};let P=m.ZP.section.withConfig({componentId:"sc-3c215793-0"})(["display:grid;justify-content:center;grid-template-columns:1fr 1fr;grid-column-gap:4rem;@media screen and (max-width:780px){grid-template-columns:repeat(1,100%);}"]),I=(0,m.ZP)(c()).withConfig({componentId:"sc-3c215793-1"})(["display:block;min-height:6rem;cursor:pointer;animation-fill-mode:forwards;position:relative;.title{font-size:1.375rem;font-weight:600;transition:box-shadow .5s;}.title{","}}}@media (any-hover:none){&:active{.title{","}}}@media screen and (max-width:780px){.title{font-size:1.25rem;}min-height:5.25rem;}.card-content{padding:1rem 0 2.5rem 0;}.meta{margin:0.5rem 0;font-size:0.875rem;color:",";}.description{color:",";}.date{font-weight:600;}.category{font-weight:600;display:inline-block;}"],p.Pg,p.Pg,e=>e.theme.colors.textSecondary,e=>e.theme.colors.textSecondary),_=m.ZP.div.withConfig({componentId:"sc-3c215793-2"})(["position:fixed;bottom:5px;left:0;color:",";width:100%;text-align:right;font-size:0.875rem;padding-right:1.5rem;"],e=>e.theme.colors.accent)},9858:function(e,t,n){"use strict";n.d(t,{$_:function(){return c},Cz:function(){return l},Pg:function(){return a},Ve:function(){return r},XC:function(){return o},iG:function(){return s}});var i=n(2714);let r=(0,i.iv)(["-webkit-text-stroke:1px;-webkit-text-fill-color:transparent;"]),o={s:(0,i.iv)(["box-shadow:inset 0 -0.3em 0 ",";"],e=>e.theme.colors.hoverBg),m:(0,i.iv)(["box-shadow:inset 0 -0.5em 0 ",";"],e=>e.theme.colors.hoverBg),l:(0,i.iv)(["box-shadow:inset 0 -0.8em 0 ",";"],e=>e.theme.colors.hoverBg),f:(0,i.iv)(["box-shadow:inset 0 -1em 0 ",";"],e=>e.theme.colors.hoverBg)},s=(0,i.iv)(["content:'';position:absolute;left:0;bottom:0;width:100%;border-radius:0.4em;height:0.4em;background:",";mix-blend-mode:",";"],e=>e.theme.colors.accentHover,e=>e.theme.colors.bgFilter),a=(0,i.iv)(["box-shadow:inset 0 -0.5em 0 ",";"],e=>e.theme.colors.accentHover);(0,i.iv)(["box-shadow:0 0 2px 0px ",",0 0 8px 0px ",";"],e=>e.theme.colors.shadowBg,e=>e.theme.colors.shadowBg);let c=(0,i.iv)(["box-shadow:0 0 2px 0px ",",0 0 8px 0px ",";"],e=>e.theme.colors.accent+"33",e=>e.theme.colors.accent+"33");(0,i.iv)(["background:",";box-shadow:rgb(0 0 0 / 10%) 0px 2px 4px;"],e=>e.theme.colors.bg);let l=(0,i.iv)(["border-radius:0.75rem;background:",";box-shadow:rgb(0 0 0 / 15%) 0px 0px 7px;"],e=>e.theme.colors.bg);(0,i.iv)(["&::-webkit-scrollbar{display:none;}"])},8325:function(e,t,n){e.exports=n(5868)}},function(e){e.O(0,[314,234,888,774,179],function(){return e(e.s=511)}),_N_E=e.O()}]);