(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(4),r=s.n(a),i=s(3),l=s(0),h=function(e){var t=e.hashtags;return Object(l.jsx)("section",{className:"hashtagsect",children:t.map((function(e,t){var s="".concat(e.indices[0]).concat(e.indices[1]).concat(t);return Object(l.jsxs)("div",{className:"hashtag",children:["#",e.text]},s)}))})},j=function(e){var t=e.image,s=e.user,c=e.text,n=c.indexOf("http"),a=c.slice(0,n),r=c.slice(n);return Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{className:"avatar",children:Object(l.jsx)("img",{src:t,alt:s})}),Object(l.jsxs)("section",{className:"tweetText",children:[Object(l.jsxs)("p",{className:"user",children:["@",s]}),Object(l.jsxs)("p",{children:[a,Object(l.jsx)("a",{className:"link",href:r,target:"blank",children:r})]})]})]})},u=(s(10),function(){var e=Object(c.useRef)(null),t=n.a.useState(""),s=Object(i.a)(t,2),a=s[0],r=s[1],u=n.a.useState(null),o=Object(i.a)(u,2),d=o[0],b=o[1];return Object(c.useEffect)((function(){e.current.focus()})),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("div",{className:"searchSect",children:[Object(l.jsx)("h4",{children:"Tweet Feed"}),Object(l.jsx)("input",{ref:e,placeholder:"Search by keyword",onKeyUp:function(e){return function(e){"Enter"===e.key?fetch("/search/tweets/"+a.replace(/#/g,"%23")).then((function(e){return e.json()})).then((function(e){var t=e.statuses.filter((function(e){return e.entities.hashtags.length>0})).map((function(e){return e.entities.hashtags}));t=[].concat.apply([],t),b([e.statuses,t])})):r(e.target.value)}(e)}})]}),Object(l.jsxs)("div",{className:"hashtagsSect",children:[Object(l.jsx)("h4",{children:"Filter by hashtag"}),d&&d[1].length>0&&Object(l.jsx)(h,{hashtags:d[1]})]}),Object(l.jsx)("div",{className:"tweetsSect",children:d&&(0===d[0].length?Object(l.jsx)("p",{children:"No results"}):Object(l.jsx)(l.Fragment,{children:d[0].map((function(e){return Object(l.jsx)(j,{image:e.user.profile_image_url_https,text:e.text,user:e.user.screen_name},e.id)}))}))})]})});s(11);r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.49cc7694.chunk.js.map