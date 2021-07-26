const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    ts: Date,
    position: {
        type: String,
        coordinates: [Number]
    },
    elevation: Number,
    callLetters: String,
    //Celsius
    airTemperature: {
        value: Number
    },
    dewPoint: {
        value: Number
    },
    //Millibars/hPa
    pressure: {
        value: Number
    },
    wind: {
        direction: {
           angle: Number 
        },
        //MPH
        speed: {
            rate: Number
        }
    },
    visibility: {
        //Statute Miles
        distance: {
            value: Number
        }
    } 
})
const Report = mongoose.model('Report', reportSchema, 'data')
module.exports = Report