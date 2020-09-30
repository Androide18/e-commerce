const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categoryRouter = require('./category');
const userRouter = require('./users');
const cartRouter = require('./cart');
const orderlinesRouter = require('./orderlines');
const searchRouter = require('./search');
const reviewsRouter = require('./reviews');
const middlewares = require('./middlewares');

const router = Router();

const multer = require('multer');
const path = require('path');
const { checkToken } = require('./middlewares');
const { token } = require('morgan');

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);

// PRUEBA DE CARGA DE IMAGEN CON MULTER
//router.use('/uploads', productRouter);

router.use('/categories', categoryRouter);
router.use('/users', userRouter);
router.use('/users', cartRouter);
router.use('/orders', orderlinesRouter);
router.use('/search', searchRouter);
router.use('/products',middlewares.checkToken, reviewsRouter);


module.exports = router;
