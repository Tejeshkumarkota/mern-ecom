import React, { Fragment } from "react";
import TopVendors from "../dashboard/top-vendors"
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

const TopListing = () => {
	return (
		<Fragment>
            <div className="card mb-3">
                <div className="card-body prem-2">
                    <Tabs>
                        <div class="row align-items-center">
                            <div class="col-12 col-sm mb-2 mb-sm-0">
                                <TabList className="nav nav-tabs dash-tabs">
                                    <Tab className="nav-link">Top Vendors</Tab>
                                    <Tab className="nav-link">Top Products</Tab>
                                </TabList>
                            </div>
                            <div class="col-8 col-sm-3 text-end">
                                <div class="">
                                    <select class="form-select">
                                        <option>Feb 2022</option>
                                        <option>Mar 2022</option>
                                        <option>Apr 2022</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <TabPanel>
                                    <TopVendors/>
                                </TabPanel>
                                <TabPanel>
                                    <TopVendors/>
                                </TabPanel>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </Fragment>
    )
}
export default TopListing;