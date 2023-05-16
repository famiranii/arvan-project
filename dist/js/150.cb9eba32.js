"use strict";(self["webpackChunkarvan"]=self["webpackChunkarvan"]||[]).push([[150],{8091:function(e,t,a){a.d(t,{Z:function(){return N}});var l=a(3396),s=a(9242);const o={class:"my-4"},n={class:"col-sm-9"},r={class:"mb-3 has-validation"},i=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Title",-1),c=(0,l._)("div",{class:"invalid-feedback"}," Please choose a username. ",-1),d={class:"mb-3"},u=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Description",-1),m={class:"mb-3"},p=(0,l._)("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Body",-1),h={class:"col-sm-3 ps-sm-4"},f=(0,l._)("label",{for:"tags",class:"form-label"},"Tags",-1),b={class:"form-control tagsTEextaria mt-3 overflow-auto"},g=(0,l._)("div",{class:"col-12 pt-2"},[(0,l._)("button",{class:"btn btn-sm blue px-4",type:"submit"},"Submit")],-1);function v(e,t,a,v,_,w){const x=(0,l.up)("articleTags");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("form",{class:"row",onSubmit:t[5]||(t[5]=(0,s.iM)(((...e)=>w.completeForm&&w.completeForm(...e)),["prevent"]))},[(0,l._)("div",n,[(0,l._)("div",r,[i,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>_.title=e),type:"text",placeholder:"Title",class:"form-control",id:"exampleFormControlInput1 required"},null,512),[[s.nr,_.title]]),c]),(0,l._)("div",d,[u,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>_.describtion=e),type:"text",class:"form-control",placeholder:"Description",id:"exampleFormControlInput1"},null,512),[[s.nr,_.describtion]])]),(0,l._)("div",m,[p,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>_.body=e),class:"form-control",id:"exampleFormControlTextarea1",rows:"8"},null,512),[[s.nr,_.body]])])]),(0,l._)("div",h,[f,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>_.tagTitle=e),onKeypress:t[4]||(t[4]=(0,s.D2)((0,s.iM)((e=>w.addTag()),["prevent"]),["enter"])),name:"tags",class:"form-control",placeholder:"New tag"},null,544),[[s.nr,_.tagTitle]]),(0,l._)("div",b,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.tags,((e,t)=>((0,l.wg)(),(0,l.j4)(x,{key:t,class:"mb-2",tag:e},null,8,["tag"])))),128))])]),g],32)])}a(7658);var _=a(7139);const w=["checked"],x={for:"checkTags"};function k(e,t,a,s,o,n){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("input",{type:"checkbox",checked:!!a.tag.isChecked||null,class:"form-check-input tags-checkbox",onClick:t[0]||(t[0]=e=>a.tag.isChecked=!a.tag.isChecked)},null,8,w),(0,l._)("label",x,(0,_.zw)(a.tag.title),1)])}var y={props:{tag:Object}},C=a(89);const T=(0,C.Z)(y,[["render",k]]);var D=T,Z=a(4161),A={name:"app",components:{articleTags:D},data(){return{tagTitle:"",tags:[],title:"",describtion:"",body:""}},methods:{addTag(){const e={title:this.tagTitle,ischecked:!1};this.tags.push(e),this.tagTitle=""},completeForm(){const e={article:{title:this.title,describtion:this.describtion,body:this.body,tagList:[]}},t=this.tags.filter((e=>e.isChecked));e.article.tagList=t.map((e=>e.title)),console.log(e);const a=JSON.stringify(e);localStorage.getItem("token");console.log(a),Z.Z.post("https://api.realworld.io/api/users/login",a,{headers:{"Content-Type":"application/json"}}).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}},mounted(){Z.Z.get("https://api.realworld.io/api/articles").then((e=>{this.posts=e.data;const t=e.data.articles;t.forEach((e=>{e.tagList.forEach((e=>{const t={title:e,isChecked:!1};this.tags.push(t)}))}))})).catch((e=>{console.log(e)}))}};const F=(0,C.Z)(A,[["render",v]]);var N=F},534:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(3396),s=a(7139);const o={class:"p-3 header-article"},n={class:"d-flex"},r=(0,l._)("button",{type:"button",class:"navbar-toggler btn blue me-auto px-4 d-md-none","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasDarkNavbar","aria-controls":"offcanvasDarkNavbar"},"post",-1),i={class:"d-md-flex align-items-center"},c=(0,l._)("h1",{class:"text-22 pe-3 text-white"}," Arvan Challenge ",-1);function d(e,t,a,d,u,m){return(0,l.wg)(),(0,l.iD)("header",o,[(0,l._)("div",null,[(0,l._)("div",n,[r,(0,l._)("div",i,[c,(0,l._)("span",null,(0,s.zw)(u.username),1)]),(0,l._)("button",{type:"button",class:"btn btn-outline-info ms-auto me-2",onClick:t[0]||(t[0]=(...e)=>m.handleLogout&&m.handleLogout(...e))},"Logout")])])])}a(7658);var u={data(){return{username:""}},created(){const e=localStorage.getItem("username");this.username=e},methods:{handleLogout(){this.$router.push("/")}}},m=a(89);const p=(0,m.Z)(u,[["render",d]]);var h=p},977:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(3396);const s={class:"d-none col-md-2 blue h-100 d-md-flex flex-column"},o=(0,l._)("h5",{class:"p-3"},"post",-1),n={class:"d-flex flex-column"},r=(0,l.uE)('<div class="offcanvas offcanvas-start blue w-50 h-100 flex-column" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel"><div><h5 class="p-3">post</h5><div class="d-flex flex-column"><a href="all-articles.html" class="sidebar-items py-1 text-white ps-4">All Articles</a><a href="new-article.html" class="sidebar-items py-1 text-white ps-4">New Articles</a></div></div></div>',1);function i(e,t){const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",s,[(0,l._)("div",null,[o,(0,l._)("div",n,[(0,l.Wm)(a,{to:"allPosts",class:"sidebar-items py-1 text-white ps-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("All Articles")])),_:1}),(0,l.Wm)(a,{to:"newArticlePage",class:"sidebar-items py-1 text-white ps-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("New Articles")])),_:1})])])]),r],64)}var c=a(89);const d={},u=(0,c.Z)(d,[["render",i]]);var m=u},150:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(3396);const s={class:"body-container vh-100"},o={class:"h-100 d-flex"},n={class:"form-articles col-12 col-md-10"},r=(0,l._)("h2",null,"New Article",-1);function i(e,t,a,i,c,d){const u=(0,l.up)("responsive-header"),m=(0,l.up)("sideBar"),p=(0,l.up)("editArticleForm");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(u),(0,l._)("section",o,[(0,l.Wm)(m),(0,l._)("div",n,[r,(0,l.Wm)(p)])])])}var c=a(534),d=a(977),u=a(8091),m={name:"HomeView",components:{responsiveHeader:c.Z,sideBar:d.Z,editArticleForm:u.Z}},p=a(89);const h=(0,p.Z)(m,[["render",i]]);var f=h}}]);
//# sourceMappingURL=150.cb9eba32.js.map