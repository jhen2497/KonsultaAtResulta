import React, { useState } from "react";

// assets
import radialGradient2 from "../../../src/assets/radial-gradient2.png";
import xrayStackImages from "../../assets/services-iamges/x-ray-services.jpg";
import labStackImages from "../../assets/services-iamges/lab-services.jpg";
import ultraSoundStackImages from "../../assets/services-iamges/ultrasound-services.jpg";
import ecgStackImages from "../../assets/services-iamges/ecg-services.jpg";

import Footer from "../Footer";

// for Radiology
const diagnosticRadiology = [
  {
    id: 1,
    serviceName: "CHEST PA",
    serviceScope: [
      { subservice: "AP-l" },
      { subservice: "Apicolordotic View" },
    ],
  },
  {
    id: 2,
    serviceName: "UPPER EXTREMITIES",
    serviceScope: [
      { subservice: "Arm" },
      { subservice: "Forearm" },
      { subservice: "Wrist Joint" },
      { subservice: "Hand" },
    ],
  },
  {
    id: 3,
    serviceName: "LOWER EXTREMITIES",
    serviceScope: [
      { subservice: "Knee" },
      { subservice: "Leg" },
      { subservice: "Ankle Joint" },
      { subservice: "Foot" },
    ],
  },
  {
    id: 4,
    serviceName: "ORBITS",
    serviceScope: [{ subservice: "AP-l" }],
  },
  {
    id: 5,
    serviceName: "SKULL SERIES",
    serviceScope: [
      { subservice: "AP-l" },
      { subservice: "Townes View" },
      { subservice: "Water's View" },
    ],
  },
];

//for Laboratory
const diagnosticLaboratory = [
  {
    id: 6,
    serviceName: "HEMATOLOGY",
    serviceScope: [
      { subservice: "ESR" },
      { subservice: "Platelet Count" },
      { subservice: "Peripheral Blood Smear" },
      { subservice: "Blood Typing" },
      { subservice: "Bleeding Time and Clotting Time" },
      { subservice: "Complete Blood Count (CBC)" },
    ],
  },
  {
    id: 7,
    serviceName: "CLINICAL CHEMISTRY",
    serviceScope: [
      { subservice: "HBA1C" },
      { subservice: "Lipid Profile" },
      { subservice: "Electrolytes" },
      { subservice: "Creatinine (CREA)" },
      { subservice: "Blood Uric Acid (BUA)" },
      { subservice: "Blood Urea Nitrogen (BUN)" },
      { subservice: "Liver Profile (or Liver Function Test)" },
      { subservice: "Fasting Blood Sugar (FBS)" },
      { subservice: "Thyroid Function Test" },
    ],
  },
  {
    id: 8,
    serviceName: "MICROSCOPY",
    serviceScope: [
      { subservice: "Complete Urinalysis" },
      { subservice: "Seminalysis" },
      { subservice: "Occult Blood" },
      { subservice: "Fecalysis (or Stool Exam)" },
    ],
  },
  {
    id: 9,
    serviceName: "BACTERIOLOGY",
    serviceScope: [
      { subservice: "KOH" },
      { subservice: "Gram Stain (GS)" },
      { subservice: "AFB (Acid Fast Bacillus) / Sputum Exam" },
      { subservice: "Culture and Sensitivity (or C/S)" },
    ],
  },
  {
    id: 10,
    serviceName: "SEROLOGY/ IMMUNOLOGY",
    serviceScope: [
      { subservice: "RPR/VDRL" },
      { subservice: "Hepatitis Profile" },
      { subservice: "HIV Test" },
      { subservice: "Chikungunya Test" },
      { subservice: "NS1 Antigent" },
      { subservice: "Dengue Duot" },
      { subservice: "C 3 Complement" },
      { subservice: "Tumor Markers" },
      { subservice: "PSA (Prostate-Specific Antigen)" },
      { subservice: "C-Reactive Protien (CRP)t" },
      { subservice: "Antinuclear Antibobdy (ANA)" },
      { subservice: "RH Factor" },
    ],
  },
];

//for Ultrasound
const diagnosticUltrasound = [
  {
    id: 11,
    serviceName: "GENERAL ULTRASOUND",
    serviceScope: [
      { subservice: "Spleen" },
      { subservice: "Prostate" },
      { subservice: "Pelvic" },
      { subservice: "Chest/Lungs" },
      { subservice: "Transrectal" },
      { subservice: "Upper Abdomen" },
      { subservice: "Lower Abdomen" },
      { subservice: "Whole Abomen" },
      { subservice: "HBT (Hepato- Biliary Tree)" },
      { subservice: "KUB(Kidneyand Urinary Bladder)" },
      { subservice: "Kidney" },
    ],
  },
  {
    id: 12,
    serviceName: "OB-GYN ULTRASOUND",
    serviceScope: [
      { subservice: "Transrectal (Female)" },
      { subservice: "Transvaginal" },
      { subservice: "Fetal Survey" },
      { subservice: "Follicle Monitoring" },
      { subservice: "BPS (Biophysical Score)" },
      { subservice: "Saline Infusion Study" },
      { subservice: "Pelvic/Transabdominal (Gravid)st" },
    ],
  },
];

