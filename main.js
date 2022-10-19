let button = document.querySelector(".arrow"),
    link = document.querySelector(".navbar");
button.addEventListener("click", () => {
    link.classList.toggle("display");
})    