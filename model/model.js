const mongoose = require('mongoose')
const { Schema } = mongoose


const hotels = new Schema({
    title: String,
    location: String,
    rating: Number,
    thumbnails: [{ imgsrc: String }],

})


module.exports = mongoose.model('hotels', hotels)