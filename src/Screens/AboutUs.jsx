import React from 'react';
import '../../src/styles/mainstyle.css';
import Navbar from './NavBar';
import Footer from './Footer';

function AboutUs() {
    return (
        <>
            {/* <Navbar /> */}
            <div id="about-us" className="about-us-container">
                <img className='radial-gradient2' src={'./../src/assets/radial-gradient2.png'} alt="" />
                <div className="header-container">
                    <h1 className="heading">
                        About Us
                    </h1>
                    <p className="header-description">
                        Looking for a multispecialty clinic right in the heart of Stop and Shop along Sta. Mesa area, one can surely not miss
                        <span className="highlighted-text"> Konsulta @ Resulta Medical Clinic & Laboratory.</span>
                    </p>
                </div>
                <div className='about-us-imgcontainer'>
                    <div className="image-overlay-2">
                        <h1 className="overlay-text-2"> <span className="font-weight-300">Our</span> <br />DOCTORS</h1>
                        <img className="arrow-button-2" src={'./../src/assets/arrow-right-icon.png'} alt="arrow button" />
                        <img src={'../../src/assets/aboutus-img.png'} alt='about us' />
                    </div>
                </div>
                <div className="about-us">
                    <p style={{ textAlign: "justify" }}>With its vasts quality medical services namely specialty consulations, laboratory tests, ECG, XRAY and even General and OB-GYN Diagnostic sonography (ultrasound) at a low, affordable and cost effective package prices. Also, consultants who would wish to be part of the KR team may be given slots to hold clinic during their preferred time.</p>
                </div>
                <div className="about-us">
                    <div className="about-spouse">
                        <img src={'./../src/assets/spouse-image.png'} alt="aboutusimg" />
                        <div className="spouseMaleContainer">
                            <p style={{color: "white"}}>Dr. Randy</p>
                            <h1 id="spouse-male">Limon</h1>
                        </div>
                        <div className="spouseFemaleContainer">
                            <p style={{color: "white"}}>Dr. Marites</p>
                            <h1 id="spouse-female">Cong-Limon</h1>
                        </div>
                        <p className='spouses-text'>SPOUSES</p>
                    </div>
                    <div className="about-us-text">
                        <p>It was during early <span className="highlighted-text">2008</span> when <span className="highlighted-text">spouses Dr. Randy Limon</span> and <span className="highlighted-text">Dr. Marites Cong-Limon</span> thought of putting up a clinic that only requires a monthly rental. Responding to similar concerns from colleagues, the couple created a self-sustaining clinic that eliminated the need for investment stock or RTP (Right to Practice) fees, easing the financial burden for new physicians starting their careers.</p>
                        <p>Such budget may most of the time be a burden to them especially to their parents who will have to sacrifice just to produce the needed amount. Hence, the birth of <span className="highlighted-text">Konsulta @ Resulta.</span> </p>
                    </div>
                </div>
                <div className="about-us-image-2">
                    <div className="image-overlay-2">
                        <div className="overlay-text-3">
                            <span className="font-weight-300"> <span className="font-weight-700">Today,</span> the clinic caters <br /> <span className="font-weight-700">seven</span> different <span className="font-weight-700"> fields of  <br />specialty.</span></span>
                        </div>
                        <img src={'./../src/assets/aboutus-img-2.png'} alt="aboutusimg" />
                    </div>
                </div>
                <div className="about-us" style={{ marginTop: 30, marginBottom: 30 }}>
                    <p style={{ textAlign: "left" }}>It also has accreditations in <span className="highlighted-text">more than fifteen HMO's</span> making it one of the most sought after clinic for people who would want comfortability with their treatment with an excellent doctor-patient relationship just like what every patient would wish for as they go for a consult.</p>
                </div>
                <div class="logo-slider">
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
                </div>
                <div className="logo-container">
                    <div className="logo">
                        <img src={'../../src/assets/colored-logo.png'} alt="KonsultaMD" />
                    </div>
                </div>
                
            </div >
            <Footer />
        </>

    );
}

export default AboutUs;
