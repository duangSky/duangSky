function p(t){let l=t.url,d=t.title;var e=new XMLHttpRequest;e.open("GET",l,!0),e.responseType="blob",e.onload=()=>{if(e.readyState===4&&e.status===200){let a=e.response,n=window.URL.createObjectURL(new Blob([a],{type:t.type==="video"?"video/mp4":t.type==="image"?"image/jpeg":"audio/mp3"})),o=document.createElement("a");o.download=d,o.href=n,o.style.display="none",document.body.appendChild(o),o.click(),o.remove()}},e.send()}export{p as d};