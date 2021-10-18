import { Modal, Button } from 'react-bootstrap'
import React from "react"

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Twist
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Try This eVenture...</h4>
                <p>
                    {props.type}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal