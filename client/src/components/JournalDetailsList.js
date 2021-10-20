function JournalDetailsList(props) {

    console.log(props)

   
    const journalInfo = props.journals.map(journal => {
        return (
            <div>
                <h2>{journal.users ? journal.users.first_name : ""}</h2>
                <p>{journal.entry}</p>
                <img src={journal.image}/>
              
                <p>{journal.rating}</p>


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