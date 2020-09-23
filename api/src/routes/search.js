const server = require('express').Router();
const { Product, Category } = require('../db.js');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


// server.get('/', (req, res) => {
//      const query  = req.query.name;
//      console.log(req.query);
//      Product.findAll({ where: { name: query } })
//          .then(result => {
//              res.send(result)
//          })
//          .catch(err => {
//              console.log(err, message);
//      })
// })


// server.get('/', (req, res) => {
//     const { query } = req.query;
//     if (!query) return res.send("error aca");

//     Product.findAll({
//       where: {
//         [Op.or]: {
//           name: { [Op.iLike]: `%${query}%` },
//         },
//       },
//     })
//       .then((products) => {
//         res.send(products);
//       })
//       .catch(() => res.send("error del final"));
//   });

server.get('/', (req, res) => {
    const queryName = req.query.name;
    const queryDes =req.query.description;
    console.log(req.queryName);
    Product.findAll({
        where: {
            [Op.or]: [
                {
                    name: { [Op.iLike]: "%" + queryName + "%" }
                },
                {
                    description: { [Op.iLike]: "%" + queryDes + "%" }
                }
    ]
    }
    })
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err, message);
    })
})


module.exports = server;

