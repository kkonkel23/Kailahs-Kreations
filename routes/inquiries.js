const router = require('express').Router();
const inquiriesCtrl = require('../controllers/inquiries')

router.get('/', isLoggedIn, inquiriesCtrl.index)
router.post('/', isLoggedIn, inquiriesCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router