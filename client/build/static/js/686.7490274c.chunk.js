/*! For license information please see 686.7490274c.chunk.js.LICENSE.txt */
(self.webpackChunkkhg_tec_website=self.webpackChunkkhg_tec_website||[]).push([[686],{7686:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return u}});var a=n(3433),t=n(4038),s=n(2785),r={uiUxDesignExamples:"UiUxDesignExamples_uiUxDesignExamples__yGwjn",uiUxDesignExamples__container:"UiUxDesignExamples_uiUxDesignExamples__container__2p6N9",uiUxDesignExamples__title:"UiUxDesignExamples_uiUxDesignExamples__title__2wYu-",uiUxDesignExamples__marque:"UiUxDesignExamples_uiUxDesignExamples__marque__ppvAe",uiUxDesignExamples__imgList:"UiUxDesignExamples_uiUxDesignExamples__imgList__l2MUV",uiUxDesignExamples__imgList_desk:"UiUxDesignExamples_uiUxDesignExamples__imgList_desk__B4ywM",uiUxDesignExamples__imgList_mob:"UiUxDesignExamples_uiUxDesignExamples__imgList_mob__Ag22j",uiUxDesignExamples__slide:"UiUxDesignExamples_uiUxDesignExamples__slide__d96MV",uiUxDesignExamples__img:"UiUxDesignExamples_uiUxDesignExamples__img__86lcm"},l=n(9002),m=n(184),o=[{img1:[l.HNv,l.b30],img2:[l.RGF,l.h7b]},{img1:[l.ynl,l.Mu9],img2:[l.p1B,l.ZV8]},{img1:[l.$6H,l._kr],img2:[l.ch_,l.NZG]},{img1:[l.Esl,l._EZ],img2:[l.gw$,l.anV]},{img1:[l.Eww,l.XlC],img2:[l.c5_,l.EaP]},{img1:[l.sT_,l.m6v],img2:[l.$Rw,l.RAc]}];var u=function(){var e=o.map((function(e){return e.img1})),i=o.map((function(e){return e.img2})),n=[].concat((0,a.Z)(e),(0,a.Z)(i));return(0,m.jsx)("section",{className:r.uiUxDesignExamples,children:(0,m.jsxs)("div",{className:"".concat(r.uiUxDesignExamples__container," container"),children:[(0,m.jsxs)("h3",{className:"".concat(r.uiUxDesignExamples__title," titleDef"),children:["Our ",(0,m.jsx)("span",{className:"lightBlueText",children:"examples"})]}),(0,m.jsx)("div",{className:"".concat(r.uiUxDesignExamples__imgList_desk," ").concat(r.uiUxDesignExamples__imgList),children:(0,m.jsx)(t.Z,{gradient:!1,speed:100,className:r.uiUxDesignExamples__marque,pauseOnHover:!0,children:o.map((function(e,i){return(0,m.jsxs)("div",{className:r.uiUxDesignExamples__slide,children:[(0,m.jsx)(s.Z,{srcSet:e.img1[1],src:e.img1[0],alt:"example",pictureClass:r.uiUxDesignExamples__picture,className:r.uiUxDesignExamples__img}),(0,m.jsx)(s.Z,{srcSet:e.img2[1],src:e.img2[2],alt:"example",pictureClass:r.uiUxDesignExamples__picture,className:r.uiUxDesignExamples__img})]},i)}))})}),(0,m.jsx)("div",{className:"".concat(r.uiUxDesignExamples__imgList_mob," ").concat(r.uiUxDesignExamples__imgList),children:(0,m.jsx)(t.Z,{gradient:!1,speed:100,className:r.uiUxDesignExamples__marque,children:n.map((function(e,i){return(0,m.jsx)("div",{className:r.uiUxDesignExamples__slide,children:(0,m.jsx)(s.Z,{srcSet:e[1],src:e[0],alt:"example",pictureClass:r.uiUxDesignExamples__picture,className:r.uiUxDesignExamples__img})},i)}))})})]})})}},4038:function(e,i,n){var a=n(2791);function t(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=t(a),r=function(){return r=Object.assign||function(e){for(var i,n=1,a=arguments.length;n<a;n++)for(var t in i=arguments[n])Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e},r.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var i=document.createElement("style");i.setAttribute("type","text/css"),i.innerHTML=e,document.head.appendChild(i)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');i.Z=function(e){var i,n,t,l,m=e.style,o=void 0===m?{}:m,u=e.className,c=void 0===u?"":u,d=e.play,x=void 0===d||d,g=e.pauseOnHover,p=void 0!==g&&g,_=e.pauseOnClick,v=void 0!==_&&_,f=e.direction,E=void 0===f?"left":f,U=e.speed,h=void 0===U?20:U,D=e.delay,y=void 0===D?0:D,w=e.loop,N=void 0===w?0:w,b=e.gradient,j=void 0===b||b,k=e.gradientColor,C=void 0===k?[255,255,255]:k,L=e.gradientWidth,Z=void 0===L?200:L,q=e.onFinish,O=e.onCycleComplete,R=e.children,A=a.useState(0),S=A[0],B=A[1],H=a.useState(0),M=H[0],z=H[1],V=a.useState(!1),F=V[0],G=V[1],T=a.useRef(null),X=a.useRef(null);a.useEffect((function(){if(F){var e=function(){X.current&&T.current&&(B(T.current.getBoundingClientRect().width),z(X.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[F]),a.useEffect((function(){G(!0)}),[]);var $="rgba("+C[0]+", "+C[1]+", "+C[2],P=M<S?S/h:M/h;return s.default.createElement(a.Fragment,null,F?s.default.createElement("div",{ref:T,style:r(r({},o),(i={},i["--pause-on-hover"]=!x||p?"paused":"running",i["--pause-on-click"]=!x||p&&!v||v?"paused":"running",i)),className:c+" marquee-container"},j&&s.default.createElement("div",{style:(n={},n["--gradient-color"]=$+", 1), "+$+", 0)",n["--gradient-width"]="number"===typeof Z?Z+"px":Z,n),className:"overlay"}),s.default.createElement("div",{ref:X,style:(t={},t["--play"]=x?"running":"paused",t["--direction"]="left"===E?"normal":"reverse",t["--duration"]=P+"s",t["--delay"]=y+"s",t["--iteration-count"]=N?""+N:"infinite",t),className:"marquee",onAnimationIteration:O,onAnimationEnd:q},R),s.default.createElement("div",{style:(l={},l["--play"]=x?"running":"paused",l["--direction"]="left"===E?"normal":"reverse",l["--duration"]=P+"s",l["--delay"]=y+"s",l["--iteration-count"]=N?""+N:"infinite",l),className:"marquee","aria-hidden":"true"},R)):null)}}}]);
//# sourceMappingURL=686.7490274c.chunk.js.map