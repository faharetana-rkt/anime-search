import {
  renderYear,
  toggleOpenClass,
  detectActivePage,
  getLocalStorage,
} from "./utils.mjs";
import Favorites from "./Favorites.mjs";

renderYear(document.querySelector("#currentYear"));
toggleOpenClass(
  document.querySelector("#menu"),
  document.querySelector("#animateme")
);
detectActivePage(document.querySelectorAll(".link"));

const array = getLocalStorage("animes");
const favorites = new Favorites("animes");
const container = document.querySelector(".favorites");

if (array.length === 0 || array === null) {
  container.innerHTML = `<p class="no-more-para">Your favorites is empty.</p>`;
} else {
  favorites.renderFavorites(container);
}

container.addEventListener("click", (e) => {
  const btn = e.target.closest(".remove-from-favorite");
  const mal_id = btn.dataset.id;
  favorites.removeFromFavorites(mal_id);
  if (array.length === 0 || array === null) {
    container.innerHTML = `<p class="no-more-para">No more favorites, go add some more.</p>`;
  } else {
    favorites.renderFavorites(container);
  }
});
