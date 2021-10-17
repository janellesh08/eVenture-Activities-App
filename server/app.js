const express = require('express')
const app = express()

const cors = require('cors')

//import bcrypt package (DB)
const bcrypt = require('bcryptjs')
const salt = 10

// import dotenv package (DB)
require('dotenv').config()

// import sequelize models (DB)
const models = require('./models')

// import jsonwebtoken package (DB)
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

// add journal entry
app.post('/api/add-journal-entry/:activityId', (req, res) => {

    const entry = req.body.entry
    const image = req.body.image
    const video = req.body.video
    const rating = req.body.rating
    const activityId = req.params.activityId
    const userId = req.body.userId
    const activity = req.body.activity

    let journalEntry = models.Journal.build({
        activity: activity,
        entry: entry,
        image: image,
        video: video,
        rating: rating,
        activity_id: activityId,
        user_id: userId
    })
    journalEntry.save()
    .then(savedEntry => {
        res.json({success: true, journalId: savedEntry.id})
    })
})

app.post('/api/add-my-eventure', (req, res) => {
    console.log(req.body)
    const userId = req.body.userId
    const activityId = req.body.activityId
    const activityTitle = req.body.activityTitle

    const myActivity = models.MyActivity.build({
        user_id: userId,
        activity_id: activityId,
        activity_title: activityTitle
    })
    myActivity.save()
    .then(savedMyActivity => {
        res.json({success: true, myActivityId: savedMyActivity.id})
    })
})


app.get('/api/my-eventures/:userId',(req, res) => {

    const userId = req.params.userId
    
    models.MyActivity.findAll({
        where: {user_id: userId},
        include: [
            {model: models.User, as: 'users'},
            {model: models.Activity, as: 'activities'}
        ]
    })
    .then(myActivities => {
        res.json(myActivities)
    })
})

// journal list page
app.get('/api/journal-entries/:userId', (req, res) => {
    const userId = req.params.userId
    console.log(userId)
        models.Journal.findAll({
            where: {user_id: userId},
            include: [
                {model: models.User, as: 'users'}, 
                {model: models.Activity, as: 'activities'}
               
                    ] },
            
   )
    .then(journals => {
        res.json(journals)
    })
})




// journal details page
app.get('/api/journal-entries-info/:id/:activityId/:userId', (req, res) => {
    const userId = req.params.userId
    const id = req.params.id
    const activityId = req.params.activityId

    models.Journal.findOne({
        where: {
            id: id,
            user_id: userId,
            activity_id: activityId
        },
        include: [
            {model: models.User, as: 'users'}, 
            {model: models.Activity, as: 'activities'}
        ]

    }).then(journals => {
        res.json(journals)
    })
})


app.delete('/api/journal-entries/:id', (req, res) => {
    const id = req.params.id

    models.Journal.destroy({
        where: {
            id: id
        }
    }).then(journals => {
        res.json({success: true})
    })
})


app.post('/api/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    

    let user = await models.User.findOne({
        where: {
            email: email
        }
    })

    if(user != null) {
        bcrypt.compare(password, user.password, (error, result) => {
            if(result) {
                // generate web token (DB)
                const token = jwt.sign({ email: user.email }, process.env.ENCODER_KEY)
                res.json({success: true, token: token, user:user})
            } else {
                res.json({success: false, message: 'Password Incorrect'})
            }
        })
    } else {
        res.json({success: false, message: 'Email Incorrect'})
    }
})

app.post('/api/register', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const persistedUser = await models.User.findOne({
        where: {
            email: email
        }
    })

    if(persistedUser == null) {
        bcrypt.hash(password, salt, async (error, hash) => {
            if(error) {
                res.json({message: 'Error occured while creating new User. Try again.'})
            } else {
                const user = models.User.build({
                    email: email,
                    password: hash,
                    first_name: firstName,
                    last_name: lastName
                })

                let savedUser = await user.save()
                if(savedUser != null) {
                    res.json({success: true, message: 'New User created!'})
                }
            }
        })
    } else {
        res.json({message: 'Email is already in use.'})
    }
})

app.get('/api/activities', async (req, res) => {

    const allActivities = await models.Activity.findAll()

    res.json(allActivities)
})



//display activites based on the number of participants
app.get('/api/activities/:participants', (req, res) => {
    const participants = req.params.participants

    models.Activity.findOne({
        where: {
            participants: participants
        }
    }).then(activities => {
        res.json(activities)
    })
})



app.listen(8080, () => {
    console.log('Server is running... you better go catch it!')
})