import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope } from 'react-icons/fa'; // Add FaCode or FaEnvelope for email

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="social-icons">
        <li>
          <a href="https://www.linkedin.com/in/mandi-solone-8a301647/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/MandiSolone" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.codewars.com/users/MandiSolone" target="_blank" rel="noopener noreferrer">
            <FaCode /> {/* Codewars icon */}
          </a>
        </li>
        {/* Or use the email icon */}
        <li>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> {/* Email icon */}
          </a>
        </li>
      </ul>
      <p>© Mandi Solone</p>
    </footer>
  );
}

export default Footer;
