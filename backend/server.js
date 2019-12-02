const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const queries = require('./db/queries')

app.listen(port, () => console.log(`listening on ${port}`))

app.get('/', (request, response) =>{
    queries.getAll()
        .then(users => response.send(users))
})
