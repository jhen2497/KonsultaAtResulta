import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/mainstyle.css';
import Navbar from "./Screens/NavBar.jsx";
import LandingPage from "./Screens/LandingPage.jsx";
import AboutUs from "./Screens/AboutUs.jsx";
import Footer from "./Screens/Footer.jsx";
import Services from "./Screens/Services.jsx";
import Department from "./Screens/Department.jsx";
import HMOs from "./Screens/HMOs.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/hmos' element={<HMOs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
