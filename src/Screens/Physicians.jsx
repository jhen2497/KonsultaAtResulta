import React from 'react';
import '../../src/styles/mainstyle.css';
import Footer from './Footer';
import Navbar from './NavBar';

const physicians = [
    {
        name: "Marites Cong-Limon M.D.",
        image: "../../src/assets/physicians/MARITES CONG-LIMON M.D..png",
        schedule: [
            { days: "Mon/Wed", time: "1:00 PM - 6:00 PM" },
            { days: "Tue/Thu", time: "9:00 AM - 1:00 PM" },
        ],
    },
    {
        name: "Apple Grace O. Tan M.D.",
        image: "../../src/assets/physicians/APPLE GRACE O. TAN M.D..png",
        schedule: [
            { days: "Monday", time: "9:00 AM - 1:00 PM" },
            { days: "Saturday", time: "12:00 PM - 2:00 PM" },
        ],
    },
    {
        name: "Yvonne Sendon-Repollo M.D.",
        image: "../../src/assets/physicians/YVONNE SENDON-REPOLLO M.D..png",
        schedule: [
            {
                days: "Saturday",
                time: "10:00 AM - 12:00 PM"
            }],
    },
    {
        name: "Mary Ann Santacera-Pacienca M.D.",
        image: "../../src/assets/physicians/MARY ANN SANTACERA-PACIENCIA M.D..png",
        schedule: [
            {
                days: "Saturday",
                time: "10:00 AM - 12:00 PM"
            }],
    },
    {
        name: "Lilibeth January R. Garcia M.D.",
        image: "../../src/assets/physicians/LILIBETH JANUARY R. GARCIA M.D..png",
        schedule: [
            {
                days: "Friday",
                time: "03:00 PM - 06:00 PM"
            }],
    },
];

const ProfileCard = ({ profile }) => (
    <div className="profile-card">
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <h3 className="profile-name font-color font-weight-500">{profile.name}</h3>
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
                <div className="header-container">
                    <h1 className="heading">
                        Physicians
                    </h1>
                    <p className="header-description">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar tincidunt euismod faucibus nibh a metus vel eu in. Est fermentum gravida malesuada posuere egestas cursus arcu pellentesque.
                    </p>
                </div>
                <div className="physicians-container">
                    <h1 className="title">PEDIATRICS</h1>
                    <div className="profiles-container">
                        {physicians.map((physician, index) => (
                            <ProfileCard key={index} profile={physician} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Physicians;