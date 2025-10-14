import{g as c,D as d,b as p,a as u,t as m,d as b}from"./Data-CJKnQeEM.js";function h(e){const a=[];e.streaming.forEach(n=>{const s=`<a href="${n.url}" target="_blank"><span>${n.name}</span></a>`;a.push(s)});const l=[];e.studios.forEach(n=>{const s=n.name;l.push(s)});const r=[];e.themes.forEach(n=>{const s=n.name;r.push(s)});const t=[];e.producers.forEach(n=>{const s=n.name;t.push(s)});const o=[];return e.demographics.forEach(n=>{const s=n.name;o.push(s)}),`
        <div class="anime-container">
        <img src="${e.images.webp.large_image_url}">
        <ul>
        <li><span class="bold-underline">Rank:</span> ${e.rank}</li>
        <li><span class="bold-underline">Score:</span> ⭐${e.score}</li>
        <li><span class="bold-underline">Theme:</span> ${r.join(", ")}</li>
        <li><span class="bold-underline">Genres:</span> ${o.join(", ")}</li>
        <li><span class="bold-underline">Rating:</span> ${e.rating}</li>
        <li><span class="bold-underline">Year:</span> ${e.year}</li>
        <li><span class="bold-underline">Episodes:</span> ${e.episodes}</li>
        <li><span class="bold-underline">Duration:</span> ${e.duration}</li>
        <li><span class="bold-underline">Broadcast:</span> ${e.broadcast.string}</li>
        <li><span class="bold-underline">Status:</span> ${e.status}</li>
        <li><span class="bold-underline">Aired:</span> ${e.aired.string}</li>
        <li><span class="bold-underline">Type:</span> ${e.type}</li>
        <li><span class="bold-underline">Popularity:</span> ${e.popularity}</li>
        <li><span class="bold-underline">Streamed on:</span> ${a.join(", ")}</li>
        <li><span class="bold-underline">Studios:</span> ${l.join(", ")}</li>
        <li><span class="bold-underline">Producers:</span> ${t.join(", ")}</li>   
        <li><span class="bold-underline">Background:</span> ${e.background}</li>
        <li><span class="bold-underline">Synopsis:</span> ${e.synopsis}</li>     
        </ul>
        </div>
        <div class="youtube-trailer">
        <iframe src="${e.trailer.embed_url}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>        
        </iframe>
        </div>
    `}class ${constructor(a){this.parentElement=a}async init(){const l=`https://api.jikan.moe/v4/anime/${c("anime")}/full`,t=await new d(l).getData();this.renderWithTemplate(t.data)}renderWithTemplate(a){p(this.parentElement,h(a),"beforeend")}}u(document.querySelector("#currentYear"));m(document.querySelector("#menu"),document.querySelector("#animateme"));b(document.querySelectorAll(".link"));const g=c("anime"),y=`https://api.jikan.moe/v4/anime/${g}/full`,f=new d(y),S=await f.getData(),i=S.data,w=document.querySelector("h1");w.innerHTML=`${i.title}, ${i.title_english}, ${i.title_japanese}`;const D=document.querySelector(".anime-details");document.title=`Anime Search | ${i.title}`;const E=new $(D);E.init();
