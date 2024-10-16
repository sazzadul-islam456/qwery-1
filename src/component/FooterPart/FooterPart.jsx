import React from 'react';
import './FooterPart.css';
import qwery2 from '../../assets/QWERy2.png';
import social from '../../assets/social footer.png';

const FooterPart = () => {
  return (
    <section id="footer">
      <div className="container"> 
        <div className="footer-wrapper"> 
          <div className="footer-top"> 
            <div className="footer-logo"> 
              <img src={qwery2} alt="qwery2" /> 
            </div>
            <div className="footer-top-right">
              <p>Ready to explore?</p>
              <a href="#">Get started</a>
            </div>
          </div>
          <div className="footer-second"> 
            <div className="footer-second-one"> 
              <h4>Let's go on vacation, Make your day</h4>
              <p>Terms & Conditions</p>
              <img src={social} alt="social" /> 
            </div>
            <div className="footer-second-two"> 
              <h4>Services</h4>
              <p>Email Marketing</p>
              <p>Campaigns</p>
              <p>Branding</p>
              <p>Offline</p>
            </div>
            <div className="footer-second-three"> 
              <h4>About</h4>
              <p>Our Story</p>
              <p>Benefits</p>
              <p>Term</p>
              <p>Career</p>
            </div>
            <div className="footer-second-four"> 
              <h4>Help</h4>
              <p>FAQ’S</p>
              <p>Contact us</p>
            </div>
          </div>
          <div className="footer-bottom"> 
            <p>Copy right 2024 QWERY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPart;
