import React, { Fragment } from "react";
import { EyeOff } from "react-feather";
import "../../../src/assets/scss/theme/_auth_style.scss";
//import "../../../src/assets/scss/theme/_ecom_style.scss";
import logo from "../../../src/assets/ecom/logo.png"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {   Link } from "react-router-dom";

const Register = () => {
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
               <h4 className="mb-4 text-center"> Login </h4>
               <form id="formAuthentication" className="mb-3">
                  <div className="mb-3">
                     <label for="email" className="form-label">Email or Username</label>
                     <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus />
                  </div>
                  <div className="mb-3">
                      
                        <label className="form-label" for="password">Password</label>
						 
                     
                     <div className="input-group input-group-merge">
                        <input type="password" id="password" className="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" />
                        <span className="input-group-text cursor-pointer"><EyeOff /></span>
                     </div>
                  </div>
                  <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                <label className="form-check-label" for="terms-conditions">
                  I agree to
                  <Link to="/"> privacy policy & terms </Link>
                </label>
              </div>
            </div>
                
                  <div className="mb-3">
                     
					 <Button
									color="primary"
									type="submit"
									className="w-100"
									 
								>
									Register
								</Button>
                    
                  </div>
               </form>
               <p className="text-center">
                  <span>Already have an account?</span>
				  <Link to="/auth/login"> <span>Sign in</span> </Link>
               </p>
           
         </div>
      </div>
   </div>
</div>
			</div>
		</Fragment>
	);
};

export default Register;
