var $=(_,k,y)=>new Promise((v,E)=>{var A=m=>{try{b(y.next(m))}catch(C){E(C)}},t=m=>{try{b(y.throw(m))}catch(C){E(C)}},b=m=>m.done?v(m.value):Promise.resolve(m.value).then(A,t);b((y=y.apply(_,k)).next())});import{d as oe,h as re,a0 as z,r as h,T as j,W as de,j as n,o as s,b as B,w as o,k as e,l as a,a as i,c as p,y as V,x as se,t as T,F as c,q as x,n as q,_ as ne,ab as ie,E as R,p as me,f as pe}from"./index.5a90395c.js";import{u as ce}from"./imgTextPublish.0e57f47f.js";import{u as fe}from"./audio.e4943d80.js";import{m as _e,d as ye,f as K,r as Fe}from"./index.101c175c.js";import{e as be}from"./dateUtil.67c53eed.js";import Ce from"./period-selector.13bce298.js";import De from"./publish-account.01d2dc8d.js";import ve from"./add-image.f4a312be.js";import Ee from"./work-title.b2dcaaab.js";import{p as ge}from"./publish.8b41f428.js";import he from"./img-text-task.978c908c.js";import L from"./img-text-music.f2b23a92.js";import"./publish.6bf25757.js";import"./account-card.f67ec0d0.js";import"./account-config.2fdcd7a8.js";import"./lodash.a9e36c73.js";import"./account.f146a620.js";import"./select-place.c3281a39.js";import"./mount-applet-pop.0bd6e464.js";import"./material.85a80f57.js";import"./creative.ea528d59.js";import"./keyword.011c6f30.js";import"./ImportMeterial.9b103172.js";import"./index.browser.2b0920b0.js";import"./AliCloudUpload.13488d40.js";import"./Pagination.554cb32d.js";import"./audio.531569af.js";import"./image-card.36f6256b.js";import"./vuedraggable.umd.dc61d486.js";import"./MediumPreview.37c6af48.js";import"./empty.ab2a3794.js";import"./combo-pop.539db6c6.js";import"./index.0e306189.js";import"./make.3dd199c4.js";import"./HotMusic.c1d9e9b3.js";import"./music-card.2b625142.js";import"./index.89ddba91.js";import"./RecommendMusic.7c828e52.js";const f=_=>(me("data-v-84a353ba"),_=_(),pe(),_),Be={class:"mode"},Ve=["onClick"],xe=f(()=>i("span",{style:{"margin-left":"12px","font-size":"12px"}},"\u4E0D\u9009\u9ED8\u8BA4\u7ACB\u5373\u53D1\u5E03",-1)),ke={style:{"margin-left":"12px"}},Ae={class:"time"},Ie=f(()=>i("span",{style:{"margin-left":"12px"}},"\u6700\u592750\u6761",-1)),Pe=f(()=>i("span",{style:{"margin-left":"12px"}},"\u5206\u949F/\u6761",-1)),Se=f(()=>i("span",{class:"must"},"*",-1)),we=f(()=>i("span",null,"\u6DFB\u52A0\u56FE\u7247",-1)),Te=f(()=>i("span",{class:"must"},"*",-1)),Re=f(()=>i("span",null,"\u4F5C\u54C1\u6807\u9898\u3001\u8BDD\u9898",-1)),Ye={class:"foot_btn"},Ue=f(()=>i("div",{class:"tips"},"\u56E0\u5E73\u53F0\u63A5\u53E3\u7A33\u5B9A\u6027\u3001\u7F51\u7EDC\u7A33\u5B9A\u6027\u3001\u5185\u5BB9\u5BA1\u6838\u65B9\u9762\u7B49\u56E0\u7D20\u5F71\u54CD\uFF0C\u53D1\u5E03\u65F6\u95F4\u5B58\u5728\u4E00\u5B9A\u7684\u6EDE\u540E\u6027\u9884\u8BA15-15\u5206\u949F",-1)),Me=oe({__name:"img-text-sub",props:{planId:{type:String,default:""}},setup(_){const k=re(),y=ce(),v=fe(),{partClear:E,handleClearAll:A}=y,{form:t}=z(y),{audioRef:b}=z(v),{handleInit:m}=v,C=h(),I=h(),Y=h(),U=h(),P=_,W=(d,l)=>t.value[l]===d.value,G=(d,l)=>{t.value[l]=d.value,E()},J=d=>{t.value.data.PeriodHour=t.value.data.PeriodHour.filter(l=>l!==d)},O=()=>{let d=[];t.value.type==="timing"?d=[I.value.validate(),Y.value.formRef.validate(),U.value.formRef.validate()]:d=[I.value.validate()],Promise.all(d).then(()=>$(this,null,function*(){let l=ie(t.value);P.planId&&(l.id=P.planId),l.type==="cycle"&&(l.data.CycleDate[0]=`${l.data.CycleDate[0]} 00:00:00`,l.data.CycleDate[1]=`${l.data.CycleDate[1]} 23:59:59`,l.data.CycleDayNum=M.value,l.data.CyclePublishInterval=S.value);let{code:F,msg:r}=yield ge(l);F==200?(P.planId?R.success("\u4FEE\u6539\u6210\u529F"):R.success("\u63D0\u4EA4\u6210\u529F"),k.replace("/publish/publishPlan/plan")):R.error(r)})).catch(l=>{console.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A",l)})},M=j(()=>{var l;let d=0;return(l=t.value.data.CycleDate)!=null&&l.length&&(d=be(t.value.data.CycleDate[0],t.value.data.CycleDate[1])+1),d}),S=j(()=>{let d=0;return t.value.data.CyclePublishNum&&(d=(24-t.value.data.CycleDayStart)*60/t.value.data.CyclePublishNum),d}),Q=()=>{m()};return de(()=>{A(),m()}),(d,l)=>{const F=n("el-input"),r=n("el-form-item"),w=n("el-date-picker"),N=n("el-option"),H=n("el-select"),X=n("el-tag"),Z=n("CircleCloseFilled"),ee=n("el-icon"),D=n("el-divider"),le=n("el-switch"),te=n("el-form"),ue=n("el-button"),ae=n("el-scrollbar");return s(),B(ae,{ref_key:"scrollbarRef",ref:C},{default:o(()=>[e(te,{ref_key:"formRef",ref:I,model:a(t),rules:a(Fe),"label-width":"130"},{default:o(()=>[e(r,{label:"\u8BA1\u5212\u540D\u79F0",prop:"name"},{default:o(()=>[e(F,{modelValue:a(t).name,"onUpdate:modelValue":l[0]||(l[0]=u=>a(t).name=u),maxlength:20,"show-word-limit":"",style:{width:"50%"},placeholder:"\u8BF7\u8F93\u5165\u8BA1\u5212\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u53D1\u5E03\u6A21\u5F0F",prop:"type"},{default:o(()=>[i("div",Be,[(s(!0),p(c,null,V(a(_e),u=>(s(),p("div",{class:se(["modeItem",{choose:W(u,"type")}]),key:u.value,onClick:g=>G(u,"type")},T(u.label),11,Ve))),128))])]),_:1}),a(t).type==="timing"?(s(),B(r,{key:0,label:"\u65F6\u95F4\u9009\u62E9",prop:"data.Timing"},{default:o(()=>[e(w,{modelValue:a(t).data.Timing,"onUpdate:modelValue":l[1]||(l[1]=u=>a(t).data.Timing=u),type:"datetime",clearable:"",format:"YYYY/MM/DD HH:mm:ss","value-format":"x",placeholder:"\u8BF7\u9009\u62E9\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue"]),xe]),_:1})):x("",!0),a(t).type==="cycle"?(s(),p(c,{key:1},[e(r,{label:"\u5468\u671F\u9009\u62E9",prop:"data.CycleDate"},{default:o(()=>[e(w,{modelValue:a(t).data.CycleDate,"onUpdate:modelValue":l[2]||(l[2]=u=>a(t).data.CycleDate=u),type:"daterange",size:"large","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4","value-format":"YYYY-MM-DD",style:{"flex-grow":"0",width:"360px"}},null,8,["modelValue"]),i("span",ke,"\u5171\u8BA1"+T(M.value)+"\u5929",1)]),_:1}),i("div",Ae,[e(r,{label:"\u65F6\u95F4\u9009\u62E9",prop:"data.CycleDayStart"},{default:o(()=>[e(H,{modelValue:a(t).data.CycleDayStart,"onUpdate:modelValue":l[3]||(l[3]=u=>a(t).data.CycleDayStart=u)},{default:o(()=>[(s(!0),p(c,null,V(a(ye),u=>(s(),B(N,{key:u.value,value:u.value,label:u.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u65E5\u53D1\u5E03\u6570",prop:"data.CyclePublishNum"},{default:o(()=>[e(F,{modelValue:a(t).data.CyclePublishNum,"onUpdate:modelValue":l[4]||(l[4]=u=>a(t).data.CyclePublishNum=u),modelModifiers:{number:!0},style:{width:"160px"},placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF"},null,8,["modelValue"]),Ie]),_:1}),e(r,{label:"\u95F4\u9694\u53D1\u65F6\u95F4"},{default:o(()=>[e(F,{modelValue:S.value,"onUpdate:modelValue":l[5]||(l[5]=u=>S.value=u),disabled:"",style:{width:"88px"}},null,8,["modelValue"]),Pe]),_:1})])],64)):x("",!0),a(t).type==="period"?(s(),p(c,{key:2},[e(r,{label:"\u65F6\u6BB5\u9009\u62E9",prop:"data.PeriodHour"},{default:o(()=>[e(Ce,{pattern:"imgText"})]),_:1}),e(r,{label:"\u5DF2\u9009\u65F6\u6BB5"},{default:o(()=>[(s(!0),p(c,null,V(a(t).data.PeriodHour,u=>(s(),p("div",{class:"tag",key:u},[e(X,{size:"large"},{default:o(()=>[q(T(`${a(K)(u)}:00 - ${a(K)(u)}:59`),1)]),_:2},1024),e(ee,{class:"close",onClick:g=>J(u)},{default:o(()=>[e(Z)]),_:2},1032,["onClick"])]))),128))]),_:1}),e(r,{label:"\u95F4\u9694\u53D1\u5929\u6570"},{default:o(()=>[e(H,{modelValue:a(t).data.PeriodInterval,"onUpdate:modelValue":l[6]||(l[6]=u=>a(t).data.PeriodInterval=u),style:{width:"120px"}},{default:o(()=>[(s(),p(c,null,V(8,(u,g)=>e(N,{key:u,value:g,label:g},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u65E5\u671F\u9009\u62E9",prop:"data.PeriodStart"},{default:o(()=>[e(w,{modelValue:a(t).data.PeriodStart,"onUpdate:modelValue":l[7]||(l[7]=u=>a(t).data.PeriodStart=u),type:"date",clearable:"","value-format":"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"},null,8,["modelValue"])]),_:1})],64)):x("",!0),e(D),e(r,{label:"\u8D26\u53F7\u9009\u62E9",prop:"data.Account"},{default:o(()=>[e(De,{pattern:"imgText"})]),_:1}),e(D),a(t).type==="timing"?(s(),p(c,{key:3},[e(r,null,{label:o(()=>[Se,we]),default:o(()=>[e(ve,{ref_key:"addImageRef",ref:Y},null,512)]),_:1}),e(D),e(r,{label:"\u6296\u97F3\u97F3\u4E50\u9009\u62E9",style:{"align-items":"center"}},{default:o(()=>[e(L,{plat:"AudioDouyin"})]),_:1}),e(r,{label:"\u5FEB\u624B\u97F3\u4E50\u9009\u62E9",style:{"align-items":"center"}},{default:o(()=>[e(L,{plat:"AudioKuaishou"})]),_:1}),e(D),e(r,null,{label:o(()=>[Te,Re]),default:o(()=>[e(Ee,{ref_key:"workTitleRef",ref:U},null,512)]),_:1})],64)):(s(),p(c,{key:4},[e(r,{label:"\u9009\u62E9\u521B\u4F5C\u4EFB\u52A1",prop:"data.ImgtextId"},{default:o(()=>[e(he)]),_:1}),a(t).data.ImgtextId?(s(),B(r,{key:0,label:"\u53EF\u53D1\u6570\u91CF"},{default:o(()=>[e(F,{modelValue:a(t).imgtext_num,"onUpdate:modelValue":l[8]||(l[8]=u=>a(t).imgtext_num=u),disabled:"",style:{width:"224px"}},null,8,["modelValue"])]),_:1})):x("",!0)],64)),e(D),e(r,{label:"\u662F\u5426\u7ACB\u5373\u6267\u884C"},{default:o(()=>[e(le,{modelValue:a(t).status,"onUpdate:modelValue":l[9]||(l[9]=u=>a(t).status=u)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),i("div",Ye,[Ue,e(ue,{type:"primary",onClick:O},{default:o(()=>[q("\u63D0\u4EA4\u53D1\u5E03")]),_:1})]),i("audio",{ref_key:"audioRef",ref:b,onEnded:Q},null,544)]),_:1},512)}}}),hl=ne(Me,[["__scopeId","data-v-84a353ba"]]);export{hl as default};
