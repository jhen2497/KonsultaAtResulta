import React from 'react';
import '../../src/styles/mainstyle.css';
import Footer from './Footer';
import Navbar from './NavBar';

const specialties = [
    {
        title: "PEDIATRICS",
        physicians: [
            {
                name: "YVONNE N. SENDON-REPOLLO, MD, FPPS, MMHoA",
                image: "../../src/assets/physicians-images/yvonne-repollo.png",
                schedule: [
                    { days: "Saturday", time: "10:00 AM - 12:00 PM" },
                ],
            },
            {
                name: "MARY ANN PACIENCIA, MD, MMHoA",
                image: "../../src/assets/physicians-images/mary-pacencia.png",
                schedule: [
                    { days: "Friday", time: "10:00 AM - 12:00 PM" },
                ],
            },
            {
                name: "MARITES C. LIMON, MD, DPPS",
                image: "../../src/assets/physicians-images/marites-limon.png",
                schedule: [
                    { days: "Mon-Tue", time: "10:30 AM - 11:30 PM" },
                    { days: "Thursday", time: "10:30 AM - 11:30 PM" },
                ],
            },
        ],
    },
    {
        title: "OPTHALMOLOGIST",
        physicians: [
            {
                name: "LEONORA JAVELOSA-BANGAYAN, MD, MSPH",
                image: "../../src/assets/physicians-images/leonora-bangayan.png",
                schedule: [
                    { days: "Friday", time: "03:00 PM - 05:00 PM" },
                    { days: "Saturday", time: "03:00 PM - 05:00 PM" },
                ],
            },
            {
                name: "RANDY C. LIMON, MD, DPBO",
                image: "../../src/assets/physicians-images/randy-limon.png",
                schedule: [
                    { days: "Mon - Thu", time: "03:00 PM - 06:00 PM" },
                ],
            },
        ],
    },
    {
        title: "INTERNAL MEDICINE",
        physicians: [
            {
                name: "ALLEN R. MARQUEZ, MD, FPCP, FPCC",
                image: "../../src/assets/physicians-images/leonora-bangayan.png",
                schedule: [
                    { days: "Wednesday", time: "10:00 AM - 02:00 PM" },
                    { days: "Friday", time: "02:00 PM - 06:00 PM" },
                ],
            },
            {
                name: "JUAN RAPHAEL GONZALES, MD, FPCP, DPRA",
                image: "../../src/assets/physicians-images/juan-gonzales.png",
                schedule: [
                    { days: "Thursday", time: "08:00 AM - 10:00 AM" },
                    { days: "Saturday", time: "10:00 AM - 04:00 PM" },
                ],
            },
            {
                name: "MURIEL A. MORILLA-BUCO, FPCP, FPCC, FPSVM",
                image: "../../src/assets/physicians-images/muriel-buco.png",
                schedule: [
                    { days: "Tuesday", time: "02:00 PM - 05:00 PM" },
                    { days: "Thursday", time: "02:00 PM - 05:00 PM" },
                ],
            },
            {
                name: "CHERYL MAY CHING-BLAZA, MD, FPCP, DPCEDM",
                image: "../../src/assets/physicians-images/cheryl-blaza.png",
                schedule: [
                    { days: "Tuesday", time: "10:00 AM - 02:00 PM" },
                ],
            },
            {
                name: "KARPAL SINGH, MD, PAMS",
                image: "../../src/assets/physicians-images/karpal-singh.png",
                schedule: [
                    { days: "Thu - Fri", time: "10:00 AM - 02:00 PM" },
                ],
            },
            {
                name: "MA. KRISELDA KARLENE G. TAN, MD, FPCP, FPCCP",
                image: "../../src/assets/physicians-images/kriselda-tan.png",
                schedule: [
                    { days: "Wednesday", time: "02:00 PM - 05:00 PM" },
                ],
            },
        ],
    },
    {
        title: "OB-GYNE",
        physicians: [
            {
                name: "MARY ANNE S. DANCEL, MD, FPOGS, MMHoA",
                image: "../../src/assets/physicians-images/mary-ann-dancel.png",
                schedule: [
                    { days: "Tuesday", time: "08:00 AM - 10:00 AM" },
                    { days: "Thursday", time: "09:00 AM - 11:00 AM" },
                    { days: "Saturday", time: "09:00 AM - 11:00 AM" },
                ],
            },
            {
                name: "MICHELLE ANTHONETTE R. LIM-CHAN, MD, FPOGS, FPSGE",
                image: "../../src/assets/physicians-images/michelle-chan.png",
                schedule: [
                    { days: "Monday", time: "09:00 AM - 2:00 PM" },
                    { days: "Wednesday", time: "09:00 AM - 2:00 PM" },
                ],
            },
            {
                name: "CATHERINE M. ORTANEZ, MD, FPOGS, FPSUOG",
                image: "../../src/assets/physicians-images/catherine-ortanez.png",
                schedule: [
                    { days: "Monday", time: "04:00 PM - 06:00 PM" },
                    { days: "Saturday", time: "11:00 AM - 01:00 PM" },
                ],
            },
            {
                name: "GENIE M. BENITEZ-DE LUMEN, MD, FPOGS",
                image: "../../src/assets/physicians-images/genie-lumen.png",
                schedule: [
                    { days: "Tuesday", time: "01:00 PM - 03:00 PM" },
                    { days: "Thursday", time: "01:00 PM - 03:00 PM" },
                    { days: "Saturday", time: "01:00 PM - 03:00 PM" },
                ],
            },
        ],
    },
    {
        title: "CARDIOLOGY",
        physicians: [
            {
                name: "ALLEN R. MARQUEZ, MD, FPCP, FPCC",
                image: "../../src/assets/physicians-images/allen-marquez.png",
                schedule: [
                    { days: "Wednesday", time: "10:00 AM - 02:00 PM" },
                    { days: "Friday", time: "02:00 PM - 06:00 PM" },
                ],
            },
            {
                name: "MURIEL A. MORILLA-BUCO, FPCP, FPCC, FPSVM",
                image: "../../src/assets/physicians-images/muriel-buco.png",
                schedule: [
                    { days: "Tuesday", time: "02:00 PM - 05:00 PM" },
                    { days: "Thursday", time: "02:00 PM - 05:00 PM" },
                ],
            },
        ],
    },
    {
        title: "UROLOGY",
        physicians: [
            {
                name: "PATRICK P. ABLAZA, MD, FPUA",
                image: "../../src/assets/physicians-images/patrick-blaza.png",
                schedule: [
                    { days: "Tuesday", time: "04:00 PM - 05:00 PM" },
                ],
            },
        ],
    },
    {
        title: "DERMATOLOGY",
        physicians: [
            {
                name: "STEPHANIE SY CHUA, MD, FPDS",
                image: "../../src/assets/physicians-images/stephanie-chua.png",
                schedule: [
                    { days: "Saturday", time: "09:00 AM - 11:00 AM" },
                ],
            },
        ],
    },
    {
        title: "SURGEON",
        physicians: [
            {
                name: "CHARO A. COLOMA, MD, MHCM, PCS, PSGS",
                image: "../../src/assets/physicians-images/charo-coloma.png",
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
                image: "../../src/assets/physicians-images/manuel-moises.png",
                schedule: [
                    { days: "Wednesday", time: "04:00 PM - 06:00 PM" },
                ],
            },
        ],
    },
    {
        title: "RHEUMATOLOGY",
        physicians: [
            {
                name: "JUAN RAPHAEL GONZALES, MD, FPCP, DPRA",
                image: "../../src/assets/physicians-images/juan-gonzales.png",
                schedule: [
                    { days: "Thursday", time: "08:00 AM - 10:00 AM" },
                    { days: "Saturday", time: "10:00 AM - 04:00 PM" },
                ],
            },
        ],
    },
    {
        title: "ENDOCRINOLOGY",
        physicians: [
            {
                name: "CHERYL MAY CHING-BLAZA, MD, FPCP, DPCEDM",
                image: "../../src/assets/physicians-images/cheryl-blaza.png",
                schedule: [
                    { days: "Tuesday", time: "10:00 AM - 02:00 PM" },
                ],
            },
        ],
    },
];


const ProfileCard = ({ profile }) => (
    <div className="profile-card">
        <img src={profile.image} alt={`${profile.name}`} className="profile-image" />
        <h3 className="profile-name font-color">{profile.name}</h3>
        <div className="profile-schedule">
            {profile.schedule.map((slot, index) => (
                <div key={index} className="schedule-slot">
                    <span className="days">{slot.days}</span>
                    <span className="time">{slot.time}</span>
                </div>
            ))}
        </div>
    </div>
);


function Physicians() {

    return (
        <>
            <Navbar />
            <div id="physicians">
                <div className="header-container" style={{ marginBottom: 30 }}>
                    <h1 className="heading">Physicians</h1>
                    <p className="header-description">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar tincidunt euismod faucibus nibh a metus vel eu in.
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