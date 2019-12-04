const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const queries = require('./db/queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => console.log(`listening on ${port}`))

app.get('/mountains', (request, response) =>{
    queries.getAllMountain_Ids()
        .then(mountains => response.send(mountains))
})

app.get('/', (request, response) => {
    response.send({key: process.env.API_KEY})
})
