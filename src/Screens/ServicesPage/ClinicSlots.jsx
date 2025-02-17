import React from "react";

// assets
import radialGradient2 from "../../assets/radial-gradient2.png";
import clinicStackImages from "../../assets/services-iamges/clinic-slots.jpg";

const ClinicSlots = () => {
  return (
    <>
      <div id="about-us" className="about-us-container">
        <img className="radial-gradient2" src={radialGradient2} alt="" />
        <div className="header-container">
          <h1 className="heading">Clinic Slots</h1>
          <p className="header-description">
            Our Clinic Slot service provides healthcare professionals with a
            fully equipped and well-maintained environment to deliver
            high-quality patient care. Whether you’re a visiting specialist or
            require a flexible consultation area, our clinic spaces are tailored
            for convenience and efficiency
          </p>
        </div>
        <div className="about-us-imgcontainer">
          <img
            src={clinicStackImages}
            alt="xrayStackImages"
            style={{
              maxHeight: "300px",
              maxWidth: "700px",
              borderRadius: "16px",
            }}
          />
          <p className="font-color-1">
            <span className="highlighted-text">Konsulta@Resulta</span> is
            goffering P150.00/hour of clinic{" "}
            <span className="highlighted-text">space slots</span> located in
            highly commercialize place in Sta. Mesa Manila
          </p>

          <h1 className="clinic-slots-header font-color-1">IT INCLUDES</h1>
          <ul className="clinic-slots-benefits font-color-4">
            <li>NURSE SECRETARY</li>
            <li>ELECTRICITY FEE (AIRCONDITIONING)</li>
            <li>FREE DRINKING WATER</li>
            <li>FREE USE OF COMPUTER AND PRINTER</li>
            <li>FREE USE OF TELEPHONE</li>
            <li>FREE PARKING FOR YOU AND YOUR PATIENTS</li>
            <li>YOU WILL ALSO BE ACCREDITED IMMEDIATELY BY OUR HMO'S</li>
          </ul>
        </div>
        <div className="clinic-slots-text-container">
          <p className="font-color">
            For inquiries regarding available slots or to request for an
            appointment{" "}
            <span className="highlighted-text">
              <a href="/contact-us">Contact Us</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ClinicSlots;
