const express = require('express')

const route = express.Router()

route.get('/', (req, res) => {
    res.send('proxiammente: retornara todos los productos!')
})

route.get('/:id', (req, res) => {
    var { id } = req.params
    res.send('proxiammente: retornara un producto con id: ' + id + ' !')
})

route.post('/', (req, res) => {
    res.send('proxiammente: guardara un producto!')
})

route.put('/:id', (req, res) => {
    var { id } = req.params
    res.send('proxiammente: editara un producto con id:' + id)
})

route.delete('/:id', (req, res) => {
    var { id } = req.params
    res.send('proxiammente: eliminara un producto con id:' + id)
})

module.exports = route