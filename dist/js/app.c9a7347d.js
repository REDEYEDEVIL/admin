(function(){"use strict";var e={1820:function(e,t,n){var a=n(5130),r=(n(9313),n(1387)),l=n(6768),o=n(4232);const i={class:"carousel"},s=["src","alt"],u={class:"indicators"},c=["onClick"];function d(e,t,n,a,r,d){return(0,l.uX)(),(0,l.CE)("div",i,[(0,l.Lk)("div",{class:"slides",style:(0,o.Tr)({transform:`translateX(-${100*r.currentSlideIndex}%)`})},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.slides,((e,t)=>((0,l.uX)(),(0,l.CE)("div",{key:t,class:"slide"},[(0,l.Lk)("img",{src:e.image,alt:e.description},null,8,s)])))),128))],4),(0,l.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>d.prevSlide&&d.prevSlide(...e)),class:"carousel-control prev"},"<"),(0,l.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>d.nextSlide&&d.nextSlide(...e)),class:"carousel-control next"},">"),(0,l.Lk)("div",u,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.slides,((e,t)=>((0,l.uX)(),(0,l.CE)("span",{key:t,class:(0,o.C4)({active:r.currentSlideIndex===t}),onClick:e=>d.goToSlide(t)},null,10,c)))),128))])])}var p={name:"HomePage",data(){return{currentSlideIndex:0,slides:[{image:"https://via.placeholder.com/1024x480",description:"Slide 1"},{image:"https://via.placeholder.com/1024x480",description:"Slide 2"},{image:"https://via.placeholder.com/1024x480",description:"Slide 3"}]}},methods:{nextSlide(){this.currentSlideIndex<this.slides.length-1?this.currentSlideIndex++:this.currentSlideIndex=0},prevSlide(){this.currentSlideIndex>0?this.currentSlideIndex--:this.currentSlideIndex=this.slides.length-1},goToSlide(e){this.currentSlideIndex=e}}},m=n(1241);const h=(0,m.A)(p,[["render",d],["__scopeId","data-v-b642cbd2"]]);var v=h;function b(e,t,n,a,r,o){return(0,l.uX)(),(0,l.CE)("h2",null,"Login")}var f={name:"LoginPage",props:{msg:String}};const g=(0,m.A)(f,[["render",b]]);var k=g;const L=e=>((0,l.Qi)("data-v-4bcaa5dc"),e=e(),(0,l.jt)(),e),S=L((()=>(0,l.Lk)("br",null,null,-1))),y=L((()=>(0,l.Lk)("br",null,null,-1))),x=L((()=>(0,l.Lk)("br",null,null,-1))),C=L((()=>(0,l.Lk)("br",null,null,-1))),X=L((()=>(0,l.Lk)("br",null,null,-1))),E=L((()=>(0,l.Lk)("br",null,null,-1))),w=["value"];function I(e,t,n,r,i,s){return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("h1",null,(0,o.v_)(i.message),1),(0,l.Lk)("form",{onSubmit:t[3]||(t[3]=(0,a.D$)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.formData.name=e),placeholder:"Name",required:""},null,512),[[a.Jo,i.formData.name]]),S,y,(0,l.bo)((0,l.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>i.formData.email=e),placeholder:"Email",required:""},null,512),[[a.Jo,i.formData.email]]),x,C,(0,l.bo)((0,l.Lk)("input",{type:"tel","onUpdate:modelValue":t[2]||(t[2]=e=>i.formData.phone=e),placeholder:"Phone"},null,512),[[a.Jo,i.formData.phone]]),X,E,(0,l.Lk)("input",{type:"submit",value:i.submitButtonLabel},null,8,w)],32)])}var A={name:"AttendancePage",data(){return{formData:{name:"",email:"",phone:""},message:"",submitButtonLabel:"Submit"}},methods:{handleSubmit(){this.submitButtonLabel="Submitting...";const e=new FormData;e.append("name",this.formData.name),e.append("email",this.formData.email),e.append("phone",this.formData.phone),fetch("https://script.google.com/macros/s/AKfycbyc0WzsRSncIAaQ_FVGrIRo2gf4baZLr7CCMFWTyJYTcoaYARFKVnyA7j5Ldaze51KX/exec",{method:"POST",body:e}).then((e=>e.text())).then((e=>{this.message=e,this.submitButtonLabel="Submit"}))}}};const F=(0,m.A)(A,[["render",I],["__scopeId","data-v-4bcaa5dc"]]);var _=F;const D=e=>((0,l.Qi)("data-v-1197b0e3"),e=e(),(0,l.jt)(),e),P=D((()=>(0,l.Lk)("h1",null,"Data from Google Sheet",-1)));function O(e,t,n,a,r,i){return(0,l.uX)(),(0,l.CE)("div",null,[P,(0,l.Lk)("table",null,[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.headers,((e,t)=>((0,l.uX)(),(0,l.CE)("th",{key:t},(0,o.v_)(e),1)))),128))])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.data,((e,t)=>((0,l.uX)(),(0,l.CE)("tr",{key:t},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,((e,t)=>((0,l.uX)(),(0,l.CE)("td",{key:t},(0,o.v_)(e),1)))),128))])))),128))])])])}var j={name:"AttendanceView",data(){return{headers:[],data:[]}},async mounted(){await this.fetchData()},methods:{async fetchData(){try{const e="https://docs.google.com/spreadsheets/d/e/2PACX-1vRo7x5aPUsUujyu1MkweBuhWX1rDxnK8tXkyRtdA86m-yq80fMBbNxdEXtGGNtXgpmBjhHFWTNmORnj/pub?gid=0&single=true&output=csv",t=await fetch(e);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const n=await t.text(),a=n.split("\n");a.length>0&&(this.headers=a[0].split(","),a.shift()),this.data=a.map((e=>e.split(",")))}catch(e){console.error("Failed to fetch data:",e)}}}};const T=(0,m.A)(j,[["render",O],["__scopeId","data-v-1197b0e3"]]);var B=T;const K=[{path:"/",name:"HomePage",component:v},{path:"/login",name:"LoginPage",component:k},{path:"/attendance",name:"AttendancePage",component:_},{path:"/attendanceview",name:"AttendanceView",component:B}],V=(0,r.aE)({history:(0,r.Bt)(),routes:K});var W=V;function N(e,t,n,a,r,o){const i=(0,l.g2)("NavBar"),s=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(i),(0,l.bF)(s)],64)}const R={class:"navbar navbar-expand-lg navbar-dark bg-primary"},H={class:"container-fluid"},U=(0,l.Lk)("a",{class:"navbar-brand",href:"#"},"Alphabe Institute",-1),G=(0,l.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l.Lk)("span",{class:"navbar-toggler-icon"})],-1),J={class:"collapse navbar-collapse",id:"navbarScroll"},M={class:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",style:{"--bs-scroll-height":"100px"}},q={class:"nav-item"},Q={class:"nav-item"},$={class:"nav-item"},z={class:"nav-item"};function Y(e,t,n,a,r,o){const i=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("nav",R,[(0,l.Lk)("div",H,[U,G,(0,l.Lk)("div",J,[(0,l.Lk)("ul",M,[(0,l.Lk)("li",q,[(0,l.bF)(i,{to:"/"},{default:(0,l.k6)((()=>[(0,l.eW)("Home")])),_:1})]),(0,l.Lk)("li",Q,[(0,l.bF)(i,{to:"/login"},{default:(0,l.k6)((()=>[(0,l.eW)("Login")])),_:1})]),(0,l.Lk)("li",$,[(0,l.bF)(i,{to:"/attendance"},{default:(0,l.k6)((()=>[(0,l.eW)("AttendancePage")])),_:1})]),(0,l.Lk)("li",z,[(0,l.bF)(i,{to:"/attendanceview"},{default:(0,l.k6)((()=>[(0,l.eW)("AttendanceView")])),_:1})])])])])])}var Z={name:"NavBar",props:{msg:String}};const ee=(0,m.A)(Z,[["render",Y]]);var te=ee,ne={name:"App",components:{NavBar:te}};const ae=(0,m.A)(ne,[["render",N]]);var re=ae;(0,a.Ef)(re).use(W).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,l){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],l=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,r,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,l,o=a[0],i=a[1],s=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var c=s(n)}for(t&&t(a);u<o.length;u++)l=o[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunkadmin_site"]=self["webpackChunkadmin_site"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1820)}));a=n.O(a)})();
//# sourceMappingURL=app.c9a7347d.js.map