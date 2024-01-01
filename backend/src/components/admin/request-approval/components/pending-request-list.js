import React, { useState } from "react";
import data from "./recent-request-list-data";
import { Card, CardBody, Table } from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { MoreHorizontal } from "react-feather";
import DeleteModal from './../../../common/modals/delete-modal';

const PendingRequestList = () => {
    const [deleteModalShow, setDeleteModalShow] = useState(false);
	const onDeleteModalOpen = () => setDeleteModalShow(true);
    return ( 
        <Card>
			<CardBody className="p-0">
				<div className="user-table-container h-100 table-responsive">
					<Table responsive>
						<thead className="user-table-thead">
						<tr>
							<th>S.No</th>
							<th className="text-left">Logo</th>
							<th className="text-left">Shop Name</th>
							<th className="text-left">Category</th>
							<th className="text-left">Applied By</th>
							<th className="text-left">Requested Dated</th>
							<th className="text-left">Status</th>
							<th className="text-center">Actions</th>
						</tr>
						</thead>
						<tbody className="">
						{data.map((item, i) => (
							<tr data-row-key="3" className="border-b border-border-200">
								<td className="table-txt-color text-start">{item.sNo}</td>
								<td className="table-txt-color text-start"><img src={item.logo} alt="user-img" width='30' height='30' /></td>
								<td className="table-txt-color text-start">{item.shopName}</td>
								<td className="table-txt-color text-start">{item.category}</td>
								<td className="shop-image table-txt-color text-start">
									<div className="d-flex align-items-center">
										<img src={item.appliedByUser} alt="user-img" width='30' height='30' />
										<div>
											<span>{item.appliedByName}</span>
											<span className="phone">{item.appliedByPhone}</span>
										</div>
									</div>
								</td>
								<td className="table-txt-color text-start">{item.requestedDate}</td>
								<td className="text-left">
									{item.status=== 'Approved' ?
										<span className="text-green">{item.status}</span> :
									item.status=== 'Rejected' ?
										<span className="text-delay">{item.status}</span> :
										<span className="text-hold">{item.status}</span> 
									}
									
									</td>
								<td className="text-center action-td">
									<Dropdown>
										<Dropdown.Toggle id="dropdown-basic">
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
     );
}
 
export default PendingRequestList;