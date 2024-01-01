import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card, CardBody } from "reactstrap";
import cardImg1 from '../../../../assets/ecom/5.png';
import cardImg2 from '../../../../assets/ecom/6.png';
const DailySalesRevenueCard = () => {
    const data= [
        {
            id: '1',
            cardImg: cardImg1,
            cardValue: 'AED 7520',
            cardText: 'Today Revenue'
        },
        {
            id: '2',
            cardImg: cardImg2,
            cardValue: '5',
            cardText: 'Total Orders'
        }
    ]
    return ( 
        <>
            <Row>
                <Col lg="12" md="12" sm="12" xs="12">
                    <Card className='revenue-card mb-3'>
                        <CardBody>
                            <h5 className='card-title'>Daily Sales & Revenue</h5>
                            {data.map((item, i) => (
                            <div className='border-card'>
                                <div className='border-card-img'>
                                    <img src={item.cardImg} alt='card-img' />
                                </div>
                                <div className='border-card-text'>
                                    <h5>{item.cardValue}</h5>
                                    <h6>{item.cardText}</h6>
                                </div>
                            </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
     );
}
 
export default DailySalesRevenueCard;