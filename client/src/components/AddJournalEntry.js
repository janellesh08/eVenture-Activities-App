import { useState, Component, useEffect } from 'react'
import { Container, Button, Alert, Form } from 'react-bootstrap'
import axios from 'axios'




function AddJournalEntry(props) {

    const [journal, setJournal] = useState({
        userId: localStorage.getItem('userId'),
        activityId: props.match.params.activityId,
        rating: 0
    })

    const [isLiked, setIsLiked] = useState(false)

    const toggle = () => {
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        if(isLiked){
            setJournal({
                ...journal,
                rating: 1
            })
        } else {
            setJournal({
                ...journal,
                rating: 0
            })
        }
    }, [isLiked])


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

        alert("Your photo is uploading please be patient!")

        const formData = new FormData()
        formData.append('image', file)


        const result = await axios.post('https://eventures-app.herokuapp.com/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        console.log(result.data)
        setImage(result.data.imagePath)
    }



    const handleSave = async () => {

        const formData = new FormData()
        formData.append('image', file)
        formData.append('entry', journal.entry)
        formData.append('userId', journal.userId)
        formData.append('activityId', journal.activityId)
        formData.append('public', journal.public)
        formData.append('rating', journal.rating)


        const result = await axios.post('https://eventures-app.herokuapp.com/api/add-journal-entry', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        console.log(result)
        if (result.data.success && result.data.public) {
            props.history.push(`/activity-journal-entries/${props.match.params.activityId}`)
        } else {
            props.history.push(`/my-activity-journal-entries/${props.match.params.activityId}/${localStorage.getItem('userId')}`)
        }

     
    }


    return (
        <Container id="addEntryContainer" fluid>
            <h1>Add a Journal Entry</h1>
            <Alert variant="info">
                Here you can add additional information about your eVenture. Talk about your experience and add images if you like.
                You can make your journal entries private or public to share your experience with other users!
            </Alert>
            <div className='imageUpload'>

                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className = 'addImageHeader'>Add an image</Form.Label>
                <Form.Control 
                        type="file"
                        filename={file}
                        onChange={e => setFile(e.target.files[0])}
                        accept='image/*'
                        placeholder="Upload an image"
                        onSubmit={submit}/>
                    <Button varient = 'primary' className = 'addJournalEntryBtn'type='submit' onClick={submit}>upload photo</Button>
                {image && <img src={image} style={{ width: 250 }} />}
                </Form.Group>
                
            </div>


            <label id="entryLabel" >Journal Entry</label>

            <textarea name="entry" onChange={handleOnChange} style={{ width: "400px", height: "200px" }} placeholder="Log your experience here."></textarea>

            <select id="public" name="public" defaultValue={""} onChange={handleOnChange}>

                <option value="" disabled hidden>Public or Private</option>
                <option value='true'>Public</option>
                <option value='false'>Private</option>
            </select>

            <p>Love this eVenture? Click the heart below!</p>

            <div onClick={toggle} id="likeBtnDiv">
                {isLiked === false ? (
                    <img className ="likeBtn" src="/images/8.png" alt=''></img>
                ) :
                    (<img className ="likeBtn" src="/images/7.png" alt=''></img>)}
            </div>

            <Button id="entrySubmitBtn" variant="secondary" onClick={handleSave}>Submit Journal Entry</Button>{' '}


        </Container>

    )

}

export default AddJournalEntry