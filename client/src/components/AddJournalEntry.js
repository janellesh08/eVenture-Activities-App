import { useState } from 'react'
import { Container, Button, InputGroup, FormControl, Form, Alert } from 'react-bootstrap'
import UploadImageButton from './UploadImageButton'
import Like from './Like'
import UploadVideoButton from './UploadVideoButton'






function AddJournalEntry(props) {
    const [journal, setJournal] = useState({
        userId: localStorage.getItem('userId'),
        activityId: localStorage.getItem('activityId'),
        activity: localStorage.getItem('activity')
    })

    const [rating, setRating] = useState(0)


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
        <Container id="addEntryDiv" fluid>
            {/* <h1>Add a Journal Entry</h1>
            <label>Add an image</label>
            <input type="text" name="image" onChange={handleOnChange} placeholder="Upload an image"></input>
            <label>Add a video</label>
            <input type="text" name="video" onChange={handleOnChange} placeholder="Upload a video"></input>
            <label>Add a rating</label>
            <input type="text" name="rating" onChange={handleOnChange}
            placeholder="Enter activity rating"></input>
            <label>Journal Entry</label>
             <textarea name="entry" onChange={handleOnChange} style = {{width:"400px", height:"200px"}} placeholder="Enter journal entry"></textarea>
            <Button variant="secondary" onClick={handleSave}>Submit</Button>{' '} */}

            <h1>Add a Journal Entry</h1>
            <Alert variant="info">
                Here you can add additional information about your eVenture. Talk about the experience.
                Upload pictures or videos to add a visual to look back on in the future. You can also give
                the eVenture a star rating for future reference!
            </Alert>

            <InputGroup>
                <InputGroup.Text >Log your experience here!</InputGroup.Text>
                <FormControl name="entry" onChange={handleOnChange} as="textarea" aria-label="With textarea" />
            </InputGroup>
            <UploadImageButton />
            <UploadVideoButton />
            <Like />
            <Button onClick={handleSave} >Save</Button>
        </Container>

    )

}

export default AddJournalEntry;