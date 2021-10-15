import { Container, Card, Button } from "react-bootstrap"
import Free from './styles/images/Free.png'
import Inexpensive from './styles/images/Inexpensive.png'
import Moderatley_Expensive from './styles/images/Moderately_Expensive.png'
import Expensive from './styles/images/Expensive.png'
import Solo from './styles/images/Solo.png'
import Couple from './styles/images/couple.png'
import Friends from './styles/images/Friends.png'
import Family from './styles/images/family.png'
import Morning from './styles/images/Morning.png'
import Afternoon from'./styles/images/Afternoon.png' 
import Evening from'./styles/images/Evening.png' 
import Anytime from'./styles/images/Anytime.png'
import zerothirty from'./styles/images/zerothirty.png'
import thirtytoonehour from'./styles/images/thirtytoonehour.png'
import onetotwohours from'./styles/images/onetotwohours.png'
import twotofourhours from'./styles/images/twotofourhours.png'
import fourhoursplus from'./styles/images/fourhoursplus.png'
import Home from './styles/images/Home.png'
import Outside_Home from './styles/images/Outside_Home.png'
import { connect } from "react-redux"
import { useEffect } from "react"
import * as actionCreator from '../store/creators/actionCreators'
import EventuresList from "../components/eVenturesList"
import '../styles/eVenturesPage.css'


function EventuresPage(props) {

    useEffect(() => {
        props.onFetchActivities()
    }, [])

    const priceIcon = (price) => {
        if (price == 'Free') {
            return <img className='iconimg' src= {Free} />
        }
        if(price =="$") {
            return <img className='iconimg'src={Inexpensive} />
        }
        if(price =='$$') {
            return <img className='iconimg' src= {Moderatley_Expensive} />
        }
        if(price =='$$$') {
            return <img className='iconimg' src= {Expensive}/>
        }
        else return <h1>{price}</h1>
    }

    const participantIcon = (participants) => {
        if(participants == 'Solo') {
            return <img className='iconimg' src = {Solo} />
        }
        if(participants == 'Couple') {
            return <img className='iconimg' src = {Couple} />
        }
        if(participants == 'Friends') {
            return <img className='iconimg'src = {Friends} />
        }
        if(participants == 'Family') {
            return <img className='iconimg' src = {Family} />
        }
        else return <h1>{participants}</h1>
    }
    const timeOfDayIcon = (time) => {
        if(time == 'Morning') {
            return <img className='iconimg' src = {Morning} />
        }
        if(time  == 'Afternoon') {
            return <img className='iconimg' src = {Afternoon} />
        }
        if(time  == 'Evening') {
            return <img className='iconimg'src = {Evening} />
        }
        if(time  == 'Anytime') {
            return <img className='iconimg' src = {Anytime} />
        }
        else return <h1>{time}</h1>
    }

    const durationIcon = (duration) => {
        if(duration == '0 - 30 mins') {
            return <img className='iconimg' src = {zerothirty} />
        }
        if(duration == '30 mins - 1hr') {
            return <img className='iconimg' src = {thirtytoonehour} />
        }
        if(duration == '1hr - 2hrs') {
            return <img className='iconimg'src = {onetotwohours} />
        }
        if(duration == '2hrs - 4hrs') {
            return <img className='iconimg' src = {twotofourhours} />
        }
        if(duration == '4hrs +') {
            return <img className='iconimg' src = {fourhoursplus} />
        }
        else return <h1>{duration}</h1>
    }

    const locationIcon = (location) => {
        if(location == 'At Home') {
            return <img className='iconimg' src = {Home} />
        }
        if(location == 'Outside of the Home') {
            return <img className='iconimg' src = {Outside_Home} />
        }
        else return <h1>{location}</h1>
    }


    const activityItems = props.activities.map((activity) => {
        return <li className = 'eVenturesList' key={activity.id}>
         
            <Card border="secondary" style={{ width: '25rem' }}>
                <Card.Header className = 'activityCardHeader'>{priceIcon(activity.price_range)}{participantIcon(activity.participants)}{timeOfDayIcon(activity.time_of_day)}{durationIcon(activity.duration_range)}{locationIcon(activity.location)}</Card.Header>
                <Card.Body>
                    <Card.Title>{activity.activity}</Card.Title>
                    <Card.Text>
                        {activity.description}
                    </Card.Text>
                    <Button variant="secondary" onClick={() => props.onAddToMyActivities(activity)}>Add to My eVentrues</Button>{' '}

                </Card.Body>
            </Card>
            <br />
        </li>
    })




    return (
        <div>
            <Container>
                <h1>Find an Activity!</h1>

                <EventuresList />
                <ul>
                    {activityItems}
                </ul>

                
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activities: state.fetchActivityRed.activities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchActivities: () => dispatch(actionCreator.fetchAllActivities()),
        onAddToMyActivities: (activity) => dispatch(actionCreator.submitToMyActivities(activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventuresPage)