const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    // if(!req.headers['user-token']) {
    //     return res.send({ error: 'Necesitas incluir un token' });
    // }
    // if (req.cookies && req.cookies.cookieHash && req.cookies.cookieHash == hashpass) {
    //     res.send({ chk: true,  msj: "Cookies Correctas" });
    //   } else {
    //     res.send({ chk: false, error: true,  msj: "Cookies Invalidas" });
    //   }


    const userToken = (req.cookies && req.cookies.cookieHash) ? req.cookies.cookieHash : '';
    let payload = {};
   try {
       payload = jwt.decode(userToken, 'frase_secreta');
    } catch(err) {
        return res.send({ error: 'El token es incorrecto' });
    } 
    if(payload.expiredAt < moment().unix()){
        return res.send( { error: 'El token ha expirado' });
    }

    req.usuarioId = payload.usuarioId;

    next();
}




module.exports = {
    checkToken: checkToken
}
