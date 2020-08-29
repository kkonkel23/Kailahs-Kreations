const Inquiry = require('../models/inquiry')

module.exports = {
    index
}

function index(req, res) {
    Inquiry.find({})
    .then(inquiries => {
      res.render('inquiries/index', { title: 'Inquiries', user: req.user })
    })
}
