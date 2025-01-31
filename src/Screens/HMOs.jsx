import React from 'react';
import '../../src/styles/mainstyle.css';
import Footer from './Footer';
import Navbar from './NavBar';

function HMOs() {
    return (
        <>
            {/* <Navbar /> */}
            <div id="hmos">
            {/* <img className='radial-gradient2' src={'./../src/assets/radial-gradient2.png'} alt="" />    */}
                <div className="header-container">
                    
                    <h1 className="heading">
                        HMOs
                    </h1>
                    <p className="header-description">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar tincidunt euismod faucibus nibh a metus vel eu in. Est fermentum gravida malesuada posuere egestas cursus arcu pellentesque.
                    </p>
                </div>
                <div className='hmo-container'>
                    <div className="image-grid">
                        <img src={'./../src/assets/aa-international.png'} alt="hmo" />
                        <img src={'./../src/assets/asianlife.png'} alt="hmo" />
                        <img src={'./../src/assets/cocolife.png'} alt="hmo" />
                        <img src={'./../src/assets/eastwest.png'} alt="hmo" />
                        <img src={'./../src/assets/avega.png'} alt="hmo" />
                        <img src={'./../src/assets/intellicare.png'} alt="hmo" />
                        <img src={'./../src/assets/kaiser.png'} alt="hmo" />
                        <img src={'./../src/assets/maxicare.png'} alt="hmo" />
                        <img src={'./../src/assets/medasia.png'} alt="hmo" />
                        <img src={'./../src/assets/medocare.png'} alt="hmo" />
                        <img src={'./../src/assets/hmi.png'} alt="hmo" />
                        <img src={'./../src/assets/philcare.png'} alt="hmo" />
                        <img src={'./../src/assets/valucare.png'} alt="hmo" />
                        <img src={'./../src/assets/medicard.png'} alt="hmo" />
                        <img src={'./../src/assets/generali.png'} alt="hmo" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HMOs;