import React from "react";
import "../../src/styles/mainstyle.css";

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

function HMOs() {
  return (
    <>
      {/* <Navbar /> */}
      <div id="hmos">
        {/* <img className='radial-gradient2' src={'./../src/assets/radial-gradient2.png'} alt="" />    */}
        <div className="header-container">
          <h1 className="heading">HMOs</h1>
          <p className="header-description">
            HMOs offer affordable and structured healthcare solutions, making
            them a popular choice for individuals and families looking for
            comprehensive medical coverage.
          </p>
        </div>
        <div className="hmo-container">
          <div className="image-grid">
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
    </>
  );
}

export default HMOs;