const diagnosticECG = [
  {
    id: 13,
    serviceName: "Standard 12 lead chest ECG",
    serviceScope: [],
  },
];

const DiagnosticPage = () => {
  const [isShowSubServices, setShowSubServices] = useState(false);
  const [indexToShow, setIndexToShow] = useState(null);

  const openSubServices = (serviceIndex) => {
    if (indexToShow === serviceIndex) {
      setShowSubServices(false);
      setIndexToShow(null);
    } else {
      setShowSubServices(true);
      setIndexToShow(serviceIndex);
    }
  };

  const mouseEnterEventTrigger = (index) => {
    setShowSubServices(!isShowSubServices);
    setIndexToShow(index);
  };

  const mouseLeavedEventTrigger = () => {
    setShowSubServices(false);
    setIndexToShow(null);
  };

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

        <div className="about-us-imgcontainer about-us-imgcontainer-1">
          <img
            src={xrayStackImages}
            alt="xrayStackImages"
            style={{
              maxHeight: "300px",
              maxWidth: "700px",
              borderRadius: "16px",
            }}
          />
          <h1 className="services-text font-color-1">Radiology</h1>
          <p className=" font-color-1">
            Our facility provides an easy out-patient oriented accessibility to
            the needed X-ray views. This will give patients and doctors lesser
            time to wait for the needed x-ray film results. The ff. are the
            available x-ray views/shots that can be performed in
            Konsulta@Resulta
          </p>

          <div className="services-diagnostic-cont">
            {diagnosticRadiology.map((service, serviceIndex) => (
              <div key={service.id} className="services-diag-item">
                <h3 className="font-color-4 font-weight-900">
                  {service.serviceName}
                </h3>
                <div className="sub-services-cont">
                  {service.serviceScope.map((scope, subIndex) => (
                    <p
                      key={subIndex}
                      className="sub-services-item font-color-1"
                    >
                      {scope.subservice}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-us-imgcontainer about-us-imgcontainer-1">
          <img
            src={labStackImages}
            alt="xrayStackImages"
            style={{
              maxHeight: "300px",
              maxWidth: "700px",
              borderRadius: "16px",
            }}
          />
          <h1 className="services-text font-color-1">Laboratory</h1>
          <p className=" font-color-1">
            We provide out patient lab tests that can be done and released
            before the next ff-up consultation
          </p>

          <div className="services-diagnostic-cont">
            {diagnosticLaboratory.map((service, serviceIndex) => (
              <div key={service.id} className="services-diag-item">
                <h3 className="font-color-4 font-weight-900">
                  {service.serviceName}
                </h3>
                <div className="sub-services-cont">
                  {service.serviceScope.map((scope, subIndex) => (
                    <p
                      key={subIndex}
                      className="sub-services-item font-color-1"
                    >
                      {scope.subservice}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-us-imgcontainer about-us-imgcontainer-1">
          <img
            src={ultraSoundStackImages}
            alt="xrayStackImages"
            style={{
              maxHeight: "200px",
              maxWidth: "700px",
              borderRadius: "16px",
            }}
          />
          <h1 className="services-text font-color-1">Ultrasound</h1>
          <p className=" font-color-1">
            Our ultrasound services provides a comprehensive and reliable
            service in general ultrasound, obstetric and gynaecological
            scanning. Our doctors are Radilogist with ultrasound training and
            OBGYN practitioners who are Fetal Medicine and Gynaecological
            ultrasound specialists.
          </p>

          <div className="services-diagnostic-cont">
            {diagnosticUltrasound.map((service, serviceIndex) => (
              <div key={service.id} className="services-diag-item">
                <h3 className="font-color-4 font-weight-900">
                  {service.serviceName}
                </h3>
                <div className="sub-services-cont">
                  {service.serviceScope.map((scope, subIndex) => (
                    <p
                      key={subIndex}
                      className="sub-services-item font-color-1"
                    >
                      {scope.subservice}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-us-imgcontainer about-us-imgcontainer-1">
          <img
            src={ecgStackImages}
            alt="xrayStackImages"
            style={{
              maxHeight: "200px",
              maxWidth: "700px",
              borderRadius: "16px",
            }}
          />
          <h1 className="services-text font-color-1">ECG (Echocardiogram)</h1>
          <p className=" font-color-1">
            Our ECG services offer accurate and reliable heart assessments using
            advanced echocardiography. Conducted by expert cardiologists, we
            ensure precise diagnostics for heart health and early detection of
            cardiovascular conditions.
          </p>

          <div className="services-diagnostic-cont">
            {diagnosticECG.map((service, serviceIndex) => (
              <div key={service.id} className="services-diag-item">
                <h3 className="font-color-4 font-weight-900">
                  {service.serviceName}
                </h3>
                {service.serviceScope.length > 0 && (
                  <div className="sub-services-cont">
                    {service.serviceScope.map((scope, subIndex) => (
                      <p key={subIndex} className="sub-services-item">
                        {scope.subservice}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
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
      <Footer />
    </>
  );
};

export default DiagnosticPage;
