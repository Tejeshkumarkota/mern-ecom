import React, { Fragment } from 'react';
import RequestApprovalTabs from './components/request-approval-tabs';
import { Card, CardBody, Container } from "reactstrap";
function RequestApprovalWrapper() {
    
    return ( 
        <Fragment>
			<Container fluid={true} className="body-top-space">
                <RequestApprovalTabs />
            </Container>
        </Fragment>
        
     );
}

export default RequestApprovalWrapper;