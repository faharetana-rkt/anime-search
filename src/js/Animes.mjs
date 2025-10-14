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

const baseURL = "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=true&limit=25";

export default class Animes {
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
