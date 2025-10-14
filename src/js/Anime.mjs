import { getParams, renderWithTemplate } from "./utils.mjs";
import Data from "./Data.mjs";

function templateFunction(anime) {
    return `
    
    `;
}

let baseUrl = "https://api.jikan.moe/v4/anime/"

export default class Anime {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.animeId = getParams("anime");
    }

    renderWithTemplate(data){
        renderWithTemplate(this.parentElement, templateFunction(data));
    }
}