var S=(i,F,p)=>new Promise((k,h)=>{var v=u=>{try{_(p.next(u))}catch(l){h(l)}},r=u=>{try{_(p.throw(u))}catch(l){h(l)}},_=u=>u.done?k(u.value):Promise.resolve(u.value).then(v,r);_((p=p.apply(i,F)).next())});import{d as Q,r as m,j as s,v as W,o as c,b as V,w as t,a as n,A as $,c as f,t as G,J as X,k as o,F as b,y as A,l as C,n as Y,_ as Z,E as w,p as ee,f as le}from"./index.5a90395c.js";import{t as oe,p as te,r as ae,g as se}from"./index.a087ce7d.js";import{u as ne}from"./useCopyToClipboard.fba770f6.js";import{f as ue}from"./keyword.011c6f30.js";const R=i=>(ee("data-v-38942ef0"),i=i(),le(),i),de={class:"content"},ce={class:"loading"},re={class:"problem text-ellipsis-2"},ie={class:"addAll"},pe={class:"text"},_e={class:"operate"},me=["onClick"],ve=R(()=>n("span",null,"\u6DFB\u52A0",-1)),fe=["onClick"],he=R(()=>n("span",null,"\u590D\u5236",-1)),ye={class:"foot_ipt"},ge=Q({__name:"ai-generate-pop",emits:["handleClickAdd"],setup(i,{expose:F,emit:p}){const{clipboardRef:k,copiedRef:h}=ne(),v=m(!1),r=m(!1),_=m(),u=m(""),l=m({desc:"",type:"",paragraph:null}),T=p,y=m([]),U=()=>{if(r.value){w.warning("\u5185\u5BB9\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...");return}y.value.forEach(d=>x(d))},x=d=>{T("handleClickAdd",{type:l.value.type,txt:d})},L=d=>{k.value=d,C(h)&&w.success("\u590D\u5236\u6210\u529F")},N=()=>S(this,null,function*(){try{yield _.value.validate(),console.log(l.value),u.value=`${l.value.desc}\uFF0C${se(l.value.type).txt}\uFF0C${l.value.paragraph}\u6BB5`,r.value=!0;let{code:d,data:a,msg:B}=yield ue(l.value);d==200?(console.log(a),y.value=a.content):w.error(B),r.value=!1}catch(d){console.log(d)}});return F({drawer:v}),(d,a)=>{const B=s("FolderAdd"),D=s("el-icon"),P=s("CopyDocument"),j=s("el-scrollbar"),z=s("el-input"),g=s("el-form-item"),E=s("el-option"),I=s("el-select"),J=s("el-button"),M=s("el-form"),q=s("el-drawer"),H=W("selfLoading");return c(),V(q,{modelValue:v.value,"onUpdate:modelValue":a[3]||(a[3]=e=>v.value=e),title:"AI\u751F\u6210",size:"480"},{default:t(()=>[n("div",de,[$((c(),f("div",ce,[n("div",re,G(u.value),1),n("div",ie,[$(n("span",{onClick:U},"\u6309\u987A\u5E8F\u5168\u90E8\u6DFB\u52A0",512),[[X,y.value.length]])]),o(j,null,{default:t(()=>[(c(!0),f(b,null,A(y.value,(e,K)=>(c(),f("div",{class:"item",key:K},[n("div",pe,G(e),1),n("div",_e,[n("div",{class:"add",onClick:O=>x(e)},[o(D,null,{default:t(()=>[o(B)]),_:1}),ve],8,me),n("div",{class:"copy",onClick:O=>L(e)},[o(D,null,{default:t(()=>[o(P)]),_:1}),he],8,fe)])]))),128))]),_:1})])),[[H,r.value]]),n("div",ye,[o(M,{ref_key:"formRef",ref:_,model:l.value,rules:C(ae),inline:""},{default:t(()=>[o(g,{prop:"desc"},{default:t(()=>[o(z,{modelValue:l.value.desc,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.desc=e),maxlength:"50","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),o(g,{prop:"type"},{default:t(()=>[o(I,{modelValue:l.value.type,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.type=e),placeholder:"\u7C7B\u578B"},{default:t(()=>[(c(!0),f(b,null,A(C(oe),e=>(c(),V(E,{key:e.value,value:e.value,label:e.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(g,{prop:"paragraph"},{default:t(()=>[o(I,{modelValue:l.value.paragraph,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.paragraph=e),placeholder:"\u6BB5\u6570"},{default:t(()=>[(c(!0),f(b,null,A(C(te),e=>(c(),V(E,{key:e.value,value:e.value,label:e.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(g,null,{default:t(()=>[o(J,{type:"primary",loading:r.value,onClick:N},{default:t(()=>[Y("\u751F\u6210")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])])]),_:1},8,["modelValue"])}}}),be=Z(ge,[["__scopeId","data-v-38942ef0"]]);export{be as default};
