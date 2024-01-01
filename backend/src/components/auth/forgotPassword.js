import React, { Fragment } from "react";
import { ArrowLeftCircle } from "react-feather";
import "../../../src/assets/scss/theme/_auth_style.scss";
//import "../../../src/assets/scss/theme/_ecom_style.scss";
import logo from "../../../src/assets/ecom/logo.png"
import { Button } from "reactstrap";
import {  Link } from "react-router-dom";

const ForgotPassword = () => {
	 
	return (
		<Fragment>
			<div className="page-wrapper">
				<div className="authentication-wrapper authentication-basic container-p-y">
   <div className="authentication-inner">
      <div className="card">
         <div className="card-body">
            <div className="app-brand justify-content-center">
               <img src={logo} alt className="site-logo" />
			</div>
               <h4 className="mb-4 text-center"> Forgot Password? </h4>
               <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
               <form id="formAuthentication" className="mb-3">
                  <div className="mb-3">
                     <label for="email" className="form-label">Email or Username</label>
                     <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus />
                  </div>
                  
                  <div className="mb-3">
                    
					 <Button
									color="primary"
									type="submit"
									className="w-100" >
									Reset Password
								</Button>
                    
                  </div>
               </form>
               <p className="text-center">
                    <Link to="/auth/login"> <ArrowLeftCircle className="align-top" / ><span className="align-top ms-2">Back to Login</span> </Link>
               </p>
           
         </div>
      </div>
   </div>
</div>
			</div>
		</Fragment>
	);
};

export default ForgotPassword;
