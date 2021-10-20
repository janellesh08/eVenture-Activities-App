import { useState, useEffect } from'react'
// import { connect } from 'react-redux'
import JournalDetailsList from './JournalDetailsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />

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

        if (activity.likes > 0) {
            return (

                <div class="journalItemDiv" >
                
                <h1>{activity.activity}</h1>
                <p>{element}{activity.likes}</p>
                <JournalDetailsList journals = {activity.journals}/>
                
                </div>
            )
        } else {
            return (

                <>
                
                <h1>{activity.activity}</h1>
                <JournalDetailsList journals = {activity.journals}/>
                
                </>
            )
        }
  
        

    }

    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         onActivitiesLoaded: (activity) => dispatch({type:'ACTIVITY_LOADED', payload: activity})
    //     }
    // }

   

// export default connect(null, mapDispatchToProps)(ActivityJournalListPublic)
export default ActivityJournalListPublic