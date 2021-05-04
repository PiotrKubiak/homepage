{
  const welcome = () => {
    console.log("Witam developerów!");
  }

  const toggleTheme = () => {
    const body = documentElement;
    const buttonTheme = document.querySelector(".js-themeName");

    body.classList.toggle("dark");
    buttonTheme.innerText = body.classList.contains("dark") ? "Jasny motyw" : "Ciemny motyw";
  }

  const hideHeader = () => {
    const buttonHeader = document.querySelector(".js-main__buttonHeader");
    const header = document.querySelector(".js-header");

    
    header.classList.toggle("header__hideHeader");
    buttonHeader.innerText = buttonHeader.classList.contains("header")
      ? "Schowaj nagłówek" : "Pokaż nagłówek";

  }

  const init = () => {
    const buttonTheme = document.querySelector(".js-main__buttonTheme");
    buttonTheme.addEventListener("click", toggleTheme);
    buttonHeader.addEventListener("click", hideHeader);
    welcome();
  };

  init();
}