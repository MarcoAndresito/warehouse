const ProductService = require('../service/productService')
const productService = new ProductService()

async function getAllProducts(req, res) {
    var result = await productService.list()
    res.json(result)
}

async function getOneProduct(req, res) {
    try {
        var { id } = req.params
        var result = await productService.get(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({
            'state': 'error',
            'error': error
        })
    }
}

async function saveProduct(req, res) {
    try {
        var product = req.body
        var result = await productService.save(product)
        res.status(200).json({
            'state': 'ok',
            'id': result
        })
    } catch (error) {
        res.status(500).json({
            'state': 'error',
            'error': error
        })
    }
}

async function updateProduct(req, res) {
    try {
        var { id } = req.params
        var product = req.body
        var result = await productService.update(id, product)
        res.status(200).json({
            'state': 'ok',
            'update': result
        })
    } catch (error) {
        res.status(500).json({
            'state': 'error',
            'error': error
        })
    }
}

async function deleteProduct(req, res) {
    try {
        var { id } = req.params
        var result = await productService.delete(id)
        res.status(200).json({
            'state': 'ok',
            'delete': result
        })
    } catch (error) {
        res.status(500).json({
            'state': 'error',
            'error': error
        })
    }
}

module.exports = {
    getAllProducts,
    getOneProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}
