import React from "react";
import "../../src/styles/mainstyle.css";
import Navbar from "./NavBar";
import Footer from "./Footer";

// images
import arrorButton from "../../src/assets/arrow-right-icon.png";
import aboutUsImg from "../../src/assets/about-us-img.png";
import servicesImg1 from "../../src/assets/services-img-1.png";
import servicesImg2 from "../../src/assets/services-img-2.png";
import servicesimg3 from "../../src/assets/services-img-3.png";
import pediatricsIcon from "../../src/assets/pediatrics-icon.png";
import opthalmology from "../../src/assets/opthalmology-icon.png";
import internalMedicine from "../../src/assets/pediatrics-icon.png";
import obgyn from "../../src/assets/ob-gyn-icon.png";
import sonology from "../../src/assets/sonology-icon.png";
import radioSonology from "../../src/assets/radio-sonology-icon.png";
import surgery from "../../src/assets/surgery-icon.png";
import urology from "../../src/assets/urology-icon.png";
import dermatology from "../../src/assets/dermatology-icon.png";
import ent from "../../src/assets/ent-icon.png";

// HOMs logo
import aaInternational from "../assets/aa-international.png";
import asianlife from "../assets/asianlife.png";
import cocolife from "../assets/cocolife.png";
import eastwest from "../assets/eastwest.png";
import avega from "../assets/avega.png";
import intellicare from "../assets/intellicare.png";
import kaiser from "../assets/kaiser.png";
import maxicare from "../assets/maxicare.png";
import medicard from "../assets/medicard.png";
import medocare from "../assets/medocare.png";
import hmi from "../assets/hmi.png";
import philcare from "../assets/philcare.png";
import valucare from "../assets/valucare.png";
import generali from "../assets/generali.png";

function LandingPage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="home">
        <h3>We take care of</h3>
        <h1>Your Health!</h1>
        <img
          className="arrow-button-home"
          src={arrorButton}
          alt="arrow button"
        />
      </div>
      <div className="about-us" style={{ marginTop: 50 }}>
        <div className="about-us-text">
          <h3>ABOUT US</h3>
          <h1>
            Offering affordable healthcare and flexible options for consultants
          </h1>
          <p>
            We offer affordable specialty consultations, lab tests, ECG, X-rays,
            and ultrasound services, and also provide flexible clinic slots for
            consultants.
          </p>
        </div>
        <div className="about-us-image">
          <img src={aboutUsImg} alt="aboutusimg" />
        </div>
      </div>
      <div class="logo-slider">
        <div class="logos-wrapper">
          <div class="logos">
            <img src={aaInternational} alt="logo" />
            <img src={asianlife} alt="logo" />
            <img src={cocolife} alt="logo" />
            <img src={eastwest} alt="logo" />
            <img src={avega} alt="logo" />
            <img src={intellicare} alt="logo" />
            <img src={kaiser} alt="logo" />
            <img src={maxicare} alt="logo" />
            <img src={medicard} alt="logo" />
            <img src={medocare} alt="logo" />
            <img src={hmi} alt="logo" />
            <img src={philcare} alt="logo" />
            <img src={valucare} alt="logo" />
            <img src={generali} alt="logo" />
          </div>
          <div class="logos">
            <img src={aaInternational} alt="logo" />
            <img src={asianlife} alt="logo" />
            <img src={cocolife} alt="logo" />
            <img src={eastwest} alt="logo" />
            <img src={avega} alt="logo" />
            <img src={intellicare} alt="logo" />
            <img src={kaiser} alt="logo" />
            <img src={maxicare} alt="logo" />
            <img src={medicard} alt="logo" />
            <img src={medocare} alt="logo" />
            <img src={hmi} alt="logo" />
            <img src={philcare} alt="logo" />
            <img src={valucare} alt="logo" />
            <img src={generali} alt="logo" />
          </div>
        </div>
      </div>
      <div className="services">
        <h3>OUR SERVICES</h3>
        <h1>Lorem ipsum dolor</h1>
        <div className="services-column">
          <div className="services-img">
            <div className="image-overlay">
              <img src={servicesImg1} alt="services" />
              <div className="overlay-text">DIAGNOSTIC</div>
              <img
                className="arrow-button"
                src={arrorButton}
                alt="arrow button"
              />
            </div>
          </div>
          <div className="services-img">
            <div className="image-overlay">
              <img src={servicesImg2} alt="services" />
              <div className="overlay-text">SPECIALTY CONSULTATION</div>
              <img
                className="arrow-button"
                src={arrorButton}
                alt="arrow button"
              />
            </div>
          </div>
          <div className="services-img">
            <div className="image-overlay">
              <img src={servicesimg3} alt="services" />
              <div className="overlay-text">CLINIC SLOTS</div>
              <img
                className="arrow-button"
                src={arrorButton}
                alt="arrow button"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="department">
        <h3>OUR DEPARTMENTS</h3>
        <h1>Lorem ipsum dolor</h1>
        <div className="department-grid">
          <div className="department-item">
            <img src={pediatricsIcon} alt="Icon 1" />
            <p>Pediatrics</p>
          </div>
          <div className="department-item">
            <img src={opthalmology} alt="Icon 2" />
            <p>Opthalmology</p>
          </div>
          <div className="department-item">
            <img src={internalMedicine} alt="Icon 3" />
            <p>Internal Medicine</p>
          </div>
          <div className="department-item">
            <img src={obgyn} alt="Icon 1" />
            <p>OB-GYN</p>
          </div>
          <div className="department-item">
            <img src={sonology} alt="Icon 2" />
            <p>OB-Sonology</p>
          </div>
          <div className="department-item">
            <img src={radioSonology} alt="Icon 3" />
            <p>Radio Sonology</p>
          </div>
          <div className="department-item">
            <img src={surgery} alt="Icon 1" />
            <p>Surgery</p>
          </div>
          <div className="department-item">
            <img src={urology} alt="Icon 2" />
            <p>Urology</p>
          </div>
          <div className="department-item">
            <img src={dermatology} alt="Icon 3" />
            <p>Dermatology</p>
          </div>
          <div className="department-item">
            <img src={ent} alt="Icon 1" />
            <p>ENT</p>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default LandingPage;
