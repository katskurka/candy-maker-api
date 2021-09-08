/* eslint-disable max-len */
const db = require('../models/index')
const Sequelize = require('Sequelize')

const getAllManufacturers = async (request, response) => {
  const allManufacturers = await db.Manufacturers.findAll({
    include: [
      { model: db.Products }
    ]
  })

  return response.send(allManufacturers)
}

// const getManufacturerByName = async (request, response) => {
//   const name = request.params.name
//   const manufacturerById = await db.Manufacturers.findOne({
//     where: { name },
//     include: [
//       { model: db.Products }
//     ]
//   })

const getManufacturerByName = async (request, response) => {
  const name = request.params.name
  const manufacturerByName = await db.Manufacturers.findAll({
    where: {
      name: { [Sequelize.Op.like]: `%${name}%` },
    },
    include: [
      { model: db.Products }
    ]
  })

  return manufacturerByName ? response.send(manufacturerByName) : response.sendStatus(404).send('Manufacturer does not exist')
}

module.exports = { getAllManufacturers, getManufacturerByName }
