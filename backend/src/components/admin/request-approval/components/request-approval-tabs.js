import React, { useState } from 'react';
import PendingRequestList from './pending-request-list';
import RecentRequestList from './recent-request-list';
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Card, CardBody } from "reactstrap";
import { Row, Col, Button } from 'react-bootstrap';
import { Plus } from "react-feather";
import AddVendorModal from './modals/add-vendor-modal';
import VerifyModal from './modals/verify-modal';
function RequestApprovalTabs() {
    const [addVendorModalShow, setAddVendorModalShow] = useState(false);
    const [verifyModalShow, setVerifyModalShow] = useState(false);
	const onAddVendorModalOpen = () => setAddVendorModalShow(true);
    const onVerifyModalOpen = () => {
        setAddVendorModalShow(false);
        setVerifyModalShow(true);
    }
    return ( 
        <>
            <Tabs>
                <Card className='mb-3'>
                    <CardBody className='p-1'>
                        <Row>
                            <Col lg="10" md="6" sm="7" xs="12">
                                <TabList className="nav nav-tabs custom-tabs">
                                    <Tab className="nav-link">Recent</Tab>
                                    <Tab className="nav-link">Pending</Tab>
                                </TabList>
                            </Col>
                            <Col lg="2" md="6" sm="5" xs="12">
                                <div className='d-flex align-items-center justify-content-end me-2'>
                                    <Button className="btn btn-outline-primary add-btn btn btn-primary  d-flex align-items-center justify-content-center" onClick={onAddVendorModalOpen}>
                                        <Plus className='me-2'/> Add Vendor
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                
                <TabPanel>
                    <RecentRequestList />
                </TabPanel>
                <TabPanel> 
                    <PendingRequestList />
                </TabPanel>
            </Tabs>
            <AddVendorModal
                addVendorModalShow= {addVendorModalShow}
                onAddVendorModalClose={()=> setAddVendorModalShow(false)}
                onVerifyModalOpen={()=> {
                    setAddVendorModalShow(false);
                    setVerifyModalShow(true);
                }}
            />
            <VerifyModal
                verifyModalShow={verifyModalShow}
                onVerifyModalClose={()=> setVerifyModalShow(false)}
            />
        </>
     );
}

export default RequestApprovalTabs;