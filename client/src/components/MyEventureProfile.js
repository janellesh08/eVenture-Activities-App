import { connect } from 'react-redux'
import {  Card } from 'react-bootstrap'

function MyEventureProfile(props) {

    const activityItems = props.myActivities.map((activity) => {
        return <li key={activity.id}>

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Icon Placeholder</Card.Header>
                <Card.Body>
                    <Card.Title>{activity.activity}</Card.Title>
                    <Card.Text>
                        {activity.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </li>
    })

        return (
            <div>
                <h1>My Activites</h1>
                <ul>
                    {activityItems}
                </ul>
            </div>
        )

}

const mapStateToProps = (state) => {
    return {
        myActivities: state.fetchActivityRed.myActivities

    }
}
 
export default connect(mapStateToProps)(MyEventureProfile)
