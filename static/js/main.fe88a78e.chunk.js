(this["webpackJsonpapp-dashboard"]=this["webpackJsonpapp-dashboard"]||[]).push([[0],{25:function(e,c,s){},45:function(e,c,s){"use strict";s.r(c);var t=s(0),n=s.n(t),a=s(20),i=s.n(a),l=(s(25),s(5)),j=s(6),r=s.n(j),d=s(7),o=s(1),b=function(){var e={method:"get",url:"https://anil-dot-bluestacks-cloud-beginners.uc.r.appspot.com/rescrapping"},c=Object(t.useCallback)((function(){r()(e).then((function(e){console.log(e.status),console.log(e.data),window.location.reload(!0)})).catch((function(e){console.log(e)}))}),[]);return Object(o.jsx)("button",{onClick:function(){c(),console.log("clicked")},className:"btn",children:"reScrap"})},p=function(){var e=Object(t.useState)(),c=Object(l.a)(e,2),s=c[0],n=c[1],a={method:"get",url:"https://anil-dot-bluestacks-cloud-beginners.uc.r.appspot.com/get_top_apps"};Object(t.useEffect)((function(){r()(a).then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}),[]),console.log("fetched");var i=[];return s&&Object.keys(s).forEach((function(e){var c=s[e].map((function(e){return Object(o.jsxs)("span",{children:[Object(o.jsxs)(d.b,{to:"/AppDetail/"+e.next_page_end_point,target:"_blank",children:[" ",Object(o.jsxs)("span",{children:[Object(o.jsx)("img",{src:e.image_src,alt:""})," "]})]}),Object(o.jsx)("span",{className:"span",children:e.app_name})]},e.app_name)})),t=Object(o.jsxs)("div",{class:"task",children:[Object(o.jsx)("h1",{children:e}),Object(o.jsx)("br",{}),c]});i.push(t)})),Object(o.jsxs)("div",{children:[Object(o.jsxs)("header",{class:"header",children:[Object(o.jsx)("h1",{children:"Top Apps"}),Object(o.jsx)(b,{})]}),i.map((function(e){return Object(o.jsx)("div",{children:e})}))]})},h=s(2),O=function(){var e=Object(h.h)(),c=Object(t.useState)(),s=Object(l.a)(c,2),n=s[0],a=s[1],i=Object(t.useState)(!0),j=Object(l.a)(i,2),d=j[0],b=j[1],p={method:"get",url:"https://anil-dot-bluestacks-cloud-beginners.uc.r.appspot.com/get_details",params:{app_id:e.Id}};if(Object(t.useEffect)((function(){r()(p).then((function(e){a(e.data)})).catch((function(e){console.log(e)})).finally((function(){b(!1)}))}),[]),d)return Object(o.jsx)("p",{children:"Data is loading..."});var O=n;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{class:"oQ6oV",children:[Object(o.jsx)("div",{class:"hkhL9e",children:Object(o.jsx)("div",{class:"xSyT2c",children:Object(o.jsx)("img",{src:O.app_image_src,alt:"Cover art",class:"T75of sHb2Xb"})})}),Object(o.jsx)("div",{class:"D0ZKYe ",children:Object(o.jsxs)("div",{class:"rlnrKc",children:[Object(o.jsxs)("div",{class:"sIskre",children:[Object(o.jsx)("h1",{class:"AHFaub",children:O.app_name+": "+O.app_header_name}),Object(o.jsxs)("div",{class:"jdjqLd",children:[Object(o.jsx)("div",{class:"ZVWMWc",children:Object(o.jsx)("div",{class:"qQKdcc",children:O.app_name})}),Object(o.jsxs)("div",{class:"dNLKff",children:[Object(o.jsx)("div",{class:"pf5lIe",children:O.app_ratings}),Object(o.jsxs)("span",{class:"TBRnV AYi5wd",children:[Object(o.jsx)("span",{children:O.users_rating_count}),Object(o.jsx)("span",{class:"qLorRc O3QoBc"})]})]})]})]}),Object(o.jsx)("div",{class:"wE7q7b",children:Object(o.jsx)("a",{class:"btn",href:O.download_link,target:"_blank",children:"Install"})})]})})]}),Object(o.jsx)("div",{class:"Rx5dXb",children:O.app_screen_shot_src.map((function(e,c){var s=0==c?Object(o.jsxs)("a",{class:"resize",href:O.video_link_url,children:[Object(o.jsx)("img",{class:"resize",src:e,alt:""})," "]}):Object(o.jsx)("img",{class:"resize",src:e,alt:""});return Object(o.jsx)("span",{class:"TdqJUe",children:s})}))}),Object(o.jsxs)("div",{class:"DWPxHb",children:[Object(o.jsx)("h4",{children:"App Descriptions: "}),Object(o.jsx)("p",{children:O.description_content})]})]})},u=function(){return Object(o.jsx)("div",{class:"container",children:Object(o.jsx)(d.a,{children:Object(o.jsxs)(h.d,{children:[Object(o.jsx)(h.b,{path:"/",element:Object(o.jsx)(p,{})}),Object(o.jsx)(h.b,{path:"/AppDetail/:Id",element:Object(o.jsx)(O,{})}),Object(o.jsx)(h.b,{path:"*",element:Object(o.jsx)(h.a,{to:"/"})})]})})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.fe88a78e.chunk.js.map