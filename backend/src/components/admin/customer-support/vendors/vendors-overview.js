import React, { Fragment } from "react";
import { Row, Col, Container, Table } from "reactstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { ChatsLeft } from './charts-left'
import { ChatsRight } from './charts-right'
import Avatar1 from '../../../../assets/ecom/profile/profile1.png'
import Avatar2 from '../../../../assets/ecom/profile/profile2.png'
import Avatar3 from '../../../../assets/ecom/profile/profile3.png'
import Avatar4 from '../../../../assets/ecom/profile/profile4.png'
import { useState } from 'react'

const date = [
    {
        "id":"1",
        "name":"Tina Joshi",
        "img": Avatar4,
        "lastchart": 'Office',
        "lasttime": "12:54 pm",
        "massage": [
            {
                "type": "you",
                "text": "Hi, there is a Maintenance on electric supply. If any ticket raise Please inform them it will take 4 hours, up to 15.00 O'clock.",
                "date" : "22-07-2022",
                "time": "12:50 pm"
            },
            {
                "type": "me",
                "text": "Sure",
                "date" : "22-07-2022",
                "time": "12:54 pm"
            },
        ]
    },{
        "id":"2",
        "name":"Zain Hassan",
        "img": Avatar1,
        "lastchart": 'Office',
        "lasttime": "12:54 pm",
        "massage": [
            {
                "type": "you",
                "text": "Hi, there is a Maintenance on electric supply. If any ticket raise Please inform them it will take 4 hours, up to 15.00 O'clock.",
                "date" : "22-07-2022",
                "time": "12:50 pm"
            },
            {
                "type": "me",
                "text": "Sure",
                "date" : "22-07-2022",
                "time": "12:54 pm"
            },
            {
                "type": "you",
                "text": "where are you?",
                "date" : "22-07-2022",
                "time": "01:05 pm"
            },
            {
                "type": "me",
                "text": "Office",
                "date" : "22-07-2022",
                "time": "01:15 pm"
            },
        ]
    },
    {
        "id":"3",
        "name":"Joseph Brunton",
        "img": Avatar2,
        "lastchart": "Hello",
        "lasttime": "12:54 pm",
        "massage": [
            {
                "type": "me",
                "text": "Hello",
                "date" : "22-07-2022",
                "time": "12:54 pm"
            }
        ]
    },
    {
        "id":"4",
        "name":"Shaik Mohammad",
        "img": Avatar3,
        "lastchart": '',
        "lasttime": "12:54 pm",
        "massage": [ ]
    }

]

const VendorsOverview = () => {

    const [filterData, setChildData] = useState(1);

    const passData = (data) => {
        setChildData(data);
    };
	
	return (
		<Fragment>
			<Container fluid={true} className="body-top-space">
                <Row>
                    <Col className="cstm_sprt"> 
                        <h1>e-Shop Help Center | 24x7 Customer Care Support</h1>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={4}>
                    <div className="bg-white  chat-tab h-100 scroll-bt">
                    <Tabs>
                        <TabList className="nav nav-tabs dash-tabs mb-4">
                            <Tab className="nav-link">Chats</Tab>
                            <Tab className="nav-link">Calls</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="chat-scroll p-2">
                                <ChatsLeft date ={date} passData={passData}/>
                            </div>
                        </TabPanel>
                        <TabPanel> 
                            <div className="chat-scroll p-2">
                                <ChatsLeft date ={date} passData={passData}/>
                            </div>
                        </TabPanel>
                    </Tabs>

                   
                </div> 
                    </Col>
                    <Col xs={8}>
                        <ChatsRight date ={date} filterData = {filterData}/>
                    </Col>
                </Row>
			</Container>
		</Fragment>
	);
};

// javascript:void(0)

export default VendorsOverview;
