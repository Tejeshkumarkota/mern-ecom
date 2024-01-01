import React, { Fragment } from "react";
import { Chart } from "react-google-charts";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Media,
	Row,
	Table,
} from "reactstrap";

const Analytics = () => {

    const data = [
        ["Task", "Hours per Day"],
        ["Requests", 60],
        ["Approved", 42],
        ["Rejected", 18],
    ];

    const doughnutOptions = {
		title: "",
		pieHole: 0.5,
		pieSliceBorderColor: "none",
		colors: ["#2075D5", "#4ECB71", "#FF5967"],
		legend: {
			position: "none",
		},
		pieSliceText: "none",
		tooltip: {
			trigger: "true",
		},
		animation: {
			startup: true,
			easing: "linear",
			duration: 1500,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		enableInteractivity: false,
	};

	return (
		<Fragment>
            <div className="card mb-4">
                <div className="card-body prem-2">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <h2 className="text-lg font-semibold mb-2 font-14">Analytics</h2>
                        </div>
                        <div className="col-6 text-end">
                            <select className="form-select p-2">
                                <option>Feb 2022</option>
                                <option>Mar 2022</option>
                                <option>Apr 2022</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <Row className="align-items-center">
                                <Col md="7">
                                    <div className="chart-block chart-vertical-center">
                                        <Chart
                                            width={"100%"}
                                            height={"180px"}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data = {data}
                                            options={doughnutOptions}
                                            legend_toggle
                                        />
                                    </div>
                                </Col>
                                <Col md="5">
                                    <div className="req-colr mb-3">Requests <br/><strong>60</strong></div>
                                    <div className="appr-colr mb-3">Approved <br/><strong>42</strong></div>
                                    <div className="reje-colr">Rejected <br/> <strong>18</strong></div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment> 
    )
}

export default Analytics;
