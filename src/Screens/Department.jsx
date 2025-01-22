import React from 'react';
import '../../src/styles/mainstyle.css';

function Department() {
    return (
        <div id="department">
            <h3>OUR DEPARTMENTS</h3>
            <h1>Lorem ipsum dolor</h1>
            <div className="department-grid">
                <div className="department-item">
                    <img src={'./../src/assets/pediatrics-icon.png'} alt="Icon 1" />
                    <p>Pediatrics</p>
                </div>
                <div className="department-item">
                    <img src={'./../src/assets/opthalmology-icon.png'} alt="Icon 2" />
                    <p>Opthalmology</p>
                </div>
                <div className="department-item">
                    <img src={'./../src/assets/internal-medicine-icon.png'} alt="Icon 3" />
                    <p>Internal Medicine</p>
                </div>
            </div>
            <div className="department-grid">
                <div className="department-item">
                    <img src={'./../src/assets/ob-gyn-icon.png'} alt="Icon 1" />
                    <p>OB-GYN</p>
                </div>
                <div className="department-item">
                    <img src={'./../src/assets/sonology-icon.png'} alt="Icon 2" />
                    <p>OB-Sonology</p>
                </div>
                <div className="department-item">
                    <img src={'./../src/assets/radio-sonology-icon.png'} alt="Icon 3" />
                    <p>Radio Sonology</p>
                </div>
            </div>
            <div className="department-grid">
                <div className="department-item">
                    <img src={'./../src/assets/surgery-icon.png'} alt="Icon 1" />
                    <p>Surgery</p>
                </div>
                <div className="department-item">
                    <img src={'./../src/assets/urology-icon.png'} alt="Icon 2" />
                    <p>Urology</p>
                </div>
                <div className="department-item">
                    <img src={'./../src/assets/dermatology-icon.png'} alt="Icon 3" />
                    <p>Dermatology</p>
                </div>
            </div>
            <div className="department-grid">
                <div className="department-item">
                    <img src={'./../src/assets/ent-icon.png'} alt="Icon 1" />
                    <p>ENT</p>
                </div>
            </div>
        </div>
    )
}

export default Department;