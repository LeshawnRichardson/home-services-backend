const express = require('express')
const router = express.Router()
const servicesCtrl = require('../../controllers/api/services')

// GET /api/v1/services
router.get('/', servicesCtrl.index)
// POST /api/v1/services
router.post('/', servicesCtrl.create)
// PUT /api/v1/services:id
router.put('/:id', servicesCtrl.update)

module.exports = router