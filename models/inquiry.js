const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inquirySchema = new Schema ({
    inquirer: String,
    email: String,
    content: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Inquiry', inquirySchema)