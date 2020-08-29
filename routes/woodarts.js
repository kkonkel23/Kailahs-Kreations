const router = require('express').Router()
const woodartsCtrl = require('../controllers/woodarts')

router.get('/', woodartsCtrl.index)
router.get('/:id', woodartsCtrl.show)


module.exports = router;