const Woodart = require('../models/woodart')


module.exports = {
    index,
    show
}

function show(req, res){
    Woodart.findById(req.params.id, function(err, woodart) {
        res.render('woodarts/show', {title: `${woodart.title}`, woodart})
    })

}

function index(req, res) {
    Woodart.find({})
    .then(woodarts => {
      res.render('woodarts/index', { title: 'Kailahs Kreations', user: req.user })
    })
}