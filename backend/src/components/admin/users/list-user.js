import React, { Fragment, useState } from "react";
import data from "./list-data";
import { Card, CardBody, CardHeader, Container, Table } from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { MoreHorizontal } from "react-feather";
import DeleteModal from "./delete-modal";
import Button from 'react-bootstrap/Button';
const UserList = () => {
const [deleteModalShow, setDeleteModalShow] = useState(false);
const onDeleteModalOpen = () => setDeleteModalShow(true);
	return (
		<Fragment>
			<Container fluid={true} className="body-top-space">
				<Card>
					<CardHeader>
						<h5 className="title-heading">Users</h5>
					</CardHeader>
					<CardBody className="p-0">
						<div className="user-table-container h-100 table-responsive">
							<Table responsive>
								<thead className="user-table-thead">
								<tr>
									<th>S.No</th>
									<th className="text-left">Name</th>
									<th className="text-left">Flat</th>
									<th className="text-center">Precinct</th>
									<th className="text-end">Joined on</th>
									<th className="text-end">Last logged in</th>
									<th className="text-left">Status</th>
									<th className="text-center">Actions</th>
								</tr>
								</thead>
								<tbody className="">
								{data.map((item, i) => (
									<tr data-row-key="3" className="border-b border-border-200">
										<td className="table-txt-color text-start">{item.sNo}</td>
										<td className="shop-image table-txt-color text-start">
											<div className="d-flex align-items-center">
												<img src={item.userImg} alt="user-img" width='30' height='30' />
												<span>{item.name}</span>
											</div>
										</td>
										<td className="table-txt-color text-start">{item.flat}</td>
										<td className="table-txt-color text-center">{item.precinct}</td>
										<td className="text-end"><span className="date">{item.joinedOnDate}</span><span className="time">{item.joinedOnTime}</span>
										</td>
										<td className="text-end"><span className="date">{item.LastLoggedInDate}</span><span className="time">{item.LastLoggedInTime}</span>
										</td>
										<td className="text-left">
											{item.Status=== 'Active' ?
												<span className="text-green">{item.Status}</span> :
											item.Status=== 'Deactivated' ?
												<span className="text-delay">{item.Status}</span> :
												<span className="text-hold">{item.Status}</span> 
											}
											
											</td>
										<td className="text-center action-td">
											<Dropdown autoClose="outside">
												<Dropdown.Toggle id="dropdown-autoclose-outside">
													<MoreHorizontal />
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="javascript:void(0);">Deactive</Dropdown.Item>
													<Dropdown.Item href="javascript:void(0);" onClick={onDeleteModalOpen}>Delete</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</td>
									</tr>
								))}
								</tbody>
							</Table>
						</div>
						<DeleteModal 
							deleteModalShow= {deleteModalShow}
							onDeleteModalClose={()=> setDeleteModalShow(false)}
						/>
					</CardBody>
				</Card>
			</Container>
		</Fragment>
	);
};

export default UserList;
