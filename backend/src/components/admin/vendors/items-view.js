import React, { Fragment, useState } from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import {MoreVertical} from 'react-feather';
import BlockItemModal from './block-item-modal'
import OffensiveItemModal from './offensive-item-modal'
import DisableItemModal from './disable-item-modal'
import vendorDeailsImg from "../../../assets/ecom/vendor-details-img.png";

const ItemsView = () => {

    const [blockItemModalShow, setblockItemModalShow] = useState(false);
    const blockItemModalOpen = () => setblockItemModalShow(true);

    const [disableItemModalShow, setdisableItemModalShow] = useState(false);
    const disableItemModalOpen = () => setdisableItemModalShow(true);

    const [offensiveItemModalShow, setoffensiveItemModalShow] = useState(false);
    const offensiveItemModalOpen = () => setoffensiveItemModalShow(true);

    return (                  
        <div>
            <Form>
                <div className="row">
                    <div className="col-12 mb-3">
                    <img src={vendorDeailsImg} alt="images" className="img-fluid w-100 vendor-details-img"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-8 col-12">
                        <div className="mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                            <Form.Group>
                                <Form.Label>Category *</Form.Label>
                                <Form.Control as="select" className='custom-select'>
                                    <option selected="">Select category</option>
                                    <option value="1">Gym</option>
                                    <option value="2">Food</option>
                                    <option value="3">Cake</option>
                                    <option value="4">Flower</option>
                                    <option value="5">Courior Services</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-12 text-end">
                        <label className='form-label'>&nbsp;</label>

                        <Dropdown  autoClose="outside">
                            <Dropdown.Toggle  id="dropdown-autoclose-outside" className='filter-btn'>
                                <i class="fa fa-filter font-16 me-2"></i> Filter
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Form>
                                <Dropdown.Item>
                                    <Form.Check
                                        type="radio"
                                        label={`Blocked`}
                                        name="filter"
                                        id={`filter1`}
                                    />
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Form.Check
                                        type="radio"
                                        label={`Offensive`}
                                        name="filter"
                                        id={`filter2`}
                                    />  
                                </Dropdown.Item>
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </div>
                <div className="row mt-sm-3"> 
                    <div className="col-12 mb-3">
                        <h5 className="modal-inner-title">Available Services ( 2 )</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 mb-3">
                        <div className="border-card p-2">
                            <div className="item-card">
                                <img src="https://estore.exaprojects.co/assets/img/item-img1.png" alt="item" className="img-fluid w-100 mb-2"/>
                                <div className="item-details">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <p className="item-title mb-0">Cardio Session</p>
                                        <p className="item-rating mb-0 d-flex">
                                            <i className="fa fa-star ms-1"></i>
                                            <i className="fa fa-star ms-1"></i>
                                            <i className="fa fa-star ms-1"></i>
                                            <i className="fa fa-star ms-1"></i>
                                            <i className="fa fa-star ms-1"></i>
                                        </p>
                                    </div>
                                    <div className="row item-data mb-3">
                                        <div className="col-sm-6">
                                            <h6>Timings :</h6>
                                            <p>2 times / day</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h6>Durations</h6>
                                            <p>(1hr 45 mins)</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="font-18 fw-500 text-black mb-0">AED 50</p>
                                        
                                        <Dropdown className='action-more'>
                                            <Dropdown.Toggle>
                                                <MoreVertical/>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" onClick={blockItemModalOpen}>Block item</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={disableItemModalOpen}>Disable item</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={offensiveItemModalOpen}>Mark as offensive</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-3">
                        <div className="border-card p-2">
                            <div className="item-card">
                                <img src="https://estore.exaprojects.co/assets/img/item-img2.png" alt="item" className="img-fluid w-100 mb-2"/>
                                <div className="item-details">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <p className="item-title mb-0">Cardio Session</p>
                                        <p className="item-rating mb-0 text-danger d-flex">
                                            <i className="fa fa-star ms-1 text-danger"></i>
                                            <i className="fa fa-star ms-1 text-danger"></i>
                                        </p>
                                    </div>
                                    <div className="row item-data mb-3">
                                        <div className="col-sm-6">
                                            <h6>Timings :</h6>
                                            <p>2 times / day</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h6>Durations</h6>
                                            <p>(1hr 45 mins)</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="font-18 fw-500 text-black mb-0">AED 50</p>

                                        <Dropdown className='action-more'>
                                            <Dropdown.Toggle>
                                                <MoreVertical/>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" onClick={blockItemModalOpen}>Block item</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={disableItemModalOpen}>Disable item</Dropdown.Item>
                                                <Dropdown.Item href="#" onClick={offensiveItemModalOpen}>Mark as offensive</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
            <BlockItemModal blockItemModalShow = {blockItemModalShow} blockItemModalClose={()=> setblockItemModalShow(false)}/>
            <DisableItemModal disableItemModalShow = {disableItemModalShow} disableItemModalClose={()=> setdisableItemModalShow(false)}/>
            <OffensiveItemModal offensiveItemModalShow = {offensiveItemModalShow} offensiveItemModalClose={()=> setoffensiveItemModalShow(false)}/>
        </div>
    )
}
export default ItemsView;