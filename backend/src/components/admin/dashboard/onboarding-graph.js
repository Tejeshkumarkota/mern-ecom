
import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
// import { Chart } from "react-google-charts";
import {
	lineOptions,
} from "../../../constants/chartData";
import { Bar, Line } from "react-chartjs-2";

const OnboardingGraph = () => {

    const lineData = {
		labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
		datasets: [
			{
				data: [25, 38, 28, 34],
				borderColor: " #D8D8D8",
				backgroundColor: " #D8D8D8",
				borderWidth: 2,
				barPercentage: 0.7,
      			categoryPercentage: 0.4,
			},
		],
	};
    const LineOptions = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#ff8084"],
		legend: "none",
	};

	return (
        <Fragment> 
            <div className="card mb-0">
                <div className="card-body prem-2">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-9 col-md-9 col-lg-9 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                            <h2 className="text-lg font-semibold mb-2 font-14 text-capitalize">Onboarding Graph</h2>
                        </div>
                        <div className="col-8 col-sm-3 col-md-3 col-lg-3 mb-2 mb-sm-0 mb-md-0 mb-lg-0 text-end">
                            <div className="input-group filter mb-3">
                                {/* <span className="input-group-text" id="basic-addon1"><i className='bx bx-calendar font-20 p-2'></i></span> */}
                                <select className="form-select">
                                    <option>Feb 2022</option>
                                    <option>Mar 2022</option>
                                    <option>Apr 2022</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center onboarding-graph">
                        <div className="col-12">
                            <Tabs>
                                <TabList className="nav nav-tabs dash-tabs mb-4">
                                    <Tab className="nav-link">Vendors</Tab>
                                    <Tab className="nav-link">Users</Tab>
                                </TabList>
                                <TabPanel>
                                    <div class="row align-items-center my-4">
                                        <div class="col-12 col-sm-8 col-md-9 col-lg-8 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                            <div class="chart-btn-group" role="group" aria-label="Basphp artisan serveic outlined example">
                                                <button type="button" class="btn btn-outline-primary">Daily</button>
                                                <button type="button" class="btn btn-outline-primary active">Weekly</button>
                                                <button type="button" class="btn btn-outline-primary">Monthly</button>
                                            </div>
                                        </div>
                                        <div class="col-8 col-sm-4 col-md-3 col-lg-4 text-end">
                                            <div class="d-flex align-items-center">
                                                <div class="chart-indigation"></div>
                                                <div>
                                                    <p class="mb-0 font-10 text-gray-400 fw-">Total Number of onboard</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="market-chart">
                                        <Bar
                                            data={lineData}
                                            options={lineOptions}
                                            width={778}
                                            height={308}
                                        />
                                    </div>  
                                </TabPanel>
                                <TabPanel>
                                    <div class="row align-items-center my-4">
                                        <div class="col-12 col-sm-8 col-md-9 col-lg-8 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                            <div class="chart-btn-group" role="group" aria-label="Basphp artisan serveic outlined example">
                                                <button type="button" class="btn btn-outline-primary">Daily</button>
                                                <button type="button" class="btn btn-outline-primary active">Weekly</button>
                                                <button type="button" class="btn btn-outline-primary">Monthly</button>
                                            </div>
                                        </div>
                                        <div class="col-8 col-sm-4 col-md-3 col-lg-4 text-end">
                                            <div class="d-flex align-items-center">
                                                <div class="chart-indigation"></div>
                                                <div>
                                                    <p class="mb-0 font-10 text-gray-400 fw-">Total Number of onboard</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="market-chart">
                                        <Bar
                                            data={lineData}
                                            options={lineOptions}
                                            width={778}
                                            height={308}
                                        />
                                    </div>  
                                </TabPanel>
                            </Tabs>
                            {/* <ul className="nav nav-tabs dash-tabs" id="onBoardGraph" role="tablist">
                                <li className="nav-item flex-inherit" role="presentation">
                                    <button className="nav-link active" id="vendor-onboard-tab" data-bs-toggle="tab" data-bs-target="#vendor-onboard" type="button" role="tab" aria-controls="vendor-onboard" aria-selected="true">Vendor</button>
                                </li>
                                <li className="nav-item flex-inherit" role="presentation">
                                    <button className="nav-link" id="users-onboard-tab" data-bs-toggle="tab" data-bs-target="#users-onboard" type="button" role="tab" aria-controls="users-onboard" aria-selected="false">Users</button>
                                </li>
                            </ul>
                            <div className="tab-content p-0" id="onBoardGraphContent">
                                <div className="tab-pane fade show active" id="vendor-onboard" role="tabpanel" aria-labelledby="vendor-onboard-tab">
                                    <div className="row align-items-center my-4">
                                        <div className="col-12 col-sm-8 col-md-9 col-lg-8 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                            <ul className="nav nav-pills graph-tab" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="pills-daily-tab" data-bs-toggle="pill" data-bs-target="#pills-daily" type="button" role="tab" aria-controls="pills-daily" aria-selected="true">Daily</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-weekly-tab" data-bs-toggle="pill" data-bs-target="#pills-weekly" type="button" role="tab" aria-controls="pills-weekly" aria-selected="false">Weekly</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="false">Monthly</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-8 col-sm-4 col-md-3 col-lg-4 text-end">
                                            <div className="d-flex align-items-center">
                                                <div className="chart-indigation"></div>
                                                <div>
                                                    <p className="mb-0 font-10 text-gray-400 fw-">Total Number of onboard</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-daily" role="tabpanel" aria-labelledby="pills-daily-tab"><div id="vendorOnBoardGraphDaily"></div></div>
                                            <div className="tab-pane fade" id="pills-weekly" role="tabpanel" aria-labelledby="pills-weekly-tab"><div id="vendorOnBoardGraphWeekly"></div></div>
                                            <div className="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab"><div id="vendorOnBoardGraphMonthly"></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="users-onboard" role="tabpanel" aria-labelledby="users-onboard-tab">
                                    <div className="row align-items-center my-4">
                                        <div className="col-12 col-sm-8 col-md-9 col-lg-8 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                                            <ul className="nav nav-pills graph-tab" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="pills-daily-user-tab" data-bs-toggle="pill" data-bs-target="#pills-daily-user" type="button" role="tab" aria-controls="pills-daily-user" aria-selected="true">Daily</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-weekly-user-tab" data-bs-toggle="pill" data-bs-target="#pills-weekly-user" type="button" role="tab" aria-controls="pills-weekly-user" aria-selected="false">Weekly</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-monthly-user-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-user" type="button" role="tab" aria-controls="pills-monthly-user" aria-selected="false">Monthly</button>
                                                </li>
                                                </ul>
                                        </div>
                                        <div className="col-8 col-sm-4 col-md-3 col-lg-4 text-end">
                                            <div className="d-flex align-items-center">
                                                <div className="chart-indigation"></div>
                                                <div>
                                                    <p className="mb-0 font-10 text-gray-400 fw-">Total Number of onboard</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-daily-user" role="tabpanel" aria-labelledby="pills-daily-user-tab"><div id="userOnBoardGraphDaily"></div></div>
                                                <div className="tab-pane fade" id="pills-weekly-user" role="tabpanel" aria-labelledby="pills-weekly-user-tab"><div id="userOnBoardGraphWeekly"></div></div>
                                                <div className="tab-pane fade" id="pills-monthly-user" role="tabpanel" aria-labelledby="pills-monthly-user-tab"><div id="userOnBoardGraphMonthly"></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     )
}
export default OnboardingGraph;