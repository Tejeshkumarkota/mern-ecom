import React from "react";
import Modal from 'react-bootstrap/Modal';

function DisableItemModal(props) {
    return ( 
        <Modal className="block-item-modal" show={props.disableItemModalShow} onHide={props.disableItemModalClose}>
            <Modal.Body>
                <div class="block-items text-center">
                    <img src="https://estore.exaprojects.co/assets/img/disable-item.png"/>
                    <h3>Are your Confirm with  <br/> Disable this offer ?</h3>
                </div>
                <div class="block-item-form">
                  <div class="form-submit-center text-center mt-5 mb-2">
                        <button type="button" class="btn btn-secondary mw-100 me-2" onClick={props.disableItemModalClose}>Cancel </button>
                        <button type="submit" class="btn btn-primary mw-100">Yes</button>
                  </div>
                </div>
            </Modal.Body>
        </Modal>
     );
}

export default DisableItemModal;