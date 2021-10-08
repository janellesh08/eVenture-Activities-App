const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())




app.listen(8080, () => {
    console.log('Server is running... you better go catch it!')
})