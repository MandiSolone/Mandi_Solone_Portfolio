import React from "react";
import website from "../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import mondiran from "../images/mondiran.png";
import diceGame from "../images/diceGame.png"; 
import bookApp from "../images/BookApp.png"; 
import reactMemoryGame from "../images/reactMemoryGame.png";
import ticTacToe from "../images/ticTacToe.png";

const projectsData = [
  {
    title: "Book Location Tracker App",
    description:
      "Developed a web application to manage personal libraries by tracking books and their locations, incorporating user authentication and session management. Managed data with MySQL and implemented user authentication using Google OAuth and Passport.js.Enhanced session management with Redis.Retrieved book information from the Google Books API. Used CRUD operations to allow users to input information about the books.React.js |  Node.js | Express.js | MySQL | HTML | CSS | Redis",
    image: bookApp,
    link: "https://book-location-tracker-5fd84feff1fd.herokuapp.com/library",
  },
  {
    title: "This Website",
    description:
      "This project uses React.js with components to build a clean, responsive website. Key features include a dynamic navigation menu, CSS styling, multimedia integration, and cross-browser compatibility. React's component-based structure ensures modularity and maintainability, while the responsive design adapts seamlessly to various screen sizes, providing an optimized user experience across devices.",
    image: website,
    link: "#",
  },
  {
    title: "React-Vite Memory Game",
    description:
      "This React-Vite Memory Game app challenges users to match pairs of numbers while keeping track of their score. Built with React's component-based structure, the app uses useState to manage the game state, including the current score and best score. The Header component displays the scores, while the Game component handles the logic for generating number pairs, tracking player progress, and updating scores.",
    image: reactMemoryGame,
    link: "https://mandisolone.github.io/react-memory-game/",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "This is a classic Tic Tac Toe game built with JavaScript. Players take turns placing 'X' and 'O' on a 3x3 grid, and the game checks for a win or tie after each move. The game uses a 2D array to track the board state and a PlayedPiece class to store each move. It features win and tie detection, dynamic player turns, and a restart button to clear the board and start a new game.",
    image: ticTacToe,
    link: "https://mandisolone.github.io/Tic_Tac_Toe/",
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

