"use strict";(self.webpackChunkdelivery_app_frontend=self.webpackChunkdelivery_app_frontend||[]).push([[530],{2609:function(n,e,t){t.d(e,{z:function(){return c}});var r=t(2624),i=t(184),c=function(n){var e=n.children,t=n.type,c=n.onClick,s=n.isActive,o=void 0!==s&&s;return(0,i.jsx)(r.r,{type:t,onClick:c,isActive:o,children:e})}},530:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,c,s,o,d,l,u,a,x,p,f,h,j=t(9439),v=t(2791),Z=t(5861),g=t(4687),b=t.n(g),m=t(2609),y=t(4585),P=t(168),k=t(6444),w=k.ZP.ul(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  margin: 20px;\n"]))),C=k.ZP.li(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  > button {\n    margin: 0 auto;\n\n    :active {\n      background-color: #286507;\n      color: white;\n    }\n  }\n"]))),z=t(8006),A=t(184),S=function(n){var e=n.setProducts,t=(0,v.useState)("McDonalds"),r=(0,j.Z)(t,2),i=r[0],c=r[1],s=(0,v.useState)(!1),o=(0,j.Z)(s,2),d=o[0],l=o[1];(0,v.useEffect)((function(){var n=function(){var n=(0,Z.Z)(b().mark((function n(){var t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),e([]),n.next=4,(0,z.gF)(i);case 4:t=n.sent,e(t),l(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[i,e]);var u=function(){var n=(0,Z.Z)(b().mark((function n(e){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c(e.target.innerText);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,A.jsx)(A.Fragment,{children:d?(0,A.jsx)(y.a,{}):(0,A.jsxs)(w,{children:[(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"McDonalds"===i,onClick:u,children:"McDonalds"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"KFC"===i,onClick:u,children:"KFC"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"Starbucks"===i,onClick:u,children:"Starbucks"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"Domino's Pizza"===i,onClick:u,children:"Domino's Pizza"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"Subway"===i,onClick:u,children:"Subway"})})]})})},_=t(3433),O=t(2624),D=k.ZP.div(c||(c=(0,P.Z)(["\n  position: relative;\n  width: 370px;\n  min-height: 500px;\n  padding: 10px;\n  border-radius: 20px;\n  border: 2px solid #286507;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);\n\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n"]))),F=k.ZP.figure(s||(s=(0,P.Z)(["\n  margin-bottom: 10px;\n"]))),M=k.ZP.img(o||(o=(0,P.Z)(["\n  width: 100%;\n  height: 220px;\n  object-fit: contain;\n  border-radius: 20px;\n  border: 2px solid #f8b602;\n"]))),E=k.ZP.figcaption(d||(d=(0,P.Z)(["\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 22px;\n"]))),K=k.ZP.div(l||(l=(0,P.Z)(["\n  > p {\n    text-align: left;\n    :not(:last-child) {\n      margin-bottom: 15px;\n    }\n    :last-child {\n      color: red;\n    }\n  }\n"]))),T=k.ZP.span(u||(u=(0,P.Z)(["\n  font-weight: 600;\n"]))),I=(0,k.ZP)(O.r)(a||(a=(0,P.Z)(["\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  transform: translateX(-50%);\n"]))),R=function(n){var e=n.product,t=n.currentOrder,r=n.setCurrentOrder,i=(0,v.useState)(!1),c=(0,j.Z)(i,2),s=c[0],o=c[1],d=e._id,l=e.name,u=e.img,a=e.cuisine,x=e.ingredients,p=e.price,f=e.type;(0,v.useEffect)((function(){var n=t.find((function(n){return n._id===d}));o(!!n)}),[t,d]);return(0,A.jsxs)(D,{children:[(0,A.jsxs)(F,{children:[(0,A.jsx)(M,{src:u,alt:l,width:"300px"}),(0,A.jsx)(E,{children:l})]}),(0,A.jsxs)(K,{children:[(0,A.jsxs)("p",{children:[(0,A.jsx)(T,{children:"Type:"})," ",f]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(T,{children:"Ingredients: "}),x.length>0?x.join(", "):"not indicated by manufactor"]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(T,{children:"Cuisine:"})," ",a]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(T,{children:"Price:"})," ",p,"$"]})]}),(0,A.jsx)(I,{type:"button",onClick:function(){s?(r((function(n){return n.filter((function(n){return n._id!==d}))})),o(!1)):(r((function(n){return[].concat((0,_.Z)(n),[e])})),o(!0))},isActive:s,children:s?"Remove from cart":"Add to cart"})]})},X=k.ZP.div(x||(x=(0,P.Z)(["\n  display: flex;\n  height: 100%;\n"]))),$=k.ZP.div(p||(p=(0,P.Z)(["\n  flex: 4;\n"]))),q=k.ZP.div(f||(f=(0,P.Z)(["\n  flex: 1;\n"]))),B=k.ZP.ul(h||(h=(0,P.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin: 20px 0;\n"]))),G=function(n){var e=n.currentOrder,t=n.setCurrentOrder,r=(0,v.useState)([]),i=(0,j.Z)(r,2),c=i[0],s=i[1];return(0,A.jsxs)(X,{children:[(0,A.jsx)(q,{children:(0,A.jsx)(S,{setProducts:s})}),(0,A.jsx)($,{children:(0,A.jsx)(B,{children:c.map((function(n){return(0,A.jsx)("li",{children:(0,A.jsx)(R,{product:n,currentOrder:e,setCurrentOrder:t})},n._id)}))})})]})}}}]);
//# sourceMappingURL=530.8d045bab.chunk.js.map