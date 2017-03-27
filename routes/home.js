
const { Router } = require('express');
const path = require('path');

const homeRouter = Router();








homeRouter.get('/', (req, res, next) => {
	console.log('HOME');
	console.log(`Ran at ${req.requestedTime}`)
	res.sendFile(path.join(__dirname, '../public', '/index.html'));
	next();
})


module.exports = homeRouter;
