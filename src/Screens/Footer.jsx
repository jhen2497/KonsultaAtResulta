import React from "react";
import "../../src/styles/mainstyle.css";

// assets
import whiteLogo from "../../src/assets/white-logo.png";
import fbIcon from "../../src/assets/fb-icon.png";
import twitterIcon from "../../src/assets/twitter-icon.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={whiteLogo} alt="Logo" className="logo" />
          </div>
          <div className="footer-icons">
            <img src={fbIcon} alt="Facebook" className="social-icon" />
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-content">
          <div className="footer-section">
            <h2>Visit Us</h2>
            <p>
              2nd Floor Newton Plaza Building, 4408 Old Sta. Mesa Street, Sta.
              Mesa, Manila City, 1016, Metro Manila
            </p>
          </div>
          <div className="footer-section">
            <h2>Call Us</h2>
            <p>
              Tel: (02) 713 9229 <br />
              Cel: 0917 510 1525
            </p>
          </div>
          <div className="footer-section">
            <h2>Get in Touch</h2>
            <a href="mailto:info@konsultaatresulta.com">
              info@konsultaatresulta.com
            </a>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <h3>© 2025 KonsultaAtResulta</h3>
        <p>Medical Clinic and Laboratory</p>
      </div>
    </div>
  );
}

export default Footer;
