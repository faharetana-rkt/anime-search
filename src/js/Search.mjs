import { renderListWithTemplate } from "./utils.mjs";
import Data from "./Data.mjs";

function templateFunction(anime) {
    const base = import.meta.env.BASE_URL || "/";
    return `
    <div class="anime-card">
    <button class="add-to-favorite" aria-label="add to favorite button" data-id="${anime.mal_id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
    </button>
    <a href="${base}anime_pages/index.html?anime=${anime.mal_id}">
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