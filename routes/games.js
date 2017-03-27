const { Router } = require('express');
const path = require('path');

const gameRouter = Router();

gameRouter.get('/boardgames', (req, res, next) => {
	console.log('fetching board games')
	res.sendFile(path.join(__dirname, '../public', 'boardgames.html'))
})

gameRouter.get('/videogames', (req, res, next) => {
	console.log('fetching video games');
	res.send('<h3>Search for Games</h3><form method="POST"><input type="text"><button type="submit">push me</button></form>');
})

gameRouter.post('/videogames', (req, res, next) => {
	console.log('submitting form post request');
	res.send('All I got!')
})

module.exports = gameRouter;
