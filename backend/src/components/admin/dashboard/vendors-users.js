import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import VendorChart from "../dashboard/vendor-chart";

const VendorsUsers = () => {
	return (
		<Fragment>
            <div className="card mb-4">
                <div className="card-body prem-2">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <Tabs>
                                <TabList className="nav nav-tabs justify-content-between dash-tabs">
                                    <Tab className="nav-link w-50 text-center">Vendors</Tab>
                                    <Tab className="nav-link w-50 text-center">Users</Tab>
                                </TabList>
                                <TabPanel>
                                   <VendorChart/> 
                                </TabPanel>
                                <TabPanel>
                                    <VendorChart/> 
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>    
    )
}
export default VendorsUsers;