import React from 'react';
import './hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="hero-component">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Global Timber Trade Made Seamless</h1>
          <h2>Connecting India and Dubai with quality timber imports and exports</h2>
          <button  className="cta-button">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
