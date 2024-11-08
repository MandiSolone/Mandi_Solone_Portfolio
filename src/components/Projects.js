import React from "react";
import website from "../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import mondiran from "../images/mondiran.png";
import diceGame from "../images/diceGame.png"; 

const projectsData = [
  {
    title: "This Website",
    description:
      "This project aims to create a clean, responsive website page using HTML and CSS. Key features include a responsive design, navigation menu, CSS styling, multimedia integration, and cross-browser compatibility.",
    image: website,
    link: "#",
  },
  {
    title: "Mondrian Artwork Recreation Using CSS Grid",
    description:
      "This project aimed to recreate Piet Mondrian's iconic artwork using CSS Grid, capturing his distinctive style of geometric shapes and primary colors.",
    image: mondiran,
    link: "https://mandisolone.github.io/Mondrian-Project/",
  },
  {
    title: "JavaScript Games",
    description:
      "This project centered around developing JavaScript games, featuring a random dice roll game and a music game playable via clicking or keyboard input.",
    image: diceGame,
    link: "https://mandisolone.github.io/JavaScript_Games-/",
  },
];

const Projects = () => (
  <section id="projects" className="parent-projects-container">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
          </div>
          <div className="project-text">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
            </a>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

