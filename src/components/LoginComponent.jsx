import React from 'react'
import { LoginAPI } from '../api/AuthAPI'
import "../Sass/LoginComponent.scss";
export default function LoginComponent() {
  return (
    <div>
        <h1>LoginComponent</h1>
        <button className='login-btn'>Log IN to Link</button>
    </div>
  )
}
