const router = require('express').Router();
const blogsCtrl = require('../controllers/blogs')

router.get('/', isLoggedIn, blogsCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router