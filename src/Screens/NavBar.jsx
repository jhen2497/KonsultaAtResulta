import React, {useState} from "react";
import '../../src/styles/mainstyle.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdown, setIsDropdown] = useState(false);

    const isDropdownOpen = () => {
        setIsDropdown(!isDropdown)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={'../../src/assets/colored-logo.png'} alt="KonsultaMD" />
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="" onClick={() => navigate("/")}>HOME</a>
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
                <button className="dropdown-btn" onClick={isDropdownOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </div>
            
            {isDropdown &&
                <ul className="dropdown-links">
                    <li>
                        <a href="" onClick={() => navigate("/")}>HOME</a>
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
                    <li className="dropdown-contact-btn">
                        <a href="" onClick={() => navigate("/contact-us")} >CONTACT US</a>
                    </li>
                </ul>
            }
        </nav>
    );
};

export default Navbar;
