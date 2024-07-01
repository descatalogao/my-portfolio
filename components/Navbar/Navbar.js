import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
    const main = document.querySelector(".projects-container");
    main.class=".projects-container"
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☾") {
    themeBtn.innerText = "☀";
  } else {
    themeBtn.innerText = "☾";
  }
};

export const Navbar = () => `
<nav>
<h2>Garabatos.</h2>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Proyectos</a>
    </li>
    <li>
        <a href="#" id="aboutlink">Últimos dibujos</a>
    </li>
        <li>
        <button id="themeBtn">☾</button>
    </li>
</ul>
</nav>
`;