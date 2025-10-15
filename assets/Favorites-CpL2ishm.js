import{c as r,e as n,D as c,s as o,r as d}from"./Data-BJxmCOTU.js";function m(e){return`
    <div class="anime-card">
    <button class="remove-from-favorite" aria-label="remove from favorite button" data-id="${e.mal_id}">
        ✖
    </button>
    <a href="/anime-search/anime_pages/index.html?anime=${e.mal_id}">
    <img src="${e.images.webp.large_image_url}" alt="${e.title} image" loading="lazy">
    </a>
    <p class="score">⭐ ${e.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${e.title}</p>
    <p><span class="bold-underline">Year:</span> ${e.year}</p>
    </div>
    </div>
    `}class y{constructor(a){this.key=a}async addToFavorites(a){const t=r(this.key)||[];if(n(t,a)){alert("This anime is already in your favorites.");return}const s=`https://api.jikan.moe/v4/anime/${a}/full`,l=await new c(s).getData();t.push(l.data),o(this.key,t),alert("Successfully added to favorites.")}removeFromFavorites(a){const s=r(this.key).filter(i=>String(i.mal_id)!==String(a));o(this.key,s)}renderFavorites(a){const t=r(this.key);d(a,m,t)}}export{y as F};
