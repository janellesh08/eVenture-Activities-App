import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />


function JournalDetailsList(props) {

    console.log(props)

    
        const journalInfo = props.journals.map(journal => {
            if (journal.rating === 1) {
            return (
                <div>
                    <h2>{journal.users ? journal.users.first_name : ""}</h2>
                    <p>{journal.entry}</p>
                    <img src={journal.image}/>
                    <p>{element}{journal.rating}</p>
    
    
                </div>
            )
            } else {
                return (
                    <div>
                    <h2>{journal.users ? journal.users.first_name : ""}</h2>
                    <p>{journal.entry}</p>
                    <img src={journal.image}/>
                   
                        
    
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

export default JournalDetailsList