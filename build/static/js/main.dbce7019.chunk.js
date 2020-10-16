(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,a,t){e.exports=t(129)},105:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(105),t(20)),i=t(12),s=t(15),m=t(171),u=t(88),d=Object(u.a)({palette:{primary:{main:"#192D3D"},secondary:{main:"#C24D1C"},info:{main:"#4F4F4F"},success:{main:"#242F36"}},typography:{h1:{color:"#4F4F4F",textAlign:"center"},h2:{color:"#4F4F4F",textAlign:"center"},h3:{color:"#4F4F4F",textAlign:"center"},h4:{color:"#4F4F4F",textAlign:"center"},h5:{color:"#4F4F4F",textAlign:"center"},h6:{color:"#4F4F4F",textAlign:"center"},p:{color:"#4F4F4F",textAlign:"center"},button:{textDecoration:"none",textTransform:"none"}}}),h=t(49),p=t(50),f=t(90),g=t(89),v=function(e){Object(f.a)(t,e);var a=Object(g.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),E=Object(i.g)(v);function b(e){return r.a.createElement("div",null,r.a.createElement("p",null,"404"))}var y=t(21),_=t.n(y),w=t(33),j=t(14);function N(e){return{type:"SET_AUTH_TOKEN",payload:e}}var x=t(61),k=t.n(x),R="https://morgan-rad-server.herokuapp.com",O=function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,null,[{key:"authenticate",value:function(){var e=Object(w.a)(_.a.mark((function e(a){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("".concat(R,"/authenticate"),a);case 3:return t=e.sent,e.abrupt("return",t.data&&t.data.token?t.data.token:null);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()},{key:"getEntries",value:function(){var e=Object(w.a)(_.a.mark((function e(a){var t,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("rad_power_test_token"),"\n        query getEntries($serialNumber: String!) {\n          entries(serials: $serialNumber) {\n              model\n              manufacturedMonth\n              manufacturedYear\n              modelYear\n              version\n              assemblyPlant\n              unique\n          }\n        }",n={serialNumber:a},e.next=6,k.a.post("".concat(R,"/graphql"),{query:"\n        query getEntries($serialNumber: String!) {\n          entries(serials: $serialNumber) {\n              model\n              manufacturedMonth\n              manufacturedYear\n              modelYear\n              version\n              assemblyPlant\n              unique\n          }\n        }",variables:n},{headers:{Authorization:"Bearer ".concat(t)}});case 6:return r=e.sent,e.abrupt("return",r.data&&r.data.data&&r.data.data.entries?r.data.data.entries:null);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}()}]),e}(),S=t(173),C=t(158),M=t(175),F=t(164),T=Object(S.a)((function(e){return{container:{height:"30vw",minHeight:"400px",width:"40vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",paddingTop:"10vh"},header:{color:e.palette.secondary.main},input:{width:"60%"},submit:{backgroundColor:e.palette.secondary.main,color:"#ffffff"}}})),V=function(){var e=T(),a=r.a.useState(""),t=Object(j.a)(a,2),n=t[0],c=t[1],l=r.a.useState([]),o=Object(j.a)(l,2),m=o[0],u=o[1],d=r.a.useState(!1),h=Object(j.a)(d,2),p=h[0],f=h[1],g=Object(s.b)();r.a.useEffect((function(){var e=localStorage.getItem("rad_power_test_token");e&&(g(N(e)),f(!0))}),[]);var v=function(){var e=Object(w.a)(_.a.mark((function e(a){var t,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new RegExp(/!|@|#|\$|%|\^|&|\*|[\d]/g),r=[],t.test(n)&&r.push("Whoa, only alphabetic characters please!"),n.includes(" ")&&r.push("No spaces please!"),!r.length){e.next=8;break}u(r),e.next=12;break;case 8:return e.next=10,O.authenticate({username:n});case 10:(c=e.sent)?(localStorage.setItem("rad_power_test_token",c),g(N(c)),f(!0)):window.alert("Something went wrong!");case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return p?r.a.createElement(i.a,{to:"/query"}):r.a.createElement("div",{className:e.container},r.a.createElement(C.a,{variant:"h3",className:e.header},"Welcome!"),r.a.createElement(C.a,{variant:"body1"},"To get started, please enter any username below. We'll use that to authenticate your session. You'll only need to do this once."),r.a.createElement(M.a,{className:e.input,variant:"filled",name:"username",value:n,onChange:function(e){u([]),c(e.target.value)}}),m.length?m.map((function(e,a){return r.a.createElement(C.a,{variant:"body1",style:{color:"red"},key:a},e)})):null,r.a.createElement(F.a,{className:e.submit,onClick:v},"Submit"))};function A(e){var a=e;return a.includes("\n")&&(a=a.split("\n").map((function(e){return e.trim()})).filter((function(e){return e})).join(",")),a.includes(",")&&(a=a.split(",").map((function(e){return e.trim()})).filter((function(e){return e})).join(",")),a}function Y(e){var a=[];return e.split(",").forEach((function(e){13===e.length||a.includes("Serial numbers should be 13 characters long.")||a.push("Serial numbers should be 13 characters long.")})),a}var I=t(174),B=Object(S.a)((function(e){return{container:{height:"30vw",minHeight:"400px",width:"40vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",paddingTop:"10vh"},header:{color:e.palette.secondary.main},input:{width:"60%"},submit:{backgroundColor:e.palette.secondary.main,color:"#ffffff"}}})),D=function(){var e=B(),a=Object(s.b)(),t=Object(s.c)((function(e){return e.auth.token})),n=r.a.useState(""),c=Object(j.a)(n,2),l=c[0],o=c[1],m=r.a.useState(""),u=Object(j.a)(m,2),d=u[0],h=u[1],p=r.a.useState(null),f=Object(j.a)(p,2),g=f[0],v=f[1];r.a.useEffect((function(){t||v("/")}),[t]);var E=function(){var e=Object(w.a)(_.a.mark((function e(){var t,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=A(l),(n=Y(t)).length){e.next=9;break}return e.next=5,O.getEntries(t);case 5:(r=e.sent)?(a({type:"SET_BIKE_RESULTS",payload:r}),v("/results")):h("Something went wrong. Please try again."),e.next=10;break;case 9:h(n.join(" "));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g?r.a.createElement(i.a,{to:g}):r.a.createElement("div",{className:e.container},d?r.a.createElement(I.a,{style:{width:"100%"},severity:"error"},d):null,r.a.createElement(C.a,{variant:"h3",className:e.header},"New Query"),r.a.createElement(C.a,{variant:"h6"},"Enter the serial number (or numbers) to retrieve bike data."),r.a.createElement(C.a,{variant:"body1"},"Try entering RB719F1000001"),r.a.createElement(M.a,{className:e.input,variant:"filled",multiline:!0,value:l,onChange:function(e){h(""),o(e.target.value)}}),r.a.createElement(F.a,{className:e.submit,onClick:E},"Submit"))},W=t(165),q=t(163),H=t(166),U=t(167),$=t(168),L=t(169),P=t(170),J=Object(S.a)((function(e){return{container:{height:"40vw",minHeight:"400px",width:"80vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:"10vh"},tableHeader:{color:e.palette.secondary.main,marginBottom:"2%"},head:{backgroundColor:e.palette.primary.main,"& th, td":{color:"#ffffff"}},row:{"& th, td":{backgroundColor:"#ffffff",color:e.palette.primary.main}}}})),K=function(){var e=J(),a=Object(s.c)((function(e){return e.bikes.results})),t=Object(s.c)((function(e){return e.auth.authToken})),n=r.a.useState(!1),c=Object(j.a)(n,2),l=c[0],o=c[1];return r.a.useEffect((function(){t||o(!0)}),[]),l?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:e.container},r.a.createElement(C.a,{variant:"h3",className:e.tableHeader},"Rad Results"),r.a.createElement(W.a,{component:q.a},r.a.createElement(H.a,{className:e.table},r.a.createElement(U.a,null,r.a.createElement($.a,{className:e.head},r.a.createElement(L.a,null,"Model"),r.a.createElement(L.a,{align:"right"},"Model Year"),r.a.createElement(L.a,{align:"right"},"Manufactured Month"),r.a.createElement(L.a,{align:"right"},"Manufactured Year"),r.a.createElement(L.a,{align:"right"},"Assembly Location"),r.a.createElement(L.a,{align:"right"},"Version"),r.a.createElement(L.a,{align:"right"},"Unique"))),r.a.createElement(P.a,null,a.map((function(a){return r.a.createElement($.a,{key:a.name,className:e.row},r.a.createElement(L.a,{component:"th",scope:"row"},a.model),r.a.createElement(L.a,{align:"right"},a.modelYear),r.a.createElement(L.a,{align:"right"},a.manufacturedMonth),r.a.createElement(L.a,{align:"right"},a.manufacturedYear),r.a.createElement(L.a,{align:"right"},a.assemblyPlant),r.a.createElement(L.a,{align:"right"},a.version),r.a.createElement(L.a,{align:"right"},a.unique))}))))))},X=t(91),z=[{name:"RadRover",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadRover_Right_Side_View_Web_48240052-768b-4887-bfcb-ca6f223c1ceb_large.jpg?v=1578074509",code:"R"},{name:"RadMini",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"M"},{name:"RadWagon",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadWagon4O_1_large.jpg?v=1599244890",code:"W"},{name:"RadCity 16",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_Right_View_large.jpg?v=1595980489",code:"6"},{name:"RadCity 19",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_Right_View_large.jpg?v=1595980489",code:"9"},{name:"RadCity Stepthru",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_ST_Black_Right_Side_View_Web_large.jpg?v=1600458751",code:"S"},{name:"RadBurro",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"B"},{name:"RadRhino",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Plus_RIght_View_Transparent.png?v=1585240356",code:"H"},{name:"Large Cargo Box",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"C"},{name:"Small Cargo Box",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"K"},{name:"Pedicab",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"P"},{name:"Flatbed",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"F"},{name:"Truckbed",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"T"},{name:"Insulated Cargo Box",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"N"},{name:"Runner",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Green_Right_Side_View_Web_large.jpg?v=1599244904",code:"Y"}],G={2018:"A",2019:"B",2020:"C",2021:"D"};function Q(e){var a=e.model+G[e.modelYear],t=function(){var e=[];for(;e.length<6;){var a=Math.floor(6*Math.random());e.push(a)}return e.join("")}();return a+e.manMonth+e.manYear+e.assembly+e.version+t}var Z=t(162),ee=t(172),ae=t(177),te=t(86),ne=t.n(te),re=t(87),ce=t.n(re),le=Object(S.a)((function(e){return{container:{minHeight:"400px",width:"80vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:"10vh",marginBottom:"5vh"},section:{display:"flex",width:"100%",justifyContent:"center"},allModels:{display:"flex",width:"500px",height:"400px",margin:"2% 0",alignItems:"center",justifyContent:"center"},modelImg:{height:"250px"},modelArrow:{"&:hover":{cursor:"pointer"}},header:{color:e.palette.secondary.main,marginBottom:"2%",marginRight:"2%"},submit:{backgroundColor:e.palette.secondary.main,color:"#ffffff"}}})),oe=function(){var e=le(),a=Object(s.c)((function(e){return e.auth.authToken})),t=r.a.useState({model:"",modelYear:"",manMonth:"",manYear:"",version:"",assembly:""}),n=Object(j.a)(t,2),c=n[0],l=n[1],o=r.a.useState(0),m=Object(j.a)(o,2),u=m[0],d=m[1],h=r.a.useState(null),p=Object(j.a)(h,2),f=p[0],g=p[1],v=r.a.useState(""),E=Object(j.a)(v,2),b=E[0],y=E[1],_=r.a.useState(!1),w=Object(j.a)(_,2),N=w[0],x=w[1];r.a.useEffect((function(){a||x(!0)}),[]);var k=function(e){y("");var a=Object(X.a)({},c);a[e.target.name]=e.target.value,l(a)},R=function(e){var a=u+e;a<0&&(a=0),a>z.length-1&&(a=z.length-1),d(a)};return N?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:e.container},r.a.createElement(C.a,{variant:"h3",className:e.header},"Create A New Serial Hash"),b?r.a.createElement(I.a,{style:{width:"50%",margin:"auto"},severity:"error"},b):null,f?r.a.createElement(I.a,{style:{width:"50%",margin:"auto"},severity:"success"},f):null,r.a.createElement(C.a,{variant:"h6",className:e.header},"Choose a Bike Model"),r.a.createElement("div",{className:e.allModels},r.a.createElement(ne.a,{className:e.modelArrow,fontSize:"large",onClick:function(){return R(-1)}}),r.a.createElement("div",{key:z[u].name,className:e.model},r.a.createElement(C.a,{variant:"body1",style:{textAlign:"center"}},z[u].name),r.a.createElement("img",{alt:z[u].name,className:e.modelImg,src:z[u].img})),r.a.createElement(ce.a,{className:e.modelArrow,fontSize:"large",onClick:function(){return R(1)}})),r.a.createElement("div",{className:e.section},r.a.createElement(C.a,{variant:"h6",className:e.header},"Model Year"),r.a.createElement(Z.a,{className:e.formControl},r.a.createElement(ee.a,{name:"modelYear",value:c.modelYear,onChange:k},r.a.createElement(ae.a,{value:"2021"},"2021"),r.a.createElement(ae.a,{value:"2020"},"2020"),r.a.createElement(ae.a,{value:"2019"},"2019"),r.a.createElement(ae.a,{value:"2018"},"2018")))),r.a.createElement("div",{className:e.section},r.a.createElement(C.a,{variant:"h6",className:e.header},"Manufactured Month"),r.a.createElement(Z.a,{className:e.formControl},r.a.createElement(ee.a,{name:"manMonth",value:c.manMonth,onChange:k},r.a.createElement(ae.a,{value:"1"},"January"),r.a.createElement(ae.a,{value:"2"},"February"),r.a.createElement(ae.a,{value:"3"},"March"),r.a.createElement(ae.a,{value:"4"},"April"),r.a.createElement(ae.a,{value:"5"},"May"),r.a.createElement(ae.a,{value:"6"},"June"),r.a.createElement(ae.a,{value:"7"},"July"),r.a.createElement(ae.a,{value:"8"},"August"),r.a.createElement(ae.a,{value:"9"},"September"),r.a.createElement(ae.a,{value:"O"},"October"),r.a.createElement(ae.a,{value:"N"},"November"),r.a.createElement(ae.a,{value:"D"},"December")))),r.a.createElement("div",{className:e.section},r.a.createElement(C.a,{variant:"h6",className:e.header},"Manufactured Year"),r.a.createElement(Z.a,{className:e.formControl},r.a.createElement(ee.a,{name:"manYear",value:c.manYear,onChange:k},r.a.createElement(ae.a,{value:"21"},"2021"),r.a.createElement(ae.a,{value:"20"},"2020"),r.a.createElement(ae.a,{value:"19"},"2019"),r.a.createElement(ae.a,{value:"18"},"2018"),r.a.createElement(ae.a,{value:"17"},"2017"),r.a.createElement(ae.a,{value:"16"},"2016"),r.a.createElement(ae.a,{value:"15"},"2015")))),r.a.createElement("div",{className:e.section},r.a.createElement(C.a,{variant:"h6",className:e.header},"Version"),r.a.createElement(Z.a,{className:e.formControl},r.a.createElement(ee.a,{name:"version",value:c.version,onChange:k},r.a.createElement(ae.a,{value:"1"},"1"),r.a.createElement(ae.a,{value:"2"},"2"),r.a.createElement(ae.a,{value:"3"},"3")))),r.a.createElement("div",{className:e.section},r.a.createElement(C.a,{variant:"h6",className:e.header},"Assembly Location"),r.a.createElement(Z.a,{className:e.formControl},r.a.createElement(ee.a,{name:"assembly",value:c.assembly,onChange:k},r.a.createElement(ae.a,{value:"F"},"Factory F"),r.a.createElement(ae.a,{value:"V"},"Factory V")))),r.a.createElement(F.a,{className:e.submit,onClick:function(){var e=z[u];if(c.model=e.code,function(e){var a=!0;return Object.keys(e).forEach((function(t){e[t]||(a=!1)})),!a}(c))y("All fields required.");else{var a=Q(c);g(a)}}},"Generate Serial Hash"))},ie=Object(S.a)((function(e){return{container:{height:"5vw",minHeight:"50px",display:"flex",alignItems:"center",padding:"0 2%",backgroundColor:e.palette.primary.main},link:{textDecoration:"none",color:"#ffffff",marginRight:"5%","&:hover":{cursor:"pointer"}}}})),se=function(){var e=ie(),a=Object(s.b)();return r.a.createElement("div",{className:e.container},r.a.createElement(o.b,{to:"/query",className:e.link},r.a.createElement(C.a,{variant:"body1"},"New Query")),r.a.createElement(o.b,{to:"/results",className:e.link},r.a.createElement(C.a,{variant:"body1"},"Results")),r.a.createElement(o.b,{to:"/create",className:e.link},r.a.createElement(C.a,{variant:"body1"},"Create New Serial")),r.a.createElement(C.a,{onClick:function(){a(N(null)),localStorage.removeItem("rad_power_test_token")},variant:"body1",className:e.link},"Forget Me"))};var me=function(e){var a=e.store;return r.a.createElement(m.a,{theme:d},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{store:a},r.a.createElement(o.a,null,r.a.createElement(E,null,r.a.createElement(se,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:V}),r.a.createElement(i.b,{exact:!0,path:"/query",component:D}),r.a.createElement(i.b,{exact:!0,path:"/results",component:K}),r.a.createElement(i.b,{exact:!0,path:"/create",component:oe}),r.a.createElement(i.b,{component:b})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=t(36),de=t(62),he=t.n(de),pe={token:null},fe={results:[]},ge=Object(ue.b)({bikes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_BIKE_RESULTS":return he()(e,{results:{$set:a.payload}});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_AUTH_TOKEN":return he()(e,{token:{$set:a.payload}});default:return e}}}),ve=Object(ue.c)(ge,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,{store:ve})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.dbce7019.chunk.js.map