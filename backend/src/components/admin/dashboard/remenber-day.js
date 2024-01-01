import React, { Fragment } from "react";
import handshake from "../../../assets/ecom/hand-shake-img.png";
import meeting from "../../../assets/ecom/meeting-img.png";

const RemenberDay = () => {
	return (
        <Fragment>
            <div className="row align-items-center mb-3">
                <div className="col-8">
                    <h3 className="text-lg font-semibold mb-0 font-14">10 September 2022</h3>
                </div>
                <div className="col-4 text-end">
                    <a href="javascript:void(0);" className="view-all">View All</a>
                </div>
            </div>
            <div className="event-box event-warning">
                <a href="javascript:void(0);">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div><img src={handshake} alt="request-img" className="img-fluid request-img me-2"/></div>
                            <div>
                                <h4 className="font-12 fw-semibold text-black mb-1">Onboarding Call</h4>
                                <p className="font-10 fw-normal text-black mb-0">10.30am to 12.30pm</p>
                            </div>
                        </div>
                        <div>
                            <i className='fa fa-angle-right text-black'></i>
                        </div>
                    </div>
                </a>
            </div>
            <hr/>
            <div className="event-box event-normal">
                <a href="javascript:void(0);">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div><img src={meeting} alt="request-img" className="img-fluid request-img me-2"/></div>
                            <div>
                                <h4 className="font-12 fw-semibold text-black mb-1">Meeting with Vendor</h4>
                                <p className="font-10 fw-normal text-black mb-0">01.45pm to 03.00pm</p>
                            </div>
                        </div>
                        <div>
                            <i className='fa fa-angle-right text-black'></i>
                        </div>
                    </div>
                </a>
            </div>
            <hr/>
            <div className="event-box event-normal">
                <a href="javascript:void(0);">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div><img src={meeting} alt="request-img" className="img-fluid request-img me-2"/></div>
                            <div>
                                <h4 className="font-12 fw-semibold text-black mb-1">Meeting with Vendor</h4>
                                <p className="font-10 fw-normal text-black mb-0">01.45pm to 03.00pm</p>
                            </div>
                        </div>
                        <div>
                            <i className='fa fa-angle-right text-black'></i>
                        </div>
                    </div>
                </a>
            </div>
            <hr/>
            <div className="event-box event-normal">
                <a href="javascript:void(0);">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div><img src={meeting} alt="request-img" className="img-fluid request-img me-2"/></div>
                            <div>
                                <h4 className="font-12 fw-semibold text-black mb-1">Meeting with Vendor</h4>
                                <p className="font-10 fw-normal text-black mb-0">01.45pm to 03.00pm</p>
                            </div>
                        </div>
                        <div>
                            <i className='fa fa-angle-right text-black'></i>
                        </div>
                    </div>
                </a>
            </div>
        </Fragment>
    )
}
export default RemenberDay;