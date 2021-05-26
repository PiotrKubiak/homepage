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

  const init = () => {
    const themeButton = document.querySelector(".js-buttonTheme");
    themeButton.addEventListener("click", toggleTheme);

    welcome();
  };

  init();
}