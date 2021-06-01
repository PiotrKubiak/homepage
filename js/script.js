{
  const welcome = () => {
    console.log("Witam developerów!");
  }

  const toggleTheme = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeChange");

    body.classList.toggle("body--dark");
    themeName.innerText = themeName.innerText === "JASNY" ? "CIEMNY" : "JASNY";
  };

  const hideHeader = () => {
    const header = document.querySelector(".header");
    const headerName = document.querySelector(".js-headerHide");

    header.classList.toggle("header--hidden");
    headerName.innerText = headerName.innerText === "POKAŻ" ? "SCHOWAJ" : "POKAŻ";
  };

  const init = () => {
    const themeButton = document.querySelector(".js-buttonTheme");
    themeButton.addEventListener("click", toggleTheme);

    const headerHideButton = document.querySelector(".js-buttonHeader");
    headerHideButton.addEventListener("click", hideHeader);

    welcome();
  };

  init();
}