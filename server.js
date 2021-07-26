require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const controllers = require('./controllers')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/:id', controllers.reports.getOneById)
app.put('/:id', controllers.reports.editReport)
app.get('/station/:call', controllers.reports.getByCall)
// app.get('/stations', controllers.reports.getStations)
app.post('/', controllers.reports.createReport)
app.get('/', (req, res) => {
    res.send('<h1>Sample Weather API</h1>')
})

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})