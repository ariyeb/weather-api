const express = require('express')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const router = new express.Router()

router.get('/weather/:city', async (req, res) => {
    const city = req.params.city
    try {
        const {
            longitude,
            latitude
        } = await geocode(city) // {longitude: 657875, latitude:7868689, name: tel aviv}
        const wetaherData = await forecast(latitude, longitude)

        res.send({
            city,
            ...wetaherData
        })
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send(err)
        }
    }
})

module.exports = router