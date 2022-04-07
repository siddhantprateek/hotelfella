const express = require('express')
const router = express.Router()
const Model = require('../model/model.js')
router.get('/', (req, res) => {
    res.status(200).send('api')
})

router.post('/add', (req, res) => {
    const dbHotel = req.body
    Model.create(dbHotel, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

router.get('/all', (req, res) => {
    Model.find((err, data) => {
        if (err) {
            res.status(500).send()
        } else {
            res.status(200).send(data)
        }
        return data
    })
})

router.delete('/delete/:id', (req, res))


module.exports = router