import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import requestimg from "../../../assets/ecom/request-img.png";

const VendorRequest = () => {
	return (
		<Fragment>
           <div className="card mb-4">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="text-lg font-semibold mb-0">Vendor Request</h3>
                        </div>
                        <div className="col-4 text-end">
                            <Link to='javascript:void(0);' className="view-all"> View All </Link> 
                        </div>
                    </div>
                </div>
                <div className="card-body prem-2 py-0">
                    <div className="request-box">
                        <h4 className="font-12 text-black lh-20 mb-2"><strong>Mcdoodles vendor</strong> in grocery category wants to join e-store</h4>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={requestimg} alt="request-img" className="img-fluid request-img me-2"/>
                                <p className="mb-0">Mcdoodles</p>
                            </div>
                            <div>
                                <a href="javascript:void(0);" className="view-btn">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="request-box">
                        <h4 className="font-12 text-black lh-20 mb-2"><strong>Mcdoodles vendor</strong> in grocery category wants to join e-store</h4>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={requestimg} alt="request-img" className="img-fluid request-img me-2"/>
                                <p className="mb-0">Mcdoodles</p>
                            </div>
                            <div>
                                <a href="javascript:void(0);" className="view-btn">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="request-box">
                        <h4 className="font-12 text-black lh-20 mb-2"><strong>Mcdoodles vendor</strong> in grocery category wants to join e-store</h4>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={requestimg} alt="request-img" className="img-fluid request-img me-2"/>
                                <p className="mb-0">Mcdoodles</p>
                            </div>
                            <div>
                                <a href="javascript:void(0);" className="view-btn">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default VendorRequest;