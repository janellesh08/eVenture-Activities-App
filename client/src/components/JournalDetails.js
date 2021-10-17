
import { useState, useEffect } from'react'


function JournalDetails({match}) {

    const id = match.params.id
    const activityId = match.params.activityId
    const userId = match.params.userId
    const [journal, setJournal] = useState({})


    useEffect(() => {
        loadJournalEntry()
    }, [])

    

    const loadJournalEntry = () => {
        fetch(`http://localhost:8080/api/journal-entries-info/${id}/${activityId}/${userId}`)
        .then(response => response.json())
        .then(result => {
            setJournal(result)

        })
    }

        return (

            <div>
                
                <h1>{journal.activities.activity}</h1>
                
                <img src = {journal.image}/>
                <video width="500" controls>
                    <source src= {journal.video} type="video/mp4"></source>
                    {/* <source src="movie.ogg" type="video/ogg"></source> */}
                    Your browser does not support the video displayed.
                </video>
                <p>{journal.entry}</p>
                <h3>{journal.rating}</h3>

            </div>
        ) 

    }

   

export default JournalDetails