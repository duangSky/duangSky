var G=Object.defineProperty;var S=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var A=(u,l,t)=>l in u?G(u,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[l]=t,x=(u,l)=>{for(var t in l||(l={}))O.call(l,t)&&A(u,t,l[t]);if(S)for(var t of S(l))q.call(l,t)&&A(u,t,l[t]);return u};var B=(u,l,t)=>new Promise((E,p)=>{var F=c=>{try{v(t.next(c))}catch(g){p(g)}},e=c=>{try{v(t.throw(c))}catch(g){p(g)}},v=c=>c.done?E(c.value):Promise.resolve(c.value).then(F,e);v((t=t.apply(u,l)).next())});import{d as J,I as K,u as $,r as k,j as r,o as b,c as V,k as a,w as s,l as n,n as D,A as h,J as I,a as i,t as H,D as Q,b as W,_ as X,E as d,p as Y,f as Z}from"./index.5a90395c.js";import{t as ee,u as te}from"./account.f146a620.js";const U=u=>(Y("data-v-78638e8c"),u=u(),Z(),u),ue={class:""},oe=U(()=>i("div",{class:"tip"},[i("span",null,"\u573A\u666F\u4ECB\u7ECD\uFF1A\u5F53\u7528\u6237\u8FDB\u5165\u79C1\u4FE1\u4F1A\u8BDD\u9875\u65F6\u89E6\u53D1")],-1)),le={class:"msg_tip"},ae=U(()=>i("div",{class:"left"},[i("i",{class:"el-icon-warning-outline"}),i("span",null,"\u6D88\u606F\u5185\u5BB9\u4E0D\u80FD\u5305\u542B\u7535\u8BDD/\u793E\u4EA4\u5E73\u53F0\u8D26\u53F7\u7B49\u8054\u7CFB\u65B9\u5F0F\u5185\u5BB9")],-1)),se={class:"right"},ne=["src"],re={class:"footer"},ce=J({__name:"EnterSession",props:{account_id:{type:String,default:""},open_id:{type:String,required:!0}},setup(u,{expose:l}){const{VITE_GLOB_API_URL:t}=K(),E=$(),p=k(!1),F=u;let e=k({accountid:"",event_type:"enter_im",reply_content:{text:""},reply_policy:0,reply_type:"text",status:0,trigger_policy:0,username:"",usersys:"newsystem"});const v=_=>B(this,null,function*(){if(_.type,!(_.size/1024/1024<5))return d.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5MB!"),!1}),c=_=>{let{code:o,data:m,msg:w,order_key:y}=_;y=Number(y),o==200?(e.value.reply_content.image_url=m.image_url,e.value.reply_content.image_id=m.image_id,d({type:"success",message:"\u4E0A\u4F20\u6210\u529F!"})):d({message:w,type:"error"})},g=()=>B(this,null,function*(){let{code:_,data:o,msg:m}=yield ee({event_type:"enter_im",accountid:F.account_id});_==200?e.value=x(x({},e.value),o[0]):d.error(m)}),L=()=>B(this,null,function*(){if(console.log(e),!e.value.reply_content.text&&!e.value.reply_policy)return d.warning("\u8BF7\u8F93\u5165\u6D88\u606F\u5185\u5BB9\uFF01");if(!e.value.reply_content.image_url)return d.warning("\u8BF7\u4E0A\u4F20\u56FE\u7247\uFF01");e.value.accountid=F.account_id,e.value.open_id=F.open_id,e.value.username=E.info.username;let{code:_,msg:o}=yield te({list:[e.value]});_==200?(d.success("\u4FDD\u5B58\u6210\u529F"),p.value=!1):d.error(o)}),M=()=>{e.value.reply_policy=0,e.value.reply_content.text=""};return l({drawer:p}),(_,o)=>{const m=r("el-radio-button"),w=r("el-radio-group"),y=r("el-form-item"),N=r("el-input"),T=r("Plus"),z=r("el-icon"),P=r("el-upload"),R=r("el-form"),C=r("el-button"),j=r("el-drawer");return b(),V("div",ue,[a(j,{size:724,title:"\u8FDB\u5165\u4F1A\u8BDD\u8BBE\u7F6E",modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=f=>p.value=f),onOpen:g,onClose:M},{default:s(()=>[oe,a(R,{model:n(e),size:"small","label-width":"68px"},{default:s(()=>[a(y,{class:"reply_type",label:"\u56DE\u590D\u7C7B\u578B"},{default:s(()=>[a(w,{modelValue:n(e).reply_policy,"onUpdate:modelValue":o[0]||(o[0]=f=>n(e).reply_policy=f)},{default:s(()=>[a(m,{label:0},{default:s(()=>[D("\u6587\u5B57\u6D88\u606F")]),_:1}),a(m,{label:2},{default:s(()=>[D("\u56FE\u7247\u6D88\u606F")]),_:1})]),_:1},8,["modelValue"])]),_:1}),h(a(y,{label:"\u6D88\u606F\u5185\u5BB9"},{default:s(()=>[a(N,{type:"textarea",rows:6,modelValue:n(e).reply_content.text,"onUpdate:modelValue":o[1]||(o[1]=f=>n(e).reply_content.text=f),maxlength:300},null,8,["modelValue"]),i("div",le,[ae,i("div",se,[i("span",null,H(n(e).reply_content.text.length)+"/300",1)])])]),_:1},512),[[I,n(e).reply_policy===0]]),h(a(y,{label:"\u56FE\u7247\u5185\u5BB9"},{default:s(()=>[a(P,{class:"avatar-uploader",action:n(t)+"/api/v6/account/uploadDiyImage?token="+n(Q),"show-file-list":!1,"on-success":c,"before-upload":v,data:{type:1,keyword:"",order_key:0}},{default:s(()=>[n(e).reply_content.image_url?(b(),V("img",{key:0,src:n(e).reply_content.image_url,class:"avatar"},null,8,ne)):(b(),W(z,{key:1,class:"avatar-uploader-icon"},{default:s(()=>[a(T)]),_:1}))]),_:1},8,["action"])]),_:1},512),[[I,n(e).reply_policy===2]])]),_:1},8,["model"]),i("div",re,[a(C,{onClick:o[2]||(o[2]=f=>p.value=!1)},{default:s(()=>[D("\u5173\u95ED")]),_:1}),a(C,{type:"primary",onClick:L},{default:s(()=>[D("\u4FDD\u5B58")]),_:1})])]),_:1},8,["modelValue"])])}}}),de=X(ce,[["__scopeId","data-v-78638e8c"]]);export{de as default};