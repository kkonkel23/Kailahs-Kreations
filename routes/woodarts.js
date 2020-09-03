const router = require('express').Router()
const woodartsCtrl = require('../controllers/woodarts')

router.get('/new', isLoggedIn, woodartsCtrl.new)
router.post('/', woodartsCtrl.create)
router.get('/', woodartsCtrl.index)
router.get('/:id/edit', isLoggedIn, woodartsCtrl.edit)
router.get('/:id', woodartsCtrl.show)
router.put('/:id', isLoggedIn, woodartsCtrl.update)
router.delete('/:id', isLoggedIn, woodartsCtrl.delete)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;