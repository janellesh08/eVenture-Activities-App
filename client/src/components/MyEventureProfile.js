// import { connect } from 'react-redux'
import {  Card, Button, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import '../styles/myActivities.css'

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
                    <Container flex className ='activityBtns'>
                    <Button variant='primary' className = 'createJournalEntryBtn' onClick={() => onCreateJournalEntry(myActivity.activity_id)}>Create a Journal Entry</Button>{' '}
                    
                    <Button  variant='primary' className = 'viewMyJournalEntryBtn' onClick={() => viewMyJournalEntries(myActivity.activity_id)}>View My Journal Entries</Button>{' '}

                    <Button variant='primary' className = 'viewPublicJournalEntryBtn' onClick={() => viewAllJournalEntries(myActivity.activity_id)}>View Public Journal Entries</Button>{' '}
                    </Container>


                    <Button variant="secondary" onClick={() => handleMyActivityDelete(myActivity.id)}>Delete</Button>{' '}

                </Card.Body>
            </Card>
            <br />
        </li>
    })

        return (
            <div>
                <Container fluid className = 'myActivitiesHeader'>
                   <label className = 'activityHeader'>My Activites</label>
                </Container>
                <Container fluid className = 'myActivities'>
                <ul>
                    {activityItems}
                </ul>
                </Container>
            </div>
        )

}



export default MyEventureProfile