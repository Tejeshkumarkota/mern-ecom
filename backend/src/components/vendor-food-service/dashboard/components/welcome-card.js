import React from 'react';
import { Card, CardBody } from "reactstrap";
import { Row, Col, Form } from 'react-bootstrap';

const WelcomeCard = () => {
    return ( 
        <Card className='welcome-card mb-3'>
            <CardBody className="p-2">
                <Row className="align-items-center">
                    <Col lg="10" md="8" sm="6" xs="12">
                        <h2 class="vendor-head mb-0">Hello,<span class="vendor-name"> Pablo </span></h2>
                    </Col>
                    <Col lg="2" md="4" sm="6" xs="12">
                        <Form>
                            <Form.Group className="mb-0">
                                    <Form.Control as="select" className='custom-select'>
                                        <option>Today</option>
                                        <option value="1">Mar 2022</option>
                                        <option value="2">Apr 2022</option>
                                    </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </CardBody>
        </Card>
     );
}
 
export default WelcomeCard;