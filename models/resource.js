const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewer: String,
    rating: {type: Number, min: 1, max: 5},
    content: String
}, {
    timestamps: true
})

const resourceSchema = new Schema ({
    title: String,
    description: String,
    link: String,
    imageUrl: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Resource', resourceSchema)