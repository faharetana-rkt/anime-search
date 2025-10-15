import{D as s,r}from"./Data-hFveC7Kh.js";function c(e){return`
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
    `}class o{constructor(n,t){this.parentElement=n,this.input=t}async init(){this.input.toLowerCase();const t=`https://api.jikan.moe/v4/anime?q=${encodeURI(this.input)}&limit=25&sfw=true`,i=await new s(t).getData();this.renderAnimes(i.data)}renderAnimes(n){if(n.length===0){this.parentElement.innerHTML='<p class="not-found">No anime with that name could be found.</p>';return}r(this.parentElement,c,n)}}const a=document.querySelector(".search-input"),l=document.querySelector(".searched-anime");a.addEventListener("keydown",e=>{e.key==="Enter"&&new o(l,a.value).init()});
