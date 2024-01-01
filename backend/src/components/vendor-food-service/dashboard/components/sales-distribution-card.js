import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Card, CardBody } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import SalesChart from './sales-chart';

const SalesDistributionCard = () => {
    return ( 
        <>
        <Card className='sales-card mb-3'>
            <CardBody>
                <Row className='align-items-center'>
                    <Col lg="7" md="6" sm="12" xs="12">
                        <h5 className='card-title'>
                            Item sales distribution
                        </h5>
                    </Col>
                    <Col lg="5" md="6" sm="12" xs="12">
                        <Form>
                            <Form.Group className="mb-0">
                                    <Form.Control as="select" className='custom-select font-12'>
                                        <option value="1">Mar 2022</option>
                                        <option value="2">Apr 2022</option>
                                        <option value="3">May 2022</option>
                                    </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Tabs>
                    <TabList className="nav nav-tabs dash-tabs mb-4">
                        <Tab className="nav-link">Delivered orders</Tab>
                        <Tab className="nav-link">Total sales</Tab>
                    </TabList>
                    <TabPanel> 
                        <SalesChart title={'5 delivered orders'} />     
                    </TabPanel>
                    <TabPanel>
                        <SalesChart title={'AED 1250 '} />
                    </TabPanel>
                </Tabs>
            </CardBody>
        </Card>
        </>
     );
}
 
export default SalesDistributionCard;