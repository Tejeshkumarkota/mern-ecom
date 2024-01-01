import React, { Fragment } from "react";
import { EyeOff } from "react-feather";
import "../../assets/scss/slick.scss";
import "../../assets/scss/slick-theme.scss";
import "../../../src/assets/scss/theme/_auth_style.scss";
//import "../../../src/assets/scss/theme/_ecom_style.scss";
import logo from "../../../src/assets/ecom/logo.png"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {  useNavigate ,Link } from "react-router-dom";

const Login = () => {
	 
	const history = useNavigate(); 

	const routeChange = () => {
		history(`${process.env.PUBLIC_URL}/admin/dashboard`);
	};
	return (
		<Fragment>
			<div className="page-wrapper">
				{/* <div className="authentication-box">
					<Container>
						<Row>
							<Col className="col-md-5 p-0 card-left">
								<Card className="bg-primary">
									<div className="svg-icon">
										<img alt="" src={stats} className="Img-fluid" />
									</div>
									<Slider className="single-item" {...settings}>
										<div>
											<div>
												<h3>Welcome to Multikart</h3>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. Lorem Ipsum has been the
													industry's standard dummy.
												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to Multikart</h3>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. Lorem Ipsum has been the
													industry's standard dummy.
												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to Multikart</h3>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. Lorem Ipsum has been the
													industry's standard dummy.
												</p>
											</div>
										</div>
									</Slider>
								</Card>
							</Col>
							<Col className="col-md-7 p-0 card-right">
								<Card className="tab2-card">
									<CardBody>
										<LoginTabset />
									</CardBody>
								</Card>
							</Col>
						</Row>
						<a
							href="https://multikart-react.vercel.app/"
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary back-btn"
						>
							<ArrowLeft />
							back
						</a>
					</Container>
				</div> */}
				<div className="authentication-wrapper authentication-basic container-p-y">
   <div className="authentication-inner">
      <div className="card">
         <div className="card-body">
            <div className="app-brand justify-content-center">
               <img src={logo} alt className="site-logo" />
			</div>
               <form id="formAuthentication" className="mb-3">
                  <div className="mb-3">
                     <label for="email" className="form-label">Email or Username</label>
                     <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus />
                  </div>
                  <div className="mb-3 form-password-toggle">
                     <div className="d-flex justify-content-between">
                        <label className="form-label" for="password">Password</label>
						<Link to="/forgot-password">
                        	<small>Forgot Password?</small>
                        </Link>
                     </div>
                     <div className="input-group input-group-merge">
                        <input type="password" id="password" className="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" />
                        <span className="input-group-text cursor-pointer"><EyeOff /></span>
                     </div>
                  </div>
                  <div className="mb-3">
                     <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember-me" />
                        <label className="form-check-label" for="remember-me">
                        Remember Me
                        </label>
                     </div>
                  </div>
                  <div className="mb-3">
                     {/* <a href="{{url('/admin/dashboard')}}" className="btn btn-primary d-grid w-100 mb-2" type="submit">Login As Admin</a> */}
					 <Button
									color="primary"
									type="submit"
									className="w-100"
									onClick={() => routeChange()}
								>
									Login As Admin
								</Button>
                     {/* <a href="{{url('/vendor/dashboard')}}" className="btn btn-primary d-grid w-100" type="submit">Login As Vendor</a> */}
                  </div>
               </form>
               <p className="text-center">
                  <span>Not a member?</span>
				  <Link to="/register"> <span>Register</span> </Link>
               </p>
           
         </div>
      </div>
   </div>
</div>
			</div>
		</Fragment>
	);
};

export default Login;
