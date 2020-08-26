const server = require('express').Router();
const { Product } = require('../db.js');
const multer = require('multer');
const path = require('path');


// MUESTRA TODOS LOS PRODUCTOS
// server.get('/', (req, res, next) => {
// 	Product.findAll()
// 		.then(products => {
// 			res.send(products);
// 		})
// 		.catch(next);

// 	});


// // MUESTRA CON ID
// server.get('/:id', (req, res, next) => {
// 	res.send('/productos/:id')
// })

// // CREA
// server.post('/', (req, res, next) => {
// 	console.log(req.body);
// 	Product.create({
// 		name: req.body.name,
// 		description: body.description,
// 		price: req.body.price,
// 		stock: req.body.stock,
// 		category: req.body.category,
// 	})
// 	res.send(' POST /products/new')
// });

// GET IMAGE
router.get('/images/upload', (req, res) => {
    res.render('index');
});

// POST IMAGE
server.post('/upload', (req, res, next) => {
	 console.log(req.file);
	 res.send('se subio');

});

// // MODIFICAR
// server.put('/', (req, res, next) => {
// 	res.send(' PUT /productos/:id')
// });

// // ELIMINAR
// server.delete('/', (req, res, next) => {
// 	res.send(' DELETE /productos/:id')
// });





module.exports = server;

