import React from 'react';
import './Footer.css'
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="fotter-left">
            <img src={assets.foodlogo} alt="logo" className="img-fluid rounded-circle"
            style={{ height: "60px", width: "auto" }}/>
            <div className="footer-social-icons">
              <a href='https://www.linkedin.com/in/darshan-c-l-6670a4187/' target='_blank' rel='noopner noreferrer'>
              <img src={assets.linkedin_icon} alt="li" />
             
                </a>
                <a href='https://www.instagram.com/darshandarshu3/?igsh=MXhuc2lvZWhwa3Blbw%3D%3D#' target='_blank' rel='noopner noreferrer'>
                <img src={assets.insta} alt="li" />
                </a>
                <a href='mailto:darshancl356@gmail.com'>
                <img src={assets.Gmail} alt="li" />
                </a>
              
               
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
                <li>+91 6361448740</li>
                <li> darshancl356@gmail.com.com</li>
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
