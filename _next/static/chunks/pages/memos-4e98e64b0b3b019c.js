(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{83:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return t(4375)}])},9946:function(e,n,t){"use strict";t.d(n,{Z:function(){return Model}});var r=t(1262),o=t(1527),i=t(959),l=t(8598),a=t(5956);function _templateObject(){let e=(0,r._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background: #000000de;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n"]);return _templateObject=function(){return e},e}function Model(e){let{isModel:n,setModel:t,scrollRef:r,style:l,...c}=e,m=(0,a.aA)(),d=(0,i.useMemo)(()=>l?{...l,height:m+"px"}:{height:m+"px"},[l,m]);return(0,i.useEffect)(()=>(n?r?r.style.overflow="hidden":document.body.style.overflow="hidden":r?r.style.overflow="auto":document.body.style.overflow="auto",()=>{r?r.style.overflow="auto":document.body.style.overflow="auto"}),[n,r]),n&&(0,o.jsx)(s,{...c,$isOpen:n,onClick:e=>{e.stopPropagation(),t(!1)},style:d})}let s=l.ZP.div.withConfig({componentId:"sc-48425588-0"})(_templateObject())},2723:function(e,n,t){"use strict";t.d(n,{H:function(){return i}});var r=t(1262),o=t(8598);function _templateObject(){let e=(0,r._)(["\n  font-style: italic;\n  font-size: 0.875rem;\n  color: ",";\n  text-align: right;\n"]);return _templateObject=function(){return e},e}let i=o.ZP.div.withConfig({componentId:"sc-47295c3a-0"})(_templateObject(),e=>e.theme.colors.textGray2)},3226:function(e,n,t){"use strict";var r=t(1262),o=t(1527),i=t(75);t(5439);var l=t(959),a=t(8598),s=t(8476);function _templateObject(){let e=(0,r._)(["\n\n  margin: 0 auto;\n\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    @media screen and (max-width: 580px) {\n      .wl-gallery-column {\n        display: grid !important;\n        grid-template-columns: 1fr 1fr 1fr;\n        max-height: 200px;\n      }\n    }\n    img {\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"]);return _templateObject=function(){return e},e}let c=a.ZP.div.withConfig({componentId:"sc-1e040c41-0"})(_templateObject(),e=>e.theme.colors.bgInverse,e=>e.theme.colors.bg,e=>e.theme.colors.textGray,e=>e.theme.colors.accent,e=>e.theme.colors.bgInverse,e=>e.theme.colors.bg,e=>e.theme.colors.bg,e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary);n.Z=e=>((0,l.useEffect)(()=>{(0,i.S1)({el:"#waline",serverURL:s.d.walineApi?s.d.walineApi:"",path:window.location.pathname,pageview:!0,comment:!0})},[]),s.d.walineApi&&""!==s.d.walineApi)?(0,o.jsx)(c,{id:"waline",...e,children:"Waline"}):(0,o.jsx)(o.Fragment,{})},1737:function(e,n,t){"use strict";t.d(n,{n:function(){return useMdxMemo},g:function(){return useMdxPost}});var r=t(1527),o=t.t(r,2),i=t(8255),l=t(959),a=t(9946);function ImgModel(e){let{imgProps:n,isModel:t,setModel:o}=e;return(0,r.jsxs)(a.Z,{isModel:t,setModel:o,children:[" ",(0,r.jsx)("img",{loading:"lazy",...n,style:{maxWidth:"100%",maxHeight:"100%",display:"block"}})," "]})}function MDImg(e){let[n,t]=(0,l.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ImgModel,{imgProps:e,isModel:n,setModel:t}),(0,r.jsx)("img",{loading:"lazy",onClick:()=>t(!0),style:{cursor:"zoom-in"},...e})]})}function memoTag(e){return function(n){let{text:t}=n;return(0,r.jsxs)("span",{className:"tag",onClick:()=>{e&&e("#".concat(t),!0)},children:["#",t," "]})}}function convertBack(e){let n={Fragment:l.Fragment,...o,baseUrl:"file:///C:/Users/lingn/git/blog/components/mdx.tsx"},t=(0,i.W)(e,n);return t}function useMdxPost(e){let n=convertBack(e);return(0,r.jsx)(n.default,{components:{img:MDImg}})}function useMdxMemo(e,n){let t=convertBack(e);return(0,r.jsx)(t.default,{components:{Tag:memoTag(n)}})}},5956:function(e,n,t){"use strict";t.d(n,{aA:function(){return useViewHeight}});var r=t(959);function useViewHeight(){let[e,n]=(0,r.useState)(globalThis.innerHeight);return(0,r.useEffect)(()=>{let setvhOnResize=()=>{n(globalThis.innerHeight)};return globalThis.addEventListener("resize",setvhOnResize),()=>{globalThis.removeEventListener("resize",setvhOnResize)}},[]),e}},4375:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Q},default:function(){return Memos}});var r=t(1262),o=t(1527),i=t(67),l=t(3522),a=t.n(l),s=t(959),c=t(8598),m=t(4085),d=t(972),u=t(2723),h=t(674),p=t(3797);function _templateObject(){let e=(0,r._)(["\n  margin-top: 1rem;\n  padding: 1rem 1rem;\n  position: relative;\n  color:",";\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  font-size: 0.9rem;\n  font-weight: bold;\n  color: ",";\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  display: inline-block;\n  text-align: right;\n  font-size: 1.125rem;\n  color: ",";\n"]);return _templateObject2=function(){return e},e}function CardCommon(e){let{title:n,children:t,...r}=e;return(0,o.jsxs)(g,{...r,children:[n&&(0,o.jsx)(f,{children:n}),t]})}let g=c.ZP.section.withConfig({componentId:"sc-911264f5-0"})(_templateObject(),e=>e.theme.colors.textPrimary),f=c.ZP.div.withConfig({componentId:"sc-911264f5-1"})(_templateObject1(),e=>e.theme.colors.textGray2),b=c.ZP.span.withConfig({componentId:"sc-911264f5-2"})(_templateObject2(),e=>e.theme.colors.textGray2);var x=t(8476),j=t(4618),w=t(9946),y=t(3226);function commentcard_templateObject(){let e=(0,r._)(["\n  font-size: 0.9rem;\n  \n  li {\n    list-style: none;\n    margin: 0.5rem 0;\n    padding-left: 0.25rem;\n    height: 1.5em;\n    overflow: hidden;\n  }\n"]);return commentcard_templateObject=function(){return e},e}function commentcard_templateObject1(){let e=(0,r._)(["\n  display: inline-block;\n  margin-top: 2rem;\n  padding-right: 0.5rem;\n  font-weight: bold;\n  color:",";\n  transition: color 0.5s ease;\n\n  &:hover {\n    color:",";\n  }\n"]);return commentcard_templateObject1=function(){return e},e}function commentcard_templateObject2(){let e=(0,r._)(["\n  height:100%;\n  width:100%;\n  padding-top:64px;\n  overflow-y: auto;\n\n  &>div{\n    max-width: min(90%, 640px);\n  }\n"]);return commentcard_templateObject2=function(){return e},e}function CommentCard(){let e=(0,s.useContext)(c.Ni),[n,t]=(0,s.useState)([]),[r,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=encodeURIComponent(globalThis.location.pathname);fetch(x.d.walineApi+"/comment?path="+e+"&pageSize=10&page=1&lang=en-US&sortBy=insertedAt_desc").then(e=>e.json()).then(e=>{t(e.data)})},[]),(0,o.jsxs)(o.Fragment,{children:[r&&(0,o.jsx)(w.Z,{isModel:r,setModel:i,style:{background:null==e?void 0:e.colors.bgMask},children:(0,o.jsx)(O,{children:(0,o.jsx)(y.Z,{})})}),(0,o.jsxs)(CardCommon,{title:"COMMENTS",children:[(0,o.jsx)(v,{children:n.map(e=>(0,o.jsx)("li",{children:e.comment.replace(/<[^>]*>/g,"")},e.objectId))}),(0,o.jsx)(_,{children:(0,o.jsx)(j.w2,{onClick:()=>i(!0),children:"给我留言"})})]})]})}let v=c.ZP.div.withConfig({componentId:"sc-6956583f-0"})(commentcard_templateObject()),_=c.ZP.span.withConfig({componentId:"sc-6956583f-1"})(commentcard_templateObject1(),e=>e.theme.colors.textGray2,e=>e.theme.colors.textPrimary),O=c.ZP.div.withConfig({componentId:"sc-6956583f-2"})(commentcard_templateObject2());var k=t(889),C=t(8314),M=t(6856),S=t(1702);function useDocumentEvent(e,n,t,r){(0,s.useEffect)(()=>(document.addEventListener(e,n,t),()=>{document.removeEventListener(e,n,t)}),[e,n,t,...r||[]])}var I=t(5956),P=t(3318);function imagebrowser_templateObject(){let e=(0,r._)(["\n  animation: "," 0.7s ease;\n  transform: translate3d(0,0,0);\n"]);return imagebrowser_templateObject=function(){return e},e}function imagebrowser_templateObject1(){let e=(0,r._)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0.5rem;\n  right: 0.5rem;\n\n  height: 2.5rem;\n  border-radius: 1.25rem;\n  padding: 0 1rem;\n  background: #5b5b5bbd;\n  color: white;\n  backdrop-filter: blur(5px);\n\n  &:hover{\n    opacity: 1;\n  }\n"]);return imagebrowser_templateObject1=function(){return e},e}function imagebrowser_templateObject2(){let e=(0,r._)(["\n  \n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0rem;\n  color: white;\n  opacity: 0.5;\n  background: #5b5b5bbd;\n  font-size: 1.25rem;\n  border-radius: 50%;\n  ","\n\n  @media screen and (max-width: 580px) {\n    ","\n    transition: left 0.3s linear, right 0.3s linear;\n  }\n\n  &:hover{\n    opacity: 1;\n    backdrop-filter: blur(5px);\n  }\n"]);return imagebrowser_templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  width: 100%;\n  max-height: 100%;\n  overflow-y: auto;\n  cursor: default;\n\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;	\n  \n  & img {\n    display: block;\n    margin: 0 auto;\n  }\n\n  & img::after{\n    content: attr(alt);\n  }\n"]);return _templateObject3=function(){return e},e}let T=(0,M.Ue)(e=>(console.debug("%%%% new img browser state"),{isModel:!1,setisModel:n=>e(()=>({isModel:n})),imagesData:[],setImagesData:n=>e(()=>({imagesData:n})),currentIndex:0,setCurrentIndex:n=>e(()=>({currentIndex:n}))}));function ImageBrowser(){let e=T(e=>e),n=T(e=>e.imagesData),[t,r]=(0,s.useState)({curr:T(e=>e.currentIndex),last:T(e=>e.currentIndex)}),i=(0,s.useRef)(null);t.curr>n.length-1&&console.error("uncaught ivalid image index:",t,"in length",n.length);let l=(0,s.useMemo)(()=>t.curr<n.length?n[t.curr].width/n[t.curr].height:1,[n,t]),a=(0,I.aA)(),c=(0,s.useCallback)(()=>{t.curr>0&&(r({curr:t.curr-1,last:t.curr}),i.current&&i.current.scrollTo({top:0}))},[t,r,i]),m=(0,s.useCallback)(()=>{t.curr<n.length-1&&(r({curr:t.curr+1,last:t.curr}),i.current&&i.current.scrollTo({top:0}))},[t,r,i,n]),d=(0,s.useCallback)(e=>{if("ArrowLeft"===e.key)c();else if("ArrowRight"===e.key)m();else if("ArrowDown"===e.key){if(i.current){let e=i.current.scrollTop+400;i.current.scrollTo({top:e>i.current.scrollHeight?i.current.scrollHeight:e,behavior:"smooth"})}}else if("ArrowUp"===e.key&&i.current){let e=i.current.scrollTop-400;i.current.scrollTo({top:e<0?0:e,behavior:"smooth"})}},[i,m,c]);useDocumentEvent("keydown",d);let[u,h]=(0,s.useState)(!1),[p,g]=(0,s.useState)([0,0,0]),[f,b]=(0,s.useState)(Date.now()),[x,j]=(0,s.useState)([0,0]),[y,v]=(0,s.useState)(0),[_,O]=(0,s.useState)(!1),M=(0,s.useCallback)(e=>{e.stopPropagation(),h(!0),b(Date.now()),g([e.touches[0].clientX,e.touches[0].clientY,i.current?i.current.scrollTop:0])},[]),P=(0,s.useCallback)(e=>{if(e.stopPropagation(),u){let n=e.touches[0].clientX-p[0],t=e.touches[0].clientY-p[1],r=i.current?i.current.scrollTop-p[2]:0;0!==y?j("x"===y?[n,0]:"y"===y?[0,t]:[0,r]):(Math.abs(n)>20||Math.abs(t)>20||Math.abs(r)>20)&&(v(Math.abs(n)>Math.abs(t)&&Math.abs(n)>Math.abs(r)?"x":Math.abs(t)>Math.abs(r)?"y":"scrolly"),j(Math.abs(n)>Math.abs(t)&&Math.abs(n)>Math.abs(r)?[n,0]:t>Math.abs(r)?[0,t]:[0,r]))}},[p,y,u]),D=(0,s.useCallback)(n=>{n.stopPropagation(),console.debug("%% touch end"),Date.now()-f<200&&5>Math.abs(x[0])&&5>Math.abs(x[1])?(O(!0),setTimeout(()=>{e.setisModel(!1),O(!1)},300)):"x"===y&&(x[0]<-60?m():x[0]>60&&c()),h(!1),g([0,0,0]),j([0,0]),v(0)},[x,m,c,y,f,e]),H=(0,s.useMemo)(()=>"x"===y&&x[0]>60,[x,y]),L=(0,s.useMemo)(()=>"x"===y&&x[0]<-60,[x,y]),$=(0,s.useMemo)(()=>Object.assign("x"===y?{overflowY:"hidden",transition:"transform 0.016s linear",transform:"translate3d(".concat(x[0],"px, 0px, 0px)"),opacity:Math.max(200-Math.abs(x[0]),0)/200}:{}),[x,y]),A=(0,s.useMemo)(()=>_?{opacity:0,transition:"opacity 0.3s ease"}:{},[_]),F=Object.assign(l>=2?{maxWidth:"100%",maxHeight:.9*a+"px"}:l>.6?{maxWidth:"100%",maxHeight:a+"px"}:{maxWidth:"95%"});return(0,o.jsxs)(w.Z,{isModel:!0,setModel:e.setisModel,style:{...A,background:"#1d1d1d"},children:[(0,o.jsx)(N,{ref:i,onTouchStart:M,onTouchMove:(0,S.P)(P,16),onTouchEnd:D,onClick:e=>e.stopPropagation(),style:$,children:(0,o.jsx)(E,{src:"loaded"===n[t.curr].ok?n[t.curr].src:"",alt:n[t.curr].ok,style:F,$entranceDirection:t.curr===t.last?0:t.curr>t.last?1:-1})}),t.curr>0&&(0,o.jsx)(z,{$isLeft:!0,$isShown:H,onClick:e=>{e.stopPropagation(),c()},children:(0,o.jsx)(k.Z,{})}),t.curr<n.length-1&&(0,o.jsx)(z,{$isLeft:!1,$isShown:L,onClick:e=>{e.stopPropagation(),m()},children:(0,o.jsx)(C.Z,{})}),(0,o.jsxs)(Z,{children:[t.curr+1,"/",n.length," \xa0|\xa0",(0,o.jsx)("span",{onClick:n=>{n.stopPropagation(),e.setisModel(!1)},children:"关闭"})]})]})}let E=c.ZP.img.withConfig({componentId:"sc-d8e90dbc-0"})(imagebrowser_templateObject(),e=>0===e.$entranceDirection?P.Ji:1===e.$entranceDirection?P.$k:P.x$),Z=c.ZP.div.withConfig({componentId:"sc-d8e90dbc-1"})(imagebrowser_templateObject1()),z=c.ZP.div.withConfig({componentId:"sc-d8e90dbc-2"})(imagebrowser_templateObject2(),e=>e.$isLeft?"left: 1rem;":"right: 1rem;",e=>e.$isLeft?e.$isShown?"left: 1rem;":"left: -2.5rem;":e.$isShown?"right: 1rem;":"right: -2.5rem;"),N=c.ZP.div.withConfig({componentId:"sc-d8e90dbc-3"})(_templateObject3());var D=t(593),H=t(3433),L=t(1737);function imagesthumb_templateObject(){let e=(0,r._)(["\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  height: 100%;\n"]);return imagesthumb_templateObject=function(){return e},e}function imagesthumb_templateObject1(){let e=(0,r._)(["\n  border-radius: 0.5rem;\n  background: ",";\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 1;\n  cursor: zoom-in;\n  \n  user-select:none;\n  -webkit-user-select:none;\n\n  & img {\n    position: absolute;\n    -o-object-fit: cover;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & img:after {\n    content: attr(alt);\n    background: ",";\n    color: ",";\n    font-weight: bold;\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    text-align: left;\n    padding: 1em;\n    word-break: break-all;\n  }\n"]);return imagesthumb_templateObject1=function(){return e},e}function imagesthumb_templateObject2(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n\n  @media screen and (max-width: 580px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n"]);return imagesthumb_templateObject2=function(){return e},e}function parseMarkdownImage(e){let n=/!\[(.*?)\]\((.*?)\)/.exec(e);if(!n)return null;{let e=n[1],t=n[2];return{alt:e,url:t}}}function Images(e){var n,t,r;let{imgsmd:i}=e,l=T(e=>e),[a,c]=(0,s.useState)(Array(i.length).fill(1).map((e,n)=>({ok:"loading",index:n,src:"",width:1,height:1,alt:""})));return((0,s.useEffect)(()=>{(async function(){let e=i.map(async(e,n)=>{let t;let r=parseMarkdownImage(e);if(!r)return{ok:"failed",index:n,src:"",width:0,height:0,alt:""};let{url:o,alt:i}=r,l=new Image,a=new Promise((e,t)=>{l.onload=()=>e(l),l.onerror=()=>t({ok:"failed",index:n,src:"",width:0,height:0,alt:i}),l.src=o});return(await a.catch(e=>{t=e}),t)?t:{ok:"loaded",index:n,src:o,width:l.width,height:l.height,alt:i}});try{let n=await Promise.all(e);c(n)}catch(e){console.error("Error loading images:",e)}})()},[i,c]),0===i.length)?null:(0,o.jsx)(o.Fragment,{children:1===i.length?(0,o.jsx)("div",{style:{height:"300px"},children:(0,o.jsxs)(A,{style:{maxWidth:"100%",height:"100%",aspectRatio:a[0]?a[0].width/a[0].height>2?2:a[0].width/a[0].height<.75?.75:a[0].width/a[0].height:2},children:[" ",(0,o.jsx)("img",{loading:"lazy",src:(null===(n=a[0])||void 0===n?void 0:n.ok)==="loaded"?null===(t=a[0])||void 0===t?void 0:t.src:"",alt:null===(r=a[0])||void 0===r?void 0:r.ok}),(0,o.jsx)($,{onClick:e=>{e.stopPropagation(),l.setCurrentIndex(0),l.setImagesData(a),l.setisModel(!0)}})]})}):(0,o.jsx)(F,{children:a.map((e,n)=>(0,o.jsxs)(A,{onTouchEnd:e=>{e.stopPropagation()},children:[" ",(0,o.jsx)("img",{loading:"lazy",src:"loaded"===e.ok?e.src:"",alt:e.ok}),(0,o.jsx)($,{onClick:e=>{e.stopPropagation(),console.debug("% click on",n),l.setCurrentIndex(n),l.setImagesData(a),l.setisModel(!0)}})]},n))})})}let $=c.ZP.div.withConfig({componentId:"sc-a3438d2f-0"})(imagesthumb_templateObject()),A=c.ZP.div.withConfig({componentId:"sc-a3438d2f-1"})(imagesthumb_templateObject1(),e=>e.theme.colors.bg2,e=>e.theme.colors.bg2,e=>e.theme.colors.uiLineGray),F=c.ZP.div.withConfig({componentId:"sc-a3438d2f-2"})(imagesthumb_templateObject2());function memocard_templateObject(){let e=(0,r._)(["\n\n  background:",";\n  margin: 0.5rem 0;\n  padding: 1.25rem 1.5rem;\n  border-radius: 1rem;\n  animation: "," .3s ease;\n\n  @media screen and (max-width: 780px) {\n    padding: 1.25rem 1.5rem;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 1.25rem 1rem;\n    border-radius: unset;\n  }\n  \n  & > .content {\n    position: relative;\n    height: ",";\n    overflow: hidden;\n    /* transition: height 0.5s ease; */\n  }\n"]);return memocard_templateObject=function(){return e},e}function memocard_templateObject1(){let e=(0,r._)(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    text-align: right;\n    \n    color: ",";\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      letter-spacing: 0.02rem;\n      padding: 0.2rem 0;\n      cursor: pointer;\n      span {\n        transition: box-shadow .3s;\n      }\n    }\n\n    & .rd-more:hover span {\n      ","\n    }\n   \n"]);return memocard_templateObject1=function(){return e},e}function memocard_templateObject2(){let e=(0,r._)(["\n    padding-left: 5px;\n\n    @media screen and (min-width: 580px){\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n    }\n\n    padding-bottom: ",";\n    \n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n\n    & .tag {\n      color: ",";\n    }\n\n    & .tag:hover {\n      cursor: pointer;\n      color: ",";\n    }\n"]);return memocard_templateObject2=function(){return e},e}function memocard_templateObject3(){let e=(0,r._)(["\n    display: flex;\n\n    & > .avatar {\n      width: 3rem;\n      height: 3rem;\n      border-radius: 50%;\n      border: 1px solid ",";\n\n      @media screen and (max-width: 580px){\n        width: 2.75rem;\n        height: 2.75rem;\n      }\n\n    }\n\n    & .meta{\n      margin-left: 0.5rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    & .date {\n      font-size: 0.85rem;\n      color: ",";\n    }\n\n    & .word-count {\n      position: absolute;\n      right: 0;\n    }\n"]);return memocard_templateObject3=function(){return e},e}function MemoCard(e){let{source:n,setSearchText:t,triggerHeightChange:r,...i}=e,[l,a]=(0,s.useState)(!0),m=(0,s.useContext)(c.Ni),d=s.useRef(null),u=n.length>200;function handleExpand(e){if(!l){let e=d.current;if(e){let n=e.getBoundingClientRect().top;(n<0||n>window.innerHeight)&&globalThis.scrollTo({top:n+globalThis.scrollY})}}a(!l),d.current&&r&&r(!0)}return(0,o.jsxs)(R,{...i,$isCollapse:!1!==u&&l,ref:d,children:[(0,o.jsxs)("div",{className:"content",children:[(0,o.jsxs)(q,{children:[(0,o.jsx)("img",{className:"avatar",src:m.assets.favico,alt:x.d.author}),(0,o.jsxs)("div",{className:"meta",children:[(0,o.jsx)("div",{children:x.d.author}),(0,o.jsxs)("div",{className:"date",children:[n.id,"\xa0\xa0",(0,o.jsxs)("span",{className:"word-count",children:[n.length,"\xa0字"]})]})]})]}),(0,o.jsx)(G,{$bottomSpace:u,children:(0,L.n)(n.code,t)}),(0,o.jsx)(B,{$isCollapse:l,$isShown:u,children:(0,o.jsx)("div",{onClick:handleExpand,className:"rd-more",children:(0,o.jsx)("span",{children:l?"SHOW MORE":"Hide"})})})]}),(0,o.jsx)("div",{style:{padding:"0 0.5rem"},children:(0,o.jsx)(Images,{imgsmd:n.imgsmd})})]})}let R=c.ZP.section.withConfig({componentId:"sc-a2ebd57c-0"})(memocard_templateObject(),e=>e.theme.colors.bg,P.r$,e=>!0===e.$isCollapse?"19rem":"auto"),B=c.ZP.div.withConfig({componentId:"sc-a2ebd57c-1"})(memocard_templateObject1(),e=>!0===e.$isShown?"block":"none",e=>e.theme.colors.accent,e=>!0===e.$isCollapse?e.theme.colors.maskGradient:"",()=>H.XC.f),G=(0,c.ZP)(D.j).withConfig({componentId:"sc-a2ebd57c-2"})(memocard_templateObject2(),e=>!0===e.$bottomSpace?"2rem":"inherit",e=>e.theme.colors.accent,e=>e.theme.colors.accentHover),q=c.ZP.div.withConfig({componentId:"sc-a2ebd57c-3"})(memocard_templateObject3(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.textGray);function navcard_templateObject(){let e=(0,r._)(["\n  margin-top: 1.5rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  color:",";\n\n  .item {\n    padding: 0.25rem 0;\n    margin-right: 0.75rem;\n    border-right: 2px solid ",";\n  }\n\n  .item.active {\n    border-right: 2px solid ",";\n  }\n\n  .title {\n    font-weight: bold;\n    margin-right: 0.25rem;\n  }\n\n  .count {\n    font-size: 0.875rem;\n    color: ",";\n  }\n"]);return navcard_templateObject=function(){return e},e}function NavCard(e){let{info:n}=e;return(0,o.jsxs)(X,{children:[(0,o.jsxs)("div",{className:"item active",children:[(0,o.jsx)("span",{className:"title",children:"Memos"}),(0,o.jsx)("span",{className:"count",children:n.memos})]}),(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("span",{className:"title",children:"Photos"}),(0,o.jsx)("span",{className:"count",children:n.imgs})]})]})}let X=c.ZP.section.withConfig({componentId:"sc-8c0df726-0"})(navcard_templateObject(),e=>e.theme.colors.textPrimary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.accent,e=>e.theme.colors.textGray);function ListItem(e){let{Elem:n,index:t,source:r,placeHolder:i,setplaceHolder:l}=e,a=(0,s.useRef)(null),c=(0,s.useCallback)(()=>{if(a.current){let e=a.current.offsetHeight;l(n=>{if(n[t]===e||0===e)return n;let r=[...n];return r[t]=e,r})}},[a,l,t]);(0,s.useEffect)(()=>{let e=(0,S.P)(c,150);return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[a,t,l,c]);let[m,d]=(0,s.useState)(!1);(0,s.useEffect)(()=>{m&&(c(),d(!1))},[m,c]);let[u,h]=(0,s.useState)(!1);(0,s.useEffect)(()=>{c(),h(!0)},[a,c]);let p=(0,s.useMemo)(()=>i.slice(0,t).reduce((e,n)=>e+=n,0),[t,i]);return(0,o.jsx)("div",{ref:a,style:{position:"absolute",width:"100%",transform:"translateY(".concat(p,"px)"),visibility:u?"visible":"hidden"},children:n({source:r,triggerHeightChange:d})})}var virtuallist=e=>{let{sources:n,setSources:t,Elem:r,scrollRef:i,fetchFrom:l,batchsize:a}=e,[c,m]=(0,s.useState)(Array(n.length).fill(300)),[d,u]=(0,s.useState)(Array(n.length).fill(0).map((e,n)=>n)),[h,p]=(0,s.useState)(3*n.length),g=(0,s.useRef)({enable:!0}),f=(0,s.useMemo)(()=>c.reduce((e,n)=>e+=n,0),[c]),b=(0,s.useCallback)(e=>{let n=0;for(let t=0;t<e;t++)n+=c[t];return n},[c]);return(0,s.useEffect)(()=>{let e=null==i?void 0:i.current,r=(0,S.P)(()=>{if(!g.current.enable)return;let r=b(d[d.length-1])-b(d[0]),o=(e?e.scrollHeight:globalThis.scrollY)-b(d[0]),i=o/r;if(!isNaN(i)&&isFinite(i)&&!(i>1.5)){if(g.current={enable:!1},l&&i<.2){let e=d[0]-a;if(e<0){g.current={enable:!0};return}l(e,a).then(e=>{if(!e||0===e.length){g.current={enable:!0};return}let r=d.map(e=>e-d.length);if(e.length>d.length){let n=Array(e.length-d.length).fill(0).map((n,t)=>t-e.length+d.length+r[0]);r=n.concat(r)}else e.length<d.length&&(r=r.slice(d.length-e.length,d.length));let o=r.concat(d),i=e.concat(n);o.length>h&&(o.splice(0-r.length,r.length),i.splice(0-r.length,r.length)),u(o),t(i),g.current={enable:!0}})}else if(l&&i>.7){let e=d[d.length-1]+1;l(e,a).then(e=>{if(!e||0===e.length){g.current={enable:!0};return}let r=d.map(e=>e+d.length);if(e.length>d.length){let n=Array(e.length-d.length).fill(0).map((e,n)=>n+r[r.length-1]);r=r.concat(n)}else e.length<d.length&&(r=r.slice(0,e.length));if(r[r.length-1]>c.length-1){let e=Array(r[r.length-1]-c.length+1).fill(300);m(c.concat(e))}let o=d.concat(r),i=n.concat(e);o.length>h&&(o.splice(0,e.length),i.splice(0,e.length)),u(o),t(i),g.current={enable:!0}})}else g.current={enable:!0}}},500);return e?e.addEventListener("scroll",r):globalThis.addEventListener("scroll",r),()=>{e?e.addEventListener("scroll",r):globalThis.removeEventListener("scroll",r)}},[g,i,l,d,t,c,b,n,a,h]),(0,o.jsx)("div",{style:{position:"relative",width:"100%",minHeight:"".concat(f,"px")},children:n.map((e,n)=>(0,o.jsx)(ListItem,{index:d[n],Elem:r,source:e,placeHolder:c,setplaceHolder:m},e.id))})};let Y="/data/memos",getMemoInfo=async()=>fetch(Y+"/status.json").then(e=>e.json()).then(e=>e),queryMemoByCount=async(e,n)=>{let t=[Math.floor(e/10),e%10],r=[Math.floor((e+n-1)/10),(e+n-1)%10],o=await getMemoInfo(),i=[];for(let e=t[0];e<=r[0];e++)e>=0&&e<=o.pages&&i.push("".concat(Y,"/").concat(e,".json"));let l=i.map(async(e,n)=>fetch(e).then(e=>e.json()).then(e=>0===n?r[0]-t[0]!=0?e.slice(t[1]):e.slice(t[1],r[1]+1):n===r[0]?e.slice(0,r[1]+1):e));return(await Promise.all(l)).flat()},queryMemoByDate=async(e,n)=>{let t=await getMemoInfo(),r=t.pageMap.filter(t=>{if(t.endDate<e.getTime()||t.startDate>n.getTime())return!1}),o=r.map(e=>"".concat(Y,"/").concat(e,".json")),i=o.map(async(e,n)=>fetch(e).then(e=>e.json()).then(e=>e));return(await Promise.all(i)).flat()},queryMemoTags=async()=>fetch("".concat(Y,"/tags.json")).then(e=>e.json()),queryMemoImgs=async()=>[],W={static:{getMemoInfo,queryMemoByCount,queryMemoByDate,queryMemoTags,queryMemoImgs}};function createClient(e){return W[e]||console.error("[client.ts] client ".concat(e," not in clientList")),W[e]}t(9995);var U=t(6276),J=t(3535),V=t(5709);function remarkTag(){return function(e){(0,V.Vn)(e,function(e,n,t){if("paragraph"===e.type){let n=[];e.children.forEach(e=>{if("text"===e.type){let t=e.value,r=extractTags(t),o=r.map(e=>"#"+e+" ");if(r.length>0){let e=flatsplit(t,o),i="#"+r[r.length-1],l=e[e.length-1].text;l.endsWith(i)&&(e[e.length-1]={text:l.slice(0,l.length-i.length),isDelimiter:!1},e.push({text:i,isDelimiter:!0})),e.forEach(e=>{if(e.isDelimiter){let t={type:"mdxJsxFlowElement",name:"Tag",attributes:[{type:"mdxJsxAttribute",name:"text",value:e.text.slice(1)}]};n.push(t)}else n.push({type:"text",value:e.text})})}else n.push(e)}else n.push(e)}),e.children=n}})}}function flatsplit(e,n){if(n.includes(e))return[{text:e,isDelimiter:!0}];let t=[{text:e,isDelimiter:!1}];for(let e of n){let n=[];for(let r of t){if(r.isDelimiter){n.push(r);continue}let t=r.text.split(e);for(let r=0;r<t.length&&(n.push({text:t[r],isDelimiter:!1}),r!==t.length-1||""===t[r]);r++)n.push({text:e,isDelimiter:!0})}t=n}return t.filter(e=>""!==e.text)}function extractTags(e){let n;let t=/#([^\s#]+)(?![^\[]*\])/g,r=[];for(;null!==(n=t.exec(e));){let e=n[1];e.length<=14&&r.push(e)}return r}async function compileImport(){let e=(await Promise.all([t.e(54),t.e(291),t.e(467)]).then(t.bind(t,3467))).compile;return e}async function compileMdxMemo(e){let n=await compileImport(),t=String(await n(e,{outputFormat:"function-body",remarkPlugins:[J.Z,remarkTag],rehypePlugins:[U.Z]}));return{code:t}}var K=t(8029);function memos_templateObject(){let e=(0,r._)(["\n  max-width: 1080px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 780px) {\n    max-width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n  }\n"]);return memos_templateObject=function(){return e},e}function memos_templateObject1(){let e=(0,r._)(["\n  width: 100%;\n  padding: 86px 16px 48px 16px;\n  align-self: flex-end;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 1080px) {\n    max-width: 700px;\n  }\n\n\n  @media screen and (max-width: 780px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 86px 0 48px 0;\n  }\n"]);return memos_templateObject1=function(){return e},e}function memos_templateObject2(){let e=(0,r._)(["\n  max-width: 15rem;\n  padding-top: 100px;\n  padding-bottom: 64px;\n  margin: 0 0.5rem;\n  position: sticky;\n\n  height: 100vh;\n  overflow-y: auto;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  \n  @media screen and (max-width: 1080px) {\n    margin: 0;\n  }\n\n  @media screen and (max-width: 780px) {\n    max-width: unset;\n    display: none;\n  }\n\n  /* util class */\n  .hover-gold {\n    padding: 3px 5px;\n    cursor: pointer;\n  }\n\n  .hover-gold:hover {\n    color: ",";\n  }\n"]);return memos_templateObject2=function(){return e},e}function memos_templateObject3(){let e=(0,r._)(["\n  border: 1px solid ",";\n  border-radius: 1em;\n  padding-left: 1em;\n  background: ",";\n  color: ",";\n  width:  0;\n  flex: 2 1 0;\n  line-height: 1.7rem;\n  font-size: 0.9rem;\n\n\n  &:focus,\n  &:focus-visible{\n    outline: none;\n    border: 1px solid ",";\n  }\n"]);return memos_templateObject3=function(){return e},e}var Q=!0;function Memos(e){let{source:n,info:t,memotags:r,client:l}=e,g=(0,s.useContext)(c.Ni),[f,w]=(0,s.useState)(n),[y,v]=(0,s.useState)(n),[_,O]=(0,s.useState)(!1),k=T(e=>e.isModel),C=(0,s.useRef)(null),[M,S]=(0,s.useState)(),[I,P]=(0,s.useState)({pagelimit:5,isSearch:"ready",searchText:""}),[E,Z]=(0,s.useState)(createClient(l)),z=(0,s.useCallback)(async(e,n)=>E.queryMemoByCount(e,n).then(e=>e.length>0?Promise.all(e.map(async e=>({...e,length:e.content.length,code:(await compileMdxMemo(e.content)).code}))):void 0),[E]),N=(0,s.useCallback)(async()=>{if(!C.current)return;let e=C.current.value.trim();if(0===e.length)return;P(n=>({...n,isSearch:"searching",searchText:e})),globalThis.scrollTo({top:0});let n=M;n||(n=await initSearch(S,w,P,t.pages)),n.search(e.split(" "))},[M,t.pages]),D=(0,s.useCallback)(function(e){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];C.current&&(C.current.value=e,n&&N())},[N]);function statusRender(){if(_)return"Fetching...";switch(I.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,o.jsxs)(o.Fragment,{children:["Results: ",f.length," memos",(0,o.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{O(!0),P(e=>({...e,isSearch:"ready",searchText:""})),w(y),O(!1)},children:"X"})]})}}return useDocumentEvent("keydown",e=>{C.current&&C.current===document.activeElement&&"Enter"===e.key&&N()},void 0,[N]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"".concat(x.d.author," - Memos")}),(0,o.jsx)(m.CommonHead,{})]}),(0,o.jsx)(h.Z,{placeHolder:!1,hideSearch:!0}),(0,o.jsxs)("main",{style:{backgroundColor:null==g?void 0:g.colors.bg2},children:[(0,o.jsx)(ee,{children:(0,o.jsxs)(p.Uq,{sep:1,siderLocation:"right",children:[(0,o.jsxs)(en,{children:[(0,o.jsx)(u.H,{style:{marginRight:"1rem"},children:statusRender()}),(0,o.jsx)("div",{style:{minHeight:"100vh"},children:"ready"===I.isSearch?(0,o.jsx)(virtuallist,{sources:f,setSources:w,Elem:e=>(0,o.jsx)(MemoCard,{source:e.source,setSearchText:D,triggerHeightChange:e.triggerHeightChange}),fetchFrom:z,batchsize:10},"vl1"):"done"===I.isSearch?(0,o.jsx)(virtuallist,{sources:f,setSources:w,Elem:e=>(0,o.jsx)(MemoCard,{source:e.source,setSearchText:D,triggerHeightChange:e.triggerHeightChange}),batchsize:10},I.searchText):null}),(0,o.jsx)(d.Z,{})]}),(0,o.jsxs)(et,{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(er,{type:"text",placeholder:"Search",ref:C,onFocus:()=>{initSearch(S,w,P,t.pages)}}),(0,o.jsx)(b,{className:"hover-gold",style:{fontSize:"1.275em",marginLeft:"0.125em"},onClick:N,children:(0,o.jsx)(i.Z,{})})]}),(0,o.jsx)(NavCard,{info:t}),(0,o.jsx)(CardCommon,{title:"TAGS",children:(0,o.jsx)("div",{style:{paddingTop:"0.5rem"},children:r.map(e=>(0,o.jsx)("span",{className:"hover-gold",style:{display:"inline-block"},onClick:()=>{D("#"+e.name)},children:"#".concat(e.name)},e.name))})}),x.d.friends&&(0,o.jsx)(CardCommon,{title:"FRIENDS",children:(0,o.jsx)("div",{style:{padding:"0.5rem 0.25rem"},children:x.d.friends.map((e,n)=>(0,o.jsx)("div",{children:(0,o.jsx)(j.IM,{href:e.link,children:e.name})},n))})}),x.d.walineApi&&""!==x.d.walineApi&&(0,o.jsx)(CommentCard,{})]})]})}),k&&(0,o.jsx)(ImageBrowser,{})]})]})}async function initSearch(e,n,t,r){let o,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5;console.debug("%% init search..."),i=r<i?r:i;let l=Array.from({length:i+1},(e,n)=>"".concat("/data/memos","/").concat(n,".json")),a=l.map(e=>fetch(e).then(e=>e.json())),s=await Promise.all(a),c=s.flatMap(e=>e),m=c.map(e=>({id:e.id,title:"",content:e.content,tags:e.tags}));function notifier(e){let r=e.map(e=>e.id),o=c.filter(e=>!!r.includes(e.id)).map(async e=>({...e,code:(await compileMdxMemo(e.content)).code,length:e.content.length}));Promise.all(o).then(e=>{n(e),t(e=>({...e,isSearch:"done"}))})}return e(o=new K.x({data:m,field:["tags","content"],notifier,disableStreamNotify:!0})),t(e=>({...e,pagelimit:i})),o}let ee=c.ZP.div.withConfig({componentId:"sc-1e493b70-0"})(memos_templateObject()),en=c.ZP.div.withConfig({componentId:"sc-1e493b70-1"})(memos_templateObject1()),et=c.ZP.div.withConfig({componentId:"sc-1e493b70-2"})(memos_templateObject2(),e=>e.theme.colors.accent),er=c.ZP.input.withConfig({componentId:"sc-1e493b70-3"})(memos_templateObject3(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover)},3318:function(e,n,t){"use strict";t.d(n,{$k:function(){return c},ER:function(){return a},Ji:function(){return i},r$:function(){return l},x$:function(){return s}});var r=t(1262),o=t(8598);function _templateObject(){let e=(0,r._)(["\n0% {\n  opacity: 0;\n}\n100% {\n  opacity: 1;\n}"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n0% {\n  opacity: 0;\n  transform: translateY(10px);\n}\n100% {\n  opacity: 1;\n  transform: translateY(0);\n}"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n0% {\n  -webkit-transform: translateX(50px);\n          transform: translateX(50px);\n  opacity: 0;\n}\n100% {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n0% {\n  -webkit-filter: blur(12px);\n          filter: blur(12px);\n  opacity: 0;\n}\n100% {\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  opacity: 1;\n}\n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n0% {\n  transform: translateY(-100%);\n}\n100% {\n  transform: translateY(0);\n}"]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,r._)(["\n0% {\n  transform: translateY(0);\n}\n100% {\n  transform: translateY(-100%);\n}"]);return _templateObject5=function(){return e},e}function _templateObject6(){let e=(0,r._)(["\n0% {\n  transform: translateX(-1000px);\n  opacity: 0;\n}\n100% {\n  transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject6=function(){return e},e}function _templateObject7(){let e=(0,r._)(["\n0% {\n  transform: translateX(1000px);\n  opacity: 0;\n}\n100% {\n  transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject7=function(){return e},e}let i=(0,o.F4)(_templateObject()),l=(0,o.F4)(_templateObject1()),a=(0,o.F4)(_templateObject2());(0,o.F4)(_templateObject3()),(0,o.F4)(_templateObject4()),(0,o.F4)(_templateObject5());let s=(0,o.F4)(_templateObject6()),c=(0,o.F4)(_templateObject7())},593:function(e,n,t){"use strict";t.d(n,{j:function(){return l}});var r=t(1262),o=t(8598),i=t(3433);function _templateObject(){let e=(0,r._)(["\n  color: ",";\n  \n  img, picture, video, canvas, svg, pre{\n    margin: 1.5rem auto;\n    display: block;\n  }\n\n  p,\n  ul,\n  ol {\n    line-height: 1.7rem;\n  }\n\n  blockquote {\n    margin: 1.5rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: bold;\n  }\n\n  a::before {\n    ","\n    height: 2px;\n  }\n\n  a:hover::before {\n    height: 0.4em;\n  }\n  \n  code {\n    color: ",";\n    background-color: ",";\n    border-radius: 3px;\n    padding: 0.2rem 0.375rem;\n    margin: 0rem 1px;\n    font-size: 0.875rem;\n  }\n\n  pre code {\n    color: ",";\n    border-radius: 0.5rem;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.5em;\n    color: ",';\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:"•";\n    position: absolute;\n    color: ',";\n    left: -1rem;\n  }\n\n  @media screen and (min-width: 580px){\n\n    letter-spacing: 0.01em;\n    text-align: justify;\n\n    img, picture, video, canvas, svg, pre{\n      margin: 1.6rem auto;\n      display: block;\n    }\n\n    blockquote {\n      margin: 1.6rem 0;\n    }\n  }\n\n  .hljs {\n    background: ",";\n  }\n  \n  .hljs-emphasis {\n    font-style: italic;\n  }\n  \n  .hljs-strong {\n    font-weight: bold;\n  }\n  \n  .hljs-link {\n    text-decoration: underline;\n  }\n  \n  .hljs-comment,\n  .hljs-quote {\n    color: #a79b87ba;\n    font-style: italic;\n  }\n\n  .hljs-params,\n  .hljs-type {\n    color: #a79b87c4;\n  }\n  \n  .hljs-punctuation,\n  .hljs-attr {\n    color: rgb(89 161 197);\n  }\n  \n  .hljs-selector-tag,\n  .hljs-name,\n  .hljs-meta,\n  .hljs-operator,\n  .hljs-char.escape_ {\n    color: #c56200;\n  }\n  \n  .hljs-keyword,\n  .hljs-deletion {\n    color: #799f67;\n  }\n  \n  .hljs-regexp,\n  .hljs-selector-pseudo,\n  .hljs-selector-attr,\n  .hljs-variable.language_ {\n    color: #cc5e91;\n  }\n  \n  .hljs-subst,\n  .hljs-property,\n  .hljs-code,\n  .hljs-formula,\n  .hljs-section,\n  .hljs-title.function_ {\n    color: #e36b6b;\n  }\n  \n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-addition,\n  .hljs-selector-class,\n  .hljs-title.class_,\n  .hljs-title.class_.inherited__,\n  .hljs-meta .hljs-string {\n    color: #c68032;\n  }\n  \n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-number,\n  .hljs-literal,\n  .hljs-link,\n  .hljs-built_in,\n  .hljs-title,\n  .hljs-selector-id,\n  .hljs-tag,\n  .hljs-doctag,\n  .hljs-attribute,\n  .hljs-template-tag,\n  .hljs-meta .hljs-keyword {\n    color: ",";\n  }\n\n"]);return _templateObject=function(){return e},e}let l=o.ZP.div.withConfig({componentId:"sc-f60cffcd-0"})(_templateObject(),e=>e.theme.colors.textSecondary,i.iG,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.textSecondary,e=>e.theme.colors.textGray,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.accent)}},function(e){e.O(0,[774,537,576,38,154,348,85,888,179],function(){return e(e.s=83)}),_N_E=e.O()}]);