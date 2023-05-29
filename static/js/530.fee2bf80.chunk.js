"use strict";(self.webpackChunkdelivery_app_frontend=self.webpackChunkdelivery_app_frontend||[]).push([[530],{2609:function(n,t,e){e.d(t,{z:function(){return c}});var i=e(2624),r=e(184),c=function(n){var t=n.children,e=n.type,c=n.onClick,s=n.isActive,o=void 0!==s&&s;return(0,r.jsx)(i.r,{type:e,onClick:c,isActive:o,children:t})}},530:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var i,r,c,s,o,d,a,l,u,x,p,h,f,j=e(9439),Z=e(2791),v=e(5861),g=e(4687),b=e.n(g),m=e(2609),y=e(4585),P=e(168),k=e(6444),w=k.ZP.ul(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  margin: 20px;\n"]))),C=k.ZP.li(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  > button {\n    margin: 0 auto;\n\n    :active {\n      background-color: #286507;\n      color: white;\n    }\n  }\n"]))),z=e(8006),A=e(184),S=function(n){var t=n.setProducts,e=(0,Z.useState)("McDonalds"),i=(0,j.Z)(e,2),r=i[0],c=i[1],s=(0,Z.useState)(!1),o=(0,j.Z)(s,2),d=o[0],a=o[1];(0,Z.useEffect)((function(){var n=function(){var n=(0,v.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),t([]),n.next=4,(0,z.gF)(r);case 4:e=n.sent,t(e),a(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[r,t]);var l=function(){var n=(0,v.Z)(b().mark((function n(t){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c(t.target.innerText);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,A.jsx)(A.Fragment,{children:d?(0,A.jsx)(y.a,{}):(0,A.jsxs)(w,{children:[(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"McDonalds"===r,onClick:l,children:"McDonalds"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"KFC"===r,onClick:l,children:"KFC"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"Starbucks"===r,onClick:l,children:"Starbucks"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"Domino's Pizza"===r,onClick:l,children:"Domino's Pizza"})}),(0,A.jsx)(C,{children:(0,A.jsx)(m.z,{type:"button",isActive:"Subway"===r,onClick:l,children:"Subway"})})]})})},_=e(3433),D=e(2624),F=k.ZP.div(c||(c=(0,P.Z)(["\n  position: relative;\n  width: 370px;\n  min-height: 500px;\n  padding: 10px;\n  border-radius: 20px;\n  border: 2px solid #286507;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);\n\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n"]))),I=k.ZP.figure(s||(s=(0,P.Z)(["\n  margin-bottom: 10px;\n"]))),M=k.ZP.img(o||(o=(0,P.Z)(["\n  width: 100%;\n  height: 220px;\n  object-fit: contain;\n  border-radius: 20px;\n  border: 2px solid #f8b602;\n"]))),K=k.ZP.figcaption(d||(d=(0,P.Z)(["\n  margin-top: 10px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 22px;\n"]))),E=k.ZP.div(a||(a=(0,P.Z)(["\n  > p {\n    text-align: left;\n    :not(:last-child) {\n      margin-bottom: 15px;\n    }\n    :last-child {\n      color: red;\n    }\n  }\n"]))),R=k.ZP.span(l||(l=(0,P.Z)(["\n  font-weight: 600;\n"]))),T=(0,k.ZP)(D.r)(u||(u=(0,P.Z)(["\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  transform: translateX(-50%);\n"]))),X=function(n){var t=n.product,e=t._id,i=t.name,r=t.img,c=t.cuisine,s=t.ingredients,o=t.price,d=(t.type,n.setProductsId),a=(0,Z.useState)(!1),l=(0,j.Z)(a,2),u=l[0],x=l[1];return(0,A.jsxs)(F,{children:[(0,A.jsxs)(I,{children:[(0,A.jsx)(M,{src:r,alt:i,width:"300px"}),(0,A.jsx)(K,{children:i})]}),(0,A.jsxs)(E,{children:[(0,A.jsxs)("p",{children:[(0,A.jsx)(R,{children:"Ingredients: "}),s.length>0?s.join(", "):"not indicated by manufactor"]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(R,{children:"Cuisine:"})," ",c]}),(0,A.jsxs)("p",{children:[(0,A.jsx)(R,{children:"Price:"})," ",o,"$"]})]}),(0,A.jsx)(T,{type:"button",onClick:function(){u?(d((function(n){return n.filter((function(n){return n!==e}))})),x(!1)):(d((function(n){return[].concat((0,_.Z)(n),[e])})),x(!0))},isActive:u,children:u?"Remove from cart":"Add to cart"})]})},$=k.ZP.div(x||(x=(0,P.Z)(["\n  display: flex;\n  height: 100%;\n"]))),q=k.ZP.div(p||(p=(0,P.Z)(["\n  flex: 4;\n"]))),B=k.ZP.div(h||(h=(0,P.Z)(["\n  flex: 1;\n"]))),G=k.ZP.ul(f||(f=(0,P.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin: 20px 0;\n"]))),H=function(n){var t=n.setProductsId,e=(0,Z.useState)([]),i=(0,j.Z)(e,2),r=i[0],c=i[1];return(0,A.jsxs)($,{children:[(0,A.jsx)(B,{children:(0,A.jsx)(S,{setProducts:c})}),(0,A.jsx)(q,{children:(0,A.jsx)(G,{children:r.map((function(n){return(0,A.jsx)("li",{children:(0,A.jsx)(X,{product:n,setProductsId:t})},n._id)}))})})]})}}}]);
//# sourceMappingURL=530.fee2bf80.chunk.js.map