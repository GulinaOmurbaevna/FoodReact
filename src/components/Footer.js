import React from 'react';
import Logo from "../Assets/Logo.svg"
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
 
function Footer() {
  return (
    <div className='footer-wrapper'>
       <div className='footer-section-one'>
        <div className="footer-logo-container">
            <img src={Logo} alt="" />
        </div>

        <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebook />
        </div>
       </div>

       <div className='footer-section-two'>
        <div className="footer-section-columns">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Carriers</span>
            <span>Testimonials</span>
            <span>Work</span>
        </div>
     
     <div className="footer-section-columns">
        <span>244-5333-7783</span>
        <span>Hello@food.com</span>
        <span>pressFood.com</span>
        <span>contact@.com</span>
     </div>

     <div className='footer-section-columns'>
        <span>Terms & Conditions</span>
        <span>Privaty policy</span>

     </div>
       </div>
    </div>
  )
}

export default Footer
