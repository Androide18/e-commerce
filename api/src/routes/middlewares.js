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


    //  const {userToken} = (req.cookie && req.cookie.cookieHash) ? req.cookieToken.cookieHash : '';
    console.log('cookie', req.cookie)
    console.log('cookies: ', req.cookies)
    console.log('cookies.cookieHash: ', req.cookies.cookieHash)  // este SI TRAE EL COOKIE HASH ( HABIA Q INSTALAR EL COOKIE PARSER() )

    const userToken = req.cookies.cookieHash
    console.log('USERTOKEN:', userToken)

    let payload = {};
   try {
       payload = jwt.decode(userToken, 'frase_secreta');
        // console.log('payload', payload)
    } catch(err) {
        
        return res.send({ error: 'El token es incorrecto' });
        
    } 
    if(payload.expiredAt < moment().unix()){
        return res.send( { error: 'El token ha expirado' });
    }
    
    req.usuarioId = payload.usuarioId;

    next();
}

//  FUNCIONA DESDE EL INSOMNIA EL LOGINEO PERO NO DESDE EL FRONT.


// // MIDDLEWARE
// const rutasProtegidas = express.Router(); 
// rutasProtegidas.use((req, res, next) => {
//     const token = req.headers['access-token'];
 
//     if (token) {
//       jwt.verify(token, app.get('llave'), (err, decoded) => {      
//         if (err) {
//           return res.json({ mensaje: 'Token inválida' });    
//         } else {
//           req.decoded = decoded;    
//           next();
//         }
//       });
//     } else {
//       res.send({ 
//           mensaje: 'Token no proveída.' 
//       });
//     }
//  });




module.exports = {
    checkToken: checkToken
}
