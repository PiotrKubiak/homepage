{
  const welcome = () => {
    console.log("Witam developerów!");
  }

  const toggleTheme = () => {
    const body = document.querySelector(".body");
    const changeThemeName = document.querySelector(".js-themeName");

    body.classList.toggle("body--dark");
    changeThemeName.innerText = changeThemeName.innerText === "Jasny" ? "Ciemny" : "Jasny";
  };

  const toggleHeader = () => {
    const header = document.querySelector(".js-header");
    
    header.classList.toggle("header--hideHeader");
    buttonHeader.innerText = buttonHeader.innerText === "Schowaj nagłówek" ? "Pokaż nagłówek" : "Schowaj nagłówek";
  };

  const init = () => {
    const changeThemeButton = document.querySelector(".js-main__buttonTheme");
    changeThemeButton.addEventListener("click", toggleTheme);

    const buttonHeader = document.querySelector("js-main__buttonHeader");
    buttonHeader.addEventListener("click", toggleHeader);

    welcome();
  };

  init();
}