import React, {useState} from 'react';
import { Button, Form, Modal, Col, Row, FormCheck } from 'react-bootstrap';


const VerifyModal = (props) => {
    const [swt, setSwt] = useState(true);
    return ( 
        <Modal className='custom-modal' show={props.verifyModalShow} onHide={props.onVerifyModalClose}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Vendor
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col md="12">
                        <h5 className='font-13 mb-3'>Subscription</h5>
                        <div className='border-card p-3 mb-3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Subscription type :</Form.Label>
                                <Form.Control as="select" className='custom-select'>
                                    <option>Please Select</option>
                                </Form.Control>
                            </Form.Group>
                            <Row>
                                <Col md="5">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Starts at :</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md="7">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Subscription Duration :</Form.Label>
                                        <Form.Control type="text" placeholder="Subscription Duration" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="">
                                <FormCheck custom type="switch">
                                    <FormCheck.Label className='me-2' onClick={() => setSwt(!swt)}>
                                    <strong className='me-2'>Password </strong>(password will automatically generate)
                                    </FormCheck.Label>
                                    <FormCheck.Input isInvalid checked={swt} />
                                </FormCheck>
                            </Form.Group>
                        </div>
                    </Col>
                    <Col md="12">
                        <h5 className='font-13 mb-3'>Login Credentials of Vendors</h5>
                        <div className='border-card p-3 mb-3'>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Login ID</Form.Label>
                                <Form.Control type="text" placeholder="Type Here" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label><strong className='me-2'>Password </strong>(password will automatically generate)</Form.Label>
                                <Form.Control type="password" placeholder="123456" />
                            </Form.Group>
                            <Form.Group controlId="">
                                <FormCheck custom type="switch">
                                    <FormCheck.Label className='me-2' onClick={() => setSwt(!swt)}>
                                    <strong className='me-2'>Password </strong>(password will automatically generate)
                                    </FormCheck.Label>
                                    <FormCheck.Input isInvalid checked={swt} />
                                </FormCheck>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.onVerifyModalClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={props.onVerifyModalClose}>
                    Submit
                </Button>
                </Modal.Footer>
            </Form>
        </Modal>
     );
}
 
export default VerifyModal;