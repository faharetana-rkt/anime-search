export function renderYear(parentElement) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    parentElement.innerHTML = `&copy; ${year}`;
};

export function toggleOpenClass(button, navigation) {
    button.addEventListener("click", () => {
        navigation.classList.toggle("open");
        button.classList.toggle("open");
    })
};

export function detectActivePage(links) {
    let currentUrl = window.location.pathname.split("/").pop();

    if (currentUrl === "") {
        currentUrl = "index.html";
    };

    links.forEach(link => {
        if(link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        };
    });
};

export function renderListWithTemplate(parentElement, templateFn, list, position = "afterbegin", clear = true) {
    if(clear) {
        parentElement.innerHTML = "";
    }
    const templateArray = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, templateArray.join(""));
};

export function renderWithTemplate (parentElement, templateFn, position = "afterbegin", clear = true) {
    if(clear) {
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, templateFn);
};

export function getParams(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const anime = urlParams.get(name);
    return anime;
};

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
};

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};

export function existsInArray(array, animeId) {
  return array.some(anime => String(anime.mal_id) === String(animeId));
};