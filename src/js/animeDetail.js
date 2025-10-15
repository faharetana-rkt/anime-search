import {
  renderYear,
  toggleOpenClass,
  detectActivePage,
  getParams,
} from "./utils.mjs";
import Data from "./Data.mjs";
import Anime from "./Anime.mjs";

renderYear(document.querySelector("#currentYear"));
toggleOpenClass(
  document.querySelector("#menu"),
  document.querySelector("#animateme")
);
detectActivePage(document.querySelectorAll(".link"));

const animeId = getParams("anime");
const baseURL = `https://api.jikan.moe/v4/anime/${animeId}/full`;
const data = new Data(baseURL);
const animeData = await data.getData();
const anime = animeData.data;
const h1 = document.querySelector("h1");
h1.innerHTML = `${anime.title}, ${anime.title_english}, ${anime.title_japanese}`;

const container = document.querySelector(".anime-details");

document.title = `Anime Search | ${anime.title}`;
const renderAnimeDetail = new Anime(container);
renderAnimeDetail.init();
