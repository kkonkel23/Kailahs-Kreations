const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewer: String,
    rating: {type: Number, min: 1, max: 10},
    content: String
}, {
    timestamps: true
})

const woodartSchema = new Schema({
    title: String,
    created: String,
    imageUrl: String,
    description: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Woodart', woodartSchema)