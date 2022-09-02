import React from 'react';
import { useLocation } from 'react-router-dom';
import "./App.css";

const Footer = () => {
  const path = useLocation().pathname;

  const data = {
    home: { text: "This is the home page" },
    eval: { text: "e" },
    avail: { text: "a" },
    futr: { text: "f" },
    abtus: { text: "t" }
  };

  let footerContent = "";

  switch (path) {
    case "/":
      footerContent = data.home.text;
      break;
    case "/evaluation":
      footerContent = data.eval.text;
      break;
    case "/availability":
      footerContent = data.avail.text;
      break;
    case "/future":
      footerContent = data.futr.text;
      break;
    case "/aboutus":
      footerContent = data.abtus.text;
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
