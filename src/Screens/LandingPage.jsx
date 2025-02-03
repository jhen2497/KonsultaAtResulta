import React from 'react';
import '../../src/styles/mainstyle.css';
import Navbar from './NavBar';
import Footer from './Footer';

// images
import arrorButton from '../../src/assets/arrow-right-icon.png';

function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="home">
                <h3>We take care of</h3>
                <h1>Your Health!</h1>
                <img className="arrow-button-home" src={arrorButton} alt="arrow button" />
            </div>
            <div className="about-us" style={{ marginTop: 50 }}>
                <div className="about-us-text">
                    <h3>ABOUT US</h3>
                    <h1>Offering affordable healthcare and flexible options for consultants</h1>
                    <p>We offer affordable specialty consultations, lab tests, ECG, X-rays, and ultrasound services, and also provide flexible clinic slots for consultants.</p>
                </div>
                <div className="about-us-image">
                    <img src={'./../src/assets/about-us-img.png'} alt="aboutusimg" />
                </div>
            </div>
            {/* <div class="logo-slider">
                <div class="logos-wrapper">
                    <div class="logos">
                        <img src="../../src/assets/aa-international.png" alt="logo" />
                        <img src="../../src/assets/asianlife.png" alt="logo" />
                        <img src="../../src/assets/cocolife.png" alt="logo" />
                        <img src="../../src/assets/eastwest.png" alt="logo" />
                        <img src="../../src/assets/avega.png" alt="logo" />
                        <img src="../../src/assets/intellicare.png" alt="logo" />
                        <img src="../../src/assets/kaiser.png" alt=" logo" />
                        <img src="../../src/assets/maxicare.png" alt=" logo" />
                        <img src="../../src/assets/medicard.png" alt=" logo" />
                        <img src="../../src/assets/medocare.png" alt=" logo" />
                        <img src="../../src/assets/hmi.png" alt=" logo" />
                        <img src="../../src/assets/philcare.png" alt=" logo" />
                        <img src="../../src/assets/valucare.png" alt=" logo" />
                        <img src="../../src/assets/medicard.png" alt=" logo" />
                        <img src="../../src/assets/generali.png" alt=" logo" />
                    </div>
                </div>
            </div> */}
            <div className="services">
                <h3>OUR SERVICES</h3>
                <h1>Lorem ipsum dolor</h1>
                <div className="services-column">
                    <div className="services-img">
                        <div className="image-overlay">
                            <img src={'./../src/assets/services-img-1.png'} alt="services" />
                            <div className="overlay-text">DIAGNOSITICS</div>
                            <img className="arrow-button" src={'./../src/assets/arrow-right-icon.png'} alt="arrow button" />
                        </div>
                    </div>
                    <div className="services-img">
                        <div className="image-overlay">
                            <img src={'./../src/assets/services-img-2.png'} alt="services" />
                            <div className="overlay-text">SPECIALTY CONSULTATION</div>
                            <img className="arrow-button" src={'./../src/assets/arrow-right-icon.png'} alt="arrow button" />
                        </div>
                    </div>
                    <div className="services-img">
                        <div className="image-overlay">
                            <img src={'./../src/assets/services-img-3.png'} alt="services" />
                            <div className="overlay-text">CLINIC SPACES</div>
                            <img className="arrow-button" src={'./../src/assets/arrow-right-icon.png'} alt="arrow button" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="department">
                <h3>OUR DEPARTMENTS</h3>
                <h1>Lorem ipsum dolor</h1>
                <div className="department-grid">
                    <div className="department-item">
                        <img src={'./../src/assets/pediatrics-icon.png'} alt="Icon 1" />
                        <p>Pediatrics</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/opthalmology-icon.png'} alt="Icon 2" />
                        <p>Opthalmology</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/internal-medicine-icon.png'} alt="Icon 3" />
                        <p>Internal Medicine</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/ob-gyn-icon.png'} alt="Icon 1" />
                        <p>OB-GYN</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/sonology-icon.png'} alt="Icon 2" />
                        <p>OB-Sonology</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/radio-sonology-icon.png'} alt="Icon 3" />
                        <p>Radio Sonology</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/surgery-icon.png'} alt="Icon 1" />
                        <p>Surgery</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/urology-icon.png'} alt="Icon 2" />
                        <p>Urology</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/dermatology-icon.png'} alt="Icon 3" />
                        <p>Dermatology</p>
                    </div>
                    <div className="department-item">
                        <img src={'./../src/assets/ent-icon.png'} alt="Icon 1" />
                        <p>ENT</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;