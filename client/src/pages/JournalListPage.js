import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import { useEffect } from'react'
import { response } from "express"

function JournalListPage(props) {


    useEffect(() => {
        loadJournals()
    }, [])

    const handleJournalEntryDelete = (id) => {
        fetch(`http://localhost:8080/api/journl-entries/${id}`, {
            method: 'DELETE'

    }).then(response => response.json())
    .then(result => {
        loadJournals()
        })
    }

    const journalItems = props.journals.map(journal => {
        return <li key = {journal.id}>
            <h1>{journal.</h1>
        </li>
    })

    return (

        <div>
            <Container>
                <h1>My Journal Entries</h1>

            </Container>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
} 

const 