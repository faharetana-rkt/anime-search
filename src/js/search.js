// import Data from "./Data.mjs";

// const anime = new Data("https://api.jikan.moe/v4/anime?q=attack+on+titan&limit=10&sfw=true&type=tv");
// console.log(await anime.getData());

import Search from "./Search.mjs";

const searchBar = document.querySelector(".search-input");
const parentElement = document.querySelector(".searched-anime");

searchBar.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const renderAnimes = new Search(parentElement, searchBar.value);
        renderAnimes.init();
    }
});