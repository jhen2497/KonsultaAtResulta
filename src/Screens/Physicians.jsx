import React from "react";
import "../../src/styles/mainstyle.css";
import Footer from "./Footer";
import Navbar from "./NavBar";

import maritesLimon from "../assets/physicians-images/marites-limon.png";
import appleTan from "../assets/physicians-images/apple-tan.png";
import cliveOrtanez from "../assets/physicians-images/clive-ortanez.png";
import yvonneRepollo from "../assets/physicians-images/yvonne-repollo.png";
import maryPacencia from "../assets/physicians-images/mary-pacencia.png";
import lilibethGarcia from "../assets/physicians-images/lilibeth-garcia.png";
import leonoraBangayan from "../assets/physicians-images/leonora-bangayan.png";
import randyLimon from "../assets/physicians-images/randy-limon.png";
import warrenDemesa from "../assets/physicians-images/warren-demesa.png";
import allenMarquez from "../assets/physicians-images/allen-marquez.png";
import juanGonzales from "../assets/physicians-images/juan-gonzales.png";
import murielBuco from "../assets/physicians-images/muriel-buco.png";
import cherylBlaza from "../assets/physicians-images/cheryl-blaza.png";
import karpalSingh from "../assets/physicians-images/karpal-singh.png";
import kriseldaTan from "../assets/physicians-images/kriselda-tan.png";
import genieLumen from "../assets/physicians-images/genie-lumen.png";
import maryAnnDancel from "../assets/physicians-images/mary-ann-dancel.png";
import michelleChan from "../assets/physicians-images/michelle-chan.png";
import mariaPrudente from "../assets/physicians-images/maria-prudente.png";
import catherineOrtanez from "../assets/physicians-images/catherine-ortanez.png";
import janiceEsguerra from "../assets/physicians-images/janice-esguerra.png";
import bersabeBernardo from "../assets/physicians-images/bersabe-bernardo.png";
import bryanGensolin from "../assets/physicians-images/bryan-gensolin.png";
import christineHernandez from "../assets/physicians-images/christine-hernandez.png";
import domingoNicholo from "../assets/physicians-images/domingo-nicholo.png";
import patrickBlaza from "../assets/physicians-images/patrick-blaza.png";
import stephanieChua from "../assets/physicians-images/stephanie-chua.png";
import manuelMoises from "../assets/physicians-images/manuel-moises.png";
import charoColoma from "../assets/physicians-images/charo-coloma.png";
import radialGradient2 from "../assets/radial-gradient2.png";

