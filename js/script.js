{
  const welcome = () => {
    console.log("Witam developerów!");
  }

  const toggleTheme = () => {
    const body = document.documentElement;
    const changeThemeName = document.querySelector(".js-themeName");

    body.classList.toggle("dark");
    changeThemeName.innerText = changeThemeName.innerText === "Jasny" ? "Ciemny" : "Jasny";
  };

  const hideHeader = () => {
    const header = document.querySelector(".js-header");
    const buttonHeader = document.querySelector (".js-main__buttonHeader")

    header.classList.toggle("header__hideHeader");
    buttonHeader.innerText = buttonHeader.innerText === "Schowaj nagłówek" ? "Pokaż nagłówek" : "Schowaj nagłówek";
  };

  const init = () => {
    const changeThemeButton = document.querySelector(".js-main__buttonTheme");
    changeThemeButton.addEventListener("click", toggleTheme);

    const buttonHeader = document.querySelector("js-main__buttonHeader");
    buttonHeader.addEventListener("click", hideHeader);

    welcome();
  };

  init();
}