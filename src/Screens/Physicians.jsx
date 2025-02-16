import React from "react";
import "../../src/styles/mainstyle.css";

// data
import { specialties } from "../data/specialties";

// conponent
import ProfileCard from "../components/Profilecard";

import radialGradient2 from "../assets/radial-gradient2.png";

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
    </>
  );
}

export default Physicians;
