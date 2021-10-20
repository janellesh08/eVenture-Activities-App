import React, { useState } from "react"
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal"
import { Button } from 'react-bootstrap'


function TwistModal(props){
    const [twist, setTwist] = useState({})

    const fetchTwistItem = () => {
        fetch('http://localhost:8080/api/twists')
            .then(response => { return response.json() })
            .then(twist => {
                setTwist(twist)
            })
    }

    const updateTwistItem = () => {
        fetchTwistItem();
        setModalShow(true)
    }

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div id="twistBtnDiv" > <button class="twistBtn" variant="primary" onClick={() => updateTwistItem()}>
            Click for a fun twist!
        </button>

            <MyVerticallyCenteredModal type={twist.type} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}

export default TwistModal
