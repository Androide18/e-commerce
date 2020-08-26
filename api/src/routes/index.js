const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');


const router = Router();

const multer = require('multer');
const path = require('path');

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/products/new', productRouter);
router.use('/products/:id', productRouter);
router.use('/upload', productRouter);

// // MIDDLEWARE
// router.use(multer({
//     dest: path.join(__dirname, 'public/uploads')
// }).single('images'));

module.exports = router;
