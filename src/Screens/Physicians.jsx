import React from 'react';
import '../../src/styles/mainstyle.css';
import Footer from './Footer';
import Navbar from './NavBar';


const ProfileCard = ({ profile }) => (
    <div className="profile-card">
        <img src={""} alt="profile-img" className="profile-image" />
        <h3 className="profile-name font-color font-weight-500"></h3>
        <div className="profile-schedule">
            {profile.schedule.map((slot, index) => (
                <div key={index} className="schedule-slot">
                    <span className="days"></span>
                    <span className="time"></span>
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