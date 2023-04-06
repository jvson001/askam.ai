import React from 'react';
import './Banner.css';
import image from '../../assets/images/Cover.svg'; // Adjust the relative path accordingly
const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="banner-title">Askam.ai</h1>
      <h2 className="banner-subtitle">Your new Bestie, Just ask am</h2>
      <button className="get-started">Get Started</button>
      {/* Add other elements as needed */}
    </div>
  );
};

export default Banner;