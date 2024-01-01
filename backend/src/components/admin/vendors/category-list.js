import React, { Fragment, useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import user1 from '../../../assets/ecom/category-list1.png';
import user2 from '../../../assets/ecom/category-list2.png';
import user3 from '../../../assets/ecom/category-list3.png';
import tile_img from '../../../assets/ecom/tile-img1.png';
import tile_img2 from '../../../assets/ecom/tile-img2.png';
import tile_img3 from '../../../assets/ecom/tile-img3.png';
import graph_high from '../../../assets/ecom/graph-high.png';
import graph_low from '../../../assets/ecom/graph-low.png';
import DetailsModal from './details-modal';
import { MoreHorizontal } from "react-feather";
import { Plus } from "react-feather";
import AddVendor from './add-vendor';

const CategoryListing = () => {

    const data = [
        {
            id: 1,
            img: user1,
            title: 'Fresh.shop',
            check: true,
            e_store_ranking: '10',
            ratings: "4.2",
            active_items: "130",
            Offers:"Yes"
        },
        {
            id: 2,
            img: user2,
            title: 'Grocery 24-7',
            check: true,
            e_store_ranking: '11',
            ratings: "4.2",
            active_items: "260",
            Offers:"Yes"
        },
        {
            id: 3,
            img: user3,
            title: 'Organic Store',
            check: true,
            e_store_ranking: '20',
            ratings: "4.4",
            active_items: "160",
            Offers:"Yes"
        },
        {
            id: 4,
            img: user1,
            title: 'Fresh.Shop',
            check: true,
            e_store_ranking: '22',
            ratings: "4.2",
            active_items: "110",
            Offers:"Yes"
        },
        {
            id: 5,
            img: user2,
            title: 'Grocery 24-7',
            check: true,
            e_store_ranking: '10',
            ratings: "4.3",
            active_items: "220",
            Offers:"Yes"
        },
        {
            id: 6,
            img: user3,
            title: 'Organic Store',
            check: true,
            e_store_ranking: '10',
            ratings: "4.2",
            active_items: "130",
            Offers:"Yes"
        },
        {
            id: 7,
            img: user1,
            title: 'Fresh.Shop',
            check: true,
            e_store_ranking: '10',
            ratings: "4.2",
            active_items: "110",
            Offers:"Yes"
        },
        {
            id: 8,
            img: user2,
            title: 'Grocery 24-7',
            check: true,
            e_store_ranking: '22',
            ratings: "4.4",
            active_items: "250",
            Offers:"Yes"
        }
    ]

    const [addVendorModalShow, setaddVendorModalShow] = useState(false);
    const onVendorModalOpen = () => setaddVendorModalShow(true);

    const [detailsModalShow, setDetailsModalShow] = useState(false);
    const onDetailsModalOpen = () => setDetailsModalShow(true);

    const closeModal = (mag) => {
        console.log(mag);
        //setDetailsModalShow(false);
      };

   return (
     <>
        <Fragment>
			<Container fluid={true} className="body-top-space">
                
				<div className="card mb-3">
					<div className="card-body p-2 px-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-4 col-md-4 col-lg mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                <h1 className="text-lg font-semibold mb-0 font-28">Vendors</h1>
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb" className="custom-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/admin/vendor">Vendors</Link></li>
                                <li className="breadcrumb-item"><Link to="/admin/vendor">Category</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Category List </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row mb-3 align-items-center">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-7 mb-3 mb-sm-0 mb-md-0 mb-lg-0">
                        <h1 className="text-lg font-semibold mb-0 font-16">Grocery <small className="text-gray-400 font-13 ms-1">09/10</small></h1>
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
                
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-sm-3 mb-md-3">
                        <div className="tiles-box h-100">
                            <h4>Top Vendor (Rating)</h4>
                            <div className="d-flex align-items-center">
                                <img src={tile_img} alt="tile-img" className="tile-img me-2 "/>
                                <p className="mb-0">Fresh.Shop</p>
                            </div>
                            <div className="text-end mt-3">
                                <img src={graph_high} className="graph-img" alt="graph-status"/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-sm-3 mb-md-3">
                        <div className="tiles-box h-100">
                            <h4>Top Vendor ( Revenue)</h4>
                            <div className="d-flex align-items-center">
                                <img src={tile_img2} alt="tile-img" className="tile-img me-2 "/>
                                <p className="mb-0">Grocery 24-7</p>
                            </div>
                            <div className="text-end mt-3">
                                <img src={graph_high} className="graph-img" alt="graph-status"/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-sm-3 mb-md-3">
                        <div className="tiles-box h-100">
                            <h4>Last Vendor (Rating)</h4>
                            <div className="d-flex align-items-center">
                                <img src={tile_img3} alt="tile-img" className="tile-img me-2 "/>
                                <p className="mb-0">Garam Masala</p>
                            </div>
                            <div className="text-end mt-3">
                                <img src={graph_low} className="graph-img" alt="graph-status"/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-sm-3 mb-md-3">
                        <div className="tiles-box h-100">
                            <h4>Last Vendor (Revenue)</h4>
                            <div className="d-flex align-items-center">
                                <img src={tile_img3} alt="tile-img" className="tile-img me-2 "/>
                                <p className="mb-0">Garam Masala</p>
                            </div>
                            <div className="text-end mt-3">
                                <img src={graph_low} className="graph-img" alt="graph-status"/> 
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
                                                <Link to={'/admin/category-list'}>
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
                                            <div className="col-12 text-right">
                                                <Dropdown className="vendor-dropdown">
                                                    <Dropdown.Toggle variant="success" id="dropdown-button-drop-start" key='start' drop='start'>
                                                        {/* <i className="fa fa-ellipsis-h text-black c-pointer"></i> */}
                                                        <MoreHorizontal className="c-pointer text-black"/>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#" onClick={onDetailsModalOpen}>
                                                            <i className="fa fa-eye me-2"></i>Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">
                                                            <i className="fa fa-edit me-2"></i>Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">
                                                            <i className="fa fa-ban me-2"></i>Block
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="category-cnt col-3">
                                                <h6>e-store Ranking</h6>
                                                <p>{item.e_store_ranking}</p>
                                            </div>
                                            <div className="category-cnt col-3">
                                                <h6>Ratings</h6>
                                                <p>{item.ratings}</p>
                                            </div>
                                            <div className="category-cnt col-3">
                                                <h6>Active Items</h6>
                                                <p>{item.active_items}</p>
                                            </div>
                                            <div className="category-cnt col-3">
                                                <h6>Offers</h6>
                                                <p>{item.Offers}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Form>
            </Container>
            <DetailsModal 
                    detailsModalShow= {detailsModalShow}
					onDetailsModalClose={()=> setDetailsModalShow(false)} closeModal = {closeModal} />
             <AddVendor 
                    addVendorModalShow = {addVendorModalShow}
					addVendorModalClose={()=> setaddVendorModalShow(false)} />
        </Fragment>
    </>
   )
}

export default CategoryListing;