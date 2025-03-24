import React, {  useContext, useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../components/Context/StoreContext";
import axios from 'axios'

const LoginPop = ({ setshowLogin }) => {
  const {url,settoken} = useContext(StoreContext)

  const [currState, setcurrState] = useState("Sign Up");
  const [data,setdata] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setdata(data =>({...data,[name]:value}))
  }

  // access login route
  const onLogin = async(e) => {
    e.preventDefault()
    let newUrl = url;
    if(currState === "Log In"){
      newUrl += "/api/user/login"
    }
    
    //access register(Sign Up)
    else{
      newUrl +="/api/user/register"
    }
    const response = await axios.post(newUrl,data)
    if(response.data.success){
      settoken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setshowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }

  

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
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
            <input onChange={onChangeHandler} name="name" value={data.name} type="text" placeholder="Enter Your Name" required />
          )}

          <input type="email" name="email" value={data.email} onChange={onChangeHandler} placeholder="Enter Your Email" required />
          <input type="password" name="password" value={data.password} onChange={onChangeHandler} placeholder="Enter Your password" required />
          <button type="submit">
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
