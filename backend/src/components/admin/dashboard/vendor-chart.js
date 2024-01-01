import React, { Fragment } from "react";
import { Chart } from "react-google-charts";
import {
	Col,
	Row,
} from "reactstrap";

const VendorChart = () => {

    const data = [
        ["Task", "Hours per Day"],
        ["Active", 3904],
        ["Inactive", 994],
    ];

    const doughnutOptions = {
		title: "",
		pieHole: 0.5,
		pieSliceBorderColor: "none",
		colors: ["#2075D5", "#4ECB71"],
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
                    <div className="req-colr mb-3">Active <br/><strong>3902</strong></div>
                    <div className="appr-colr">Inactive <br/><strong>994</strong></div>
                </Col>
            </Row>
        </Fragment> 
    )
}

export default VendorChart;
