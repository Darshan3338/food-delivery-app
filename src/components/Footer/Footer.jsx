import React from 'react';
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="fotter-left">
            <img src="./src/assets/frontend_assets/foodlogo.jpg" alt="logo" className="img-fluid rounded-circle"
            style={{ height: "60px", width: "auto" }}/>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="fb" />
                <img src={assets.twitter_icon} alt="tw" />
                <img src={assets.linkedin_icon} alt="li" />
            </div>
        </div>
        <div className="fotter-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="fotter-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 123-456-789</li>
                <li> contact@hotfood.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2025 &copy; - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
