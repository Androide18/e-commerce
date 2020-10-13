const server = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../db.js');
const session = require('express-session');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
const { Cartorder } = require('../db.js');


server.post('/register', [
  check('firstname', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  check('email', 'el email debe ser valido').isEmail(),
  //check('role', 'debe logearse como guest, admin o logged').not().isEmpty()
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errores: errors.array() });
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const user = await User.create(req.body);
  // Cartorder.create({
  //   userId: user.dataValues.id
  //   // price: 0,
  //   // quantity: 0
  // })
  res.send(user);
});

server.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    console.log(user.password);
    if (iguales) {
      res.send({ succes: createToken(user) });
    } else {
      res.send({ error: 'Error en usuario y/o contraseña' });
    }
  } else {
    res.send({ error: 'Error en usuario y/o contraseña' });
  }


});



const createToken = (user) => {
  const payload = {
    usuarioId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5, 'minutes').unix()
  }
  return jwt.encode(payload, 'frase_secreta');

}


server.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch();
});





// server.post('/', (req, res) => {
//   const { firstname, lastname, phone, address, role, email, password } = req.body;
//   User.create({
//     firstname: firstname,
//     lastname: lastname,
//     //  phone: phone,
//     //  address: address,
//     // role: role,
//     email: email,
//     password: password,
//   }).then(created => {
    
//     Cartorder.create({
//       userId: created.dataValues.id
//     })
//     console.log('CREATED', created.dataValues.id);
//     res.send(created)
//     console.log('usuario cargado');
//   })
//     .catch(err => {
//       res.send(err)
//       console.log('hay error')
//     })
// });



server.put('/:id', (req, res) => {
  const usersId = req.params.id;
  const changed = req.body;

  User.findOne({ where: { id: usersId } })
    .then(updated => {
      updated.update(changed),
        res.send('user was modified');
    })
    .catch(error => {
      res.send(error)
    })
});

server.delete('/:id', (req, res) => {
  const usersId = req.params.id;
  User.destroy({ where: { id: usersId } })
    .then(deleted => {
      res.status(200).send('Se elimino el user con exito')
    })
    .catch(err => {
      res.send(err)
    })
})



module.exports = server;