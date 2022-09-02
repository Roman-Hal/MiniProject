import React from 'react'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Green Energy</h1>
      <img alt='Logo' height="200px" src='./Images/GreenEnergyLogo.png' />
      <section className='content'>
        <p>This is a webpage about Green Energy</p>
      </section>
      <Footer />
    </div>
  );
}

export default Home
