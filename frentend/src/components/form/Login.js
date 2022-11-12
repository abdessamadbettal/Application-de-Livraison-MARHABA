import React from 'react'
import { Form, Button , Alert  } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
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
      setLogin(true);
    })
    .catch((error) => {
      setLogin(false);
      
      console.log(error);
      console.log(error.response.data.message);
      setError(error.response.data.message);
      // message = error.response.data.message;
      error = new Error();
      // console.log(error);
    });

    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    // alert("Submited");
  }

    return (
        <>

                            <div className="login-form-box">
            <h3 className="mb-30">Login</h3>
            <form className="login-form" action="#">
                <div className="input-box mb--30">
                    <input type="text" placeholder="Username or Email" />
                </div>
                <div className="input-box mb--30">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="comment-form-consent input-box mb--30">
                    <input id="checkbox-1" type="checkbox" />
                    <label htmlFor="checkbox-1">Remember Me</label>
                </div>
                <button className="rn-btn edu-btn w-100 mb--30" type="submit">
                    <span>Login</span>
                </button>
                <div className="input-box">
                    <a href="#" className="lost-password">Lost your password?</a>
                </div>
            </form>
        </div>
                            
              {/* <h2>Login</h2>
             
        {error && <Alert variant="danger">{error}</Alert>}

                       

      <Form onSubmit={(e)=>handleSubmit(e)}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>


       
       

      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={password} placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="danger" className='text m-2' type="submit" onClick={(e) => handleSubmit(e)}>
          connecter
        </Button>
        <Link to='/forgetpassword'>
        <Button variant="danger" className='text m-2' >
          forget password
        </Button>
        </Link>
      </Form> */}
        </>
    )
}