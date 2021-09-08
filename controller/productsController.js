const db = require('../models/index')
const Sequelize = require('Sequelize')

const getAllProducts = async (request, response) => {
  const allProducts = await db.Products.findAll({
    include: [
      { model: db.Manufacturers }
    ]
  })

  return response.send(allProducts)
}

// // const getProductById = async (request, response) => {
// //   const id = request.params.id
// //   const productById = await db.Products.findOne({
// //     where: { id },
// //     include: [
// //       { model: db.Manufacturers }
// //     ]
// //   })

//   return productById ? response.send(productById) : response.sendStatus(404).send('Product does not exist')
// }
const getProductByName = async (request, response) => {
  const name = request.params.name
  const productByName = await db.Products.findAll({
    where: {
      name: { [Sequelize.Op.like]: `%${name}%` },
    },
    include: [
      { model: db.Manufacturers }
    ]
  })

  return productByName ? response.send(productByName) : response.sendStatus(404).send('Manufacturer does not exist')
}

module.exports = { getAllProducts, getProductByName }
