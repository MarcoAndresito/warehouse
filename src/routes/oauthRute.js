const express = require('express')
const oauthController = require('../controllers/oauthController')

const router = express.Router()

router.post('/token', oauthController.generateToken)

module.exports = router
