(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{9726:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return n(6477)}])},4046:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var i=n(4584),r=n(3732),o=n(1297),s=n(3841);function a(e){let{isModel:t,setModel:n,scrollRef:o,style:a,...c}=e,d=(0,s.eh)(),h=(0,r.useMemo)(()=>a?{...a,height:d+"px"}:{height:d+"px"},[a,d]);return(0,r.useEffect)(()=>(t?o?o.style.overflow="hidden":document.body.style.overflow="hidden":o?o.style.overflow="auto":document.body.style.overflow="auto",()=>{o?o.style.overflow="auto":document.body.style.overflow="auto"}),[t,o]),t&&(0,i.jsx)(l,{...c,$isOpen:t,onClick:e=>{e.stopPropagation(),n(!1)},style:h})}let l=o.Ay.div.withConfig({componentId:"sc-87e6eb4f-0"})(["position:fixed;top:0;left:0;width:100vw;background:#000000de;z-index:10;cursor:zoom-out;will-change:transform;"])},3737:(e,t,n)=>{"use strict";n.d(t,{K:()=>i});let i=n(1297).Ay.div.withConfig({componentId:"sc-47295c3a-0"})(["font-style:italic;font-size:0.875rem;color:",";text-align:right;"],e=>e.theme.colors.textGray2)},8024:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f,useImageBroswerStore:()=>x});var i=n(4584),r=n(1667),o=n(6714),s=n(3732),a=n(1297),l=n(7349),c=n(926),d=n(3841),h=n(4046),m=n(5749);let u={isPressed:!1,startpos:[0,0,0],starttime:0,trans:[0,0],direction:0,bias:0},g=e=>e.type.includes("touch")?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY},p=(e,t)=>e.type.includes("touch")?"move"===t?"touchmove":"touchend":"move"===t?"mousemove":"mouseup",x=(0,l.v)(e=>({isModel:!1,setisModel:t=>e(()=>({isModel:t})),imagesData:[],setImagesData:t=>e(()=>({imagesData:t})),currentIndex:0,setCurrentIndex:t=>e(()=>({currentIndex:t}))}));function f(){let e=x(e=>e),t=x(e=>e.imagesData),[n,a]=(0,s.useState)({curr:x(e=>e.currentIndex),last:x(e=>e.currentIndex)});n.curr>t.length-1&&console.error("uncaught invalid image index:",n,"in length",t.length);let l=(0,s.useCallback)(()=>{n.curr>0&&a({curr:n.curr-1,last:n.curr})},[n,a]),f=(0,s.useCallback)(()=>{n.curr<t.length-1&&a({curr:n.curr+1,last:n.curr})},[n,a,t]),k=(0,s.useCallback)(()=>{},[]),C=(0,s.useCallback)(e=>{"ArrowLeft"===e.key?l():"ArrowRight"===e.key&&f()},[f,l]);(0,c.z)("keydown",C);let{bind:S,trans:A,direction:I,isBeforeUnmount:M}=function(e,t,n,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:17,[o,a]=(0,s.useState)(),[l,c]=(0,s.useState)([0,0]),[d,h]=(0,s.useState)(0),[x,f]=(0,s.useState)(!1),b=(0,s.useCallback)((e,t)=>n=>{if(n.stopPropagation(),("mousedown"!==n.type||0==n.button)&&(n.preventDefault(),n.target)){u.isPressed=!0,u.starttime=Date.now(),u.startpos=[g(n).x,g(n).y,n.target.scrollTop];let i=n.target;i.addEventListener(p(n,"move"),e,{passive:!1}),i.addEventListener(p(n,"end"),t,{once:!0})}},[]),y=(0,s.useCallback)(e=>{if(e.stopPropagation(),e.type.includes("touch")&&e.touches.length>1){e.preventDefault();return}if(e.target&&u.isPressed){let t=g(e).x-u.startpos[0],n=g(e).y-u.startpos[1];if(u.trans=[t,n],0!==u.direction)c("x"===u.direction?[t-u.bias,0]:[0,n-u.bias]);else if(Math.abs(t)>20||Math.abs(n)>20){let e=Math.abs(t)>Math.abs(n)?"x":"y";u.bias="x"===e?t:n,u.direction=e,h(e),c("x"===e?[t-u.bias,0]:[0,n-u.bias])}}},[]),w=(0,s.useCallback)(r=>o=>{o.stopPropagation(),Date.now()-u.starttime<140&&5>Math.abs(u.trans[0])&&5>Math.abs(u.trans[1])?(f(!0),setTimeout(()=>{e.setisModel(!1),f(!1)},300)):"x"===u.direction&&(u.trans[0]<-60?n():u.trans[0]>60?t():i()),u.isPressed=!1,u.startpos=[0,0,0],u.trans=[0,0],c([0,0]),u.direction=0,u.bias=0,h(0),o.target.removeEventListener(p(o,"move"),r)},[e,t,n,i]);return(0,s.useEffect)(()=>{let e=(0,m.n)(y,r),t=b(e,w(e));a(()=>t)},[w,y,b,r]),{trans:l,direction:d,isBeforeUnmount:x,bind:{onTouchStart:o,onMouseDown:o}}}(e,l,f,k,20),E=(0,s.useMemo)(()=>"x"===I&&A[0]>60,[A,I]),T=(0,s.useMemo)(()=>"x"===I&&A[0]<-60,[A,I]),P=(0,d.eh)(),N=(0,d.XE)(),D=(0,s.useMemo)(()=>"x"===I?{transition:"transform 0.05s linear",transform:"translate3d(".concat(A[0]-n.curr*N,"px, 0px, 0px)"),width:"".concat(N*t.length,"px")}:{transition:"transform 0.5s ease",transform:"translate3d(".concat(-n.curr*N,"px, 0px, 0px)"),width:"".concat(N*t.length,"px")},[A,I,n.curr,N,t.length]),L=(0,s.useMemo)(()=>M?{opacity:0,transition:"opacity 0.3s ease"}:{},[M]),z=(0,s.useMemo)(()=>{let e=n.curr;return[e>0?{i:e-1,data:t[e-1]}:{i:e-1,data:void 0},{i:e,data:t[e]},e+1<t.length?{i:e+1,data:t[e+1]}:{i:e+1,data:void 0}]},[t,n.curr]),R=(0,s.useMemo)(()=>z.map(e=>{let t=N*e.i,n={transform:"translateX(".concat(t,"px)"),width:"".concat(N,"px"),height:"100%"};return e.data?(0===e.data.width||0===e.data.height?1:e.data.width/e.data.height)>.6||e.data.height<P?{...n,display:"flex",alignItems:"center"}:{...n,overflowY:"auto"}:n}),[z,P,N]),$=(0,s.useMemo)(()=>"x"===I?{overflowY:"hidden"}:{},[I]),G=(0,s.useCallback)(e=>{let t=0===e.width||0===e.height?1:e.width/e.height;return t>=2?{maxWidth:N,maxHeight:.9*P+"px"}:t>.6||e.height<P?{maxWidth:N,maxHeight:P+"px"}:{maxWidth:.95*N}},[P,N]);return(0,i.jsxs)(h.A,{isModel:!0,setModel:e.setisModel,style:{...L,background:"#1d1d1d"},children:[(0,i.jsx)(j,{...S,onClick:e=>e.stopPropagation(),style:D,children:z.map((e,t)=>(0,i.jsx)(b,{style:{...R[t],...$},children:e.data&&(0,i.jsx)(y,{src:"loaded"===e.data.ok?e.data.src:"",alt:e.data.ok,style:G(e.data)})},e.i))}),n.curr>0&&(0,i.jsx)(v,{$isLeft:!0,$isShown:E,onClick:e=>{e.stopPropagation(),l()},children:(0,i.jsx)(r.A,{})}),n.curr<t.length-1&&(0,i.jsx)(v,{$isLeft:!1,$isShown:T,onClick:e=>{e.stopPropagation(),f()},children:(0,i.jsx)(o.A,{})}),(0,i.jsxs)(w,{children:[n.curr+1,"/",t.length," \xa0|\xa0",(0,i.jsx)("span",{onClick:t=>{t.stopPropagation(),e.setisModel(!1)},children:"关闭"})]})]})}let b=a.Ay.div.withConfig({componentId:"sc-74a0f7de-0"})(["position:absolute;will-change:transform;"]),y=a.Ay.img.withConfig({componentId:"sc-74a0f7de-1"})(["display:block;margin:0 auto;&::after{content:attr(alt);}"]),w=a.Ay.div.withConfig({componentId:"sc-74a0f7de-2"})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0.5rem;right:0.5rem;height:2.5rem;border-radius:1.25rem;padding:0 1rem;background:#5b5b5bbd;color:white;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);&:hover{opacity:1;}"]),v=a.Ay.div.withConfig({componentId:"sc-74a0f7de-3"})(["position:fixed;bottom:calc(50vh - 2.5rem);display:flex;justify-content:center;align-items:center;cursor:pointer;width:2.5rem;height:2.5rem;padding:0rem;color:white;opacity:0.5;background:#5b5b5bbd;font-size:1.25rem;border-radius:50%;"," @media screen and (max-width:580px){"," transition:left 0.3s linear,right 0.3s linear;}&:hover{opacity:1;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);}"],e=>e.$isLeft?"left: 1rem;":"right: 1rem;",e=>e.$isLeft?e.$isShown?"left: 1rem;":"left: -2.5rem;":e.$isShown?"right: 1rem;":"right: -2.5rem;"),j=a.Ay.div.withConfig({componentId:"sc-74a0f7de-4"})(["width:100%;height:100%;overflow-x:clip;overflow-y:hidden;position:relative;cursor:default;will-change:transform;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"])},6477:(e,t,n)=>{"use strict";let i;n.r(t),n.d(t,{MemoCSRAPI:()=>ek,__N_SSG:()=>ej,default:()=>eC});var r=n(4584),o=n(2569),s=n(2948),a=n(2562),l=n(4808),c=n(130),d=n(6504),h=n(2112),m=n.n(h),u=n(3575),g=n.n(u),p=n(3732),x=n(3025),f=n(1297),b=n(8853),y=n(3424),w=n(4738),v=n(5217);function j(e){let{title:t,Icon:n,children:i,...o}=e;return(0,r.jsxs)(k,{...o,children:[(0,r.jsxs)(C,{children:[n&&(0,r.jsx)(n,{size:"1em",style:{marginRight:"0.5em"}}),t]}),(0,r.jsx)("div",{style:{paddingTop:"0.5rem",fontSize:"0.9rem"},children:i})]})}let k=f.Ay.section.withConfig({componentId:"sc-8d318c76-0"})(["margin-top:1.5rem;padding:0.5rem 1rem;line-height:1.625rem;color:",";"],e=>e.theme.colors.textSecondary),C=f.Ay.div.withConfig({componentId:"sc-8d318c76-1"})(["font-weight:600;text-transform:uppercase;font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray2);var S=n(8849),A=n(1595),I=n(2226),M=n(6539),E=n(6856),T=n(4046);let P=m()(()=>Promise.all([n.e(449),n.e(343),n.e(43),n.e(126),n.e(199)]).then(n.bind(n,6199)),{loadableGenerated:{webpack:()=>[6199]}});function N(){let e=(0,p.useContext)(f.Dx),[t,n]=(0,p.useState)([{objectId:"0x00",comment:"等等，好像没有评论哦~"}]),[i,o]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{let e=encodeURIComponent(globalThis.location.pathname);fetch(M.E.walineApi+"/comment?path="+e+"&pageSize=10&page=1&lang=en-US&sortBy=insertedAt_desc").then(e=>e.json()).then(e=>{n(e.data)})},[]),(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsx)(T.A,{isModel:i,setModel:o,style:{background:null==e?void 0:e.colors.bgMask},children:(0,r.jsx)(z,{children:(0,r.jsx)(P,{onClick:e=>e.stopPropagation()})})}),(0,r.jsxs)(j,{title:S.Ay.t("latestcomments"),Icon:A.A,children:[(0,r.jsx)(D,{children:t.map(e=>(0,r.jsx)("li",{children:e.comment.replace(/<[^>]*>/g,"")},e.objectId))}),(0,r.jsxs)(L,{children:[(0,r.jsx)(I.A,{size:"1em",style:{marginRight:"0.5em"}}),(0,r.jsx)("span",{onClick:()=>o(!0),children:"添加留言"})]})]})]})}let D=f.Ay.div.withConfig({componentId:"sc-66d576dc-0"})(["font-size:0.9rem;li{list-style:none;height:1.5em;overflow:hidden;}"]),L=f.Ay.button.withConfig({componentId:"sc-66d576dc-1"})(["margin-top:2rem;max-width:8rem;padding:0.5rem 1rem;border-radius:0.75rem;border:1px solid ",";font-weight:600;color:",";cursor:pointer;background:",";box-shadow:0 0 12px 0 ",";@media screen and (max-width:780px){max-width:unset;background:",";}&:hover{color:",";","}"],e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.textSecondary,e=>e.theme.colors.bg,e=>e.theme.colors.shadowBg,e=>e.theme.colors.bg2,e=>e.theme.colors.accent,E.Yq),z=f.Ay.div.withConfig({componentId:"sc-66d576dc-2"})(["height:100%;width:100%;padding-top:64px;overflow-y:auto;&>div{max-width:min(90%,640px);cursor:default;}"]);var R=n(8024);let $="/data/memos",G=async()=>fetch($+"/status.json").then(e=>e.json()).then(e=>e),H=async(e,t)=>{let n=[Math.floor(e/10),e%10],i=[Math.floor((e+t-1)/10),(e+t-1)%10],r=await G(),o=[];for(let e=n[0];e<=i[0];e++)e>=0&&e<=r.pages&&o.push("".concat($,"/").concat(e,".json"));let s=o.map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>0===t?i[0]-n[0]!=0?e.slice(n[1]):e.slice(n[1],i[1]+1):t===i[0]?e.slice(0,i[1]+1):e));return(await Promise.all(s)).flat()},B=async(e,t)=>{let n=(await G()).pageMap.filter(n=>{if(n.endDate<e.getTime()||n.startDate>t.getTime())return!1}).map(e=>"".concat($,"/").concat(e,".json")).map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>e));return(await Promise.all(n)).flat()},_={static:{getMemoInfo:G,queryMemoByCount:H,queryMemoByDate:B,queryMemoTags:async()=>fetch("".concat($,"/tags.json")).then(e=>e.json()),queryMemoImgs:async()=>[]}};n(248);var F=n(2215),Y=n(3170),O=n(459);function W(){return function(e){(0,O.YR)(e,"paragraph",function(e,t,n){let i=[];e.children.forEach(e=>{if("text"===e.type){let t=e.value,n=function(e){let t=["#","##","###","####","#####","######"],n=[],i="",r=!1;for(let o=0;o<e.length;o++){let s=e[o];"`"===s&&(r=!r)&&(i=""),r||(i.length>0?" "===s||"\n"===s||"\r\n"===s?(t.includes(i)||n.push(i),i=""):i+=s:"#"!==s||0!==o&&" "!==e[o-1]&&"\n"!==e[o-1]||(i+=s))}return i.length>0&&n.push(i),n}(t);if(n.length>0){let e=function(e,t){if(t.includes(e))return[{text:e,isDelimiter:!0}];let n=[{text:e,isDelimiter:!1}];for(let e of t){let t=[];for(let i of n){if(i.isDelimiter){t.push(i);continue}if(""===i.text)continue;let n=i.text.split(e);for(let i=0;i<n.length&&(t.push({text:n[i],isDelimiter:!1}),i!==n.length-1);i++)t.push({text:e,isDelimiter:!0})}n=t}return n.filter(e=>""!==e.text)}(t,n),r="#"+n[n.length-1],o=e[e.length-1].text;o.endsWith(r)&&(e[e.length-1]={text:o.slice(0,o.length-r.length),isDelimiter:!1},e.push({text:r,isDelimiter:!0})),e.forEach(e=>{if(e.isDelimiter){let t={type:"mdxJsxFlowElement",name:"Tag",attributes:[{type:"mdxJsxAttribute",name:"text",value:e.text.slice(1)}]};i.push(t)}else i.push({type:"text",value:e.text})})}else i.push(e)}else i.push(e)}),e.children=i})}}var X=function(e){return e[e.Unknown=0]="Unknown",e[e.isImgOnly=1]="isImgOnly",e[e.Other=2]="Other",e}(X||{});let q=async()=>{i||(i=await Promise.all([n.e(792),n.e(920),n.e(467)]).then(n.bind(n,7467)).then(e=>e.compile),await Promise.all([n.e(792),n.e(920),n.e(467)]).then(n.bind(n,7467)).then(e=>e.runSync))};async function U(e){i||await q();try{return{code:String(await i(e,{outputFormat:"function-body",remarkPlugins:[Y.A,W],rehypePlugins:[F.A]}))}}catch(e){return console.error("%% [mdx.ts ]error occured when compiling:",e),{code:"compile error"}}}var J=n(9256),K=n(3737),Q=n(6750),V=n(1992),Z=n(8123),ee=n(3296);function et(e){var t,n,i;let{imgsmd:o}=e,s=(0,R.useImageBroswerStore)(e=>e),[a,l]=(0,p.useState)(Array(o.length).fill(1).map((e,t)=>({ok:"loading",index:t,src:"",width:1,height:1,alt:""})));return((0,p.useEffect)(()=>{(async function(){let e=o.map(async(e,t)=>{let n;let i=function(e){let t=/!\[(.*?)\]\((.*?)\)/.exec(e);return t?{alt:t[1],url:t[2]}:null}(e);if(!i)return{ok:"failed",index:t,src:"",width:0,height:0,alt:""};let{url:r,alt:o}=i,s=new Image,a=new Promise((e,n)=>{s.onload=()=>e(s),s.onerror=()=>n({ok:"failed",index:t,src:"",width:0,height:0,alt:o}),s.src=r});return(await a.catch(e=>{n=e}),n)?n:{ok:"loaded",index:t,src:r,width:s.width,height:s.height,alt:o}});try{let t=await Promise.all(e);l(t)}catch(e){console.error("Error loading images:",e)}})()},[o,l]),0===o.length)?null:(0,r.jsx)(r.Fragment,{children:1===o.length?(0,r.jsx)("div",{style:{height:"250px",paddingLeft:"48px"},children:(0,r.jsxs)(ei,{style:{maxWidth:"100%",height:"100%",aspectRatio:a[0]?a[0].width/a[0].height>2.5?2.5:a[0].width/a[0].height<.75?.75:a[0].width/a[0].height:2},children:[" ",(0,r.jsx)("img",{loading:"lazy",src:(null===(t=a[0])||void 0===t?void 0:t.ok)==="loaded"?null===(n=a[0])||void 0===n?void 0:n.src:"",alt:null===(i=a[0])||void 0===i?void 0:i.ok}),(0,r.jsx)(en,{onClick:e=>{e.stopPropagation(),s.setCurrentIndex(0),s.setImagesData(a),s.setisModel(!0)}})]})}):(0,r.jsx)(er,{children:a.map((e,t)=>(0,r.jsxs)(ei,{onTouchEnd:e=>{e.stopPropagation()},children:[" ",(0,r.jsx)("img",{loading:"lazy",src:"loaded"===e.ok?e.src:"",alt:e.ok}),(0,r.jsx)(en,{onClick:e=>{e.stopPropagation(),s.setCurrentIndex(t),s.setImagesData(a),s.setisModel(!0)}})]},t))})})}let en=f.Ay.div.withConfig({componentId:"sc-4ad7da48-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),ei=f.Ay.div.withConfig({componentId:"sc-4ad7da48-1"})(["border-radius:0.5rem;background:",";position:relative;overflow:hidden;aspect-ratio:1;cursor:zoom-in;user-select:none;-webkit-user-select:none;& img{position:absolute;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;top:0;left:0;}& img:after{content:attr(alt);background:",";color:",";font-weight:bold;display:block;position:absolute;top:0;height:100%;width:100%;text-align:left;padding:1em;word-break:break-all;}"],e=>e.theme.colors.bg2,e=>e.theme.colors.bg2,e=>e.theme.colors.uiLineGray),er=f.Ay.div.withConfig({componentId:"sc-4ad7da48-2"})(["display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:8px;padding-left:48px;@media screen and (max-width:580px){grid-template-columns:repeat(3,1fr);}"]);function eo(e){let{source:t,setSearchText:n,triggerHeightChange:i,...o}=e,[s,a]=(0,p.useState)(!0),l=(0,p.useContext)(f.Dx),c=p.useRef(null),d=t.length>200,h=(0,p.useMemo)(()=>{let e=new Date(t.id);return"Invalid Date"!==e.toString()?(0,Q.Wm)(e):t.id},[t.id]);return(0,r.jsxs)(ea,{...o,$isCollapse:!1!==d&&s,ref:c,children:[(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)(ed,{children:[(0,r.jsx)("img",{className:"avatar",src:l.assets.favico,alt:M.E.author}),(0,r.jsxs)("div",{className:"meta-text",children:[(0,r.jsx)("span",{className:"author",children:M.E.author}),(0,r.jsx)("span",{className:"meta-sm date",children:h}),(0,r.jsxs)("span",{className:"meta-sm word-count",children:[t.length,"\xa0字"]})]})]}),(0,r.jsx)(ec,{$bottomSpace:d,children:(0,Z.d)(t.code,n)}),(0,r.jsx)(el,{$isCollapse:s,$isShown:d,children:(0,r.jsx)("div",{onClick:function(e){if(!s){let e=c.current;if(e){let t=e.getBoundingClientRect().top;(t<0||t>window.innerHeight)&&globalThis.scrollTo({top:t+globalThis.scrollY})}}a(!s),c.current&&i&&i(!0)},className:"rd-more",children:(0,r.jsx)("span",{children:s?"展开全文":"收起"})})})]}),0!==t.imgsmd.length&&(0,r.jsx)(et,{imgsmd:t.imgsmd})]})}function es(){return(0,r.jsx)(ea,{$isCollapse:!1,children:(0,r.jsx)("span",{style:{opacity:.35,fontWeight:"bold"},children:"Loading..."})})}let ea=f.Ay.section.withConfig({componentId:"sc-418c6f7-0"})(["background:",";padding:1.25rem 1.5rem;animation:"," .3s ease;@media screen and (max-width:580px){padding:1rem;border-radius:unset;}& > .content{position:relative;height:",";overflow:hidden;}"],e=>e.theme.colors.bg,V.Nd,e=>!0===e.$isCollapse?"18.2rem":"auto"),el=f.Ay.div.withConfig({componentId:"sc-418c6f7-1"})(["display:",";position:absolute;bottom:0;width:100%;height:7rem;text-align:right;color:",";"," .rd-more{font-size:0.875rem;letter-spacing:0.02rem;margin-top:5.5rem;;cursor:pointer;span{transition:box-shadow .3s;margin-right:0.5rem;}}& .rd-more:hover span{","}"],e=>!0===e.$isShown?"block":"none",e=>e.theme.colors.accent,e=>!0===e.$isCollapse?e.theme.colors.maskGradient:"",()=>E.Mw.f),ec=(0,f.Ay)(ee.X).withConfig({componentId:"sc-418c6f7-2"})(["padding-bottom:",";padding-left:48px;p,ul,ol{line-height:1.625rem;}h1,h2,h3,h4,h5,h6{font-size:1rem;}& .tag{color:",";}& .tag:hover{cursor:pointer;color:",";}"],e=>!0===e.$bottomSpace?"2rem":"inherit",e=>e.theme.colors.accent,e=>e.theme.colors.accentHover),ed=f.Ay.div.withConfig({componentId:"sc-418c6f7-3"})(["display:flex;align-items:center;& .avatar{width:40px;height:40px;margin-right:8px;border-radius:50%;border:1px solid ",";}& .meta-text{display:flex;align-items:flex-start;flex-direction:column;}& .meta-sm{color:",";font-size:0.8rem;}& .author{color:",";margin-right:0.25rem;font-weight:600;}& .date{}& .word-count{position:absolute;right:0;}"],e=>e.theme.colors.uiLineGray,e=>e.theme.colors.textGray,e=>e.theme.colors.textSecondary);var eh=n(5749);function em(e){let{Elem:t,index:n,source:i,placeHolder:o,setplaceHolder:s}=e,a=(0,p.useRef)(null),l=(0,p.useCallback)(()=>{if(a.current){let e=a.current.offsetHeight;s(t=>{if(t[n]===e||0===e)return t;let i=[...t];return i[n]=e,i})}},[a,s,n]);(0,p.useEffect)(()=>{let e=(0,eh.n)(l,150);return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[a,n,s,l]);let[c,d]=(0,p.useState)(!1);(0,p.useEffect)(()=>{c&&(l(),d(!1))},[c,l]);let[h,m]=(0,p.useState)(!1);(0,p.useEffect)(()=>{l(),m(!0)},[a,l]);let u=(0,p.useMemo)(()=>o.slice(0,n).reduce((e,t)=>e+=t,0),[n,o]);return(0,r.jsx)("div",{ref:a,style:{position:"absolute",width:"100%",transform:"translateY(".concat(u,"px)"),visibility:h?"visible":"hidden"},children:t({source:i,triggerHeightChange:d})})}let eu=e=>{let{sources:t,setSources:n,Elem:i,scrollRef:o,fetchFrom:s,batchsize:a,Loading:l,style:c,...d}=e,[h,m]=(0,p.useState)(Array(t.length).fill(300)),[u,g]=(0,p.useState)(Array(t.length).fill(0).map((e,t)=>t)),[x,f]=(0,p.useState)(3*t.length),[b,y]=(0,p.useState)(!1),w=(0,p.useRef)({enable:!0}),v=(0,p.useMemo)(()=>h.reduce((e,t)=>e+=t,0),[h]),j=(0,p.useCallback)(e=>{let t=0;for(let n=0;n<e;n++)t+=h[n];return t},[h]);return(0,p.useEffect)(()=>{let e=null==o?void 0:o.current,i=(0,eh.n)(()=>{if(!w.current.enable)return;let i=j(u[u.length-1])-j(u[0]),r=(e?e.scrollTop:globalThis.scrollY)-j(u[0]),o=r+globalThis.innerHeight-(e&&e.getBoundingClientRect().y>0?e.getBoundingClientRect().y:0),l=r/i;if(!isNaN(l)&&isFinite(l)&&!(l>1.5)){if(w.current={enable:!1},s&&l<.2){let e=u[0]-a;if(e<0){w.current={enable:!0};return}y(!0),s(e,a).then(e=>{if(y(!1),!e||0===e.length){w.current={enable:!0};return}let i=u.map(e=>e-u.length);e.length>u.length?i=Array(e.length-u.length).fill(0).map((t,n)=>n-e.length+u.length+i[0]).concat(i):e.length<u.length&&(i=i.slice(u.length-e.length,u.length));let r=i.concat(u),o=e.concat(t);r.length>x&&(r.splice(0-i.length,i.length),o.splice(0-i.length,i.length)),g(r),n(o),w.current={enable:!0}})}else if(s&&o/i>.8){let e=u[u.length-1]+1;y(!0),s(e,a).then(e=>{if(y(!1),!e||0===e.length){w.current={enable:!0};return}let i=u.map(e=>e+u.length);if(e.length>u.length){let t=Array(e.length-u.length).fill(0).map((e,t)=>t+i[i.length-1]);i=i.concat(t)}else e.length<u.length&&(i=i.slice(0,e.length));if(i[i.length-1]>h.length-1){let e=Array(i[i.length-1]-h.length+1).fill(300);m(h.concat(e))}let r=u.concat(i),o=t.concat(e);r.length>x&&(r.splice(0,e.length),o.splice(0,e.length)),g(r),n(o),w.current={enable:!0}})}else w.current={enable:!0}}},500);return e?e.addEventListener("scroll",i):globalThis.addEventListener("scroll",i),()=>{e?e.addEventListener("scroll",i):globalThis.removeEventListener("scroll",i)}},[w,o,s,u,n,h,j,t,a,x]),(0,r.jsxs)("div",{style:Object.assign({position:"relative",width:"100%",minHeight:"".concat(v,"px")},c),className:d.className,children:[t.map((e,t)=>(0,r.jsx)(em,{index:u[t],Elem:i,source:e,placeHolder:h,setplaceHolder:m},e.id)),l&&b?(0,r.jsx)("div",{style:{position:"absolute",width:"100%",transform:"translateY(".concat(h.slice(0,h.length).reduce((e,t)=>e+=t,0),"px)")},children:(0,r.jsx)(l,{})}):null]})};function eg(e){let{postsData:t,postsDataBackup:n,setpostsData:i,setpostsDataBackup:o,client:s,searchStatus:a,resetSearchStatus:l,setTextAndSearch:c}=e,[d,h]=(0,p.useState)((_[s]||console.error("[client.ts] client ".concat(s," not in clientList")),_[s])),m=(0,p.useCallback)(async(e,t)=>d.queryMemoByCount(e,t).then(e=>e.length>0?Promise.all(e.map(async e=>({...e,length:e.content.length,code:(await U(e.content)).code}))):void 0),[d]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K.K,{style:{marginRight:"1rem"},children:function(){switch(a.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,r.jsxs)(r.Fragment,{children:["Results: ",t.length," memos",(0,r.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{l(),i(n)},children:"X"})]})}}()}),(0,r.jsx)(ep,{style:{minHeight:"80vh",marginTop:"0.625rem"},children:"ready"===a.isSearch?(0,r.jsx)(eu,{className:"virtualist",sources:t,setSources:i,Elem:e=>(0,r.jsx)(eo,{source:e.source,setSearchText:c,triggerHeightChange:e.triggerHeightChange,style:e.style}),fetchFrom:m,batchsize:10,Loading:es},"vl1"):"done"===a.isSearch?(0,r.jsx)(eu,{className:"virtualist",sources:t,setSources:i,Elem:e=>(0,r.jsx)(eo,{source:e.source,setSearchText:c,triggerHeightChange:e.triggerHeightChange}),batchsize:10},a.searchText):null}),(0,r.jsx)(J.A,{style:{marginTop:"5rem"}})]})}let ep=f.Ay.div.withConfig({componentId:"sc-53593907-0"})(["min-height:80vh;margin:0.625rem 0;border-radius:1.5rem;border:1px solid ",";background-color:",";box-shadow:0 0 12px 0 ",";.virtualist > div:first-child > section{border-radius:2rem 2rem 0 0;}.virtualist > div:last-child > section{border-radius:0 0 2rem 2rem;}.virtualist > div:not(:last-child) > section{border-bottom:solid 1px ",";}"],e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.bg,e=>e.theme.colors.shadowBg,e=>e.theme.colors.uiLineGray2);function ex(e){let{info:t}=e,[n,i]=(0,x.Bd)();return(0,r.jsxs)(ef,{children:[(0,r.jsxs)("div",{className:"item active",children:[(0,r.jsx)("span",{className:"title",children:n("memos")}),(0,r.jsx)("span",{className:"count",children:t.memos})]}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("span",{className:"title",children:n("photos")}),(0,r.jsx)("span",{className:"count",children:t.imgs})]})]})}let ef=f.Ay.section.withConfig({componentId:"sc-ef5d5bff-0"})(["margin-top:1.5rem;padding-left:1rem;color:",";.item{padding:0.25rem 0;margin-right:0.75rem;border-right:2px solid ",";display:flex;align-items:flex-end;}.item.active{border-right:2px solid ",";}.title{font-weight:600;margin-right:0.25rem;}.count{font-size:0.875rem;font-weight:600;color:",";vertical-align:bottom;}"],e=>e.theme.colors.textSecondary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.accent,e=>e.theme.colors.textGray2);var eb=n(3991),ey=n(926);let ew=function(e){let{inputRef:t,setRes:i,initData:r}=e,[o,s]=(0,p.useState)(),[a,l]=(0,p.useState)({isSearch:"ready",searchText:""}),c=(0,p.useCallback)(async()=>{let e;console.debug("%% init search...");let{searchObj:t,filterRes:o}=await r();return s(e=(await n.e(196).then(n.bind(n,8196))).createNaive({data:t,field:["tags","content"],notifier:function(e){Promise.all(o(e)).then(e=>{i(e),l(e=>({...e,isSearch:"done"}))})},disableStreamNotify:!0})),l(e=>({...e})),e},[r,i]),d=(0,p.useCallback)(async()=>{if(!t.current)return;let e=t.current.value.trim();if(0===e.length)return;l(t=>({...t,isSearch:"searching",searchText:e})),globalThis.scrollTo({top:0});let n=o;n||(n=await c()),n.search(e.split(" "))},[c,o,t]),h=(0,p.useCallback)(function(e){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];t.current&&(t.current.value=e,n&&d())},[d,t]);return{searchStatus:a,resetSearchStatus:(0,p.useCallback)(()=>{l(()=>({isSearch:"ready",searchText:""}))},[]),setTextAndSearch:h,search:d,initSearch:c}},ev=m()(()=>Promise.resolve().then(n.bind(n,8024)),{loadableGenerated:{webpack:()=>[8024]}});var ej=!0;let ek="/data/memos";function eC(e){let{source:t,info:n,memotags:i,client:h}=e,m=(0,p.useContext)(f.Dx),[u,k]=(0,p.useState)(!1),[C,S]=(0,x.Bd)(),A=(0,R.useImageBroswerStore)(e=>e.isModel),[I,E]=(0,p.useState)(t),[T,P]=(0,p.useState)(t),D=(0,p.useRef)(null),{searchStatus:L,resetSearchStatus:z,setTextAndSearch:$,search:G,initSearch:H}=ew({inputRef:D,setRes:E,initData:async()=>{let e=Array.from({length:n.pages+1},(e,t)=>"".concat(ek,"/").concat(t,".json")).map(e=>fetch(e).then(e=>e.json())),t=(await Promise.all(e)).flatMap(e=>e);return{searchObj:t.map(e=>({id:e.id,title:"",content:e.content,tags:e.tags})),filterRes:e=>{let n=e.map(e=>e.id);return t.filter(e=>!!n.includes(e.id)).map(async e=>({...e,code:(await U(e.content)).code,length:e.content.length}))}}}}),B=(0,p.useCallback)(()=>{if(D.current&&""===D.current.value){E(T),z();return}G()},[G,T,z]);return(0,ey.z)("keydown",e=>{D.current&&D.current===document.activeElement&&"Enter"===e.key&&B()},void 0,[G]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g(),{children:[(0,r.jsx)("title",{children:"".concat(M.E.author," - Memos")}),(0,r.jsx)(b.CommonHead,{})]}),(0,r.jsx)(w.A,{placeHolder:!1,hideSearch:!0,style:{borderBottom:"1px solid "+(null==m?void 0:m.colors.uiLineGray2)}}),(0,r.jsxs)("main",{style:{background:null==m?void 0:m.colors.bg2},children:[(0,r.jsxs)(eS,{children:[(0,r.jsx)(y.A,{className:"button-float",Icon:o.A,clickHandler:e=>k(e=>!e)}),(0,r.jsxs)(v.dR,{sep:1,siderLocation:"right",children:[(0,r.jsx)(eA,{children:(0,r.jsx)(eg,{postsData:I,postsDataBackup:T,setpostsData:E,setpostsDataBackup:P,client:h,searchStatus:L,resetSearchStatus:z,setTextAndSearch:$})}),(0,r.jsxs)(eI,{$isMobileSider:u,children:[(0,r.jsxs)("div",{className:"close-btn",onClick:e=>{e.stopPropagation(),k(e=>!e)},children:["小小の菜单",(0,r.jsx)(s.A,{size:"1.25em",style:{marginLeft:".5rem"}})]}),(0,r.jsxs)(eM,{children:[(0,r.jsx)("input",{type:"text",placeholder:C("search"),ref:D,onFocus:()=>{H()}}),(0,r.jsx)(a.A,{className:"hover-gold",size:"1.4rem",onClick:B})]}),(0,r.jsx)(ex,{info:n}),(0,r.jsx)(j,{Icon:l.A,title:C("tags"),children:i.map(e=>(0,r.jsxs)("span",{className:"hover-gold",style:{display:"inline-block",paddingRight:"0.75em"},onClick:()=>{$("#"+e.name)},children:[(0,r.jsx)(c.A,{size:"1rem",style:{opacity:.5,paddingRight:"1px"}}),"".concat(e.name),e.memoIds.length>1?(0,r.jsxs)("span",{style:{opacity:.5},children:["(",e.memoIds.length,")"]}):""]},e.name))}),M.E.friends&&(0,r.jsx)(j,{title:C("friends"),Icon:d.A,children:M.E.friends.map((e,t)=>(0,r.jsx)("div",{children:(0,r.jsx)(eb.dF,{href:e.link,children:e.name})},t))}),M.E.walineApi&&""!==M.E.walineApi&&(0,r.jsx)(N,{})]})]})]}),A&&(0,r.jsx)(ev,{})]})]})}let eS=f.Ay.div.withConfig({componentId:"sc-538187c2-0"})(["max-width:1080px;margin:0 auto;.button-float{display:none;}@media screen and (max-width:780px){max-width:100%;.button-float{display:unset;}}@media screen and (max-width:580px){}"]),eA=f.Ay.div.withConfig({componentId:"sc-538187c2-1"})(["width:100%;padding:73px 16px 48px 16px;align-self:flex-end;&::-webkit-scrollbar{display:none;}@media screen and (min-width:1080px){max-width:640px;}@media screen and (max-width:780px){width:100%;}@media screen and (max-width:580px){padding-left:0;padding-right:0;}"]),eI=f.Ay.div.withConfig({componentId:"sc-538187c2-2"})(["position:sticky;max-width:15rem;padding-top:83px;padding-bottom:64px;margin:0 0.5rem;height:100vh;overflow-y:auto;&::-webkit-scrollbar{display:none;}.close-btn{display:none;z-index:1;}@media screen and (max-width:1080px){margin:0;}@media screen and (max-width:780px){"," position:fixed;bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;max-width:unset;width:96%;right:2%;height:66vh;padding:0rem 1rem 1rem 1rem;transition:transform .3s ease;transform:",";.close-btn{position:sticky;top:0;background:inherit;display:flex;font-weight:600;justify-content:space-between;align-items:center;padding:1rem 0;"," color:",";font-size:1rem;cursor:pointer;}.close-btn:hover{color:",";}}.hover-gold{cursor:pointer;}.hover-gold:hover{color:",";}"],E.mR,e=>e.$isMobileSider?"translateY(0)":"translateY(105%)",e=>e.$isMobileSider?null:"visibility:hidden;",e=>e.theme.colors.textGray2,e=>e.theme.colors.accent,e=>e.theme.colors.accent),eM=f.Ay.div.withConfig({componentId:"sc-538187c2-3"})(["border-radius:0.75rem;background:",";color:",";display:flex;align-items:center;margin:0 0.5rem;border:1px solid ",";box-shadow:0 0 12px 0 ",";&:focus-within{border:1px solid ",";}input{border:none;background:inherit;line-height:2rem;color:inherit;flex:1 1 auto;width:0;margin-left:1rem;}input:focus,input:focus-visible{outline:none;}input::placeholder{color:",";}svg{margin:0 auto;flex:0  0 auto;margin:0 0.6rem 0 0.5rem;color:",";}"],e=>e.theme.colors.bg,e=>e.theme.colors.textGray,e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.shadowBg,e=>e.theme.colors.accentHover,e=>e.theme.colors.textGray3,e=>e.theme.colors.uiLineGray)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,455,198,217,193,636,411],()=>t(9726)),_N_E=e.O()}]);