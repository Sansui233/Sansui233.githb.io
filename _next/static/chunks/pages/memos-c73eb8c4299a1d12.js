(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{83:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return t(4051)}])},2330:function(e,n,t){"use strict";t.d(n,{Z:function(){return Model}});var o=t(1262),r=t(1527),i=t(959),l=t(8598),a=t(7681);function _templateObject(){let e=(0,o._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background: #000000de;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n"]);return _templateObject=function(){return e},e}function Model(e){let{isModel:n,setModel:t,scrollRef:o,style:l,...c}=e,m=(0,a.aA)(),d=(0,i.useMemo)(()=>l?{...l,height:m+"px"}:{height:m+"px"},[l,m]);return(0,i.useEffect)(()=>(n?o?o.style.overflow="hidden":document.body.style.overflow="hidden":o?o.style.overflow="auto":document.body.style.overflow="auto",()=>{o?o.style.overflow="auto":document.body.style.overflow="auto"}),[n,o]),n?(0,r.jsx)(s,{...c,$isOpen:n,onClick:e=>{e.stopPropagation(),t(!1)},style:d}):void 0}let s=l.ZP.div.withConfig({componentId:"sc-4632bb8e-0"})(_templateObject())},5468:function(e,n,t){"use strict";t.d(n,{H:function(){return i}});var o=t(1262),r=t(8598);function _templateObject(){let e=(0,o._)(["\n  font-style: italic;\n  font-size: 0.875rem;\n  color: ",";\n  text-align: right;\n"]);return _templateObject=function(){return e},e}let i=r.ZP.div.withConfig({componentId:"sc-47295c3a-0"})(_templateObject(),e=>e.theme.colors.textGray2)},3442:function(e,n,t){"use strict";var o=t(1262),r=t(1527),i=t(75);t(5439);var l=t(959),a=t(8598),s=t(8476);function _templateObject(){let e=(0,o._)(["\n\n  margin: 0 auto;\n\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    @media screen and (max-width: 580px) {\n      .wl-gallery-column {\n        display: grid !important;\n        grid-template-columns: 1fr 1fr 1fr;\n        max-height: 200px;\n      }\n    }\n    img {\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"]);return _templateObject=function(){return e},e}let c=a.ZP.div.withConfig({componentId:"sc-26bc692-0"})(_templateObject(),e=>e.theme.colors.bgInverse,e=>e.theme.colors.bg,e=>e.theme.colors.textGray,e=>e.theme.colors.gold,e=>e.theme.colors.bgInverse,e=>e.theme.colors.bg,e=>e.theme.colors.bg,e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary);n.Z=e=>((0,l.useEffect)(()=>{(0,i.S1)({el:"#waline",serverURL:s.d.walineApi?s.d.walineApi:"",path:window.location.pathname,pageview:!0,comment:!0})},[]),s.d.walineApi&&""!==s.d.walineApi)?(0,r.jsx)(c,{id:"waline",...e,children:"Waline"}):(0,r.jsx)(r.Fragment,{})},1499:function(e,n,t){"use strict";t.d(n,{n:function(){return useMdxMemo},g:function(){return useMdxPost}});var o=t(1527),r=t.t(o,2),i=t(8255),l=t(959),a=t(2330);function ImgModel(e){let{imgProps:n,isModel:t,setModel:r}=e;return(0,o.jsxs)(a.Z,{isModel:t,setModel:r,children:[" ",(0,o.jsx)("img",{loading:"lazy",...n,style:{maxWidth:"100%",maxHeight:"100%",display:"block"}})," "]})}function MDImg(e){let[n,t]=(0,l.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ImgModel,{imgProps:e,isModel:n,setModel:t}),(0,o.jsx)("img",{loading:"lazy",onClick:()=>t(!0),style:{cursor:"zoom-in"},...e})]})}function memoTag(e){return function(n){let{text:t}=n;return(0,o.jsxs)("span",{className:"tag",onClick:()=>{e&&e("#".concat(t),!0)},children:["#",t," "]})}}function convertBack(e){let n={Fragment:l.Fragment,...r,baseUrl:"file:///C:/Users/lingn/git/blog/components/mdx.tsx"},t=(0,i.W)(e,n);return t}function useMdxPost(e){let n=convertBack(e);return(0,o.jsx)(n.default,{components:{img:MDImg}})}function useMdxMemo(e,n){let t=convertBack(e);return(0,o.jsx)(t.default,{components:{Tag:memoTag(n)}})}},7681:function(e,n,t){"use strict";t.d(n,{aA:function(){return useViewHeight}});var o=t(959),r=t(4268);function useViewHeight(){(0,o.useContext)(r.L);let[e,n]=(0,o.useState)(globalThis.innerHeight);return(0,o.useEffect)(()=>{let setvhOnResize=()=>{n(globalThis.innerHeight)};return globalThis.addEventListener("resize",setvhOnResize),()=>{globalThis.removeEventListener("resize",setvhOnResize)}},[]),e}},4051:function(e,n,t){"use strict";t.r(n),t.d(n,{MemoModelCtx:function(){return q},__N_SSG:function(){return X},default:function(){return Memos}});var o=t(1262),r=t(1527),i=t(3522),l=t.n(i),a=t(959),s=t(8598),c=t(7108),m=t(7841),d=t(5468),u=t(8743),h=t(3797);function _templateObject(){let e=(0,o._)(["\n  margin-top: 1rem;\n  padding: 1rem 1rem;\n  position: relative;\n  color:",";\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,o._)(["\n  font-size: 0.9rem;\n  font-weight: bold;\n  color: ",";\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,o._)(["\n  display: inline-block;\n  text-align: right;\n  font-size: 1.125rem;\n  color: ",";\n"]);return _templateObject2=function(){return e},e}function CardCommon(e){let{title:n,children:t,...o}=e;return(0,r.jsxs)(p,{...o,children:[n?(0,r.jsx)(g,{children:n}):null,t]})}let p=s.ZP.section.withConfig({componentId:"sc-1f4cccb4-0"})(_templateObject(),e=>e.theme.colors.textPrimary),g=s.ZP.div.withConfig({componentId:"sc-1f4cccb4-1"})(_templateObject1(),e=>e.theme.colors.textGray2),f=s.ZP.span.withConfig({componentId:"sc-1f4cccb4-2"})(_templateObject2(),e=>e.theme.colors.textGray2);var b=t(8476),x=t(8957),j=t(2330),w=t(3442);function commentcard_templateObject(){let e=(0,o._)(["\n  font-size: 0.9rem;\n  \n  li {\n    list-style: none;\n    margin: 0.5rem 0;\n    padding-left: 0.25rem;\n    height: 1.5em;\n    overflow: hidden;\n  }\n"]);return commentcard_templateObject=function(){return e},e}function commentcard_templateObject1(){let e=(0,o._)(["\n  display: inline-block;\n  margin-top: 2rem;\n  padding-right: 0.5rem;\n  font-weight: bold;\n  color:",";\n  transition: color 0.5s ease;\n\n  &:hover {\n    color:",";\n  }\n"]);return commentcard_templateObject1=function(){return e},e}function commentcard_templateObject2(){let e=(0,o._)(["\n  height:100%;\n  width:100%;\n  padding-top:64px;\n  overflow-y: auto;\n\n  &>div{\n    max-width: min(90%, 640px);\n  }\n"]);return commentcard_templateObject2=function(){return e},e}function CommentCard(){let e=(0,a.useContext)(s.Ni),[n,t]=(0,a.useState)([]),[o,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=encodeURIComponent(globalThis.location.pathname);fetch(b.d.walineApi+"/comment?path="+e+"&pageSize=10&page=1&lang=en-US&sortBy=insertedAt_desc").then(e=>e.json()).then(e=>{t(e.data)})},[]),(0,r.jsxs)(r.Fragment,{children:[o?(0,r.jsx)(j.Z,{isModel:o,setModel:i,style:{background:null==e?void 0:e.colors.bgMask},children:(0,r.jsx)(_,{children:(0,r.jsx)(w.Z,{})})}):null,(0,r.jsxs)(CardCommon,{title:"COMMENTS",children:[(0,r.jsx)(v,{children:n.map(e=>(0,r.jsx)("li",{children:e.comment.replace(/<[^>]*>/g,"")},e.objectId))}),(0,r.jsx)(y,{children:(0,r.jsx)(x.w2,{onClick:()=>i(!0),children:"给我留言"})})]})]})}let v=s.ZP.div.withConfig({componentId:"sc-98e1d067-0"})(commentcard_templateObject()),y=s.ZP.span.withConfig({componentId:"sc-98e1d067-1"})(commentcard_templateObject1(),e=>e.theme.colors.textGray2,e=>e.theme.colors.textPrimary),_=s.ZP.div.withConfig({componentId:"sc-98e1d067-2"})(commentcard_templateObject2());var k=t(3318),O=t(5497),C=t(3433),M=t(1499),P=t(1702);function useDocumentEvent(e,n,t,o){(0,a.useEffect)(()=>(document.addEventListener(e,n,t),()=>{document.removeEventListener(e,n,t)}),[e,n,t,...o||[]])}var S=t(7681);function imagebrowser_templateObject(){let e=(0,o._)(["\n  animation: "," 0.7s ease;\n  transform: translate3d(0,0,0);\n"]);return imagebrowser_templateObject=function(){return e},e}function imagebrowser_templateObject1(){let e=(0,o._)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0.5rem;\n  right: 0.5rem;\n\n  height: 2.5rem;\n  border-radius: 1.25rem;\n  padding: 0 1rem;\n  background: #5b5b5bbd;\n  color: white;\n  backdrop-filter: blur(5px);\n\n  &:hover{\n    opacity: 1;\n  }\n"]);return imagebrowser_templateObject1=function(){return e},e}function imagebrowser_templateObject2(){let e=(0,o._)(["\n  \n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0rem;\n  color: white;\n  opacity: 0.5;\n  background: #5b5b5bbd;\n  font-size: 1.25rem;\n  border-radius: 50%;\n  ","\n\n  @media screen and (max-width: 580px) {\n    ","\n    transition: left 0.3s linear, right 0.3s linear;\n  }\n\n  &:hover{\n    opacity: 1;\n    backdrop-filter: blur(5px);\n  }\n"]);return imagebrowser_templateObject2=function(){return e},e}function _templateObject3(){let e=(0,o._)(["\n  width: 100%;\n  max-height: 100%;\n  overflow-y: auto;\n  cursor: default;\n\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;	\n  \n  & img {\n    display: block;\n    margin: 0 auto;\n  }\n\n  & img::after{\n    content: attr(alt);\n  }\n"]);return _templateObject3=function(){return e},e}function ImageBrowser(e){let{imagesData:n,currentIndex:t}=e,o=(0,a.useContext)(q),[i,l]=(0,a.useState)({curr:t,last:t}),s=(0,a.useRef)(null);i.curr>n.length-1&&console.error("uncaught ivalid image index:",i,"in length",n.length);let c=(0,a.useMemo)(()=>i.curr<n.length?n[i.curr].width/n[i.curr].height:1,[n,i]),m=(0,S.aA)(),d=(0,a.useCallback)(()=>{i.curr>0&&(l({curr:i.curr-1,last:i.curr}),s.current&&s.current.scrollTo({top:0}))},[i,l,s]),u=(0,a.useCallback)(()=>{i.curr<n.length-1&&(l({curr:i.curr+1,last:i.curr}),s.current&&s.current.scrollTo({top:0}))},[i,l,s,n.length]),h=(0,a.useCallback)(e=>{if("ArrowLeft"===e.key)d();else if("ArrowRight"===e.key)u();else if("ArrowDown"===e.key){if(s.current){let e=s.current.scrollTop+400;s.current.scrollTo({top:e>s.current.scrollHeight?s.current.scrollHeight:e,behavior:"smooth"})}}else if("ArrowUp"===e.key&&s.current){let e=s.current.scrollTop-400;s.current.scrollTo({top:e<0?0:e,behavior:"smooth"})}},[s,u,d]);useDocumentEvent("keydown",h);let[p,g]=(0,a.useState)(!1),[f,b]=(0,a.useState)([0,0,0]),[x,w]=(0,a.useState)(Date.now()),[v,y]=(0,a.useState)([0,0]),[_,k]=(0,a.useState)(0),[O,C]=(0,a.useState)(!1),M=(0,a.useCallback)(e=>{e.stopPropagation(),g(!0),w(Date.now()),b([e.touches[0].clientX,e.touches[0].clientY,s.current?s.current.scrollTop:0]),C(!1)},[]),E=(0,a.useCallback)(e=>{if(e.stopPropagation(),p){let n=e.touches[0].clientX-f[0],t=e.touches[0].clientY-f[1],o=s.current?s.current.scrollTop-f[2]:0;0!==_?y("x"===_?[n,0]:"y"===_?[0,t]:[0,o]):(Math.abs(n)>20||Math.abs(t)>20||Math.abs(o)>20)&&(k(Math.abs(n)>Math.abs(t)&&Math.abs(n)>Math.abs(o)?"x":Math.abs(t)>Math.abs(o)?"y":"scrolly"),y(Math.abs(n)>Math.abs(t)&&Math.abs(n)>Math.abs(o)?[n,0]:t>Math.abs(o)?[0,t]:[0,o]))}},[f,_,p]),z=(0,a.useCallback)(e=>{e.stopPropagation(),console.debug("%% touch up"),Date.now()-x<200&&5>Math.abs(v[0])&&5>Math.abs(v[1])?(C(!0),setTimeout(()=>{o.setIsModel(!1)},300)):"x"===_&&(v[0]<-60?u():v[0]>60&&d()),g(!1),b([0,0,0]),y([0,0]),k(0)},[v,u,d,_,x,o]),$=(0,a.useMemo)(()=>"x"===_&&v[0]>60,[v,_]),D=(0,a.useMemo)(()=>"x"===_&&v[0]<-60,[v,_]),H=(0,a.useMemo)(()=>Object.assign("x"===_?{overflowY:"hidden",transition:"transform 0.016s linear",transform:"translate3d(".concat(v[0],"px, 0px, 0px)"),opacity:Math.max(200-Math.abs(v[0]),0)/200}:{}),[v,_]),A=(0,a.useMemo)(()=>O?{opacity:0,transition:"opacity 0.3s ease"}:{},[O]),L=Object.assign(c>=2?{maxWidth:"100%",maxHeight:.9*m+"px"}:c>.6?{maxWidth:"100%",maxHeight:m+"px"}:{maxWidth:"95%"});return o.isModel?(0,r.jsxs)(j.Z,{isModel:!0,setModel:o.setIsModel,style:{...A,background:"#1d1d1d"},children:[(0,r.jsx)(N,{ref:s,onTouchStart:M,onTouchMove:(0,P.P)(E,16),onTouchEnd:z,onClick:e=>e.stopPropagation(),style:H,children:(0,r.jsx)(I,{src:"loaded"===n[i.curr].ok?n[i.curr].src:"",alt:n[i.curr].ok,style:L,$entranceDirection:i.curr===i.last?0:i.curr>i.last?1:-1})}),i.curr>0?(0,r.jsx)(Z,{$isLeft:!0,$isShown:$,onClick:e=>{e.stopPropagation(),d()},children:(0,r.jsx)("i",{className:"icon-arrow-left2"})}):null,i.curr<n.length-1?(0,r.jsx)(Z,{$isLeft:!1,$isShown:D,onClick:e=>{e.stopPropagation(),u()},children:(0,r.jsx)("i",{className:"icon-arrow-right2"})}):null,(0,r.jsxs)(T,{children:[i.curr+1,"/",n.length," \xa0|\xa0",(0,r.jsx)("span",{onClick:e=>{e.stopPropagation(),o.setIsModel(!1)},children:"关闭"})]})]}):void 0}let I=s.ZP.img.withConfig({componentId:"sc-74348ba4-0"})(imagebrowser_templateObject(),e=>0===e.$entranceDirection?k.Ji:1===e.$entranceDirection?k.$k:k.x$),T=s.ZP.div.withConfig({componentId:"sc-74348ba4-1"})(imagebrowser_templateObject1()),Z=s.ZP.div.withConfig({componentId:"sc-74348ba4-2"})(imagebrowser_templateObject2(),e=>e.$isLeft?"left: 1rem;":"right: 1rem;",e=>e.$isLeft?e.$isShown?"left: 1rem;":"left: -2.5rem;":e.$isShown?"right: 1rem;":"right: -2.5rem;"),N=s.ZP.div.withConfig({componentId:"sc-74348ba4-3"})(_templateObject3());function imagesthumb_templateObject(){let e=(0,o._)(["\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  height: 100%;\n"]);return imagesthumb_templateObject=function(){return e},e}function imagesthumb_templateObject1(){let e=(0,o._)(["\n  border-radius: 0.5rem;\n  background: ",";\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 1;\n  cursor: zoom-in;\n  \n  user-select:none;\n  -webkit-user-select:none;\n\n  & img {\n    position: absolute;\n    -o-object-fit: cover;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & img:after {\n    content: attr(alt);\n    background: ",";\n    color: ",";\n    font-weight: bold;\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    text-align: left;\n    padding: 1em;\n    word-break: break-all;\n  }\n"]);return imagesthumb_templateObject1=function(){return e},e}function imagesthumb_templateObject2(){let e=(0,o._)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n\n  @media screen and (max-width: 580px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n"]);return imagesthumb_templateObject2=function(){return e},e}function parseMarkdownImage(e){let n=/!\[(.*?)\]\((.*?)\)/.exec(e);if(!n)return null;{let e=n[1],t=n[2];return{alt:e,url:t}}}function Images(e){var n,t,o;let{imgsmd:i}=e,[l,s]=(0,a.useState)(!1),[c,m]=(0,a.useState)(0),[d,u]=(0,a.useState)(Array(i.length).fill(1).map((e,n)=>({ok:"loading",index:n,src:"",width:0,height:0,alt:""})));return((0,a.useEffect)(()=>{(async function(){let e=i.map(async(e,n)=>{let t;let o=parseMarkdownImage(e);if(!o)return{ok:"failed",index:n,src:"",width:0,height:0,alt:""};let{url:r,alt:i}=o,l=new Image,a=new Promise((e,t)=>{l.onload=()=>e(l),l.onerror=()=>t({ok:"failed",index:n,src:"",width:0,height:0,alt:i}),l.src=r});return(await a.catch(e=>{t=e}),t)?t:{ok:"loaded",index:n,src:r,width:l.width,height:l.height,alt:i}});try{let n=await Promise.all(e);u(n)}catch(e){console.error("Error loading images:",e)}})()},[i]),0===i.length)?null:(0,r.jsxs)(q.Provider,{value:{isModel:l,setIsModel:s},children:[l?(0,r.jsx)(ImageBrowser,{imagesData:d,currentIndex:c}):void 0,1===i.length?(0,r.jsxs)(z,{style:{maxWidth:"100%",maxHeight:"326px",aspectRatio:d[0]?d[0].width/d[0].height>2?2:d[0].width/d[0].height<.75?.75:d[0].width/d[0].height:2},children:[" ",(0,r.jsx)("img",{loading:"lazy",src:(null===(n=d[0])||void 0===n?void 0:n.ok)==="loaded"?null===(t=d[0])||void 0===t?void 0:t.src:"",alt:null===(o=d[0])||void 0===o?void 0:o.ok}),(0,r.jsx)(E,{onClick:e=>{e.stopPropagation(),console.debug("%%% grid pressed"),m(0),s(!1)}})]}):(0,r.jsx)($,{children:d.map((e,n)=>(0,r.jsxs)(z,{onTouchEnd:e=>{e.stopPropagation()},children:[" ",(0,r.jsx)("img",{loading:"lazy",src:"loaded"===e.ok?e.src:"",alt:e.ok}),(0,r.jsx)(E,{onClick:e=>{e.stopPropagation(),console.debug("%%% grid pressed"),m(n),s(!0)}})]},n))})]})}let E=s.ZP.div.withConfig({componentId:"sc-710e1a31-0"})(imagesthumb_templateObject()),z=s.ZP.div.withConfig({componentId:"sc-710e1a31-1"})(imagesthumb_templateObject1(),e=>e.theme.colors.bg2,e=>e.theme.colors.bg2,e=>e.theme.colors.uiLineGray),$=s.ZP.div.withConfig({componentId:"sc-710e1a31-2"})(imagesthumb_templateObject2());function memocard_templateObject(){let e=(0,o._)(["\n\n  background:",";\n  margin: 1rem 0;\n  padding: 1.25rem 1.5rem;\n  border-radius: 1rem;\n  animation: "," 1s ease;\n\n  @media screen and (max-width: 780px) {\n    padding: 1.25rem 1.5rem;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 1.25rem 1rem;\n    border-radius: unset;\n  }\n  \n  & > .content {\n    position: relative;\n    height: ",";\n    overflow: hidden;\n    /* transition: height 0.5s ease; */\n  }\n"]);return memocard_templateObject=function(){return e},e}function memocard_templateObject1(){let e=(0,o._)(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    text-align: right;\n    \n    color: ",";\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      letter-spacing: 0.02rem;\n      padding: 0.2rem 0;\n      cursor: pointer;\n      span {\n        transition: box-shadow .3s;\n      }\n    }\n\n    & .rd-more:hover span {\n      ","\n    }\n   \n"]);return memocard_templateObject1=function(){return e},e}function memocard_templateObject2(){let e=(0,o._)(["\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-bottom: ",";\n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n\n    & .tag {\n      color: ",";\n    }\n\n    & .tag:hover {\n      cursor: pointer;\n      color: ",";\n    }\n"]);return memocard_templateObject2=function(){return e},e}function memocard_templateObject3(){let e=(0,o._)(["\n    display: flex;\n\n    & > .avatar {\n      width: 3rem;\n      height: 3rem;\n      border-radius: 50%;\n      border: 1px solid ",";\n    }\n\n    & .meta{\n      margin-left: 0.5rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    & .date {\n      font-size: 0.85rem;\n      color: ",";\n    }\n\n    & .word-count {\n      position: absolute;\n      right: 0;\n    }\n"]);return memocard_templateObject3=function(){return e},e}function MemoCard(e){let{memoPost:n,setSearchText:t}=e,[o,i]=(0,a.useState)(!0),l=(0,a.useContext)(s.Ni),c=a.useRef(null),m=n.length>200;function handleExpand(e){if(!o){let e=c.current;if(e){let n=e.getBoundingClientRect().top;(n<0||n>window.innerHeight)&&globalThis.scrollTo({top:n+globalThis.scrollY})}}i(!o)}return(0,r.jsxs)(D,{$isCollapse:!1!==m&&o,ref:c,children:[(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)(L,{children:[(0,r.jsx)("img",{className:"avatar",src:l.assets.favico,alt:b.d.author}),(0,r.jsxs)("div",{className:"meta",children:[(0,r.jsx)("div",{children:b.d.author}),(0,r.jsxs)("div",{className:"date",children:[n.id,"\xa0\xa0",(0,r.jsxs)("span",{className:"word-count",children:[n.length,"\xa0字"]})]})]})]}),(0,r.jsx)(A,{$bottomSpace:m,children:(0,M.n)(n.content,t)}),(0,r.jsx)(H,{$isCollapse:o,$isShown:m,children:(0,r.jsx)("div",{onClick:handleExpand,className:"rd-more",children:(0,r.jsx)("span",{children:o?"SHOW MORE":"Hide"})})})]}),(0,r.jsx)("div",{style:{padding:"0 0.5rem"},children:(0,r.jsx)(Images,{imgsmd:n.imgsmd})})]})}let D=s.ZP.section.withConfig({componentId:"sc-6fd9d6ab-0"})(memocard_templateObject(),e=>e.theme.colors.bg,k.r$,e=>!0===e.$isCollapse?"19rem":"auto"),H=s.ZP.div.withConfig({componentId:"sc-6fd9d6ab-1"})(memocard_templateObject1(),e=>!0===e.$isShown?"block":"none",e=>e.theme.colors.gold,e=>!0===e.$isCollapse?e.theme.colors.maskGradient:"",()=>C.XC.f),A=(0,s.ZP)(O.j).withConfig({componentId:"sc-6fd9d6ab-2"})(memocard_templateObject2(),e=>!0===e.$bottomSpace?"2rem":"inherit",e=>e.theme.colors.gold,e=>e.theme.colors.goldHover),L=s.ZP.div.withConfig({componentId:"sc-6fd9d6ab-3"})(memocard_templateObject3(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.textGray);function navcard_templateObject(){let e=(0,o._)(["\n  margin-top: 1.5rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  color:",";\n\n  .item {\n    padding: 0.25rem 0;\n    margin-right: 0.75rem;\n    border-right: 2px solid ",";\n  }\n\n  .item.active {\n    border-right: 2px solid ",";\n  }\n\n  .title {\n    font-weight: bold;\n    margin-right: 0.25rem;\n  }\n\n  .count {\n    font-size: 0.875rem;\n    color: ",";\n  }\n"]);return navcard_templateObject=function(){return e},e}function NavCard(e){let{info:n}=e;return(0,r.jsxs)(R,{children:[(0,r.jsxs)("div",{className:"item active",children:[(0,r.jsx)("span",{className:"title",children:"Memos"}),(0,r.jsx)("span",{className:"count",children:n.memos})]}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("span",{className:"title",children:"Photos"}),(0,r.jsx)("span",{className:"count",children:n.imgs})]})]})}let R=s.ZP.section.withConfig({componentId:"sc-26ed5756-0"})(navcard_templateObject(),e=>e.theme.colors.textPrimary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.gold,e=>e.theme.colors.textGray);var G=t(6336);t(9995);var F=t(6276),B=t(3535),W=t(5709);function remarkTag(){return function(e){(0,W.Vn)(e,function(e,n,t){if("paragraph"===e.type){let n=[];e.children.forEach(e=>{if("text"===e.type){let t=e.value,o=extractTags(t),r=o.map(e=>"#"+e+" ");if(o.length>0){let e=flatsplit(t,r),i="#"+o[o.length-1],l=e[e.length-1].text;l.endsWith(i)&&(e[e.length-1]={text:l.slice(0,l.length-i.length),isDelimiter:!1},e.push({text:i,isDelimiter:!0})),e.forEach(e=>{if(e.isDelimiter){let t={type:"mdxJsxFlowElement",name:"Tag",attributes:[{type:"mdxJsxAttribute",name:"text",value:e.text.slice(1)}]};n.push(t)}else n.push({type:"text",value:e.text})})}else n.push(e)}else n.push(e)}),e.children=n}})}}function flatsplit(e,n){let t=[{text:e,isDelimiter:!1}];for(let e of n){let n=[];for(let o of t){if(o.isDelimiter){n.push(o);continue}let t=o.text.split(e);for(let o=0;o<t.length&&(n.push({text:t[o],isDelimiter:!1}),o!==t.length-1||""===t[o]);o++)n.push({text:e,isDelimiter:!0})}t=n}return t.filter(e=>""!==e.text)}function extractTags(e){let n;let t=/#([^\s#]+)(?![^\[]*\])/g,o=[];for(;null!==(n=t.exec(e));){let e=n[1];e.length<=14&&o.push(e)}return o}async function compileMdxMemo(e){let n=String(await (0,G.D)(e,{outputFormat:"function-body",remarkPlugins:[B.Z,remarkTag],rehypePlugins:[F.Z]}));return{code:n}}var U=t(8029);function memos_templateObject(){let e=(0,o._)(["\n  max-width: 1080px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 780px) {\n    max-width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n  }\n"]);return memos_templateObject=function(){return e},e}function memos_templateObject1(){let e=(0,o._)(["\n  max-width: 650px;\n  padding: 86px 16px 48px 16px;\n  align-self: flex-end;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 1080px) {\n    max-width: 700px;\n  }\n\n\n  @media screen and (max-width: 780px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 86px 0 48px 0;\n  }\n"]);return memos_templateObject1=function(){return e},e}function memos_templateObject2(){let e=(0,o._)(["\n  max-width: 15rem;\n  padding-top: 100px;\n  padding-bottom: 64px;\n  margin: 0 0.5rem;\n  position: sticky;\n\n  height: 100vh;\n  overflow-y: auto;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  \n  @media screen and (max-width: 1080px) {\n    margin: 0;\n  }\n\n  @media screen and (max-width: 780px) {\n    max-width: unset;\n    display: none;\n  }\n\n  /* util class */\n  .hover-gold {\n    padding: 3px 5px;\n    cursor: pointer;\n  }\n\n  .hover-gold:hover {\n    color: ",";\n  }\n"]);return memos_templateObject2=function(){return e},e}function memos_templateObject3(){let e=(0,o._)(["\n  border: 1px solid ",";\n  border-radius: 1em;\n  padding-left: 1em;\n  background: ",";\n  color: ",";\n  width:  0;\n  flex: 2 1 0;\n  line-height: 1.7rem;\n  font-size: 0.9rem;\n\n\n  &:focus,\n  &:focus-visible{\n    outline: none;\n    border: 1px solid ",";\n  }\n"]);return memos_templateObject3=function(){return e},e}var X=!0;let q=a.createContext({isModel:!1,setIsModel:e=>{console.error("[MemoModelCtx] model function is called without a valid context")}});function Memos(e){let{memos:n,info:t,memotags:o}=e,i=(0,a.useContext)(s.Ni),[p,g]=(0,a.useState)(n),[j,w]=(0,a.useState)(n),[v,y]=(0,a.useState)(!1),_=(0,a.useRef)(null),[k,O]=(0,a.useState)(),[C,M]=(0,a.useState)({pagelimit:5,isSearch:"ready",searchText:""}),P=(0,a.useCallback)(async()=>{if(!_.current)return;let e=_.current.value.trim();if(0===e.length)return;M(n=>({...n,isSearch:"searching",searchText:e})),globalThis.scrollTo({top:0});let n=k;n||(n=await initSearch(O,g,M,t.pages)),n.search(e.split(" "))},[k,t.pages]),S=(0,a.useCallback)(function(e){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];_.current&&(_.current.value=e,n&&P())},[P]);function statusRender(){if(v)return"Fetching...";switch(C.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,r.jsxs)(r.Fragment,{children:["Results: ",p.length," memos",(0,r.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{M(e=>({...e,isSearch:"ready",searchText:""})),g(j)},children:"X"})]})}}return useDocumentEvent("keydown",e=>{_.current&&_.current===document.activeElement&&"Enter"===e.key&&P()},void 0,[P]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"".concat(b.d.author," - Memos")}),(0,r.jsx)(c.CommonHead,{})]}),(0,r.jsx)(u.Z,{placeHolder:!1,hideSearch:!0}),(0,r.jsx)("main",{style:{backgroundColor:null==i?void 0:i.colors.bg2},children:(0,r.jsx)(Y,{children:(0,r.jsxs)(h.Uq,{sep:1,siderLocation:"right",children:[(0,r.jsxs)(J,{children:[(0,r.jsx)(d.H,{style:{marginRight:"1rem"},children:statusRender()}),(0,r.jsx)("div",{style:{minHeight:"100vh"},children:p.map(e=>(0,r.jsx)(MemoCard,{memoPost:e,setSearchText:S},e.id))}),(0,r.jsx)(m.Z,{})]}),(0,r.jsxs)(V,{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(K,{type:"text",placeholder:"Search",ref:_,onFocus:()=>{initSearch(O,g,M,t.pages)}}),(0,r.jsx)(f,{className:"hover-gold",style:{fontSize:"1.275em",marginLeft:"0.125em"},onClick:P,children:(0,r.jsx)("i",{className:"icon-search"})})]}),(0,r.jsx)(NavCard,{info:t}),(0,r.jsx)(CardCommon,{title:"TAGS",children:(0,r.jsx)("div",{style:{paddingTop:"0.5rem"},children:o.map(e=>(0,r.jsx)("span",{className:"hover-gold",style:{display:"inline-block"},onClick:()=>{S("#"+e.name)},children:"#".concat(e.name)},e.name))})}),b.d.friends?(0,r.jsx)(CardCommon,{title:"FRIENDS",children:(0,r.jsx)("div",{style:{padding:"0.5rem 0.25rem"},children:b.d.friends.map((e,n)=>(0,r.jsx)("div",{children:(0,r.jsx)(x.IM,{href:e.link,children:e.name})},n))})}):null,b.d.walineApi&&""!==b.d.walineApi?(0,r.jsx)(CommentCard,{}):null]})]})})})]})}async function initSearch(e,n,t,o){let r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5;console.debug("%% init search..."),i=o<i?o:i;let l=Array.from({length:i+1},(e,n)=>"".concat("/data/memos","/").concat(n,".json")),a=l.map(e=>fetch(e).then(e=>e.json())),s=await Promise.all(a),c=s.flatMap(e=>e),m=c.map(e=>({id:e.id,title:"",content:e.content,tags:e.tags}));function notifier(e){let o=e.map(e=>e.id),r=c.filter(e=>!!o.includes(e.id)).map(async e=>({...e,content:(await compileMdxMemo(e.content)).code,length:e.content.length}));Promise.all(r).then(e=>n(e)),t(e=>({...e,isSearch:"done"}))}return e(r=new U.x({data:m,field:["tags","content"],notifier,disableStreamNotify:!0})),t(e=>({...e,pagelimit:i})),r}let Y=s.ZP.div.withConfig({componentId:"sc-6e4ac6be-0"})(memos_templateObject()),J=s.ZP.div.withConfig({componentId:"sc-6e4ac6be-1"})(memos_templateObject1()),V=s.ZP.div.withConfig({componentId:"sc-6e4ac6be-2"})(memos_templateObject2(),e=>e.theme.colors.gold),K=s.ZP.input.withConfig({componentId:"sc-6e4ac6be-3"})(memos_templateObject3(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.goldHover)},5497:function(e,n,t){"use strict";t.d(n,{j:function(){return l}});var o=t(1262),r=t(8598),i=t(3433);function _templateObject(){let e=(0,o._)(["\n  text-align: justify;\n  letter-spacing: 0.01em;\n  color: ",";\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n    p,ul,ol {\n      line-height: 1.625rem;\n    }\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem auto;\n    display: block;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: bold;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    ","\n  }\n  \n  code {\n    color: ",";\n    background-color: ",";\n    border-radius: 3px;\n    padding: 0.2rem 0.375rem;\n    margin: 0rem 1px;\n    font-size: 0.875rem;\n  }\n\n  pre code {\n    color: ",";\n    border-radius: 0.5rem;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.5em;\n    color: ",';\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:"•";\n    position: absolute;\n    color: ',";\n    left: -1rem;\n  }\n\n  .hljs {\n    background: ",";\n  }\n  \n  .hljs-emphasis {\n    font-style: italic;\n  }\n  \n  .hljs-strong {\n    font-weight: bold;\n  }\n  \n  .hljs-link {\n    text-decoration: underline;\n  }\n  \n  .hljs-comment,\n  .hljs-quote {\n    color: #a79b87ba;\n    font-style: italic;\n  }\n\n  .hljs-params,\n  .hljs-type {\n    color: #a79b87c4;\n  }\n  \n  .hljs-punctuation,\n  .hljs-attr {\n    color: rgb(89 161 197);\n  }\n  \n  .hljs-selector-tag,\n  .hljs-name,\n  .hljs-meta,\n  .hljs-operator,\n  .hljs-char.escape_ {\n    color: #c56200;\n  }\n  \n  .hljs-keyword,\n  .hljs-deletion {\n    color: #799f67;\n  }\n  \n  .hljs-regexp,\n  .hljs-selector-pseudo,\n  .hljs-selector-attr,\n  .hljs-variable.language_ {\n    color: #cc5e91;\n  }\n  \n  .hljs-subst,\n  .hljs-property,\n  .hljs-code,\n  .hljs-formula,\n  .hljs-section,\n  .hljs-title.function_ {\n    color: #e36b6b;\n  }\n  \n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-addition,\n  .hljs-selector-class,\n  .hljs-title.class_,\n  .hljs-title.class_.inherited__,\n  .hljs-meta .hljs-string {\n    color: #c68032;\n  }\n  \n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-number,\n  .hljs-literal,\n  .hljs-link,\n  .hljs-built_in,\n  .hljs-title,\n  .hljs-selector-id,\n  .hljs-tag,\n  .hljs-doctag,\n  .hljs-attribute,\n  .hljs-template-tag,\n  .hljs-meta .hljs-keyword {\n    color: ",";\n  }\n\n"]);return _templateObject=function(){return e},e}let l=r.ZP.div.withConfig({componentId:"sc-10982bce-0"})(_templateObject(),e=>e.theme.colors.textSecondary,e=>e.theme.colors.gold,i._j,e=>e.theme.colors.gold,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.textSecondary,e=>e.theme.colors.textGray,e=>e.theme.colors.gold,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.gold)}},function(e){e.O(0,[774,537,576,54,291,965,758,731,108,888,179],function(){return e(e.s=83)}),_N_E=e.O()}]);