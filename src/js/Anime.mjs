import { getParams, renderWithTemplate } from "./utils.mjs";
import Data from "./Data.mjs";

function templateFunction(anime) {
    const streaming = [];
    anime.streaming.forEach(stream => {
        const htmlElement = `<a href="${stream.url}" target="_blank"><span>${stream.name}</span></a>`;
        streaming.push(htmlElement);
    });

    const studios = [];
    anime.studios.forEach(studio => {
        const name = studio.name;
        studios.push(name);
    });

    const themes = [];
    anime.themes.forEach(theme => {
        const genre = theme.name;
        themes.push(genre);
    });

    const producers = [];
    anime.producers.forEach(producer => {
        const name = producer.name;
        producers.push(name);
    });

    const genres = [];
    anime.demographics.forEach(genre => {
        const name = genre.name;
        genres.push(name);
    });
    
    const trailerHtml = anime.trailer && anime.trailer.embed_url
      ? `<div class="youtube-trailer">
            <iframe src="${anime.trailer.embed_url}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>`
      : `<div class="youtube-trailer unavailable"><p class="trailer-unavailable">Trailer not available</p></div>`;
    
    return `
        <div class="anime-container">
        <img src="${anime.images.webp.large_image_url}">
        <ul>
        <li><span class="bold-underline">Rank:</span> ${anime.rank || "N/A"}</li>
        <li><span class="bold-underline">Score:</span> ⭐${anime.score || "N/A"}</li>
        <li><span class="bold-underline">Theme:</span> ${themes.join(", ") || "N/A"}</li>
        <li><span class="bold-underline">Genres:</span> ${genres.join(", ") || "N/A"}</li>
        <li><span class="bold-underline">Rating:</span> ${anime.rating || "N/A"}</li>
        <li><span class="bold-underline">Year:</span> ${anime.year || "N/A"}</li>
        <li><span class="bold-underline">Episodes:</span> ${anime.episodes || "N/A"}</li>
        <li><span class="bold-underline">Duration:</span> ${anime.duration || "N/A"}</li>
        <li><span class="bold-underline">Broadcast:</span> ${anime.broadcast.string || "N/A"}</li>
        <li><span class="bold-underline">Status:</span> ${anime.status || "N/A"}</li>
        <li><span class="bold-underline">Aired:</span> ${anime.aired.string || "N/A"}</li>
        <li><span class="bold-underline">Type:</span> ${anime.type || "N/A"}</li>
        <li><span class="bold-underline">Popularity:</span> ${anime.popularity || "N/A"}</li>
        <li><span class="bold-underline">Streamed on:</span> ${streaming.join(", ") || "N/A"}</li>
        <li><span class="bold-underline">Studios:</span> ${studios.join(", ") || "N/A"}</li>
        <li><span class="bold-underline">Producers:</span> ${producers.join(", ") || "N/A"}</li>   
        <li><span class="bold-underline">Background:</span> ${anime.background || "N/A"}</li>
        <li><span class="bold-underline">Synopsis:</span> ${anime.synopsis || "N/A"}</li>     
        </ul>
        </div>
        ${trailerHtml}
    `;
}


export default class Anime {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    async init() {
        const animeId = getParams("anime");
        const baseUrl = `https://api.jikan.moe/v4/anime/${animeId}/full`
        const animeData = new Data(baseUrl);
        const anime = await animeData.getData();
        this.renderWithTemplate(anime.data);
    }

    renderWithTemplate(data){
        renderWithTemplate(this.parentElement, templateFunction(data), "beforeend");
    }
}