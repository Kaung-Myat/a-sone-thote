const myanmarMonthsData = require('../models/MyanmarMonths.json');
const latHtaukBayDinData = require('../models/MinTheinKha.LatHtaukBayDin.json');
const dreamDictionaryData = require('../models/DreamDictionary.json');
const zodiaData = require('../models/Zodiac.json');

module.exports = function (app) {
    app.get('/api/myanmar-months', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            "status": 200,
            "data": myanmarMonthsData
        })
    })

    app.get('/api/lat-htauk-bay-din', function (req, res) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            "status": 200,
            "data": latHtaukBayDinData
        })
    })

    app.get('/api/zodiac', function (req, res) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            "status": 200,
            "data": zodiaData
        })
    })

    app.get('/api/dream-dictionary', function (req, res) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            "status": 200,
            "data": dreamDictionaryData
        })
    })
}

