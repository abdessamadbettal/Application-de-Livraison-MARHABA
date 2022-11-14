import React from 'react' ;
import { useState } from 'react';
import axios from "axios" ;

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [Forget, setForget] = useState(false);
    const [error , setError] = useState(null);

    const handleSubmit = (e) => {
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8000/api/auth/resetpassword",
            data: {
              password ,
              password2 ,
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
        e.preventDefault();
      }



  return (

    <div className="login-form-box">
            <h3 className="mb-30">récupérer votre mot de passe </h3>
            <form className="login-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="input-box mb--30">
                    <input type="password" name='password' value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-box mb--30">
                    <input type="password" name='password2' value={password2} placeholder="confimer password" onChange={(e) => setPassword2(e.target.value)} />
                </div>
                
                <button className="rn-btn edu-btn w-100 mb--30" type="submit" onClick={(e) => handleSubmit(e)}>
                    <span>Envoyer</span>
                </button>
            </form>
        </div>
   
  )
}

export default ResetPassword