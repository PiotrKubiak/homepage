console.log("Witam developerów!");

let buttonHeader = document.querySelector(".js-main__buttonHeader");
let header = document.querySelector(".js-header");

buttonHeader.addEventListener("click", () => {
  header.classList.toggle("header__hideHeader");
  buttonHeader.innerText = buttonHeader.classList.contains("header")
    ? "Schowaj nagłówek" : "Pokaż nagłówek";
});

let buttonTheme = document.querySelector(".js-main__buttonTheme");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName")

buttonTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
  buttonTheme.innerText = body.classList.contains("dark")
    ? "Jasny motyw" : "Ciemny motyw";
});