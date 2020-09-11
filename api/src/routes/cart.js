const server = require('express').Router();
const { User } = require('../db.js');
const { Cartorder } = require('../db.js');


// TRAE USUARIO POR ID

server.get('/:id', function(req, res) {
    const userId = req.params.id;
	const user = User.findByPk(userId)
		.then(user => {
			if (user) {
				res.send({ user })
			} else {
				res.status(404).send({ message: 'user not Found' })
			};
		})

})

no tenemos nada en cartorders, no  podemos tener el id
tenemos que crear si o si un add cart.

// 38 - AGREGA ITEMS AL CARRITO 

// server.post('/:idUser/cart', (req, res) => {
//     const { state, totalPrice, totalQty } = req.body;
//     const { idUser } = req.params.id;
//     const results = Promise.all([
//         User.findByPk(idUser),
//         Product.findByPk(idproducto),

//         // Cartorder.create({
//         // state: state,
//         // totalPrice: totalPrice,
//         // totalQty: totalQty,
//         // address: address,
//         // paymentId: paymentId,
      
//     ]).then(results => {
//         res.send(results)
//         console.log('se agrego producto');
//     })
//     .catch(err => {
//         res.send(err)
//         console.log('hay un puto error')
//     })
// });





// 39 - RETORNA TODOS LOS ITEMS DEL CARRITO

// server.get('/', (req, res) => {
// });


// 40 - VACIA EL CARRITO

// server.delete('/:id', (req, res) => {
// });

// 41 - EDITA LAS CANTIDADES DEL CARRITO

// server.put('/:id', (req, res) => {
// });


module.exports = server;