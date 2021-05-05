{
  const welcome = () => {
    console.log("Witam developerów!");
  }

  const toggleTheme = () => {
    const body = document.documentElement;
    const changeThemeName = document.querySelector(".js-themeName");

    body.classList.toggle("dark");
    changeThemeName.innerText = body.classList.contains("dark") ? "Jasny motyw" : "Ciemny motyw";
  };

  const hideHeader = () => {
    const header = document.querySelector(".js-header");

    header.classList.toggle("header__hideHeader");
    buttonHeader.innerText = buttonHeader.classList.contains("header")
      ? "Schowaj nagłówek" : "Pokaż nagłówek";
  };

  const init = () => {
    const changeThemeButton = document.querySelector(".js-main__buttonTheme")
    changeThemeButton.addEventListener("click", toggleTheme);

    const buttonHeader = document.querySelector("js-main__buttonHeader")
    buttonHeader.addEventListener("click", hideHeader);

    welcome();
  };

  init();
}