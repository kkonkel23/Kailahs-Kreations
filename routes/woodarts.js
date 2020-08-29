const router = require('express').Router()
const woodartsCtrl = require('../controllers/woodarts')

router.get('/new', woodartsCtrl.new)
router.post('/', woodartsCtrl.create)
router.get('/', woodartsCtrl.index)
router.get('/:id', woodartsCtrl.show)


module.exports = router;