import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import '../styles/JournalDetailsPage.css'

const element = <FontAwesomeIcon icon={faHeart} size='2x' />


function JournalDetailsList(props) {

    const handleJournalDelete = (id) => {
        fetch(`http://localhost:8080/api/journal-entries/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(result => {
                props.onJournalDeleted()
            })
    }

    const journalInfo = props.journals.map(journal => {

        return (
            <div id="journalEntryLiDiv">

                <div id="nameAndDateDiv" >
                    <h2 id="journalUserFirstName">{journal.users ? journal.users.first_name : ""}</h2>
                    <p id="journalEntryDate">{moment(props.journals.createdAt).format("MMMM Do YYYY")}</p>
                </div>
                <div id="imageAndEntryDiv">
                    <img id="journalEntryImage" src={journal.image} />
                    <p id="journalEntry">{journal.entry}</p>
                </div>

                <p id="journalRatingHeart">{journal.rating === 1 ? element : ""}</p>
                {journal.users ? "" : <button id="journalDeleteButton" onClick={() => handleJournalDelete(journal.id)}> Delete</button>}

            </div>
        )

    })


    return (
        <>
            {journalInfo}
        </>
    )

}

export default JournalDetailsList