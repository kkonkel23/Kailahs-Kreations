const User = require('../models/user')
const Woodart = require('../models/woodart');
const user = require('../models/user');


module.exports = {
    index,
    show,
    new: newWoodart,
    create,
    delete: removeWoodart,
    edit,
    update
}

function update(req,res){
    User.findOne({'postedBy': {'_id': req.params.id}}, function(err, result) {
        if (!result._id.equals(req.user._id)) return res.redirect(`/woodarts/${req.params.id}`);
        user = req.user;
        Woodart.findByIdAndUpdate(req.params.id, req.body, function(err, woodart) {
            res.redirect(`/woodarts/${woodart._id}`)
        })
    })
}

function edit(req,res) {
    Woodart.findById(req.params.id, function(err, woodart) {
        res.render('woodarts/edit', {title: `${woodart.title}`, woodart, user: req.user})
    })
}

function removeWoodart(req,res){
    console.log('Email', req.user.email)
    if (req.user.email === 'kailahkonkel@gmail.com') {
        Woodart.findByIdAndRemove(req.params.id, function() {
            res.redirect('/woodarts')
        })
    } else {
        res.redirect('/woodarts')
    }
}

function create(req, res) {
    const woodart = new Woodart(req.body)
    woodart.save(function(err) {
        if (err) return res.render('woodarts/new')
        res.redirect('/woodarts');
    })
}

function newWoodart(req, res) {
    res.render('woodarts/new', { title: 'Add New Piece', user: req.user})
}

function show(req, res){
    Woodart.findById(req.params.id, function(err, woodart) {
        res.render('woodarts/show', {title: `${woodart.title}`, woodart, user: req.user})
    })
}

function index(req, res) {
    Woodart.find({})
    .then(woodarts => {
      res.render('woodarts/index', { title: 'Kailahs Kreations', user: req.user, woodarts })
    })
}