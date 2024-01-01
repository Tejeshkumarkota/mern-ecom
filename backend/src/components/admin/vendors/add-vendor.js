import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Button, Form, Modal, Col, Row } from 'react-bootstrap';
import UploadImg from '../../../assets/ecom/avatars/upload.png';
import DatePicker from "react-multi-date-picker"

const AddVendor = (props) => {

    const [value, setValue] = useState(new Date());
    function handleChange(value){
        setValue(value)
    }

    const [duration, setDuration] = useState(new Date());
    function durationChange(dur){
        setDuration(dur)
    }

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return ( 
        <Modal show={props.addVendorModalShow} onHide={props.addVendorModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Vendor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md="12">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Service/shop Name *</Form.Label>
                                <Form.Control type="text" placeholder="Service/shop Name" />
                            </Form.Group>
                        </Col>
                        <Col md="12">
                            <h5 className='font-13 mb-3'>Upload Image</h5>
                            <div class="position-relative border-card upload_btn_box center mb-4">
                                <label class="upload_btn ">
                                    <p class="m-0">
                                        <span>
                                            <img class="img-fluid" alt="details" id="blah" src={UploadImg} />
                                                {selectedFile &&  
                                                <div class="upload_img_wrap">
                                                    <img src={preview} />
                                                </div>
                                                 }
                                        </span>
                                        <input type="file" onChange={onSelectFile} class="upload_inputfile d-none" />
                                    </p>
                                </label>
                            </div>
                        </Col>
                        <Col md="6">
                            <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Category *</Form.Label>
                                    <Form.Control as="select" className='custom-select'>
                                        <option>Please Select</option>
                                        <option value="1">Movie theater</option>
                                        <option value="2">Gym</option>
                                        <option value="3">Saloon</option>
                                        <option value="4">Cake</option>
                                        <option value="5">Food</option>
                                        <option value="6">Flower</option>
                                        <option value="7">Courior Services</option>
                                    </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md="12">
                            <h5 className='font-13 mb-3'>Contacts & Address *</h5>
                            <div className='border-card p-3 mb-3'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Owner Name :</Form.Label>
                                    <Form.Control type="text" placeholder="Owner Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Owner Contact Number :</Form.Label>
                                    <Form.Control type="text" placeholder="Owner Contact Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Manager Name :</Form.Label>
                                    <Form.Control type="text" placeholder="Manager Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Manager Contact Number :</Form.Label>
                                    <Form.Control type="text" placeholder="Manager Contact Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Service/Shop Address :</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Service/Shop Address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Service/Shop Mail Address :</Form.Label>
                                    <Form.Control type="email" rows={3} placeholder="Service/Shop Address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Service/Shop Contact :</Form.Label>
                                    <Form.Control type="email" rows={3} placeholder="Service/Shop Contact" />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col md="12">
                            <h5 className='font-13 mb-3'>License *</h5>
                            <div className='border-card p-3 mb-3'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Government License Number</Form.Label>
                                    <Form.Control type="text" placeholder="Government License Number" />
                                </Form.Group>
                                <Form.Group controlId="formFileGl" className="mb-3">
                                    <Form.Label>Upload GL Document</Form.Label>
                                    <Form.Control type="file" className='input-file'/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Manager Name :</Form.Label>
                                    <Form.Control type="text" placeholder="Manager Name" />
                                </Form.Group>
                                <Form.Group controlId="formFileStn" className="mb-3">
                                    <Form.Label>Upload STN Document</Form.Label>
                                    <Form.Control type="file" className='input-file'/>
                                </Form.Group>
                            </div>
                        </Col>
                        <Col md="12">
                            <h5 className='font-13 mb-3'>Subscription *</h5>
                            <div className='border-card p-3 mb-3'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Subscription type :</Form.Label>
                                    <Form.Control as="select" className='custom-select'>
                                        <option>Select here</option>
                                        <option value="1">Gold ( 6 month )</option>
                                        <option value="2">Normal ( monthly )</option>
                                        <option value="3">Premium ( Yearly )</option>
                                    </Form.Control>
                                </Form.Group>
                                <Row>
                                    <Col md="6">
                                        <Form.Label>Starts at :</Form.Label>
                                        <DatePicker 
                                            range
                                            value={value}
                                            className="form-control"
                                            onChange={handleChange}
                                            numberOfMonths={2}
                                         
                                        />
                                    </Col>
                                    <Col md="6">
                                        <Form.Group controlId="formFileGl" className="mb-3">
                                            <Form.Label>Subscription Duration :</Form.Label>
                                            <DatePicker 
                                                range
                                                value={duration}
                                                onChange={durationChange}
                                                className="form-control"
                                                numberOfMonths={2}
                                              
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="8">
                                        <div class="mb-3">
                                            <p class="font-12 text-black">Activate Auto Renual subscription plan through online by Vendor after payment </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            label=""
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="12">
                            <h5 className='font-13 mb-3'>Login Credentials of Vendors</h5>
                            <div className='border-card p-3 mb-3'>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Login ID</Form.Label>
                                    <Form.Control type="text" placeholder="Type here" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                <div class="d-flex justify-content-between align-items-center">
                                                <label for="" class="form-label">Password <span class="text-secondary fw-normal">(password will automatically generate)</span></label>
                                                <Link top="#" class="view-all mb-2">
                                                    <img src="https://estore.exaprojects.co/assets/img/reset-img.png" class="me-3 img-fluid"/>Reset Password
                                                </Link>
                                            </div>
                                    <Form.Control type="text" placeholder="12345" />
                                </Form.Group>
                                <Row>
                                    <Col md="8">
                                        <div class="mb-3">
                                        <p class="font-12 text-black">Allow Vendor to Reset password <span class="text-secondary">(if not, admin only can able change password) </span> </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            label="" 
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type='button' variant="secondary" onClick={props.addVendorModalClose}>
                    Cancel
                </Button>
                <Button type='submit' variant="primary">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
     );
}

export default AddVendor;