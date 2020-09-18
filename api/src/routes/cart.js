const server = require('express').Router();

const { urlencoded } = require('body-parser');
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

server.post("/:id/cart", (req, res) => {
  const { price, quantity, productId } = req.body;
  const { id } = req.params; //id del usuario

  !productId && res.send("hace falta producto");

  Cartorder.create({
    userId: parseInt(id),
    price: price,  
    quantity: quantity,
  })
    .then((cartorder) => {
      cartorder.addProduct(productId).then(
        () => res.send(cartorder),
        (err) =>
          res.send("el producto no existe")
      );
    })
    .catch((err) => {
      res.send("el usuario no existe")

    });
});


// 39 - RETORNA TODOS LOS ITEMS DEL CARRITO

server.get('/:id/cart', (req, res) => {
  const { id } = req.params;
  Cartorder.findAll({
    include: {
      model: Product,
    },
    where: {
      userId: parseInt(id),
      state: "carrito",
    },
  }) //busca todos los items
    .then((items) => {
      res.send(items);
    })
    .catch((err) => res.send(err));
});




// TRAE TODAS LAS ORDERLINES DE UN USUARIO

server.get('/:id/orders', (req, res) => {
  const { id } = req.params;
  Cartorder.findAll({
    include: {
      model: Product,
    },
    where: { userId: parseInt(id) },
  }) //busca todos los items
    .then((items) => {
      res.send(items);
    })
    .catch((err) => res.send(err));
});

// 40 - VACIA EL CARRITO // (para el usuario borra /// para el ADMIN cancela la orden)

server.delete('/:id/cart', (req, res) => {
  const { id } = req.params;

  Cartorder.update(
    {
      state: "cancelada",
    },
    {
      where: { userId: parseInt(id), state: "carrito" },
    }
  )
    .then((up) =>
      res.send(
        up[0] ? "se cancelo la compra" : "no se encontraron los productos"
      )
    )
    .catch((err) => res.send(err));
});


// 41 - EDITA LAS CANTIDADES DEL CARRITO

server.put('/:id/cart', (req, res) => {
  const { id } = req.params;
  const { price, quantity, cartorderId } = req.body;

  (!cartorderId || typeof cartorderId === "string") &&
    res.send("el order id es invalido");

  Cartorder.update(
    {
      quantity: quantity,
      price: price
    },
    {
      where: {
        id: cartorderId,
        userId: parseInt(id),
      },
    }
  )
    .then((up) => res.send(up[0] ? "se edito la cantidad" : "no se edito nada"))
    .catch((err) => res.send(err));
});

module.exports = server;


