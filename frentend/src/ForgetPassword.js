import React from 'react' ;
import { useState } from 'react';
import { Link } from 'react-router-dom' ;
import {Form , Button} from 'react-bootstrap' ;
import axios from "axios" ;

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [Forget, setForget] = useState(false);

    const handleSubmit = (e) => {
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8000/api/auth/forgetpassword",
            data: {
              email,
            },
          };
            // make the API call
        axios(configuration)
        .then((result) => {
            console.log(result)
          setForget(true);
        })
        .catch((error) => {
            console.log(error);
          error = new Error();
        });
    
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        alert("Submited");
      }



  return (
    <div>
        
      <h1>ForgetPassword</h1>  

          <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>plaise entrer your Email address</Form.Label>
          <Form.Control type="email" name='email' value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>  

        {/* submit button */}
        <Button variant="danger" className='text m-2' type="submit" onClick={(e) => handleSubmit(e)}>
          envoyer
        </Button>
        </Form>
        
        </div>
  )
}

export default ForgetPassword