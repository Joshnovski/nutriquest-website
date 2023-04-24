import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import nutriquestLogo from "../assets/nutriquestLogo.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try{
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      navigate('/home');
    } catch(err){
      console.log(err);
      toast.error("Failed to Create Account");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate("/home");
  };
  return (
    <div className="login-wrapper">
        <img src={nutriquestLogo} className="nutriquestLogo" />
        <div className="login-wrapper-inner">
          <h1 className="heading">Keep on track of your fitness goals</h1>
          
          <div className="auth-inputs">
            <input
              onChange={(event) =>
                setCredentials({...credentials, email: event.target.value })
              }
              type='email'
              className="common-input"
              placeholder="Email or phone number"
            />
            <input
              onChange={(event) =>
                setCredentials({...credentials, password: event.target.value })
              }
              type='password'
              className="common-input"
              placeholder="Password (6 or more characters)"
            />
          </div>
          <button onClick={login} className='login-btn'>
            Join NutriQuest
          </button>
        </div>
        <hr className="hr-text" data-content="or"/>
        <div className = "google-btn-container">
          <GoogleButton className="button" onClick={googleSignIn} />
          
          <p className="go-to-signup">
            Already on NutriQuest? <span className="join-now" onClick={() => navigate('/')}>Sign in</span>
          </p>
        </div>
    </div>
  )
}

