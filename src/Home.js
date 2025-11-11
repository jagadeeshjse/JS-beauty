import React from 'react';
import logo from './images/Logo.jpeg';

const Home = () => {
  return (
    <header className="home">
      <div className="container" style={{ display: 'flex', alignItems: 'center', width: '100%', gap: 12 }}>
        <img src={logo} alt="logo" className="logo" />
        <div className="header">
          <h1 className="logoName">
            <span className="JS-logo">JS</span> Beauty parlour & Boutique
          </h1>
          <h4>
            Upto <span className="offer">60% </span>Off On Hair & Beauty Services
          </h4>
        </div>
        <div className="contact" aria-label="Contact information">
          <div className="contact-text">call-Now:</div>
          <div className="contact-number">+91 90523 01212</div>
        </div>
      </div>
    </header>
  );
};

export default Home;
