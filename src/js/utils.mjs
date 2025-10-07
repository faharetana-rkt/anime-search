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



