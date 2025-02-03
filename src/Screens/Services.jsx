import React from 'react';
import '../styles/mainstyle.css';
import Navbar from './NavBar';
import Footer from './Footer';

// Import images correctly
import radialGradient2 from '../assets/radial-gradient2.png';
import radiologyImg from '../assets/radiology-img.png';
import laboratoryImg from '../assets/laboratory.png';
import ultrasoundImg from '../assets/ultrasound.png';
import echocardiogramImg from '../assets/Echocardiogram.png';

function Services() {
    return (
        <>
            {/* <Navbar /> */}
            <div id="services">
                <img className='radial-gradient2' src={radialGradient2} alt="" />
                <div className="header-container">
                    <h1 className="heading">Services</h1>
                    <p className="header-description">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar tincidunt euismod faucibus nibh a metus vel eu in. Est fermentum gravida malesuada posuere egestas cursus arcu pellentesque.
                    </p>
                </div>

                <div className="center-wrapper">
                    <div className="container">
                        <div className="image-section">
                            <img src={radiologyImg} alt="Radiology" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">RADIOLOGY</h1>
                            <p className="font-color"> Our facility provides an <span className="highlighted-text">easy out-patient oriented accessibility</span> to the needed <span className="highlighted-text">X-ray views</span>. This will give patients and doctors lesser time to wait for the needed <span className="highlighted-text">x-ray film</span> results. </p>

                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">CHEST PA</h3>
                                </div>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">LOWER EXTREMITIES</h3>
                                </div>
                            </div>
                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">UPPER EXTREMITIES</h3>
                                </div>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">ORBITS</h3>
                                </div>
                            </div>
                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">SKULL SERIES</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-wrapper">
                    <div className="container">
                        <div className="image-section">
                            <img src={laboratoryImg} alt="Laboratory" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">LABORATORY</h1>
                            <p className="font-color"> We provide <span className="highlighted-text">out-patient lab tests</span> that can be done and released before the next follow-up consultation. </p>

                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">HEMATOLOGY</h3>
                                </div>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">CLINICAL CHEMISTRY</h3>
                                </div>
                            </div>
                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">MICROSCOPY</h3>
                                </div>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">BACTERIOLOGY</h3>
                                </div>
                            </div>
                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">SEROLOGY</h3>
                                </div>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">IMMUNOLOGY</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-wrapper">
                    <div className="container">
                        <div className="image-section">
                            <img src={ultrasoundImg} alt="Ultrasound" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">ULTRASOUND</h1>
                            <p className="font-color"> Our ultrasound services provide a comprehensive and reliable service in <span className="highlighted-text">general ultrasound, obstetric, and gynecological scanning.</span> Our doctors are radiologists with ultrasound training and OBGYN practitioners who are Fetal Medicine and Gynecological ultrasound specialists. </p>

                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">GENERAL ULTRASOUND</h3>
                                </div>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">OB-GYN ULTRASOUND</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center-wrapper">
                    <div className="container">
                        <div className="image-section">
                            <img src={echocardiogramImg} alt="Echocardiogram" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">ECG (ECHOCARDIOGRAM)</h1>
                            <p className="font-color"> Lorem ipsum dolor sit amet consectetur. Orci malesuada elementum pellentesque ullamcorper. Vel morbi venenatis est rhoncus urna. Enim ultrices viverra faucibus nisl purus semper. </p>

                            <div className="services-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="services-item">
                                    <h3 className="font-color-4 font-weight-900">STANDARD 12 LEAD CHEST ECG</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-container">
                    <h3 className='font-color-2'>Kindly send us your inquiries for other tests that are not written above.</h3>
                    <p className='font-color'><span className="highlighted-text">NOTE:</span> There are tests that need special preparations such as <span className="highlighted-text">fasting, time of collection, amount of specimen to be collected, etc.</span> Kindly call through our hotline for specific instructions.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Services;
