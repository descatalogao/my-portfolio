import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { insta } from "../../utils/insta";

export const About = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    insta(main);
  };