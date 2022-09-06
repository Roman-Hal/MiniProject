import React from 'react';
import { useLocation } from 'react-router-dom';
import "./App.css";

const Footer = () => {
  const path = useLocation().pathname;

  const data = {
    home: { content: 
      <div>  
        <div className='source-links'>
          <h5>source links:</h5>
          <span>Picture content: <a href="https://www.sciencefacts.net/types-of-renewable-energy.html" target="_blank" rel="noreferrer">Link</a></span>
          <a href="" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    },
    eval: { content: 
      <div>
        <div className='source-links'>
          <h5>source links:</h5>
          <span>Picture content: <a href="https://learnmechanical.com/renewable-and-nonrenewable-energy/" target="_blank" rel="noreferrer">Link</a></span>
          <span>Content: <a href="https://www.iea.org/reports/global-energy-review-2021/renewables" target="_blank" rel="noreferrer">Link</a></span>
          <a href="" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    },
    avail: { content: 
      <div>
        <div className='source-links'>
          <h5>source links:</h5>
          <span>Content: <a href="https://www.greenmatch.co.uk/blog/2018/03/renewable-energy-in-the-united-kingdom" target="_blank" rel="noreferrer">Link</a></span>
          <a href="" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    },
    futr: { content: 
      <div>
        <div className='source-links'>
          <h5>source links:</h5>
          <span>Growth Projections: <a href="https://earth.org/the-growth-of-renewable-energy-what-does-the-future-hold/" target="_blank" rel="noreferrer">Link</a></span>
          <span>Growth Figures: <a href="https://www.irena.org/climatechange/Renewable-Energy-Key-climate-solution" target="_blank" rel="noreferrer">Link</a></span>
          <a href="" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    },
    abtus: { content: 
      <div>
        t
      </div>
    }
  };

  let footerContent = "";

  switch (path) {
    case "/":
      footerContent = data.home.content;
      break;
    case "/evaluation":
      footerContent = data.eval.content;
      break;
    case "/availability":
      footerContent = data.avail.content;
      break;
    case "/future":
      footerContent = data.futr.content;
      break;
    case "/aboutus":
      footerContent = data.abtus.content;
      break;
    default:
      footerContent = "";
  }

  return (
    <footer>
      {/* <Routes>
        <Route match="/" element={"This is the home page "} />
        <Route match="/evaluation" element={"<Evaluation />"} />
        <Route match="/availability" element={"<Availability />"} />
        <Route match="/future" element={"<Future />"} />
        <Route match="/aboutus" element={"<Aboutus />"} />
      </Routes> */}
      {footerContent}
      {/* Hi everyone!! */}
    </footer>
  );
}

export default Footer;
