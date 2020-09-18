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
  const { price, quantity, productId } = req.body; //Me traigo los valores del body
  const { id } = req.params; //me traigo el id del usuario

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












//   // busca si existe una orden con el userid y con state 'Uncreated'
//   Cartorder.findOne({
//     where: { state: 'carrito', userId: req.params.id },
//   }).then(cartorder => {
//     console.log(cartorder);
//     //si no se cumple la condicion del where crea una nueva orden
//     if (!cartorder) {
//       Cartorder.create({
//         state: 'carrito',
//         price: 0,
//         quantity: 0,
//         userId: req.params.id,
//       }).then(newOrder => {
//         //le agrega una producto a la orden nueva
//         Product.findByPk(req.body.productId).then(product => {
//           Orderline.create({
//             price: product.price,
//             quantity: 1,
//             productId: product.id,
//             cartorderId: newOrder.id,
//           }).then(orderline => res.send(orderline));
//         });
//       });
//     }
//     else {
//       //si existe una orden uncreated y con el id del user
//       // le agrega al order line de esa orden el id el producto
//       Product.findByPk(req.body.productId).then(product => {
//         Orderline.findOne({
//           where: { productId: product.id, cartorderId: cartorder.id },
//         }).then(orderline => {
//           if (!orderline) {
//             Orderline.create({
//               price: product.price,
//               quantity: 1,
//               productId: product.id,
//               cartorderId: cartorder.id,
//             }).then(orderline =>
//               res.send(orderline));
//           } else {
//             orderline.update({ quantity: Number(orderline.quantity) + 1 });
//           }
//         });
//       });
//     }
//   });
// });



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


  
//   const userId = req.params.id
//   Cartorder.findOne({
//     where: { userId: userId },
//     include: [{
//       model: Product,
//       through: Orderline
//       // required: false,
//       // where: {
//       //   attributes: ['cartorderId']
//       //   // where: { completed: true }
//     }]
//   }).then(cartorder => {
//     res.send({ cartorder })
//   });
// });


// TRAE TODAS LAS ORDERLINES DE UN USUARIO        ---- VER

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

// 40 - VACIA EL CARRITO

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





  //   const userId = req.params.id;
//   Orderline.destroy({
//     where: { cartorderId: userId }
//   })
//     .then(resolve => {
//       res.send('Se vacio el carrito')
//     });
// });



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




  //   const userId = req.params.id;
//   const newData = req.body;
//   Orderline.findOne({ where: { cartorderId: userId } })
//     .then(result => {
//       result.update(newData);
//       res.send(200, result)
//     })
//     .catch(err => {
//       res.send(err)
//     })

// });



module.exports = server;


