import React, { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPop = ({ setshowLogin }) => {
  const [currState, setcurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState} </h2>
          <img
            src={assets.cross_icon}
            alt="close"
            onClick={() => setshowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Log In" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter Your Name" required />
          )}

          <input type="email" placeholder="Enter Your Email" required />
          <input type="password" placeholder="Enter Your password" required />
          <button>
            {currState === "Sign Up" ? "Create account" : "Log In"}
          </button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & Privacy policy</p>
        </div>
        {currState === "Log In" ? (
          <p>
            Create a new Account <span onClick={()=>setcurrState("Sign Up")}> Click Here</span>
          </p>
        ) : (
          <p>
            Already have an Account? <span onClick={()=>setcurrState("Log In")}> Logn here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
