const Woodart = require('../models/woodart')

module.exports = {
    create
}

function create(req, res) {
    Woodart.findById(req.params.id, function(err, woodart) {
        woodart.reviews.push(req.body)
        woodart.save(function(err) {
            res.redirect(`/woodarts/${woodart._id}`)
        })
    })
}