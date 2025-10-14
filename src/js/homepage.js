import { renderYear, toggleOpenClass, detectActivePage } from "./utils.mjs";
import AnimeNews from "./AnimeNews.mjs";
import Anime from "./Animes.mjs";
// import Data from "./Data.mjs";

renderYear(document.querySelector("#currentYear"));
toggleOpenClass(
  document.querySelector("#menu"),
  document.querySelector("#animateme")
);
detectActivePage(document.querySelectorAll(".link"));

// const anime = new Data("https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&sfw=true&limit=25");
// console.log(await anime.getData());

const newsContainer = document.querySelector("#anime-news-home")
const news = new AnimeNews(newsContainer);
news.init();

const animeContainer = document.querySelector("#top-animes");
const animes = new Anime(animeContainer);
animes.init();