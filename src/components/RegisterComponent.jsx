import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import nutriquestLogo from "../assets/nutriquestLogo.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const register = async () => {
    try{
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      postUserData({name: credentials.name, email: credentials.email})
      navigate('/home');
      localStorage.setItem("userEmail", res.user.email);
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
    <div>
      <img src={nutriquestLogo} className="nutriquestLogo" />
        <div className="login-wrapper">
            <div className="login-wrapper-inner">
              <h1 className="heading-register">Share and track your fitness journey with <span className="name-color">NutriQuest</span></h1>
              
              <div className="auth-inputs">
                <input
                    onChange={(event) =>
                      setCredentials({...credentials, name: event.target.value })
                    }
                    type='text'
                    className="common-input"
                    placeholder="First and Last Name"
                  />
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
              <button onClick={register} className='login-btn'>
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
    </div>
  )
}

