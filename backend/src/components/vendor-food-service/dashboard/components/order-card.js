import React from 'react';
import { Card, CardBody } from "reactstrap";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArrowLink from '../../../../assets/ecom/next.png'

const OrderCard = () => {
    return ( 
        <Card className='order-card mb-3'>
            <CardBody>
                <Row className="align-items-center">
                    <Col lg="6" md="8" sm="6" xs="12">
                        <div class="d-flex align-items-center orders-today">
                            <h5>10</h5>
                            <h6>New Order Today</h6>
                        </div>
                    </Col>
                    <Col lg="6" md="4" sm="6" xs="12" className='text-end'>
                        <div class="d-flex align-items-center justify-content-end manage-orders">
                            <Link to={''} >
                               <span className='me-3'> Manage Order</span>
                               <img src={ArrowLink} alt="link-arrow" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
     );
}
 
export default OrderCard;