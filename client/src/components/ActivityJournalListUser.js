
import { useState, useEffect } from'react'
import JournalDetailsList from './JournalDetailsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../styles/ActivityJournalList.css'

const element = <FontAwesomeIcon icon={faHeart} size = '2x' />




function ActivityJournalListUser(props) {

    
    const [activity, setActivity] = useState({
        journals: []
    })

    console.log(props)
    useEffect(() => {
        loadJournalEntries()
    }, [])

    
    const loadJournalEntries = () => {
        fetch(`http://localhost:8080/api/journal-entries-info/${props.match.params.activityId}/${localStorage.getItem('userId')}`)
        .then(response => response.json())
        .then(response => {
            setActivity(response)
            console.log(response)
    
            
        })
    }

    if (activity.likes > 0) {
        return (

            <div class="journalItemDiv" >
                <div id="activtyTitleAndHeartDiv">
                    <h1 id="acitivtyTitle">{activity.activity}</h1>
                    <p><span id="heart">{element}</span>{activity.likes}</p>
                </div>
                {activity.journals.length === 0 ? <button id="addEntryButton" onClick={() => props.history.push(`/add-journal-entry/${activity.id}`)}>Add a Journal Entry</button> : <JournalDetailsList journals={activity.journals} onJournalDeleted={() => loadJournalEntries()}/>}

            </div>
        )
    } else {
        return (

            <>
            
            <h1 id="acitivtyTitle">{activity.activity}</h1>
           {activity.journals.length== 0 ? <button id ="addEntryButton" onClick={()=>props.history.push(`/add-journal-entry/${activity.id}`)}>Add a Journal Entry</button> :   <JournalDetailsList journals = {activity.journals} onJournalDeleted={() => loadJournalEntries()}/>}

           </>
                     
            

        ) 
    }

       

    }


export default ActivityJournalListUser