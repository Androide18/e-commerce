const server = require('express').Router();

const { urlencoded } = require('body-parser');
const { ADD_PRODUCT_BASKET } = require('../../../client/src/actions/types.js');
const { Cartorder } = require('../db.js');
const { Product } = require('../db.js');
const { Orderline } = require('../db.js');
const { User } = require('../db.js');

// TRAE USUARIO POR ID


server.get('/:id', function (req, res) {
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

// EL USUARIO AGRUEGUE UN PRODUCTO AL CARRITO


server.post('/:id/cart', (req, res) => {

  // busca si existe una orden con el userid y con state 'Uncreated'
  Cartorder.findOne({
    where: { state: 'cart', userId: req.params.id },
  }).then(cartorder => {
    console.log(cartorder);
    //si no se cumple la condicion del where crea una nueva orden
    if (!cartorder) {
      Cartorder.create({
        state: 'cart',
        totalPrice: 0,
        totalQty: 0,
        userId: req.params.id,
      }).then(newOrder => {
        //le agrega una producto a la orden nueva
        Product.findByPk(req.body.productId).then(product => {
          Orderline.create({
             price: product.price,
             quantity: 1,
            productId: product.id,
             cartorderId: newOrder.id,
          }).then(orderline => res.send(orderline));
        });
      });
    }
    else {
      //si existe una orden uncreated y con el id del user
      // le agrega al order line de esa orden el id el producto
      Product.findByPk(req.body.productId).then(product => {
        Orderline.findOne({
          where: { productId: product.id, cartorderId: cartorder.id },
        }).then(orderline => {
          if (!orderline) {
            Orderline.create({
               price: product.price,
             quantity: 1,
              productId: product.id,
               cartorderId: cartorder.id,
            }).then(orderline =>
              res.send(orderline));
          } else {
            orderline.update({ quantity: Number(orderline.quantity) + 1 });
          }
        });
      });
    }
  });
});




// 39 - RETORNA TODOS LOS ITEMS DEL CARRITO

server.get('/:id/cart', (req, res) => {


  Cartorder.findOne({
    where: { userId: req.params.id },
    include: [{
      model: Product,
      as: 'Prods',
      through: Orderline
      // required: false,
      // where: {
      //   attributes: ['cartorderId']
      //   // where: { completed: true }
    }]
  }).then(cartorder => {
    res.send({ cartorder })
  });
});


// TRAE TODAS LAS ORDERLINES DE UN USUARIO

server.get('/:id/orders', (req, res) => {
  Orderline.findAll({
    where: { cartorderId: req.params.id },
  }).then(orderline => {
    res.send({ orderline })
  });
});

// 40 - VACIA EL CARRITO

server.delete('/:id/cart', (req, res) => {
  const userId = req.params.id;
  Orderline.destroy({
    where: { cartorderId: userId }
  })
    .then(resolve => {
      res.send('Se vacio el carrito')
    });
});



// 41 - EDITA LAS CANTIDADES DEL CARRITO

server.put('/:id/cart', (req, res) => {
  const userId = req.params.id;
  const newData = req.body;
  Orderline.findOne({ where: { cartorderId: userId } })
    .then(result => {
      result.update(newData);
      res.send(200, result)
    })
    .catch(err => {
      res.send(err)
    })

});



module.exports = server;


