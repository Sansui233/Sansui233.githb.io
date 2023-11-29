"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{9946:function(n,e,t){t.d(e,{Z:function(){return Model}});var r=t(1262),o=t(1527),l=t(959),i=t(8598),s=t(5956);function _templateObject(){let n=(0,r._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  background: #000000de;\n  z-index: 10;\n  cursor: zoom-out;\n  will-change: transform;\n"]);return _templateObject=function(){return n},n}function Model(n){let{isModel:e,setModel:t,scrollRef:r,style:i,...c}=n,m=(0,s.aA)(),u=(0,l.useMemo)(()=>i?{...i,height:m+"px"}:{height:m+"px"},[i,m]);return(0,l.useEffect)(()=>(e?r?r.style.overflow="hidden":document.body.style.overflow="hidden":r?r.style.overflow="auto":document.body.style.overflow="auto",()=>{r?r.style.overflow="auto":document.body.style.overflow="auto"}),[e,r]),e&&(0,o.jsx)(a,{...c,$isOpen:e,onClick:n=>{n.stopPropagation(),t(!1)},style:u})}let a=i.ZP.div.withConfig({componentId:"sc-87e6eb4f-0"})(_templateObject())},1737:function(n,e,t){t.d(e,{n:function(){return useMdxMemo},g:function(){return useMdxPost}});var r=t(1527),o=t.t(r,2),l=t(8255),i=t(959),s=t(9946);function ImgModel(n){let{imgProps:e,isModel:t,setModel:o}=n;return(0,r.jsx)(s.Z,{isModel:t,setModel:o,children:(0,r.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center"},children:[" ",(0,r.jsx)("img",{loading:"lazy",...e,style:{maxWidth:"100%",maxHeight:"100%",display:"block"}})," "]})})}function MDImg(n){let[e,t]=(0,i.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ImgModel,{imgProps:n,isModel:e,setModel:t}),(0,r.jsx)("img",{loading:"lazy",onClick:()=>t(!0),style:{cursor:"zoom-in"},...n})]})}function memoTag(n){return function(e){let{text:t}=e;return(0,r.jsxs)("span",{className:"tag",onClick:()=>{n&&n("#".concat(t),!0)},children:["#",t," "]})}}function convertBack(n){let e={Fragment:i.Fragment,...o,baseUrl:"file:///C:/Users/lingn/git/blog/components/mdx.tsx"},t=(0,l.W)(n,e);return t}function useMdxPost(n){let e=(0,i.useMemo)(()=>convertBack(n),[n]);return(0,r.jsx)(e.default,{components:{img:MDImg}})}function useMdxMemo(n,e){let t=(0,i.useMemo)(()=>convertBack(n),[n]);return(0,r.jsx)(t.default,{components:{Tag:memoTag(e)}})}},5956:function(n,e,t){t.d(e,{aA:function(){return useViewHeight},hV:function(){return useViewWidth},j:function(){return useScrollTop}});var r=t(959),o=t(1702);function useViewHeight(){let[n,e]=(0,r.useState)(globalThis.innerHeight);return(0,r.useEffect)(()=>{let setvhOnResize=()=>{e(globalThis.innerHeight)};return globalThis.addEventListener("resize",setvhOnResize),()=>{globalThis.removeEventListener("resize",setvhOnResize)}},[]),n}function useViewWidth(){let[n,e]=(0,r.useState)(globalThis.innerWidth);return(0,r.useEffect)(()=>{let setvhOnResize=()=>{e(globalThis.innerWidth)};return globalThis.addEventListener("resize",setvhOnResize),()=>{globalThis.removeEventListener("resize",setvhOnResize)}},[]),n}function useScrollTop(){let[n,e]=(0,r.useState)(globalThis.scrollY);return(0,r.useEffect)(()=>{let n=(0,o.P)(()=>{e(globalThis.scrollY)},50);return globalThis.addEventListener("resize",n),globalThis.addEventListener("scroll",n),()=>{globalThis.removeEventListener("resize",n),globalThis.addEventListener("scroll",n)}},[]),n}},4085:function(n,e,t){t.r(e),t.d(e,{CommonHead:function(){return CommonHead},__N_SSG:function(){return _},default:function(){return pages}});var r=t(1262),o=t(1527),l=t(1352),i=t(3522),s=t.n(i),a=t(1557),c=t.n(a),m=t(959),u=t(8598),p=t(3797),d=t(3127),h=t(3433);function _templateObject(){let n=(0,r._)(["\n  text-align: right;\n  position: relative;\n  padding: 2rem 0;\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,r._)(["\n  position: absolute;\n  right:0;\n  opacity: 0;\n  pointer-events: none;\n  margin-top: .625rem;\n  margin-right: 4px;\n  border-right: 2px solid ",";\n  padding-left: 2.5rem;\n  transform: none;\n  ",";\n  transform: translateY(-0.5rem);\n  transition: opacity .3s ease, transform .3s ease;\n\n  &.is-open {\n    z-index: 1;\n    opacity: 1;\n    transform: translate(0);\n    pointer-events: auto;\n  }\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){let n=(0,r._)(["\n  font-size: 0.875rem;\n  padding: 0.3em .6em;\n  cursor: pointer;\n  position: relative;\n  &:hover span{\n    color: ",";\n  }\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){let n=(0,r._)(["\n  cursor: pointer;\n\n  span {\n    position: relative;\n  }\n\n  span::before {\n    ","\n    height: 2px;\n    transition: height .3s;\n  }\n\n  span.is-open::before {\n    height: 0.4em;\n  }\n\n  svg {\n    transition: transform .3s;\n    margin-right: -0.4em;\n    margin-top: -2px;\n    margin-left: 2px;\n  }\n\n  svg.is-open {\n    transform: rotateX(180deg);\n  }\n\n"]);return _templateObject3=function(){return n},n}function NavDropper(n){let{items:e,current:t,setCurrent:r}=n,[l,i]=(0,m.useState)(!1);return(0,o.jsxs)(f,{onClick:()=>{i(!l)},children:[(0,o.jsxs)(b,{children:[(0,o.jsxs)("span",{className:l?"is-open":"",children:[e[t][0]," ",e[t][1]]}),(0,o.jsx)(d.Z,{className:l?"is-open":"",strokeWidth:"1px"})]}),(0,o.jsx)(g,{className:l?"is-open":"",children:e.map((n,e)=>(0,o.jsx)(j,{onClick:()=>{r(e),i(!1)},children:(0,o.jsxs)("span",{children:[n[0]," ",n[1]]})},e))})]})}let f=u.ZP.nav.withConfig({componentId:"sc-778af735-0"})(_templateObject()),g=u.ZP.div.withConfig({componentId:"sc-778af735-1"})(_templateObject1(),n=>n.theme.colors.accentHover,n=>n.theme.colors.navBgGradient),j=u.ZP.div.withConfig({componentId:"sc-778af735-2"})(_templateObject2(),n=>n.theme.colors.accent),b=u.ZP.div.withConfig({componentId:"sc-778af735-3"})(_templateObject3(),h.iG);var x=t(8476);function pages_templateObject(){let n=(0,r._)(["\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1rem;\n\n  @media screen and (max-width: 780px) {\n    grid-template-columns: repeat(1, 100%);\n  }\n"]);return pages_templateObject=function(){return n},n}function pages_templateObject1(){let n=(0,r._)(["\n  display: block;\n  min-height: 6rem;\n  border-radius: 5px;\n  cursor: pointer;\n  animation-fill-mode: forwards;\n\n  @media (any-hover: hover) {\n    &:hover{\n      ","\n    }\n  }\n\n  @media (any-hover: none) {\n    &:active{\n      ","\n    }\n  }\n\n  @media screen and (max-width: 780px){\n    min-height: 5.25rem;\n  }\n\n  .card-content {\n    padding: 1rem;\n  }\n\n  .meta {\n    margin-top: 0.25rem;\n    font-size: 0.875rem;\n    color: ",";\n  }\n\n  .date {\n    font-size: 0.9rem;\n  }\n"]);return pages_templateObject1=function(){return n},n}function pages_templateObject2(){let n=(0,r._)(["\n  font-size: 1.125rem;\n  font-weight: bold;\n"]);return pages_templateObject2=function(){return n},n}var _=!0;let CommonHead=()=>(0,o.jsxs)(m.Fragment,{children:[(0,o.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function ArticleItem(n){let{p:e,i:t}=n;return(0,o.jsx)(O,{href:"/posts/"+e.id,passHref:!0,children:(0,o.jsxs)("div",{className:"card-content",children:[(0,o.jsx)(y,{children:e.title}),(0,o.jsxs)("div",{className:"meta",children:[(0,o.jsx)("span",{className:"date",children:e.date}),(0,o.jsx)("span",{children:" | "}),(0,o.jsx)(l.Z,{size:"1.1em",style:{margin:"0 0.2rem",paddingBottom:"0.1em"}}),e.categories]})]})})}var pages=n=>{let{posts:e,categories:t}=n,[r,l]=(0,m.useState)(0),i=(0,m.useMemo)(()=>0===r?e:e.filter(n=>n.categories===t[r][0]),[r,e,t]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:"".concat(x.d.author," - Blog")}),(0,o.jsx)(CommonHead,{})]}),(0,o.jsx)(p.ZP,{children:(0,o.jsxs)(p.kn,{children:[(0,o.jsx)(NavDropper,{items:t,current:r,setCurrent:l}),(0,o.jsx)(v,{children:i.map((n,e)=>(0,o.jsx)(ArticleItem,{p:n,i:e},n.id))})]})})]})};let v=u.ZP.section.withConfig({componentId:"sc-7509f748-0"})(pages_templateObject()),O=(0,u.ZP)(c()).withConfig({componentId:"sc-7509f748-1"})(pages_templateObject1(),()=>h.N8,()=>h.N8,n=>n.theme.colors.textSecondary),y=u.ZP.span.withConfig({componentId:"sc-7509f748-2"})(pages_templateObject2())},3318:function(n,e,t){t.d(e,{ER:function(){return i},r$:function(){return l}});var r=t(1262),o=t(8598);function _templateObject(){let n=(0,r._)(["\n0% {\n  opacity: 0;\n}\n100% {\n  opacity: 1;\n}"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,r._)(["\n0% {\n  opacity: 0;\n  transform: translateY(10px);\n}\n100% {\n  opacity: 1;\n  transform: translateY(0);\n}"]);return _templateObject1=function(){return n},n}function _templateObject2(){let n=(0,r._)(["\n0% {\n  -webkit-transform: translateX(50px);\n          transform: translateX(50px);\n  opacity: 0;\n}\n100% {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject2=function(){return n},n}function _templateObject3(){let n=(0,r._)(["\n0% {\n  -webkit-filter: blur(12px);\n          filter: blur(12px);\n  opacity: 0;\n}\n100% {\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  opacity: 1;\n}\n"]);return _templateObject3=function(){return n},n}function _templateObject4(){let n=(0,r._)(["\n0% {\n  transform: translateY(-100%);\n}\n100% {\n  transform: translateY(0);\n}"]);return _templateObject4=function(){return n},n}function _templateObject5(){let n=(0,r._)(["\n0% {\n  transform: translateY(0);\n}\n100% {\n  transform: translateY(-100%);\n}"]);return _templateObject5=function(){return n},n}function _templateObject6(){let n=(0,r._)(["\n0% {\n  transform: translateX(-1000px);\n  opacity: 0;\n}\n100% {\n  transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject6=function(){return n},n}function _templateObject7(){let n=(0,r._)(["\n0% {\n  transform: translateX(1000px);\n  opacity: 0;\n}\n100% {\n  transform: translateX(0);\n  opacity: 1;\n}\n"]);return _templateObject7=function(){return n},n}(0,o.F4)(_templateObject());let l=(0,o.F4)(_templateObject1()),i=(0,o.F4)(_templateObject2());(0,o.F4)(_templateObject3()),(0,o.F4)(_templateObject4()),(0,o.F4)(_templateObject5()),(0,o.F4)(_templateObject6()),(0,o.F4)(_templateObject7())},593:function(n,e,t){t.d(e,{j:function(){return i}});var r=t(1262),o=t(8598),l=t(3433);function _templateObject(){let n=(0,r._)(["\n  color: ",";\n\n  h1,h2,h3,h4,h5 {\n    color: ",";\n  }\n\n  h6 {\n    color: ",";\n  }\n  \n  img, picture, video, canvas, svg, pre{\n    margin: 1.5rem auto;\n    display: block;\n  }\n\n  p,\n  ul,\n  ol {\n    line-height: 1.7rem;\n  }\n\n  blockquote {\n    margin: 1.5rem 0;\n  }\n\n  a {\n    position: relative;\n    font-weight: bold;\n    color: ",";\n  }\n\n  a::before {\n    ","\n    height: 2px;\n    transition: height .3s ease;\n  }\n\n  a:hover::before {\n    height: 0.4em;\n  }\n  \n  code {\n    color: ",";\n    background-color: ",";\n    border-radius: 3px;\n    padding: 0.2rem 0.375rem;\n    margin: 0rem 1px;\n    font-size: 0.875rem;\n  }\n\n  pre code {\n    color: ",";\n    border-radius: 0.5rem;\n    padding: 1rem 2rem;\n    margin: unset;\n    overflow: auto;\n  }\n\n  blockquote {\n    border-left: solid 2px;\n    padding-left: 1.5em;\n    color: ",';\n  }\n\n  del {\n    opacity: .33;\n  }\n\n  ul li {\n    display: block;\n    position: relative;\n  }\n  ul li::before {\n    content:"•";\n    position: absolute;\n    color: ',";\n    left: -1rem;\n  }\n\n  @media screen and (min-width: 580px){\n\n    text-align: justify;\n\n    img, picture, video, canvas, svg, pre{\n      margin: 1.6rem auto;\n      display: block;\n    }\n\n    blockquote {\n      margin: 1.6rem 0;\n    }\n  }\n\n  .hljs {\n    background: ",";\n  }\n  \n  .hljs-emphasis {\n    font-style: italic;\n  }\n  \n  .hljs-strong {\n    font-weight: bold;\n  }\n  \n  .hljs-link {\n    text-decoration: underline;\n  }\n  \n  .hljs-comment,\n  .hljs-quote {\n    color: #a79b87ba;\n    font-style: italic;\n  }\n\n  .hljs-params,\n  .hljs-type {\n    color: #a79b87c4;\n  }\n  \n  .hljs-punctuation,\n  .hljs-attr {\n    color: rgb(89 161 197);\n  }\n  \n  .hljs-selector-tag,\n  .hljs-name,\n  .hljs-meta,\n  .hljs-operator,\n  .hljs-char.escape_ {\n    color: #c56200;\n  }\n  \n  .hljs-keyword,\n  .hljs-deletion {\n    color: #799f67;\n  }\n  \n  .hljs-regexp,\n  .hljs-selector-pseudo,\n  .hljs-selector-attr,\n  .hljs-variable.language_ {\n    color: #cc5e91;\n  }\n  \n  .hljs-subst,\n  .hljs-property,\n  .hljs-code,\n  .hljs-formula,\n  .hljs-section,\n  .hljs-title.function_ {\n    color: #e36b6b;\n  }\n  \n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-addition,\n  .hljs-selector-class,\n  .hljs-title.class_,\n  .hljs-title.class_.inherited__,\n  .hljs-meta .hljs-string {\n    color: #c68032;\n  }\n  \n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-number,\n  .hljs-literal,\n  .hljs-link,\n  .hljs-built_in,\n  .hljs-title,\n  .hljs-selector-id,\n  .hljs-tag,\n  .hljs-doctag,\n  .hljs-attribute,\n  .hljs-template-tag,\n  .hljs-meta .hljs-keyword {\n    color: ",";\n  }\n\n"]);return _templateObject=function(){return n},n}let i=o.ZP.div.withConfig({componentId:"sc-8867f6a5-0"})(_templateObject(),n=>n.theme.colors.textSecondary,n=>n.theme.colors.textPrimary,n=>n.theme.colors.textGray,n=>n.theme.colors.textPrimary,l.iG,n=>n.theme.colors.accent,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.textSecondary,n=>n.theme.colors.textGray,n=>n.theme.colors.accent,n=>n.theme.colors.codeBlockBg,n=>n.theme.colors.accent)}}]);