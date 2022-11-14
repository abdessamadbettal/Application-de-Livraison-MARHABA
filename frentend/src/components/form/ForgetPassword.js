import React from 'react' ;
import { useState } from 'react';
import axios from "axios" ;

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [Forget, setForget] = useState(false);
    const [error , setError] = useState(null);

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
            setForget(false);
            setError(error.response.data.message)
            console.log(error);
          error = new Error();
        });
    
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        // alert("Submited");
      }



  return (

    <div className="login-form-box">
            <h3 className="mb-30">mot de passe oublier</h3>
            <form className="login-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="input-box mb--30">
                    <input type="email" name='email' value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <button className="rn-btn edu-btn w-100 mb--30" type="submit" onClick={(e) => handleSubmit(e)}>
                    <span>Envoyer</span>
                </button>
            </form>
        </div>
   
  )
}

export default ForgetPassword