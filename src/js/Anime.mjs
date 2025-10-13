import { renderListWithTemplate } from "./utils.mjs";
import Data from "./Data.mjs";

function templateFunction(anime) {
    return `
    <div class="anime-card">
    <img src="${anime.images.webp.large_image_url}" alt="${anime.title} image" loading="lazy">
    <p>${anime.score}</p>
    <p>${anime.title}</p>
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
        this.renderAnimeNews(animeData.data);
    }
    renderAnimeNews(list) {
        renderListWithTemplate(this.parentElement, templateFunction, list);
    }
};
