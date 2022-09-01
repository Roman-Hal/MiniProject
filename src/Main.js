import React from 'react'
import { Route, Routes } from "react-router-dom"

import Home from './Home'
import Aboutus from './Aboutus'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      test
    </main>
  );
}

export default Main