const specialties = [
  {
    title: "PEDIATRICS",
    physicians: [
      {
        name: "MARITES C. LIMON, MD, DPPS",
        image: maritesLimon,
        schedule: [
          { days: "Friday", time: "10:30 AM - 12:00 PM" },
          { days: "Saturday", time: "02:30 AM - 05:00 PM" },
        ],
      },
      {
        name: "APPLE GRACE O TAN. M.D.",
        image: appleTan,
        schedule: [
          { days: "Mon-Tue", time: "10:30 AM - 11:30 PM" },
          { days: "Thursday", time: "10:30 AM - 11:30 PM" },
        ],
      },
      {
        name: "YVONNE N. SENDON-REPOLLO, MD, FPPS, MMHoA",
        image: yvonneRepollo,
        schedule: [{ days: "Saturday", time: "10:00 AM - 12:00 PM" }],
      },
      {
        name: "MARY ANN PACIENCIA, MD, MMHoA",
        image: maryPacencia,
        schedule: [{ days: "Friday", time: "10:00 AM - 12:00 PM" }],
      },
      {
        name: "LILIBETH JANUARY R. GARCIA M.D.",
        image: lilibethGarcia,
        schedule: [{ days: "Friday", time: "03:00 PM - 06:00 PM" }],
      },
    ],
  },
  {
    title: "OPTHALMOLOGIST",
    physicians: [
      {
        name: "LEONORA JAVELOSA-BANGAYAN, MD, MSPH",
        image: leonoraBangayan,
        schedule: [
          { days: "Friday", time: "03:00 PM - 05:00 PM" },
          { days: "Saturday", time: "03:00 PM - 05:00 PM" },
        ],
      },
      {
        name: "RANDY C. LIMON, MD, DPBO",
        image: randyLimon,
        schedule: [
          { days: "Mon - Thurs", time: "03:00 PM - 06:00 PM" },
          { days: "Fri - Sat", time: "09:00 PM - 05:00 PM" },
        ],
      },
      {
        name: "WARREN ROGEL DE MESA M.D.",
        image: warrenDemesa,
        schedule: [{ days: "By Appoinment" }],
      },
    ],
  },
  {
    title: "INTERNAL MEDICINE",
    physicians: [
      {
        name: "ALLEN R. MARQUEZ, MD, FPCP, FPCC",
        image: allenMarquez,
        schedule: [
          { days: "Wednesday", time: "10:00 AM - 02:00 PM" },
          { days: "Friday", time: "02:00 PM - 06:00 PM" },
        ],
      },
      {
        name: "JUAN RAPHAEL GONZALES, MD, FPCP, DPRA",
        image: juanGonzales,
        schedule: [
          { days: "Thursday", time: "08:00 AM - 10:00 AM" },
          { days: "Saturday", time: "10:00 AM - 04:00 PM" },
        ],
      },
      {
        name: "MURIEL A. MORILLA-BUCO, FPCP, FPCC, FPSVM",
        image: murielBuco,
        schedule: [
          { days: "Tuesday", time: "02:00 PM - 05:00 PM" },
          { days: "Thursday", time: "02:00 PM - 05:00 PM" },
        ],
      },
      {
        name: "CHERYL MAY CHING-BLAZA, MD, FPCP, DPCEDM",
        image: cherylBlaza,
        schedule: [{ days: "Tuesday", time: "10:00 AM - 02:00 PM" }],
      },
      {
        name: "KARPAL SINGH, MD, PAMS",
        image: karpalSingh,
        schedule: [
          { days: "Thursday", time: "10:00 AM - 02:00 PM" },
          { days: "Friday", time: "10:00 AM - 02:00 PM" },
        ],
      },
      {
        name: "MA. KRISELDA KARLENE G. TAN, MD, FPCP, FPCCP",
        image: kriseldaTan,
        schedule: [{ days: "Wednesday", time: "02:00 PM - 05:00 PM" }],
      },
      {
        name: "JANICE AGUSTIN-ESGUERRA, MD, FPCP, FPRA",
        image: janiceEsguerra,
        schedule: [
          { days: "Monday", time: "10:00 AM - 05:00 PM" },
          { days: "Saturdays", time: "10:00 AM - 05:00 PM" },
        ],
      },
    ],
  },
  {
    title: "OB-GYNE",
    physicians: [
      {
        name: "GENIE M. BENITEZ-DE LUMEN, MD, FPOGS",
        image: genieLumen,
        schedule: [
          { days: "Tuesday", time: "01:00 PM - 03:00 PM" },
          { days: "Thursday", time: "01:00 PM - 03:00 PM" },
          { days: "Saturday", time: "01:00 PM - 03:00 PM" },
        ],
      },
      {
        name: "MARY ANNE S. DANCEL, MD, FPOGS, MMHoA",
        image: maryAnnDancel,
        schedule: [{ days: "By appointment" }],
      },
      {
        name: "MICHELLE ANTHONETTE R. LIM-CHAN, MD, FPOGS, FPSGE",
        image: michelleChan,
        schedule: [
          { days: "Monday", time: "09:00 AM - 12:00 PM" },
          { days: "Wednesday", time: "09:00 AM - 12:00 PM" },
        ],
      },
      {
        name: "CATHERINE M. ORTANEZ, MD, FPOGS, FPSUOG",
        image: catherineOrtanez,
        schedule: [
          { days: "Monday", time: "04:00 PM - 06:00 PM" },
          { days: "Saturday", time: "11:00 AM - 01:00 PM" },
        ],
      },
    ],
  },
  {
    title: "OB-SONOLOGIST",
    physicians: [
      {
        name: "BARSABE BERNADO M.D. / OB SONO",
        image: bersabeBernardo,
        schedule: [
          { days: "Tuesday", time: "04:30 PM - 06:00 PM" },
          { days: "Thursday", time: "04:30 PM - 06:00 PM" },
          { days: "Friday", time: "04:30 PM - 06:00 PM" },
        ],
      },
      {
        name: "CATHERINE MAGANTE-ORTANEZ M.D. / OB SONO",
        image: catherineOrtanez,
        schedule: [
          { days: "Monday", time: "05:00 AM - ONWARDS" },
          { days: "Thursday", time: "04:00 AM - 06:00 AM" },
        ],
      },
    ],
  },
  {
    title: "RADIO-SONOLOGIST",
    physicians: [
      {
        name: "CHRISTINE A. HERNANDEZ M.D.",
        image: christineHernandez,
        schedule: [
          { days: "Wednesday", time: "01:00 PM - 04:00 PM" },
          { days: "Thursday", time: "01:00 PM - 04:00 PM" },
        ],
      },
      {
        name: "DOMINGO NICHOLO H. FERRER M.D.",
        image: domingoNicholo,
        schedule: [{ days: "Monday", time: "10:00 AM - 12:00 PM" }],
      },
      {
        name: "MARIA CELINE E. PRUDENTE, M.D., FPCR",
        image: mariaPrudente,
        schedule: [{ days: "Tuesday", time: "10:00 AM - 12:00 PM" }],
      },
    ],
  },
  {
    title: "CARDIOLOGY",
    physicians: [
      {
        name: "ALLEN R. MARQUEZ, MD, FPCP, FPCC",
        image: allenMarquez,
        schedule: [
          { days: "Wednesday", time: "10:00 AM - 02:00 PM" },
          { days: "Friday", time: "02:00 PM - 06:00 PM" },
        ],
      },
      {
        name: "MURIEL A. MORILLA-BUCO, FPCP, FPCC, FPSVM",
        image: murielBuco,
        schedule: [
          { days: "Tuesday", time: "02:00 PM - 05:00 PM" },
          { days: "Thursday", time: "02:00 PM - 05:00 PM" },
        ],
      },
    ],
  },
  {
    title: "SURGERY",
    physicians: [
      {
        name: "BRYAN KEITH GENSOLIN M.D.",
        image: bryanGensolin,
        schedule: [{ days: "By Appointment" }],
      },
      {
        name: "GENIE BENITEZ-DE LUMEN M.D.",
        image: genieLumen,
        schedule: [
          { days: "Monday", time: "04:00 PM - 06:00 PM" },
          { days: "Thursday", time: "04:00 PM - 06:00 PM" },
          { days: "Saturday", time: "04:00 PM - 06:00 PM" },
        ],
      },
      {
        name: "CLIVE KEVIN R. ORTANEZ, M.D., FPCS, FPSGS, FSOSP",
        image: cliveOrtanez,
        schedule: [{ days: "By Appointment" }],
      },
    ],
  },
  {
    title: "UROLOGY",
    physicians: [
      {
        name: "PATRICK P. ABLAZA, MD, FPUA",
        image: patrickBlaza,
        schedule: [{ days: "Tuesday", time: "04:00 PM - 05:00 PM" }],
      },
    ],
  },
  {
    title: "DERMATOLOGY",
    physicians: [
      {
        name: "STEPHANIE SY CHUA, MD, FPDS",
        image: stephanieChua,
        schedule: [
          { days: "By Appoinment" },
          { days: "Friday", time: "09:00 AM - 11:00 AM" },
        ],
      },
    ],
  },
  {
    title: "ENT",
    physicians: [
      {
        name: "MANUEL MOISES M.D.",
        image: manuelMoises,
        schedule: [{ days: "Wednesday", time: "01:00 PM - 06:00 PM" }],
      },
    ],
  },
  {
    title: "SURGEON",
    physicians: [
      {
        name: "CHARO A. COLOMA, MD, MHCM, PCS, PSGS",
        image: charoColoma,
        schedule: [
          { days: "Tuesday", time: "10:00 AM - 12:00 PM" },
          { days: "Thursday", time: "01:00 PM - 03:00 PM" },
          { days: "Saturday", time: "03:00 PM - 05:00 PM" },
        ],
      },
    ],
  },
  {
    title: "OTORHINOLARYNGOLOGY - Head and Neck Surgery",
    physicians: [
      {
        name: "MANUEL R. MOISES JR., MD, DPBO-HNS, FPSO-NHS",
        image: manuelMoises,
        schedule: [{ days: "Wednesday", time: "04:00 PM - 06:00 PM" }],
      },
    ],
  },
  {
    title: "RHEUMATOLOGY",
    physicians: [
      {
        name: "JUAN RAPHAEL GONZALES, MD, FPCP, DPRA",
        image: juanGonzales,
        schedule: [
          { days: "Thursday", time: "08:00 AM - 10:00 AM" },
          { days: "Saturday", time: "10:00 AM - 04:00 PM" },
        ],
      },
      {
        name: "JANICE AGUSTIN-ESGUERRA, MD, FPCP, FPRA",
        image: janiceEsguerra,
        schedule: [
          { days: "Monday", time: "10:00 AM - 05:00 PM" },
          { days: "Saturdays", time: "10:00 AM - 05:00 PM" },
        ],
      },
    ],
  },
  {
    title: "ENDOCRINOLOGY",
    physicians: [
      {
        name: "CHERYL MAY CHING-BLAZA, MD, FPCP, DPCEDM",
        image: cherylBlaza,
        schedule: [{ days: "Tuesday", time: "10:00 AM - 02:00 PM" }],
      },
    ],
  },
];

