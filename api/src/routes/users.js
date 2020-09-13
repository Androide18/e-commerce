const server = require('express').Router();
const { User } = require('../db.js');

server.get('/', (req, res) => {
    User.findAll()
        .then(users => {
            res.send(users);
        })
        .catch();
});


server.post('/', (req, res) => {
    const { firstname, lastname, phone, address, role, email, password } = req.body;
    User.create({
        firstname: firstname,
        lastname: lastname,
        // phone: phone,
        // address: address,
        // role: role,
        email: email,
        password: password,
    }).then(created => {
        res.send('User created')
        console.log('usuario cargado');
    })
    .catch(err => {
        res.send(err)
        console.log('hay un puto error')
    })
});



server.put('/:id', (req, res) => {
    const usersId = req.params.id;
    const changed = req.body;
    
    User.findOne({ where: { id: usersId}})
    .then(updated => {
        updated.update(changed),
        res.send('user was modified');
    })
    .catch( error => {
        res.send(error)
    })
});

server.delete('/:id', (req, res) => {
    const usersId = req.params.id;
    User.destroy({ where: { id: usersId}})
    .then(deleted => {
        res.status(200).send('Se elimino la categoria con exito')
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = server;