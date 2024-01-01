
import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import {
	lineOptions,
} from "../../../../constants/chartData";
import { Bar } from "react-chartjs-2";

const OverviewGraph = () => {

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
        <div className="card mb-3">
                <div className="card-body prem-2">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-2 mb-sm-0 mb-md-0 mb-lg-0">
                            <h2 className="text-lg font-semibold mb-2 font-14 text-capitalize">Overall Orders Overviewh</h2>
                        </div>
                    </div>
                    <div className="row align-items-center onboarding-graph">
                        <div className="col-12">
                            <Tabs>
                                <TabList className="nav nav-tabs dash-tabs mb-4">
                                    <Tab className="nav-link">Orders</Tab>
                                    <Tab className="nav-link">Amount Received</Tab>
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
                        </div>
                    </div>
                </div>
            </div>
     )
}
export default OverviewGraph;