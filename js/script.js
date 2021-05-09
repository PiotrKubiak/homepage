{
  const welcome = () => {
    console.log("Witam developerów!");
  }

  const toggleTheme = () => {
    const body = document.querySelector(".body");
    const changeThemeName = document.querySelector(".js-themeChange");

    body.classList.toggle("body--dark");
    changeThemeName.innerText = changeThemeName.innerText === "JASNY" ? "CIEMNY" : "JASNY";
  };

  const init = () => {
    const changeThemeButton = document.querySelector(".js-buttonTheme");
    changeThemeButton.addEventListener("click", toggleTheme);

    welcome();
  };

  init();
}