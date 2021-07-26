require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const controllers = require('./controllers')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/:id', controllers.reports.getOneById)
app.get('/', (req, res) => {
    res.send('<h1>Sample Weather API</h1>')
})

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})