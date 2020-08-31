const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inquirySchema = new Schema ({
    name: String,
    sender: String,
    subject: String,
    message: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Inquiry', inquirySchema)