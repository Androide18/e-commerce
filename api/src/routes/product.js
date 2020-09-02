const server = require('express').Router();
const { Product } = require('../db.js');

const multer = require('multer');
const path = require('path');
var upload = multer({ dest: 'uploads/' })


const storage = multer.diskStorage({
	destination: path.join(__dirname, '/uploads'),
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
})


	// POST IMAGE CON MULTER
	//  server.post('/', upload.single('image'), (req, res) => {
		
	// 	res.send('HOLA')
	// 	console.log(req.file, req.body);
	// });
	const uploadImage = multer({
		storage,
		limits: {fileSize: 1000000}
	}).single('image');

	

	server.post('/', (req, res) => {
		uploadImage(req, res, (err) => {
			if (err) {
				err.message = 'Ta re pesada la imagen amigx!';
				return res.send(err);
			}
			console.log(req.file);
			res.send('La imagen se subio bien !');
		});
	});




module.exports = server;

