var se=Object.defineProperty;var N=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var T=(_,i,n)=>i in _?se(_,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):_[i]=n,z=(_,i)=>{for(var n in i||(i={}))ae.call(i,n)&&T(_,n,i[n]);if(N)for(var n of N(i))_e.call(i,n)&&T(_,n,i[n]);return _};var h=(_,i,n)=>new Promise((V,b)=>{var F=p=>{try{B(n.next(p))}catch(E){b(E)}},x=p=>{try{B(n.throw(p))}catch(E){b(E)}},B=p=>p.done?V(p.value):Promise.resolve(p.value).then(F,x);B((n=n.apply(_,i)).next())});import{d as ce,I as ie,u as re,r as k,g as de,j as a,o as D,c as C,k as t,w as o,a as l,F as j,y as O,t as P,b as $,n as A,A as q,J as G,l as J,D as pe,_ as me,E as m,B as ye,p as fe,f as Fe}from"./index.5a90395c.js";import{l as De,p as we,q as Be}from"./account.f146a620.js";const w=_=>(fe("data-v-46d4bbcf"),_=_(),Fe(),_),Ee={class:""},ge=w(()=>l("div",{class:"tip"},[l("span",null,"\u573A\u666F\u4ECB\u7ECD\uFF1A\u5F53\u7528\u6237\u5728\u79C1\u4FE1\u9875\u9762\u8F93\u5165\u6307\u5B9A\u8BCD\u65F6\u89E6\u53D1")],-1)),he={class:"keyword_card"},ke={class:"keyword_item_top"},Ce={class:"ketword_title"},be=["onClick"],Ae=w(()=>l("i",{class:"el-icon-delete"},null,-1)),Ve=w(()=>l("span",null,"\u5220\u9664",-1)),xe=[Ae,Ve],Se={class:"keyword_item_content"},ve=w(()=>l("span",null,"\u5173\u952E\u8BCD ",-1)),Ue={class:"msg_tip"},Ie=w(()=>l("div",{class:"left"},[l("i",{class:"el-icon-warning-outline"}),l("span",null,"\u6D88\u606F\u5185\u5BB9\u4E0D\u80FD\u5305\u542B\u7535\u8BDD/\u793E\u4EA4\u5E73\u53F0\u8D26\u53F7\u7B49\u8054\u7CFB\u65B9\u5F0F\u5185\u5BB9")],-1)),Ke={class:"right"},Re=["src"],Le=w(()=>l("span",null,"\u6DFB\u52A0\u5173\u952E\u8BCD",-1)),Me=[Le],Ne={class:"footer"},Te=ce({__name:"KeywordReply",props:{account_id:{type:String,default:""},open_id:{type:String,required:!0}},emits:["setSuccess"],setup(_,{expose:i,emit:n}){const{VITE_GLOB_API_URL:V}=ie(),b=re(),F=k(!1),x=()=>{},B=k([{value:"1",label:"\u5168\u90E8\u5339\u914D"},{value:"0",label:"\u90E8\u5206\u5339\u914D"}]);k([]),k("");const p=_,E=de({filter:{event_type:"im"},op:{event_type:"="}}),y=k([]),H=c=>h(this,null,function*(){if(c.type,!(c.size/1024/1024<5))return m.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5MB!"),!1}),Q=c=>{let{code:r,data:f,msg:s,order_key:e}=c;e=Number(e),r==200?(y.value[e].im_reply_content[0].image_url=f.image_url,y.value[e].im_reply_content[0].image_id=f.image_id,m({type:"success",message:"\u4E0A\u4F20\u6210\u529F!"})):m({message:s,type:"error"})},S=()=>h(this,null,function*(){let{code:c,data:r,msg:f}=yield De(z({page:1,limit:999,accountid:p.account_id},E));c==200&&(y.value=r.list.map(s=>(s.im_reply_content=s.im_reply_content,s.keyword=JSON.parse(s.keyword).join("\u3001"),s.match_type=s.match_type?"\u5168\u90E8\u5339\u914D":"\u90E8\u5206\u5339\u914D",s)),r.count||v())}),v=()=>{y.value.push({comment_reply_content:[],event_type:"im",im_reply_content:[{reply_policy:0,text:"",image_id:"",image_url:""}],keyword:"",match_type:"",open_id:p.open_id,reply_type:"mix",status:0,title:`\u5173\u952E\u8BCD${y.value.length+1}`,type:0,username:b.info.username,accountid:p.account_id})},U=n,W=(c,r)=>{c.id?ye.confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>h(this,null,function*(){let{code:f,msg:s}=yield we({list:[c.id]});f==200?(m.success("\u5220\u9664\u6210\u529F"),S(),U("setSuccess")):m.error(s)})):y.value.splice(r,1)},X=()=>h(this,null,function*(){let c=!0;if(y.value.filter(e=>{e.keyword?e.match_type===""?(m.warning("\u8BF7\u9009\u62E9\u5339\u914D\u65B9\u5F0F\uFF01"),c=!1):e.im_reply_content[0].text||(m.warning("\u8BF7\u8F93\u5165\u6D88\u606F\u5185\u5BB9\uFF01"),c=!1):(m.warning("\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\uFF01"),c=!1)}),!c)return;let r=y.value.map(e=>(Array.isArray(e.keyword)||(e.keyword=e.keyword.split("\u3001")),Array.isArray(e.comment_reply_content)?e.comment_reply_content=e.im_reply_content:e.comment_reply_content=e.comment_reply_content,e.match_type=e.match_type==="\u90E8\u5206\u5339\u914D"?0:e.match_type==="\u5168\u90E8\u5339\u914D"?1:e.match_type,e)),{code:f,msg:s}=yield Be({list:r});f==200?(U("setSuccess"),m.success("\u4FDD\u5B58\u6210\u529F"),F.value=!1):m.error(s)});return i({drawer:F}),(c,r)=>{const f=a("InfoFilled"),s=a("el-icon"),e=a("el-tooltip"),I=a("el-input"),g=a("el-form-item"),K=a("el-col"),Y=a("el-option"),Z=a("el-select"),ee=a("el-row"),R=a("el-radio-button"),te=a("el-radio-group"),ue=a("Plus"),oe=a("el-upload"),le=a("el-form"),L=a("el-button"),ne=a("el-drawer");return D(),C("div",Ee,[t(ne,{title:"\u5173\u952E\u8BCD\u81EA\u52A8\u56DE\u590D",size:724,"append-to-body":!1,modelValue:F.value,"onUpdate:modelValue":r[1]||(r[1]=u=>F.value=u),onOpen:S,onClose:x},{default:o(()=>[ge,l("div",he,[(D(!0),C(j,null,O(y.value,(u,M)=>(D(),C("div",{class:"keyword_item",key:u.id},[l("div",ke,[l("div",Ce,P(u.title),1),l("div",{class:"del_keyword",onClick:d=>W(u,M)},xe,8,be)]),l("div",Se,[t(le,{model:u,"label-width":"76px",size:"small","label-position":"left"},{default:o(()=>[t(ee,null,{default:o(()=>[t(K,{span:12},{default:o(()=>[t(g,null,{label:o(()=>[ve,t(e,{effect:"dark",content:"\u652F\u6301\u8F93\u5165\u591A\u4E2A\u5173\u952E\u8BCD\u4EE5\u3001\u53F7\u9694\u5F00\uFF0C\u8F93\u5165*\u53F7\u65E0\u89C4\u5219\u89E6\u53D1\u3002",placement:"top-start"},{default:o(()=>[t(s,null,{default:o(()=>[t(f)]),_:1})]),_:1})]),default:o(()=>[t(I,{modelValue:u.keyword,"onUpdate:modelValue":d=>u.keyword=d,placeholder:"\u8BF7\u8F93\u5165",style:{width:"198px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),t(K,{span:12},{default:o(()=>[t(g,{label:"\u5339\u914D\u65B9\u5F0F"},{default:o(()=>[t(Z,{modelValue:u.match_type,"onUpdate:modelValue":d=>u.match_type=d,style:{width:"198px"}},{default:o(()=>[(D(!0),C(j,null,O(B.value,d=>(D(),$(Y,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(g,{class:"reply_type",label:"\u56DE\u590D\u7C7B\u578B"},{default:o(()=>[t(te,{modelValue:u.im_reply_content[0].reply_policy,"onUpdate:modelValue":d=>u.im_reply_content[0].reply_policy=d},{default:o(()=>[t(R,{label:0},{default:o(()=>[A("\u6587\u5B57\u6D88\u606F")]),_:1}),t(R,{label:2},{default:o(()=>[A("\u56FE\u7247\u6D88\u606F")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),q(t(g,{label:"\u6D88\u606F\u5185\u5BB9"},{default:o(()=>[t(I,{type:"textarea",rows:6,modelValue:u.im_reply_content[0].text,"onUpdate:modelValue":d=>u.im_reply_content[0].text=d,maxlength:300},null,8,["modelValue","onUpdate:modelValue"]),l("div",Ue,[Ie,l("div",Ke,[l("span",null,P(u.im_reply_content[0].text.length)+"/300",1)])])]),_:2},1536),[[G,u.im_reply_content[0].reply_policy===0]]),q(t(g,{label:"\u56FE\u7247\u5185\u5BB9",size:"small"},{default:o(()=>[t(oe,{class:"avatar-uploader",action:J(V)+"/api/v6/account/uploadDiyImage?token="+J(pe),"show-file-list":!1,"on-success":Q,"before-upload":H,data:{type:0,keyword:u.keyword,order_key:M}},{default:o(()=>[u.im_reply_content[0].image_url?(D(),C("img",{key:0,src:u.im_reply_content[0].image_url,class:"avatar"},null,8,Re)):(D(),$(s,{key:1,class:"avatar-uploader-icon"},{default:o(()=>[t(ue)]),_:1}))]),_:2},1032,["action","data"])]),_:2},1536),[[G,u.im_reply_content[0].reply_policy===2]])]),_:2},1032,["model"])])]))),128))]),l("div",{class:"add_keyword",onClick:v},Me),l("div",Ne,[t(L,{onClick:r[0]||(r[0]=u=>F.value=!1)},{default:o(()=>[A("\u5173\u95ED")]),_:1}),t(L,{type:"primary",onClick:X},{default:o(()=>[A("\u4FDD\u5B58")]),_:1})])]),_:1},8,["modelValue"])])}}}),Pe=me(Te,[["__scopeId","data-v-46d4bbcf"]]);export{Pe as default};
