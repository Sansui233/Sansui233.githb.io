"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[439,828],{3439:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(1262),i=n(1527),o=n(1557),c=n.n(o),a=n(959),l=n(8598),s=n(3828),d=n(1702),u=n(7100);function _templateObject(){let e=(0,r._)(["\n  min-width: 60px;\n  min-height: 60px;\n  z-index: 20;\n  background: ",";\n  border-radius: 0.75rem;\n  transform: scale3d(1, 1, 1); /* New layer*/\n  ","\n"]);return _templateObject=function(){return e},e}let h=l.zo.div(_templateObject(),e=>e.theme.colors.bg,()=>u.N8);function searchbox_templateObject(){let e=(0,r._)(["\n  overflow-y: scroll;\n  max-height: 60vh;\n"]);return searchbox_templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  position: sticky;\n  top: 0;\n  background: ",";\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  border: none;\n  /*border-bottom: 1px solid ",";*/\n  border-radius: 0;\n  background: ",";\n  width: 100%;\n  color: ",";\n\n\n  &:focus,\n  &:focus-visible{\n    outline: none;\n    /*border-bottom: 1px solid ",";*/\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  padding: 0.375rem 0;\n  display: block;\n  padding-left: 1rem;\n\n  \n  &:hover>span{\n    box-shadow: inset 0 -0.5em 0 ",';\n  }\n\n  &>span {\n    transition: box-shadow .5s;\n    position: relative;\n  }\n\n  &>span::before {\n    content: "•";\n    color: ',";\n    left: -0.875rem;\n    position: absolute;\n  }\n  \n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n  font-size: 0.875rem;\n  color: ",";\n  overflow: hidden;\n  white-space: nowrap;\n  wrap: no-wrap;\n"]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,r._)(["\n  min-height: unset;\n  position: fixed;\n  top: 55px;\n  right: 0px;\n  width: 24rem;\n  overflow: hidden;\n  margin: 0 10px;\n  \n  & mark {\n    background: none;\n    color: ","\n  }\n\n  @media screen and (max-width: 580px){\n    width: 96%;\n    max-height:50%\n  }\n"]);return _templateObject5=function(){return e},e}function SearchBox(e){let{outSetSearch:t,outIsShow:n,iconEle:r,type:o="article"}=e,[c,l]=(0,a.useState)(),[u,h]=(0,a.useState)([]),[v,w]=(0,a.useState)(n),_=(0,a.useRef)(null),j=(0,a.useRef)(null),[k,O]=(0,a.useState)(!1),y=(0,a.useCallback)(e=>{t(e),w(e)},[t]);(0,a.useEffect)(()=>{w(n)},[n]),(0,a.useEffect)(()=>{function handleClick(e){var t;let n=_.current&&_.current.contains(e.target),i=r.current&&(null===(t=r.current)||void 0===t?void 0:t.contains(e.target));n||i||y(!1)}function close(e){"Escape"===e.key&&y(!1)}return document.addEventListener("pointerdown",e=>handleClick(e),!1),document.addEventListener("keydown",e=>{close(e)},!1),()=>{document.removeEventListener("pointerdown",e=>handleClick(e),!1),document.removeEventListener("keydown",e=>{close(e)},!1)}},[r,y]),(0,a.useEffect)(()=>{if(v){var e;null===(e=j.current)||void 0===e||e.focus()}},[v]),(0,a.useEffect)(()=>{!k&&v&&"article"===o&&fetch("/data/posts/index.json").then(e=>e.json()).then(e=>{let t=(0,s.createNaive)({data:e,field:["title","description","keywords","content"],notifier:h});l(t),O(!0)})},[o,k,v]);let C=(0,d.D)(function(e){let t=e.target.value.split(" ");j.current&&(null==c||c.search(t))},300);function highlightSlot(e,t){if(!t)return e;"string"==typeof t&&(t=[t]);let n=RegExp("(".concat(t.join("|"),")"),"gi"),r=e.split(n);return(0,i.jsx)(i.Fragment,{children:r.map((e,t)=>n.test(e)?(0,i.jsx)("mark",{children:e},t):(0,i.jsx)("span",{children:e},t))})}return(0,i.jsxs)(g,{ref:_,style:v?{}:{display:"none"},children:[(0,i.jsx)(m,{style:{padding:"1rem 1rem 0 1rem"},children:(0,i.jsx)(f,{type:"text",placeholder:"搜索你感兴趣的内容，以空格分词",ref:j,onInput:C})}),(0,i.jsx)(p,{style:{padding:"0.5rem 1rem "},children:k?u.map((e,t)=>{var n,r;let o=e.id.substring(0,e.id.lastIndexOf("."));return(0,i.jsxs)(b,{href:"/posts/".concat(o),onClick:()=>{y(!1)},children:[(0,i.jsx)("span",{children:highlightSlot(e.title,null===(n=e.matches)||void 0===n?void 0:n.map(e=>e.word))}),null===(r=e.matches)||void 0===r?void 0:r.map(e=>e.excerpt&&(0,i.jsx)(x,{children:highlightSlot(e.excerpt,e.word)},e.word))]},t)}):(0,i.jsx)("div",{style:{fontSize:"0.875rem",opacity:.5},children:(0,i.jsx)(x,{children:"搜索初始化中……"})})})]})}let p=l.ZP.div.withConfig({componentId:"sc-c30a9a5b-0"})(searchbox_templateObject()),m=l.ZP.div.withConfig({componentId:"sc-c30a9a5b-1"})(_templateObject1(),e=>e.theme.colors.bg),f=l.ZP.input.withConfig({componentId:"sc-c30a9a5b-2"})(_templateObject2(),e=>e.theme.colors.uiLineGray,e=>e.theme.colors.bg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover),b=(0,l.ZP)(c()).withConfig({componentId:"sc-c30a9a5b-3"})(_templateObject3(),e=>e.theme.colors.accentHover,e=>e.theme.colors.accent),x=l.ZP.div.withConfig({componentId:"sc-c30a9a5b-4"})(_templateObject4(),e=>e.theme.colors.textGray),g=(0,l.ZP)(h).withConfig({componentId:"sc-c30a9a5b-5"})(_templateObject5(),e=>e.theme.colors.accent);var v=SearchBox},3828:function(e,t,n){n.r(t),n.d(t,{createNaive:function(){return createNaive}});var r=n(1702),i=JSON.parse('["、","。","〈","〉","《","》","一","一个","一些","一何","一切","一则","一方面","一旦","一来","一样","一种","一般","一转眼","七","万一","三","上","上下","下","不","不仅","不但","不光","不单","不只","不外乎","不如","不妨","不尽","不尽然","不得","不怕","不惟","不成","不拘","不料","不是","不比","不然","不特","不独","不管","不至于","不若","不论","不过","不问","与","与其","与其说","与否","与此同时","且","且不说","且说","两者","个","个别","中","临","为","为了","为什么","为何","为止","为此","为着","乃","乃至","乃至于","么","之","之一","之所以","之类","乌乎","乎","乘","九","也","也好","也罢","了","二","二来","于","于是","于是乎","云云","云尔","五","些","亦","人","人们","人家","什","什么","什么样","今","介于","仍","仍旧","从","从此","从而","他","他人","他们","他们们","以","以上","以为","以便","以免","以及","以故","以期","以来","以至","以至于","以致","们","任","任何","任凭","会","似的","但","但凡","但是","何","何以","何况","何处","何时","余外","作为","你","你们","使","使得","例如","依","依据","依照","便于","俺","俺们","倘","倘使","倘或","倘然","倘若","借","借傥然","假使","假如","假若","做","像","儿","先不先","光","光是","全体","全部","八","六","兮","共","关于","关于具体地说","其","其一","其中","其二","其他","其余","其它","其次","具体地说","具体说来","兼之","内","再","再其次","再则","再有","再者","再者说","再说","冒","冲","况且","几","几时","凡","凡是","凭","凭借","出于","出来","分","分别","则","则甚","别","别人","别处","别是","别的","别管","别说","到","前后","前此","前者","加之","加以","区","即","即令","即使","即便","即如","即或","即若","却","去","又","又及","及","及其","及至","反之","反而","反过来","反过来说","受到","另","另一方面","另外","另悉","只","只当","只怕","只是","只有","只消","只要","只限","叫","叮咚","可","可以","可是","可见","各","各个","各位","各种","各自","同","同时","后","后者","向","向使","向着","吓","吗","否则","吧","吧哒","含","吱","呀","呃","呕","呗","呜","呜呼","呢","呵","呵呵","呸","呼哧","咋","和","咚","咦","咧","咱","咱们","咳","哇","哈","哈哈","哉","哎","哎呀","哎哟","哗","哟","哦","哩","哪","哪个","哪些","哪儿","哪天","哪年","哪怕","哪样","哪边","哪里","哼","哼唷","唉","唯有","啊","啐","啥","啦","啪达","啷当","喂","喏","喔唷","喽","嗡","嗡嗡","嗬","嗯","嗳","嘎","嘎登","嘘","嘛","嘻","嘿","嘿嘿","四","因","因为","因了","因此","因着","因而","固然","在","在下","在于","地","基于","处在","多","多么","多少","大","大家","她","她们","好","如","如上","如上所述","如下","如何","如其","如同","如是","如果","如此","如若","始而","孰料","孰知","宁","宁可","宁愿","宁肯","它","它们","对","对于","对待","对方","对比","将","小","尔","尔后","尔尔","尚且","就","就是","就是了","就是说","就算","就要","尽","尽管","尽管如此","岂但","己","已","已矣","巴","巴巴","年","并","并且","庶乎","庶几","开外","开始","归","归齐","当","当地","当然","当着","彼","彼时","彼此","往","待","很","得","得了","怎","怎么","怎么办","怎么样","怎奈","怎样","总之","总的来看","总的来说","总的说来","总而言之","恰恰相反","您","惟其","慢说","我","我们","或","或则","或是","或曰","或者","截至","所","所以","所在","所幸","所有","才","才能","打","打从","把","抑或","拿","按","按照","换句话说","换言之","据","据此","接着","故","故此","故而","旁人","无","无宁","无论","既","既往","既是","既然","日","时","时候","是","是以","是的","更","曾","替","替代","最","月","有","有些","有关","有及","有时","有的","望","朝","朝着","本","本人","本地","本着","本身","来","来着","来自","来说","极了","果然","果真","某","某个","某些","某某","根据","欤","正值","正如","正巧","正是","此","此地","此处","此外","此时","此次","此间","毋宁","每","每当","比","比及","比如","比方","没奈何","沿","沿着","漫说","点","焉","然则","然后","然而","照","照着","犹且","犹自","甚且","甚么","甚或","甚而","甚至","甚至于","用","用来","由","由于","由是","由此","由此可见","的","的确","的话","直到","相对而言","省得","看","眨眼","着","着呢","矣","矣乎","矣哉","离","秒","称","竟而","第","等","等到","等等","简言之","管","类如","紧接着","纵","纵令","纵使","纵然","经","经过","结果","给","继之","继后","继而","综上所述","罢了","者","而","而且","而况","而后","而外","而已","而是","而言","能","能否","腾","自","自个儿","自从","自各儿","自后","自家","自己","自打","自身","至","至于","至今","至若","致","般的","若","若夫","若是","若果","若非","莫不然","莫如","莫若","虽","虽则","虽然","虽说","被","要","要不","要不是","要不然","要么","要是","譬喻","譬如","让","许多","论","设使","设或","设若","诚如","诚然","该","说","说来","请","诸","诸位","诸如","谁","谁人","谁料","谁知","贼死","赖以","赶","起","起见","趁","趁着","越是","距","跟","较","较之","边","过","还","还是","还有","还要","这","这一来","这个","这么","这么些","这么样","这么点儿","这些","这会儿","这儿","这就是说","这时","这样","这次","这般","这边","这里","进而","连","连同","逐步","通过","遵循","遵照","那","那个","那么","那么些","那么样","那些","那会儿","那儿","那时","那样","那般","那边","那里","都","鄙人","鉴于","针对","阿","除","除了","除外","除开","除此之外","除非","随","随后","随时","随着","难道说","零","非","非但","非徒","非特","非独","靠","顺","顺着","首先","︿","！","＃","＄","％","＆","（","）","＊","＋","，","０","１","２","３","４","５","６","７","８","９","：","；","＜","＞","？","＠","［","］","｛","｜","｝","～","￥"]');let createNaive=e=>{let t=[],n=[],i=e.disableStreamNotify?void 0:(0,r.P)(e.notifier,125),find=(t,r,o)=>new Promise(o=>{for(let i=0;i<e.field.length;i++){let o=e.field[i];if(o in r){if("tags"===o){let e=t.filter(e=>"#"===e[0]).map(e=>e.slice(0)),i=r[o].filter(t=>t in e);if(!(i.length>0))continue;n.push({id:r.id,title:r.title,matches:i.map(e=>({word:e}))});break}{let e=_match(r[o].toLowerCase(),t.map(e=>e.toLocaleLowerCase()));if(0!==e.length){let t=e.map(e=>{let t=e.index-10<0?0:e.index-10,n=e.index+40>r[o].length?r[o].length:e.index+40;return{word:e.word,excerpt:"title"!==o?r[o].slice(t,n).replaceAll("\n",""):void 0}});n.push({id:r.id,title:r.title,matches:t});break}}}}0!==n.length&&i&&i([...n]),o()}),_tasks_add=n=>{e.data.forEach(e=>{t.push(find(n,e))})},_clear=()=>{t.splice(0),n.splice(0)},search=async r=>{if(0===(r=r.map(e=>e.replace(/^\s+|\s+$/g,"")).filter(e=>""!==e)).length){e.notifier([]);return}_tasks_add(r),await Promise.all(t),n.length>1&&void 0!==n[0].matches&&n.sort((e,t)=>e.matches.length>t.matches.length?-1:1),e.notifier([...n]),_clear()};return{search}},_match=(e,t)=>{let n=[];for(let r of t){if(i.includes(r))break;if(/^[A-Za-z]+$/.test(r)){let t=RegExp("\\b".concat(r,"\\b"),"i"),i=t.exec(e);if(i)n.push({word:r,index:i.index});else break}else{let t=e.indexOf(r);if(-1!==t)n.push({word:r,index:t});else break}}return n}}}]);