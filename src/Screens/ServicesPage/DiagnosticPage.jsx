import React from "react";

// data
import { diagnosticServices } from "../../data/diagnostic";

// assets
import radialGradient2 from "../../../src/assets/radial-gradient2.png";
import DiagnosticServiceSection from "../../components/DiagnosticServiceSection";

const DiagnosticPage = () => {
  return (
    <>
      <div className="about-us-container">
        <img className="radial-gradient2" src={radialGradient2} alt="" />
        <div className="header-container">
          <h1 className="heading">Diagnostic</h1>
          <p className="header-description">
            Our Diagnostic Services are designed to provide reliable and prompt
            results that support effective medical decision-making. By
            leveraging advanced technology and accurate testing methods, we help
            in detecting, monitoring, and preventing a wide range of health
            conditions.
          </p>
        </div>

        {diagnosticServices.map((service) => (
          <DiagnosticServiceSection key={service.id} {...service} />
        ))}

        <div className="text-container">
          <h3 className="font-color-2">
            Kindly send us your inquiries for other tests that are not written
            above.
          </h3>
          <p className="font-color">
            <span className="highlighted-text">NOTE:</span> There are tests that
            need special preparations such as{" "}
            <span className="highlighted-text">
              fasting, time of collection, amount of specimen to be collected,
              etc.
            </span>{" "}
            Kindly call through our hotline for specific instructions.
          </p>
        </div>
      </div>
    </>
  );
};

export default DiagnosticPage;
