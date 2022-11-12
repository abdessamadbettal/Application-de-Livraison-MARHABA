import React from 'react' ;
import Layout from '../common/Layout' ;
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Login from '../components/form/Login';
import Register from '../components/form/Register';
// import link
// import { Link } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';
import { NavLink , Outlet} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


const LoginRegister = () => {
 
  return (
    <Layout>
         <Breadcrumb 
                    title="Login & Register"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Login & Register"
                />
                
                <div className='d-flex justify-content-center'>
                  
                
                              <ul className="nav nav-pills nav-justified mb-3 " id="ex1" role="tablist">
                            <li className="nav-item me-3" role="presentation">
                              <NavLink to="/loginregister/login" className="nav-link " end>Login</NavLink>
                            </li>
                            <li className="nav-item" role="presentation">
                              <NavLink to="/loginregister/register" className="nav-link"  end>Register</NavLink>
                            </li>
                          </ul>

                </div>
                <div className="login-register-page-wrapper edu-section-gap bg-color-white">
                    <div className="container checkout-page-style">
                        <div className="row ">
                            <div className="col"> 
                            
                                <Outlet/>
                             </div>
                           
                           </div>
                       </div>
                   </div>
                
    </Layout>
  )
}

export default LoginRegister