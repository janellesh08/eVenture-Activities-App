import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import axios from 'axios'


function AddJournalEntry(props) {
    const [journal, setJournal] = useState({
        userId: localStorage.getItem('userId'),
        activityId: localStorage.getItem('activityId'),
        activity: localStorage.getItem('activity')
    })
    
    const handleOnChange = (e) => {
        setJournal({
            ...journal,
            [e.target.name]: e.target.value
        })
    }

    const [file, setFile] = useState()
    const [image, setImage] = useState()

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('image', file)
        
        const result = await axios.post('/images', formData, {headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result.data)
        // setImage(result.data.imagePath)
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
            <div className='imageupload'>
                <label>Add an image</label>
                    <form onSubmit={submit}>
                        <input 
                        type="file" 
                        filename = {file}
                        onChange={e => setFile(e.target.files[0])} 
                        accept='image/*'
                        placeholder="Upload an image"></input>
                        <button type='submit'>submit</button>
                    </form>
                        {/* {imagePath && <img src={imagePath}>} */}
            </div>
            <label>Add a video</label>
            <input type="file" name="video" onChange={handleOnChange} placeholder="Upload a video"></input>
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