const colors = ["#427AA1", "#064789", "#EBF2FA"];
const ProfileCard = ({ profile }) => (
  <div className="profile-card">
    <img
      src={profile.image}
      alt={`${profile.name}`}
      className="profile-image"
    />
    <h3 className="profile-name font-color">{profile.name}</h3>
    <div className="profile-schedule">
      {profile.schedule.map((slot, index) => (
        <div key={index} className="schedule-slot">
          <span
            className="days"
            style={{
              backgroundColor:
                (index === 0 && colors[index]) ||
                (index === 1 && colors[index]) ||
                (index === 2 && colors[index]),
              color: index === 2 && colors[1],
            }}
          >
            {slot.days}
          </span>
          {slot.time && <span className="time">{slot.time}</span>}
        </div>
      ))}
    </div>
  </div>
);

function Physicians() {
  return (
    <>
      {/* <Navbar /> */}
      <div id="physicians">
        <img className="radial-gradient2" src={radialGradient2} alt="" />
        <div className="header-container" style={{ marginBottom: 30 }}>
          <h1 className="heading">Physicians</h1>
          <p className="header-description">
            Our Physician deliver expert medical care designed to fit your
            health needs. Whether it's for regular check-ups, managing chronic
            conditions, or receiving specialized treatments, our experienced
            physicians are devoted to providing compassionate and effective
            care.
          </p>
        </div>
        {specialties.map((specialty, index) => (
          <div key={index} className="physicians-container">
            <h1 className="title">{specialty.title}</h1>
            <div className="profiles-container">
              {specialty.physicians.map((physician, idx) => (
                <ProfileCard key={idx} profile={physician} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Physicians;
