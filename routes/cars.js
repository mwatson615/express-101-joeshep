const { Router } = require('express');
const path = require('path');

const carRouter = Router();

//below is nonworking method to verify identity
//for only this route
// animalRouter.use(function (req, res, next) {
// 	if (req.user === 'farmer') {
// 		next();
// 	} else {
// 		res.status(403.send('Forbidden'));
// 	}
// })

carRouter.get('/cars', (req, res, next) => {
	console.log('Get me cars');
	console.log(`Ran at ${req.requestedTime}`)
	res.sendFile(path.join(__dirname, '../public', '/cars.html'));
})
//^^when request is for '/monkeys', this is the file i want to get

// carRouter.get('/cars', (req, res, next) => {
// 	console.log('Get me cars!');
// 	res.send('<h3>No cars for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>')
// })
carRouter.post('/cars', (req, res, next) => {
	console.log('Posting a form for cars')
	res.send('All I got!')
})

module.exports = carRouter;
