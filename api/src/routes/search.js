const server = require('express').Router();
const { Product } = require('../db.js');
const { Op } = require("sequelize");


server.get('/', (req, res) => {
    const query  = req.query.name;
        //   console.log(req.query);
    if (!{query}) return res.send("error :(");
  
    console.log(query)

    Product.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query}%`
            }
          },
          {
            description: {
              [Op.like]: `%${query}%`
            }
          }
        ]
      }
    })
      .then((products) => {
        res.send(products);
      })
      .catch(() => res.send("Hay un puto error!"));
  });
  


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


module.exports = server;

