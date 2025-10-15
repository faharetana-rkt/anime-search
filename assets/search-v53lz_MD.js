import{D as s,r as o,a as l,t as d,d as c}from"./Data-BJxmCOTU.js";import{F as m}from"./Favorites-3i_Qibrf.js";function u(e){return`
    <div class="anime-card">
    <button class="add-to-favorite" aria-label="add to favorite button" data-id="${e.mal_id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
    </button>
    <a href="anime-search/anime_pages/index.html?anime=${e.mal_id}">
    <img src="${e.images.webp.large_image_url}" alt="${e.title} image" loading="lazy">
    </a>
    <p class="score">⭐ ${e.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${e.title}</p>
    <p><span class="bold-underline">Year:</span> ${e.year}</p>
    </div>
    </div>
    `}class p{constructor(t,a){this.parentElement=t,this.input=a}async init(){this.input.toLowerCase();const a=`https://api.jikan.moe/v4/anime?q=${encodeURI(this.input)}&limit=25&sfw=true`,i=await new s(a).getData();this.renderAnimes(i.data)}renderAnimes(t){if(t.length===0){this.parentElement.innerHTML='<p class="not-found">No anime with that name could be found.</p>';return}o(this.parentElement,u,t)}}l(document.querySelector("#currentYear"));d(document.querySelector("#menu"),document.querySelector("#animateme"));c(document.querySelectorAll(".link"));const n=document.querySelector(".search-input"),r=document.querySelector(".searched-anime"),h=new m("animes");n.addEventListener("keydown",e=>{e.key==="Enter"&&new p(r,n.value).init()});r.addEventListener("click",e=>{const a=e.target.closest(".add-to-favorite").dataset.id;h.addToFavorites(a)});
