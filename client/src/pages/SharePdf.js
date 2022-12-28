import React from 'react' ;
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { NavLink , Outlet} from "react-router-dom";
import Share from '../components/form/Share';

const SharePdf = () => {
  return (
    <>
    <Breadcrumb 
               title="Publier un pdf"
               rootUrl="/"
               parentUrl="Home"
               currentUrl="Publier"
           />
           
          
           <div className="login-register-page-wrapper edu-section-gap bg-color-white ">
               <div className="container checkout-page-style">
                   <div className="row justify-content-center">
                       <div className="col col-lg-8"> 
                       
                           <Share/>
                        </div>
                      
                      </div>
                  </div>
              </div>
           
        </>
  )
}

export default SharePdf