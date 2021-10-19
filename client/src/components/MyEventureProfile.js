// import { connect } from 'react-redux'
import {  Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function MyEventureProfile(props) {
    // const userId = localStorage.getItem('userId')
    const [myActivities, setMyActivities] = useState([])

    useEffect(() => {
        loadMyEventures()
    }, [])

    const onCreateJournalEntry = (id) => {
        props.history.push(`/add-journal-entry/${id}`)
    }

    const loadMyEventures = () => {

        fetch(`http://localhost:8080/api/my-eventures/${localStorage.getItem('userId')}`)
    .then(response => response.json())
        .then(myActivities => {
            setMyActivities(myActivities)
        })
    }

    const activityItems = myActivities.map((myActivity) => {
        return <li key={myActivity.id}>

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Icon Placeholder</Card.Header>
                <Card.Body>
                    <Card.Title>{myActivity.activity.activity}</Card.Title>
                    <Card.Text>
                        {myActivity.activity.description}
                    </Card.Text>
                    <Button variant="secondary" onClick={() => onCreateJournalEntry(myActivity.activity_id)}>Create a Journal Entry</Button>{' '}
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

// const mapStateToProps = (state) => {
//     return {
//         myActivities: state.fetchActivityRed.myActivities

//     }
// }
 
// export default connect(mapStateToProps)(MyEventureProfile)

export default MyEventureProfile