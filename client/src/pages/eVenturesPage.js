import { Container, Card, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { useEffect } from "react"
import * as actionCreator from '../store/creators/actionCreators'
import EventuresList from "../components/eVenturesList"
import '../styles/eVenturesPage.css'

function EventuresPage(props) {

    useEffect(() => {
        props.onFetchActivities()
    }, [])


    const activityItems = props.activities.map((activity) => {
        return <li key={activity.id}>

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Icon Placeholder</Card.Header>
                <Card.Body>
                    <Card.Title>{activity.activity}</Card.Title>
                    <Card.Text>
                        {activity.description}
                    </Card.Text>
                    <Button variant="secondary" onClick={() => props.onAddToMyActivities(activity)}>Add to My eVentrues</Button>{' '}

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