/* eslint-disable max-len */
const Sequelize = require('sequelize')
const manufacturersModel = require('./manufacturersModel')
const productsModel = require('./productsModel')
const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV || 'development'
const { username, password, host, dialect, database } = allConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host, dialect, define: { timestamps: true }
})

const Manufacturers = manufacturersModel(connection, Sequelize)
const Products = productsModel(connection, Sequelize, Manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = { Manufacturers, Products }
