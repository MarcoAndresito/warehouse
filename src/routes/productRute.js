const express = require('express')
const {
    getAllProducts,
    getOneProduct,
    saveProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

const rute = express.Router()

rute.get('/', getAllProducts)
rute.get('/:id', getOneProduct)
rute.post('/', saveProduct)
rute.put('/:id', updateProduct)
rute.delete('/:id', deleteProduct)

module.exports = rute
