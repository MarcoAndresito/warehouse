const express = require('express')
const oauthController = require('../controllers/oauthController')

const router = express.Router()

router.post('/token', oauthController.generateToken)
router.get('/verify', oauthController.verifyToken)

module.exports = router
