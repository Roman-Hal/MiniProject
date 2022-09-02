import React from 'react'
import { Route, Routes } from "react-router-dom"

import Home from './Home'
import Aboutus from './Aboutus'
import Evaluation from './Evaluation'
import Availability from './Availability'
import Future from './Future'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/future" element={<Future />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </main>
  );
}

export default Main
