
import { useState, useEffect } from'react'
import JournalDetailsList from './JournalDetailsList'




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
        return (

            <>
            
            <h1>{activity.activity}</h1>
           {activity.journals.length== 0 ? <button onClick={()=>props.history.push(`/add-journal-entry/${activity.id}`)}>Add a Journal Entry</button> :   <JournalDetailsList journals = {activity.journals}/>}
          
            
            </>

        ) 

    }


export default ActivityJournalListUser