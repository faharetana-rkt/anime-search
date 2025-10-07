import { renderYear, toggleOpenClass, detectActivePage } from "./utils.mjs";

renderYear(document.querySelector("#currentYear"));
toggleOpenClass(
  document.querySelector("#menu"),
  document.querySelector("#animateme")
);
detectActivePage(document.querySelectorAll(".link"));
