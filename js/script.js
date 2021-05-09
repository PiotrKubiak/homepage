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

  const init = () => {
    const changeThemeButton = document.querySelector(".js-main__buttonTheme");
    changeThemeButton.addEventListener("click", toggleTheme);

    welcome();
  };

  init();
}