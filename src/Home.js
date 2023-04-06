import React from 'react';
import Header from '../components/Header/Header.js';
import Banner from '../components/Banner/Banner.js';
import Footer from '../components/Footer/Footer.js';
import '../components/Header/Header.css';
import '../components/Banner/Banner.css';
import '../components/Footer/Footer.css';

function Home() {
  return (
    <div className="home">
      <Header/>
      <Banner/>
      <Footer/>
      {/* ... Rest of the code specific to Home component */}
    </div>
  );
}

export default Home;