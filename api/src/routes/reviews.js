const server = require('express').Router();

const { Product } = require('../db.js');
const { User } = require('../db.js');
const { Review } = require('../db.js');



// CREA REVIEW
//POST /product/:id/review


server.post('/:id/review', (req, res) => {
    const userId = req.params.id;

    const { calification, description } = req.body;

    Review.findOne({
        where: { userId: userId },
    }).then(review => {
        console.log(review);
        Review.create({
            calification: calification,
            description: description,
            userId: userId,
            productId: req.body.productId
        }).then(result => {
            res.send(result)
        })
            .catch(err => {
                res.send(err, 'Hubo un error. No se creo la review')
            })
    });
});






module.exports = server;