(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,a,t){e.exports=t(131)},106:function(e,a,t){},131:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(106),t(21)),i=t(12),s=t(14),u=t(173),m=t(82),d=r.a.createContext(),h=function(e){var a=e.children,t=Object(m.useGoogleLogin)({clientId:"155765922654-oh66765p14d3n2ke959dpt5fj9dorneh.apps.googleusercontent.com"});return r.a.createElement(d.Provider,{value:t},a)},p=t(89),f=Object(p.a)({palette:{primary:{main:"#192D3D"},secondary:{main:"#C24D1C"},info:{main:"#4F4F4F"},success:{main:"#242F36"}},typography:{h1:{color:"#4F4F4F",textAlign:"center"},h2:{color:"#4F4F4F",textAlign:"center"},h3:{color:"#4F4F4F",textAlign:"center"},h4:{color:"#4F4F4F",textAlign:"center"},h5:{color:"#4F4F4F",textAlign:"center"},h6:{color:"#4F4F4F",textAlign:"center"},p:{color:"#4F4F4F",textAlign:"center"},button:{textDecoration:"none",textTransform:"none"}}}),g=t(49),v=t(50),E=t(91),b=t(90),y=function(e){Object(E.a)(t,e);var a=Object(b.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),_=Object(i.g)(y);function w(e){return r.a.createElement("div",null,r.a.createElement("p",null,"404"))}var j=t(16),x=t.n(j),k=t(26),N=t(15);function O(e){return{type:"SET_AUTH_TOKEN",payload:e}}var R=t(61),C=t.n(R),S="https://morgan-rad-server.herokuapp.com",M=function(){function e(){Object(g.a)(this,e)}return Object(v.a)(e,null,[{key:"authenticate",value:function(){var e=Object(k.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("".concat(S,"/authenticate"),a);case 3:return t=e.sent,e.abrupt("return",t.data&&t.data.token?t.data.token:null);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()},{key:"getEntries",value:function(){var e=Object(k.a)(x.a.mark((function e(a){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("rad_power_test_token"),"\n        query getEntries($serialNumber: String!) {\n          entries(serials: $serialNumber) {\n              model\n              manufacturedMonth\n              manufacturedYear\n              modelYear\n              version\n              assemblyPlant\n              unique\n          }\n        }",n={serialNumber:a},e.next=6,C.a.post("".concat(S,"/graphql"),{query:"\n        query getEntries($serialNumber: String!) {\n          entries(serials: $serialNumber) {\n              model\n              manufacturedMonth\n              manufacturedYear\n              modelYear\n              version\n              assemblyPlant\n              unique\n          }\n        }",variables:n},{headers:{Authorization:"Bearer ".concat(t)}});case 6:return r=e.sent,e.abrupt("return",r.data&&r.data.data&&r.data.data.entries?r.data.data.entries:null);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}()}]),e}(),F=t(175),T=t(162),V=t(177),A=t(159),I=function(){var e=r.a.useContext(d).signIn,a=Object(s.b)(),t=function(){var t=Object(k.a)(x.a.mark((function t(){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:if(!(n=t.sent)||!n.profileObj){t.next=8;break}return t.next=6,M.authenticate({username:n.profileObj.name});case 6:(r=t.sent)&&(localStorage.setItem("rad_power_test_token",r),a(O(r)));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(A.a,{onClick:t,style:{backgroundColor:"#C24D1C",color:"#ffffff"}},"Login with Google")},Y=Object(F.a)((function(e){return{container:{height:"30vw",minHeight:"400px",width:"40vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",paddingTop:"10vh"},header:{color:e.palette.secondary.main},input:{width:"60%"},submit:{backgroundColor:e.palette.secondary.main,color:"#ffffff"}}})),D=function(){var e=Y(),a=Object(s.c)((function(e){return e.auth.token})),t=Object(s.b)(),n=r.a.useState(""),c=Object(N.a)(n,2),l=c[0],o=c[1],u=r.a.useState([]),m=Object(N.a)(u,2),d=m[0],h=m[1],p=r.a.useState(!1),f=Object(N.a)(p,2),g=f[0],v=f[1];r.a.useEffect((function(){var e=localStorage.getItem("rad_power_test_token");e&&(t(O(e)),v(!0)),a&&v(!0)}),[a,t]);var E=function(){var e=Object(k.a)(x.a.mark((function e(a){var n,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new RegExp(/!|@|#|\$|%|\^|&|\*|[\d]/g),r=[],n.test(l)&&r.push("Whoa, only alphabetic characters please!"),l.includes(" ")&&r.push("No spaces please!"),!r.length){e.next=8;break}h(r),e.next=12;break;case 8:return e.next=10,M.authenticate({username:l});case 10:(c=e.sent)?(localStorage.setItem("rad_power_test_token",c),t(O(c)),v(!0)):window.alert("Something went wrong!");case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return g?r.a.createElement(i.a,{to:"/query"}):r.a.createElement("div",{className:e.container},r.a.createElement(T.a,{variant:"h3",className:e.header},"Welcome!"),r.a.createElement(T.a,{variant:"body1"},"To get started, please enter any username below. We'll use that to authenticate your session. You'll only need to do this once."),r.a.createElement(V.a,{className:e.input,variant:"filled",name:"username",value:l,onChange:function(e){h([]),o(e.target.value)}}),d.length?d.map((function(e,a){return r.a.createElement(T.a,{variant:"body1",style:{color:"red"},key:a},e)})):null,r.a.createElement(A.a,{className:e.submit,onClick:E},"Submit"),r.a.createElement(T.a,null,"or"),r.a.createElement(I,null))};function B(e){var a=e;return a.includes("\n")&&(a=a.split("\n").map((function(e){return e.trim()})).filter((function(e){return e})).join(",")),a.includes(",")&&(a=a.split(",").map((function(e){return e.trim()})).filter((function(e){return e})).join(",")),a}function W(e){var a=[];return e.split(",").forEach((function(e){13===e.length||a.includes("Serial numbers should be 13 characters long.")||a.push("Serial numbers should be 13 characters long.")})),a}var q=t(176),H=Object(F.a)((function(e){return{container:{height:"30vw",minHeight:"400px",width:"40vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",paddingTop:"10vh"},header:{color:e.palette.secondary.main},input:{width:"60%"},submit:{backgroundColor:e.palette.secondary.main,color:"#ffffff"}}})),L=function(){var e=H(),a=Object(s.b)(),t=Object(s.c)((function(e){return e.auth.token})),n=r.a.useState(""),c=Object(N.a)(n,2),l=c[0],o=c[1],u=r.a.useState(""),m=Object(N.a)(u,2),d=m[0],h=m[1],p=r.a.useState(null),f=Object(N.a)(p,2),g=f[0],v=f[1];r.a.useEffect((function(){t||v("/")}),[t]);var E=function(){var e=Object(k.a)(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=B(l),(n=W(t)).length){e.next=9;break}return e.next=5,M.getEntries(t);case 5:(r=e.sent)?(a({type:"SET_BIKE_RESULTS",payload:r}),v("/results")):h("Something went wrong. Please try again."),e.next=10;break;case 9:h(n.join(" "));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g?r.a.createElement(i.a,{to:g}):r.a.createElement("div",{className:e.container},d?r.a.createElement(q.a,{style:{width:"100%"},severity:"error"},d):null,r.a.createElement(T.a,{variant:"h3",className:e.header},"New Query"),r.a.createElement(T.a,{variant:"h6"},"Enter the serial number (or numbers) to retrieve bike data."),r.a.createElement(T.a,{variant:"body1"},"Try entering RB719F1000001"),r.a.createElement(V.a,{className:e.input,variant:"filled",multiline:!0,value:l,onChange:function(e){h(""),o(e.target.value)}}),r.a.createElement(A.a,{className:e.submit,onClick:E},"Submit"))},P=t(167),U=t(166),$=t(168),J=t(169),K=t(170),G=t(171),X=t(172),z=Object(F.a)((function(e){return{container:{height:"40vw",minHeight:"400px",width:"80vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:"10vh"},tableHeader:{color:e.palette.secondary.main,marginBottom:"2%"},head:{backgroundColor:e.palette.primary.main,"& th, td":{color:"#ffffff"}},row:{"& th, td":{backgroundColor:"#ffffff",color:e.palette.primary.main}}}})),Q=function(){var e=z(),a=Object(s.c)((function(e){return e.bikes.results})),t=Object(s.c)((function(e){return e.auth.authToken})),n=r.a.useState(!1),c=Object(N.a)(n,2),l=c[0],o=c[1];return r.a.useEffect((function(){t||o(!0)}),[]),l?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:e.container},r.a.createElement(T.a,{variant:"h3",className:e.tableHeader},"Rad Results"),r.a.createElement(P.a,{component:U.a},r.a.createElement($.a,{className:e.table},r.a.createElement(J.a,null,r.a.createElement(K.a,{className:e.head},r.a.createElement(G.a,null,"Model"),r.a.createElement(G.a,{align:"right"},"Model Year"),r.a.createElement(G.a,{align:"right"},"Manufactured Month"),r.a.createElement(G.a,{align:"right"},"Manufactured Year"),r.a.createElement(G.a,{align:"right"},"Assembly Location"),r.a.createElement(G.a,{align:"right"},"Version"),r.a.createElement(G.a,{align:"right"},"Unique"))),r.a.createElement(X.a,null,a.map((function(a){return r.a.createElement(K.a,{key:a.name,className:e.row},r.a.createElement(G.a,{component:"th",scope:"row"},a.model),r.a.createElement(G.a,{align:"right"},a.modelYear),r.a.createElement(G.a,{align:"right"},a.manufacturedMonth),r.a.createElement(G.a,{align:"right"},a.manufacturedYear),r.a.createElement(G.a,{align:"right"},a.assemblyPlant),r.a.createElement(G.a,{align:"right"},a.version),r.a.createElement(G.a,{align:"right"},a.unique))}))))))},Z=t(92),ee=[{name:"RadRover",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadRover_Right_Side_View_Web_48240052-768b-4887-bfcb-ca6f223c1ceb_large.jpg?v=1578074509",code:"R"},{name:"RadMini",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"M"},{name:"RadWagon",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadWagon4O_1_large.jpg?v=1599244890",code:"W"},{name:"RadCity 16",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_Right_View_large.jpg?v=1595980489",code:"6"},{name:"RadCity 19",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_Right_View_large.jpg?v=1595980489",code:"9"},{name:"RadCity Stepthru",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadCity_ST_Black_Right_Side_View_Web_large.jpg?v=1600458751",code:"S"},{name:"RadBurro",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"B"},{name:"RadRhino",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Plus_RIght_View_Transparent.png?v=1585240356",code:"H"},{name:"Large Cargo Box",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"C"},{name:"Small Cargo Box",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"K"},{name:"Pedicab",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"P"},{name:"Flatbed",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"F"},{name:"Truckbed",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"T"},{name:"Insulated Cargo Box",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini4_Right_View_V2_large.jpg?v=1597785280",code:"N"},{name:"Runner",img:"https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Green_Right_Side_View_Web_large.jpg?v=1599244904",code:"Y"}],ae={2018:"A",2019:"B",2020:"C",2021:"D"};function te(e){var a=e.model+ae[e.modelYear],t=function(){var e=[];for(;e.length<6;){var a=Math.floor(6*Math.random());e.push(a)}return e.join("")}();return a+e.manMonth+e.manYear+e.assembly+e.version+t}var ne=t(165),re=t(174),ce=t(179),le=t(87),oe=t.n(le),ie=t(88),se=t.n(ie),ue=Object(F.a)((function(e){return{container:{minHeight:"400px",width:"80vw",minWidth:"350px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:"10vh",marginBottom:"5vh"},section:{display:"flex",width:"100%",justifyContent:"center"},allModels:{display:"flex",width:"500px",height:"400px",margin:"2% 0",alignItems:"center",justifyContent:"center"},modelImg:{height:"250px"},modelArrow:{"&:hover":{cursor:"pointer"}},header:{color:e.palette.secondary.main,marginBottom:"2%",marginRight:"2%"},submit:{backgroundColor:e.palette.secondary.main,color:"#ffffff"}}})),me=function(){var e=ue(),a=Object(s.c)((function(e){return e.auth.authToken})),t=r.a.useState({model:"",modelYear:"",manMonth:"",manYear:"",version:"",assembly:""}),n=Object(N.a)(t,2),c=n[0],l=n[1],o=r.a.useState(0),u=Object(N.a)(o,2),m=u[0],d=u[1],h=r.a.useState(null),p=Object(N.a)(h,2),f=p[0],g=p[1],v=r.a.useState(""),E=Object(N.a)(v,2),b=E[0],y=E[1],_=r.a.useState(!1),w=Object(N.a)(_,2),j=w[0],x=w[1];r.a.useEffect((function(){a||x(!0)}),[]);var k=function(e){y("");var a=Object(Z.a)({},c);a[e.target.name]=e.target.value,l(a)},O=function(e){var a=m+e;a<0&&(a=0),a>ee.length-1&&(a=ee.length-1),d(a)};return j?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:e.container},r.a.createElement(T.a,{variant:"h3",className:e.header},"Create A New Serial Hash"),b?r.a.createElement(q.a,{style:{width:"50%",margin:"auto"},severity:"error"},b):null,f?r.a.createElement(q.a,{style:{width:"50%",margin:"auto"},severity:"success"},f):null,r.a.createElement(T.a,{variant:"h6",className:e.header},"Choose a Bike Model"),r.a.createElement("div",{className:e.allModels},r.a.createElement(oe.a,{className:e.modelArrow,fontSize:"large",onClick:function(){return O(-1)}}),r.a.createElement("div",{key:ee[m].name,className:e.model},r.a.createElement(T.a,{variant:"body1",style:{textAlign:"center"}},ee[m].name),r.a.createElement("img",{alt:ee[m].name,className:e.modelImg,src:ee[m].img})),r.a.createElement(se.a,{className:e.modelArrow,fontSize:"large",onClick:function(){return O(1)}})),r.a.createElement("div",{className:e.section},r.a.createElement(T.a,{variant:"h6",className:e.header},"Model Year"),r.a.createElement(ne.a,{className:e.formControl},r.a.createElement(re.a,{name:"modelYear",value:c.modelYear,onChange:k},r.a.createElement(ce.a,{value:"2021"},"2021"),r.a.createElement(ce.a,{value:"2020"},"2020"),r.a.createElement(ce.a,{value:"2019"},"2019"),r.a.createElement(ce.a,{value:"2018"},"2018")))),r.a.createElement("div",{className:e.section},r.a.createElement(T.a,{variant:"h6",className:e.header},"Manufactured Month"),r.a.createElement(ne.a,{className:e.formControl},r.a.createElement(re.a,{name:"manMonth",value:c.manMonth,onChange:k},r.a.createElement(ce.a,{value:"1"},"January"),r.a.createElement(ce.a,{value:"2"},"February"),r.a.createElement(ce.a,{value:"3"},"March"),r.a.createElement(ce.a,{value:"4"},"April"),r.a.createElement(ce.a,{value:"5"},"May"),r.a.createElement(ce.a,{value:"6"},"June"),r.a.createElement(ce.a,{value:"7"},"July"),r.a.createElement(ce.a,{value:"8"},"August"),r.a.createElement(ce.a,{value:"9"},"September"),r.a.createElement(ce.a,{value:"O"},"October"),r.a.createElement(ce.a,{value:"N"},"November"),r.a.createElement(ce.a,{value:"D"},"December")))),r.a.createElement("div",{className:e.section},r.a.createElement(T.a,{variant:"h6",className:e.header},"Manufactured Year"),r.a.createElement(ne.a,{className:e.formControl},r.a.createElement(re.a,{name:"manYear",value:c.manYear,onChange:k},r.a.createElement(ce.a,{value:"21"},"2021"),r.a.createElement(ce.a,{value:"20"},"2020"),r.a.createElement(ce.a,{value:"19"},"2019"),r.a.createElement(ce.a,{value:"18"},"2018"),r.a.createElement(ce.a,{value:"17"},"2017"),r.a.createElement(ce.a,{value:"16"},"2016"),r.a.createElement(ce.a,{value:"15"},"2015")))),r.a.createElement("div",{className:e.section},r.a.createElement(T.a,{variant:"h6",className:e.header},"Version"),r.a.createElement(ne.a,{className:e.formControl},r.a.createElement(re.a,{name:"version",value:c.version,onChange:k},r.a.createElement(ce.a,{value:"1"},"1"),r.a.createElement(ce.a,{value:"2"},"2"),r.a.createElement(ce.a,{value:"3"},"3")))),r.a.createElement("div",{className:e.section},r.a.createElement(T.a,{variant:"h6",className:e.header},"Assembly Location"),r.a.createElement(ne.a,{className:e.formControl},r.a.createElement(re.a,{name:"assembly",value:c.assembly,onChange:k},r.a.createElement(ce.a,{value:"F"},"Factory F"),r.a.createElement(ce.a,{value:"V"},"Factory V")))),r.a.createElement(A.a,{className:e.submit,onClick:function(){var e=ee[m];if(c.model=e.code,function(e){var a=!0;return Object.keys(e).forEach((function(t){e[t]||(a=!1)})),!a}(c))y("All fields required.");else{var a=te(c);g(a)}}},"Generate Serial Hash"))},de=Object(F.a)((function(e){return{container:{height:"5vw",minHeight:"50px",display:"flex",alignItems:"center",padding:"0 2%",backgroundColor:e.palette.primary.main},link:{textDecoration:"none",color:"#ffffff",marginRight:"5%","&:hover":{cursor:"pointer"}}}})),he=function(){var e=de(),a=Object(s.b)();return r.a.createElement("div",{className:e.container},r.a.createElement(o.b,{to:"/query",className:e.link},r.a.createElement(T.a,{variant:"body1"},"New Query")),r.a.createElement(o.b,{to:"/results",className:e.link},r.a.createElement(T.a,{variant:"body1"},"Results")),r.a.createElement(o.b,{to:"/create",className:e.link},r.a.createElement(T.a,{variant:"body1"},"Create New Serial")),r.a.createElement(T.a,{onClick:function(){a(O(null)),localStorage.removeItem("rad_power_test_token")},variant:"body1",className:e.link},"Forget Me"))};var pe=function(e){var a=e.store;return r.a.createElement(u.a,{theme:f},r.a.createElement(h,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{store:a},r.a.createElement(o.a,null,r.a.createElement(_,null,r.a.createElement(he,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:D}),r.a.createElement(i.b,{exact:!0,path:"/query",component:L}),r.a.createElement(i.b,{exact:!0,path:"/results",component:Q}),r.a.createElement(i.b,{exact:!0,path:"/create",component:me}),r.a.createElement(i.b,{component:w}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=t(36),ge=t(62),ve=t.n(ge),Ee={token:null},be={results:[]},ye=Object(fe.b)({bikes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_BIKE_RESULTS":return ve()(e,{results:{$set:a.payload}});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_AUTH_TOKEN":return ve()(e,{token:{$set:a.payload}});default:return e}}}),_e=Object(fe.c)(ye,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,{store:_e})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.1f970bca.chunk.js.map