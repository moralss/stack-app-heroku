(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1d9d":function(t,s,i){},c46e:function(t,s,i){"use strict";i("1d9d")},e37c:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("q-page",{staticClass:"authPage",attrs:{padding:""}},[t.showForm?i("q-card",{staticClass:"q-mt-md"},[i("form",[i("div",{staticClass:"row"},[i("q-input",{ref:"email",staticClass:"col q-pa-sm",attrs:{name:"email",label:"Email",type:"email",rules:[function(t){return!!t||"Email is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"mail"}})]},proxy:!0}]),model:{value:t.email,callback:function(s){t.email=s},expression:"email"}})],1),i("div",{staticClass:"row q-mt-sm"},[i("q-input",{ref:"password",staticClass:"col q-pa-sm",attrs:{label:"Password",type:t.isPwd?"password":"text",rules:[function(t){return!!t||"Passsword is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1)]),i("div",{staticClass:"row"},[i("q-toggle",{staticClass:"col q-pa-sm",attrs:{label:"Remember Me"},model:{value:t.rememberMe,callback:function(s){t.rememberMe=s},expression:"rememberMe"}})],1),i("div",{staticClass:"row"},[i("q-btn",{staticClass:"q-ma-sm q-mt-md q-pa-sm col q-mb-md",attrs:{type:"submit",label:"Login",color:"positive"},on:{click:t.login}})],1),i("div",{staticClass:"row"},[i("q-btn",{staticClass:" q-pa-sm col",attrs:{type:"submit",label:"Cancel",flat:"",color:"positive"},on:{click:function(s){t.showForm=!1}}})],1),i("div",{staticClass:"row"},[i("q-btn",{staticClass:"q-pa-sm col",attrs:{type:"submit",outline:"",to:"/sign-up",label:"Sign Up",color:"positive"}})],1),i("div",{staticClass:"row "},[i("q-btn",{staticClass:" q-pa-sm col ",attrs:{to:"/forgot-password",label:"Forgot Password",color:"secondary",flat:""}})],1),i("q-inner-loading",{attrs:{showing:t.submitting}},[i("q-spinner-facebook",{attrs:{color:"primary"}})],1)],1):i("div",{staticClass:"q-mt-md q-pa-sm"},[i("div",[i("div",{staticClass:"row"},[i("q-btn",{staticClass:"q-ma-sm q-mt-md q-pa-sm col sign-font",staticStyle:{background:"#ffffff",color:"#757575"},attrs:{type:"submit",loading:t.submitting,icon:"img:statics/s_icon/gg.svg","no-caps":"",label:"Sign in with Google"},on:{click:function(s){return t.loginPopup(t.googleProvider)}},scopedSlots:t._u([{key:"loading",fn:function(){return[i("q-spinner-facebook",{attrs:{color:"primary"}})]},proxy:!0}],null,!1,3410342743)})],1)])])],1)},a=[],o=(i("5319"),i("8aa50")),n={name:"Login",data(){return{email:null,showForm:!1,password:null,submitting:!1,rememberMe:!1,isPwd:!0,googleProvider:new o.auth.GoogleAuthProvider,facebookProvider:new o.auth.FacebookAuthProvider}},created(){this.$route.query.email&&(this.email=this.$route.query.email,this.showForm=!0)},mounted(){this.submitting=!1,o.auth().getRedirectResult().then((t=>{null!==t.user?this.signInSuccess(t):this.submitting=!1})).catch((()=>{this.submitting=!1}))},methods:{login(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||(this.submitting=!0,this.$fireAuth.signInWithEmailAndPassword(this.email,this.password).then((t=>{this.signInSuccess(t)})).catch((t=>{this.loginFail(t)})))},loginPopup(t){console.log("fireAuth ",t),this.submitting=!0,this.$fireAuth.signInWithRedirect(t).catch((t=>this.loginFail(t)))},getByEmail(t){return this.$db.collection("users").where("email","==",t.user.email).limit(1).get().then((t=>{const s=t.docs.map((t=>t.data())),i=t.docs.map((t=>t.id));if(s.length>0)return s[0].id=i[0],s[0]})).catch((()=>{this.$q.notify({message:"There was an error",color:"negative",icon:"check"}),this.submitting=!1}))},signInSuccess(t){this.getByEmail(t).then((s=>{s?(this.$store.dispatch("login",{user:s}),this.$router.replace("/")):(this.$fireAuth.currentUser.getIdToken(!0).then((t=>{console.log("idToken",t),this.$store.dispatch("addToken",`Bearer ${t}`)})).catch((t=>console.log(t))),this.$fireAuth.currentUser.sendEmailVerification(),this.$db.collection("users").add({email:t.user.email,displayName:t.user.displayName,photoURL:t.user.photoURL}).then((()=>{this.signInSuccess(t)}))),this.submitting=!1})).catch((t=>{this.$q.notify({message:t,color:"negative",icon:"close"}),this.submitting=!1}))},loginFail(t){this.$q.notify({message:""+t,color:"negative",icon:"close"}),this.submitting=!1},forgotPW(){},contactSupport(){},createAccount(){}}},r=n,l=(i("c46e"),i("2877")),c=i("9989"),u=i("9c40"),m=i("e669"),d=i("f09f"),h=i("27f9"),p=i("0016"),g=i("9564"),f=i("74f7"),b=i("eebe"),w=i.n(b),q=Object(l["a"])(r,e,a,!1,null,null,null);s["default"]=q.exports;w()(q,"components",{QPage:c["a"],QBtn:u["a"],QSpinnerFacebook:m["a"],QCard:d["a"],QInput:h["a"],QIcon:p["a"],QToggle:g["a"],QInnerLoading:f["a"]})}}]);