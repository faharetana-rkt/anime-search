import{D as n,r as s,a as m,t as p,d as u}from"./Data-BeI8i1BC.js";import{F as g}from"./Favorites-DZuSf535.js";function w(t){const e=t.date,a=new Date(e),r=String(a.getUTCDate()).padStart(2,"0"),o=String(a.getUTCMonth()+1).padStart(2,"0"),l=a.getUTCFullYear(),c=String(a.getUTCHours()).padStart(2,"0"),d=String(a.getUTCMinutes()).padStart(2,"0");return`
    <div class="news-card">
    <p><span class=bold-underline>Published date</span>: ${`${r}/${o}/${l} ${c}:${d}`}</p>
    <p>${t.title}</p>
    <p><span class=bold-underline>Source</span>: ${t.source} <a href="${t.link}" target="_blank" class="news-link">Click to learn more</a></p>
    </div>
    `}const h="https://aninews.vercel.app/api/news?source=otakuusa&limit=10&sort=latest";class v{constructor(e){this.parentElement=e}async init(){const a=await new n(h).getData();this.renderAnimeNews(a.data)}renderAnimeNews(e){s(this.parentElement,w,e)}}function b(t){return`
    <div class="anime-card">
    <button class="add-to-favorite" aria-label="add to favorite button" data-id="${t.mal_id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
    </button>
    <a href="/anime_pages/index.html?anime=${t.mal_id}">
    <img src="${t.images.webp.large_image_url}" alt="${t.title} image" loading="lazy">
    </a>
    <p class="score">⭐ ${t.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${t.title}</p>
    <p><span class="bold-underline">Year:</span> ${t.year}</p>
    </div>
    </div>
    `}const $="https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=true&limit=25";class f{constructor(e){this.parentElement=e}async init(){const a=await new n($).getData();this.renderAnimeNews(a.data)}renderAnimeNews(e){s(this.parentElement,b,e)}}m(document.querySelector("#currentYear"));p(document.querySelector("#menu"),document.querySelector("#animateme"));u(document.querySelectorAll(".link"));const y=document.querySelector("#anime-news-home"),S=new v(y);S.init();const i=document.querySelector("#top-animes"),C=new f(i);C.init();const D=new g("animes");i.addEventListener("click",t=>{const a=t.target.closest(".add-to-favorite").dataset.id;D.addToFavorites(a)});
