import{a as i,i as c,S as l}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="33957392-15c8dcee5be6fcb8a0c7e759b",d=async r=>{const o=`https://pixabay.com/api/?key=${u}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await i.get(o)).data.hits}catch(s){throw console.error("Error fetching images:",s),s}},m=r=>{const o=document.querySelector(".gallery");if(o.innerHTML="",r.length===0){f("Sorry, there are no images matching your search query. Please try again!");return}const s=r.map(({webformatURL:n,largeImageURL:e,tags:t})=>`
        <a href="${e}" class="gallery__item">
            <img src="${n}" alt="${t}" class="gallery__image" />
        </a>
    `).join("");o.insertAdjacentHTML("beforeend",s)},f=r=>{c.error({title:"Error",message:r})},y=document.querySelector(".search-form"),g=new l(".gallery a");y.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements.query.value.trim();if(!o)return c.warning({title:"Warning",message:"Please enter a search term."});h();try{const s=await d(o);m(s),g.refresh()}catch(s){console.error("Error:",s)}finally{p()}});const h=()=>{const r=document.getElementById("loader");r.style.display="block"},p=()=>{const r=document.getElementById("loader");r.style.display="none"};
//# sourceMappingURL=index.js.map
