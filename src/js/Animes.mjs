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

const baseURL = "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=true&limit=25";

export default class Anime {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }
    async init() {
        const anime = new Data(baseURL);
        const animeData = await anime.getData();
        // console.log(animeData);
        this.renderAnimeNews(animeData.data);
    }
    renderAnimeNews(list) {
        renderListWithTemplate(this.parentElement, templateFunction, list);
    }
};
