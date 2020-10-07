const mongoose = require('mongoose')

const waetherSchema = new mongoose.Schema({
    city: {
        type: String
    },
    tempature: {
        type: String
    },
    humidity: {
        type: String
    },
    wind: {
        type: String
    },
    description: {
        type: String
    },
    actual_temp: {
        type: String,
        default: 'not entered'
    }
}, {
    timestamps: true
})

const Weather = mongoose.model('Weather', waetherSchema)

module.exports = Weather