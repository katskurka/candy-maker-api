const Sequelize = require('sequelize')
const manufacturersModel = require('./manufacturersModel')
const productsModel = require('./productsModel')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql', define: { timestamps: true }
})

const Manufacturers = manufacturersModel(connection, Sequelize)
const Products = productsModel(connection, Sequelize, Manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = { Manufacturers, Products }
