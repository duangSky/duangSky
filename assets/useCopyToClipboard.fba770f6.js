import{r as a,U as i,V as u}from"./index.5a90395c.js";function m(o){const s=a(o||""),e=a(!1),n=a(!1);return i(s,t=>{u(t)&&(n.value=!0,e.value=f(t))},{immediate:!!o,flush:"sync"}),{clipboardRef:s,isSuccessRef:e,copiedRef:n}}function f(o,{target:s=document.body}={}){const e=document.createElement("textarea"),n=document.activeElement;e.value=o,e.setAttribute("readonly",""),e.style.contain="strict",e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="12pt";const t=document.getSelection();let c;t&&t.rangeCount>0&&(c=t.getRangeAt(0)),s.append(e),e.select(),e.selectionStart=0,e.selectionEnd=o.length;let l=!1;try{l=document.execCommand("copy")}catch(r){throw new Error(r)}return e.remove(),c&&t&&(t.removeAllRanges(),t.addRange(c)),n&&n.focus(),l}export{m as u};
