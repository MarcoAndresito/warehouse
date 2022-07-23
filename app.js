const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hola Mundo!')
})

app.get('/products', (req, res) => {
    res.send('productos en construction!')
})

app.get('/peoples', (req, res) => {
    res.send('personas en construcion!')
})

app.listen(PORT, () => {
    console.log('listo!')
})