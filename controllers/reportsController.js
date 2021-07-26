const db = require('../models')

const getOneById = (req, res) => {
    console.log(`Querying ${req.params.id}`)
    db.Report.findById(req.params.id, (err, foundReport) => {
        if (err) return console.log(err)
        console.log(foundReport)
        res.json(foundReport)
    })
}

module.exports = {
    getOneById
}