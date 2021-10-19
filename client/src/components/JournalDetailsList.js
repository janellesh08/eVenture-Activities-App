function JournalDetailsList(props) {

    console.log(props)

    const journalInfo = props.journals.map(journal => {
        return (
            <div>
                <h2>{journal.users.first_name}</h2>
                <p>{journal.entry}</p>
                <img src={journal.image}/>
                {/* <video width = "500px" controls >
                    <source src ={journal.video} type= >
                        </video> */}
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