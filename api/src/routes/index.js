const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categoryRouter = require('./category');
const middlewares = require('./middlewares');
const userRouter = require('./users');
const cartRouter = require('./cart');
const orderlinesRouter = require('./orderlines');
const searchRouter = require('./search');
const reviewsRouter = require('./reviews');

const router = Router();

const multer = require('multer');
const path = require('path');
const { checkToken } = require('./middlewares');
const { token } = require('morgan');

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
//router.use('/products',middlewares.checkToken, productRouter);     CODIGO DE NAZA!!
router.use('/products', productRouter);

// PRUEBA DE CARGA DE IMAGEN CON MULTER
//router.use('/uploads', productRouter);

router.use('/categories', categoryRouter);
router.use('/users', userRouter);
router.use('/users', cartRouter);
router.use('/orders', orderlinesRouter);
router.use('/search', searchRouter);

router.use('/products', reviewsRouter);
//Así es cómo deberia quedar cuandoi tengamos el login funcionando.
//router.use('/products', reviewsRouter);



module.exports = router;
