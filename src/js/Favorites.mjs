import { getLocalStorage, setLocalStorage, existsInArray, renderListWithTemplate } from "./utils.mjs";
import Data from "./Data.mjs";

function templateFunction(anime) {
    return `
    <div class="anime-card">
    <button class="remove-from-favorite" aria-label="remove from favorite button" data-id="${anime.mal_id}">
        ✖
    </button>
    <a href="anime_pages/index.html?anime=${anime.mal_id}">
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

export default class Favorites {
    constructor (key) {
        this.key = key;
    };

    async addToFavorites(animeId) {
        const array = getLocalStorage(this.key) || [];
        if (existsInArray(array, animeId)) {
            alert("This anime is already in your favorites.");
            return;
        }
        const baseUrl = `https://api.jikan.moe/v4/anime/${animeId}/full`;
        const animeData = new Data(baseUrl);
        const anime = await animeData.getData();
        array.push(anime.data);
        setLocalStorage(this.key, array);
        alert("Successfully added to favorites.");
    };

    removeFromFavorites(mal_id) {
        const array = getLocalStorage(this.key);
        const filtered = array.filter(item => String(item.mal_id) !== String(mal_id));
        setLocalStorage(this.key, filtered);
    };

    renderFavorites(parentElement) {
        const array = getLocalStorage(this.key);
        renderListWithTemplate(parentElement, templateFunction, array)
    };

}