var a=Object.defineProperty;var d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var s=(e,t,n)=>(d(e,typeof t!="symbol"?t+"":t,n),n);import{Q as p,S as m,C as i,D as o}from"./index.5a90395c.js";const c=p(),g=c.urlPrefix||"",v=c.apiUrl;class h{constructor(){s(this,"eventSource",null);s(this,"finallyHandler")}connect(t){this.finallyHandler=t.finallyHandler,m(t.url)||(t.url=`${v}${g}${t.url}`);let n="";if(t.data){for(let r in t.data)n+=`&${r}=${t.data[r]}`;t.url+=n}console.log(t.url),this.eventSource=new EventSource(t.url),t.onopen!=null?this.eventSource.onopen=t.onopen:this.eventSource.onopen=()=>{console.log("SSE \u8FDE\u63A5\u5DF2\u5F00\u542F")},t.onmessage!=null?this.eventSource.onmessage=t.onmessage:this.eventSource.onmessage=r=>{console.log("\u6536\u5230\u6D88\u606F\uFF1A",r.data)},this.eventSource.addEventListener("close",()=>{this.disconnect()}),this.eventSource.onerror=r=>{var l;((l=this.eventSource)==null?void 0:l.readyState)===EventSource.CLOSED?console.log("SSE \u8FDE\u63A5\u5DF2\u5173\u95ED"):console.error("SSE \u9519\u8BEF\uFF1A",r)}}disconnect(){this.eventSource&&(this.eventSource.close(),console.log("\u5173\u95ED sse \u8FDE\u63A5"),this.finallyHandler!=null&&this.finallyHandler())}}const u=new h;function $(e){return i.request({url:`/v6/aiclip/submitSplitVideo?token=${o}`,method:"post",data:e})}function V(e){return i.request({url:`/v6/aiclip/listSplitVideo?token=${o}`,method:"post",data:e})}function q(e){return i.request({url:`/v6/aiclip/deleteSplitVideoInfo?token=${o}`,method:"post",data:e})}function S(e){return i.request({url:`/v6/aiclip/getSplitVideo?token=${o}`,method:"post",data:e})}function C(e){return i.request({url:`/v6/aiclip/generateSceneCopy?token=${o}`,method:"post",data:e})}function y(){return i.request({url:`/v6/aiclip/listSmartVoiceInfo?token=${o}`,method:"get"})}function D(e){return i.request({url:`/v6/aiclip/text2Image?token=${o}`,method:"post",data:e})}function b(e){return i.request({url:`/v6/aiclip/text2ImageGetResult?token=${o}`,method:"post",data:e})}function F(e){return i.request({url:`/v6/aiclip/getText2ImageHistory?token=${o}`,method:"post",data:e})}function W(e){return i.request({url:`/v6/aiclip/deleteImageHistory?token=${o}`,method:"post",data:e})}function z(e){return i.request({url:`/v6/aiclip/getImageStyleList?token=${o}`,method:"post",data:e})}function H(e){return i.request({url:`/v6/aiclip/imageDerivation?token=${o}`,method:"post",data:e})}function x(e){return i.request({url:`/v6/aiclip/getImageDerivationHistory?token=${o}`,method:"post",data:e})}function T(e){return i.request({url:`/v6/aiclip/getDemonstrationForCustomizedVoiceJob?token=${o}`,method:"post",data:e})}function J(e){return i.request({url:`/v6/aiclip/createCustomizedVoiceJob?token=${o}`,method:"post",data:e})}function L(e){return i.request({url:`/v6/aiclip/uploadCustomizedVoiceAudio?token=${o}`,method:"post",data:e})}function I(e){return i.request({url:`/v6/aiclip/detectAudioForCustomizedVoiceJob?token=${o}`,method:"post",data:e})}function B(e){return i.request({url:`/v6/aiclip/submitCustomizedVoiceJob?token=${o}`,method:"post",data:e})}function G(e){return i.request({url:`/v6/aiclip/voiceCloneHistoryList?token=${o}`,method:"post",data:e})}function R(e){return i.request({url:`/v6/aiclip/saveCustomizedVoice?token=${o}`,method:"post",data:e})}function w({data:e,onopen:t,onmessage:n,finallyHandler:r}){u.connect({url:`/aiTools/littleRedBookPromotionWriting?token=${o}`,data:e,onopen:t,onmessage:n,finallyHandler:r})}function U({data:e,onopen:t,onmessage:n,finallyHandler:r}){u.connect({url:`/aiTools/shortVideoScriptWriting?token=${o}`,data:e,onopen:t,onmessage:n,finallyHandler:r})}function j(e){return i.request({url:`/v6/aiclip/saveShortVideoScript?token=${o}`,method:"post",data:e})}function E(e){return i.request({url:`/v6/aiclip/shortVideoDescWriting?token=${o}`,method:"post",data:e})}function O(e){return i.request({url:`/v6/aiclip/productIntroWriting?token=${o}`,method:"post",data:e})}function Q({data:e,onopen:t,onmessage:n,finallyHandler:r}){u.connect({url:`/aiTools/highScoreCommentWriting?token=${o}`,data:e,onopen:t,onmessage:n,finallyHandler:r})}function K({data:e,onopen:t,onmessage:n,finallyHandler:r}){u.connect({url:`/aiTools/aiAssistantWriting?token=${o}`,data:e,onopen:t,onmessage:n,finallyHandler:r})}function M(e){return i.request({url:`/v6/aiclip/aiWritingTools?token=${o}`,method:"post",data:e})}export{Q as A,K as B,C as a,y as b,F as c,q as d,z as e,b as f,S as g,W as h,H as i,x as j,T as k,V as l,J as m,B as n,R as o,I as p,w as q,M as r,$ as s,D as t,L as u,G as v,U as w,j as x,O as y,E as z};