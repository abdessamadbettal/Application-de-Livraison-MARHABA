import React from 'react'
import { useState } from 'react';
import { Alert } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();



export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    // set configurations
    const configuration = {
        method: "post",
        url: "http://localhost:8000/api/auth/login",
        data: {
          email,
          password,
        },
      };
        // make the API call
    axios(configuration)
    .then((result) => {
        console.log(result.data)
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        })
      setLogin(true);
      window.location.href = "/";
    })
    .catch((error) => {
      setLogin(false);
      
      console.log(error);
      console.log(error.response.data.message);
      setError(error.response.data.message);
      // message = error.response.data.message;
      error = new Error();
    });

    e.preventDefault();
  }

    return (
        <>

        <div className="login-form-box">
            <h3 className="mb-30">Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="login-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="input-box mb--30">
                    <input type="email" name='email' value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Username or Email" />
                </div>
                <div className="input-box mb--30">
                    <input type="password" name='password' value={password} placeholder="Password"  onChange={(e) => setPassword(e.target.value)} autoComplete="on" />
                </div>
                <div className="comment-form-consent input-box mb--30">
                    <input id="checkbox-1" type="checkbox" />
                    <label htmlFor="checkbox-1">Remember Me</label>
                </div>
                <button className="rn-btn edu-btn w-100 mb--30" type="submit" onClick={(e) => handleSubmit(e)}>
                    <span>Login</span>
                </button>
                <div className="input-box">
                    <a href="/login-register/forgetpassword" className="lost-password">mot de passe oublier ?</a>
                </div>
            </form>
        </div>
                            
           
        </>
    )
}