(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3127:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});let i=(0,n(3326).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},1352:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});let i=(0,n(3326).Z)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]])},1274:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4538)}])},2e3:function(e,t,n){"use strict";n.d(t,{K_:function(){return o},l0:function(){return r},sG:function(){return s}});var i=n(5646);function r(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",n=i.Z.t;switch(t){case"day":return n("dateYMD",{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()});case"miniute":return n("dateYMD",{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes()})}}function s(e){if(e instanceof Date)return e;let t=new Date(e);if("Invalid Date"!==t.toString())return t;{let t=e.slice(0,11)+"23:59:59",n=new Date(t);return"Invalid Date"!==n.toString()?n:(console.error('[date.ts] unable to parse date string "'.concat(t,'"\n	set date to -1')),new Date(-1))}}},4538:function(e,t,n){"use strict";n.r(t),n.d(t,{CommonHead:function(){return Z},__N_SSG:function(){return _},default:function(){return k}});var i=n(1527),r=n(1352),o=n(3283),s=n.n(o),a=n(9373),c=n.n(a),l=n(959),d=n(4738),m=n(8598),h=n(6593),u=n(3127),p=n(9802);function g(e){let{items:t,current:n,setCurrent:r}=e,[o,s]=(0,l.useState)(!1);return(0,i.jsxs)(f,{onClick:()=>{s(!o)},children:[(0,i.jsxs)(j,{children:[(0,i.jsxs)("span",{className:o?"is-open":"",children:[t[n][0]," ",(0,i.jsx)(w,{children:t[n][1]})]}),(0,i.jsx)(u.Z,{className:o?"is-open":"",size:"1em"})]}),(0,i.jsx)(x,{className:o?"is-open":"",children:t.map((e,t)=>(0,i.jsx)(v,{onClick:()=>{r(t),s(!1)},children:(0,i.jsxs)("span",{children:[e[0]," ",e[1]]})},t))})]})}let f=m.ZP.nav.withConfig({componentId:"sc-546db3e2-0"})(["text-align:right;position:relative;padding:1rem 0;"]),x=m.ZP.div.withConfig({componentId:"sc-546db3e2-1"})(["position:absolute;right:0;opacity:0;pointer-events:none;margin-top:.625rem;margin-right:1px;border-right:2px solid ",";padding-left:2.5rem;transform:none;",";transform:translateY(-0.5rem);transition:opacity .3s ease,transform .3s ease;&.is-open{z-index:1;opacity:1;transform:translate(0);pointer-events:auto;}"],e=>e.theme.colors.accentHover,e=>e.theme.colors.navBgGradient),v=m.ZP.div.withConfig({componentId:"sc-546db3e2-2"})(["font-size:0.875rem;padding:0.3em .6em;cursor:pointer;position:relative;&:hover span{color:",";}"],e=>e.theme.colors.accent),j=m.ZP.div.withConfig({componentId:"sc-546db3e2-3"})(["cursor:pointer;font-weight:bold;color:",";& > span{position:relative;}& > span::before{"," height:2px;transition:height .3s;}& > span.is-open::before{height:0.4em;}svg{transition:transform .3s;margin-right:-0.4em;margin-top:-2px;margin-left:2px;}svg.is-open{transform:rotateX(180deg);}"],e=>e.theme.colors.textSecondary,p.iG),w=m.ZP.span.withConfig({componentId:"sc-546db3e2-4"})(["font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray2);var y=n(2e3),b=n(8761),_=!0;let Z=()=>(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function N(e){let{p:t,i:n}=e;return(0,i.jsx)(P,{href:"/posts/"+t.id,passHref:!0,children:(0,i.jsxs)("div",{className:"card-content",children:[(0,i.jsxs)("div",{className:"meta",children:[(0,i.jsx)("span",{className:"date",children:(0,y.K_)((0,y.sG)(t.date))}),(0,i.jsx)(r.Z,{size:"1em",style:{marginLeft:"0.5em",marginRight:"0.25em",marginBottom:"0.125rem"}}),(0,i.jsx)("span",{className:"category",children:t.categories})]}),(0,i.jsx)("span",{className:"title",children:t.title}),(0,i.jsx)("div",{className:"meta description",children:t.description})]})})}var k=e=>{let{posts:t,categories:n}=e,[r,o]=(0,l.useState)(0),a=(0,l.useMemo)(()=>0===r?t:t.filter(e=>e.categories===n[r][0]),[r,t,n]),[c,m]=(0,d.$G)(),u=(0,l.useMemo)(()=>n.map(e=>"All Posts"===e[0]?[c("allposts"),e[1]]:e),[n,c]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"".concat(b.d.author," - Blog")}),(0,i.jsx)(Z,{})]}),(0,i.jsx)(h.ZP,{children:(0,i.jsxs)(h.kn,{children:[(0,i.jsx)(g,{items:u,current:r,setCurrent:o}),(0,i.jsx)(C,{children:a.map((e,t)=>(0,i.jsx)(N,{p:e,i:t},e.id))})]})})]})};let C=m.ZP.section.withConfig({componentId:"sc-d7146bc1-0"})(["display:grid;justify-content:center;grid-template-columns:1fr 1fr;grid-column-gap:2.5rem;@media screen and (max-width:780px){grid-template-columns:repeat(1,100%);}"]),P=(0,m.ZP)(c()).withConfig({componentId:"sc-d7146bc1-1"})(["display:block;min-height:6rem;cursor:pointer;animation-fill-mode:forwards;position:relative;.title{font-size:1.125rem;font-weight:600;transition:box-shadow .5s;}@media (any-hover:hover){&:hover{.title{","}}}@media (any-hover:none){&:active{.title{","}}}@media screen and (max-width:780px){min-height:5.25rem;}.card-content{padding:1rem 0 2.5rem 0;}.meta{margin:0.25rem 0;font-size:0.875rem;color:",";font-weight:600;}.date{}.category{display:inline-block;}"],p.Pg,p.Pg,e=>e.theme.colors.textGray2)},3283:function(e,t,n){e.exports=n(8471)}},function(e){e.O(0,[818,593,888,774,179],function(){return e(e.s=1274)}),_N_E=e.O()}]);