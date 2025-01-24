import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/mainstyle.css';
import Navbar from "./Screens/NavBar.jsx";
import LandingPage from "./Screens/LandingPage.jsx";
import AboutUs from "./Screens/AboutUs.jsx";
import Services from "./Screens/Services.jsx";
import HMOs from "./Screens/HMOs.jsx";
import ContactUs from "./Screens/ContactUs.jsx";
import Physicians from "./Screens/Physicians.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/hmos' element={<HMOs />} />
        <Route path='/physicians' element={<Physicians />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
