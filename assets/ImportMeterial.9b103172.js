var Oe=Object.defineProperty,He=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var pe=(t,o,r)=>o in t?Oe(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,me=(t,o)=>{for(var r in o||(o={}))qe.call(o,r)&&pe(t,r,o[r]);if(_e)for(var r of _e(o))Re.call(o,r)&&pe(t,r,o[r]);return t},ve=(t,o)=>He(t,Le(o));var fe=(t,o,r)=>new Promise((k,_)=>{var D=v=>{try{c(r.next(v))}catch(g){_(g)}},$=v=>{try{c(r.throw(v))}catch(g){_(g)}},c=v=>v.done?k(v.value):Promise.resolve(v.value).then(D,$);c((r=r.apply(t,o)).next())});import{d as R,a0 as se,j as y,v as oe,o as n,c as f,x as ge,l as p,a,k as i,w as m,n as G,A,J as L,t as w,q as B,F as U,y as T,_ as J,p as W,f as X,N as ae,T as q,r as b,U as Je,b as E,z as Ze,E as H}from"./index.5a90395c.js";import{u as ue,s as he}from"./material.85a80f57.js";import{n as Ke}from"./index.browser.2b0920b0.js";import{_ as Qe}from"./AliCloudUpload.13488d40.js";import{P as We}from"./Pagination.554cb32d.js";import{A as Xe}from"./audio.531569af.js";import{l as Ye}from"./creative.ea528d59.js";const el=t=>(W("data-v-145d2913"),t=t(),X(),t),ll={class:"material_group"},tl={class:"name"},al=el(()=>a("span",null,"\u5168\u90E8",-1)),sl={class:"filelist","infinite-scroll-immediate":!1},ol=["onClick"],ul={class:"name"},nl={class:"text-ellipsis-1"},il={class:"num"},rl=R({__name:"material-group",props:{showAll:{type:Boolean,default:!0},showTotal:{type:Boolean,default:!0},fileGroup:{type:Array,default:[]},fileTotal:{type:Number,default:0}},emits:["nextPage","renewGroup"],setup(t,{emit:o}){const r=o,k=ue(),{groupId:_,loading:D}=se(k),{getlistMedia:$}=k,c=g=>{D.value||(_.value=g,$())},v=()=>{r("nextPage")};return(g,x)=>{const S=y("FolderOpened"),C=y("el-icon"),h=y("el-scrollbar"),M=oe("infinite-scroll");return n(),f("div",ll,[t.showAll?(n(),f("div",{key:0,class:ge(["all",{select:p(_)==="",disable:p(D)}]),onClick:x[0]||(x[0]=F=>c(""))},[a("div",tl,[i(C,null,{default:m(()=>[i(S)]),_:1}),G("\xA0 "),al]),A(a("div",{class:"num"},w(t.fileTotal),513),[[L,t.showTotal]])],2)):B("",!0),i(h,null,{default:m(()=>[A((n(),f("div",sl,[(n(!0),f(U,null,T(t.fileGroup,F=>(n(),f("div",{class:ge(["item",{select:p(_)===F.id,disable:p(D)}]),key:F.id,onClick:Z=>c(F.id)},[a("div",ul,[i(C,null,{default:m(()=>[i(S)]),_:1}),G("\xA0 "),a("span",nl,w(F.name),1)]),a("div",il,[a("span",null,w(F.keynum),1)])],10,ol))),128))])),[[M,v]])]),_:1})])}}}),cl=J(rl,[["__scopeId","data-v-145d2913"]]);const dl={class:"structure"},_l={class:"structure_header"},pl={class:"structure_main"},ml={class:"structure_footer"},vl=R({__name:"material-structure",setup(t){return(o,r)=>(n(),f("div",dl,[a("div",_l,[ae(o.$slots,"header",{},void 0,!0)]),a("div",pl,[ae(o.$slots,"main",{},void 0,!0)]),a("div",ml,[ae(o.$slots,"footer",{},void 0,!0)])]))}}),fl=J(vl,[["__scopeId","data-v-7e3ede78"]]);const gl=t=>(W("data-v-3ee8cb28"),t=t(),X(),t),hl={class:"item"},yl={class:"img"},Cl=["src"],bl={class:"md5"},Fl={class:"upload"},kl=gl(()=>a("span",null,"\u89E3\u7801\u4E2D",-1)),Dl={class:"encode","element-loading-background":"rgba(0, 0, 0, .3)","element-loading-text":"\u89E3\u7801\u4E2D"},El={class:"name"},Sl={class:"text-ellipsis-1"},$l=R({__name:"upload-list",props:{file:{type:Object,default:{}}},setup(t){const o=t,r=()=>{o.file.reader.abort()},k=q(()=>o.file.progressMd5<100),_=q(()=>o.file.progressMd5===100&&o.file.uploadProgress>0&&o.file.uploadProgress<100),D=q(()=>(o.file.uploadProgress===0||o.file.uploadProgress===100)&&!o.file.uploadSuccess);return($,c)=>{const v=y("el-progress"),g=oe("loading");return n(),f("div",hl,[a("div",yl,[A(a("img",{src:t.file.cover_url,alt:""},null,8,Cl),[[L,t.file.cover_url]]),A(a("div",bl,[i(v,{"stroke-width":8,percentage:t.file.progressMd5},null,8,["percentage"]),a("span",{onClick:r},"\u53D6\u6D88\u4E0A\u4F20")],512),[[L,k.value]]),A(a("div",Fl,[i(v,{type:"circle",color:"#5480FF","stroke-width":8,percentage:t.file.uploadProgress},null,8,["percentage"]),kl],512),[[L,_.value]]),A(a("div",Dl,null,512),[[g,D.value]])]),a("div",El,[a("span",Sl,w(t.file.name),1)])])}}}),wl=J($l,[["__scopeId","data-v-3ee8cb28"]]);const ne=t=>(W("data-v-1873869a"),t=t(),X(),t),xl={class:"S_header"},Bl={class:"S_main"},Al={class:"allCheckbox"},Ml={class:"select"},Il={class:"ml-4"},Vl={class:"num"},Pl={class:"upload_btns"},Ul={class:"matertials"},Tl=ne(()=>a("i",{class:"iconfont icon-plus-square"},null,-1)),Gl=ne(()=>a("span",null,"\u652F\u6301\u4E0A\u4F20mov\u3001mp4\u3001mp3\u3001jpg\u3001png\u3001jpeg\u3001\u683C\u5F0F\uFF0C\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC71GB",-1)),zl=[Tl,Gl],jl=["onClick"],Nl={class:"matertials_item_img"},Ol={key:0,class:"error-img"},Hl=["src"],Ll={class:"image-slot"},ql={class:"matertials_item_title"},Rl={class:"title"},Jl={class:"tip"},Zl={key:3},Kl=ne(()=>a("div",{class:"float_layer"},null,-1)),Ql={class:"S_footer"},Wl="audio/wav,audio/mp3,audio/mpeg,image/png,image/jpeg,image/jpg,.mov,video/mp4",Xl=R({__name:"source-materials",props:{allScript:{type:Array,default:[]}},emits:["close"],setup(t,{expose:o,emit:r}){const k={value:"name",label:"name",children:"zhuci",multiple:!0},_=b([]),D={Title:"\u9ED8\u8BA4\u7D20\u6750",Description:"\u9ED8\u8BA4\u7D20\u6750",Tags:"\u9ED8\u8BA4\u7D20\u6750",BusinessType:"default"},$=b(),c=b([]),v=b(!1),g=ue(),x=t,{loading:S,pages:C,screen:h,groupId:M,system_tags:F,keywords:Z,materials:Y,total:ee,selectMaterals:I}=se(g),{getlistMedia:V,getBaseTags:z,getkeywords:j}=g,P=b([{value:"",label:"\u5168\u90E8"},{value:"video",label:"\u89C6\u9891"},{value:"image",label:"\u56FE\u7247"},{value:"audio",label:"\u97F3\u4E50"}]),N=b([{value:"",label:"\u5168\u90E8\u6BD4\u4F8B"},{value:"9:16",label:"9:16"},{value:"16:9",label:"16:9"},{value:"4:3",label:"4:3"},{value:"1:1",label:"1:1"}]),ye=s=>(_.value=[],s.forEach(l=>{l.f_id=Ke(6),_.value.push({f_id:l.f_id,progressMd5:0,uploadProgress:0,uploadSuccess:!1,name:l.name})}),!0),Ce=(s,l)=>{let u=_.value.find(d=>d.f_id===s.f_id);u.reader=s.reader,u.progressMd5=l},be=s=>{_.value=_.value.filter(l=>l.f_id!==s.f_id),H.success("\u5DF2\u53D6\u6D88")},Fe=(s,l,u)=>{let d=_.value.find(te=>te.f_id===u.file.f_id);d.uploadProgress=s,console.log("\u4E0A\u4F20\u8FDB\u5EA6\uFF1A",s,"\u6587\u4EF6\u5927\u5C0F\uFF1A",l)},ke=s=>{_.value=_.value.filter(l=>l.f_id!==s.f_id)},De=(s,l)=>{let u=_.value.find(d=>d.f_id===s.f_id);console.log(s,u,"=====> \u4E0A\u4F20\u6210\u529F"),u.uploadSuccess=!0,u.cover_url=l.cover_url},ie=q(()=>_.value.every(s=>s.uploadSuccess==!0)),le=q(()=>Y.value),Ee=()=>{if(M.value=="")return H.error("\u8BF7\u5148\u9009\u62E9\u7D20\u6750\u5206\u7EC4"),!1;$.value.handleFileClick()};V(),j(),z();const O=()=>{C.value.page=1,v.value=!1,c.value=[],V()},Se=s=>{C.value.page=1,C.value.limit=s,V()},$e=(s,l)=>{let u=l.map(d=>d[1]).filter(d=>d);h.value[s]=u,O()},we=s=>{C.value.page=s,console.log(s),V()},xe=s=>{if(!h.value.uploadedData.includes(s.type)){H.error("\u8BE5\u7D20\u6750\u7C7B\u578B\u4E0D\u652F\u6301\u5BFC\u5165");return}let l=c.value.findIndex(u=>u.id===s.id);l===-1?c.value.push(he(s)):c.value.splice(l,1),c.value.length===le.value.length?v.value=!0:v.value=!1},Be=s=>{s?c.value=le.value.map(l=>he(l)):c.value=[]},Ae=s=>{var u;const l=(u=c.value)==null?void 0:u.find(d=>d.id==s.id);return Boolean(l)},Me=s=>{var u;const l=(u=I.value)==null?void 0:u.find(d=>d.id==s.id);return Boolean(l)},Ie=s=>{var u;const l=(u=x.allScript)==null?void 0:u.find(d=>d.id==s.id);return Boolean(l)},Ve=r,Pe=()=>{if(c.value.length>0){let s=[...I.value,...c.value],l={};I.value=s.reduce((u,d)=>(l[d.id]||(l[d.id]=u.push(d)),u),[]),I.value=I.value.filter(u=>h.value.uploadedData.includes(u.type)),Ve("close")}else H.error("\u8BF7\u5148\u9009\u62E9\u7D20\u6750")};return Je(ie,s=>{s&&(console.log("\u5168\u90E8\u4E0A\u4F20\u5B8C\u6BD5",s),V())},{deep:!0}),o({pages:C}),(s,l)=>{const u=y("el-option"),d=y("el-select"),te=y("el-cascader"),re=y("el-checkbox"),Ue=y("el-button"),ce=y("Picture"),K=y("el-icon"),Te=y("el-image"),de=y("el-tag"),Ge=y("VideoCamera"),ze=y("Headset"),je=y("el-scrollbar"),Ne=oe("loading");return n(),E(fl,null,{header:m(()=>[a("div",xl,[i(d,{modelValue:p(h).type,"onUpdate:modelValue":l[0]||(l[0]=e=>p(h).type=e),clearable:"",style:{width:"120px"},onChange:O},{default:m(()=>[(n(!0),f(U,null,T(P.value,(e,Q)=>(n(),E(u,{key:Q,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),i(d,{modelValue:p(h).ratio,"onUpdate:modelValue":l[1]||(l[1]=e=>p(h).ratio=e),clearable:"",style:{width:"120px"},onChange:O},{default:m(()=>[(n(!0),f(U,null,T(N.value,(e,Q)=>(n(),E(u,{key:Q,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),i(te,{modelValue:p(h).tags_zhuci,"onUpdate:modelValue":l[2]||(l[2]=e=>p(h).tags_zhuci=e),style:{flex:"1"},placeholder:"\u8BF7\u9009\u62E9\u5173\u952E\u8BCD\u6807\u7B7E",options:p(Z),props:k,clearable:"","show-all-levels":!1,onChange:l[3]||(l[3]=e=>$e("tags_zhuci",e))},null,8,["modelValue","options"]),i(d,{modelValue:p(h).tags_miaoshu,"onUpdate:modelValue":l[4]||(l[4]=e=>p(h).tags_miaoshu=e),clearable:"",style:{flex:"1"},multiple:"",placeholder:"\u8BF7\u9009\u62E9\u7D20\u6750\u63CF\u8FF0\u6807\u7B7E",onChange:O},{default:m(()=>[(n(!0),f(U,null,T(p(F).miaoshu,e=>(n(),E(u,{key:e.name,label:e.name,value:e.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),i(d,{modelValue:p(h).tags_jingtou,"onUpdate:modelValue":l[5]||(l[5]=e=>p(h).tags_jingtou=e),clearable:"",style:{flex:"1"},multiple:"",placeholder:"\u8BF7\u9009\u62E9\u955C\u5934\u6807\u7B7E",onChange:O},{default:m(()=>[(n(!0),f(U,null,T(p(F).jingtou,e=>(n(),E(u,{key:e.name,label:e.name,value:e.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),main:m(()=>[a("div",Bl,[a("div",Al,[a("div",Ml,[i(re,{modelValue:v.value,"onUpdate:modelValue":l[6]||(l[6]=e=>v.value=e),onChange:Be},{default:m(()=>[G("\u5168\u9009")]),_:1},8,["modelValue"]),a("div",Il,[G(" \xA0\xA0\u5DF2\u9009 "),a("span",Vl,w(c.value.length),1)])]),a("div",Pl,[i(Ue,{type:"primary",size:"default",onClick:Pe},{default:m(()=>[G(" \u5BFC\u5165\u7D20\u6750")]),_:1})])]),A((n(),E(je,{"view-class":"el-scrollbar-view"},{default:m(()=>[a("div",Ul,[i(Qe,{ref_key:"fileUpload",ref:$,groupId:p(M),multiple:!0,mediaMetaData:D,accept:Wl,beforeUpload:ye,md5Progress:Ce,md5Cancel:be,progressUpload:Fe,uploadRepeat:ke,uploadSuccessed:De},{fileUpload:m(()=>[a("div",{class:"upload_btn",onClick:Ee},zl)]),_:1},8,["groupId"]),ie.value?B("",!0):(n(!0),f(U,{key:0},T(_.value,e=>(n(),f("div",{key:e.id,class:"matertials_item"},[i(wl,{file:e},null,8,["file"])]))),128)),(n(!0),f(U,null,T(le.value,e=>(n(),f("div",{class:"matertials_item",key:e.id,onClick:Q=>xe(e)},[a("div",Nl,[A(i(re,{label:e.id,size:"large",disabled:!0,checked:!0},null,8,["label"]),[[L,Ae(e)]]),i(Te,{style:{width:"185px",height:"185px"},src:e.cover_url,fit:"contain"},{error:m(()=>[e.type=="audio"?(n(),f("div",Ol,[a("img",{src:p(Xe),alt:""},null,8,Hl)])):B("",!0),a("div",Ll,[i(K,null,{default:m(()=>[i(ce)]),_:1})])]),_:2},1032,["src"]),a("div",{class:"tag",onClick:l[7]||(l[7]=Ze(()=>{},["stop"]))},[Me(e)?(n(),E(de,{key:0,effect:"plain"},{default:m(()=>[G("\u5DF2\u6DFB\u52A0")]),_:1})):Ie(e)?(n(),E(de,{key:1,type:"danger",effect:"plain"},{default:m(()=>[G("\u5176\u4ED6\u573A\u666F\u5DF2\u4F7F\u7528")]),_:1})):B("",!0)])]),a("div",ql,[a("span",Rl,w(e.title),1),a("div",Jl,[e.type==="image"?(n(),E(K,{key:0},{default:m(()=>[i(ce)]),_:1})):B("",!0),e.type==="video"?(n(),E(K,{key:1},{default:m(()=>[i(Ge)]),_:1})):B("",!0),e.type==="audio"?(n(),E(K,{key:2},{default:m(()=>[i(ze)]),_:1})):B("",!0),a("span",null,w(e.width)+" x "+w(e.height),1),e.type=="video"?(n(),f("div",Zl,"\xA0| "+w(e.duration)+"S",1)):B("",!0)])]),Kl],8,jl))),128))])]),_:1})),[[Ne,p(S)]])])]),footer:m(()=>[a("div",Ql,[i(We,{total:p(ee),pages:p(C),pageSizes:[50,100,200],onHandleCurrentChange:we,onHandleSizeChange:Se},null,8,["total","pages"])])]),_:1})}}}),Yl=J(Xl,[["__scopeId","data-v-1873869a"]]);const et=t=>(W("data-v-106d024a"),t=t(),X(),t),lt={class:"upload-materials"},tt={class:"content"},at={class:"left"},st=et(()=>a("div",{class:"save"},"\u6211\u7684\u7D20\u6750",-1)),ot={class:"right"},ut=R({__name:"ImportMeterial",props:{allScript:{type:Array,default:[]}},emits:["closeDrawer"],setup(t,{expose:o,emit:r}){const k=ue(),{selectMaterals:_,checkAll:D}=se(k),{handleClearScreen:$}=k,c=b(!1),v=b("\u7D20\u6750\u5BFC\u5165"),g=b([]),x=b(0),S=b(""),C=b({page:1,limit:16}),h=r,M=()=>fe(this,null,function*(){let z=ve(me({},C.value),{filter:{type:0},op:{type:"="}});const{code:j,data:P,msg:N}=yield Ye(z);j==200?(g.value=[...g.value,...P.list],x.value=P.total,C.value.page===1&&!S.value&&(S.value=P.list[0].id)):H.error(N)}),F=b(),Z=()=>{g.value=[],F.value.pages.page=1,M()},Y=()=>{g.value.length<x.value&&(C.value.page++,M())},ee=z=>{S.value=z},I=()=>{h("closeDrawer",!0),c.value=!1},V=()=>{_.value=[],$(),D.value=!1};return o({drawer:c,groupId:S}),(z,j)=>{const P=y("el-drawer");return n(),f("div",lt,[i(P,{modelValue:c.value,"onUpdate:modelValue":j[0]||(j[0]=N=>c.value=N),size:"70%",title:v.value,"destroy-on-close":"",onOpen:Z,onClose:V},{default:m(()=>[a("div",tt,[a("div",at,[st,i(cl,{showAll:!0,groupId:S.value,fileGroup:g.value,fileTotal:x.value,onNextPage:Y,onSwitchGroup:ee},null,8,["groupId","fileGroup","fileTotal"])]),a("div",ot,[i(Yl,{ref_key:"sourceMaterials",ref:F,allScript:t.allScript,onClose:I},null,8,["allScript"])])])]),_:1},8,["modelValue","title"])])}}}),vt=J(ut,[["__scopeId","data-v-106d024a"]]);export{vt as I};