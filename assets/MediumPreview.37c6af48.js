import{d as b,r as v,T as _,j as r,o as c,b as A,a as u,z as f,k as w,w as L,q as a,x as M,l as i,c as p,O as j,a5 as V,_ as B}from"./index.5a90395c.js";let I=["svgz","pjp","png","ico","avif","tiff","tif","jfif","svg","xbm","pjpeg","webp","jpg","jpeg","bmp","gif"],z=["avi","wmv","mpg","mpeg","mov","rm","ram","swf","flv","mp4","avi","rm","rmvb","flv","mpg","mkv"],O=["mp3","wav","m4a","wma"];const g=s=>{const t=s.split(".").slice(-1)[0].split("?")[0].toLocaleLowerCase();return I.some(e=>e===t)},y=s=>{const t=s.split(".").slice(-1)[0].split("?")[0].toLocaleLowerCase();return z.some(e=>e===t)},T=s=>{const t=s.split(".").slice(-1)[0].split("?")[0].toLocaleLowerCase();return O.some(e=>e===t)};const N=["onClick"],P=["src"],K=["src"],R=["src"],S=b({__name:"MediumPreview",props:{files:{type:Array,default:[]},srcKey:{type:String,default:"media_url"},hideOnClickModal:{type:Boolean,default:!0}},setup(s,{expose:t}){const l=v(!1),e=v(0),n=s,C=()=>{l.value=!0},d=()=>{l.value=!1},o=_(()=>n.files[e.value][n.srcKey]),h=_(()=>n.files[e.value].width/n.files[e.value].height);return t({index:e,handleOpen:C}),(q,m)=>{const k=r("Close"),x=r("el-icon");return r("ArrowLeft"),r("ArrowRight"),l.value?(c(),A(V,{key:0,to:"body"},[u("div",{class:"wrapper",onClick:m[2]||(m[2]=f(E=>s.hideOnClickModal&&d(),["self"]))},[u("div",{class:"closeIco",onClick:f(d,["stop"])},[w(x,null,{default:L(()=>[w(k)]),_:1})],8,N),a("",!0),a("",!0),u("div",{class:M(["previewArea",{piece:i(g)(o.value)||i(y)(o.value)}])},[i(y)(o.value)?(c(),p("video",{key:0,src:o.value,style:j({aspectRatio:h.value}),controls:""},null,12,P)):a("",!0),i(g)(o.value)?(c(),p("img",{key:1,src:o.value,alt:""},null,8,K)):a("",!0),i(T)(o.value)?(c(),p("audio",{key:2,src:o.value,controls:""},null,8,R)):a("",!0)],2)])])):a("",!0)}}}),$=B(S,[["__scopeId","data-v-ed6b551c"]]);export{$ as M};
