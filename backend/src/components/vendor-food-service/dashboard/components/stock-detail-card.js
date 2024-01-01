import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardBody } from "reactstrap";

const StockDetailCard = () => {
    const data =[
        {
            id: '1',
            title: 'In Stock items',
            value: '450'
        },
        {
            id: '2',
            title: 'Out of stock items',
            value: '25'
        },
    ]
    return ( 
        <>
        <Card className='stock-card mb-3'>
            <CardBody>
                <h5 className='card-title'>Stock Details</h5>
                <Row>
                    {data.map((item, i) => (
                        <Col lg="6" md="6" sm="12" xs="12">
                            <div className='border-card'>
                                <h5>{item.title}</h5>
                                <Row className='align-items-center g-0'>
                                    <Col xs="6">
                                        <h6>{item.value}</h6>
                                    </Col>
                                    <Col xs="6" className='text-end'>
                                        <Link to={''} className='link-text'>view</Link>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
        </>
     );
}
 
export default StockDetailCard;