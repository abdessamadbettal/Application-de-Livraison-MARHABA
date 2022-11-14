import React from 'react'
import { useState } from 'react';
import { Alert } from "react-bootstrap";
import axios from "axios";
// import {handleSubmit} from 'react';


export default function Register() {
   
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [register, setRegister] = useState(false); 
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.preventDefault();
        // const user = { email, password , name};
        // axios.post("http://localhost:8000/api/auth/register", user).then((res) => {
            //     console.log(res);
            //     setRegister(true);
            // });
            // const name = "abdo";
        const configuration = 
         { 
            method: "post",
            url: "http://localhost:8000/api/auth/register",
            data: {
              email,
              password,
              name ,
            },
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          };
          axios(configuration)
         .then((result) => {
            console.log(result.data)
        setRegister(true);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
        setRegister(false);
        error = new Error();
      });
        // prevent the form from refreshing the whole page
        // make a popup alert showing the "submitted" text
        // alert("Submited");
      }

    return (
        <>

                            <div className="login-form-box">
            <h3 className="mb-30">Register</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="login-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="input-box mb--30">
                    <input type="text" name='name' value={name} placeholder="Full name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-box mb--30">
                    <input type="email" name='email' value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="input-box mb--30">
                    <input type="password" name='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-box  mb--30 ">
                    <input id="checkbox-2" type="checkbox" />
                    <label htmlFor="checkbox-2">I read & agree the terms & conditions.</label>
                </div>
                <button className="rn-btn edu-btn w-100" type="submit" onClick={(e) => handleSubmit(e)}>
                    <span>Register</span>
                </button>
            </form>
        </div>
                          
       
              {/* <h2>Register</h2>
              {register && <Alert variant="success">you are register succefily plaise verify your email</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e)=>handleSubmit(e)}>
    
        <Form.Group controlId="formBasicName">
          <Form.Label>your name</Form.Label>
          <Form.Control type="text" name='name' value={name} placeholder="Enter you name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

     
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

    

       
       

        
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

       
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
       
         

      </Form> */}
        </>
    )
}