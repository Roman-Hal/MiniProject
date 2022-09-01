import React from "react";
import { Route, Routes } from "react-router-dom"

import Footer from "./Footer";
import NavBar from "./NavBar";
import Main from "./Main";

import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />   
      <Main />   
      <Footer />
    </div>
  );
}

export default App;
