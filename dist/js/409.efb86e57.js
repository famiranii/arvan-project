"use strict";(self["webpackChunkarvan"]=self["webpackChunkarvan"]||[]).push([[409],{3409:function(e,s,t){t.r(s),t.d(s,{default:function(){return x}});var l=t(3396),a=t(9242),r=t(7139);const o={class:"vh-100 d-flex"},n={style:{width:"450px",height:"528px","background-color":"#eceeef",margin:"auto"}},i=(0,l._)("h3",{class:"text-center login-title display-4 fw-normal mb-30"},"Register",-1),u={class:"form-outline mb-25"},m=(0,l._)("label",{class:"form-label",for:"typeEmailX-2"},"User",-1),d={class:"form-outline mb-25"},p=(0,l._)("label",{class:"form-label",for:"typeEmailX-2"},"Email",-1),c={class:"form-outline mb-21"},f=(0,l._)("label",{class:"form-label",for:"typePasswordX-2"},"Password",-1),h={class:"mt-1",style:{height:"25px"}},b={class:"btn btn-sm py-2 mb-12 col-12 blue",type:"submit"};function w(e,s,t,w,y,_){const g=(0,l.up)("SPan"),v=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("section",o,[(0,l._)("div",n,[(0,l._)("form",{onSubmit:s[3]||(s[3]=(0,a.iM)(((...e)=>_.postInformation&&_.postInformation(...e)),["prevent"])),class:"card-body pt-35 px-20 text-start"},[i,(0,l._)("div",u,[m,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>y.username=e),type:"text",id:"typeEmailX-2",class:"form-control form-control-mine"},null,512),[[a.nr,y.username]])]),(0,l._)("div",d,[p,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>y.email=e),type:"email",id:"typeEmailX-2",class:"form-control form-control-mine"},null,512),[[a.nr,y.email]])]),(0,l._)("div",c,[f,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>y.password=e),type:"password",id:"typePasswordX-2",class:"form-control form-control-mine"},null,512),[[a.nr,y.password]]),(0,l._)("div",h,[(0,l._)("span",{class:(0,r.C_)(["text-danger",{"d-none":!y.requireFeild}])},"Required field",2)])]),(0,l._)("button",b,[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Register")])),_:1})]),(0,l._)("div",null,[(0,l._)("small",null,[(0,l.Uk)("Already Registered?"),(0,l._)("a",null,[(0,l.Wm)(v,{class:"fw-bold px-2 text-dark",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Login")])),_:1})])])])],32)])])}t(7658);var y=t(4161),_={name:"RegisterView",data(){return{email:"",password:"",username:"",requireFeild:!1}},methods:{postInformation(){const e={user:{email:this.email,password:this.password,username:this.username}},s=JSON.stringify(e);console.log(s),y.Z.post("https://api.realworld.io/api/users",s,{headers:{"Content-Type":"application/json"}}).then((e=>{const s=e.data.user.username;this.requireFeild=!1,this.$router.push("/allposts"),this.$router.push({path:"/allposts",query:{username:s}})})).catch((e=>{this.requireFeild=!0}))}}},g=t(89);const v=(0,g.Z)(_,[["render",w]]);var x=v}}]);
//# sourceMappingURL=409.efb86e57.js.map