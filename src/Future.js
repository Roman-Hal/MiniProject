import React from 'react'
import Footer from './Footer';

const Future = () => {
  return (
    <div>
      <h2>What the Future of Renewable Energy Looks Like</h2>
      <section className="content">
        <div id='Growth Projections'>
          <h3>Growth Projections</h3>
          <ol>
            <li>Solar Will Become 35% Cheaper By 2024</li>
            <li>Onshore Wind Energy Capacity Will Increase 57% By 2024</li>
            <li>Hydroelectric Capacity Will Rise 9% By 2024</li>
            <li>Geothermal Capacity Will Increase 28% By 2024</li>
          </ol>
        </div>
        <div id='growth-figures'>
          <h3>Growth Figures</h3>
          <div className="future-img-wrapper">
            <h4>renewable energy growth:</h4>
            <img width='100%' alt='renewable energy growth' src='.\Images\renewable-energy-growth.jpg' />
          </div>
          <div className="future-img-wrapper">
            <h4>bioenergy growth:</h4>
            <img width='100%' alt='bioenergy growth' src='.\Images\Doubling bioenergy.jpg' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Future
