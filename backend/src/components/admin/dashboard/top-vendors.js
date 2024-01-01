import React, { Fragment } from "react";
import vendorpic from "../../../assets/ecom/vendor-pic.png";

const TopVendors = () => {
	return (
		<Fragment>
            <div className="table-responsive">
                <table className="table table-para mb-0">
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="me-2 dash-top-img"><img src={vendorpic} alt="vendor-pic" className="img-fluid vendor-pic"/></div>
                                    <div>
                                        <h5 className="mb-0 font-12">Bakery Cafe</h5>
                                        <p className="mb-0 font-10">Cake Shop</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="review-box">
                                    <div>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                    <p className="mb-0 fw-normal font-10">Reviews</p>
                                </div>
                            </td>
                            <td>
                                <div className="total-order">
                                    <h5 className="mb-0 font-12 fw-500 text-black">4069</h5>
                                    <p className="font-10 mb-0">Total Orders</p>
                                </div>
                            </td>
                            <td>
                                <div className="total-sales">
                                    <h5 className="mb-0 font-12 fw-500 text-black">AED 20,03,094</h5>
                                    <p className="font-10 mb-0">Total Sales</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="me-2 dash-top-img"><img src={vendorpic} alt="vendor-pic" className="img-fluid vendor-pic"/></div>
                                    <div>
                                        <h5 className="mb-0 font-12">Bakery Cafe</h5>
                                        <p className="mb-0 font-10">Cake Shop</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="review-box">
                                    <div>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star-o'></i>
                                    </div>
                                    <p className="mb-0 fw-normal font-10">Reviews</p>
                                </div>
                            </td>
                            <td>
                                <div className="total-order">
                                    <h5 className="mb-0 font-12 fw-500 text-black">4069</h5>
                                    <p className="font-10 mb-0">Total Orders</p>
                                </div>
                            </td>
                            <td>
                                <div className="total-sales">
                                    <h5 className="mb-0 font-12 fw-500 text-black">AED 20,03,094</h5>
                                    <p className="font-10 mb-0">Total Sales</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="me-2 dash-top-img"><img src={vendorpic} alt="vendor-pic" className="img-fluid vendor-pic"/></div>
                                    <div>
                                        <h5 className="mb-0 font-12">Bakery Cafe</h5>
                                        <p className="mb-0 font-10">Cake Shop</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="review-box">
                                    <div>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>
                                    <p className="mb-0 fw-normal font-10">Reviews</p>
                                </div>
                            </td>
                            <td>
                                <div className="total-order">
                                    <h5 className="mb-0 font-12 fw-500 text-black">4069</h5>
                                    <p className="font-10 mb-0">Total Orders</p>
                                </div>
                            </td>
                            <td>
                                <div className="total-sales">
                                    <h5 className="mb-0 font-12 fw-500 text-black">AED 20,03,094</h5>
                                    <p className="font-10 mb-0">Total Sales</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default TopVendors;