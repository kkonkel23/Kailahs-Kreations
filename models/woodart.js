const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewer: String,
    rating: {type: Number, min: 1, max: 5},
    content: String
}, {
    timestamps: true
})

const woodartSchema = new Schema({
    title: String,
    created: String,
    imageUrl: String,
    description: String,
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Woodart', woodartSchema)