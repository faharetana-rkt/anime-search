import { renderListWithTemplate } from "./utils.mjs";
import Data from "./Data.mjs";

function templateFunction(anime) {
    return `
    <div class="anime-card">
    <a href="/anime_pages/index.html?anime=${anime.mal_id}">
    <img src="${anime.images.webp.large_image_url}" alt="${anime.title} image" loading="lazy">
    </a>
    <p class="score">⭐ ${anime.score}</p>
    <div class="overlay">
    <p><span class="bold-underline">Title:</span> ${anime.title}</p>
    <p><span class="bold-underline">Year:</span> ${anime.year}</p>
    </div>
    </div>
    `;
}

export default class Search {
    constructor(parentElement, input) {
        this.parentElement = parentElement;
        this.input = input;
    }
    async init() {
        this.input.toLowerCase();
        const encoded = encodeURI(this.input);
        const baseUrl = `https://api.jikan.moe/v4/anime?q=${encoded}&limit=25&sfw=true`;
        const anime = new Data(baseUrl);
        const animeData = await anime.getData();
        // console.log(animeData);
        this.renderAnimes(animeData.data);
    }
    renderAnimes(list) {
        if(list.length === 0) {
            this.parentElement.innerHTML = `<p class="not-found">No anime with that name could be found.</p>`;
            return;
        }
        renderListWithTemplate(this.parentElement, templateFunction, list);
    }
};