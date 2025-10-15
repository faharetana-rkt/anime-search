import{c as s,e as n,D as c,s as o,r as d}from"./Data-CxdGCdzi.js";function m(a){return`
    <div class="anime-card">
    <button class="remove-from-favorite" aria-label="remove from favorite button" data-id="${a.mal_id}">
        ✖
    </button>
    <a href="/anime_pages/index.html?anime=${a.mal_id}">
    <img src="${a.images.webp.large_image_url}" alt="${a.title} image" loading="lazy">
    </a>
    <p class="score">⭐ ${a.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${a.title}</p>
    <p><span class="bold-underline">Year:</span> ${a.year}</p>
    </div>
    </div>
    `}class y{constructor(e){this.key=e}async addToFavorites(e){const t=s(this.key)||[];if(n(t,e)){alert("This anime is already in your favorites.");return}const r=`https://api.jikan.moe/v4/anime/${e}/full`,l=await new c(r).getData();t.push(l.data),o(this.key,t),alert("Successfully added to favorites.")}removeFromFavorites(e){const r=s(this.key).filter(i=>String(i.mal_id)!==String(e));o(this.key,r)}renderFavorites(e){const t=s(this.key);d(e,m,t)}}export{y as F};
