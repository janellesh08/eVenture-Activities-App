import { Container, Card, Button, Modal } from "react-bootstrap"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import * as actionCreator from '../store/creators/actionCreators'
import EventuresList from "../components/eVenturesList"
import '../styles/eVenturesPage.css'
import React from "react"

function EventuresPage(props) {

    useEffect(() => {
        props.onFetchActivities()
    }, [])


    

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



    function TwistModal(props){
        const [twist, setTwist] = useState({})

        const fetchTwistItem = () => {
            fetch('http://localhost:8080/api/twists')
                .then(response => { return response.json() })
                .then(twist => {
                    setTwist(twist)
                })
        }

        useEffect(() => {
            fetchTwistItem()
        }, [])
       
        
        const updateTwistItem = () => {
            fetchTwistItem();
            setModalShow(true)
        }

        const [modalShow, setModalShow] = React.useState(false);
        return (
            <div id="twistBtnDiv" > <Button class="eventureBtn" variant="primary" onClick={() => updateTwistItem()}>
                Click for a fun twist!
            </Button>

                <MyVerticallyCenteredModal type={twist.type} show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        );
    }


    const activityItems = props.activities.map((activity) => {
        return <li key={activity.id}>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Icon Placeholder</Card.Header>
                <Card.Body id="cardBody">
                    <Card.Title>{activity.activity}</Card.Title>
                    <Card.Text>
                        {activity.description}
                    </Card.Text>
                    <Button  class="eventureBtn" variant="secondary" onClick={() => props.onAddToMyActivities(activity)}>Add to My eVentures</Button>{' '}
                    <TwistModal/>
                </Card.Body>
            </Card>
            <br />
        </li>
    })




    return (
        <div>
            <Container>
                <h1>Find an Activity!</h1>

                <EventuresList />
                <ul>
                    {activityItems}
                </ul>


            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activities: state.fetchActivityRed.activities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchActivities: () => dispatch(actionCreator.fetchAllActivities()),
        onAddToMyActivities: (activity) => dispatch(actionCreator.submitToMyActivities(activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventuresPage)