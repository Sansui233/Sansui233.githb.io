(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{6512:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return t(9055)}])},2330:function(n,e,t){"use strict";t.d(e,{Z:function(){return Model}});var o=t(1262),l=t(1527),i=t(959),r=t(8598),s=t(7681);function _templateObject(){let n=(0,o._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background: #000000de;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n"]);return _templateObject=function(){return n},n}function Model(n){let{isModel:e,setModel:t,scrollRef:o,style:r,...c}=n,d=(0,s.aA)(),m=(0,i.useMemo)(()=>r?{...r,height:d+"px"}:{height:d+"px"},[r,d]);return(0,i.useEffect)(()=>(e?o?o.style.overflow="hidden":document.body.style.overflow="hidden":o?o.style.overflow="auto":document.body.style.overflow="auto",()=>{o?o.style.overflow="auto":document.body.style.overflow="auto"}),[e,o]),e?(0,l.jsx)(a,{...c,$isOpen:e,onClick:n=>{n.stopPropagation(),t(!1)},style:m}):void 0}let a=r.ZP.div.withConfig({componentId:"sc-4632bb8e-0"})(_templateObject())},3442:function(n,e,t){"use strict";var o=t(1262),l=t(1527),i=t(75);t(5439);var r=t(959),s=t(8598),a=t(8476);function _templateObject(){let n=(0,o._)(["\n\n  margin: 0 auto;\n\n  --waline-theme-color: ",";\n  --waline-bgcolor: ",";\n  --waline-color: ",";\n  --waline-active-color: ",";\n  --waline-bgcolor-light: #99999915;\n  --waline-border: 1px solid #99999966;\n  --waline-border-color: #99999966;\n  --waline-info-bgcolor: #99999915;\n\n  .wl-btn.primary {\n    background: ",";\n    color:",";\n  }\n  .wl-gif-popup {\n    @media screen and (max-width: 580px) {\n      .wl-gallery-column {\n        display: grid !important;\n        grid-template-columns: 1fr 1fr 1fr;\n        max-height: 200px;\n      }\n    }\n    img {\n      border-color: ",";\n    }\n    input {\n      background: ",";\n      color: ",";\n    }\n  }\n\n\n  // @media screen and (max-width:580px) {\n  //   .wl-footer {\n  //     margin: unset;\n  //     padding: 0.5rem 0.75rem;\n  //   }\n  \n  //   .wl-gif-popup {\n  //     width: 100%;\n  //     left: 0;\n  //     padding: 0;\n  //   }\n  // }\n\n"]);return _templateObject=function(){return n},n}let c=s.ZP.div.withConfig({componentId:"sc-26bc692-0"})(_templateObject(),n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.textGray,n=>n.theme.colors.gold,n=>n.theme.colors.bgInverse,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.bg,n=>n.theme.colors.textPrimary);e.Z=n=>((0,r.useEffect)(()=>{(0,i.S1)({el:"#waline",serverURL:a.d.walineApi?a.d.walineApi:"",path:window.location.pathname,pageview:!0,comment:!0})},[]),a.d.walineApi&&""!==a.d.walineApi)?(0,l.jsx)(c,{id:"waline",...n,children:"Waline"}):(0,l.jsx)(l.Fragment,{})},1499:function(n,e,t){"use strict";t.d(e,{n:function(){return useMdxMemo},g:function(){return useMdxPost}});var o=t(1527),l=t.t(o,2),i=t(8255),r=t(959),s=t(2330);function ImgModel(n){let{imgProps:e,isModel:t,setModel:l}=n;return(0,o.jsxs)(s.Z,{isModel:t,setModel:l,children:[" ",(0,o.jsx)("img",{loading:"lazy",...e,style:{maxWidth:"100%",maxHeight:"100%",display:"block"}})," "]})}function MDImg(n){let[e,t]=(0,r.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ImgModel,{imgProps:n,isModel:e,setModel:t}),(0,o.jsx)("img",{loading:"lazy",onClick:()=>t(!0),style:{cursor:"zoom-in"},...n})]})}function memoTag(n){return function(e){let{text:t}=e;return(0,o.jsxs)("span",{className:"tag",onClick:()=>{n&&n("#".concat(t),!0)},children:["#",t," "]})}}function convertBack(n){let e={Fragment:r.Fragment,...l,baseUrl:"file:///C:/Users/lingn/git/blog/components/mdx.tsx"},t=(0,i.W)(n,e);return t}function useMdxPost(n){let e=convertBack(n);return(0,o.jsx)(e.default,{components:{img:MDImg}})}function useMdxMemo(n,e){let t=convertBack(n);return(0,o.jsx)(t.default,{components:{Tag:memoTag(e)}})}},7681:function(n,e,t){"use strict";t.d(e,{aA:function(){return useViewHeight}});var o=t(959),l=t(4268);function useViewHeight(){(0,o.useContext)(l.L);let[n,e]=(0,o.useState)(globalThis.innerHeight);return(0,o.useEffect)(()=>{let setvhOnResize=()=>{e(globalThis.innerHeight)};return globalThis.addEventListener("resize",setvhOnResize),()=>{globalThis.removeEventListener("resize",setvhOnResize)}},[]),n}},9055:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return w},default:function(){return Post}});var o=t(1262),l=t(1527),i=t(3522),r=t.n(i),s=t(1557),a=t.n(s),c=t(3638),d=t(959),m=t(8598),p=t(7108);function _templateObject(){let n=(0,o._)(["\n  margin: 64px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    color: ",";\n    font-size: 0.875rem;\n  }\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,o._)(["\n  padding: .2em 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  i {\n    transform: translateY(-0.1em);\n  }\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  span:hover::before {\n    width: 100%;\n  }\n"]);return _templateObject1=function(){return n},n}let h=m.ZP.div.withConfig({componentId:"sc-b3f43d3f-0"})(_templateObject(),n=>n.theme.colors.textGray),u=(0,m.ZP)(a()).withConfig({componentId:"sc-b3f43d3f-1"})(_templateObject1(),n=>n.theme.colors.gold);var common_Pagination=n=>{let e=(0,d.useCallback)(()=>{var e;n.isScrollToTop&&((null===(e=n.scrollRef)||void 0===e?void 0:e.current)?n.scrollRef.current.scrollTo({top:0}):globalThis.scrollTo({top:0}))},[n.isScrollToTop,n.scrollRef]);return(0,l.jsxs)(h,{...n.elemProps,children:[n.prevPage&&(0,l.jsx)("div",{style:{flex:"1 1 auto"},children:(0,l.jsx)(u,{href:n.prevPage.link,passHref:!0,style:{justifyContent:"flex-start"},onClick:e,children:(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"icon-arrow-left2"}),"\xa0",n.prevPage.title]})})}),(0,l.jsx)("span",{children:n.currTitle?n.currTitle.concat(n.maxPage?" / ".concat(n.maxPage):""):""}),n.nextPage&&(0,l.jsx)("div",{style:{flex:"1 1 auto"},children:(0,l.jsx)(u,{href:n.nextPage.link,passHref:!0,style:{justifyContent:"flex-end"},onClick:e,children:(0,l.jsxs)("span",{children:[n.nextPage.title,"\xa0",(0,l.jsx)("i",{className:"icon-arrow-right2"})]})})})]})},g=t(3442),f=t(3797),j=t(1499),x=t(3318),b=t(5497);function _id_templateObject(){let n=(0,o._)(["\n  max-width: min(700px, 100vw);\n  margin-top: 72px;\n  animation: "," 1s ease;\n\n  @media screen and (max-width: 580px) {\n    margin-top: 36px;\n  }\n"]);return _id_templateObject=function(){return n},n}function _id_templateObject1(){let n=(0,o._)(["\n  width: 0;\n  flex: 2 1 0;\n  display: flex;\n\n  & .blank-spacer-left {\n    @media screen and (min-width: 1080px) {\n      flex: 2 1 0;\n    }\n  }\n\n  & .blank-spacer-right {\n    @media screen and (min-width: 780px) {\n      flex: 1 1 0;\n    }\n  }\n"]);return _id_templateObject1=function(){return n},n}function _templateObject2(){let n=(0,o._)(["\n  max-width: min(18em,20vw);\n  flex: 1 1 0;\n  margin-top: 94px;\n  position: sticky;\n  align-self: flex-start;\n  top: 63px;\n\n  animation: "," 1s ease;\n\n  @media screen and (max-width: 580px) {\n    display: none\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){let n=(0,o._)(["\n  margin-bottom: 3rem;\n  h1 {\n    margin-top: .3rem;\n    margin-bottom: 0.5rem;\n  }\n"]);return _templateObject3=function(){return n},n}function _templateObject4(){let n=(0,o._)(["\n  font-size: 0.875rem;\n  position: relative;\n  color: ",";\n\n  .date {\n    font-size: 0.875rem;\n  }\n\n  &::before {\n    content:'';\n    position: absolute;\n    top: -.8em;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background: ",";\n  }\n"]);return _templateObject4=function(){return n},n}function _templateObject5(){let n=(0,o._)(["\n  transition: opacity .3s, color .3s;\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n\n"]);return _templateObject5=function(){return n},n}function _templateObject6(){let n=(0,o._)(["\n  display: block;\n  padding-left: ",'em;\n  padding-top: 0.1em;\n  padding-bottom: 0.1em;\n  line-height: 1.8em;\n\n  &::before {\n    content: "•";\n    color: ',";\n    left: ","em;\n    position: absolute;\n  }\n\n  & span {\n    transition: box-shadow .5s;\n  }\n\n  &:hover span {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n"]);return _templateObject6=function(){return n},n}function _templateObject7(){let n=(0,o._)(["\n  position: relative;\n  max-height: calc(100vh - 120px);\n  overflow-y: auto;\n"]);return _templateObject7=function(){return n},n}var w=!0;function Post(n){let{meta:e,mdxcode:t,nextPost:o,prevPost:i,excerpt:s,headings:a}=n,h=(0,c.useRouter)(),u=(0,d.useContext)(m.Ni),x=e.description?e.description.concat(s):s;function genTags(n){return(0,l.jsx)(l.Fragment,{children:n.map(n=>(0,l.jsxs)(P,{href:"/tags/".concat(n),passHref:!0,children:[(0,l.jsx)("span",{style:{paddingRight:"0.1em"},children:"#"}),n]},n))})}function getKeywords(n){let e="string"==typeof n.tags?[n.tags]:n.tags;return null!==n.keywords&&"string"==typeof n.keywords?e.join().concat(", ").concat(n.keywords.replaceAll("，",", ")):e.join()}let scrollToTarget=(n,e)=>{n.preventDefault();let t=document.getElementById(e);if(t){let n=t.getBoundingClientRect(),e=window.scrollY||window.pageYOffset;window.scrollTo({top:n.top+e-63,behavior:"smooth"})}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:e.title}),(0,l.jsx)("meta",{name:"description",content:x}),(0,l.jsx)("meta",{name:"keywords",content:getKeywords(e)}),(0,l.jsx)(p.CommonHead,{})]}),(0,l.jsx)(f.ZP,{children:(0,l.jsxs)("div",{style:{display:"flex",margin:"auto"},children:[(0,l.jsxs)(_,{children:[(0,l.jsx)("div",{className:"blank-spacer-left"}),(0,l.jsxs)(v,{children:[(0,l.jsxs)(k,{children:[(0,l.jsx)("h1",{children:e.title}),(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{flex:"1 1 0"},children:(0,l.jsxs)(O,{style:{flex:"1 1 0"},children:[(0,l.jsx)("span",{className:"date",children:e.date})," | ",genTags(e.tags)," in ",(0,l.jsxs)(P,{href:"/categories/".concat(e.categories),passHref:!0,children:[(0,l.jsx)("i",{style:{paddingRight:"0.2em"},className:"icon-material-folder_open"}),e.categories]})]})}),(0,l.jsxs)("div",{style:{flex:"0 0 0",fontSize:"0.875rem"},children:[(0,l.jsx)("i",{style:{paddingLeft:"0.5em",paddingRight:"0.3em"},className:"icon-material-eye"}),(0,l.jsx)("span",{className:"waline-pageview-count","data-path":h.basePath})]})]})]}),(0,l.jsx)(b.j,{children:(0,j.g)(t)}),(0,l.jsxs)("div",{style:{textAlign:"right",opacity:.5,fontSize:"0.875rem",margin:"4rem 0 2rem 0"},children:["更新于 ",e.date]}),(0,l.jsx)(common_Pagination,{nextPage:o||void 0,prevPage:i||void 0}),(0,l.jsx)(g.Z,{})]}),(0,l.jsx)("div",{className:"blank-spacer-right"})]}),(0,l.jsx)(y,{children:(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{style:{fontSize:"1.25rem",fontWeight:"bold",paddingBottom:"0.5rem",marginBottom:"0.5rem",borderBottom:"solid 1px ".concat(null==u?void 0:u.colors.gold)},children:"目录"}),(0,l.jsx)(T,{children:a.length>0?a.map(n=>(0,l.jsx)(C,{$rank:n.rank,href:"#".concat(n.id),onClick:e=>{scrollToTarget(e,n.id)},children:(0,l.jsx)("span",{children:n.title})},n.id)):(0,l.jsx)("span",{style:{opacity:"0.6",fontSize:"0.9rem"},children:"这是一篇没有目录的文章。"})})]})})]})})]})}let v=(0,m.ZP)(f.kn).withConfig({componentId:"sc-38c56744-0"})(_id_templateObject(),x.r$),_=m.ZP.div.withConfig({componentId:"sc-38c56744-1"})(_id_templateObject1()),y=m.ZP.div.withConfig({componentId:"sc-38c56744-2"})(_templateObject2(),x.ER),k=m.ZP.div.withConfig({componentId:"sc-38c56744-3"})(_templateObject3()),O=m.ZP.span.withConfig({componentId:"sc-38c56744-4"})(_templateObject4(),n=>n.theme.colors.textGray,n=>n.theme.colors.gold),P=(0,m.ZP)(a()).withConfig({componentId:"sc-38c56744-5"})(_templateObject5(),n=>n.theme.colors.textPrimary,n=>n.theme.colors.gold),C=(0,m.ZP)(a()).withConfig({componentId:"sc-38c56744-6"})(_templateObject6(),n=>n.$rank,n=>n.theme.colors.gold,n=>n.$rank-1,n=>n.theme.colors.goldHover),T=m.ZP.div.withConfig({componentId:"sc-38c56744-7"})(_templateObject7())},5497:function(n,e,t){"use strict";t.d(e,{j:function(){return r}});var o=t(1262),l=t(8598),i=t(3433);function _templateObject(){let n=(0,o._)(["\n  text-align: justify;\n  letter-spacing: 0.01em;\n  color: ",";\n\n  @media screen and (max-width: 580px){\n    text-align: unset;\n    p,ul,ol {\n      line-height: 1.625rem;\n    }\n  }\n\n  img, picture, video, canvas, svg, pre{\n    margin: 1.625rem auto;\n    display: block;\n  }\n\n  p,ul,ol {\n    line-height: 1.8rem;\n  }\n\n  blockquote {\n    margin: 1.625rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: bold;\n    border-bottom: 1px solid ",";\n    transition: box-shadow .5s;\n  }\n\n  a:hover {\n    ","\n  }\n  \n  code {\n    color: ",";\n    background-color: ",";\n    border-radius: 3px;\n    padding: 0.2rem 0.375rem;\n    margin: 0rem 1px;\n    font-size: 0.875rem;\n  }\n\n  pre code {\n    color: ",";\n    border-radius: 0.5rem;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.5em;\n    color: ",';\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:"•";\n    position: absolute;\n    color: ',";\n    left: -1rem;\n  }\n\n  .hljs {\n    background: ",";\n  }\n  \n  .hljs-emphasis {\n    font-style: italic;\n  }\n  \n  .hljs-strong {\n    font-weight: bold;\n  }\n  \n  .hljs-link {\n    text-decoration: underline;\n  }\n  \n  .hljs-comment,\n  .hljs-quote {\n    color: #a79b87ba;\n    font-style: italic;\n  }\n\n  .hljs-params,\n  .hljs-type {\n    color: #a79b87c4;\n  }\n  \n  .hljs-punctuation,\n  .hljs-attr {\n    color: rgb(89 161 197);\n  }\n  \n  .hljs-selector-tag,\n  .hljs-name,\n  .hljs-meta,\n  .hljs-operator,\n  .hljs-char.escape_ {\n    color: #c56200;\n  }\n  \n  .hljs-keyword,\n  .hljs-deletion {\n    color: #799f67;\n  }\n  \n  .hljs-regexp,\n  .hljs-selector-pseudo,\n  .hljs-selector-attr,\n  .hljs-variable.language_ {\n    color: #cc5e91;\n  }\n  \n  .hljs-subst,\n  .hljs-property,\n  .hljs-code,\n  .hljs-formula,\n  .hljs-section,\n  .hljs-title.function_ {\n    color: #e36b6b;\n  }\n  \n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-addition,\n  .hljs-selector-class,\n  .hljs-title.class_,\n  .hljs-title.class_.inherited__,\n  .hljs-meta .hljs-string {\n    color: #c68032;\n  }\n  \n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-number,\n  .hljs-literal,\n  .hljs-link,\n  .hljs-built_in,\n  .hljs-title,\n  .hljs-selector-id,\n  .hljs-tag,\n  .hljs-doctag,\n  .hljs-attribute,\n  .hljs-template-tag,\n  .hljs-meta .hljs-keyword {\n    color: ",";\n  }\n\n"]);return _templateObject=function(){return n},n}let r=l.ZP.div.withConfig({componentId:"sc-10982bce-0"})(_templateObject(),n=>n.theme.colors.textSecondary,n=>n.theme.colors.gold,i._j,n=>n.theme.colors.gold,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.textSecondary,n=>n.theme.colors.textGray,n=>n.theme.colors.gold,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.gold)}},function(n){n.O(0,[537,576,965,758,108,774,888,179],function(){return n(n.s=6512)}),_N_E=n.O()}]);