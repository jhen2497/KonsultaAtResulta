import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/mainstyle.css";
import Navbar from "./Screens/NavBar.jsx";
import Footer from "./Screens/Footer.jsx";
import LandingPage from "./Screens/LandingPage.jsx";
import AboutUs from "./Screens/AboutUs.jsx";
import Services from "./Screens/Services.jsx";
import HMOs from "./Screens/HMOs.jsx";
import Pricing from "./Screens/ServicesPage/Pricing.jsx";
import ContactUs from "./Screens/ContactUs.jsx";
import Physicians from "./Screens/Physicians.jsx";
import DiagnosticPage from "./Screens/ServicesPage/DiagnosticPage.jsx";
import ClinicSlots from "./Screens/ServicesPage/ClinicSlots.jsx";

// utils
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hmos" element={<HMOs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/physicians" element={<Physicians />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Pages Under Services */}

        <Route path="/services/diagnostic" element={<DiagnosticPage />} />
        <Route path="/services/special-consult" element={<Physicians />} />
        <Route path="/services/clinic-slots" element={<ClinicSlots />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
