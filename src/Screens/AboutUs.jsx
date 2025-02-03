import React from 'react';
import '../../src/styles/mainstyle.css';
import Navbar from './NavBar';
import Footer from './Footer';

// assets
import radialGradient2 from '../../src/assets/radial-gradient2.png';
import aboutUsImg from '../../src/assets/aboutus-img.png';
import arrowButton from '../../src/assets/arrow-right-icon.png';
import spouseImage from '../../src/assets/spouse-image.png';
import abputUsImg2 from '../../src/assets/aboutus-img-2.png';
import coloredLogo from '../../src/assets/colored-logo.png';


// HOMs logo
import aaInternational from '../assets/aa-international.png';
import asianlife from '../assets/asianlife.png';
import cocolife from '../assets/cocolife.png';
import eastwest from '../assets/eastwest.png';
import avega from '../assets/avega.png';
import intellicare from '../assets/intellicare.png';
import kaiser from '../assets/kaiser.png';
import maxicare from '../assets/maxicare.png';
import medicard from '../assets/medicard.png';
import medocare from '../assets/medocare.png';
import hmi from '../assets/hmi.png';
import philcare from '../assets/philcare.png';
import valucare from '../assets/valucare.png';
import generali from '../assets/generali.png';

function AboutUs() {
    return (
        <>
            {/* <Navbar /> */}
            <div id="about-us" className="about-us-container">
                <img className='radial-gradient2' src={radialGradient2} alt="" />
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
                        <img className="arrow-button-2" src={arrowButton} alt="arrow button" />
                        <img src={aboutUsImg} alt='about us' />
                    </div>
                </div>
                <div className="about-us">
                    <p style={{ textAlign: "justify" }}>With its vasts quality medical services namely specialty consulations, laboratory tests, ECG, XRAY and even General and OB-GYN Diagnostic sonography (ultrasound) at a low, affordable and cost effective package prices. Also, consultants who would wish to be part of the KR team may be given slots to hold clinic during their preferred time.</p>
                </div>
                <div className="about-us">
                    <div className="about-spouse">
                        <img src={spouseImage} alt="aboutusimg" />
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
                        <img src={abputUsImg2} alt="aboutusimg" />
                    </div>
                </div>
                <div className="about-us" style={{ marginTop: 30, marginBottom: 30 }}>
                    <p style={{ textAlign: "left" }}>It also has accreditations in <span className="highlighted-text">more than fifteen HMO's</span> making it one of the most sought after clinic for people who would want comfortability with their treatment with an excellent doctor-patient relationship just like what every patient would wish for as they go for a consult.</p>
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
                <div className="logo-container">
                    <div className="logo">
                        <img src={coloredLogo} alt="KonsultaMD" />
                    </div>
                </div>
                
            </div >
            <Footer />
        </>

    );
}

export default AboutUs;
