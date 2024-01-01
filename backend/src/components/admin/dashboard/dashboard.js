import React, { Fragment } from "react";
// import Breadcrumb from "../../common/breadcrumb";
import Analytics from "../dashboard/analytics";
import VendorsUsers from "../dashboard/vendors-users";
import OnboardingGraph from "../dashboard/onboarding-graph";
import TopListing from "../dashboard/top-listing";
import VendorRequest from "../dashboard/vendor-request";
import CalenderView from "../dashboard/calender";
import RemenberDay from "../dashboard/remenber-day";

import {
	Container,
} from "reactstrap";

const DashboardEcom = () => {
	
	return (
		<Fragment>
			{/* <Breadcrumb title="Dashboard" parent="Dashboard" /> */}
			<Container fluid={true} className="body-top-space">
				<div className="row g-3">
					<div className="col-lg-8 mb-4 order-0">
						<div className="row">
							<div className="col-12">
								<div className="card mb-4">
									<div className="card-body prem-2">
										<div className="row align-items-center">
											<div className="col-12">
												<h1 className="font-semibold mb-2 font-28">Welcome Back, John</h1>
												<p className="text-black-50 mb-0">Here is what happening in store Today</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-12 col-md-6 col-lg-6">
								<Analytics/>
							</div>
							<div className="col-sm-12 col-12 col-md-6 col-lg-6">
								<VendorsUsers/>
							</div>
						</div>
						<div className="row mb-4">
							<div className="col-md-12">
								<OnboardingGraph/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<TopListing/>
							</div>
						</div>
					</div>
					<div className="col-lg-4 mb-4 order-0">
						<div className="row">
							<div className="col-12">
								<VendorRequest/>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="card mb-4">
									<div className="card-body prem-2">
										<div className="row align-items-center mb-3">
											<div className="col-12">
												<h3 className="text-lg font-semibold mb-3">Reminder</h3>
											</div>
											<div className="col-12">
												<CalenderView/>
											</div>
										</div>
										<RemenberDay/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Fragment>
	);
};

// javascript:void(0)

export default DashboardEcom;
