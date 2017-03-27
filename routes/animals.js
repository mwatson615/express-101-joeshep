const { Router } = require('express');
const path = require('path');
const { newPage, submit } = require('../controllers/animalCtrl');

const animalRouter = Router();

//below is nonworking method to verify identity
//for only this route
// animalRouter.use(function (req, res, next) {
// 	if (req.user === 'farmer') {
// 		next();
// 	} else {
// 		res.status(403.send('Forbidden'));
// 	}
// })

animalRouter.get('/monkeys', (req, res, next) => {
	console.log('Get me monkeys');
	console.log(`Ran at ${req.requestedTime}`)
	res.sendFile(path.join(__dirname, '../public', '/monkeys.html'));
	newPage(req, res, null);
})
//^^when request is for '/monkeys', this is the file i want to get

animalRouter.get('/chickens', newPage);

animalRouter.post('/chickens', submit);

module.exports = animalRouter;
