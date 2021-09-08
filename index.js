/* eslint-disable no-console */
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { getAllProducts, getProductByName } = require('./controller/productsController')
const { getAllManufacturers, getManufacturerByName } = require('./controller/manufacturersController')

app.get('/products', getAllProducts)

app.get('/products/:name', getProductByName)

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:name', getManufacturerByName)

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`)
})
