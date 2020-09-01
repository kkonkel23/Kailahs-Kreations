const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogScema = new Schema ({
    title: String,
    posted: Date,
    content: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)