import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />


function JournalDetailsList(props) {

    console.log(props)

    
        const journalInfo = props.journals.map(journal => {
            if (journal.rating === 1) {
            return (
                <div>
                    <h2>{journal.users.first_name}</h2>
                    <p>{journal.entry}</p>
                    <img src={journal.image}/>
                    {/* <video width = "500px" controls >
                        <source src ={journal.video} type= >
                            </video> */}
                    <p>{element}{journal.rating}</p>
    
    
                </div>
            )
            } else {
                return (
                    <div>
                    <h2>{journal.users.first_name}</h2>
                    <p>{journal.entry}</p>
                    <img src={journal.image}/>
                    {/* <video width = "500px" controls >
                        <source src ={journal.video} type= >
                            </video> */}
                        
    
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