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

    return `
        <div class="anime-container">
        <img src="${anime.images.webp.large_image_url}">
        <ul>
        <li><span class="bold-underline">Rank:</span> ${anime.rank}</li>
        <li><span class="bold-underline">Score:</span> ⭐${anime.score}</li>
        <li><span class="bold-underline">Theme:</span> ${themes.join(", ")}</li>
        <li><span class="bold-underline">Genres:</span> ${genres.join(", ")}</li>
        <li><span class="bold-underline">Rating:</span> ${anime.rating}</li>
        <li><span class="bold-underline">Year:</span> ${anime.year}</li>
        <li><span class="bold-underline">Episodes:</span> ${anime.episodes}</li>
        <li><span class="bold-underline">Duration:</span> ${anime.duration}</li>
        <li><span class="bold-underline">Broadcast:</span> ${anime.broadcast.string}</li>
        <li><span class="bold-underline">Status:</span> ${anime.status}</li>
        <li><span class="bold-underline">Aired:</span> ${anime.aired.string}</li>
        <li><span class="bold-underline">Type:</span> ${anime.type}</li>
        <li><span class="bold-underline">Popularity:</span> ${anime.popularity}</li>
        <li><span class="bold-underline">Streamed on:</span> ${streaming.join(", ")}</li>
        <li><span class="bold-underline">Studios:</span> ${studios.join(", ")}</li>
        <li><span class="bold-underline">Producers:</span> ${producers.join(", ")}</li>   
        <li><span class="bold-underline">Background:</span> ${anime.background}</li>
        <li><span class="bold-underline">Synopsis:</span> ${anime.synopsis}</li>     
        </ul>
        </div>
        <div class="youtube-trailer">
        <iframe src="${anime.trailer.embed_url}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>        
        </iframe>
        </div>
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