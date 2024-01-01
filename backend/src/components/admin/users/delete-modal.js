import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import deleteIcon from "../../../assets/ecom/disable-item.png";

const DeleteModal = (props) => {

  return (
    <>
      <Modal className="custom-modal" show={props.deleteModalShow} onHide={props.onDeleteModalClose}>
        <Modal.Body className='p-3'>
            <div className="row form-design p-2">
                <div className="col-12 mb-4 text-center modal-disable">
                    <img src={deleteIcon} height={60} />
                   <p  className='font-16 my-3 mb-2 fw-semibold'>Are you sure, you want to delete? </p>
                </div>
                <div className="col-6">
                    <Button className="btn btn-secondary w-100"  onClick={props.onDeleteModalClose}>
                        Close
                    </Button>
                </div>
                <div className="col-6">
                    <Button className="btn btn-primary w-100" onClick={props.onDeleteModalClose}>
                        Delete
                    </Button>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default DeleteModal;