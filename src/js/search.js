// import Data from "./Data.mjs";

// const anime = new Data("https://api.jikan.moe/v4/anime?q=attack+on+titan&limit=10&sfw=true&type=tv");
// console.log(await anime.getData());

import Search from "./Search.mjs";
import Favorites from "./Favorites.mjs";
import { renderYear, toggleOpenClass, detectActivePage } from "./utils.mjs";

renderYear(document.querySelector("#currentYear"));
toggleOpenClass(
  document.querySelector("#menu"),
  document.querySelector("#animateme")
);
detectActivePage(document.querySelectorAll(".link"));

const searchBar = document.querySelector(".search-input");
const parentElement = document.querySelector(".searched-anime");
const favorites = new Favorites("animes");

searchBar.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const renderAnimes = new Search(parentElement, searchBar.value);
        renderAnimes.init();
    }
});

parentElement.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-favorite");
    const mal_id = btn.dataset.id;
    favorites.addToFavorites(mal_id);
});