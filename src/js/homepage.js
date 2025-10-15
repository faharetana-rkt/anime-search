import { renderYear, toggleOpenClass, detectActivePage } from "./utils.mjs";
import AnimeNews from "./AnimeNews.mjs";
import Animes from "./Animes.mjs";
import Favorites from "./Favorites.mjs";

// import Data from "./Data.mjs";
// const anime = new Data("https://api.jikan.moe/v4/anime/16498/full");
// console.log(await anime.getData());

renderYear(document.querySelector("#currentYear"));
toggleOpenClass(
  document.querySelector("#menu"),
  document.querySelector("#animateme")
);
detectActivePage(document.querySelectorAll(".link"));

const newsContainer = document.querySelector("#anime-news-home");
const news = new AnimeNews(newsContainer);
news.init();

const animeContainer = document.querySelector("#top-animes");
const animes = new Animes(animeContainer);
animes.init();

const favorites = new Favorites("animes");

animeContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-favorite");
  const mal_id = btn.dataset.id;
  favorites.addToFavorites(mal_id);
});
