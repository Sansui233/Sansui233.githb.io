(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{83:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return n(7782)}])},2723:function(e,t,n){"use strict";n.d(t,{H:function(){return a}});var r=n(1262),i=n(8598);function _templateObject(){let e=(0,r._)(["\n  font-style: italic;\n  font-size: 0.875rem;\n  color: ",";\n  text-align: right;\n"]);return _templateObject=function(){return e},e}let a=i.ZP.div.withConfig({componentId:"sc-47295c3a-0"})(_templateObject(),e=>e.theme.colors.textGray2)},4247:function(e,t,n){"use strict";n.d(t,{Z:function(){return CardCommon},b:function(){return s}});var r=n(1262),i=n(1527);n(959);var a=n(8598);function _templateObject(){let e=(0,r._)(["\n  margin-top: 1rem;\n  padding: 1rem 1rem;\n  position: relative;\n  color:",";\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  font-size: 0.9rem;\n  font-weight: bold;\n  color: ",";\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  display: inline-block;\n  text-align: right;\n  font-size: 1.125rem;\n  color: ",";\n"]);return _templateObject2=function(){return e},e}function CardCommon(e){let{title:t,children:n,...r}=e;return(0,i.jsxs)(o,{...r,children:[t&&(0,i.jsx)(l,{children:t}),n]})}let o=a.ZP.section.withConfig({componentId:"sc-911264f5-0"})(_templateObject(),e=>e.theme.colors.textPrimary),l=a.ZP.div.withConfig({componentId:"sc-911264f5-1"})(_templateObject1(),e=>e.theme.colors.textGray2),s=a.ZP.span.withConfig({componentId:"sc-911264f5-2"})(_templateObject2(),e=>e.theme.colors.textGray2)},6918:function(e,t,n){"use strict";n.d(t,{Z:function(){return CommentCard}});var r=n(1262),i=n(1527),a=n(5849),o=n.n(a),l=n(959),s=n(8598),c=n(8476),d=n(4618),m=n(9946),u=n(4247);function _templateObject(){let e=(0,r._)(["\n  font-size: 0.9rem;\n  \n  li {\n    list-style: none;\n    margin: 0.5rem 0;\n    padding-left: 0.25rem;\n    height: 1.5em;\n    overflow: hidden;\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  display: inline-block;\n  margin-top: 2rem;\n  padding-right: 0.5rem;\n  font-weight: bold;\n  color:",";\n  transition: color 0.5s ease;\n\n  &:hover {\n    color:",";\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  height:100%;\n  width:100%;\n  padding-top:64px;\n  overflow-y: auto;\n\n  &>div{\n    max-width: min(90%, 640px);\n  }\n"]);return _templateObject2=function(){return e},e}let h=o()(()=>Promise.all([n.e(576),n.e(537),n.e(615),n.e(679)]).then(n.bind(n,9679)),{loadableGenerated:{webpack:()=>[9679]}});function CommentCard(){let e=(0,l.useContext)(s.Ni),[t,n]=(0,l.useState)([{objectId:"0x00",comment:"等等，好像没有评论哦~"}]),[r,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=encodeURIComponent(globalThis.location.pathname);fetch(c.d.walineApi+"/comment?path="+e+"&pageSize=10&page=1&lang=en-US&sortBy=insertedAt_desc").then(e=>e.json()).then(e=>{n(e.data)})},[]),(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)(m.Z,{isModel:r,setModel:a,style:{background:null==e?void 0:e.colors.bgMask},children:(0,i.jsx)(f,{children:(0,i.jsx)(h,{})})}),(0,i.jsxs)(u.Z,{title:"COMMENTS",children:[(0,i.jsx)(p,{children:t.map(e=>(0,i.jsx)("li",{children:e.comment.replace(/<[^>]*>/g,"")},e.objectId))}),(0,i.jsx)(g,{children:(0,i.jsx)(d.w2,{onClick:()=>a(!0),children:"给我留言"})})]})]})}let p=s.ZP.div.withConfig({componentId:"sc-aff6b40b-0"})(_templateObject()),g=s.ZP.span.withConfig({componentId:"sc-aff6b40b-1"})(_templateObject1(),e=>e.theme.colors.textGray2,e=>e.theme.colors.textPrimary),f=s.ZP.div.withConfig({componentId:"sc-aff6b40b-2"})(_templateObject2())},5713:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ImageBrowser},useImgBroswerStore:function(){return g}});var r=n(1262),i=n(1527),a=n(889),o=n(8314),l=n(959),s=n(8598),c=n(6856),d=n(8852),m=n(5956),u=n(9946),h=n(1702);let p={isPressed:!1,startpos:[0,0,0],starttime:0,trans:[0,0],direction:0,bias:0},coord=e=>e.type.includes("touch")?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY},evtName=(e,t)=>e.type.includes("touch")?"move"===t?"touchmove":"touchend":"move"===t?"mousemove":"mouseup";function useDrag(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:17,[a,o]=(0,l.useState)(),[s,c]=(0,l.useState)([0,0]),[d,m]=(0,l.useState)(0),[u,g]=(0,l.useState)(!1),f=(0,l.useCallback)((e,t)=>n=>{if(n.stopPropagation(),n.target){p.isPressed=!0,p.starttime=Date.now(),p.startpos=[coord(n).x,coord(n).y,n.target.scrollTop];let r=n.target;n.type.includes("touch")&&r.addEventListener(evtName(n,"move"),e,{passive:!1}),r.addEventListener(evtName(n,"end"),t,{once:!0})}},[]),x=(0,l.useCallback)(e=>{if(e.stopPropagation(),e.type.includes("touch")&&e.touches.length>1){e.preventDefault();return}if(e.target&&p.isPressed){let t=coord(e).x-p.startpos[0],n=coord(e).y-p.startpos[1];if(p.trans=[t,n],0!==p.direction){let e="x"===p.direction?[t-p.bias,0]:[0,n-p.bias];c(e)}else if(Math.abs(t)>20||Math.abs(n)>20){let e=Math.abs(t)>Math.abs(n)?"x":"y";p.bias="x"===e?t:n,p.direction=e,m(e);let r="x"===e?[t-p.bias,0]:[0,n-p.bias];c(r)}}},[]),b=(0,l.useCallback)(i=>a=>{a.stopPropagation(),Date.now()-p.starttime<100&&5>Math.abs(p.trans[0])&&5>Math.abs(p.trans[1])?(g(!0),setTimeout(()=>{e.setisModel(!1),g(!1)},300)):"x"===p.direction&&(p.trans[0]<-60?n():p.trans[0]>60?t():r()),p.isPressed=!1,p.startpos=[0,0,0],p.trans=[0,0],c([0,0]),p.direction=0,p.bias=0,m(0),a.target.removeEventListener("touchmove",i)},[e,t,n,r]);return(0,l.useEffect)(()=>{let e=(0,h.P)(x,i),t=f(e,b(e));o(()=>t)},[b,x,f,i]),{trans:s,direction:d,isBeforeUnmount:u,bind:{onTouchStart:a,onMouseDown:a}}}function _templateObject(){let e=(0,r._)(["\n  position: absolute;\n  will-change: transform;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  display: block;\n  margin: 0 auto;\n  \n  &::after{\n    content: attr(alt);\n  }\n\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0.5rem;\n  right: 0.5rem;\n\n  height: 2.5rem;\n  border-radius: 1.25rem;\n  padding: 0 1rem;\n  background: #5b5b5bbd;\n  color: white;\n  backdrop-filter: blur(5px);\n\n  &:hover{\n    opacity: 1;\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  \n  position: fixed;\n  bottom: calc(50vh - 2.5rem);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0rem;\n  color: white;\n  opacity: 0.5;\n  background: #5b5b5bbd;\n  font-size: 1.25rem;\n  border-radius: 50%;\n  ","\n\n  @media screen and (max-width: 580px) {\n    ","\n    transition: left 0.3s linear, right 0.3s linear;\n  }\n\n  &:hover{\n    opacity: 1;\n    backdrop-filter: blur(5px);\n  }\n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n  width: 100%;\n  height: 100%;\n  overflow-x: initial;\n  overflow-y: hidden;\n  position: relative;\n  cursor: default;\n  will-change: transform;\n\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;	\n"]);return _templateObject4=function(){return e},e}let g=(0,c.Ue)(e=>({isModel:!1,setisModel:t=>e(()=>({isModel:t})),imagesData:[],setImagesData:t=>e(()=>({imagesData:t})),currentIndex:0,setCurrentIndex:t=>e(()=>({currentIndex:t}))}));function ImageBrowser(){let e=g(e=>e),t=g(e=>e.imagesData),[n,r]=(0,l.useState)({curr:g(e=>e.currentIndex),last:g(e=>e.currentIndex)});n.curr>t.length-1&&console.error("uncaught invalid image index:",n,"in length",t.length);let s=(0,l.useCallback)(()=>{n.curr>0&&r({curr:n.curr-1,last:n.curr})},[n,r]),c=(0,l.useCallback)(()=>{n.curr<t.length-1&&r({curr:n.curr+1,last:n.curr})},[n,r,t]),h=(0,l.useCallback)(()=>{},[]),p=(0,l.useCallback)(e=>{"ArrowLeft"===e.key?s():"ArrowRight"===e.key&&c()},[c,s]);(0,d.I)("keydown",p);let{bind:v,trans:y,direction:_,isBeforeUnmount:C}=useDrag(e,s,c,h,20),k=(0,l.useMemo)(()=>"x"===_&&y[0]>60,[y,_]),O=(0,l.useMemo)(()=>"x"===_&&y[0]<-60,[y,_]),I=(0,m.aA)(),M=(0,m.hV)(),P=(0,l.useMemo)(()=>"x"===_?{transition:"transform 0.05s linear",transform:"translate3d(".concat(y[0]-n.curr*M,"px, 0px, 0px)"),width:"".concat(M*t.length,"px")}:{transition:"transform 0.5s ease",transform:"translate3d(".concat(-n.curr*M,"px, 0px, 0px)"),width:"".concat(M*t.length,"px")},[y,_,n.curr,M,t.length]),S=(0,l.useMemo)(()=>C?{opacity:0,transition:"opacity 0.3s ease"}:{},[C]),Z=(0,l.useMemo)(()=>{let e=n.curr,r=e>0?{i:e-1,data:t[e-1]}:{i:e-1,data:void 0},i={i:e,data:t[e]},a=e+1<t.length?{i:e+1,data:t[e+1]}:{i:e+1,data:void 0};return[r,i,a]},[t,n.curr]),E=(0,l.useMemo)(()=>Z.map(e=>{let t=M*e.i,n={transform:"translateX(".concat(t,"px)"),width:"".concat(M,"px"),height:"100%"};if(e.data){let t=0===e.data.width||0===e.data.height?1:e.data.width/e.data.height;return t>.6||e.data.height<I?{...n,display:"flex",alignItems:"center"}:{...n,overflowY:"auto"}}return n}),[Z,I,M]),T=(0,l.useMemo)(()=>"x"===_?{overflowY:"hidden"}:{},[_]),N=(0,l.useCallback)(e=>{let t=0===e.width||0===e.height?1:e.width/e.height,n=t>=2?{maxWidth:M,maxHeight:.9*I+"px"}:t>.6||e.height<I?{maxWidth:M,maxHeight:I+"px"}:{maxWidth:.95*M};return n},[I,M]);return(0,i.jsxs)(u.Z,{isModel:!0,setModel:e.setisModel,style:{...S,background:"#1d1d1d"},children:[(0,i.jsx)(w,{...v,onClick:e=>e.stopPropagation(),style:P,children:Z.map((e,t)=>(0,i.jsx)(f,{style:{...E[t],...T},children:e.data&&(0,i.jsx)(x,{src:"loaded"===e.data.ok?e.data.src:"",alt:e.data.ok,style:N(e.data)})},e.i))}),n.curr>0&&(0,i.jsx)(j,{$isLeft:!0,$isShown:k,onClick:e=>{e.stopPropagation(),s()},children:(0,i.jsx)(a.Z,{})}),n.curr<t.length-1&&(0,i.jsx)(j,{$isLeft:!1,$isShown:O,onClick:e=>{e.stopPropagation(),c()},children:(0,i.jsx)(o.Z,{})}),(0,i.jsxs)(b,{children:[n.curr+1,"/",t.length," \xa0|\xa0",(0,i.jsx)("span",{onClick:t=>{t.stopPropagation(),e.setisModel(!1)},children:"关闭"})]})]})}let f=s.ZP.div.withConfig({componentId:"sc-bcdabc21-0"})(_templateObject()),x=s.ZP.img.withConfig({componentId:"sc-bcdabc21-1"})(_templateObject1()),b=s.ZP.div.withConfig({componentId:"sc-bcdabc21-2"})(_templateObject2()),j=s.ZP.div.withConfig({componentId:"sc-bcdabc21-3"})(_templateObject3(),e=>e.$isLeft?"left: 1rem;":"right: 1rem;",e=>e.$isLeft?e.$isShown?"left: 1rem;":"left: -2.5rem;":e.$isShown?"right: 1rem;":"right: -2.5rem;"),w=s.ZP.div.withConfig({componentId:"sc-bcdabc21-4"})(_templateObject4())},3852:function(e,t,n){"use strict";n.d(t,{l:function(){return MemoCard}});var r=n(1262),i=n(1527),a=n(959),o=n(8598),l=n(8476),s=n(3318),c=n(593),d=n(3433),m=n(1737),u=n(5713);function _templateObject(){let e=(0,r._)(["\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  height: 100%;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  border-radius: 0.5rem;\n  background: ",";\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 1;\n  cursor: zoom-in;\n  \n  user-select:none;\n  -webkit-user-select:none;\n\n  & img {\n    position: absolute;\n    -o-object-fit: cover;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  & img:after {\n    content: attr(alt);\n    background: ",";\n    color: ",";\n    font-weight: bold;\n    display: block;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    text-align: left;\n    padding: 1em;\n    word-break: break-all;\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n\n  @media screen and (max-width: 580px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n"]);return _templateObject2=function(){return e},e}function parseMarkdownImage(e){let t=/!\[(.*?)\]\((.*?)\)/.exec(e);if(!t)return null;{let e=t[1],n=t[2];return{alt:e,url:n}}}function Images(e){var t,n,r;let{imgsmd:o}=e,l=(0,u.useImgBroswerStore)(e=>e),[s,c]=(0,a.useState)(Array(o.length).fill(1).map((e,t)=>({ok:"loading",index:t,src:"",width:1,height:1,alt:""})));return((0,a.useEffect)(()=>{(async function(){let e=o.map(async(e,t)=>{let n;let r=parseMarkdownImage(e);if(!r)return{ok:"failed",index:t,src:"",width:0,height:0,alt:""};let{url:i,alt:a}=r,o=new Image,l=new Promise((e,n)=>{o.onload=()=>e(o),o.onerror=()=>n({ok:"failed",index:t,src:"",width:0,height:0,alt:a}),o.src=i});return(await l.catch(e=>{n=e}),n)?n:{ok:"loaded",index:t,src:i,width:o.width,height:o.height,alt:a}});try{let t=await Promise.all(e);c(t)}catch(e){console.error("Error loading images:",e)}})()},[o,c]),0===o.length)?null:(0,i.jsx)(i.Fragment,{children:1===o.length?(0,i.jsx)("div",{style:{height:"300px"},children:(0,i.jsxs)(p,{style:{maxWidth:"100%",height:"100%",aspectRatio:s[0]?s[0].width/s[0].height>2?2:s[0].width/s[0].height<.75?.75:s[0].width/s[0].height:2},children:[" ",(0,i.jsx)("img",{loading:"lazy",src:(null===(t=s[0])||void 0===t?void 0:t.ok)==="loaded"?null===(n=s[0])||void 0===n?void 0:n.src:"",alt:null===(r=s[0])||void 0===r?void 0:r.ok}),(0,i.jsx)(h,{onClick:e=>{e.stopPropagation(),l.setCurrentIndex(0),l.setImagesData(s),l.setisModel(!0)}})]})}):(0,i.jsx)(g,{children:s.map((e,t)=>(0,i.jsxs)(p,{onTouchEnd:e=>{e.stopPropagation()},children:[" ",(0,i.jsx)("img",{loading:"lazy",src:"loaded"===e.ok?e.src:"",alt:e.ok}),(0,i.jsx)(h,{onClick:e=>{e.stopPropagation(),console.debug("% click on",t),l.setCurrentIndex(t),l.setImagesData(s),l.setisModel(!0)}})]},t))})})}let h=o.ZP.div.withConfig({componentId:"sc-a3438d2f-0"})(_templateObject()),p=o.ZP.div.withConfig({componentId:"sc-a3438d2f-1"})(_templateObject1(),e=>e.theme.colors.bg2,e=>e.theme.colors.bg2,e=>e.theme.colors.uiLineGray),g=o.ZP.div.withConfig({componentId:"sc-a3438d2f-2"})(_templateObject2());function memocard_templateObject(){let e=(0,r._)(["\n\n  background:",";\n  margin: 0.5rem 0;\n  padding: 1.25rem 1.5rem;\n  border-radius: 1rem;\n  animation: "," .3s ease;\n\n  @media screen and (max-width: 780px) {\n    padding: 1.25rem 1.5rem;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 1.25rem 1rem;\n    border-radius: unset;\n  }\n  \n  & > .content {\n    position: relative;\n    height: ",";\n    overflow: hidden;\n    /* transition: height 0.5s ease; */\n  }\n"]);return memocard_templateObject=function(){return e},e}function memocard_templateObject1(){let e=(0,r._)(["\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 7rem;\n    text-align: right;\n    \n    color: ",";\n    ","\n\n    .rd-more {\n      margin-top: 5.375rem;\n      font-size: 0.875rem;\n      letter-spacing: 0.02rem;\n      padding: 0.2rem 0;\n      cursor: pointer;\n      span {\n        transition: box-shadow .3s;\n      }\n    }\n\n    & .rd-more:hover span {\n      ","\n    }\n   \n"]);return memocard_templateObject1=function(){return e},e}function memocard_templateObject2(){let e=(0,r._)(["\n    padding-left: 5px;\n\n    @media screen and (min-width: 580px){\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n    }\n\n    padding-bottom: ",";\n    \n    h1,h2,h3,h4,h5,h6 {\n      font-size: 1rem;\n    }\n\n    & .tag {\n      color: ",";\n    }\n\n    & .tag:hover {\n      cursor: pointer;\n      color: ",";\n    }\n"]);return memocard_templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n    display: flex;\n\n    & > .avatar {\n      width: 3rem;\n      height: 3rem;\n      border-radius: 50%;\n      border: 1px solid ",";\n\n      @media screen and (max-width: 580px){\n        width: 2.75rem;\n        height: 2.75rem;\n      }\n\n    }\n\n    & .meta{\n      margin-left: 0.5rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    & .date {\n      font-size: 0.85rem;\n      color: ",";\n    }\n\n    & .word-count {\n      position: absolute;\n      right: 0;\n    }\n"]);return _templateObject3=function(){return e},e}function MemoCard(e){let{source:t,setSearchText:n,triggerHeightChange:r,...s}=e,[c,d]=(0,a.useState)(!0),u=(0,a.useContext)(o.Ni),h=a.useRef(null),p=t.length>200;function handleExpand(e){if(!c){let e=h.current;if(e){let t=e.getBoundingClientRect().top;(t<0||t>window.innerHeight)&&globalThis.scrollTo({top:t+globalThis.scrollY})}}d(!c),h.current&&r&&r(!0)}return(0,i.jsxs)(f,{...s,$isCollapse:!1!==p&&c,ref:h,children:[(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)(j,{children:[(0,i.jsx)("img",{className:"avatar",src:u.assets.favico,alt:l.d.author}),(0,i.jsxs)("div",{className:"meta",children:[(0,i.jsx)("div",{children:l.d.author}),(0,i.jsxs)("div",{className:"date",children:[t.id,"\xa0\xa0",(0,i.jsxs)("span",{className:"word-count",children:[t.length,"\xa0字"]})]})]})]}),(0,i.jsx)(b,{$bottomSpace:p,children:(0,m.n)(t.code,n)}),(0,i.jsx)(x,{$isCollapse:c,$isShown:p,children:(0,i.jsx)("div",{onClick:handleExpand,className:"rd-more",children:(0,i.jsx)("span",{children:c?"SHOW MORE":"Hide"})})})]}),(0,i.jsx)("div",{style:{padding:"0 0.5rem"},children:(0,i.jsx)(Images,{imgsmd:t.imgsmd})})]})}let f=o.ZP.section.withConfig({componentId:"sc-a2ebd57c-0"})(memocard_templateObject(),e=>e.theme.colors.bg,s.r$,e=>!0===e.$isCollapse?"19rem":"auto"),x=o.ZP.div.withConfig({componentId:"sc-a2ebd57c-1"})(memocard_templateObject1(),e=>!0===e.$isShown?"block":"none",e=>e.theme.colors.accent,e=>!0===e.$isCollapse?e.theme.colors.maskGradient:"",()=>d.XC.f),b=(0,o.ZP)(c.j).withConfig({componentId:"sc-a2ebd57c-2"})(memocard_templateObject2(),e=>!0===e.$bottomSpace?"2rem":"inherit",e=>e.theme.colors.accent,e=>e.theme.colors.accentHover),j=o.ZP.div.withConfig({componentId:"sc-a2ebd57c-3"})(_templateObject3(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.textGray)},1812:function(e,t,n){"use strict";n.d(t,{Z:function(){return NavCard}});var r=n(1262),i=n(1527),a=n(8598);function _templateObject(){let e=(0,r._)(["\n  margin-top: 1.5rem;\n  padding-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  color:",";\n\n  .item {\n    padding: 0.25rem 0;\n    margin-right: 0.75rem;\n    border-right: 2px solid ",";\n  }\n\n  .item.active {\n    border-right: 2px solid ",";\n  }\n\n  .title {\n    font-weight: bold;\n    margin-right: 0.25rem;\n  }\n\n  .count {\n    font-size: 0.875rem;\n    color: ",";\n  }\n"]);return _templateObject=function(){return e},e}function NavCard(e){let{info:t}=e;return(0,i.jsxs)(o,{children:[(0,i.jsxs)("div",{className:"item active",children:[(0,i.jsx)("span",{className:"title",children:"Memos"}),(0,i.jsx)("span",{className:"count",children:t.memos})]}),(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("span",{className:"title",children:"Photos"}),(0,i.jsx)("span",{className:"count",children:t.imgs})]})]})}let o=a.ZP.section.withConfig({componentId:"sc-8c0df726-0"})(_templateObject(),e=>e.theme.colors.textPrimary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.accent,e=>e.theme.colors.textGray)},5376:function(e,t,n){"use strict";var r=n(1527),i=n(959),a=n(1702);function ListItem(e){let{Elem:t,index:n,source:o,placeHolder:l,setplaceHolder:s}=e,c=(0,i.useRef)(null),d=(0,i.useCallback)(()=>{if(c.current){let e=c.current.offsetHeight;s(t=>{if(t[n]===e||0===e)return t;let r=[...t];return r[n]=e,r})}},[c,s,n]);(0,i.useEffect)(()=>{let e=(0,a.P)(d,150);return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[c,n,s,d]);let[m,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{m&&(d(),u(!1))},[m,d]);let[h,p]=(0,i.useState)(!1);(0,i.useEffect)(()=>{d(),p(!0)},[c,d]);let g=(0,i.useMemo)(()=>l.slice(0,n).reduce((e,t)=>e+=t,0),[n,l]);return(0,r.jsx)("div",{ref:c,style:{position:"absolute",width:"100%",transform:"translateY(".concat(g,"px)"),visibility:h?"visible":"hidden"},children:t({source:o,triggerHeightChange:u})})}t.Z=e=>{let{sources:t,setSources:n,Elem:o,scrollRef:l,fetchFrom:s,batchsize:c}=e,[d,m]=(0,i.useState)(Array(t.length).fill(300)),[u,h]=(0,i.useState)(Array(t.length).fill(0).map((e,t)=>t)),[p,g]=(0,i.useState)(3*t.length),f=(0,i.useRef)({enable:!0}),x=(0,i.useMemo)(()=>d.reduce((e,t)=>e+=t,0),[d]),b=(0,i.useCallback)(e=>{let t=0;for(let n=0;n<e;n++)t+=d[n];return t},[d]);return(0,i.useEffect)(()=>{let e=null==l?void 0:l.current,r=(0,a.P)(()=>{if(!f.current.enable)return;let r=b(u[u.length-1])-b(u[0]),i=(e?e.scrollHeight:globalThis.scrollY)-b(u[0]),a=i/r;if(!isNaN(a)&&isFinite(a)&&!(a>1.5)){if(f.current={enable:!1},s&&a<.2){let e=u[0]-c;if(e<0){f.current={enable:!0};return}s(e,c).then(e=>{if(!e||0===e.length){f.current={enable:!0};return}let r=u.map(e=>e-u.length);if(e.length>u.length){let t=Array(e.length-u.length).fill(0).map((t,n)=>n-e.length+u.length+r[0]);r=t.concat(r)}else e.length<u.length&&(r=r.slice(u.length-e.length,u.length));let i=r.concat(u),a=e.concat(t);i.length>p&&(i.splice(0-r.length,r.length),a.splice(0-r.length,r.length)),h(i),n(a),f.current={enable:!0}})}else if(s&&a>.7){let e=u[u.length-1]+1;s(e,c).then(e=>{if(!e||0===e.length){f.current={enable:!0};return}let r=u.map(e=>e+u.length);if(e.length>u.length){let t=Array(e.length-u.length).fill(0).map((e,t)=>t+r[r.length-1]);r=r.concat(t)}else e.length<u.length&&(r=r.slice(0,e.length));if(r[r.length-1]>d.length-1){let e=Array(r[r.length-1]-d.length+1).fill(300);m(d.concat(e))}let i=u.concat(r),a=t.concat(e);i.length>p&&(i.splice(0,e.length),a.splice(0,e.length)),h(i),n(a),f.current={enable:!0}})}else f.current={enable:!0}}},500);return e?e.addEventListener("scroll",r):globalThis.addEventListener("scroll",r),()=>{e?e.addEventListener("scroll",r):globalThis.removeEventListener("scroll",r)}},[f,l,s,u,n,d,b,t,c,p]),(0,r.jsx)("div",{style:{position:"relative",width:"100%",minHeight:"".concat(x,"px")},children:t.map((e,t)=>(0,r.jsx)(ListItem,{index:u[t],Elem:o,source:e,placeHolder:d,setplaceHolder:m},e.id))})}},1024:function(e,t,n){"use strict";n.d(t,{e:function(){return createClient}});let r="/data/memos",getMemoInfo=async()=>fetch(r+"/status.json").then(e=>e.json()).then(e=>e),queryMemoByCount=async(e,t)=>{let n=[Math.floor(e/10),e%10],i=[Math.floor((e+t-1)/10),(e+t-1)%10],a=await getMemoInfo(),o=[];for(let e=n[0];e<=i[0];e++)e>=0&&e<=a.pages&&o.push("".concat(r,"/").concat(e,".json"));let l=o.map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>0===t?i[0]-n[0]!=0?e.slice(n[1]):e.slice(n[1],i[1]+1):t===i[0]?e.slice(0,i[1]+1):e));return(await Promise.all(l)).flat()},queryMemoByDate=async(e,t)=>{let n=await getMemoInfo(),i=n.pageMap.filter(n=>{if(n.endDate<e.getTime()||n.startDate>t.getTime())return!1}),a=i.map(e=>"".concat(r,"/").concat(e,".json")),o=a.map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>e));return(await Promise.all(o)).flat()},queryMemoTags=async()=>fetch("".concat(r,"/tags.json")).then(e=>e.json()),queryMemoImgs=async()=>[],i={static:{getMemoInfo,queryMemoByCount,queryMemoByDate,queryMemoTags,queryMemoImgs}};function createClient(e){return i[e]||console.error("[client.ts] client ".concat(e," not in clientList")),i[e]}},5534:function(e,t,n){"use strict";n.d(t,{n5:function(){return compileMdxMemo}}),n(959),n(9995),n(1527);var r=n(6276),i=n(3535),a=n(5709);function remarkTag(){return function(e){(0,a.Vn)(e,function(e,t,n){if("paragraph"===e.type){let t=[];e.children.forEach(e=>{if("text"===e.type){let n=e.value,r=extractTags(n),i=r.map(e=>"#"+e+" ");if(r.length>0){let e=flatsplit(n,i),a="#"+r[r.length-1],o=e[e.length-1].text;o.endsWith(a)&&(e[e.length-1]={text:o.slice(0,o.length-a.length),isDelimiter:!1},e.push({text:a,isDelimiter:!0})),e.forEach(e=>{if(e.isDelimiter){let n={type:"mdxJsxFlowElement",name:"Tag",attributes:[{type:"mdxJsxAttribute",name:"text",value:e.text.slice(1)}]};t.push(n)}else t.push({type:"text",value:e.text})})}else t.push(e)}else t.push(e)}),e.children=t}})}}function flatsplit(e,t){if(t.includes(e))return[{text:e,isDelimiter:!0}];let n=[{text:e,isDelimiter:!1}];for(let e of t){let t=[];for(let r of n){if(r.isDelimiter){t.push(r);continue}let n=r.text.split(e);for(let r=0;r<n.length&&(t.push({text:n[r],isDelimiter:!1}),r!==n.length-1||""===n[r]);r++)t.push({text:e,isDelimiter:!0})}n=t}return n.filter(e=>""!==e.text)}function extractTags(e){let t;let n=/#([^\s#]+)(?![^\[]*\])/g,r=[];for(;null!==(t=n.exec(e));){let e=t[1];e.length<=14&&r.push(e)}return r}async function compileImport(){return(await Promise.all([n.e(54),n.e(291),n.e(467)]).then(n.bind(n,3467))).compile}async function compileMdxMemo(e){let t=await compileImport(),n=String(await t(e,{outputFormat:"function-body",remarkPlugins:[i.Z,remarkTag],rehypePlugins:[r.Z]}));return{code:n}}},8852:function(e,t,n){"use strict";n.d(t,{I:function(){return useDocumentEvent}});var r=n(959);function useDocumentEvent(e,t,n,i){(0,r.useEffect)(()=>(document.addEventListener(e,t,n),()=>{document.removeEventListener(e,t,n)}),[e,t,n,...i||[]])}},420:function(e,t,n){"use strict";n.a(e,async function(e,r){try{var i=n(959),a=n(8852);let e=await n.e(828).then(n.bind(n,3828)).then(e=>e.createNaive);function useSearch(t){let{inputRef:n,setRes:r,initData:o}=t,[l,s]=(0,i.useState)(),[c,d]=(0,i.useState)({isSearch:"ready",searchText:""}),m=(0,i.useCallback)(async()=>{let t;console.debug("%% init search...");let{searchObj:n,filterRes:i}=await o();function notifier(e){let t=i(e);Promise.all(t).then(e=>{r(e),d(e=>({...e,isSearch:"done"}))})}return t=e({data:n,field:["tags","content"],notifier,disableStreamNotify:!0}),s(t),d(e=>({...e})),t},[o,r]),u=(0,i.useCallback)(async()=>{if(!n.current)return;let e=n.current.value.trim();if(0===e.length)return;d(t=>({...t,isSearch:"searching",searchText:e})),globalThis.scrollTo({top:0});let t=l;t||(t=await m()),t.search(e.split(" "))},[m,l,n]),h=(0,i.useCallback)(function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];n.current&&(n.current.value=e,t&&u())},[u,n]);return(0,a.I)("keydown",e=>{n.current&&n.current===document.activeElement&&"Enter"===e.key&&u()},void 0,[u]),{searchStatus:c,setsearchStatus:d,setSearchText:h,handleSearch:u,initSearch:m}}t.Z=useSearch,r()}catch(e){r(e)}},1)},7782:function(e,t,n){"use strict";n.a(e,async function(e,r){try{n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return Memos}});var i=n(1262),a=n(1527),o=n(67),l=n(5849),s=n.n(l),c=n(3522),d=n.n(c),m=n(959),u=n(8598),h=n(4085),p=n(972),g=n(2723),f=n(1060),x=n(3797),b=n(4247),j=n(6918),w=n(5713),v=n(3852),y=n(1812),_=n(5376),C=n(1024),k=n(5534),O=n(420),I=n(8476),M=n(4618),P=e([O]);function _templateObject(){let e=(0,i._)(["\n  max-width: 1080px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 780px) {\n    max-width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,i._)(["\n  width: 100%;\n  padding: 86px 16px 48px 16px;\n  align-self: flex-end;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 1080px) {\n    max-width: 700px;\n  }\n\n\n  @media screen and (max-width: 780px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 86px 0 48px 0;\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,i._)(["\n  max-width: 15rem;\n  padding-top: 100px;\n  padding-bottom: 64px;\n  margin: 0 0.5rem;\n  position: sticky;\n\n  height: 100vh;\n  overflow-y: auto;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  \n  @media screen and (max-width: 1080px) {\n    margin: 0;\n  }\n\n  @media screen and (max-width: 780px) {\n    max-width: unset;\n    display: none;\n  }\n\n  /* util class */\n  .hover-gold {\n    padding: 3px 5px;\n    cursor: pointer;\n  }\n\n  .hover-gold:hover {\n    color: ",";\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,i._)(["\n  border: 1px solid ",";\n  border-radius: 1em;\n  padding-left: 1em;\n  background: ",";\n  color: ",";\n  width:  0;\n  flex: 2 1 0;\n  line-height: 1.7rem;\n  font-size: 0.9rem;\n\n\n  &:focus,\n  &:focus-visible{\n    outline: none;\n    border: 1px solid ",";\n  }\n"]);return _templateObject3=function(){return e},e}O=(P.then?(await P)():P)[0];let Z=s()(()=>Promise.resolve().then(n.bind(n,5713)),{loadableGenerated:{webpack:()=>[5713]}});var S=!0;function Memos(e){let{source:t,info:n,memotags:r,client:i}=e,l=(0,m.useContext)(u.Ni),[s,c]=(0,m.useState)(t),[P,S]=(0,m.useState)(t),L=(0,w.useImgBroswerStore)(e=>e.isModel),[H,z]=(0,m.useState)((0,C.e)(i)),$=(0,m.useCallback)(async(e,t)=>H.queryMemoByCount(e,t).then(e=>e.length>0?Promise.all(e.map(async e=>({...e,length:e.content.length,code:(await (0,k.n5)(e.content)).code}))):void 0),[H]),A=(0,m.useRef)(null),{searchStatus:R,setsearchStatus:G,setSearchText:B,handleSearch:F,initSearch:q}=(0,O.Z)({inputRef:A,setRes:c,initData:async()=>{let e=Array.from({length:n.pages+1},(e,t)=>"".concat("/data/memos","/").concat(t,".json")),t=e.map(e=>fetch(e).then(e=>e.json())),r=await Promise.all(t),i=r.flatMap(e=>e),a=i.map(e=>({id:e.id,title:"",content:e.content,tags:e.tags}));return{searchObj:a,filterRes:e=>{let t=e.map(e=>e.id),n=i.filter(e=>!!t.includes(e.id)).map(async e=>({...e,code:(await (0,k.n5)(e.content)).code,length:e.content.length}));return n}}}});function statusRender(){switch(R.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,a.jsxs)(a.Fragment,{children:["Results: ",s.length," memos",(0,a.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{G(e=>({...e,isSearch:"ready",searchText:""})),c(P)},children:"X"})]})}}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d(),{children:[(0,a.jsx)("title",{children:"".concat(I.d.author," - Memos")}),(0,a.jsx)(h.CommonHead,{})]}),(0,a.jsx)(f.Z,{placeHolder:!1,hideSearch:!0}),(0,a.jsxs)("main",{style:{backgroundColor:null==l?void 0:l.colors.bg2},children:[(0,a.jsx)(E,{children:(0,a.jsxs)(x.Uq,{sep:1,siderLocation:"right",children:[(0,a.jsxs)(T,{children:[(0,a.jsx)(g.H,{style:{marginRight:"1rem"},children:statusRender()}),(0,a.jsx)("div",{style:{minHeight:"100vh"},children:"ready"===R.isSearch?(0,a.jsx)(_.Z,{sources:s,setSources:c,Elem:e=>(0,a.jsx)(v.l,{source:e.source,setSearchText:B,triggerHeightChange:e.triggerHeightChange}),fetchFrom:$,batchsize:10},"vl1"):"done"===R.isSearch?(0,a.jsx)(_.Z,{sources:s,setSources:c,Elem:e=>(0,a.jsx)(v.l,{source:e.source,setSearchText:B,triggerHeightChange:e.triggerHeightChange}),batchsize:10},R.searchText):null}),(0,a.jsx)(p.Z,{})]}),(0,a.jsxs)(N,{children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsx)(D,{type:"text",placeholder:"Search",ref:A,onFocus:()=>{q()}}),(0,a.jsx)(b.b,{className:"hover-gold",style:{fontSize:"1.275em",marginLeft:"0.125em"},onClick:F,children:(0,a.jsx)(o.Z,{})})]}),(0,a.jsx)(y.Z,{info:n}),(0,a.jsx)(b.Z,{title:"TAGS",children:(0,a.jsx)("div",{style:{paddingTop:"0.5rem"},children:r.map(e=>(0,a.jsx)("span",{className:"hover-gold",style:{display:"inline-block"},onClick:()=>{B("#"+e.name)},children:"#".concat(e.name)},e.name))})}),I.d.friends&&(0,a.jsx)(b.Z,{title:"FRIENDS",children:(0,a.jsx)("div",{style:{padding:"0.5rem 0.25rem"},children:I.d.friends.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(M.IM,{href:e.link,children:e.name})},t))})}),I.d.walineApi&&""!==I.d.walineApi&&(0,a.jsx)(j.Z,{})]})]})}),L&&(0,a.jsx)(Z,{})]})]})}let E=u.ZP.div.withConfig({componentId:"sc-5fdfe295-0"})(_templateObject()),T=u.ZP.div.withConfig({componentId:"sc-5fdfe295-1"})(_templateObject1()),N=u.ZP.div.withConfig({componentId:"sc-5fdfe295-2"})(_templateObject2(),e=>e.theme.colors.accent),D=u.ZP.input.withConfig({componentId:"sc-5fdfe295-3"})(_templateObject3(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover);r()}catch(e){r(e)}})}},function(e){e.O(0,[774,746,966,797,406,888,179],function(){return e(e.s=83)}),_N_E=e.O()}]);