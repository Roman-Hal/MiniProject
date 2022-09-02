import React from 'react';
import { useLocation } from 'react-router-dom';
import "./App.css";

const Footer = () => {
  const path = useLocation().pathname;

  const data = {
    home: { content: 
      <div>  
        This is the home page
      </div>
    },
    eval: { content: 
      <div>
        e
      </div>
    },
    avail: { content: 
      <div>
        a
      </div>
    },
    futr: { content: 
      <div>
        f
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
      Hi everyone!!
    </footer>
  );
}

export default Footer;
