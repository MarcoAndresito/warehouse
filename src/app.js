const express = require('express')

const indexRute = require('./routes/indexRute')
const productRute = require('./routes/productRute')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/', indexRute)
app.use('/products', productRute)

app.listen(PORT, () => {
    console.log('listo!')
})