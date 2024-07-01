import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Mis redes</h2>
<div>
${Button("/public/github.jpg", "GitHub")}
${Button("/public/linkedin.jpg", "LinkedIn")}
${Button("/public/instagram.png", "Instagram")}
</div>
`;