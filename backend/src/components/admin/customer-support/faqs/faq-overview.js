import React, { Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import FaqForm from './faq-form';
const FaqsOverview = () => {
    return (
        <Fragment>
			<Container fluid={true} className="body-top-space">
                <Row className="mb-4">
                    <Col className="cstm_sprt"> 
                        <h1>e-Shop Help Center | 24x7 Customer Care Support</h1>
                        <p>The e-Shop Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Flipkart Help Centre also lists out more information that you may need regarding Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Flipkart Help Centre number or even access .</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="cstm_cont"> 
                        <h2>What issue are you facing?</h2>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={5}>
                        <div className="qstn">
                        <h2>Questionor</h2>
                        <p>Add some basic Question & Ans about Problem</p>
                        </div>
                    </Col>
                    <Col xs={7}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <FaqForm />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
      );
}
 
export default FaqsOverview;