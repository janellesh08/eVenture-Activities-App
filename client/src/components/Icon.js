import Free from '../pages/styles/images/Free.png'
import Moderatley_Expensive from '../pages/styles/images/Moderately_Expensive.png'
import Expensive from '../pages/styles/images/Expensive.png'
import Solo from '../pages/styles/images/Solo.png'
import Couple from '../pages/styles/images/couple.png'
import Friends from '../pages/styles/images/Friends.png'
import Family from '../pages/styles/images/family.png'
import Morning from '../pages/styles/images/Morning.png'
import Afternoon from '../pages/styles/images/Afternoon.png'
import Evening from '../pages/styles/images/Evening.png'
import Anytime from '../pages/styles/images/Anytime.png'
import zerothirty from '../pages/styles/images/zerothirty.png'
import thirtytoonehour from '../pages/styles/images/thirtytoonehour.png'
import onetotwohours from '../pages/styles/images/onetotwohours.png'
import twotofourhours from '../pages/styles/images/twotofourhours.png'
import fourhoursplus from '../pages/styles/images/fourhoursplus.png'
import Home from '../pages/styles/images/Home.png'
import Cheap from '../pages/styles/images/Cheap.png'
import Outside_Home from '../pages/styles/images/Outside_Home.png'


export const priceIcon = (price) => {
    switch(price){
        case 'Free':
            return <img className='iconimg'src={Free} alt=''  />
        case '$':
            return <img className='iconimg' src={Cheap} alt=''  />
        case '$$':
            return <img className='iconimg' src={Moderatley_Expensive} alt=''  />
        case '$$$':
            return <img className='iconimg' src={Expensive} alt='' />
        default:
            return <h1>{price}</h1>
    }
}

export const participantIcon = (participants) => {
    switch(participants){
        case 'Solo':
            return <img className='iconimg' src={Solo} alt=''  />
        case 'Couple':
            return <img className='iconimg' src={Couple} alt=''  />
        case 'Friends':
            return <img className='iconimg' src={Friends} alt=''  />
        case 'Family':
            return <img className='iconimg' src={Family} alt=''  />
        default:
            return <h1>{participants}</h1>
    }
}

export const timeOfDayIcon = (time) => {
    switch(time){
        case 'Morning':
            return <img className='iconimg' src={Morning} alt=''  />
        case 'Afternoon':
            return <img className='iconimg' src={Afternoon} alt=''  />
        case 'Evening':
            return <img className='iconimg' src={Evening} alt=''  />
        case 'Anytime':
            return <img className='iconimg' src={Anytime} alt=''  />
        default:
            return <h1>{time}</h1>
    }
}

export const durationIcon = (duration) => {
    switch(duration){
        case '0 - 30 mins':
            return <img className='iconimg' src={zerothirty} alt=''  />
        case '30 mins - 1hr':
            return <img className='iconimg' src={thirtytoonehour} alt=''  />
        case '1hr - 2hrs':
            return <img className='iconimg' src={onetotwohours} alt=''  />
        case '2hrs - 4hrs':
            return <img className='iconimg' src={twotofourhours} alt=''  />
        case '4hrs +':
            return <img className='iconimg' src={fourhoursplus} alt=''  />
        default:
            return <h1>{duration}</h1>
    }
}

export const locationIcon = (location) => {
    switch(location){
        case 'At Home':
            return <img className='iconimg' src={Home} alt=''  />
        case 'Outside of the Home':
            return <img className='iconimg' src={Outside_Home} alt=''  />
        default:
            return <h1>{location}</h1>
    }
}
