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
                res.json({success: true, token: token})
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


app.listen(8080, () => {
    console.log('Server is running... you better go catch it!')
})