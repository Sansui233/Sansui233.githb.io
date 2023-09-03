"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{5470:function(n,e,t){t.d(e,{Z:function(){return nx}});var r=t(1527),i=t(2095),o=t(8598);function s(){let n=(0,i._)(["\n  padding: 24px 0 10px 0;\n  text-align: center;\n  font-size: 0.625rem;\n\n  div {\n    margin: 1rem auto;\n  }\n\n  a{\n    transition: color .5s;\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  i {\n    font-size: 1.5rem;\n    margin: 0 0.5rem;\n  }\n"]);return s=function(){return n},n}let a=o.ZP.div.withConfig({componentId:"sc-9b286a0d-0"})(s(),n=>n.theme.colors.goldHover);var c=()=>(0,r.jsxs)(a,{children:[(0,r.jsx)("a",{href:"https://github.com/sansui233",children:(0,r.jsx)("i",{className:"icon-github-rounded"})}),(0,r.jsx)("a",{href:"mailto:sansuilnm@gmail.com",children:(0,r.jsx)("i",{className:"icon-email-rounded"})}),(0,r.jsx)("a",{href:"/rss",children:(0,r.jsx)("i",{className:"icon-rss-rounded"})}),(0,r.jsxs)("div",{children:["Code & Design by Sansui 2022"," ",(0,r.jsx)("br",{})," ","All rights reserved"]})]}),l=t(9050),d=t.n(l),u=t(3242),h=t(959);function f(n,e){let t=null;return function(){t||(n.apply(this,arguments),t=setTimeout(()=>{clearTimeout(t),t=null},e))}}function m(){let n=(0,i._)(["\n  width: ",";\n  height: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n"]);return m=function(){return n},n}function p(){let n=(0,i._)(["\n  background: ",";\n  height: 2px;\n  transition: all .3s;\n\n  &.is-close {\n    opacity: 0;\n  }\n"]);return p=function(){return n},n}function x(){let n=(0,i._)(["transform: rotate(45deg);"]);return x=function(){return n},n}function g(){let n=(0,i._)(["transform: rotate(-45deg);"]);return g=function(){return n},n}function v(){let n=(0,i._)(["\n  height: 2px;\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: ",";\n    transition: all .3s;\n  }\n\n  &::before {\n    ","\n  }\n  &::after {\n    ","\n  }\n"]);return v=function(){return n},n}let w=o.ZP.div.withConfig({componentId:"sc-93e7b0bf-0"})(m(),n=>n.width,n=>n.height?n.height:"100%"),b=o.ZP.div.withConfig({componentId:"sc-93e7b0bf-1"})(p(),n=>n.theme.colors.textPrimary),j=o.ZP.div.withConfig({componentId:"sc-93e7b0bf-2"})(v(),n=>n.theme.colors.textPrimary,n=>n.$isClose?(0,o.iv)(x()):"",n=>n.$isClose?(0,o.iv)(g()):"");var y=n=>{let{width:e="1em",height:t="1em",isClose:i,isCloseToggler:o}=n;return(0,r.jsxs)(w,{width:e,height:t,onClick:o,children:[(0,r.jsx)(b,{className:i?"is-close":""}),(0,r.jsx)(j,{$isClose:i}),(0,r.jsx)(b,{className:i?"is-close":""})]})};class _{}class C extends _{async search(n){if(""===(n=n.replace(/^\s+|\s+$/g,""))){this.notifyInstant([],!0);return}this._tasks_add(n),await Promise.all(this.tasks),this.notifyInstant([...this.res],!0),this._clear()}_tasks_add(n){this.data.forEach(e=>{this.tasks.push(this.find(n,e))})}_clear(){this.tasks=[],this.res=[]}find(n,e,t){return new Promise(t=>{for(let t=0;t<this.field.length;t++){let r=this.field[t];if(!(r in e))continue;let i=this._match(e[r],n);if(-1!==i){let t=(()=>{if("title"!==r){let n=i-10<0?0:i-10,t=i+40>e[r].length?e[r].length:i+40;return console.log(n,t,e[r].length),e[r].slice(n,t).replaceAll("\n","")}})();console.log(t),this.res.push({ref:e.id,title:e.title,excerpt:t||void 0,matched:n});break}}0!==this.res.length&&this.notify([...this.res]),t()})}_match(n,e){if(n=n.toLowerCase(),e=e.toLowerCase(),!/^[A-Za-z]+$/.test(e))return n.indexOf(e);{let t=RegExp("\\b".concat(e,"\\b"),"i"),r=t.exec(n);if(r)return r.index}return -1}constructor(n){super(),this.data=n.data,this.ref=n.ref,this.field=n.field,this.tasks=[],this.res=[],this.notify=f(n.notifier,125),this.notifyInstant=n.notifier}}var k=t(5545);function I(){let n=(0,i._)(["\n  min-width: 60px;\n  min-height: 60px;\n  z-index: 20;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  transform: scale3d(1, 1, 1); /* New layer*/\n  ","\n"]);return I=function(){return n},n}let P=o.zo.div(I(),n=>n.theme.colors.bg,n=>n.theme.colors.uiLineGray,()=>k.Gl);function Z(){let n=(0,i._)(["\n  overflow-y: scroll;\n  max-height: 60vh;\n"]);return Z=function(){return n},n}function S(){let n=(0,i._)(["\n  position: sticky;\n  top: 0;\n  background: ",";\n"]);return S=function(){return n},n}function N(){let n=(0,i._)(["\n  border: none;\n  border-bottom: 1px solid ",";\n  border-radius: 0;\n  background: ",";\n  width: 100%;\n  color: ",";\n\n\n  &:focus,\n  &:focus-visible{\n    outline: none;\n    border-bottom: 1px solid ",";\n  }\n"]);return N=function(){return n},n}function z(){let n=(0,i._)(["\n  padding: 0.375rem 0;\n  display: block;\n\n  \n  &:hover>span{\n    box-shadow: inset 0 -0.5em 0 ",';\n  }\n\n  &>span::before {\n    content: "▪";\n    font-size: 1rem;\n    margin-right: 0.67rem;\n    color: ',";\n  }\n  \n  &>span {\n    transition: box-shadow .5s;\n  }\n"]);return z=function(){return n},n}function E(){let n=(0,i._)(["\n  font-size: 0.875rem;\n  color: ",";\n  overflow: hidden;\n  white-space: nowrap;\n  wrap: no-wrap;\n  padding-left: 1rem;\n"]);return E=function(){return n},n}function T(){let n=(0,i._)(["\n  min-height: unset;\n  position: fixed;\n  top: 55px;\n  right: 10px;\n  width: 24rem;\n  overflow: hidden;\n\n\n  &.hidden {\n    display: none;\n  }\n  \n  & mark {\n    background: none;\n    color: ","\n  }\n\n  @media screen and (max-width: 580px){\n    width: 96%;\n    max-height:50%\n  }\n  \n"]);return T=function(){return n},n}let Y=o.ZP.div.withConfig({componentId:"sc-15ee1aba-0"})(Z()),L=o.ZP.div.withConfig({componentId:"sc-15ee1aba-1"})(S(),n=>n.theme.colors.bg),F=o.ZP.input.withConfig({componentId:"sc-15ee1aba-2"})(N(),n=>n.theme.colors.uiLineGray,n=>n.theme.colors.bg,n=>n.theme.colors.textPrimary,n=>n.theme.colors.goldHover),G=(0,o.ZP)(d()).withConfig({componentId:"sc-15ee1aba-3"})(z(),n=>n.theme.colors.goldHover,n=>n.theme.colors.gold),H=o.ZP.div.withConfig({componentId:"sc-15ee1aba-4"})(E(),n=>n.theme.colors.textGray),$=(0,o.ZP)(P).withConfig({componentId:"sc-15ee1aba-5"})(T(),n=>n.theme.colors.gold);var R=function(n){let{outSetSearch:e,stateToInner:t,iconEle:i}=n,[o,s]=(0,h.useState)(),[a,c]=(0,h.useState)([]),[l,d]=(0,h.useState)(t),u=(0,h.useRef)(null),f=(0,h.useRef)(null),[m,p]=(0,h.useState)(!1),x=(0,h.useCallback)(n=>{e(n),d(n)},[e]);(0,h.useEffect)(()=>{d(t)},[t]),(0,h.useEffect)(()=>{fetch("/data/posts/index.json").then(n=>n.json()).then(n=>{let e=new C({data:n,ref:"id",field:["title","description","keywords","content"],notifier:c});s(e),p(!0)})},[]),(0,h.useEffect)(()=>{function n(n){var e;let t=u.current&&u.current.contains(n.target),r=i.current&&(null===(e=i.current)||void 0===e?void 0:e.contains(n.target));t||r||x(!1)}function e(n){"Escape"===n.key&&(console.log("press"),x(!1))}return document.addEventListener("mousedown",e=>n(e),!1),document.addEventListener("keydown",n=>{e(n)},!1),()=>{document.removeEventListener("mousedown",e=>n(e),!1),document.removeEventListener("keydown",n=>{e(n)},!1)}},[i,x]),(0,h.useEffect)(()=>{if(l){var n;null===(n=f.current)||void 0===n||n.focus()}},[l]);let g=function(n,e){let t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];let s=this,a=r&&!t;"number"==typeof t&&clearTimeout(t),t=setTimeout(()=>{t=null,r||n.apply(s,i)},300),a&&n.apply(s,i)}}(function(n){f.current&&(null==o||o.search(n.target.value))},300);function v(n,e){let t=RegExp("(".concat(e,")"),"gi"),i=n.split(t);return(0,r.jsx)(r.Fragment,{children:i.map((n,e)=>t.test(n)?(0,r.jsx)("mark",{children:n},e):n)})}return(0,r.jsxs)($,{ref:u,className:l?"":"hidden",children:[(0,r.jsx)(L,{style:{padding:"0.7rem 1rem 0 1rem"},children:(0,r.jsx)(F,{type:"text",placeholder:"关键词搜索",ref:f,onInput:g})}),(0,r.jsx)(Y,{style:{padding:"0.5rem 1rem "},children:m?0===a.length?(0,r.jsx)(r.Fragment,{}):a.map((n,e)=>{let t=n.ref.substring(0,n.ref.lastIndexOf("."));return(0,r.jsxs)(G,{href:"/posts/".concat(t),onClick:()=>{x(!1)},children:[(0,r.jsx)("span",{children:v(n.title,n.matched)}),(0,r.jsx)(H,{children:n.excerpt?v(n.excerpt,n.matched):void 0})]},e)}):(0,r.jsx)("div",{style:{fontSize:"0.875rem",opacity:.5},children:(0,r.jsx)(H,{children:"搜索初始化中……"})})})]})},B=t(3948);function A(){let n=(0,i._)(["\n  width: 24px;\n  height: 20px;\n  position: fixed;\n  top: 22px;\n  right: 20px;\n"]);return A=function(){return n},n}function O(){let n=(0,i._)(["\n  font-weight: 400;\n  padding-top: 4rem;\n  font-size: 0.625rem;\n"]);return O=function(){return n},n}function X(){let n=(0,i._)(["\n  margin: 0.5rem 0;\n  a{\n    transition: color .5s;\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  i {\n    font-size: 1.5rem;\n    margin: 0 0.5rem;\n  }\n"]);return X=function(){return n},n}function D(){let n=(0,i._)(["\n  background: ",";\n  overflow: auto;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  transform: translateY(0);\n  transition: transform 1s cubic-bezier(0.46, 0, 0.08, 1.11);\n\n  &.hidden {\n    transform: translateY(-100%);\n  }\n\n  h1 {\n    ","\n    span{\n      position: relative;\n    }\n    span::after {\n      content:'';\n      position: absolute;\n      left:0;\n      bottom: -1rem;\n      width: 100%;\n      height: 1px;\n      background: ",";\n    }\n  }\n"]);return D=function(){return n},n}function M(){let n=(0,i._)(["\n  margin: 0 auto;\n  padding: 92px 0px;\n  text-align: center;\n  font-weight: bold;\n"]);return M=function(){return n},n}function V(){let n=(0,i._)(["\n\n  font-size: 1.625rem;\n  line-height: 2.75rem;\n  position: relative;\n  transition: box-shadow .3s ease;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: inset 0 -0.5em 0 #ffffff55;\n    transform: scale(1.2);\n  }\n"]);return V=function(){return n},n}function U(n){let{isShow:e,toggle:t}=n,i=(0,h.useContext)(o.Ni),s=(0,h.useMemo)(()=>{let n=i.mode;return"system"===n?"系统外观":"dark"===n?"夜间模式":"日间模式"},[i]);return(0,r.jsxs)(K,{className:e?"":"hidden",children:[(0,r.jsxs)(Q,{style:{paddingTop:"8rem"},children:[(0,r.jsx)("h1",{children:(0,r.jsx)("span",{children:"SANSUI'S BLOG"})}),(0,r.jsx)("div",{onClick:function(){let n=(0,B.Z8)();(0,B.wl)("system"===n?"dark":"dark"===n?"light":"system")},children:(0,r.jsx)(nn,{style:{fontSize:"1.625rem"},children:s})}),(0,r.jsx)("div",{children:(0,r.jsx)(nn,{children:(0,r.jsx)(d(),{href:"/categories",children:"分类"})})}),(0,r.jsx)("div",{children:(0,r.jsx)(nn,{children:(0,r.jsx)(d(),{href:"/atom.xml",children:"RSS"})})}),(0,r.jsxs)(q,{children:[(0,r.jsxs)(J,{children:[(0,r.jsx)("a",{href:"https://github.com/sansui233",children:(0,r.jsx)("i",{className:"icon-github-rounded"})}),(0,r.jsx)("a",{href:"mailto:sansuilnm@gmail.com",children:(0,r.jsx)("i",{className:"icon-email-rounded"})}),(0,r.jsx)("a",{href:"/rss",children:(0,r.jsx)("i",{className:"icon-rss-rounded"})})]}),(0,r.jsx)("div",{children:"Sansui 2022 All rights reserved"})]})]}),(0,r.jsx)(W,{children:(0,r.jsx)(y,{isClose:!0,isCloseToggler:t})})]})}let W=o.ZP.div.withConfig({componentId:"sc-999ff2a7-0"})(A()),q=o.ZP.div.withConfig({componentId:"sc-999ff2a7-1"})(O()),J=o.ZP.div.withConfig({componentId:"sc-999ff2a7-2"})(X(),n=>n.theme.colors.gold),K=o.ZP.div.withConfig({componentId:"sc-999ff2a7-3"})(D(),n=>n.theme.colors.bg,()=>k.Ve,n=>n.theme.colors.gold),Q=o.ZP.div.withConfig({componentId:"sc-999ff2a7-4"})(M()),nn=o.ZP.span.withConfig({componentId:"sc-999ff2a7-5"})(V());function ne(){let n=(0,i._)(["\n  ","\n  transform: translateY(0.145rem);\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: ",";\n  }\n"]);return ne=function(){return n},n}function nt(){let n=(0,i._)(["\n    height: 63px;\n    width: 100%;\n    text-align: center;\n    padding-top: 0.625rem;\n    font-size: 0.625rem;\n    font-style: italic;\n    color: ",";\n    font-family: 'Times New Roman', STSong, '宋体', serif;\n    opacity: .6;\n"]);return nt=function(){return n},n}function nr(){let n=(0,i._)(["\n  height: 63px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  background-color: ",";\n  z-index:10;\n  transform: ",";\n  transition: transform .5s ease;\n"]);return nr=function(){return n},n}function ni(){let n=(0,i._)(["\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: flex-end;\n\n"]);return ni=function(){return n},n}function no(){let n=(0,i._)(["\n  flex: 1 1 auto;\n  display: flex;\n  img {\n    margin-left: 10px;\n    z-index: 11;\n    width: 63px;\n    height: 63px;\n    float: left;\n    cursor: pointer;\n  }\n  justify-content: flex-start;\n\n  @media screen and (max-width: 580px){\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n  @media screen and (max-width: 350px){\n    display: none\n  }\n"]);return no=function(){return n},n}function ns(){let n=(0,i._)(["\n  text-align: right;\n  font-size: 0.875em;\n  cursor: pointer;\n  \n  & > div {\n    display: inline-block;\n    margin-right: 15px;\n  }\n\n  @media screen and (max-width: 580px) {\n    & > div {\n      margin-right: 16px;\n      padding: 1px 0;\n    }\n  }\n"]);return ns=function(){return n},n}function na(){let n=(0,i._)(["\n  flex: 2 1 auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  @media screen and (min-width: 780px) {\n    max-width: 50%;\n  }\n  @media screen and (min-width: 580px) {\n    max-width: 390px;\n  }\n  @media screen and (max-width: 580px) {\n    max-width: 290px;\n  }\n  \n\n  ol {\n    padding: 0 .5em;\n    padding-top: 2px;\n  }\n\n  a {\n    position: relative;\n    font-weight: 500;\n  }\n\n  a::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -3px;\n    width: 0;\n    height: 2px;\n    background: ",";\n    transition: width 1s cubic-bezier(0.34, 0.04, 0.03, 1.4), background .3s;\n  }\n    \n  a:hover::before {\n    width: 100%;\n  }\n\n  ol.current a{\n    color: ",";\n  }\n\n"]);return na=function(){return n},n}function nc(){let n=(0,h.useContext)(o.Ni),[e,t]=(0,h.useState)(!1),[i,s]=(0,h.useState)(!1),[a,c]=(0,h.useState)(!1),l=(0,u.useRouter)(),m=(0,h.useRef)(null);(0,h.useEffect)(()=>{let n=globalThis.scrollY,e=f(()=>{if(globalThis.scrollY<200){t(!1),n=globalThis.scrollY;return}let e=globalThis.scrollY-n;e>10?(t(!0),n=globalThis.scrollY):e<-10&&(t(!1),n=globalThis.scrollY)},80);return globalThis.addEventListener("scroll",e,!0),()=>window.removeEventListener("scroll",e)},[]);let p=()=>{s(!i)},x=n=>{c(!a)};return(0,r.jsxs)(h.Fragment,{children:[(0,r.jsx)(R,{outSetSearch:n=>{c(n)},stateToInner:a,iconEle:m}),(0,r.jsx)(U,{isShow:i,toggle:p}),(0,r.jsxs)(nu,{$isHidden:e,children:[(0,r.jsx)(nf,{children:(0,r.jsx)(d(),{href:"/",passHref:!0,children:(0,r.jsx)("img",{src:n.assets.favico,alt:"Sansui"})})}),(0,r.jsxs)(np,{children:[(0,r.jsx)("ol",{className:"/"===l.pathname?"current":"",children:(0,r.jsx)(d(),{href:"/",children:"Posts"})}),(0,r.jsx)("ol",{className:"/memos"===l.pathname?"current":"",children:(0,r.jsx)(d(),{href:"/memos",children:"Memos"})}),(0,r.jsx)("ol",{className:"/about"===l.pathname?"current":"",children:(0,r.jsx)(d(),{href:"/about",children:"About"})})]}),(0,r.jsxs)(nm,{children:[(0,r.jsx)(nl,{ref:m,onClick:n=>{x(n)},$isSearch:a,children:(0,r.jsx)("i",{className:"icon-search",style:{fontSize:"1.725rem"}})}),(0,r.jsx)("div",{onClick:p,style:{marginRight:"20px",width:"22px"},children:(0,r.jsx)(y,{width:"100%",height:"21px",isClose:i})})]})]}),(0,r.jsx)(nd,{children:"人活着就是为了卡卡西"})]})}let nl=o.ZP.div.withConfig({componentId:"sc-d08d0a03-0"})(ne(),n=>n.$isSearch?"color:"+n.theme.colors.gold+";":"",n=>n.theme.colors.goldHover),nd=o.ZP.div.withConfig({componentId:"sc-d08d0a03-1"})(nt(),n=>n.theme.colors.gold),nu=o.ZP.header.withConfig({componentId:"sc-d08d0a03-2"})(nr(),n=>n.theme.colors.bg,n=>n.$isHidden?"translateY(-100%)":"translateY(0)"),nh=o.ZP.div.withConfig({componentId:"sc-d08d0a03-3"})(ni()),nf=(0,o.ZP)(nh).withConfig({componentId:"sc-d08d0a03-4"})(no()),nm=(0,o.ZP)(nh).withConfig({componentId:"sc-d08d0a03-5"})(ns()),np=o.ZP.nav.withConfig({componentId:"sc-d08d0a03-6"})(na(),n=>n.theme.colors.gold,n=>n.theme.colors.gold);var nx=n=>{let{children:e}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nc,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(c,{})]})}},5499:function(n,e,t){t.r(e),t.d(e,{CommonHeader:function(){return E},MainLayoutStyle:function(){return L},PageDescription:function(){return F},__N_SSG:function(){return z},default:function(){return Y}});var r,i=t(2095),o=t(1527),s=t(6064),a=t.n(s),c=t(9050),l=t.n(c),d=t(959),u=t(8598),h=t(5470);function f(){return(f=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var m=function(n){return d.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"chevron-down_svg__feather chevron-down_svg__feather-chevron-down",viewBox:"0 0 24 24"},n),r||(r=d.createElement("path",{d:"m6 9 6 6 6-6"})))};function p(){let n=(0,i._)(["\n  text-align: right;\n  position: relative;\n  padding: 2rem 0;\n"]);return p=function(){return n},n}function x(){let n=(0,i._)(["\n  position: absolute;\n  right:0;\n  opacity: 0;\n  pointer-events: none;\n  margin-top: .625rem;\n  border-right: 1px solid ",";\n  padding-left: 2.5rem;\n  transform: none;\n  ",";\n  transform: translateY(-0.5rem);\n  transition: opacity .5s ease, transform .5s ease;\n\n  &.is-open {\n    z-index: 1;\n    opacity: 1;\n    transform: translate(0);\n    pointer-events: auto;\n  }\n"]);return x=function(){return n},n}function g(){let n=(0,i._)(["\n  font-size: 0.875rem;\n  padding: 0.3em .6em;\n  cursor: pointer;\n  position: relative;\n  &:hover span{\n    border-bottom: solid 1px ",";\n  }\n"]);return g=function(){return n},n}function v(){let n=(0,i._)(["\n  cursor: pointer;\n  span {\n    transition: box-shadow .5s;\n    box-shadow: inset 0 -1px 0 ",";\n  }\n\n  svg {\n    transition: transform .3s;\n    margin-right: -0.4em;\n    margin-top: -2px;\n    margin-left: 2px;\n  }\n\n  span.is-open {\n    box-shadow: inset 0 -0.5em 0 ",";\n  }\n\n  svg.is-open {\n    transform: rotateX(180deg);\n  }\n\n"]);return v=function(){return n},n}function w(n){let{items:e,current:t,setCurrent:r}=n,[i,s]=(0,d.useState)(!1);return(0,o.jsxs)(b,{onClick:()=>{s(!i)},children:[(0,o.jsxs)(_,{children:[(0,o.jsxs)("span",{className:i?"is-open":"",children:[e[t][0]," ",e[t][1]]}),(0,o.jsx)(m,{className:i?"is-open":""})]}),(0,o.jsx)(j,{className:i?"is-open":"",children:e.map((n,e)=>(0,o.jsx)(y,{onClick:()=>{r(e),s(!1)},children:(0,o.jsxs)("span",{children:[n[0]," ",n[1]]})},e))})]})}let b=u.ZP.nav.withConfig({componentId:"sc-616f5a2c-0"})(p()),j=u.ZP.div.withConfig({componentId:"sc-616f5a2c-1"})(x(),n=>n.theme.colors.gold,n=>n.theme.colors.navBgGradient),y=u.ZP.div.withConfig({componentId:"sc-616f5a2c-2"})(g(),n=>n.theme.colors.gold),_=u.ZP.div.withConfig({componentId:"sc-616f5a2c-3"})(v(),n=>n.theme.colors.goldHover,n=>n.theme.colors.goldHover);var C=t(6977),k=t(5545);function I(){let n=(0,i._)(["\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 0px 48px 48px 48px;\n\n  @media screen and (max-width: 780px) {\n    max-width: 580px;\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 0 20px 48px 20px;\n  }\n"]);return I=function(){return n},n}function P(){let n=(0,i._)(["\n  margin-top: 2rem;\n  font-style: italic;\n  font-size: 0.875rem;\n  color: ",";\n  text-align: right;\n"]);return P=function(){return n},n}function Z(){let n=(0,i._)(["\n  display: grid;\n  grid-template-columns: repeat(2, 50%);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1rem;\n\n  @media screen and (max-width: 780px) {\n    grid-template-columns: repeat(1, 100%);\n  }\n"]);return Z=function(){return n},n}function S(){let n=(0,i._)(["\n  display: block;\n  min-height: 7rem;\n  border-radius: 5px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;\n  opacity: 0;\n  animation: "," .5s ease;\n  animation-fill-mode: forwards;\n  @media (any-hover: hover) {\n    &:hover{\n      ","\n    }\n  }\n\n  @media (any-hover: none) {\n    &:active{\n      ","\n    }\n  }\n\n  .card-content {\n    padding: 1rem;\n  }\n\n  .meta {\n    margin-top: 0.25rem;\n    font-size: 0.875rem;\n  }\n\n  .date {\n    font-size: 0.9rem;\n    font-family: Dosis;\n  }\n"]);return S=function(){return n},n}function N(){let n=(0,i._)(["\n  font-size: 1.125rem;\n  font-weight: 500;\n"]);return N=function(){return n},n}var z=!0;let E=()=>(0,o.jsxs)(d.Fragment,{children:[(0,o.jsx)("meta",{name:"description",content:"A personal blog about work and life"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});function T(n){let{p:e,i:t}=n;return(0,o.jsx)(H,{href:"/posts/"+e.id,passHref:!0,style:{animationDelay:(100*t).toString()+"ms"},children:(0,o.jsxs)("div",{className:"card-content",children:[(0,o.jsx)($,{children:e.title}),(0,o.jsxs)("div",{className:"meta",children:[(0,o.jsx)("span",{className:"date",children:e.date}),(0,o.jsx)("span",{children:" | "}),(0,o.jsx)("i",{className:"icon-material-folder_open",style:{padding:"0.2em"}}),e.categories]})]})})}var Y=n=>{let{posts:e,categories:t}=n,[r,i]=(0,d.useState)(0),s=(0,d.useMemo)(()=>0===r?e:e.filter(n=>n.categories===t[r][0]),[r,e,t]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Sansui - Blog"}),(0,o.jsx)(E,{})]}),(0,o.jsx)(h.Z,{children:(0,o.jsxs)(L,{children:[(0,o.jsx)(w,{items:t,current:r,setCurrent:i}),(0,o.jsx)(G,{children:s.map((n,e)=>(0,o.jsx)(T,{p:n,i:e},n.id))})]})})]})};let L=u.ZP.div.withConfig({componentId:"sc-80f232da-0"})(I()),F=u.ZP.div.withConfig({componentId:"sc-80f232da-1"})(P(),n=>n.theme.colors.textGray),G=u.ZP.section.withConfig({componentId:"sc-80f232da-2"})(Z()),H=(0,u.ZP)(l()).withConfig({componentId:"sc-80f232da-3"})(S(),C.r$,()=>k.Gl,()=>k.Gl),$=u.ZP.span.withConfig({componentId:"sc-80f232da-4"})(N())},6977:function(n,e,t){t.d(e,{ER:function(){return h},r$:function(){return u}});var r=t(2095),i=t(8598);function o(){let n=(0,r._)(["\n0% {\n  opacity: 0;\n}\n100% {\n  opacity: 1;\n}"]);return o=function(){return n},n}function s(){let n=(0,r._)(["\n0% {\n  opacity: 0;\n  transform: translateY(10px);\n}\n100% {\n  opacity: 1;\n  transform: translateY(0);\n}"]);return s=function(){return n},n}function a(){let n=(0,r._)(["\n0% {\n  -webkit-transform: translateX(50px);\n          transform: translateX(50px);\n  opacity: 0;\n}\n100% {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  opacity: 1;\n}\n"]);return a=function(){return n},n}function c(){let n=(0,r._)(["\n0% {\n  -webkit-filter: blur(12px);\n          filter: blur(12px);\n  opacity: 0;\n}\n100% {\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  opacity: 1;\n}\n"]);return c=function(){return n},n}function l(){let n=(0,r._)(["\n0% {\n  transform: translateY(-100%);\n}\n100% {\n  transform: translateY(0);\n}"]);return l=function(){return n},n}function d(){let n=(0,r._)(["\n0% {\n  transform: translateY(0);\n}\n100% {\n  transform: translateY(-100%);\n}"]);return d=function(){return n},n}(0,i.F4)(o());let u=(0,i.F4)(s()),h=(0,i.F4)(a());(0,i.F4)(c()),(0,i.F4)(l()),(0,i.F4)(d())},5545:function(n,e,t){t.d(e,{Gl:function(){return f},Ve:function(){return u},XC:function(){return h}});var r=t(2095),i=t(8598);function o(){let n=(0,r._)(["\n  -webkit-text-stroke: 1px;\n  -webkit-text-fill-color: transparent;\n"]);return o=function(){return n},n}function s(){let n=(0,r._)(["box-shadow: inset 0 -0.3em 0 ",";"]);return s=function(){return n},n}function a(){let n=(0,r._)(["box-shadow: inset 0 -0.5em 0 ",";"]);return a=function(){return n},n}function c(){let n=(0,r._)(["box-shadow: inset 0 -0.8em 0 ",";"]);return c=function(){return n},n}function l(){let n=(0,r._)(["box-shadow: inset 0 -1em 0 ",";"]);return l=function(){return n},n}function d(){let n=(0,r._)(["box-shadow: "," 0px 0.5rem 2rem;"]);return d=function(){return n},n}let u=(0,i.iv)(o()),h={s:(0,i.iv)(s(),n=>n.theme.colors.hoverBg),m:(0,i.iv)(a(),n=>n.theme.colors.hoverBg),l:(0,i.iv)(c(),n=>n.theme.colors.hoverBg),f:(0,i.iv)(l(),n=>n.theme.colors.hoverBg)},f=(0,i.iv)(d(),n=>n.theme.colors.shadowBg)}}]);