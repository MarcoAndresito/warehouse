const express = require('express')
const productService  = require('../service/products')
const service = new productService()

const route = express.Router()

var contId = 3
var data = [
    {
        "id": 1,
        "name": "libros",
        "price": 10,
        "stock": 100
    },
    {
        "id": 2,
        "name": "cuadernos",
        "price": 11,
        "stock": 200
    }
]

// retorna todos los productos
route.get('/', async (req, res) => {

    var result = await service.list()
    res.json(result)

})

// retorna un producto
route.get('/:id', (req, res) => {
    var { id } = req.params
    var result = data.find((item) => item.id == id)
    res.json(result)
})

// guardar nuevo producto
route.post('/', (req, res) => {
    var item = req.body
    item.id = contId
    data.push(item)
    contId++
    res.json({ 'state': 'ok' })
})

// editar producto
route.put('/:id', (req, res) => {
    var { id } = req.params
    var newItem = req.body
    var oldItem = data.find((item) => item.id == id)

    if (newItem.name) {
        oldItem.name = newItem.name
    }
    if (newItem.price) {
        oldItem.price = newItem.price
    }
    if (newItem.stock) {
        oldItem.stock = newItem.stock
    }

    data = data.map((item) => (item.id == oldItem.id) ? oldItem : item)

    res.json({ 'state': 'ok' })
})

// eliminar producto
route.delete('/:id', (req, res) => {
    var { id } = req.params
    var item = data.find((item) => item.id == id)
    var index = data.indexOf(item)
    data.splice(index, 1)
    res.json({ 'state': 'ok' })
})

module.exports = route