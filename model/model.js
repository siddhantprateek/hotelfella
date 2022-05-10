const mongoose = require('mongoose')
const { Schema } = mongoose

const ThumbNailsSchema = new Schema({
    imgsrc: String 
})

const hotels = new Schema({
    title: String,
    location: String,
    rating: Number,
    thumbnails: [{ imgsrc: String }],

})


module.exports = mongoose.model('hotels', hotels)