import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import Datatable from "../../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { getDigitalProducts } from '../../../constants/axios/apis';

const Digital_pro_list = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getDigitalProducts().then(response => {
			if (response) {
				setProducts(response)
			} else {
				setProducts([])
			}
		})
	}, [])

	return (
		<Fragment>
			<Breadcrumb title="Product List" parent="Digital" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid="true">
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Product Lists</h5>
							</CardHeader>
							<CardBody>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical products-list">
									<Datatable
										multiSelectOption={false}
										myData={products}
										pageSize={9}
										pagination={false}
										class="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			{/* <!-- Container-fluid Ends--> */}
		</Fragment>
	);
};

export default Digital_pro_list;
