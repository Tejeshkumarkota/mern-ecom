import React, {Fragment} from 'react';
import WelcomeCard from './components/welcome-card';
import {Container } from "reactstrap";
import OrderCard from './components/order-card';
import { Row, Col } from 'react-bootstrap';
import TileCard from './components/tile-card';
import DailySalesRevenueCard from './components/daily-sales-and-revenue-card';
import OverviewGraph from './components/overview-graph';
import SalesDistributionCard from './components/sales-distribution-card';
import StockDetailCard from './components/stock-detail-card';


const DashboardWrapper = () => {
    return ( 
        <>
            <Fragment>
                <Container fluid={true} className="body-top-space">
                    <WelcomeCard />
                    <OrderCard />
                    <Row className='h-100'>
                        <Col lg="8" md="8" sm="12" xs="12">
                            <TileCard />
                        </Col>
                        <Col lg="4" md="4" sm="12" xs="12">
                            <DailySalesRevenueCard />
                        </Col>
                    </Row>
                    <Row className='h-100'>
                        <Col lg="8" md="8" sm="12" xs="12">
                            <OverviewGraph />
                        </Col>
                        <Col lg="4" md="4" sm="12" xs="12">
                            <SalesDistributionCard />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <StockDetailCard />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        </>
     );
}
 
export default DashboardWrapper;