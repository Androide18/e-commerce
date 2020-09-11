const server = require('express').Router();

const { Cartorder } = require('../db.js');
const {Product} = require('../db.js');
const {Orderline} = require('../db.js');


server.post('/:id/cartorder', (req, res) => {
    // busca si existe una orden con el userid y con state 'Uncreated'
    Cartorder.findOne({
      where: { state: 'Uncreated', userId: req.body.userId },
    }).then(cartorder => {
      console.log(cartorder);
      //si no se cumple la condicion del where crea una nueva orden
      if (!cartorder) {
        Cartorder.create({
            state: 'Uncreated',
          address: 'adress',
          userId: req.body.userId,
        }).then(newOrder => {
          //le agrega una producto a la orden nueva
          Product.findById(req.body.productId).then(product => {
            Orderline.create({
              price: product.price,
              quantity: 1,
              productId: product.id,
              cartorderId: newOrder.id,
            }).then(orderline => res.json(orderline));
          });
        });
      } else {
        //si existe una orden uncreated y con el id del user
        // le agrega al order detail de esa orden el id el producto
        Product.findById(req.body.productId).then(product => {
            Orderline.findOne({
            where: { productId: product.id, cartorderId: cartorder.id },
          }).then(orderline => {
            if (!orderline) {
                Orderline.create({
                price: product.price,
                productId: product.id,
                cartorderId: cartorder.id,
              }).then(orderline => res.json(orderline));
            } else {
              orderline.update({ quantity: Number(orderline.quantity) + 1 });
            }
          });
        });
      }
    });
  });




// 39 - RETORNA TODOS LOS ITEMS DEL CARRITO

server.get('/', (req, res) => {
});


// 40 - VACIA EL CARRITO

server.delete('/:id', (req, res) => {
});

// 41 - EDITA LAS CANTIDADES DEL CARRITO

server.put('/:id', (req, res) => {
});


module.exports = server;

