import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <h2>About Us</h2>
      <section className="content">
        <h4>Created By: </h4>
        <div className='about-us-card'>
          <p>Name: Aaron</p>
          <p>Github: <a target="_blank" rel="noreferrer" href='https://github.com/aaron-cyf'>Aaron-CYF</a></p>
        </div>
        <div className='about-us-card'>
          <p>Name: Roman</p>
          <p>Github: <a target="_blank" rel="noreferrer" href='https://github.com/roman-hal'>Roman-Hal</a></p>
        </div>
        <div className='about-us-card'>
          <p>Name: Sobia</p>
          <p>Github: <a target="_blank" rel="noreferrer" href='https://github.com/sobiawaqar'>sobiawaqar</a></p>
        </div>
        <div className="codeYourFutureWrap">
        <img id='codeyourfut' alt='Code Your Future' src="./Images/CodeYourFutureLogo1.png" width="100%" />
        </div>
      </section>
    </div>
  );
}

export default Aboutus

