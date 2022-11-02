import React from 'react'
import { Form, Button , Alert  } from "react-bootstrap";
import { useState } from 'react';
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
              <h2>Register</h2>
              {register && <Alert variant="success">you are register succefily plaise verify your email</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* namr*/}
        <Form.Group controlId="formBasicName">
          <Form.Label>your name</Form.Label>
          <Form.Control type="text" name='name' value={name} placeholder="Enter you name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

    

       
       

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
         {/* display success message */}
         

      </Form>
        </>
    )
}