import React from 'react';
import '../../src/styles/mainstyle.css';
import Navbar from './NavBar';
import Footer from './Footer';

function Services() {
    return (
        <>
            <Navbar />
            <div id="services">
                <div className="header-container">
                    <h1 className="heading">
                        Services
                    </h1>
                    <p className="header-description">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar tincidunt euismod faucibus nibh a metus vel eu in. Est fermentum gravida malesuada posuere egestas cursus arcu pellentesque.
                    </p>
                </div>

                <div class="center-wrapper">
                    <div class="container">
                        <div class="image-section">
                            <img src="../../src/assets/radiology-img.png" alt="Description" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">RADIOLOGY</h1>
                            <p className="font-color"> Our facility provides an <span className="highlighted-text">easy out-patient oriented accessibility</span> to the needed<span className="highlighted-text"> X-ray views</span>. This will give patients and doctors lesser time to wait for the needed <span className="highlighted-text">x-ray film</span> results. </p>

                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">CHEST PA</h3>
                                </div>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">LOWER EXTREMITES</h3>
                                </div>
                            </div>
                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">UPPER EXTREMITES</h3>
                                </div>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">ORBITS</h3>
                                </div>
                            </div>
                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">SKULL SERIES</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="center-wrapper">
                    <div class="container">
                        <div class="image-section">
                            <img src="../../src/assets/laboratory.png" alt="Description" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">LABORATORY</h1>
                            <p className="font-color"> We provide <span className="highlighted-text">out patient lab tests</span> that can be done and released before the next ff-up consultation. </p>

                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">HEMATOLOGY</h3>
                                </div>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">CLINIC CHEMISTRY</h3>
                                </div>
                            </div>
                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">MICROSCOPY</h3>
                                </div>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">BACTERIOLOGY</h3>
                                </div>
                            </div>
                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">SEROLOGY</h3>
                                </div>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">IMMUNOLOGY</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="center-wrapper">
                    <div class="container">
                        <div class="image-section">
                            <img src="../../src/assets/ultrasound.png" alt="Description" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">ULTRASOUND</h1>
                            <p className="font-color"> Our ultrasound services provides a comprehensive and reliable service in <span className="highlighted-text">general ultrasound, obstetric and gynaecological scanning.</span> Our doctors are Radilogist with ultrasound training and OBGYN practitioners who are Fetal Medicine and Gynaecological ultrasound specialists. </p>

                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">GENERAL ULTRASOUND</h3>
                                </div>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">OB-GYN ULTRASOUND</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="center-wrapper">
                    <div class="container">
                        <div class="image-section">
                            <img src="../../src/assets/Echocardiogram.png" alt="Description" />
                        </div>
                        <div className="text-section">
                            <h1 className="services-text font-color-1 font-weight-700">ECG (ECHOCARDIOGRAM)</h1>
                            <p className="font-color"> Lorem ipsum dolor sit amet consectetur. Orci malesuada elementum pellentesque ullamcorper. Vel morbi venenatis est rhoncus urna. Enim ultrices viverra faucibus nisl purus semper.  </p>

                            <div className="department-grid" style={{ justifyContent: "flex-start" }}>
                                <div className="department-item">
                                    <h3 className="font-color-4 font-weight-900">STANDARD 12 LEAD CHEST ECG</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-container">
                    <h3 className='font-color-2'>Kindly send us your inquries for other tests that are not written above.</h3>
                    <p className='font-color'><span className="highlighted-text">NOTE:</span> There are tests that need special preparations such as <span className="highlighted-text">fasting, time of collection, amount of specimen to be collected, etc.</span> Kindly call through our hotline for specific instructions.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services;