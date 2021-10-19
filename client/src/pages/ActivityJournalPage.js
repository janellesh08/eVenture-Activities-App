
import ActivityJournalListPublic from '../components/ActivityJournalListPublic'
import ActivityJournalListUser from '../components/ActivityJournalListUser'
import {connect} from 'react-redux'

function ActivityJournalPage(props) {
console.log(props)


    return (
        <>
            
        {/* <h1>{props.activity.activity}</h1> */}
        <div>
        <h1>Your Personal Journal Entries</h1>
        <ActivityJournalListUser />
        </div>
        <div>
        <h1>Public Journal Entries</h1>
        <ActivityJournalListPublic/>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        activity: state.activity
    }
}

export default connect(mapStateToProps)(ActivityJournalPage)