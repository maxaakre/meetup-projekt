(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-927919d4"],{"0f19":function(e,t,r){},"34c3":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"form"},[r("div",{staticClass:"message"}),r("h1",[e._v(e._s(e.message))]),r("p",{staticClass:"error-message"},[e._v(e._s(e.error))]),r("label",{attrs:{for:"text"}},[e._v("Usermname")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.name,expression:"credentials.name"}],attrs:{type:"text"},domProps:{value:e.credentials.name},on:{input:function(t){t.target.composing||e.$set(e.credentials,"name",t.target.value)}}}),r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.email,expression:"credentials.email"}],attrs:{type:"email"},domProps:{value:e.credentials.email},on:{input:function(t){t.target.composing||e.$set(e.credentials,"email",t.target.value)}}}),r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],attrs:{type:"password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}}),e._v(" Repeat Password "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.repeatPassword,expression:"credentials.repeatPassword"}],attrs:{type:"password"},domProps:{value:e.credentials.repeatPassword},on:{input:function(t){t.target.composing||e.$set(e.credentials,"repeatPassword",t.target.value)}}}),r("a",{staticClass:"btn",attrs:{href:"#"},on:{click:e.register}},[e._v(" Sign me up! ")])])])},s=[],n=(r("96cf"),r("1da1")),i={data:function(){return{message:"Register",logedIn:"You are registerd go to login",credentials:{email:"",password:"",repeatPassword:"",name:""},error:"Fill in input fielde's"}},computed:{auth:function(){return this.$store.state.auth}},methods:{register:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error="",""!=e.credentials.email&&""!=e.credentials.password){t.next=6;break}return e.error="Fill in input fielde's",t.abrupt("return");case 6:if(e.validEmail(e.credentials.email)){t.next=9;break}return e.error="invalid mail",t.abrupt("return");case 9:return t.next=11,e.$store.dispatch("register",e.credentials);case 11:return t.next=13,sessionStorage.setItem("meetup",JSON.stringify(e.credentials));case 13:case"end":return t.stop()}}),t)})))()},validEmail:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}}},o=i,l=(r("9ed8"),r("2877")),d=Object(l["a"])(o,a,s,!1,null,"6337025d",null);t["default"]=d.exports},"9ed8":function(e,t,r){"use strict";var a=r("0f19"),s=r.n(a);s.a}}]);
//# sourceMappingURL=chunk-927919d4.0a15dc07.js.map