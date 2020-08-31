const router = require('express').Router()
const woodartsCtrl = require('../controllers/woodarts')

router.get('/new', isLoggedIn, woodartsCtrl.new)
router.post('/', woodartsCtrl.create)
router.get('/', woodartsCtrl.index)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;