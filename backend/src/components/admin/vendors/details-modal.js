import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import DetailsView from './details-view'
import ItemsView from './items-view';

const DetailsModal = (props) => {

    return (
      <>    
        <Modal className="custom-reactmodal" show={props.detailsModalShow} onHide={props.onDetailsModalClose}>
            {/* <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header> */}
            <Modal.Body closeButton>
                  
                    <Tabs>
                        <div className="pad-16">
                        <TabList className="nav nav-tabs dash-tabs">
                            <Tab className="nav-link">Details</Tab>
                            <Tab className="nav-link">Items</Tab>
                        </TabList>
                        </div>
                        <div className="pad-16">
                        <TabPanel>
                           <DetailsView/>
                        </TabPanel>
                        <TabPanel> 
                           <ItemsView/>
                        </TabPanel>
                        </div>
                    </Tabs>
            </Modal.Body>
        </Modal>
      </>
    )
}

export default DetailsModal;