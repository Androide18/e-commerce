const server = require('express').Router();
const { Product, Category } = require('../db.js');

const multer = require('multer');
const path = require('path');
var upload = multer({ dest: 'uploads/' })

// RUTAS A CREAR



// // POST IMAGE CON MULTER
//  server.post('/', upload.single('image'), (req, res) => {
// 	res.send('HOLA')
// 	console.log(req.file, req.body);
// });

// S14 and S21 - CREAR RUTA A CATALOGO / HOME PAGE      ok
// S15 and S24 - CREAR RUTA PARA VER PRODUCTO POR ID    ok
// S22 - CREAR RUTA QUE DEVUELTA PROD. POR CAT.         ok
// S23 - CREAR RUTA QUE BUSQUE PROD. POR KEYWORD        ok --
// S25 - CREAR RUTA PARA CREAR PRODUCTO                 ok
// S26 - CREAR UNA RUTA PARA MODIFICAR UN PRODUCTO      ok --
// S27 - CREAR UNA RUTA PARA ELIMINAR UN PRODUCTO       ok


// Comments: como funciona el query realmente???
// Como comprobamos el error al modificar un producto.            


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
        .then(producto => {
            if (producto) {
                res.send({ producto })
            } else {
                res.status(404).send({ message: 'Poducto not Found' })
            };
        })

})


// S22

server.get('/:id', (req, res) => {
    console.log(req.params.id);
    const catName = req.params.id;
    Product.findAll({ where: { category: catName } })
        .then(result => {
            res.send({ result })
        })
})


// S23

server.get('/', (req, res) => {
    const cuery = req.query.category;
    console.log(req.query)
    Product.findAll({ where: { category: cuery } })
        .then(result => {
            res.send(result)
        })
})


// S25

server.post('/', (req, res) => {
    const { name, description, price, stock, category, brand } = req.body;
    Product.create({
        name: name,
        description: description,
        brand: brand,
        price: price,
        stock: stock,
        category: category,
    }).then(result => {
        res.send('Se creo el producto')
    })
        .catch(err => {
            res.send(err)
        })
});

server.post('/:idproducto/category/:idcategoria', (req, res) => {
    const { idproducto, idcategoria } = req.params;
    const results = Promise.all([
        Product.findByPk(idproducto),
        Category.findByPk(idcategoria)
    ]).then(results => {
        return results[0].addCategory(results[1])
    }).then(productAssociated => {
        res.json(productAssociated)
    })
        .catch(err => {
            res.send(err)
        })
});


// S26

server.put('/:id', (req, res) => {
    const productId = req.params.id;
    const newData = req.body;
    Product.findOne({ where: { id: productId } })
        .then(result => {
            result.update(newData),
                res.send(200, result)
        })
        .catch(err => {
            res.send(err)
        })
});


// Modifica el producto con id: id. Retorna 400 si los campos enviados no son correctos.

// Retorna 200 si se modificó con exito, y retorna los datos del producto modificado.




//S27

server.delete('/:id', (req, res) => {
    const productId = req.params.id;
    Product.destroy({ where: { id: productId } })
        .then(resolve => {
            res.status(200).send('Se elimino el producto con exito')
        })
})


module.exports = server;