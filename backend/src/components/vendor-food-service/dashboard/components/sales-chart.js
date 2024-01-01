import React, { Fragment } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
	Col,
	Row,
} from "reactstrap";
import { propTypes } from "react-bootstrap/esm/Image";


const SalesChart = (props) => {
    const data = {
        labels: ['Morning ( 9.00 to 12.00 )', 'Afternoon ( 12.00 to 4.00 )', 'Evening  (4.00 to 9.00)'],
        datasets: [
          {
            label: '# of Votes',
            data: [70, 30, 20],
            backgroundColor: [
              '#2075D5',
              '#4ECB71',
              '#FF5967',
            ],
            borderColor: [
              '#2075D5',
              '#4ECB71',
              '#FF5967',
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {
        // layout: {
        //     padding: {
        //       top: 20
        //     }
        //   }, 
        title: {
            text: props.title,
            position: 'top',
            align: 'center',
          },
        // maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          },
        },
      };
	return (
		<Fragment>
            <Row className="align-items-center">
                <Col md="12">
                    <div className="chart-block chart-vertical-center">
                        <Doughnut data={data} options={options} />
                    </div>
                </Col>
            </Row>
        </Fragment> 
    )
}

export default SalesChart;
