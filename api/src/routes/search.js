const server = require('express').Router();
const { Product } = require('../db.js');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


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

// Product.findAll({
//     where: {
//         [Op.or]: [
//             {
//                 name: {
//                     [Op.like]: `%${query}%`
//                 }
//             },
//             {
//                 description: {
//                     [Op.like]: `%${query}%`
//                 }
//             }
//         ]
//     }
// })
//     .then((products) => {





        //     const term  = req.query;
        //      console.log(term)

        //     // if (!query) return res.send("hasta aca");

        //     Product.findAll({
        //         where: {
        //             name: { [Op.like]: '%' + term + '%' }
        //         }
        //     })
        //       .then((products) => {
        //         res.send(products);
        //       })
        //       .catch(() => res.send("No funco"));
        //   });

















        //     const query  = req.body;
        //         //   console.log(req.query);
        //     if (!{query}) return res.send("error :(");

        //     console.log(query)

        //     Product.findAll({
        //       where: {
        //         [Op.or]: [
        //           {
        //             name: {
        //               [Op.like]: `%${query}%`
        //             }
        //           },
        //           {
        //             description: {
        //               [Op.like]: `%${query}%`
        //             }
        //           }
        //         ]
        //       }
        //     })
        //       .then((products) => {
        //         res.send(products);
        //       })
        //       .catch(() => res.send("Hay un puto error!"));
        //   });


        // const query  = req.query.name;
        //     console.log(req.query);
        //     Product.findAll({ where: { name: query } })
        //         .then(result => {
        //             res.send(result)
        //         })
        //         .catch(err => {
        //             console.log(err, message);
        //     })
        // })




        module.exports = server;

