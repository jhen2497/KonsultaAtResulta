import React from "react";
import "../../src/styles/mainstyle.css";

// assets
import radialGradient2 from "../../src/assets/radial-gradient2.png";
import aboutUsImg from "../../src/assets/aboutus-img.png";
import arrowButton from "../../src/assets/arrow-right-icon.png";
import spouseImage from "../../src/assets/spouse-image.png";
import abputUsImg2 from "../../src/assets/aboutus-img-2.png";
import coloredLogo from "../../src/assets/colored-logo.png";

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

function AboutUs() {
  return (
    <>
      <div id="about-us" className="about-us-container">
        <img className="radial-gradient2" src={radialGradient2} alt="" />
        <div className="header-container">
          <h1 className="heading">About Us</h1>
          <p className="header-description">
            If you're looking for a multispecialty clinic in the heart of Stop
            and Shop along the Sta. Mesa area,{" "}
            <span className="highlighted-text">
              {" "}
              Konsulta @ Resulta Medical Clinic & Laboratory
            </span>{" "}
            is a destination you can't miss.
          </p>
        </div>
        <div className="about-us-imgcontainer">
          <div className="image-overlay-2">
            <h1 className="overlay-text-2">
              {" "}
              <span className="font-weight-300">Our</span> <br />
              DOCTORS
            </h1>
            <img
              className="arrow-button-2"
              src={arrowButton}
              alt="arrow button"
            />
            <img src={aboutUsImg} alt="about us" />
          </div>
        </div>
        <div className="about-us">
          <p style={{ textAlign: "justify" }}>
            Offering a wide range of quality medical services, including
            specialty consultations, laboratory tests, 2D Echo, ECG, X-ray, and
            General and OB-GYN diagnostic sonography (ultrasound),{" "}
            <span className="highlighted-text">
              Konsulta @ Resulta Medical Clinic & Laboratory
            </span>{" "}
            provides affordable and cost-effective packages. Additionally,
            consultants interested in joining the KR team have the opportunity
            to secure clinic slots at their preferred schedules.
          </p>
        </div>
        <div className="about-us about-us-1">
          <div className="about-us about-us-part-1">
            <div className="about-us">
              <div className="about-spouse">
                <img src={spouseImage} alt="aboutusimg" />
                <div className="spouseMaleContainer">
                  <p style={{ color: "white" }}>Dr. Randy</p>
                  <h1 id="spouse-male">Limon</h1>
                </div>
                <div className="spouseFemaleContainer">
                  <p style={{ color: "white" }}>Dr. Marites</p>
                  <h1 id="spouse-female">Cong-Limon</h1>
                </div>
                <p className="spouses-text">SPOUSES</p>
              </div>
              <div className="about-us-text about-us-part-1">
                <p>
                  In early <span className="highlighted-text">2008</span>,
                  spouses{" "}
                  <span className="highlighted-text">Dr. Randy Limon </span>
                  and{" "}
                  <span className="highlighted-text">
                    Dr. Marites Cong-Limon
                  </span>{" "}
                  envisioned establishing their own clinic without the burden of
                  high-premium hospital clinic fees. These expenses often placed
                  a significant financial strain on them, as well as on their
                  parents, who had to make sacrifices just to cover the
                  necessary costs.
                </p>
              </div>
            </div>

            <div className="about-us-part-2">
              <p>
                Understanding that many of their colleagues faced similar
                challenges in starting their medical careers, the couple sought
                to create a more sustainable and accessible alternative. This
                led them to establish a self-sustaining clinic model that
                eliminated the need for investment stock or Right to Practice
                (RTP) fees, thereby easing the financial burden not only for
                themselves but also for other aspiring doctors. Their initiative
                aimed to provide an opportunity for early-career medical
                professionals to begin their practice without the constraints
                typically associated with hospital-based clinics.
              </p>
              <p style={{ marginTop: "3rem" }}>
                With this vision in mind, Konsulta @ Resulta was born—a
                pioneering clinic designed to serve as a launching pad for new
                doctors, enabling them to showcase their specialties and build
                their careers in a more financially manageable and independent
                manner.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-image-2">
          <div className="image-overlay-2">
            <div className="overlay-text-3">
              <span className="font-weight-300">
                {" "}
                <span className="font-weight-700">Today,</span> the clinic
                caters <br /> <span className="font-weight-700">seven</span>{" "}
                different{" "}
                <span className="font-weight-700">
                  {" "}
                  fields of <br />
                  specialty.
                </span>
              </span>
            </div>
            <img src={abputUsImg2} alt="aboutusimg" />
          </div>
        </div>
        <div className="about-us" style={{ marginTop: 30, marginBottom: 30 }}>
          <p style={{ textAlign: "left" }}>
            Accredited by{" "}
            <span className="highlighted-text">over fifteen HMOs</span>,
            Konsulta @ Resulta Medical Clinic & Laboratory is a trusted choice
            for patients seeking quality healthcare. It provides a comfortable
            treatment experience while promoting a strong doctor-patient
            relationship, ensuring that every patient receives the attentive and
            compassionate care they deserve.
          </p>
        </div>
        <div className="logo-slider">
          <div className="logos-wrapper">
            <div className="logos">
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
            <div className="logos">
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
        <div className="logo-container">
          <div className="logo">
            <img src={coloredLogo} alt="KonsultaMD" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
