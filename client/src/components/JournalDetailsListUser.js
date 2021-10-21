import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />


function JournalDetailsListUser(props) {

    
    

    const handleJournalDelete = (id) => {
        fetch(`http://localhost:8080/api/journal-entries/${id}`, {
            method: 'DELETE' 
        }).then(response => response.json())
        .then(result => {
            props.onJournalDeleted()
        })
    }
    
        const journalInfo = props.journals.map(journal => {
            if (journal.rating === 1) {
            return (
                <div>
                    <h2>{journal.users ? journal.users.first_name : ""}</h2>
                    <p>{journal.entry}</p>
                    <img src={journal.image}/>
                    <p>{element}</p>
                    <button onClick = {() => handleJournalDelete(journal)}> Delete</button>
    
    
                </div>
            )
            } else {
                return (
                    <div>
                    <h2>{journal.users ? journal.users.first_name : ""}</h2>
                    <p>{journal.entry}</p>
                    <img src={journal.image}/>
                    <button onClick = {() => handleJournalDelete(journal.id)}> Delete</button>
                        
    
                </div>
                )
            }
        })
    



    return (
        <>
        {journalInfo}
        </>
    )

}

export default JournalDetailsListUser