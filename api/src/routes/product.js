const server = require('express').Router();
const { Product } = require('../db.js');

const multer = require('multer');
const path = require('path');
 var upload = multer({ dest: 'uploads/' })


	
	// POST IMAGE CON MULTER
	 server.post('/', upload.single('image'), (req, res) => {
		res.send('HOLA')
		console.log(req.file, req.body);
	});






module.exports = server;

