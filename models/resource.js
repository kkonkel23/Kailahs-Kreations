const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resourceSchema = new Schema ({
    title: String,
    description: String,
    link: String,
    imageUrl: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Resource', resourceSchema)