const server = require('express').Router();
const { Product } = require('../db.js');


// RUTAS A CREAR

// S14 and S21 - CREAR RUTA A CATALOGO / HOME PAGE
// S15 and S24 - CREAR RUTA PARA VER PRODUCTO POR ID
// S22 - CREAR RUTA QUE DEVUELTA PROD. POR CAT. 
// S23 - CREAR RUTA QUE BUSQUE PROD. POR KEYWORD
// S25 - CREAR RUTA PARA CREAR PRODUCTO
// S26 - CREAR UNA RUTA PARA MODIFICAR UN PRODUCTO 
// S27 - CREAR UNA RUTA PARA ELIMINAR UN PRODUCTO
// S16 - CREAR RUTA PARA CATEG. EN CATALOGO
// S17 - CREAR RUTA PARA ELIMINAR CATEGORIA
// S18 and S19 - CREAR RUTA PARA CREAR CATEGORIA
// S20 - CREAR RUTA PARA MODIFICAR CATEGORIA






// S14 and S21

server.get('/', (req, res) => {
    Product.findAll()
        .then(products => {
            res.send(products);
        })
        .catch();
});


// S15 and S24

server.get('/:id', (req, res) => {
    const productId = req.params.id;
    const producto = Product.findByPk(productId)
    .then( producto => {
        if (producto) {
            res.send({producto})
        } else {
            res.status(404).send({ message: 'Poducto not Found' })
        };
    })
    
})

// S22

server.get('/category/:id', (req, res) => {
    console.log(req.params.id);
    const catName = req.params.id;
    Product.findAll( {where: {category: catName}})
    .then( result => {
        res.send({result})
    })
})





// S25

server.post('/', (req, res) => {
    const { name, description, price, stock, category } = req.body;
    Product.create({
        name: name,
        description: description,
        price: price,
        stock: stock,
        category: category,
    }).then(result => {
        res.send('Se creo el producto')
    })
});



// // MODIFICAR
// server.put('/', (req, res, next) => {
//  res.send(' PUT /productos/:id')
// });

// // ELIMINAR
// server.delete('/', (req, res, next) => {
//  res.send(' DELETE /productos/:id')
// });





module.exports = server;