import React from "react";
import "./Header.css";
import headerimg from "/header_img.png";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="container-fluid text-center py-2 bg-light">
      <div className="position-relative text-white w-100" style={{minHeight:"80vh"}}>
        <img
          src={headerimg}
          alt="header-img"
          className="img-fluid w-100 h-100 object-fit-cover rounded shadow"
          style={{ minHeight: "500px", maxHeight:"700px"}}
        />
        <div className="position-absolute top-50 text-start translate-middle text-start w-75 px-3 px-md-5"
        
        style={{minHeight:"20vh", left:"40%"}}
        >
        
          <h2 className="fw-bold mb-4 display-3 fadeIn">Order your favourite food here</h2>
          <p className="text-light mb-2 fadeIn d-none d-md-block" style={{animationDelay:"0.5s"}}>
            Choose from a divers menu featuring a delectable array of dishes
            crafted with the finest ingradients and culinary experts. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="btn btn-light rounded-5 px-4 fadeIn" style={{animationDelay:"1s",fontSize:"clamp(0.9rem,1.2vw,1.2rem"}}>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
