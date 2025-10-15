import{g as c,D as d,b as u,a as m,t as b,d as $}from"./Data-hFveC7Kh.js";function h(e){const s=[];e.streaming.forEach(a=>{const n=`<a href="${a.url}" target="_blank"><span>${a.name}</span></a>`;s.push(n)});const l=[];e.studios.forEach(a=>{const n=a.name;l.push(n)});const r=[];e.themes.forEach(a=>{const n=a.name;r.push(n)});const t=[];e.producers.forEach(a=>{const n=a.name;t.push(n)});const o=[];e.demographics.forEach(a=>{const n=a.name;o.push(n)});const p=e.trailer&&e.trailer.embed_url?`<div class="youtube-trailer">
            <iframe src="${e.trailer.embed_url}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>`:'<div class="youtube-trailer unavailable"><p class="trailer-unavailable">Trailer not available</p></div>';return`
        <div class="anime-container">
        <img src="${e.images.webp.large_image_url}">
        <ul>
        <li><span class="bold-underline">Rank:</span> ${e.rank||"N/A"}</li>
        <li><span class="bold-underline">Score:</span> ⭐${e.score||"N/A"}</li>
        <li><span class="bold-underline">Theme:</span> ${r.join(", ")||"N/A"}</li>
        <li><span class="bold-underline">Genres:</span> ${o.join(", ")||"N/A"}</li>
        <li><span class="bold-underline">Rating:</span> ${e.rating||"N/A"}</li>
        <li><span class="bold-underline">Year:</span> ${e.year||"N/A"}</li>
        <li><span class="bold-underline">Episodes:</span> ${e.episodes||"N/A"}</li>
        <li><span class="bold-underline">Duration:</span> ${e.duration||"N/A"}</li>
        <li><span class="bold-underline">Broadcast:</span> ${e.broadcast.string||"N/A"}</li>
        <li><span class="bold-underline">Status:</span> ${e.status||"N/A"}</li>
        <li><span class="bold-underline">Aired:</span> ${e.aired.string||"N/A"}</li>
        <li><span class="bold-underline">Type:</span> ${e.type||"N/A"}</li>
        <li><span class="bold-underline">Popularity:</span> ${e.popularity||"N/A"}</li>
        <li><span class="bold-underline">Streamed on:</span> ${s.join(", ")||"N/A"}</li>
        <li><span class="bold-underline">Studios:</span> ${l.join(", ")||"N/A"}</li>
        <li><span class="bold-underline">Producers:</span> ${t.join(", ")||"N/A"}</li>   
        <li><span class="bold-underline">Background:</span> ${e.background||"N/A"}</li>
        <li><span class="bold-underline">Synopsis:</span> ${e.synopsis||"N/A"}</li>     
        </ul>
        </div>
        ${p}
    `}class g{constructor(s){this.parentElement=s}async init(){const l=`https://api.jikan.moe/v4/anime/${c("anime")}/full`,t=await new d(l).getData();this.renderWithTemplate(t.data)}renderWithTemplate(s){u(this.parentElement,h(s),"beforeend")}}m(document.querySelector("#currentYear"));b(document.querySelector("#menu"),document.querySelector("#animateme"));$(document.querySelectorAll(".link"));const A=c("anime"),y=`https://api.jikan.moe/v4/anime/${A}/full`,N=new d(y),f=await N.getData(),i=f.data,v=document.querySelector("h1");v.innerHTML=`${i.title}, ${i.title_english}, ${i.title_japanese}`;const S=document.querySelector(".anime-details");document.title=`Anime Search | ${i.title}`;const w=new g(S);w.init();
