import { useState, useEffect } from'react'
import JournalDetailsList from './JournalDetailsList'



function ActivityJournalListPublic(props) {

    
    const [activity, setActivity] = useState({
        journals: []
    })

    console.log(props)
    useEffect(() => {
      
        loadJournalEntries()
    }, [])

    
    const loadJournalEntries = () => {
        
        fetch(`http://localhost:8080/api/journal-entries-info/${props.match.params.activityId}`)
        .then(response => response.json())
        .then(activity => {
           
        setActivity(activity)
        
            

        })
    }
        return (

            <>
            
            <h1>{activity.activity}</h1>
            {/* <JournalDetailsList journals = {activity.journals}/> */}
            {activity.journals.length== 0 ? <button onClick={()=>props.history.push(`/add-journal-entry/${activity.id}`)}>Add a Journal Entry</button> :   <JournalDetailsList journals = {activity.journals}/>}
            </>

        ) 

    }

   
export default ActivityJournalListPublic