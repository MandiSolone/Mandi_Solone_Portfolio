import React from 'react';
import headshot from '../images/Headshot.png'; 

const Header = () => {
  return (
    <div className="header-container">
      <img src={headshot} alt="headshot of Mandi" height="200px" />
      <h1>
        I'm
        <span className="name"> Mandi Solone,</span>
        <br />
        a full-stack web developer.
      </h1>
      </div>
  );
};

export default Header;
