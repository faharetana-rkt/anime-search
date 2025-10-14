(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function u(t){const n=new Date().getFullYear();t.innerHTML=`&copy; ${n}`}function d(t,e){t.addEventListener("click",()=>{e.classList.toggle("open"),t.classList.toggle("open")})}function p(t){let e=window.location.pathname.split("/").pop();e===""&&(e="index.html"),t.forEach(n=>{n.getAttribute("href")===e&&n.classList.add("active")})}function i(t,e,n,a="afterbegin",r=!0){r&&(t.innerHTML="");const s=n.map(e);t.insertAdjacentHTML(a,s.join(""))}async function m(t){const e=await t.json();if(t.ok)return e;throw{name:"servicesError",message:e}}class c{constructor(e){this.url=e}async getData(){const e=await fetch(this.url);return await m(e)}}function f(t){const e=t.date,n=new Date(e),a=String(n.getUTCDate()).padStart(2,"0"),r=String(n.getUTCMonth()+1).padStart(2,"0"),s=n.getUTCFullYear(),o=String(n.getUTCHours()).padStart(2,"0"),l=String(n.getUTCMinutes()).padStart(2,"0");return`
    <div class="news-card">
    <p><span class=bold-underline>Published date</span>: ${`${a}/${r}/${s} ${o}:${l}`}</p>
    <p>${t.title}</p>
    <p><span class=bold-underline>Source</span>: ${t.source} <a href="${t.link}" target="_blank" class="news-link">Click to learn more</a></p>
    </div>
    `}const g="https://aninews.vercel.app/api/news?source=otakuusa&limit=10&sort=latest";class y{constructor(e){this.parentElement=e}async init(){const n=await new c(g).getData();this.renderAnimeNews(n.data)}renderAnimeNews(e){i(this.parentElement,f,e)}}function h(t){return`
    <div class="anime-card" data-animeId="${t.mal_id}">
    <img src="${t.images.webp.large_image_url}" alt="${t.title} image" loading="lazy">
    <p class="score">⭐ ${t.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${t.title}</p>
    <p><span class="bold-underline">Year:</span> ${t.year}</p>
    </div>
    </div>
    `}const w="https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=true&limit=25";class ${constructor(e){this.parentElement=e}async init(){const n=await new c(w).getData();console.log(n),this.renderAnimeNews(n.data)}renderAnimeNews(e){i(this.parentElement,h,e)}}u(document.querySelector("#currentYear"));d(document.querySelector("#menu"),document.querySelector("#animateme"));p(document.querySelectorAll(".link"));const v=document.querySelector("#anime-news-home"),S=new y(v);S.init();const L=document.querySelector("#top-animes"),b=new $(L);b.init();
