import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/#about">About</Link></li>  
        <li><Link to="/#projects">Projects</Link></li>  
        <li><Link to="/#skills">Skills</Link></li>  
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;