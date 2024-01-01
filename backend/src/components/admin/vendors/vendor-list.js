import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Container,Form, FormGroup, Input } from "reactstrap";
import user1 from '../../../assets/ecom/category-img1.png';
import user2 from '../../../assets/ecom/category-img2.png';
import user3 from '../../../assets/ecom/category-img3.png';
import user4 from '../../../assets/ecom/category-img4.png';
import user5 from '../../../assets/ecom/category-img5.png';
import user6 from '../../../assets/ecom/category-img6.png';
import user7 from '../../../assets/ecom/category-img7.png';
import user8 from '../../../assets/ecom/category-img8.png';
import { Plus } from "react-feather";
import AddVendor from './add-vendor';

const VendorListing = () => {

   const data = [
        {
            id: 1,
            img: user1,
            title: 'GYM',
            check: true,
            total_vendors: '30',
            active_endors: "30",
            Status: "Active"
        },
        {
            id: 2,
            img: user2,
            title: 'Cake',
            check: true,
            total_vendors: '35',
            active_endors: "48",
            Status: "Active"
        },
        {
            id: 3,
            img: user3,
            title: 'Movie Theater',
            check: true,
            total_vendors: '08',
            active_endors: "08",
            Status: "Active"
        },
        {
            id: 4,
            img: user4,
            title: 'Grocery',
            check: true,
            total_vendors: '10',
            active_endors: "09",
            Status: "Active"
        },
        {
            id: 5,
            img: user5,
            title: 'Cab',
            check: true,
            total_vendors: '02',
            active_endors: "02",
            Status: "Active"
        },
        {
            id: 6,
            img: user6,
            title: 'Courrier',
            check: true,
            total_vendors: '28',
            active_endors: "24",
            Status: "Active"
        },
        {
            id: 7,
            img: user7,
            title: 'Food',
            check: true,
            total_vendors: '42',
            active_endors: "40",
            Status: "Active"
        },
        {
            id: 8,
            img: user8,
            title: 'Saloon',
            check: true,
            total_vendors: '50',
            active_endors: "42",
            Status: "Active"
        }
    ]

    const [addVendorModalShow, setaddVendorModalShow] = useState(false);
    const onVendorModalOpen = () => setaddVendorModalShow(true);

  return (
    <>
        <Fragment>
			<Container fluid={true} className="body-top-space">
				<Card className="mb-3">
					<CardBody className="p-2 px-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-4 col-md-4 col-lg mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                <h1 className="text-lg font-semibold mb-0 font-28">Vendors</h1>
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                <div className="input-group search-form">
                                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="searchBox"/>
                                    <span className="input-group-text" id="searchBox"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-lg-auto text-end mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                <button type="button" onClick={onVendorModalOpen} className="btn btn-outline-secondary w-100 px-3 py-2 d-flex" id="add_vendor_btn">
                                    <Plus className="me-2"/> Add Vendor
                                </button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <div className="row mb-3 align-items-center">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-7 mb-3 mb-sm-0 mb-md-0 mb-lg-0">
                        <h1 className="text-lg font-semibold mb-0 font-16">Category</h1>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-5 text-end mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="input-group filter mb-3 me-3 transparent">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-filter font-20 p-2"></i></span>
                                <select className="form-select">
                                    <option selected="selected">Filter</option>
                                </select>
                            </div>
                            <div className="input-group filter mb-3 transparent">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-sort-alpha-desc font-20 p-2"></i></span>
                                <select className="form-select">
                                    <option selected="selected">Sort By</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Form>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-12 col-sm-6 col-md-4" key={i}>
                                <div className="category-item">
                                    <div className="position-relative category-overlay">
                                        <img src={item.img} alt="vendor-pic" className="img-fluid category-img"/>
                                        <div className="category-choose">
                                            <div className="d-flex justify-content-between">
                                                <Link to={'/admin/vendor/category-list'}>
                                                    <h5>{item.title}</h5>
                                                </Link>
                                                <FormGroup switch className="form-check form-switch">
        <Input type="checkbox" role="switch" className="form-check-input"/>
      </FormGroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category-details p-3">  
                                        <div className="row">
                                            <div className="category-cnt col-6">
                                                <h6>Total Vendors</h6>
                                                <p>{item.total_vendors}</p>
                                            </div>
                                            <div className="category-cnt col-6">
                                                <h6>Active Vendors</h6>
                                                <p>{item.active_endors}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Form>
            </Container>
            <AddVendor 
                    addVendorModalShow = {addVendorModalShow}
					addVendorModalClose={()=> setaddVendorModalShow(false)} />
        </Fragment>
    </>
  )
}
export default VendorListing;