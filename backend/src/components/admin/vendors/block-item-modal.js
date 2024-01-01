import React from "react";
import Modal from 'react-bootstrap/Modal';

function BlockItemModal(props) {
    return ( 
        <Modal className="block-item-modal" show={props.blockItemModalShow} onHide={props.blockItemModalClose}>
            <Modal.Body>
                <div class="block-items text-center">
                    <img src="https://estore.exaprojects.co/assets/img/block-item.png"/>
                    <h3>Block this item ?</h3>
                    <p>Mad about waves - <strong>shampoo</strong> </p>
                </div>
                <div class="block-item-form">
                    <form>
                        <div class="form-group">
                            <label>Reason</label>  
                            <textarea rows="5" class="form-control"></textarea>
                        </div>
                        <p class="text-center">( This item will not visible for the Users  here after)</p>
                        <div class="form-submit-center text-center mt-5 mb-2">
                            <button type="button" class="btn btn-secondary mw-100 me-2" onClick={props.blockItemModalClose}>Cancel </button>
                            <button type="submit" name="submit" class="btn btn-primary mw-100">Yes</button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
     );
}

export default BlockItemModal;