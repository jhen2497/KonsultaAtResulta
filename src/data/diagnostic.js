import React from "react";

// Assets
import xrayStackImages from "../assets/services-iamges/x-ray-services.jpg";
import labStackImages from "../assets/services-iamges/lab-services.jpg";
import ultraSoundStackImages from "../assets/services-iamges/ultrasound-services.jpg";
import ecgStackImages from "../assets/services-iamges/ecg-services.jpg";

export const diagnosticServices = [
  {
    id: "radiology",
    title: "Radiology",
    image: xrayStackImages,
    description:
      "Our facility provides an easy out-patient oriented accessibility to the needed X-ray views. This will give patients and doctors lesser time to wait for the needed x-ray film results. The ff. are the available x-ray views/shots that can be performed in Konsulta@Resulta.",
    services: [
      { serviceName: "CHEST PA", serviceScope: ["AP-l", "Apicolordotic View"] },
      { serviceName: "ORBITS", serviceScope: ["AP-l"] },
      { serviceName: "UPPER EXTREMITIES", serviceScope: ["Arm", "Forearm", "Wrist Joint", "Hand"] },
      { serviceName: "LOWER EXTREMITIES", serviceScope: ["Knee", "Leg", "Ankle Joint", "Foot"] },
      { serviceName: "SKULL SERIES", serviceScope: ["AP-l", "Townes View", "Water's View"] },
    ],
  },
  {
    id: "laboratory",
    title: "Laboratory",
    image: labStackImages,
    description:
      "We provide outpatient lab tests that can be done and released before the next follow-up consultation.",
    services: [
      {
        serviceName: "HEMATOLOGY",
        serviceScope: [
          "ESR", "Platelet Count", "Peripheral Blood Smear", "Blood Typing",
          "Bleeding Time and Clotting Time", "Complete Blood Count (CBC)"
        ],
      },
      {
        serviceName: "BACTERIOLOGY",
        serviceScope: ["KOH", "Gram Stain (GS)", "AFB (Acid Fast Bacillus) / Sputum Exam", "Culture and Sensitivity (C/S)"],
      },
      {
        serviceName: "CLINICAL CHEMISTRY",
        serviceScope: [
          "HBA1C", "Lipid Profile", "Electrolytes", "Creatinine (CREA)", "Blood Uric Acid (BUA)",
          "Blood Urea Nitrogen (BUN)", "Liver Profile", "Fasting Blood Sugar (FBS)", "Thyroid Function Test"
        ],
      },
      {
        serviceName: "MICROSCOPY",
        serviceScope: ["Complete Urinalysis", "Seminalysis", "Occult Blood", "Fecalysis (Stool Exam)"],
      },
      {
        serviceName: "SEROLOGY/IMMUNOLOGY",
        serviceScope: [
          "RPR/VDRL", "Hepatitis Profile", "HIV Test", "Chikungunya Test", "NS1 Antigen",
          "Dengue Duo", "C 3 Complement", "Tumor Markers", "PSA (Prostate-Specific Antigen)",
          "C-Reactive Protein (CRP)", "Antinuclear Antibody (ANA)", "RH Factor"
        ],
      },
    ],
  },
  {
    id: "ultrasound",
    title: "Ultrasound",
    image: ultraSoundStackImages,
    description:
      "Our ultrasound services provide a comprehensive and reliable service in general ultrasound, obstetric and gynecological scanning. Our doctors are Radiologists with ultrasound training and OBGYN practitioners who are Fetal Medicine and Gynecological ultrasound specialists.",
    services: [
      {
        serviceName: "GENERAL ULTRASOUND",
        serviceScope: [
          "Spleen", "Prostate", "Pelvic", "Chest/Lungs", "Transrectal", "Upper Abdomen",
          "Lower Abdomen", "Whole Abdomen", "HBT (Hepato-Biliary Tree)", "KUB (Kidney and Urinary Bladder)", "Kidney"
        ],
      },
      {
        serviceName: "OB-GYN ULTRASOUND",
        serviceScope: [
          "Transrectal (Female)", "Transvaginal", "Fetal Survey", "Follicle Monitoring",
          "BPS (Biophysical Score)", "Saline Infusion Study", "Pelvic/Transabdominal (Gravid)"
        ],
      },
    ],
  },
  {
    id: "ecg",
    title: "ECG (Echocardiogram)",
    image: ecgStackImages,
    description:
      "Our ECG services offer accurate and reliable heart assessments using advanced echocardiography. Conducted by expert cardiologists, we ensure precise diagnostics for heart health and early detection of cardiovascular conditions.",
    services: [{ serviceName: "Standard 12 lead chest ECG", serviceScope: [] }],
  },
];
