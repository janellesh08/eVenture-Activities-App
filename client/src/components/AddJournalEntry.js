import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'


function AddJournalEntry(props) {
    const [journal, setJournal] = useState({})
    
    const handleOnChange = (e) => {
        
        setJournal({
            ...journal,
            [e.target.name]: e.target.value
        })
    }

    const loadActivity = () => {
       fetch(`http://localhost:8080/api/activities`) 
    }


    const handleSave = () => {

        fetch(`http://localhost:8080/api/add-journal-entry/${props.activityId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(journal)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    props.history.push('/journal-details')
                }
            })
    }


    return (
        <Container fluid>
            <h1>Add a Journal Entry</h1>
            <label>Add an image</label>
            <input type="text" name="image" onChange={handleOnChange} placeholder="Upload an image"></input>
            <label>Add a video</label>
            <input type="text" name="video" onChange={handleOnChange} placeholder="Upload a video"></input>
            <label>Add a rating</label>
            <input type="text" name="rating" onChange={handleOnChange}
            placeholder="Enter activity rating"></input>
            <label>Journal Entry</label>
            {/* <input type="text" name= "entry" onChange={handleOnChange} placeholder="Enter journal entry"></input> */}
            <textarea name="entry" onChange={handleOnChange} style = {{width:"400px", height:"200px"}} placeholder="Enter journal entry"></textarea>
            <Button variant="secondary" onClick={handleSave}>Submit</Button>{' '}


        </Container>

    )

}

export default AddJournalEntry