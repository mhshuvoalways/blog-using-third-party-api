require('dotenv').config()
const express = require('express')
const cors = require('cors')
const api = require('./api')


const app = express()
app.use(cors())

app.use('/api', api)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App listening at ${port}`)
})
