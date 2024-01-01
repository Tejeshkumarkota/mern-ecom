import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddReminder = (prop) => {

    return (
      <>    
        <Modal show={prop.show} onHide={prop.onClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Reminder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Remainder Title</Form.Label>
                        <Form.Control type="email" placeholder="Remainder Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" placeholder="Time" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cateogry">
                        <Form.Label>Cateogry</Form.Label>
                        <Form.Control type="text" placeholder="Cateogry" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="endor_name">
                        <Form.Label>Vendor Name</Form.Label>
                        <Form.Control type="text" placeholder="Vendor Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="notes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control type="text" placeholder="Notes" />
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={prop.onClose}>
                Close
            </Button>
            <Button variant="primary" onClick={prop.onClose}>
                Add Reminder
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddReminder;