const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 2021;

var ctrl = require('./controller.js');

app.listen(port, () => {
 	let log = 'Serverku sedang berjalan pada '
	console.log(log+ 'http://localhost:'+port)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./router.js'); 
routes(app)