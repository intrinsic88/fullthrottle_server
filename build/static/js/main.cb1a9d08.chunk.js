(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),i=(a(104),a(105),a(33)),o=a(179),m=a(182),s=a(184),u=a(185),d=a(186),f=a(187),p=a(188),E=a(189),x=a(190),y=a(191),g=a(192),b=a(198),h=a(193),v=a(147),w=a(196),Y=a(57),j=a.n(Y),O=a(27),k=function(e){return r.a.createElement(O.e,{margin:{bottom:70},xType:"linear",xDomain:[1,24],width:500,height:500},r.a.createElement(O.c,null),r.a.createElement(O.a,null),r.a.createElement(O.d,{title:"Time in Day"}),r.a.createElement(O.f,{title:"Hours (30Mins is 0.5 hours)"}),r.a.createElement(O.b,{data:e.data}))},D=a(39),M=a.n(D),N=Object(o.a)((function(e){return{top_margin:{marginTop:"2%"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),T=[{title:"Name",field:"name"},{title:"Time Zone ",field:"time_zone"}],S={start_date:M()().format("YYYY/MM/DD"),end_date:M()().format("YYYY/MM/DD"),data:[{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:5,y:0},{x:6,y:0},{x:7,y:0},{x:8,y:0},{x:9,y:0},{x:10,y:0},{x:11,y:0},{x:12,y:0},{x:13,y:0},{x:14,y:0},{x:15,y:0},{x:16,y:0},{x:17,y:0},{x:18,y:0},{x:20,y:0},{x:21,y:0},{x:22,y:0},{x:23,y:0},{x:24,y:0}]},B=function(){var e=N(),t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),Y=Object(i.a)(o,2),O=Y[0],D=Y[1],B=Object(n.useState)(S),C=Object(i.a)(B,2),_=C[0],A=C[1],G=Object(n.useState)([]),F=Object(i.a)(G,2),I=F[0],z=F[1],J=Object(n.useState)(M()().format("YYYY/MM/DD")),L=Object(i.a)(J,2),P=L[0],R=L[1],V=function(){var e=!1;I.map((function(t){var a=M.a.utc(t.start_date).format("YYYY-MM-DD");if(P==a)return A(t),void(e=!0)})),e||A(S)},W=function(e){!function(e){j()({method:"GET",url:"/api/users/"+e}).then((function(e){z(e.data)})).then((function(){V()}))}(e),H(),A(S)},H=function(){D(!0)};return Object(n.useEffect)((function(){return j()({method:"GET",url:"/api/users"}).then((function(e){c(e.data)})),function(){c([])}}),[]),Object(n.useEffect)((function(){V(),console.log("inside")}),[P]),r.a.createElement(m.a,{className:e.top_margin},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{align:"left"},"User Details"),r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(x.a,null,T.map((function(e,t){return r.a.createElement(y.a,{key:t},e.title)})))),r.a.createElement(g.a,null,l.map((function(e){return r.a.createElement(x.a,{key:e.id},r.a.createElement(y.a,{component:"td",scopr:"row",onClick:function(){return W(e.id)}},e.name),r.a.createElement(y.a,{component:"td",scopr:"row"},e.timezone))})))))))),r.a.createElement(b.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:O,onClose:function(){D(!1)},closeAfterTransition:!0,BackdropComponent:h.a,BackdropProps:{timeout:500}},r.a.createElement(v.a,{in:O},r.a.createElement("div",{className:e.paper},r.a.createElement(s.a,{container:!0,align:"right"},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement("form",{className:e.container,noValidate:!0},r.a.createElement(w.a,{id:"date",label:"Active Date",type:"date",defaultValue:P,onChange:function(e){R(e.target.value)},className:e.textField,InputLabelProps:{shrink:!0}}))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(k,_)))))))},C=a(194),_=a(195),A=a(197),G=a(91),F=a.n(G),I=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),z=function(){var e=I();return r.a.createElement(C.a,{position:"static"},r.a.createElement(_.a,null,r.a.createElement(A.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(F.a,null)),r.a.createElement(f.a,{variant:"h6",className:e.title},"FT Assignment")))};var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(m.a,null,r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(146)}},[[99,1,2]]]);
//# sourceMappingURL=main.cb1a9d08.chunk.js.map