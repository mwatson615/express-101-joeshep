'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
//routes modules
const routes = require('./routes/');

//3 basic building blocks are
//routes/routing - if request for this route, do this
//middleware - is essentially a function
//^^ placed between a request and a response
//takes 3 args
const requestTime = (req, res, next) => {
	req.requestedTime = Date.now();
	next();
}


//} in MW, req, res, next are global objects to the module
//is basically a transform stream
//exclusive to express
//either ends response or passes it to the next
// app.use(express.static(__dirname + '/public'));
//			^^ is MW function that pipes in and tells our app where to look for our files - will default to looking for index.html file
app.use(express.static(__dirname + '/public'));

app.use(requestTime)
app.use(routes)

app.use((req, res) => {
	res.send("No time for love, Dr Jones")
})





const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
});
