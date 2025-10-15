import{D as n,r as s,a as m,t as p,d as u}from"./Data-BJxmCOTU.js";import{F as g}from"./Favorites-B7t8Uk7E.js";function w(e){const t=e.date,a=new Date(t),i=String(a.getUTCDate()).padStart(2,"0"),o=String(a.getUTCMonth()+1).padStart(2,"0"),c=a.getUTCFullYear(),l=String(a.getUTCHours()).padStart(2,"0"),d=String(a.getUTCMinutes()).padStart(2,"0");return`
    <div class="news-card">
    <p><span class=bold-underline>Published date</span>: ${`${i}/${o}/${c} ${l}:${d}`}</p>
    <p>${e.title}</p>
    <p><span class=bold-underline>Source</span>: ${e.source} <a href="${e.link}" target="_blank" class="news-link">Click to learn more</a></p>
    </div>
    `}const h="https://aninews.vercel.app/api/news?source=otakuusa&limit=10&sort=latest";class ${constructor(t){this.parentElement=t}async init(){const a=await new n(h).getData();this.renderAnimeNews(a.data)}renderAnimeNews(t){s(this.parentElement,w,t)}}function v(e){return`
    <div class="anime-card">
    <a href="anime_pages/index.html?anime=${e.mal_id}">
    <img src="${e.images.webp.large_image_url}" alt="${e.title} image" loading="lazy">
    </a>
    <p class="score">⭐ ${e.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${e.title}</p>
    <p><span class="bold-underline">Year:</span> ${e.year}</p>
    </div>
    </div>
    `}const y="https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=true&limit=25";class S{constructor(t){this.parentElement=t}async init(){const a=await new n(y).getData();this.renderAnimeNews(a.data)}renderAnimeNews(t){s(this.parentElement,v,t)}}m(document.querySelector("#currentYear"));p(document.querySelector("#menu"),document.querySelector("#animateme"));u(document.querySelectorAll(".link"));const b=document.querySelector("#anime-news-home"),f=new $(b);f.init();const r=document.querySelector("#top-animes"),D=new S(r);D.init();const C=new g("animes");r.addEventListener("click",e=>{const a=e.target.closest(".add-to-favorite").dataset.id;C.addToFavorites(a)});
