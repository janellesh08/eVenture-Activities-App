// import { connect } from 'react-redux'
import {  Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function MyEventureProfile(props) {
    
    

    const [myActivities, setMyActivities] = useState([])


    console.log(props)

    useEffect(() => {
        loadMyEventures()
    }, [])

    const onCreateJournalEntry = (id) => {
        props.history.push(`/add-journal-entry/${id}`)
    }

    const viewMyJournalEntries = (id) => {
        props.history.push(`/my-activity-journal-entries/${id}/${localStorage.getItem('userId')}`)
    }

    const viewAllJournalEntries = (id => {
        props.history.push(`/activity-journal-entries/${id}`)
    })

    const loadMyEventures = () => {

        fetch(`http://localhost:8080/api/my-eventures/${localStorage.getItem('userId')}`)
    .then(response => response.json())
        .then(myActivities => {
            setMyActivities(myActivities)
        })
    }


    const handleMyActivityDelete = (myActivityId) => {
        fetch(`http://localhost:8080/api/my-eventure/${myActivityId}`, {
            method: 'DELETE'
        }).then(response => response.json())
        .then(result => {
            loadMyEventures()
        })

    }


    const activityItems = myActivities.map((myActivity) => {
        
        return <li key={myActivity.id}>

            <Card border="secondary" style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title>{myActivity.activity.activity}</Card.Title>
                    <Card.Text>
                        {myActivity.activity.description}
                    </Card.Text>
                    <Button variant="secondary" onClick={() => onCreateJournalEntry(myActivity.activity_id)}>Create a Journal Entry</Button>{' '}
                    
                    <Button variant="secondary" onClick={() => viewMyJournalEntries(myActivity.activity_id)}>View My Journal Entries</Button>{' '}

                    <Button variant="secondary" onClick={() => viewAllJournalEntries(myActivity.activity_id)}>View Public Journal Entries</Button>{' '}

                    <Button variant="secondary" onClick={() => handleMyActivityDelete(myActivity.id)}>Delete</Button>{' '}
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



export default MyEventureProfile