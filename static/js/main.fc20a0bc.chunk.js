(this.webpackJsonpcontext=this.webpackJsonpcontext||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(4),i=n.n(o),a=(n(14),r.a.createContext(["light",function(){}])),s=n(2),j=n(8),l=n(0),h={cursor:"pointer"},u=function(){var t=Object(c.useContext)(a),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(l.jsx)("div",{style:h,onClick:function(){r("light"===n?"dark":"light")},children:Object(l.jsxs)("span",{title:"switch theme",children:[Object(l.jsx)("h2",{children:"Theme Mode"}),"Click ",Object(l.jsx)(j.a,{}),"   ","light"===n?"\ud83c\udf19":"\u2600\ufe0f"]})})},d={padding:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},b=function(){return Object(l.jsxs)("header",{style:d,children:[Object(l.jsx)("h1",{children:"Context API"}),Object(l.jsx)(u,{})]})},x={light:{textColor:"#000",backgroundColor:"#fff"},dark:{textColor:"#fff",backgroundColor:"#333"}},O=function(){var t=Object(c.useContext)(a)[0],e=x[t];return Object(l.jsxs)("main",{style:{padding:"1rem",backgroundColor:"".concat(e.backgroundColor),color:"".concat(e.textColor)},children:[Object(l.jsx)("h1",{children:"Main With Function"}),Object(l.jsx)("p",{children:"This is a paragraph "})]})},g=n(5),C=n(6),f=n(9),p=n(7),v=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(g.a)(this,n),(t=e.call(this)).state={},t}return Object(C.a)(n,[{key:"render",value:function(){return Object(l.jsx)(a.Consumer,{children:function(t){var e=Object(s.a)(t,1)[0],n=x[e];return Object(l.jsxs)("main",{style:{padding:"1rem",backgroundColor:"".concat(n.backgroundColor),color:"".concat(n.textColor)},children:[Object(l.jsx)("h1",{children:"Main With Class"}),Object(l.jsx)("p",{children:"This is a paragraph with Class"})]})}})}}]),n}(c.Component);var k=function(){var t=Object(c.useState)("light");return Object(l.jsx)(a.Provider,{value:t,children:Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(O,{}),Object(l.jsx)(v,{})]})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.fc20a0bc.chunk.js.map