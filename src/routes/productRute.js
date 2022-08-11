const express = require('express')
const productController = require('../controllers/productController')
const oauthController = require('../controllers/oauthController')

const rute = express.Router()

rute.use(oauthController.verifyToken)

rute.get('/', productController.getAllProducts)
rute.get('/:id', productController.getOneProduct)
rute.post('/', productController.saveProduct)
rute.put('/:id', productController.updateProduct)
rute.delete('/:id', productController.deleteProduct)

module.exports = rute
