(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{6377:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return n(6333)}])},7518:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(1527),r=n(959),o=n(2714),s=n(637);function a(e){let{isModel:t,setModel:n,scrollRef:o,style:a,...c}=e,d=(0,s.aA)(),h=(0,r.useMemo)(()=>a?{...a,height:d+"px"}:{height:d+"px"},[a,d]);return(0,r.useEffect)(()=>(t?o?o.style.overflow="hidden":document.body.style.overflow="hidden":o?o.style.overflow="auto":document.body.style.overflow="auto",()=>{o?o.style.overflow="auto":document.body.style.overflow="auto"}),[t,o]),t&&(0,i.jsx)(l,{...c,$isOpen:t,onClick:e=>{e.stopPropagation(),n(!1)},style:h})}let l=o.ZP.div.withConfig({componentId:"sc-87e6eb4f-0"})(["position:fixed;top:0;left:0;width:100vw;background:#000000de;z-index:10;cursor:zoom-out;will-change:transform;"])},6152:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});let i=n(2714).ZP.div.withConfig({componentId:"sc-47295c3a-0"})(["font-style:italic;font-size:0.875rem;color:",";text-align:right;"],e=>e.theme.colors.textGray2)},4198:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(1527);n(959);var r=n(2714);function o(e){let{title:t,Icon:n,children:r,...o}=e;return(0,i.jsxs)(s,{...o,children:[(0,i.jsxs)(a,{children:[n&&(0,i.jsx)(n,{size:"1em",style:{marginRight:"0.5em"}}),t]}),(0,i.jsx)("div",{style:{paddingTop:"0.5rem",fontSize:"0.9rem"},children:r})]})}let s=r.ZP.section.withConfig({componentId:"sc-8d318c76-0"})(["margin-top:1.5rem;padding:0.5rem 1rem;line-height:1.625rem;color:",";"],e=>e.theme.colors.textSecondary),a=r.ZP.div.withConfig({componentId:"sc-8d318c76-1"})(["font-weight:600;text-transform:uppercase;font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray2)},5420:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(1527),r=n(1519),o=n(5886),s=n(6052),a=n(1978),l=n.n(a),c=n(959),d=n(2714),h=n(8574),u=n(9858),m=n(7518),g=n(4198);let p=l()(()=>Promise.all([n.e(262),n.e(996),n.e(595),n.e(226),n.e(118)]).then(n.bind(n,5762)),{loadableGenerated:{webpack:()=>[5762]}});function f(){let e=(0,c.useContext)(d.Ni),[t,n]=(0,c.useState)([{objectId:"0x00",comment:"等等，好像没有评论哦~"}]),[a,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=encodeURIComponent(globalThis.location.pathname);fetch(h.d.walineApi+"/comment?path="+e+"&pageSize=10&page=1&lang=en-US&sortBy=insertedAt_desc").then(e=>e.json()).then(e=>{n(e.data)})},[]),(0,i.jsxs)(i.Fragment,{children:[a&&(0,i.jsx)(m.Z,{isModel:a,setModel:l,style:{background:null==e?void 0:e.colors.bgMask},children:(0,i.jsx)(w,{children:(0,i.jsx)(p,{onClick:e=>e.stopPropagation()})})}),(0,i.jsxs)(g.Z,{title:r.ZP.t("latestcomments"),Icon:o.Z,children:[(0,i.jsx)(x,{children:t.map(e=>(0,i.jsx)("li",{children:e.comment.replace(/<[^>]*>/g,"")},e.objectId))}),(0,i.jsxs)(b,{children:[(0,i.jsx)(s.Z,{size:"1em",style:{marginRight:"0.5em"}}),(0,i.jsx)("span",{onClick:()=>l(!0),children:"添加留言"})]})]})]})}let x=d.ZP.div.withConfig({componentId:"sc-5dcdea9e-0"})(["font-size:0.9rem;li{list-style:none;height:1.5em;overflow:hidden;}"]),b=d.ZP.button.withConfig({componentId:"sc-5dcdea9e-1"})(["margin-top:2rem;max-width:8rem;padding:0.5rem 1rem;border-radius:0.75rem;border:1px solid ",";font-weight:600;color:",";cursor:pointer;background:",";@media screen and (max-width:780px){max-width:unset;background:",";}&:hover{color:",";","}"],e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.textSecondary,e=>e.theme.colors.bg,e=>e.theme.colors.bg2,e=>e.theme.colors.accent,u.$_),w=d.ZP.div.withConfig({componentId:"sc-5dcdea9e-2"})(["height:100%;width:100%;padding-top:64px;overflow-y:auto;&>div{max-width:min(90%,640px);cursor:default;}"])},8887:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},useImageBroswerStore:function(){return f}});var i=n(1527),r=n(4635),o=n(6548),s=n(959),a=n(2714),l=n(8989),c=n(7642),d=n(637),h=n(7518),u=n(1913);let m={isPressed:!1,startpos:[0,0,0],starttime:0,trans:[0,0],direction:0,bias:0},g=e=>e.type.includes("touch")?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY},p=(e,t)=>e.type.includes("touch")?"move"===t?"touchmove":"touchend":"move"===t?"mousemove":"mouseup",f=(0,l.Ue)(e=>({isModel:!1,setisModel:t=>e(()=>({isModel:t})),imagesData:[],setImagesData:t=>e(()=>({imagesData:t})),currentIndex:0,setCurrentIndex:t=>e(()=>({currentIndex:t}))}));function x(){let e=f(e=>e),t=f(e=>e.imagesData),[n,a]=(0,s.useState)({curr:f(e=>e.currentIndex),last:f(e=>e.currentIndex)});n.curr>t.length-1&&console.error("uncaught invalid image index:",n,"in length",t.length);let l=(0,s.useCallback)(()=>{n.curr>0&&a({curr:n.curr-1,last:n.curr})},[n,a]),x=(0,s.useCallback)(()=>{n.curr<t.length-1&&a({curr:n.curr+1,last:n.curr})},[n,a,t]),k=(0,s.useCallback)(()=>{},[]),C=(0,s.useCallback)(e=>{"ArrowLeft"===e.key?l():"ArrowRight"===e.key&&x()},[x,l]);(0,c.I)("keydown",C);let{bind:S,trans:P,direction:I,isBeforeUnmount:Z}=function(e,t,n,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:17,[o,a]=(0,s.useState)(),[l,c]=(0,s.useState)([0,0]),[d,h]=(0,s.useState)(0),[f,x]=(0,s.useState)(!1),b=(0,s.useCallback)((e,t)=>n=>{if(n.stopPropagation(),n.target){m.isPressed=!0,m.starttime=Date.now(),m.startpos=[g(n).x,g(n).y,n.target.scrollTop];let i=n.target;n.type.includes("touch")&&i.addEventListener(p(n,"move"),e,{passive:!1}),i.addEventListener(p(n,"end"),t,{once:!0})}},[]),w=(0,s.useCallback)(e=>{if(e.stopPropagation(),e.type.includes("touch")&&e.touches.length>1){e.preventDefault();return}if(e.target&&m.isPressed){let t=g(e).x-m.startpos[0],n=g(e).y-m.startpos[1];if(m.trans=[t,n],0!==m.direction)c("x"===m.direction?[t-m.bias,0]:[0,n-m.bias]);else if(Math.abs(t)>20||Math.abs(n)>20){let e=Math.abs(t)>Math.abs(n)?"x":"y";m.bias="x"===e?t:n,m.direction=e,h(e),c("x"===e?[t-m.bias,0]:[0,n-m.bias])}}},[]),y=(0,s.useCallback)(r=>o=>{o.stopPropagation(),Date.now()-m.starttime<140&&5>Math.abs(m.trans[0])&&5>Math.abs(m.trans[1])?(x(!0),setTimeout(()=>{e.setisModel(!1),x(!1)},300)):"x"===m.direction&&(m.trans[0]<-60?n():m.trans[0]>60?t():i()),m.isPressed=!1,m.startpos=[0,0,0],m.trans=[0,0],c([0,0]),m.direction=0,m.bias=0,h(0),o.target.removeEventListener("touchmove",r)},[e,t,n,i]);return(0,s.useEffect)(()=>{let e=(0,u.P)(w,r),t=b(e,y(e));a(()=>t)},[y,w,b,r]),{trans:l,direction:d,isBeforeUnmount:f,bind:{onTouchStart:o,onMouseDown:o}}}(e,l,x,k,20),M=(0,s.useMemo)(()=>"x"===I&&P[0]>60,[P,I]),T=(0,s.useMemo)(()=>"x"===I&&P[0]<-60,[P,I]),E=(0,d.aA)(),N=(0,d.hV)(),z=(0,s.useMemo)(()=>"x"===I?{transition:"transform 0.05s linear",transform:"translate3d(".concat(P[0]-n.curr*N,"px, 0px, 0px)"),width:"".concat(N*t.length,"px")}:{transition:"transform 0.5s ease",transform:"translate3d(".concat(-n.curr*N,"px, 0px, 0px)"),width:"".concat(N*t.length,"px")},[P,I,n.curr,N,t.length]),L=(0,s.useMemo)(()=>Z?{opacity:0,transition:"opacity 0.3s ease"}:{},[Z]),D=(0,s.useMemo)(()=>{let e=n.curr;return[e>0?{i:e-1,data:t[e-1]}:{i:e-1,data:void 0},{i:e,data:t[e]},e+1<t.length?{i:e+1,data:t[e+1]}:{i:e+1,data:void 0}]},[t,n.curr]),$=(0,s.useMemo)(()=>D.map(e=>{let t=N*e.i,n={transform:"translateX(".concat(t,"px)"),width:"".concat(N,"px"),height:"100%"};return e.data?(0===e.data.width||0===e.data.height?1:e.data.width/e.data.height)>.6||e.data.height<E?{...n,display:"flex",alignItems:"center"}:{...n,overflowY:"auto"}:n}),[D,E,N]),A=(0,s.useMemo)(()=>"x"===I?{overflowY:"hidden"}:{},[I]),G=(0,s.useCallback)(e=>{let t=0===e.width||0===e.height?1:e.width/e.height;return t>=2?{maxWidth:N,maxHeight:.9*E+"px"}:t>.6||e.height<E?{maxWidth:N,maxHeight:E+"px"}:{maxWidth:.95*N}},[E,N]);return(0,i.jsxs)(h.Z,{isModel:!0,setModel:e.setisModel,style:{...L,background:"#1d1d1d"},children:[(0,i.jsx)(j,{...S,onClick:e=>e.stopPropagation(),style:z,children:D.map((e,t)=>(0,i.jsx)(b,{style:{...$[t],...A},children:e.data&&(0,i.jsx)(w,{src:"loaded"===e.data.ok?e.data.src:"",alt:e.data.ok,style:G(e.data)})},e.i))}),n.curr>0&&(0,i.jsx)(v,{$isLeft:!0,$isShown:M,onClick:e=>{e.stopPropagation(),l()},children:(0,i.jsx)(r.Z,{})}),n.curr<t.length-1&&(0,i.jsx)(v,{$isLeft:!1,$isShown:T,onClick:e=>{e.stopPropagation(),x()},children:(0,i.jsx)(o.Z,{})}),(0,i.jsxs)(y,{children:[n.curr+1,"/",t.length," \xa0|\xa0",(0,i.jsx)("span",{onClick:t=>{t.stopPropagation(),e.setisModel(!1)},children:"关闭"})]})]})}let b=a.ZP.div.withConfig({componentId:"sc-74a0f7de-0"})(["position:absolute;will-change:transform;"]),w=a.ZP.img.withConfig({componentId:"sc-74a0f7de-1"})(["display:block;margin:0 auto;&::after{content:attr(alt);}"]),y=a.ZP.div.withConfig({componentId:"sc-74a0f7de-2"})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0.5rem;right:0.5rem;height:2.5rem;border-radius:1.25rem;padding:0 1rem;background:#5b5b5bbd;color:white;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);&:hover{opacity:1;}"]),v=a.ZP.div.withConfig({componentId:"sc-74a0f7de-3"})(["position:fixed;bottom:calc(50vh - 2.5rem);display:flex;justify-content:center;align-items:center;cursor:pointer;width:2.5rem;height:2.5rem;padding:0rem;color:white;opacity:0.5;background:#5b5b5bbd;font-size:1.25rem;border-radius:50%;"," @media screen and (max-width:580px){"," transition:left 0.3s linear,right 0.3s linear;}&:hover{opacity:1;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);}"],e=>e.$isLeft?"left: 1rem;":"right: 1rem;",e=>e.$isLeft?e.$isShown?"left: 1rem;":"left: -2.5rem;":e.$isShown?"right: 1rem;":"right: -2.5rem;"),j=a.ZP.div.withConfig({componentId:"sc-74a0f7de-4"})(["width:100%;height:100%;overflow-x:clip;overflow-y:hidden;position:relative;cursor:default;will-change:transform;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"])},6387:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var i=n(1527),r=n(959);let o="/data/memos",s=async()=>fetch(o+"/status.json").then(e=>e.json()).then(e=>e),a=async(e,t)=>{let n=[Math.floor(e/10),e%10],i=[Math.floor((e+t-1)/10),(e+t-1)%10],r=await s(),a=[];for(let e=n[0];e<=i[0];e++)e>=0&&e<=r.pages&&a.push("".concat(o,"/").concat(e,".json"));let l=a.map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>0===t?i[0]-n[0]!=0?e.slice(n[1]):e.slice(n[1],i[1]+1):t===i[0]?e.slice(0,i[1]+1):e));return(await Promise.all(l)).flat()},l=async(e,t)=>{let n=(await s()).pageMap.filter(n=>{if(n.endDate<e.getTime()||n.startDate>t.getTime())return!1}).map(e=>"".concat(o,"/").concat(e,".json")).map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>e));return(await Promise.all(n)).flat()},c={static:{getMemoInfo:s,queryMemoByCount:a,queryMemoByDate:l,queryMemoTags:async()=>fetch("".concat(o,"/tags.json")).then(e=>e.json()),queryMemoImgs:async()=>[]}};var d=n(5132),h=n(8308),u=n(6152),m=n(2714),g=n(1624),p=n(8574),f=n(2875),x=n(9858),b=n(3952),w=n(1186),y=n(8887);function v(e){var t,n,o;let{imgsmd:s}=e,a=(0,y.useImageBroswerStore)(e=>e),[l,c]=(0,r.useState)(Array(s.length).fill(1).map((e,t)=>({ok:"loading",index:t,src:"",width:1,height:1,alt:""})));return((0,r.useEffect)(()=>{(async function(){let e=s.map(async(e,t)=>{let n;let i=function(e){let t=/!\[(.*?)\]\((.*?)\)/.exec(e);return t?{alt:t[1],url:t[2]}:null}(e);if(!i)return{ok:"failed",index:t,src:"",width:0,height:0,alt:""};let{url:r,alt:o}=i,s=new Image,a=new Promise((e,n)=>{s.onload=()=>e(s),s.onerror=()=>n({ok:"failed",index:t,src:"",width:0,height:0,alt:o}),s.src=r});return(await a.catch(e=>{n=e}),n)?n:{ok:"loaded",index:t,src:r,width:s.width,height:s.height,alt:o}});try{let t=await Promise.all(e);c(t)}catch(e){console.error("Error loading images:",e)}})()},[s,c]),0===s.length)?null:(0,i.jsx)(i.Fragment,{children:1===s.length?(0,i.jsx)("div",{style:{height:"250px",paddingLeft:"40px"},children:(0,i.jsxs)(k,{style:{maxWidth:"100%",height:"100%",aspectRatio:l[0]?l[0].width/l[0].height>2.5?2.5:l[0].width/l[0].height<.75?.75:l[0].width/l[0].height:2},children:[" ",(0,i.jsx)("img",{loading:"lazy",src:(null===(t=l[0])||void 0===t?void 0:t.ok)==="loaded"?null===(n=l[0])||void 0===n?void 0:n.src:"",alt:null===(o=l[0])||void 0===o?void 0:o.ok}),(0,i.jsx)(j,{onClick:e=>{e.stopPropagation(),a.setCurrentIndex(0),a.setImagesData(l),a.setisModel(!0)}})]})}):(0,i.jsx)(C,{children:l.map((e,t)=>(0,i.jsxs)(k,{onTouchEnd:e=>{e.stopPropagation()},children:[" ",(0,i.jsx)("img",{loading:"lazy",src:"loaded"===e.ok?e.src:"",alt:e.ok}),(0,i.jsx)(j,{onClick:e=>{e.stopPropagation(),a.setCurrentIndex(t),a.setImagesData(l),a.setisModel(!0)}})]},t))})})}let j=m.ZP.div.withConfig({componentId:"sc-879915bc-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),k=m.ZP.div.withConfig({componentId:"sc-879915bc-1"})(["border-radius:0.5rem;background:",";position:relative;overflow:hidden;aspect-ratio:1;cursor:zoom-in;user-select:none;-webkit-user-select:none;& img{position:absolute;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;top:0;left:0;}& img:after{content:attr(alt);background:",";color:",";font-weight:bold;display:block;position:absolute;top:0;height:100%;width:100%;text-align:left;padding:1em;word-break:break-all;}"],e=>e.theme.colors.bg2,e=>e.theme.colors.bg2,e=>e.theme.colors.uiLineGray),C=m.ZP.div.withConfig({componentId:"sc-879915bc-2"})(["display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:8px;padding-left:40px;@media screen and (max-width:580px){grid-template-columns:repeat(3,1fr);}"]);function S(e){let{source:t,setSearchText:n,triggerHeightChange:o,...s}=e,[a,l]=(0,r.useState)(!0),c=(0,r.useContext)(m.Ni),d=r.useRef(null),h=t.length>200,u=(0,r.useMemo)(()=>{let e=new Date(t.id);return"Invalid Date"!==e.toString()?(0,g.l0)(e):t.id},[t.id]);return(0,i.jsxs)(I,{...s,$isCollapse:!1!==h&&a,ref:d,children:[(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)(T,{children:[(0,i.jsx)("img",{className:"avatar",src:c.assets.favico,alt:p.d.author}),(0,i.jsxs)("div",{className:"meta-text",children:[(0,i.jsx)("span",{className:"author",children:p.d.author}),(0,i.jsx)("span",{className:"meta-sm date",children:u}),(0,i.jsxs)("span",{className:"meta-sm word-count",children:[t.length,"\xa0字"]})]})]}),(0,i.jsx)(M,{$bottomSpace:h,children:(0,b.n)(t.code,n)}),(0,i.jsx)(Z,{$isCollapse:a,$isShown:h,children:(0,i.jsx)("div",{onClick:function(e){if(!a){let e=d.current;if(e){let t=e.getBoundingClientRect().top;(t<0||t>window.innerHeight)&&globalThis.scrollTo({top:t+globalThis.scrollY})}}l(!a),d.current&&o&&o(!0)},className:"rd-more",children:(0,i.jsx)("span",{children:a?"展开全文":"收起"})})})]}),0!==t.imgsmd.length&&(0,i.jsx)(v,{imgsmd:t.imgsmd})]})}function P(){return(0,i.jsx)(I,{$isCollapse:!1,children:(0,i.jsx)("span",{style:{opacity:.35,fontWeight:"bold"},children:"Loading..."})})}let I=m.ZP.section.withConfig({componentId:"sc-e66acd9f-0"})(["background:",";margin:0.625rem 0;padding:1.25rem 1.5rem;border-radius:0.75rem;animation:"," .3s ease;@media screen and (max-width:580px){padding:1rem;border-radius:unset;}& > .content{position:relative;height:",";overflow:hidden;}"],e=>e.theme.colors.bg,f.r$,e=>!0===e.$isCollapse?"18.2rem":"auto"),Z=m.ZP.div.withConfig({componentId:"sc-e66acd9f-1"})(["display:",";position:absolute;bottom:0;width:100%;height:7rem;text-align:right;color:",";"," .rd-more{font-size:0.875rem;letter-spacing:0.02rem;margin-top:5.5rem;;cursor:pointer;span{transition:box-shadow .3s;margin-right:0.5rem;}}& .rd-more:hover span{","}"],e=>!0===e.$isShown?"block":"none",e=>e.theme.colors.accent,e=>!0===e.$isCollapse?e.theme.colors.maskGradient:"",()=>x.XC.f),M=(0,m.ZP)(w.j).withConfig({componentId:"sc-e66acd9f-2"})(["padding-bottom:",";padding-left:48px;@media screen and (max-width:580px){padding-left:5px;}p,ul,ol{line-height:1.625rem;}p{margin:0.5rem 0;}h1,h2,h3,h4,h5,h6{font-size:1rem;}& .tag{color:",";}& .tag:hover{cursor:pointer;color:",";}"],e=>!0===e.$bottomSpace?"2rem":"inherit",e=>e.theme.colors.accent,e=>e.theme.colors.accentHover),T=m.ZP.div.withConfig({componentId:"sc-e66acd9f-3"})(["display:flex;align-items:center;& .avatar{width:40px;height:40px;margin-right:8px;border-radius:50%;border:1px solid ",";}& .meta-text{display:flex;align-items:flex-start;flex-direction:column;}& .meta-sm{color:",";font-size:0.8rem;}& .author{color:",";margin-right:0.25rem;font-weight:600;}& .date{}& .word-count{position:absolute;right:0;}"],e=>e.theme.colors.uiLineGray,e=>e.theme.colors.textGray,e=>e.theme.colors.textSecondary);var E=n(1913);function N(e){let{Elem:t,index:n,source:o,placeHolder:s,setplaceHolder:a}=e,l=(0,r.useRef)(null),c=(0,r.useCallback)(()=>{if(l.current){let e=l.current.offsetHeight;a(t=>{if(t[n]===e||0===e)return t;let i=[...t];return i[n]=e,i})}},[l,a,n]);(0,r.useEffect)(()=>{let e=(0,E.P)(c,150);return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[l,n,a,c]);let[d,h]=(0,r.useState)(!1);(0,r.useEffect)(()=>{d&&(c(),h(!1))},[d,c]);let[u,m]=(0,r.useState)(!1);(0,r.useEffect)(()=>{c(),m(!0)},[l,c]);let g=(0,r.useMemo)(()=>s.slice(0,n).reduce((e,t)=>e+=t,0),[n,s]);return(0,i.jsx)("div",{ref:l,style:{position:"absolute",width:"100%",transform:"translateY(".concat(g,"px)"),visibility:u?"visible":"hidden"},children:t({source:o,triggerHeightChange:h})})}var z=e=>{let{sources:t,setSources:n,Elem:o,scrollRef:s,fetchFrom:a,batchsize:l,Loading:c}=e,[d,h]=(0,r.useState)(Array(t.length).fill(300)),[u,m]=(0,r.useState)(Array(t.length).fill(0).map((e,t)=>t)),[g,p]=(0,r.useState)(3*t.length),[f,x]=(0,r.useState)(!1),b=(0,r.useRef)({enable:!0}),w=(0,r.useMemo)(()=>d.reduce((e,t)=>e+=t,0),[d]),y=(0,r.useCallback)(e=>{let t=0;for(let n=0;n<e;n++)t+=d[n];return t},[d]);return(0,r.useEffect)(()=>{let e=null==s?void 0:s.current,i=(0,E.P)(()=>{if(!b.current.enable)return;let i=y(u[u.length-1])-y(u[0]),r=(e?e.scrollTop:globalThis.scrollY)-y(u[0]),o=r+globalThis.innerHeight-(e&&e.getBoundingClientRect().y>0?e.getBoundingClientRect().y:0),s=r/i;if(!isNaN(s)&&isFinite(s)&&!(s>1.5)){if(b.current={enable:!1},a&&s<.2){let e=u[0]-l;if(e<0){b.current={enable:!0};return}x(!0),a(e,l).then(e=>{if(x(!1),!e||0===e.length){b.current={enable:!0};return}let i=u.map(e=>e-u.length);e.length>u.length?i=Array(e.length-u.length).fill(0).map((t,n)=>n-e.length+u.length+i[0]).concat(i):e.length<u.length&&(i=i.slice(u.length-e.length,u.length));let r=i.concat(u),o=e.concat(t);r.length>g&&(r.splice(0-i.length,i.length),o.splice(0-i.length,i.length)),m(r),n(o),b.current={enable:!0}})}else if(a&&o/i>.8){let e=u[u.length-1]+1;x(!0),a(e,l).then(e=>{if(x(!1),!e||0===e.length){b.current={enable:!0};return}let i=u.map(e=>e+u.length);if(e.length>u.length){let t=Array(e.length-u.length).fill(0).map((e,t)=>t+i[i.length-1]);i=i.concat(t)}else e.length<u.length&&(i=i.slice(0,e.length));if(i[i.length-1]>d.length-1){let e=Array(i[i.length-1]-d.length+1).fill(300);h(d.concat(e))}let r=u.concat(i),o=t.concat(e);r.length>g&&(r.splice(0,e.length),o.splice(0,e.length)),m(r),n(o),b.current={enable:!0}})}else b.current={enable:!0}}},500);return e?e.addEventListener("scroll",i):globalThis.addEventListener("scroll",i),()=>{e?e.addEventListener("scroll",i):globalThis.removeEventListener("scroll",i)}},[b,s,a,u,n,d,y,t,l,g]),(0,i.jsxs)("div",{style:{position:"relative",width:"100%",minHeight:"".concat(w,"px")},children:[t.map((e,t)=>(0,i.jsx)(N,{index:u[t],Elem:o,source:e,placeHolder:d,setplaceHolder:h},e.id)),c&&f?(0,i.jsx)("div",{style:{position:"absolute",width:"100%",transform:"translateY(".concat(d.slice(0,d.length).reduce((e,t)=>e+=t,0),"px)")},children:(0,i.jsx)(c,{})}):null]})};function L(e){let{postsData:t,postsDataBackup:n,setpostsData:o,setpostsDataBackup:s,client:a,searchStatus:l,resetSearchStatus:m,setTextAndSearch:g}=e,[p,f]=(0,r.useState)((c[a]||console.error("[client.ts] client ".concat(a," not in clientList")),c[a])),x=(0,r.useCallback)(async(e,t)=>p.queryMemoByCount(e,t).then(e=>e.length>0?Promise.all(e.map(async e=>({...e,length:e.content.length,code:(await (0,d.n5)(e.content)).code}))):void 0),[p]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.H,{style:{marginRight:"1rem"},children:function(){switch(l.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,i.jsxs)(i.Fragment,{children:["Results: ",t.length," memos",(0,i.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{m(),o(n)},children:"X"})]})}}()}),(0,i.jsx)("div",{style:{minHeight:"80vh"},children:"ready"===l.isSearch?(0,i.jsx)(z,{sources:t,setSources:o,Elem:e=>(0,i.jsx)(S,{source:e.source,setSearchText:g,triggerHeightChange:e.triggerHeightChange}),fetchFrom:x,batchsize:10,Loading:P},"vl1"):"done"===l.isSearch?(0,i.jsx)(z,{sources:t,setSources:o,Elem:e=>(0,i.jsx)(S,{source:e.source,setSearchText:g,triggerHeightChange:e.triggerHeightChange}),batchsize:10},l.searchText):null}),(0,i.jsx)(h.Z,{style:{marginTop:"5rem"}})]})}},6284:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(1527),r=n(7034);function o(e){let{info:t}=e,[n,o]=(0,r.$G)();return(0,i.jsxs)(s,{children:[(0,i.jsxs)("div",{className:"item active",children:[(0,i.jsx)("span",{className:"title",children:n("memos")}),(0,i.jsx)("span",{className:"count",children:t.memos})]}),(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("span",{className:"title",children:n("photos")}),(0,i.jsx)("span",{className:"count",children:t.imgs})]})]})}let s=n(2714).ZP.section.withConfig({componentId:"sc-ef5d5bff-0"})(["margin-top:1.5rem;padding-left:1rem;color:",";.item{padding:0.25rem 0;margin-right:0.75rem;border-right:2px solid ",";display:flex;align-items:flex-end;}.item.active{border-right:2px solid ",";}.title{font-weight:600;margin-right:0.25rem;}.count{font-size:0.875rem;font-weight:600;color:",";vertical-align:bottom;}"],e=>e.theme.colors.textSecondary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.accent,e=>e.theme.colors.textGray2)},2182:function(e,t,n){"use strict";n.d(t,{IM:function(){return a}});var i=n(3119),r=n.n(i),o=n(2714),s=n(9858);let a=(0,o.ZP)(r()).withConfig({componentId:"sc-6343878f-0"})(["position:relative;&::before{"," height:0;transition:height .3s ease;}&:hover::before{height:0.4rem;}"],s.iG);o.ZP.span.withConfig({componentId:"sc-6343878f-1"})(["position:relative;cursor:pointer;&::before{content:'';position:absolute;left:0;bottom:-3px;width:0;height:2px;background:",";transition:width 1s cubic-bezier(0.34,0.04,0.03,1.4),background .3s;}&:hover::before{width:100%;}"],e=>e.theme.colors.accent),o.ZP.span.withConfig({componentId:"sc-6343878f-2"})(["position:relative;border-bottom:1px solid ",";cursor:pointer;&::before{"," height:0;transition:height .3s ease;}&:hover::before{height:0.4rem;}"],e=>e.theme.colors.accent,s.iG)},5132:function(e,t,n){"use strict";n.d(t,{n5:function(){return d}}),n(959),n(9995),n(1527);var i,r,o=n(6276),s=n(9014),a=n(5709);function l(){return function(e){(0,a.Vn)(e,"paragraph",function(e,t,n){let i=[];e.children.forEach(e=>{if("text"===e.type){let t=e.value,n=function(e){let t=["#","##","###","####","#####","######"],n=[],i="",r=!1;for(let o=0;o<e.length;o++){let s=e[o];"`"===s&&(r=!r)&&(i=""),r||(i.length>0?" "===s||"\n"===s||"\r\n"===s?(t.includes(i)||n.push(i),i=""):i+=s:"#"!==s||0!==o&&" "!==e[o-1]&&"\n"!==e[o-1]||(i+=s))}return i.length>0&&n.push(i),n}(t);if(n.length>0){let e=function(e,t){if(t.includes(e))return[{text:e,isDelimiter:!0}];let n=[{text:e,isDelimiter:!1}];for(let e of t){let t=[];for(let i of n){if(i.isDelimiter){t.push(i);continue}if(""===i.text)continue;let n=i.text.split(e);for(let i=0;i<n.length&&(t.push({text:n[i],isDelimiter:!1}),i!==n.length-1);i++)t.push({text:e,isDelimiter:!0})}n=t}return n.filter(e=>""!==e.text)}(t,n),r="#"+n[n.length-1],o=e[e.length-1].text;o.endsWith(r)&&(e[e.length-1]={text:o.slice(0,o.length-r.length),isDelimiter:!1},e.push({text:r,isDelimiter:!0})),e.forEach(e=>{if(e.isDelimiter){let t={type:"mdxJsxFlowElement",name:"Tag",attributes:[{type:"mdxJsxAttribute",name:"text",value:e.text.slice(1)}]};i.push(t)}else i.push({type:"text",value:e.text})})}else i.push(e)}else i.push(e)}),e.children=i})}}async function c(){return(await Promise.all([n.e(54),n.e(291),n.e(622)]).then(n.bind(n,622))).compile}async function d(e){let t=await c();return{code:String(await t(e,{outputFormat:"function-body",remarkPlugins:[s.Z,l],rehypePlugins:[o.Z]}))}}(i=r||(r={}))[i.Unknown=0]="Unknown",i[i.isImgOnly=1]="isImgOnly",i[i.Other=2]="Other"},6495:function(e,t,n){"use strict";n.a(e,async function(e,i){try{var r=n(959);let e=await n.e(312).then(n.bind(n,1312)).then(e=>e.createNaive);t.Z=function(t){let{inputRef:n,setRes:i,initData:o}=t,[s,a]=(0,r.useState)(),[l,c]=(0,r.useState)({isSearch:"ready",searchText:""}),d=(0,r.useCallback)(async()=>{let t;console.debug("%% init search...");let{searchObj:n,filterRes:r}=await o();return t=e({data:n,field:["tags","content"],notifier:function(e){let t=r(e);Promise.all(t).then(e=>{i(e),c(e=>({...e,isSearch:"done"}))})},disableStreamNotify:!0}),a(t),c(e=>({...e})),t},[o,i]),h=(0,r.useCallback)(async()=>{if(!n.current)return;let e=n.current.value.trim();if(0===e.length)return;c(t=>({...t,isSearch:"searching",searchText:e})),globalThis.scrollTo({top:0});let t=s;t||(t=await d()),t.search(e.split(" "))},[d,s,n]),u=(0,r.useCallback)(function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];n.current&&(n.current.value=e,t&&h())},[h,n]),m=(0,r.useCallback)(()=>{c(()=>({isSearch:"ready",searchText:""}))},[]);return{searchStatus:l,resetSearchStatus:m,setTextAndSearch:u,search:h,initSearch:d}},i()}catch(e){i(e)}},1)},6333:function(e,t,n){"use strict";n.a(e,async function(e,i){try{n.r(t),n.d(t,{MemoCSRAPI:function(){return A},__N_SSG:function(){return L},default:function(){return D}});var r=n(1527),o=n(329),s=n(164),a=n(6752),l=n(6746),c=n(7202),d=n(4951),h=n(1978),u=n.n(h),m=n(8325),g=n.n(m),p=n(959),f=n(7034),x=n(2714),b=n(3658),w=n(3886),y=n(9156),v=n(7234),j=n(4198),k=n(5420),C=n(8887),S=n(6387),P=n(6284),I=n(2182),Z=n(5132),M=n(7642),T=n(6495),E=n(8574),N=n(9858),z=e([T]);T=(z.then?(await z)():z)[0];let $=u()(()=>Promise.resolve().then(n.bind(n,8887)),{loadableGenerated:{webpack:()=>[8887]}});var L=!0;let A="/data/memos";function D(e){let{source:t,info:n,memotags:i,client:h}=e,u=(0,p.useContext)(x.Ni),[m,N]=(0,p.useState)(!1),[z,L]=(0,f.$G)(),D=(0,C.useImageBroswerStore)(e=>e.isModel),[F,B]=(0,p.useState)(t),[Y,O]=(0,p.useState)(t),W=(0,p.useRef)(null),{searchStatus:X,resetSearchStatus:U,setTextAndSearch:q,search:J,initSearch:V}=(0,T.Z)({inputRef:W,setRes:B,initData:async()=>{let e=Array.from({length:n.pages+1},(e,t)=>"".concat(A,"/").concat(t,".json")).map(e=>fetch(e).then(e=>e.json())),t=(await Promise.all(e)).flatMap(e=>e);return{searchObj:t.map(e=>({id:e.id,title:"",content:e.content,tags:e.tags})),filterRes:e=>{let n=e.map(e=>e.id);return t.filter(e=>!!n.includes(e.id)).map(async e=>({...e,code:(await (0,Z.n5)(e.content)).code,length:e.content.length}))}}}}),K=(0,p.useCallback)(()=>{if(W.current&&""===W.current.value){B(Y),U();return}J()},[J,Y,U]);return(0,M.I)("keydown",e=>{W.current&&W.current===document.activeElement&&"Enter"===e.key&&K()},void 0,[J]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g(),{children:[(0,r.jsx)("title",{children:"".concat(E.d.author," - Memos")}),(0,r.jsx)(b.CommonHead,{})]}),(0,r.jsx)(y.Z,{placeHolder:!1,hideSearch:!0}),(0,r.jsxs)("main",{style:{background:null==u?void 0:u.colors.bg2},children:[(0,r.jsxs)(G,{children:[(0,r.jsx)(w.Z,{className:"button-float",Icon:o.Z,clickHandler:e=>N(e=>!e)}),(0,r.jsxs)(v.Uq,{sep:1,siderLocation:"right",children:[(0,r.jsx)(H,{children:(0,r.jsx)(S.Z,{postsData:F,postsDataBackup:Y,setpostsData:B,setpostsDataBackup:O,client:h,searchStatus:X,resetSearchStatus:U,setTextAndSearch:q})}),(0,r.jsxs)(R,{$isMobileSider:m,children:[(0,r.jsxs)("div",{className:"close-btn",onClick:e=>{e.stopPropagation(),N(e=>!e)},children:["小小の菜单",(0,r.jsx)(s.Z,{size:"1.25em",style:{marginLeft:".5rem"}})]}),(0,r.jsxs)(_,{children:[(0,r.jsx)("input",{type:"text",placeholder:z("search"),ref:W,onFocus:()=>{V()}}),(0,r.jsx)(a.Z,{className:"hover-gold",size:"1.4rem",onClick:K})]}),(0,r.jsx)(P.Z,{info:n}),(0,r.jsx)(j.Z,{Icon:l.Z,title:z("tags"),children:i.map(e=>(0,r.jsxs)("span",{className:"hover-gold",style:{display:"inline-block",paddingRight:"0.75em"},onClick:()=>{q("#"+e.name)},children:[(0,r.jsx)(c.Z,{size:"1rem",style:{opacity:.5,paddingRight:"1px"}}),"".concat(e.name),e.memoIds.length>1?(0,r.jsxs)("span",{style:{opacity:.5},children:["(",e.memoIds.length,")"]}):""]},e.name))}),E.d.friends&&(0,r.jsx)(j.Z,{title:z("friends"),Icon:d.Z,children:E.d.friends.map((e,t)=>(0,r.jsx)("div",{children:(0,r.jsx)(I.IM,{href:e.link,children:e.name})},t))}),E.d.walineApi&&""!==E.d.walineApi&&(0,r.jsx)(k.Z,{})]})]})]}),D&&(0,r.jsx)($,{})]})]})}let G=x.ZP.div.withConfig({componentId:"sc-ec28849d-0"})(["max-width:1080px;margin:0 auto;.button-float{display:none;}@media screen and (max-width:780px){max-width:100%;.button-float{display:unset;}}@media screen and (max-width:580px){}"]),H=x.ZP.div.withConfig({componentId:"sc-ec28849d-1"})(["width:100%;padding:73px 16px 48px 16px;align-self:flex-end;&::-webkit-scrollbar{display:none;}@media screen and (min-width:1080px){max-width:640px;}@media screen and (max-width:780px){width:100%;}@media screen and (max-width:580px){padding-left:0;padding-right:0;}"]),R=x.ZP.div.withConfig({componentId:"sc-ec28849d-2"})(["position:sticky;max-width:15rem;padding-top:83px;padding-bottom:64px;margin:0 0.5rem;height:100vh;overflow-y:auto;&::-webkit-scrollbar{display:none;}.close-btn{display:none;z-index:1;}@media screen and (max-width:1080px){margin:0;}@media screen and (max-width:780px){"," position:fixed;bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;max-width:unset;width:96%;right:2%;height:66vh;padding:0rem 1rem 1rem 1rem;transition:transform .3s ease;transform:",";.close-btn{position:sticky;top:0;background:inherit;display:flex;font-weight:600;justify-content:space-between;align-items:center;padding:1rem 0;"," color:",";font-size:1rem;cursor:pointer;}.close-btn:hover{color:",";}}.hover-gold{cursor:pointer;}.hover-gold:hover{color:",";}"],N.Cz,e=>e.$isMobileSider?"translateY(0)":"translateY(105%)",e=>e.$isMobileSider?null:"visibility:hidden;",e=>e.theme.colors.textGray2,e=>e.theme.colors.accent,e=>e.theme.colors.accent),_=x.ZP.div.withConfig({componentId:"sc-ec28849d-3"})(["border-radius:0.75rem;background:",";color:",";display:flex;align-items:center;margin:0 0.5rem;border:1px solid ",";&:focus-within{border:1px solid ",";}input{border:none;background:inherit;line-height:2rem;color:inherit;flex:1 1 auto;width:0;margin-left:1rem;}input:focus,input:focus-visible{outline:none;}input::placeholder{color:",";}svg{margin:0 auto;flex:0  0 auto;margin:0 0.6rem 0 0.5rem;color:",";}"],e=>e.theme.colors.bg,e=>e.theme.colors.textGray,e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.accentHover,e=>e.theme.colors.textGray3,e=>e.theme.colors.uiLineGray);i()}catch(e){i(e)}})}},function(e){e.O(0,[774,314,992,234,425,888,179],function(){return e(e.s=6377)}),_N_E=e.O()}]);