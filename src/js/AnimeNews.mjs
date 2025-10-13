import { renderListWithTemplate } from "./utils.mjs";
import Data from "./Data.mjs";

function templateFunction(news) {
    const isoDateString = news.date;
    const date = new Date(isoDateString);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // months are 0-based
    const year = date.getUTCFullYear();

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return `
    <div class="news-card">
    <p>Published date: ${formattedDate}</p>
    <p>${news.title}</p>
    <p>Source: ${news.source}, <a href="${news.link}" target="_blank" class="news-link">Click to learn more</a></p>
    </div>
    `
}

const baseURL = "https://aninews.vercel.app/api/news?source=otakuusa&limit=10&sort=latest";

export default class AnimeNews {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }
    async init() {
        const news = new Data(baseURL);
        const newsData = await news.getData();
        this.renderAnimeNews(newsData.data);
    }
    renderAnimeNews(list) {
        renderListWithTemplate(this.parentElement, templateFunction, list);
    }
};

