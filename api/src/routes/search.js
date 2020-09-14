const server = require('express').Router();
const { Product, Category } = require('../db.js');



server.get('/', (req, res) => {
     const  query  = req.query.name;
     console.log(req.query);
     Product.findAll({ where: { name: query } })
         .then(result => {
             res.send(result)
         })
         .catch(err => {
             console.log(err, message);
     })
})


module.exports = server;

