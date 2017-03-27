const { Router } = require('express');
const path = require('path');

const instRouter = Router();


instRouter.get('/instruments', (req, res, next) => {
	console.log('Get me instruments');
	console.log(`Ran at ${req.requestedTime}`)
	res.sendFile(path.join(__dirname, '../public', '/instruments.html'));
})

// instRouter.post('/cars', (req, res, next) => {
// 	console.log('Posting a form for cars')
// 	res.send('All I got!')
// })

module.exports = instRouter;
