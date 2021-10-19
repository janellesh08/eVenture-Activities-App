import { useState, useEffect } from'react'
// import { connect } from 'react-redux'
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
        // props.onActivitiesLoaded(activity)
            

        })
    }
        return (

            <>
            
            <h1>{activity.activity}</h1>
            <JournalDetailsList journals = {activity.journals}/>
            
            </>

        ) 

    }

    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         onActivitiesLoaded: (activity) => dispatch({type:'ACTIVITY_LOADED', payload: activity})
    //     }
    // }

   

// export default connect(null, mapDispatchToProps)(ActivityJournalListPublic)
export default ActivityJournalListPublic