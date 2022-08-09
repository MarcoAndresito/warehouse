const express = require('express')
const {
    generateToken,
    verifyToken
} = require('../controllers/oauthController')

const router = express.Router()

router.post('/token', generateToken)
router.get('/verify', verifyToken)

module.exports = router
