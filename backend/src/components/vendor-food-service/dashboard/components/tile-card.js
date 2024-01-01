import React from 'react';
import tileImg1 from '../../../../assets/ecom/1.png';
import tileImg2 from '../../../../assets/ecom/2.png';
import tileImg3 from '../../../../assets/ecom/3.png';
import tileImg4 from '../../../../assets/ecom/4.png';
import { Row, Col } from 'react-bootstrap';
import { Card, CardBody } from "reactstrap";

const TileCard = () => {
    const data= [
        {
            id: '1',
            tileImg: tileImg1,
            tileValue: '5',
            tileText: 'Delivered'
        },
        {
            id: '2',
            tileImg: tileImg2,
            tileValue: '10',
            tileText: 'Preparing'
        },
        {
            id: '3',
            tileImg: tileImg3,
            tileValue: '1',
            tileText: 'Ready to deliver'
        },
        {
            id: '4',
            tileImg: tileImg4,
            tileValue: '5',
            tileText: 'On the way to deliver'
        },
    ]
    return ( 
            <Row className="align-items-center">
                {data.map((item, i) => (
                    <Col lg="6" md="6" sm="6" xs="12">
                        <Card className='tile-card mb-3'>
                            <CardBody>
                                <div className='d-flex align-items-center tiles'>
                                    <div className='tile-img'>
                                        <img src={item.tileImg} alt='tile-img' />
                                    </div>
                                    <div className='tile-text'>
                                        <h5>{item.tileValue}</h5>
                                        <h6>{item.tileText}</h6>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
     );
}
 
export default TileCard;