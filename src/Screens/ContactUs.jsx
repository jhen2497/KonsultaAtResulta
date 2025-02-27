import React from "react";
import "../../src/styles/mainstyle.css";

// assets
import radialGradient2 from "../../src/assets/radial-gradient2.png";
import phoneIcon from "../../src/assets/phone-icon.png";
import mailIcon from "../../src/assets/mail-icon.png";
import locationIcon from "../../src/assets/location-icon.png";
import timeIcon from "../../src/assets/time-icon.png";
import fbIcon from "../../src/assets/fb-icon.png";
import xIcon from "../../src/assets/x-icon.png";

function ContactUs() {
  return (
    <>
      <div id="contact-us" style={{ position: "relative", overflow: "hidden" }}>
        <img className="radial-gradient2" src={radialGradient2} alt="" />
        <div className="header-container">
          <h1 className="heading">Contact Us</h1>
          {/* <p className="header-description">
            Lorem ipsum dolor sit amet consectetur. Pulvinar tincidunt euismod
            faucibus nibh a metus vel eu in. Est fermentum gravida malesuada
            posuere egestas cursus arcu pellentesque.
          </p> */}
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <img src={phoneIcon} alt="Phone" className="icon" />
              <p className="font-color">
                <strong>Phone</strong>
                <br />
                (02) 713 9229 / 0917 510 1525
              </p>
            </div>
            <div className="info-item">
              <img src={mailIcon} alt="Email" className="icon" />
              <p className="font-color">
                <strong>Email</strong>
                <br />
                info@konsultaatresulta.com
              </p>
            </div>
            <div className="info-item">
              <img src={locationIcon} alt="Address" className="icon" />
              <p className="font-color">
                <strong>Address</strong>
                <br />
                2nd Floor Newton Plaza, 4408 Old Sta. Mesa, Sta. Mesa
              </p>
            </div>
            <div className="info-item">
              <img src={timeIcon} alt="Clinic Hours" className="icon" />
              <p className="font-color">
                <strong>Office Hours</strong>
                <br />
                8:00 am to 6:00 pm
                <br />
                (Monday to Saturday)
              </p>
            </div>
            <hr className="divider" />
            <div className="social-media">
              <p className="font-color-1 font-weight-500">Social Media</p>
              <a href="https://www.facebook.com/konsultaatresulta">
                <img src={fbIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://twitter.com/KonsultaResulta">
                <img src={xIcon} alt="X" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9627057237367!2d121.0123778!3d14.601200399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9de7137257b%3A0x76ea1878edc329d6!2sKonsulta%20%40%20Resulta%20Medical%20Clinic%20%26%20Laboratory!5e0!3m2!1sen!2sph!4v1737688664407!5m2!1sen!2sph"
              width="150%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konsulta @ Resulta Medical Clinic Map"
            ></iframe>
          </div>

          {/* <div className="contact-form">
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Message" rows="4"></textarea>
                            </div>
                            <button type="submit" className="submit-button">SUBMIT</button>
                        </form>
                    </div> */}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
