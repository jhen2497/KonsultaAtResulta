import React from "react";
import '../../src/styles/mainstyle.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={'../../src/assets/colored-logo.png'} alt="KonsultaMD" />
            </div>
            <ul className="nav-links">
                <li>
                    <a href="" onClick={() => navigate("/landing-page")}>HOME</a>
                </li>
                <li>
                    <a href="" onClick={() => navigate("/about-us")}>ABOUT US</a>
                </li>
                <li>
                    <a href="" onClick={() => navigate("/services")}>SERVICES</a>
                </li>
                <li>
                    <a href="" onClick={() => navigate("/physicians")}>PHYSICIANS</a>
                </li>
                <li>
                    <a href="" onClick={() => navigate("/hmos")}>HMOs</a>
                </li>
                <li className="contact-btn">
                    <a href="" onClick={() => navigate("/contact-us")} >CONTACT US</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
