(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Progress Tracker\n      ")]),a("div",[a("q-btn",{attrs:{flat:"",label:"logout"},on:{click:function(t){return e.logout()}}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","margin-top":"150px",color:"black","border-right":"1px solid #ddd"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}}),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.changePage("viewer")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"bluetooth"}})],1),a("q-item-section",[e._v("objective viewer")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.changePage("setup")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"bluetooth"}})],1),a("q-item-section",[e._v("setup")])],1)],1)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:e.user.photoURL}})]),a("div",{staticClass:"text-weight-bold"},[e._v(e._s(e.user.displayName))]),a("div",[e._v(e._s(e.user.email))])],1)])],1),a("q-page-container",[a("router-view")],1)],1)},i=[],s=(a("5319"),{name:"MainLayout",data(){return{leftDrawerOpen:!1}},computed:{user(){return this.$store.getters.user}},methods:{changePage(e){this.$router.replace(e)},logout(){this.$store.dispatch("logout")}}}),o=s,l=a("2877"),n=a("4d5a"),c=a("e359"),p=a("65c6"),u=a("9c40"),m=a("6ac5"),d=a("9404"),b=a("4983"),v=a("1c1c"),g=a("0170"),h=a("66e5"),q=a("4074"),w=a("0016"),f=a("068f"),Q=a("cb32"),k=a("09e3"),y=a("714f"),x=a("eebe"),_=a.n(x),D=Object(l["a"])(o,r,i,!1,null,null,null);t["default"]=D.exports;_()(D,"components",{QLayout:n["a"],QHeader:c["a"],QToolbar:p["a"],QBtn:u["a"],QToolbarTitle:m["a"],QDrawer:d["a"],QScrollArea:b["a"],QList:v["a"],QItemLabel:g["a"],QItem:h["a"],QItemSection:q["a"],QIcon:w["a"],QImg:f["a"],QAvatar:Q["a"],QPageContainer:k["a"]}),_()(D,"directives",{Ripple:y["a"]})}}]);