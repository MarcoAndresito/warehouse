const express = require('express')
const productService = require('../service/products')
const service = new productService()

const route = express.Router()

// retorna todos los productos
route.get('/', async (req, res) => {
    var result = await service.list()
    res.json(result)
})

// retorna un producto
route.get('/:id', async (req, res) => {
    var { id } = req.params
    var result = await service.get(id)
    res.json(result)
})

// guardar nuevo producto
route.post('/', async (req, res) => {
    var product = req.body
    var result = await service.save(product)
    res.json({ id: result })
})

// editar producto
route.put('/:id', async (req, res) => {
    var { id } = req.params
    var product = req.body
    var result = await service.update(id, product)
    res.json({ 'update': result })
})

// eliminar producto
route.delete('/:id', async (req, res) => {
    var { id } = req.params
    var result = await service.delete(id)
    res.json({
        'delete': result
    })
})

module.exports = route
