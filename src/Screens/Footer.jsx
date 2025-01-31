import React from 'react';
import '../../src/styles/mainstyle.css';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="../../src/assets/white-logo.png" alt="Logo" className="logo" />
                    </div>
                    <div className="footer-icons">
                        <img src="../../src/assets/fb-icon.png" alt="Facebook" className="social-icon" />
                        <img src="../../src/assets/twitter-icon.png" alt="Twitter" className="social-icon" />
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-content">
                    <div className='footer-section'>
                        <h2>Visit Us</h2>
                        <p>2nd Floor Newton Plaza Building, 4408 Old Sta. Mesa Street, Sta. Mesa, Manila City, 1000, Metro Manila</p>
                    </div>
                    <div className='footer-section'>
                        <h2>Call Us</h2>
                        <p>Tel: (02) 713 9229 <br />Cel: 0917 510 1525</p>
                    </div>
                    <div className='footer-section'>
                        <h2>Get in Touch</h2>
                        <a href="mailto:info@konsultaatresulta.com">info@konsultaatresulta.com</a>
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
