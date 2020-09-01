const router = require('express').Router();
const resourcesCtrl = require('../controllers/resources')

router.get('/', isLoggedIn, resourcesCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router