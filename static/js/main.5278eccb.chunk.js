(this["webpackJsonppersonaltrainer-front"]=this["webpackJsonppersonaltrainer-front"]||[]).push([[0],{112:function(e,t,a){},139:function(e,t,a){e.exports=a(156)},144:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(144),a(112),a(213)),i=a(214),s=a(212),u=a(54),m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{collapseOnSelect:!0,expand:"xl",bg:"light",variant:"light"},r.a.createElement(c.a.Brand,{href:"/Index"},"Personal Trainer"),r.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(u.b,{to:"/Customers"},r.a.createElement(i.a.Link,{href:"/Customers"},"Customerlist")),r.a.createElement(u.b,{to:"/Trainings"},r.a.createElement(i.a.Link,{href:"Trainings"},"Traininglist")),r.a.createElement(u.b,{to:"/Reservations"},r.a.createElement(i.a.Link,{href:"Reservations"},"Customers with trainings")),r.a.createElement(s.a,{title:"Personal trainers",id:"collasible-nav-dropdown"},r.a.createElement(u.b,{to:"/Coachlist"},r.a.createElement(s.a.Item,{href:"/Coacheslist/3.1"},"List")),r.a.createElement(u.b,{to:"/Coachgrid"},r.a.createElement(s.a.Item,{href:"/Coachesgrid/3.2"},"Grid")))))))},d=a(15),f=a(68),h=(a(98),a(215)),E=a(45),p=a(48),g=a(96),b=a(211),v=a(165),C=a(161),y=a(158),j=a(203);function O(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)({firstname:"",lastname:"",streetaddress:"",postcode:"",city:"",email:"",phone:""}),i=Object(d.a)(c,2),s=i[0],u=i[1],m=function(){e.addCustomer(s),o(!1)},f=function(e){u(Object(p.a)({},s,Object(E.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(g.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Add customer"),r.a.createElement(v.a,{open:l,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{id:"form-dialog-title"},"New customer"),r.a.createElement(y.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"firstname",name:"firstname",value:s.firstname,onChange:f,label:"firstname",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"lastname",name:"lastname",value:s.lastname,onChange:f,label:"lastname",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"streetaddress",name:"streetaddress",value:s.streetaddress,onChange:f,label:"streetaddress",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"postcode",name:"postcode",value:s.postcode,onChange:f,label:"postcode",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"city",name:"city",value:s.city,onChange:f,label:"city",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:s.email,onChange:f,label:"email",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"phone",name:"phone",value:s.phone,onChange:f,label:"phone",fullWidth:!0})),r.a.createElement(C.a,null,r.a.createElement(g.a,{onClick:function(){o(!1)},color:"primary"},"Cancel"),r.a.createElement(g.a,{onClick:m,color:"primary"},"Save"))))}var k=a(122),S=a.n(k),w=a(162);function H(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)({firstname:"",lastname:"",streetaddress:"",postcode:"",city:"",email:"",phone:""}),i=Object(d.a)(c,2),s=i[0],u=i[1],m=function(){e.updateCustomer(e.customer.links[0].href,s),o(!1)},f=function(e){u(Object(p.a)({},s,Object(E.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(w.a,{size:"small",color:"primary",onClick:function(){console.log(e.customer),u({firstname:e.customer.firstname,lastname:e.customer.lastname,streetaddress:e.customer.streetaddress,postcode:e.customer.postcode,city:e.customer.city,email:e.customer.email,phone:e.customer.phone}),o(!0)}},r.a.createElement(S.a,null)),r.a.createElement(v.a,{open:l,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{id:"form-dialog-title"},"Edit existing customer"),r.a.createElement(y.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"firstname",name:"firstname",value:s.firstname,onChange:f,label:"firstname",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"lastname",name:"lastname",value:s.lastname,onChange:f,label:"lastname",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"streetaddress",name:"streetaddress",value:s.streetaddress,onChange:f,label:"streetaddress",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"postcode",name:"postcode",value:s.postcode,onChange:f,label:"postcode",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"city",name:"city",value:s.city,onChange:f,label:"city",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:s.email,onChange:f,label:"email",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"phone",name:"phone",value:s.phone,onChange:f,label:"phone",fullWidth:!0})),r.a.createElement(C.a,null,r.a.createElement(g.a,{onClick:function(){o(!1)},color:"primary"},"Cancel"),r.a.createElement(g.a,{onClick:m,color:"primary"},"Save"))))}a(154);var W=a(204),D=a(125),T=a(18),P=a(205),L=a(216);function N(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(),i=Object(d.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)([]),f=Object(d.a)(m,2),h=f[0],O=f[1],k=Object(n.useState)({date:"",duration:"",activity:"",customer:""}),S=Object(d.a)(k,2),w=S[0],H=S[1],N=function(){e.addTrainingForCustomer(w),o(!1)},z=function(e){console.log(e),u(e),H(Object(p.a)({},w,{date:s}))},A=function(e){console.log(w),H(Object(p.a)({},w,Object(E.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){fetch(e.singleCustomer.links[0].href).then((function(e){return e.json()})).then((function(e){return O(e.firstname+" "+e.lastname)})).catch((function(e){return console.log(e)})),H(Object(p.a)({},w,{customer:e.singleCustomer.links[0].href})),o(!0)}},"New training"),r.a.createElement(v.a,{open:l,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:N,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{id:"form-dialog-title"},"Add training for ",h),r.a.createElement(y.a,null,r.a.createElement(T.a,{utils:D.a},r.a.createElement(W.a,{container:!0,justify:"space-around"},r.a.createElement(P.a,{margin:"normal",id:"date-picker-dialog",label:"Date",format:"dd.MM.yyyy",value:e.singleCustomer.date,onChange:function(e){return z(e)},KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(L.a,{margin:"normal",id:"time-picker",label:"Time",value:e.singleCustomer.date,onChange:function(e){return z(e)},KeyboardButtonProps:{"aria-label":"change time"}}))),r.a.createElement(b.a,{margin:"dense",id:"activity",name:"activity",value:e.singleCustomer.activity,onChange:A,label:"Activity",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"duration",name:"duration",value:e.singleCustomer.duration,onChange:A,label:"Duration",fullWidth:!0})),r.a.createElement(C.a,null,r.a.createElement(g.a,{onClick:function(){o(!1)},color:"primary"},"Cancel"),r.a.createElement(g.a,{onClick:N,color:"primary"},"Save"))))}var z=a(124),A=a.n(z);function B(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),i=c[0],s=c[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),E=m[0],p=m[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){fetch("https://customerrest.herokuapp.com/api/customers").then((function(e){return e.json()})).then((function(e){return l(e.content)})).catch((function(e){return console.log(e)}))},b=function(e,t){fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return g()})).then((function(e){p("Customer updated"),s(!0)})).catch((function(e){return console.log(e)}))},v=function(e){fetch("https://customerrest.herokuapp.com/api/trainings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return g()})).then((function(e){p("Reservation added"),s(!0)})).catch((function(e){return console.log(e)}))},C=[{Header:"Firstname",accessor:"firstname"},{Header:"Lastname",accessor:"lastname"},{Header:"Street address",accessor:"streetaddress"},{Header:"Postcode",accessor:"postcode"},{Header:"City",accessor:"city"},{Header:"Email",accessor:"email"},{Header:"Phone",accessor:"phone"},{Cell:function(e){return r.a.createElement(N,{singleCustomer:e.original,addTrainingForCustomer:v})}},{Cell:function(e){return r.a.createElement(H,{customer:e.original,updateCustomer:b})}},{Cell:function(e){return r.a.createElement(w.a,{"aria-label":"delete",size:"small",color:"secondary",onClick:function(){return t=e.original.links[0].href,void(window.confirm("Are you sure?")&&fetch(t,{method:"DELETE"}).then((function(e){return g()})).then((function(e){p("Customer deleted"),s(!0)})).catch((function(e){return console.log(e)})));var t}},r.a.createElement(A.a,null))}}];return r.a.createElement("div",null,r.a.createElement(O,{addCustomer:function(e){fetch("https://customerrest.herokuapp.com/api/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return g()})).then((function(e){p("Customer added"),s(!0)})).catch((function(e){return console.log(e)}))}}),r.a.createElement(f.a,{defaultPageSize:10,filterable:!0,data:a,columns:C}),r.a.createElement(h.a,{open:i,autoHideDuration:3e3,onClose:function(){s(!1)},message:E,anchorOriginal:{vertical:"bottom",horizontal:"left"}}))}var Y=a(94),x=a.n(Y);function M(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),i=c[0],s=c[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),E=m[0],p=m[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){fetch("https://customerrest.herokuapp.com/api/trainings").then((function(e){return e.json()})).then((function(e){return l(e.content)})).catch((function(e){return console.log(e)}))},v=[{id:"date",Header:"Date and time",accessor:function(e){return x()(e.date).local().format("DD.MM.YYYY hh:mm:ss a")}},{Header:"Duration (minutes)",accessor:"duration"},{Header:"Activity",accessor:"activity"},{Cell:function(e){return r.a.createElement(g.a,{size:"small",color:"secondary",onClick:function(){return t=e.original.links[0].href,void(window.confirm("Are you sure?")&&fetch(t,{method:"DELETE"}).then((function(e){return b()})).then((function(e){p("Training deleted"),s(!0)})).catch((function(e){return console.log(e)})));var t}},"Delete")}}];return r.a.createElement("div",null,r.a.createElement(f.a,{defaultPageSize:10,filterable:!0,data:a,columns:v}),r.a.createElement(h.a,{open:i,autoHideDuration:3e3,onClose:function(){s(!1)},message:E,anchorOriginal:{vertical:"bottom",horizontal:"left"}}))}function F(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){fetch("https://customerrest.herokuapp.com/gettrainings").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))},c=[{id:"date",Header:"Date and time",accessor:function(e){return x()(e.date).local().format("DD.MM.YYYY hh:mm:ss a")}},{Header:"Duration (minutes)",accessor:"duration"},{Header:"Activity",accessor:"activity"},{Header:"Customer id",accessor:"customer.id"},{Header:"Firstname",accessor:"customer.firstname"},{Header:"Lastname",accessor:"customer.lastname"}];return r.a.createElement("div",null,r.a.createElement(f.a,{defaultPageSize:10,filterable:!0,data:a,columns:c}))}var J=a(39),K=a(206),I=a(207),R=a(209),_=a(208),q=Object(J.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:1e3},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));function G(){var e=q(),t=Object(n.useState)([]),a=Object(d.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){fetch("https://reqres.in/api/users").then((function(e){return e.json()})).then((function(e){o(e.data)})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(K.a,{cellHeight:180,className:e.gridList},r.a.createElement(I.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(_.a,{component:"div"}," ")),l.map((function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement("img",{src:e.avatar,alt:"coach"}),r.a.createElement(R.a,{title:r.a.createElement("span",null,e.first_name," ",e.last_name," "),subtitle:e.email}))}))))}var U=a(210);function $(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){fetch("https://reqres.in/api/users").then((function(e){return e.json()})).then((function(e){l(e.data)})).catch((function(e){return console.error(e)}))}),[]);var o=a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.first_name," ",e.last_name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement("img",{src:e.avatar,alt:"coach"})))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Personal trainers"),r.a.createElement(U.a,{responsive:"lg"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Coach"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null," ")),o)))}var Q=a(52);var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(m,null),r.a.createElement(Q.c,null,r.a.createElement(Q.a,{path:"/Customers",component:B},r.a.createElement(B,null)),r.a.createElement(Q.a,{path:"/Trainings",component:M},r.a.createElement(M,null)),r.a.createElement(Q.a,{path:"/Reservations",component:F},r.a.createElement(F,null)),r.a.createElement(Q.a,{path:"/Coachgrid",component:G},r.a.createElement(G,null)),r.a.createElement(Q.a,{path:"/Coachlist",component:$},r.a.createElement($,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.5278eccb.chunk.js.map