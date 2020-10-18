const jwt = require('jwt-simple');
const moment = require('moment');


const checkToken = (req, res, next) => {

    const userToken = req.cookies.cookieHash

    let payload = {};
    try {
        payload = jwt.decode(userToken, 'frase_secreta');            //me decodifica el token con la frase secreta
        console.log('payload desde el middleware', payload)                           // y me trae en el payload el userId
    } catch (err) {
        return res.send({ error: 'El token es incorrecto' });
    }
    if (payload.expiredAt < moment().unix()) {
        return res.send({ error: 'El token ha expirado' });
    }
    req.usuarioId = payload.usuarioId;
    next();
}

module.exports = {
    checkToken: checkToken
}
