import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <h2>About Us</h2>
      <section className="content">
        <h4>Created By: </h4>
        <span className='about-us-card'>
          <p>Name: Aaron</p>
          <p>Github: <a target="_blank" rel="noreferrer" href='https://github.com/aaron-cyf'>Aaron-CYF</a></p>
        </span>
        <span className='about-us-card'>
          <p>Name: Roman</p>
          <p>Github: <a target="_blank" rel="noreferrer" href='https://github.com/roman-hal'>Roman-Hal</a></p>
        </span>
        <span className='about-us-card'>
          <p>Name: Sobia</p>
          <p>Github: <a target="_blank" rel="noreferrer" href='https://github.com/sobiawaqar'>sobiawaqar</a></p>
        </span>
      </section>
    </div>
  );
}

export default Aboutus

