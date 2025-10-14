import{D as a,r as s,a as d,t as p,d as m}from"./Data-DxAP7nOO.js";function u(e){const t=e.date,n=new Date(t),r=String(n.getUTCDate()).padStart(2,"0"),i=String(n.getUTCMonth()+1).padStart(2,"0"),o=n.getUTCFullYear(),c=String(n.getUTCHours()).padStart(2,"0"),l=String(n.getUTCMinutes()).padStart(2,"0");return`
    <div class="news-card">
    <p><span class=bold-underline>Published date</span>: ${`${r}/${i}/${o} ${c}:${l}`}</p>
    <p>${e.title}</p>
    <p><span class=bold-underline>Source</span>: ${e.source} <a href="${e.link}" target="_blank" class="news-link">Click to learn more</a></p>
    </div>
    `}const g="https://aninews.vercel.app/api/news?source=otakuusa&limit=10&sort=latest";class w{constructor(t){this.parentElement=t}async init(){const n=await new a(g).getData();this.renderAnimeNews(n.data)}renderAnimeNews(t){s(this.parentElement,u,t)}}function h(e){return`
    <div class="anime-card">
    <a href="/anime_pages/index.html?anime=${e.mal_id}">
    <img src="${e.images.webp.large_image_url}" alt="${e.title} image" loading="lazy">
    </a>
    <p class="score">⭐ ${e.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${e.title}</p>
    <p><span class="bold-underline">Year:</span> ${e.year}</p>
    </div>
    </div>
    `}const $="https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=true&limit=25";class y{constructor(t){this.parentElement=t}async init(){const n=await new a($).getData();this.renderAnimeNews(n.data)}renderAnimeNews(t){s(this.parentElement,h,t)}}d(document.querySelector("#currentYear"));p(document.querySelector("#menu"),document.querySelector("#animateme"));m(document.querySelectorAll(".link"));const S=document.querySelector("#anime-news-home"),v=new w(S);v.init();const D=document.querySelector("#top-animes"),b=new y(D);b.init();
