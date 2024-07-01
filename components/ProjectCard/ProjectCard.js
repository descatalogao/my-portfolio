import "./ProjectCard.css";

export const ProjectCard = (project) => `

<div class="project-card">

<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.github}>
<img src="/public/github.jpg" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="/public/link.jpg" alt="Link icon" />
</a>
</div>
</div>

<img src=${project.image} alt=${project.title}/>


<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;