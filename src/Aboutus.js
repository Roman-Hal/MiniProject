import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <h2>About Us</h2>
      <section className="content">
        <h4>Created By: </h4>
        <span className='about-us-card'>
          Name: Aaron<br></br>
          Github: <a target="_blank" rel="noreferrer" href='https://github.com/aaron-cyf'>Aaron-CYF</a><br></br>
          <br></br>
        </span>
        <span className='about-us-card'>
          Name: Roman<br></br>
          Github: <a target="_blank" rel="noreferrer" href='https://github.com/roman-hal'>Roman-Hal</a><br></br>
          <br></br>
        </span>
        <span className='about-us-card'>
          Name: Sobia<br></br>
          Github: <a target="_blank" rel="noreferrer" href='https://github.com/sobiawaqar'>sobiawaqar</a><br></br>
        </span>
      </section>
    </div>
  );
}

export default Aboutus

