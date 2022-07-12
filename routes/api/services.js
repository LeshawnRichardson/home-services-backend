const express = require('express')
const router = express.Router()
const serviceCtrl = require('../../controllers/api/services')

// GET /api/v1/services
router.get('/', serviceCtrl.index)



module.exports = router