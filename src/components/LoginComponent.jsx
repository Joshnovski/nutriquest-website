import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import nutriquestLogo from "../assets/nutriquestLogo.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from "react-google-button";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try{
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed In to Linkedin!");
    } catch(err){
      console.log(err);
    }
  };
  return (
    <div className="login-wrapper">
        <img src={nutriquestLogo} className="nutriquestLogo" />
        <div className="login-wrapper-inner">
          <h1 className="heading">Sign in</h1>
          <p className="sub-heading">Stay on top of your health and fitness journey</p>
          
          <div className="auth-inputs">
            <input
              onChange={(event) =>
                setCredentials({...credentials, email: event.target.value })
              }
              type='email'
              className="common-input"
              placeholder="Email or Phone"
            />
            <input
              onChange={(event) =>
                setCredentials({...credentials, password: event.target.value })
              }
              type='password'
              className="common-input"
              placeholder="Password"
            />
          </div>
          <button onClick={login} className='login-btn'>
            Sign in to NutriQuest
          </button>
        </div>
        <hr class="hr-text" data-content="or"/>
        <div className = "google-btn-container">
          <GoogleButton
            className="button" 
            onClick={() => {
              console.log("Google button clicked");
            }}
          />

          <p className="go-to-signup">
            New to NutriQuest? <span className="join-now">Join now</span>
          </p>
        </div>
    </div>
  )
}
