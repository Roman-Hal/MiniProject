import React from 'react'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Green Energy</h1>
      <img alt='Logo' height="200px" src='./Images/GreenEnergyLogo.png' />
      <section className='content'>
        <h2>What is renewable energy</h2>
          <p>Renewable energy is a natural source of energy that will never run out.</p>
          <p>Wind, the Sun and water are renewable energy sources that can be used to create electricity.</p>
        <h3>There are different types of renewable energy:</h3>
        <div className="img-wrapper">
          <img alt='renewable energy' width="100%" src="./Images/RenewableEnergy1.png" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home
