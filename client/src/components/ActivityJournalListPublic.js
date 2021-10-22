import { useState, useEffect } from 'react'
import JournalDetailsList from './JournalDetailsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../styles/ActivityJournalList.css'

const element = <FontAwesomeIcon icon={faHeart} size = '2x' />

function ActivityJournalListPublic(props) {


    const [activity, setActivity] = useState({
        journals: []
    })

    console.log(props)
    useEffect(() => {

        loadJournalEntries()
    }, [])


    const loadJournalEntries = () => {
        
        fetch(`https://eventures-app.herokuapp.com/api/journal-entries-info/${props.match.params.activityId}`)
        .then(response => response.json())
        .then(activity => {
           
        setActivity(activity)
        
            

        })
    }

    if (activity.likes > 0) {
        return (

            <div class="journalItemDiv" >
                <div id="activtyTitleAndHeartDiv">
                    <h1 id="acitivtyTitle">{activity.activity}</h1>
                    <p><span id="heart">{element}</span>{activity.likes}</p>
                </div>
                
                {activity.journals.length === 0 ? <button id="addEntryButton" onClick={() => props.history.push(`/add-journal-entry/${activity.id}`)}>Add a Journal Entry</button> : <JournalDetailsList journals={activity.journals} />}

            </div>
        )
    } else {
        return (

            <div class="journalItemDiv" >

                <h1 id="acitivtyTitle">{activity.activity}</h1>
                {activity.journals.length == 0 ? <button id="addEntryButton" onClick={() => props.history.push(`/add-journal-entry/${activity.id}`)}>Add a Journal Entry</button> : <JournalDetailsList journals={activity.journals} />}

                </div>
        )
    }



}


export default ActivityJournalListPublic