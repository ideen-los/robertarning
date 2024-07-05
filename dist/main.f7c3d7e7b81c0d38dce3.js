(()=>{"use strict";var e,t,n={365:(e,t,n)=>{n.r(t),n.d(t,{convertToURLSaveName:()=>l,pushURLAndCallRouter:()=>i,setBodyClass:()=>r,setContent:()=>o,setupPage:()=>s});var a=n(455);const r=function(e){const t=document.querySelector("body");t.className="",t.classList.add(e)},o=function(e,t){return document.getElementById(e).innerHTML=t},i=function(e){history.pushState({},"",`/${e}`),(0,a.Q)()},s=function(e="projectPage"){!function(){const e=document.querySelectorAll(".lazy-load"),t=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const n=e.target;"IMG"===n.tagName?(n.src=n.dataset.src,n.onload=()=>{n.classList.add("media-loaded")}):"VIDEO"===n.tagName&&(Array.from(n.children).forEach((e=>{"SOURCE"===e.tagName&&(e.src=e.dataset.src)})),n.load(),n.onloadeddata=()=>{n.classList.add("media-loaded")}),t.unobserve(n)}}))}),{rootMargin:"200px",threshold:0});e.forEach((e=>t.observe(e)))}(),requestAnimationFrame((()=>{"projectPage"===e?function(){const e=document.getElementById("loading-wrapper"),t=document.querySelector(".single-project .media-elements"),n=document.querySelector(".single-project .project-title-and-link"),a=document.querySelector(".single-project .skills-and-tools"),r=document.querySelector(".single-project .skills-and-tools span"),o=document.querySelector(".single-project .skills-and-tools ul"),i=document.querySelector(".single-project .media-elements > div > *"),s=setTimeout((()=>{l()}),1e4),l=function(){e&&e.classList.contains("visible")&&e.classList.remove("visible"),clearTimeout(s)},d=function(){e&&!e.classList.contains("visible")&&e.classList.add("visible")};if(t&&i){n&&n.classList.add("transition-in"),a&&a.classList.add("transition-in-opacity"),r&&r.classList.add("transition-in"),o&&o.classList.add("transition-in"),i.classList.add("transition-in");const t=setTimeout(d,300),s=function(){clearTimeout(t),e&&e.classList.contains("visible")&&e.classList.remove("visible"),n&&requestAnimationFrame((()=>{n.classList.add("transition-visible")})),a&&requestAnimationFrame((()=>{a.classList.add("transition-visible")})),r&&requestAnimationFrame((()=>{r.classList.add("transition-visible-delayed")})),o&&requestAnimationFrame((()=>{o.classList.add("transition-visible-delayed")})),requestAnimationFrame((()=>{i.classList.add("transition-visible-delayed-more")}))};"VIDEO"===i.tagName?(i.addEventListener("canplay",s),i.addEventListener("error",l)):"IMG"===i.tagName?(i.addEventListener("load",s),i.addEventListener("error",l)):"IFRAME"===i.tagName&&(i.onload=s,i.onerror=l)}}():function(){const e=document.querySelector("h1");e&&(e.classList.add("transition-in"),requestAnimationFrame((()=>{e.classList.add("transition-visible")})))}()})),window.scroll(0,0)},l=function(e){return encodeURIComponent(e.replace(/\s+/g,"-").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[()]/g,"").replace(/-+/g,"-").replace(/^-+|-+$/g,"")).toLowerCase()}},455:(e,t,n)=>{n.d(t,{Q:()=>o,g:()=>r});const a={},r=function(e,t,n){a[e]={handler:t,title:n}},o=async function(){const e=window.location.pathname||"/";try{if(a[e]&&a[e].handler){const t=await a[e].handler();await t(),document.title=a[e].title;(await Promise.resolve().then(n.bind(n,365))).setupPage("staticPage")}else{const t=await n.e(13).then(n.bind(n,777)),a=await t.loadSingleProject(e);if("404"!==a){document.title=`Robert Arning – ${a}`;(await Promise.resolve().then(n.bind(n,365))).setupPage("projectPage");(await n.e(537).then(n.bind(n,537))).handleMoreProjectsLinks(),t.handleAllProjectsLink()}else document.title="Robert Arning – Page not found"}}catch(e){}};window.addEventListener("popstate",(()=>{o()}))}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={id:e,exports:{}};return n[e](o,o.exports,r),o.exports}r.m=n,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+"."+{13:"9c19b1282f19befe2a7e",158:"4482cfe438d1755af7b2",537:"d53608582df9709a75a2",839:"9e03d42bb2a8a6003518"}[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="robertarning:",r.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var s,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[a];var m=(t,a)=>{s.onerror=s.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{r.b=document.baseURI||self.location.href;var e={792:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));n.push(a[2]=o);var i=r.p+r.u(t),s=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var a,o,[i,s,l]=n,d=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)l(r)}for(t&&t(n);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkrobertarning=self.webpackChunkrobertarning||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r(455),i=r(365);(0,o.g)("/",(()=>r.e(839).then(r.bind(r,839)).then((e=>e.displayProjectOverview))),"Robert Arning – UI/UX Designer"),(0,o.g)("/profil",(()=>r.e(158).then(r.bind(r,158)).then((e=>e.displayProfile))),"Robert Arning – Profil"),document.addEventListener("DOMContentLoaded",(function(){(0,o.Q)(),function(){const e=document.querySelector("header");document.querySelectorAll("a.mail").forEach((e=>{e.setAttribute("href","mailto:".concat(atob("aGFsbG9Acm9iZXJ0YXJuaW5nLmRl")))})),e.addEventListener("click",(e=>{e.target.closest("a#home")||e.target.closest("a#logo")?(e.preventDefault(),(0,i.pushURLAndCallRouter)("")):e.target.closest("a#profile")&&(e.preventDefault(),(0,i.pushURLAndCallRouter)("profil"))}))}()}))})();
//# sourceMappingURL=main.f7c3d7e7b81c0d38dce3.js.map