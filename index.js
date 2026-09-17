import{a as i,S as y,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();i.defaults.baseURL="https://pixabay.com/api/";i.defaults.params={key:"57618791-4db8b96e533d358f5552878ee",image_type:"photo",orientation:"horizontal",safesearch:!0};async function g(o){return(await i.get("",{params:{q:o}})).data}const c=document.querySelector(".loader"),f=document.querySelector(".gallery"),h=new y(".gallery a");function L(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const S=function(t){const s=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:m,comments:d,downloads:p})=>`<li class='gallery-item'>
       <a href = '${e}'>
       <img src = '${n}' alt = '${r}'/>
       </a>
       <ul class ='info'>
         <li class="info-item">Likes <span class="span-info">${a}</span></li>
         <li class="info-item">Views <span class="span-info">${m}</span></li>
         <li class="info-item">Comments <span class="span-info">${d}</span></li>
         <li class="info-item">Downloads <span class="span-info">${p}</span></li>
       </ul>
   </li>`).join("");f.innerHTML=s,h.refresh()},w=function(){f.innerHTML=""},u=document.querySelector(".form");u.addEventListener("submit",$);function $(o){o.preventDefault();const t=new FormData(o.target).get("search-text").trim();if(t===""){l.error({title:"Error",message:"Заповніть поле вводу"});return}w(),L(),g(t).then(({hits:s})=>{s.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(S(s),u.reset())}).catch(s=>{console.error(s.message)}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
