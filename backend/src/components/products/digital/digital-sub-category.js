import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import Datatable from "../../common/datatable";
import { Modal, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { getDigitalSubcategories } from '../../../constants/axios/apis';

const Digital_sub_category = () => {
	const [open, setOpen] = useState(false);
	const [subCategories, setSubCategories] = useState([])

	useEffect(() => {
		getDigitalSubcategories().then(response => {
			if (response) {
				setSubCategories(response)
			} else {
				setSubCategories([])
			}
		})
	}, [])

	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Breadcrumb title="Sub Category" parent="Digital" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid="true">
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Digital Sub Category</h5>
							</CardHeader>
							<CardBody>
								<div className="btn-popup pull-right">
									<Button
										type="button"
										color="secondary"
										onClick={onOpenModal}
										data-toggle="modal"
										data-original-title="test"
										data-target="#exampleModal"
									>
										Add Sub Category
									</Button>
									<Modal isOpen={open} toggle={onCloseModal}>
										<ModalHeader toggle={onCloseModal}>
											<h5
												className="modal-title f-w-600"
												id="exampleModalLabel2"
											>
												Add Digital Product
											</h5>
										</ModalHeader>
										<ModalBody>
											<Form>
												<FormGroup>
													<Label
														htmlFor="recipient-name"
														className="col-form-label"
													>
														Sub Category Name :
													</Label>
													<Input type="text" className="form-control" />
												</FormGroup>
												<FormGroup>
													<Label
														htmlFor="message-text"
														className="col-form-label"
													>
														Sub Category Image :
													</Label>
													<Input
														className="form-control"
														id="validationCustom02"
														type="file"
													/>
												</FormGroup>
											</Form>
										</ModalBody>
										<ModalFooter>
											<Button
												type="button"
												color="primary"
												onClick={onCloseModal}
											>
												Save
											</Button>
											<Button
												type="button"
												color="secondary"
												onClick={onCloseModal}
											>
												Close
											</Button>
										</ModalFooter>
									</Modal>
								</div>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical">
									<Datatable
										multiSelectOption={false}
										myData={subCategories}
										pageSize={6}
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

export default Digital_sub_category;
