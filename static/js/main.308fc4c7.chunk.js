(this["webpackJsonpreact-essentials"]=this["webpackJsonpreact-essentials"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(4),i=n.n(s),r=(n(9),n(2)),a=(n(10),n(0));var u=function(t){var e=t.login,n=Object(c.useState)(null),s=Object(r.a)(n,2),i=s[0],u=s[1],j=Object(c.useState)(!1),l=Object(r.a)(j,2),o=l[0],h=l[1],b=Object(c.useState)(null),O=Object(r.a)(b,2),d=O[0],f=O[1];return Object(c.useEffect)((function(){e&&(h(!0),fetch("https://api.github.com/users/".concat(e)).then((function(t){return t.json()})).then(u).then((function(){return h(!1)})).catch(f))}),[e]),o?Object(a.jsx)("h1",{children:"Loading..."}):d?Object(a.jsx)("pre",{children:JSON.stringify(d,null,2)}):i?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:i.id}),Object(a.jsx)("p",{children:i.login}),Object(a.jsx)("img",{alt:i.login,src:i.avatar_url})]}):null};i.a.render(Object(a.jsx)(u,{login:"prakash-amit"}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.308fc4c7.chunk.js.map