var _=(o,E,e)=>new Promise((g,m)=>{var y=s=>{try{r(e.next(s))}catch(f){m(f)}},F=s=>{try{r(e.throw(s))}catch(f){m(f)}},r=s=>s.done?g(s.value):Promise.resolve(s.value).then(y,F);r((e=e.apply(o,E)).next())});import{d as $,r as v,j as c,o as p,c as C,k as u,w as n,b,a as d,A as w,J as S,q as H,F as x,y as D,x as K,t as V,n as U,_ as P,E as h,p as Q,f as W}from"./index.5a90395c.js";import X from"./FakeUpload.9e4a9dfb.js";import{e as Y,i as Z,t as ee,f as te}from"./aitools.ae73576d.js";const le=o=>(Q("data-v-7c859fec"),o=o(),W(),o),ae=["src"],oe={class:"file_upload"},se=le(()=>d("div",null,"\u4E0A\u4F20\u56FE\u7247",-1)),ue={class:"styles"},ne=["onClick"],re={class:"img"},ie=["src"],ce={class:"name"},de={class:"btn"},me=$({__name:"generate-set",props:{isDerive:{type:Boolean,default:!1},rules:{type:Object,required:!0},sizes:{type:Array,required:!0},loading:{type:Boolean,default:!1}},emits:["startGenerate","generateSuccess","generateError"],setup(o,{emit:E}){const e=v({prompt:"",style:"",size:"1024*1024",n:1,seed:42}),g=v(),m=v([]),y=v(),F=v(),r=E,s=o,f=()=>{s.isDerive&&(e.value.inputImage="")};(()=>_(this,null,function*(){let{code:t,data:l,msg:i}=yield Y({platform:s.isDerive?2:1});t==200?(m.value=l.list,m.value.length&&(e.value.style=m.value[0].style_value,g.value=m.value[0].id,console.log(l.list))):h.error(i)}))(),f();const z=()=>{F.value.handleFileClick()},A=t=>{e.value.inputImage=t},G=t=>{g.value=t.id,e.value.style=t.style_value},R=()=>_(this,null,function*(){try{yield y.value.validate(),console.log("\u7ACB\u5373\u751F\u6210",e.value),r("startGenerate"),s.isDerive?N():q()}catch(t){console.log(t)}}),N=()=>_(this,null,function*(){let{code:t,data:l,msg:i}=yield Z(e.value);t==200?r("generateSuccess",l.mediaUrl):(h.error(i),r("generateError"))}),q=()=>_(this,null,function*(){let{code:t,data:l,msg:i}=yield ee(e.value);t==200?B(l.taskId):(h.error(i),r("generateError"))}),B=t=>_(this,null,function*(){let{code:l,data:i,msg:k}=yield te({taskId:t});l==200?setTimeout(()=>{B(t)},3e3):l==201?(r("generateSuccess",i.mediaUrl),console.log(i)):(h.error(k),r("generateError"))});return(t,l)=>{const i=c("UploadFilled"),k=c("el-icon"),I=c("el-form-item"),T=c("el-input"),j=c("el-scrollbar"),L=c("el-radio"),J=c("el-radio-group"),M=c("el-button"),O=c("el-form");return p(),C("div",null,[u(O,{ref_key:"ruleFormRef",ref:y,model:e.value,rules:o.rules,"label-position":"top"},{default:n(()=>[o.isDerive?(p(),b(I,{key:0,label:"\u56FE\u7247\u4E0A\u4F20",prop:"inputImage"},{default:n(()=>[d("div",{class:"upload",onClick:z},[w(d("img",{src:e.value.inputImage,alt:""},null,8,ae),[[S,e.value.inputImage]]),w(u(X,{ref_key:"fakeRef",ref:F,onGetImgBase64:A},{fileUpload:n(()=>[d("div",oe,[u(k,{size:20},{default:n(()=>[u(i)]),_:1}),se])]),_:1},512),[[S,!e.value.inputImage]])])]),_:1})):H("",!0),u(I,{label:"\u56FE\u7247\u5185\u5BB9\u63CF\u8FF0",prop:"prompt"},{default:n(()=>[u(T,{modelValue:e.value.prompt,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value.prompt=a),type:"textarea",resize:"none","show-word-limit":"",maxlength:"300",rows:"6",placeholder:"\u8BF7\u8F93\u5165\u56FE\u7247\u63CF\u8FF0\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u753B\u9762\u5185\u5BB9\u3001\u98CE\u683C\u7B49"},null,8,["modelValue"])]),_:1}),u(I,{label:"\u827A\u672F\u98CE\u683C"},{default:n(()=>[u(j,null,{default:n(()=>[d("div",ue,[(p(!0),C(x,null,D(m.value,a=>(p(),C("div",{class:K(["style_item",{choose:a.id===g.value}]),key:a.id,onClick:pe=>G(a)},[d("div",re,[d("img",{src:a.image_url,alt:""},null,8,ie)]),d("div",ce,V(a.style_name),1)],10,ne))),128))])]),_:1})]),_:1}),u(I,{label:"\u5206\u8FA8\u7387"},{default:n(()=>[u(J,{modelValue:e.value.size,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.size=a)},{default:n(()=>[(p(!0),C(x,null,D(o.sizes,a=>(p(),b(L,{label:a.value},{default:n(()=>[U(V(a.label),1)]),_:2},1032,["label"]))),256))]),_:1},8,["modelValue"])]),_:1}),d("div",de,[u(M,{type:"primary",loading:o.loading,style:{width:"60%"},onClick:R},{default:n(()=>[U("\u7ACB\u5373\u751F\u6210")]),_:1},8,["loading"])])]),_:1},8,["model","rules"])])}}}),Fe=P(me,[["__scopeId","data-v-7c859fec"]]);export{Fe as default};
