const express = require('express')
const indexController = require('../controllers/indexController')

const route = express.Router()

route.get('/', indexController.home)

module.exports = route
