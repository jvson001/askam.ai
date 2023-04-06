import React from "react";
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Askam.ai</h1>
        <nav>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="info-section">
        <div className="info-text">
          <h2>Welcome to our AI Platform!</h2>
          <p>
            Your new Bestie, Just ask am!
          </p>
          <a href="/Get Started">Get Started</a>
        </div>
        <div className="info-image">
          {/* Replace src with your desired image URL */}
          <img src="https://cdn.discordapp.com/attachments/933565701162168371/1093148609245106248/Jvy_generate_me_an_ai_image_logo_for_my_chatbot_app_600x400_5b75c783-ec1a-4e45-b05b-0ec1c20d9c9f.png" alt="AI Platform" />
        </div>
      </section>

      <footer className="footer">
        <p>© 2023 Your Company Name. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;