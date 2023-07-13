const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.index)

router.post('/', controller.create)

router.get('/new', controller.new)

router.get('/:id', controller.show)


module.exports = router;