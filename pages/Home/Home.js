import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>¡Hola! Me llamo</p>
    <h1>Aitor Olano,</h1>
    <p>Soy una persona apasionada, con afán por el dibujo clásico y las motos, entre otras cosas. Siempre he sido polivalente en la rama de las ciencias; aunque Letras siempre ha sido mi asignatura pendiente...
    <br><br>
    La programación representa ese pilar de estabilidad en mí vida y donde más voy a expresarme de forma lógica y resolutiva. Espero que os guste; ¡y compartid!
    </p>
    <a href="mailto:aitorolano7@gmail.com">Dime algo →</a>
    </section>`;
};