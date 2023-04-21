import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import nutriquestLogo from "../assets/nutriquestLogo.png";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try{
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res?.user);
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
          Log in to NutriQuest
        </button>
        </div>
    </div>
  )
}
