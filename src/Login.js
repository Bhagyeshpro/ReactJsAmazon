import React from 'react';
import "./Login.css"
import {Link} from "react-router-dom"

function Login() {
  return <div className='login'>
        <Link to="/">
            <img
                className='login__logo'
                src='https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png'
            />
        </Link>
      <h1>Login</h1>
  </div>;
}

export default Login;
