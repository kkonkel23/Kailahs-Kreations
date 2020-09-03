const Woodart = require('../models/woodart')
const Resource = require('../models/resource')

module.exports = {
    create,
    createReview
}

function createReview(req, res) {
    Resource.findById(req.params.id, function(err, resource) {
        resource.reviews.push(req.body)
        resource.save(function(err) {
            res.redirect(`/resources/${resource._id}`)
        })
    })
}


function create(req, res) {
    Woodart.findById(req.params.id, function(err, woodart) {
        woodart.reviews.push(req.body)
        woodart.save(function(err) {
            res.redirect(`/woodarts/${woodart._id}`)
        })
    })
}