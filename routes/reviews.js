var router = require('express').Router();
const reviewsCtrl = require('../controllers/reviews')

router.post('/woodarts/:id/reviews', isLoggedIn, reviewsCtrl.create)
router.post('/resources/:id/reviews', isLoggedIn, reviewsCtrl.createReview)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router