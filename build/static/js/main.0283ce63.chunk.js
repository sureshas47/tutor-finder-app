(this["webpackJsonptutor-finder-app"]=this["webpackJsonptutor-finder-app"]||[]).push([[0],{188:function(e,t,a){},189:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},516:function(e,t,a){},517:function(e,t,a){},518:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(12),i=a.n(c),s=(a(212),a.p,a(213),a(23)),r=a(19),o=a(199),u=a(11),l=(a(214),a.p+"static/media/loginimg.9b3165a0.webp"),d=a(43),j=(a(217),d.a.initializeApp({apiKey:"AIzaSyAS1X6PvWf9nhy_ulEXI7wB7J3ap6CpX0g",authDomain:"tutor-finder-app-94f4d.firebaseapp.com",projectId:"tutor-finder-app-94f4d",storageBucket:"tutor-finder-app-94f4d.appspot.com",messagingSenderId:"292928724946",appId:"1:292928724946:web:536ee66307a947f881320b",measurementId:"G-PB099MDH0K"})),m=a(27),p=a.n(m),b=a(44);a(521);function h(){return(h=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.firestore().collection("userManagement").add({email:t.email,fid:t.uid}).then((function(e){})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.firestore().collection("chat-room").add({chat_id:t.id,chat_name:t.name,desc:t.desc,chat_image:t.image}).then((function(e){})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.firestore().collection("chat-room").get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=a(3),g=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),m=d[0],p=d[1],b=Object(n.useState)([]),f=Object(u.a)(b,2),O=f[0],g=f[1],v=Object(r.f)(),y=function(e){(function(e){return h.apply(this,arguments)})(e).then((function(e){v.push("/chat-app")}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("img",{src:l,alt:""}),Object(x.jsx)("h1",{children:"Tutor Finder Login Area"})]}),Object(x.jsxs)("div",{className:"loginArea",children:[Object(x.jsxs)("form",{className:"login-area",onSubmit:function(e){e.preventDefault();var t={email:a,password:m};g.apply(void 0,Object(o.a)(O).concat([[t]])),j.auth().signInWithEmailAndPassword(a,m).then((function(e){alert("successful login from: "+a),y(e.user)})).catch((function(e){alert("failed",e)}))},action:"",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",name:"email",id:"email",autoComplete:"off",value:a,required:!0,onChange:function(e){return c(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",id:"psw",autoComplete:"off",value:m,required:!0,onChange:function(e){return p(e.target.value)}}),Object(x.jsx)("button",{name:"submit",type:"submit",className:"submit",children:"Login"}),Object(x.jsx)(s.b,{to:"signup",children:"Signup"})]}),Object(x.jsx)("div",{})]})]})},v=(a(516),function(){var e=Object(r.f)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),d=Object(u.a)(o,2),m=d[0],p=d[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),f=h[0],O=h[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),y=v[0],N=v[1],A=Object(n.useState)(""),C=Object(u.a)(A,2),S=C[0],w=C[1];Object(n.useEffect)((function(){return function(){j.auth().createUserWithEmailAndPassword(c,m).then((function(e){return e})).catch((function(e){return e}))}}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("img",{src:l,alt:""}),Object(x.jsx)("h1",{children:"Tutor Finder User Registration Area"})]}),Object(x.jsx)("div",{className:"signupArea",children:Object(x.jsxs)("form",{className:"signup-area",onSubmit:function(t){t.preventDefault();var a=j.firestore();m===f?a.collection("tutorFinderApp").add({email:c,password:m,cpassword:f,fullName:y,userType:S}).then((function(t){alert("register successful"),e.push("/")})).catch((function(e){alert("failed to register ! please try again")})):alert("password did not matched")},action:"",children:[Object(x.jsx)("input",{type:"email",name:"email",id:"email",autoComplete:"off",value:c,placeholder:"enter email",onChange:function(e){return i(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"password",name:"password",id:"psw",autoComplete:"off",value:m,placeholder:"enter password",onChange:function(e){return p(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"password",name:"cPassword",id:"cpsw",autoComplete:"off",value:f,onChange:function(e){return O(e.target.value)},placeholder:"retype password",required:!0}),Object(x.jsx)("input",{type:"text",name:"fullname",id:"fname",autoComplete:"off",value:y,onChange:function(e){return N(e.target.value)},placeholder:"enter Full name",required:!0}),Object(x.jsx)("input",{type:"radio",name:"tutor",id:"tutor",value:"tutor",checked:"tutor"===S,onChange:function(e){return w(e.target.value)}}),"I am Tutor",Object(x.jsx)("input",{type:"radio",name:"student",id:"student",value:"student",checked:"student"===S,onChange:function(e){return w(e.target.value)}}),"I am Student",Object(x.jsx)("button",{name:"signup",type:"submit",children:"Sign Up My Account"}),Object(x.jsx)(s.b,{to:"/",children:"already an account? Login"})]})})]})}),y=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(u.a)(i,2),r=s[0],o=s[1],l=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.firestore().collection("tutorFinderApp").get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l().then((function(e){c(e),o(!1)}))})),Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:r?Object(x.jsx)("div",{children:"loading.."}):a.map((function(e){return Object(x.jsx)("div",{className:"show-email",children:Object(x.jsx)("p",{children:e.fullName})})}))})})},N=a.p+"static/media/Education.d2f60b38.png",A=(a(517),function(){var e=Object(r.f)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),l=o[0],j=o[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),b=p[0],h=p[1],f=Object(n.useState)(""),O=Object(u.a)(f,2),g=O[0],v=O[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"main-header",children:Object(x.jsxs)("h1",{children:["Searching A Teacher !",Object(x.jsx)("h2",{children:" Register Your Profile"})]})}),Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("img",{src:N,alt:""}),Object(x.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor fugit magnam nam non porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore. Aliquam quas, voluptatibusconsectetur adipisicing elit. Deserunt dolor fugit magnam nam non porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore. Aliquam quas, voluptatibusconsectetur adipisicing elit. Deserunt dolor fugit magnam nam non porro qui ullam! Autem, consequuntur delectus eveniet ipsum magnam mollitia neque quod tempore. Aliquam quas, voluptatibus! Register Your Profile To ",Object(x.jsx)("span",{children:"GET STARTED"})]})]}),Object(x.jsx)("div",{className:"studentProfile",children:Object(x.jsxs)("form",{action:"",className:"student-profile",onSubmit:function(t){t.preventDefault(),d.a.firestore().collection("studentData").add({address:c,phoneNumber:l,city:b,college:g}).then((function(t){alert("student register successful"),e.push("/chat")})).catch((function(e){alert("failed to register student ! please try again")}))},children:[Object(x.jsx)("input",{type:"text",name:"address",id:"address",autoComplete:"off",value:c,placeholder:"enter address",onChange:function(e){return i(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"number",name:"phoneNumber",id:"phoneNumber",autoComplete:"off",value:l,placeholder:"enter contact no.",onChange:function(e){return j(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"text",name:"city",id:"city",autoComplete:"off",value:b,onChange:function(e){return h(e.target.value)},placeholder:"enter city",required:!0}),Object(x.jsx)("input",{type:"text",name:"college",id:"college",autoComplete:"off",value:g,onChange:function(e){return v(e.target.value)},placeholder:"enter college name",required:!0}),Object(x.jsx)("button",{name:"save",type:"submit",children:"Save Profile"})]})})]})}),C=a.p+"static/media/teacher.ab225ed2.jpeg",S=(a(518),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),r=s[0],o=s[1],l=Object(n.useState)(""),j=Object(u.a)(l,2),m=j[0],p=j[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),f=h[0],O=h[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),y=v[0],N=v[1],A=Object(n.useState)(""),S=Object(u.a)(A,2),w=S[0],R=S[1],E=Object(n.useState)(""),F=Object(u.a)(E,2),k=F[0],q=F[1],T=Object(n.useState)(""),I=Object(u.a)(T,2),U=I[0],J=I[1],Q=Object(n.useState)(null),D=Object(u.a)(Q,2),K=D[0],M=D[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"main-header",children:Object(x.jsxs)("h1",{children:["Searching A New ",Object(x.jsx)("h2",{children:"Teaching Job !"})]})}),Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("img",{src:C,alt:""}),Object(x.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda cupiditate delectus dolor error est et harum id officia, quaerat quasi saepe vitae. Aspernatur assumenda cumque labore odit quos unde?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda cupiditate delectus dolor error est et harum id officia, quaerat quasi saepe vitae. Aspernatur assumenda cumque labore odit quos unde?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda cupiditate delectus dolor error est et harum id officia, quaerat quasi saepe vitae. Aspernatur assumenda cumque labore odit quos unde? Register your profile to",Object(x.jsx)("span",{children:" GET STARTED"})]})]}),Object(x.jsx)("div",{className:"teacherProfile",children:Object(x.jsxs)("form",{className:"teacher-Profile",action:"",onSubmit:function(e){e.preventDefault(),d.a.firestore().collection("teacherData").add({address:a,phoneNumber:r,city:m,qualification:f,experience:y,fees:w,subject:k,message:U}).then((function(e){alert("teacher register successful")})).catch((function(e){alert("failed to register ! please try again")}));d.a.storage().ref("images").child(K.name).put(K)},children:[Object(x.jsx)("input",{type:"text",name:"address",id:"address",autoComplete:"off",value:a,placeholder:"enter address",onChange:function(e){return c(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"number",name:"phoneNumber",id:"phoneNumber",autoComplete:"off",value:r,placeholder:"enter contact no.",onChange:function(e){return o(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"text",name:"city",id:"city",autoComplete:"off",value:m,onChange:function(e){return p(e.target.value)},placeholder:"enter city",required:!0}),Object(x.jsx)("input",{type:"text",name:"qualification",id:"qualification",autoComplete:"off",value:f,onChange:function(e){return O(e.target.value)},placeholder:"enter qualification",required:!0}),Object(x.jsx)("input",{type:"text",name:"experience",id:"experience",autoComplete:"off",value:y,onChange:function(e){return N(e.target.value)},placeholder:"enter experience",required:!0}),Object(x.jsx)("input",{type:"number",name:"fees",id:"fees",autoComplete:"off",value:w,onChange:function(e){return R(e.target.value)},placeholder:"enter fees",required:!0}),Object(x.jsx)("input",{type:"text",name:"subject",id:"subject",autoComplete:"off",value:k,onChange:function(e){return q(e.target.value)},placeholder:"enter subject",required:!0}),Object(x.jsx)("input",{type:"text",name:"message",id:"message",autoComplete:"off",value:U,onChange:function(e){return J(e.target.value)},placeholder:"enter message",required:!0}),Object(x.jsx)("input",{className:"file",type:"file",name:"profile-pic",id:"profile-pic",autoComplete:"off",onChange:function(e){return M(e.target.files[0])},placeholder:"choose profile picture",required:!0}),Object(x.jsx)("button",{name:"save",type:"submit",children:"Save Profile"})]})})]})}),w=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-primary",children:[Object(x.jsx)(s.b,{className:"navbar-brand",to:"/default",children:"Tutor Finder App"}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(x.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(x.jsx)("li",{className:"nav-item active",children:Object(x.jsxs)(s.b,{className:"nav-link",to:"/default",children:["Home ",Object(x.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(x.jsx)("li",{className:"nav-item active",children:Object(x.jsxs)(s.b,{className:"nav-link",to:"student-profile",children:["Find Tutors",Object(x.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(x.jsx)("li",{className:"nav-item active",children:Object(x.jsxs)(s.b,{className:"nav-link",to:"teacher-profile",children:["Find Tutors Jobs ",Object(x.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(x.jsx)("li",{className:"nav-item active",children:Object(x.jsxs)("a",{className:"nav-link",href:"#",children:["Contact ",Object(x.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(x.jsxs)("li",{className:"nav-item dropdown",id:"user",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"User"}),Object(x.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Profile"}),Object(x.jsx)("div",{className:"dropdown-divider"}),Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Logout"})]})]})]}),Object(x.jsx)("div",{className:"form-inline my-2 my-lg-0",id:"btnTutor",children:Object(x.jsxs)("a",{className:"nav-link btn btn-outline-warning my-2 my-sm-0",href:"#",children:["Request a Tutor ",Object(x.jsx)("span",{className:"sr-only",children:"(current)"})]})})]})]})})},R=(a(188),a.p+"static/media/study-after-see.f23f94e6.jpeg"),E=a.p+"static/media/esewa-logo.5916f61a.png",F=a.p+"static/media/fonepay.8f6dd492.bin",k=a(193),q=a(194),T=a(200),I=a(198),U=[{img:"data:image/png;base64,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",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum officia"},{img:"data:image/png;base64,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",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum officia"},{img:a.p+"static/media/js.dee96e6a.png",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum officia"},{img:a.p+"static/media/react.09ce83c1.png",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum officia"},{img:a.p+"static/media/node.fa03b2ad.png",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum officia"}];var J=function(e){return Object(x.jsx)(n.Fragment,{children:Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("div",{id:"images",children:Object(x.jsx)("img",{src:e.images,alt:"languages"})}),Object(x.jsx)("div",{id:"title",children:e.title})]})})},Q=function(e){Object(T.a)(a,e);var t=Object(I.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(q.a)(a,[{key:"render",value:function(){return Object(x.jsx)(n.Fragment,{children:Object(x.jsx)("div",{className:"header",children:U.map((function(e,t){return Object(x.jsx)(J,{images:e.img,title:e.title},t)}))})})}}]),a}(n.Component),D=function(){var e=Object(r.f)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"languages",children:[Object(x.jsx)("h1",{className:"main-header",children:"LEARN 50+ PROGRAMMING LANGUAGES !"}),Object(x.jsx)(Q,{})]}),Object(x.jsxs)("div",{className:"academic-course",children:[Object(x.jsx)("h1",{className:"main-header",children:"LEARN 100+ ACADEMIC SUBJECTS !"}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:R,alt:""})})]}),Object(x.jsxs)("div",{className:"payment",children:[Object(x.jsx)("h1",{className:"main-header",children:"OUR SECURE PAYMENT PARTNERS"}),Object(x.jsxs)("div",{className:"payments-online",children:[Object(x.jsx)("img",{src:E,alt:""}),Object(x.jsx)("img",{src:F,alt:""})]}),Object(x.jsxs)("div",{className:"payment-method",children:[Object(x.jsx)("input",{type:"submit",className:"btn btn-lg btn-primary",value:"Pay With Esewa",onClick:function(){return e.push("/pay")}}),Object(x.jsxs)("form",{id:"payment-form",action:"",children:[Object(x.jsx)("input",{type:"hidden",name:"PID",value:"{{$PID}}"}),Object(x.jsx)("input",{type:"hidden",name:"MD",value:"{{$MD}}"}),Object(x.jsx)("input",{type:"hidden",name:"AMT",value:"{{$AMT}}"}),Object(x.jsx)("input",{type:"hidden",name:"CRN",value:"{{$CRN}}"}),Object(x.jsx)("input",{type:"hidden",name:"DT",value:"{{$DT}}"}),Object(x.jsx)("input",{type:"hidden",name:"R1",value:"{{$R1}}"}),Object(x.jsx)("input",{type:"hidden",name:"R2",value:"{{$R2}}"}),Object(x.jsx)("input",{type:"hidden",name:"DV",value:"{{$DV}}"}),Object(x.jsx)("input",{type:"hidden",name:"RU",value:"{{$RU}}"}),Object(x.jsx)("input",{type:"hidden",name:"PRN",value:"{{$PRN}}"}),Object(x.jsx)("input",{type:"submit",className:"btn btn-lg btn-primary",value:"Pay With Fone-Pay"})]})]})]})]})},K=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("footer",{className:"page-footer font-small teal pt-4 jumbotron",children:[Object(x.jsx)("div",{className:"container-fluid text-center text-md-left",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-md-6 mt-md-0 mt-3",children:[Object(x.jsx)("h5",{className:"text-uppercase font-weight-bold",children:"About Us"}),Object(x.jsx)("p",{children:"Quickly design and customize responsive mobile-first sites with Bootstrap, the world\u2019s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."})]}),Object(x.jsxs)("div",{className:"col-md-6 mb-md-0 mb-3",children:[Object(x.jsx)("h5",{className:"text-uppercase font-weight-bold",children:"Our Benefits"}),Object(x.jsx)("p",{children:"Quickly design and customize responsive mobile-first sites with Bootstrap, the world\u2019s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."})]})]})}),Object(x.jsxs)("div",{className:"footer-copyright text-center py-3",children:["\xa9 2021 Copyright:",Object(x.jsx)("a",{href:"#",children:"tutor-finder-app.com"})]})]})})},M=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{className:"main-header",children:"PAYMENT SUCCESS"})})},W=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{className:"main-header",children:"OOPS! PAYMENT FAILURE, PLEASE TRY AGAIN LATER."})})},P=a(548),L=a(552),V=a(553),H=a(566);a(519);function G(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),s=Object(u.a)(i,2),o=s[0],l=s[1],d=Object(n.useState)(""),m=Object(u.a)(d,2),h=m[0],f=m[1],O=Object(n.useState)([]),g=Object(u.a)(O,2),v=g[0],y=g[1],N=Object(n.useState)(),A=Object(u.a)(N,2),C=A[0],S=A[1],w=Object(r.g)(),R=Object(r.f)();Object(n.useEffect)((function(){j.auth().onAuthStateChanged((function(e){var t=[];t.id=e.uid,t.email=e.email,c(t),l(!1)})),function(){try{j.database().ref(w.chatId).on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),y(t)}))}catch(e){console.log(e)}}(),S(R.location.state.room)}),[!0]);var E=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.database().ref(w.chatId).push({content:h,timeStamp:Date.now(),uid:a.id,email:a.email});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:o?Object(x.jsx)(P.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(L.a,{children:Object(x.jsx)(V.a,{className:"",avatar:Object(x.jsx)(H.a,{"aria-label":"recipe",src:C.chat_image}),title:C.chat_name,subheader:C.desc})})}),Object(x.jsx)("div",{children:Object(x.jsxs)(L.a,{className:"card",children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:["welcome ",Object(x.jsx)("span",{children:a.email})]}),Object(x.jsx)("div",{children:v.length?v.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:e.uid==a.id?"my-msg-time":"others-msg-time",children:e.email}),Object(x.jsx)("p",{className:e.uid==a.id?"my-msg":"others-msg",children:e.content}),Object(x.jsx)("p",{className:e.uid==a.id?"my-msg-time":"others-msg-time",children:new Date(e.timeStamp).toDateString()})]})})):""})]}),Object(x.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),E().finally((function(e){return e})).catch((function(e){console.log(e)})),f([])},children:[Object(x.jsx)("textarea",{name:"",id:"msg",cols:"20",rows:"3",value:h,onChange:function(e){null!=e.target.value&&f(e.target.value)},placeholder:"send message"}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"submit",children:"Send"})})]})]})})]})})})}var z=a(554),B=(a(189),a.p+"static/media/Present with ease.0c705116.png"),Y=a(555),X=a(556),Z=a(557),_=a(558),$=a(565),ee=a(559),te=a(560),ae=a(561),ne=a(563),ce=a(562);function ie(e){var t=Object(r.f)(),a=Object(n.useState)(),c=Object(u.a)(a,2),i=c[0],s=c[1],o=Object(n.useState)(!0),l=Object(u.a)(o,2),d=l[0],j=l[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),b=p[0],h=p[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2),y=v[0],N=v[1],A=Object(n.useState)(),C=Object(u.a)(A,2),S=C[0],w=C[1],R=Object(n.useState)(),E=Object(u.a)(R,2),F=E[0],k=E[1],q=Object(n.useState)(),T=Object(u.a)(q,2),I=T[0],U=T[1],J=function(){h(!1)},Q=function(e){"room_name"===e.target.id?w(e.target.value):"room_desc"===e.target.id?k(e.target.value):U(e.target.value)};return Object(n.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){s(e),j(!1)}))}),[!0]),Object(x.jsxs)("div",{children:[d?Object(x.jsx)("p",{children:"please wait, getting online users..."}):Object(x.jsxs)(L.a,{className:"card",children:[Object(x.jsx)(z.a,{style:{float:"right",width:"20%"},onClick:function(){return h(!0)},children:"Create Chat Room"}),Object(x.jsx)("h3",{className:"chat-list",children:"Available Chats"}),Object(x.jsx)("h2",{children:Object(x.jsx)(Y.a,{children:i.map((function(e){return Object(x.jsxs)(X.a,{className:"listItem",onClick:function(){return t.push("/chat/_"+e.chat_id,{room:e})},children:[Object(x.jsx)(Z.a,{children:Object(x.jsx)(H.a,{src:e.chat_image})}),Object(x.jsx)(_.a,{primary:e.chat_name,secondary:e.desc})]})}))})})]}),Object(x.jsxs)($.a,{open:b,onClose:J,"aria-labelledby":"form-dialog-title",children:[Object(x.jsx)(ee.a,{id:"form-dialog-title",children:"Creating Room"}),y?Object(x.jsx)(P.a,{}):Object(x.jsxs)(te.a,{children:[Object(x.jsx)(ae.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(x.jsx)(ne.a,{autoFocus:!0,onChange:Q,margin:"dense",id:"room_name",label:"Chat Room Name",type:"text",fullWidth:!0,value:S}),Object(x.jsx)(ne.a,{autoFocus:!0,onChange:Q,margin:"dense",id:"room_desc",label:"Room Description",type:"text",value:F,fullWidth:!0}),Object(x.jsx)(ne.a,{autoFocus:!0,onChange:Q,margin:"dense",id:"image",label:"Room Image Link",type:"text",value:I,fullWidth:!0})]}),y?"":Object(x.jsxs)(ce.a,{children:[Object(x.jsx)(z.a,{onClick:J,color:"primary",children:"Cancel"}),Object(x.jsx)(z.a,{onClick:function(){N(!0);var a={};a.id=e.uid+"_"+(new Date).getTime(),a.name=S,a.desc=F,a.image=I,console.log(a),function(e){return f.apply(this,arguments)}(a).then((function(){N(!1),h(!1),t.push("/chat/"+a.id)})).catch((function(e){}))},color:"primary",children:"Create"})]})]})]})}function se(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),o=s[0],l=s[1],d=Object(n.useState)(!1),m=Object(u.a)(d,2),p=m[0],b=m[1];Object(n.useEffect)((function(){j.auth().onAuthStateChanged((function(e){if(console.log(e),e){var t=[];t.id=e.uid,t.email=e.email,c(t),b(!0),console.log(t)}l(!1)}))}),[!0]);var h=Object(r.f)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"main-header",children:[o?Object(x.jsx)("p",{children:"please wait..."}):Object(x.jsxs)(L.a,{className:"card",children:[Object(x.jsx)("h1",{children:"CONNECT WITH PRO"}),Object(x.jsx)("p",{children:"Lets share your thoughts with our professionals."}),Object(x.jsx)("img",{src:B,alt:""}),p?Object(x.jsx)("p",{children:Object(x.jsx)(V.a,{className:"main-header",avatar:Object(x.jsx)(H.a,{"aria-label":"recipe"}),title:"Hello,",subheader:a.email})}):Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)(z.a,{color:"secondary",onClick:function(){return h.push("signup")},children:"Register"}),Object(x.jsx)(z.a,{className:"btn-login",color:"primary",onClick:function(){return h.push("/")},children:"Login"})]})]}),p?Object(x.jsx)("div",{children:Object(x.jsx)(ie,{uid:a.id})}):""]})})}function re(){var e={amt:100,psc:0,pdc:0,txAmt:0,tAmt:100,pid:"aee2c3ca1-696b-4cc5-a6be-2c40d929d453",scd:"EPAYTEST",su:"http://localhost:3000/success",fu:"http://localhost:3000/failure"},t=document.createElement("form");for(var a in t.setAttribute("method","POST"),t.setAttribute("action","https://uat.esewa.com.np/epay/main"),e){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name",a),n.setAttribute("value",e[a]),t.appendChild(n)}document.body.appendChild(t),t.submit()}var oe=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{}),Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/",component:g}),Object(x.jsx)(r.a,{path:"/signup",component:v}),Object(x.jsx)(r.a,{path:"/userlist",component:y}),Object(x.jsx)(r.a,{path:"/student-profile",component:A}),Object(x.jsx)(r.a,{path:"/teacher-profile",component:S}),Object(x.jsx)(r.a,{path:"/default",component:D}),Object(x.jsx)(r.a,{path:"/success",component:M}),Object(x.jsx)(r.a,{path:"/failure",component:W}),Object(x.jsx)(r.a,{exact:!0,path:"/chat/:chatId",component:G}),Object(x.jsx)(r.a,{path:"/chat-app",component:se}),Object(x.jsx)(r.a,{path:"/pay",component:re})]}),Object(x.jsx)(K,{})]})};var ue=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(oe,{})})})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,568)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};i.a.render(Object(x.jsx)(ue,{}),document.getElementById("root")),le()}},[[520,1,2]]]);
//# sourceMappingURL=main.0283ce63.chunk.js.map