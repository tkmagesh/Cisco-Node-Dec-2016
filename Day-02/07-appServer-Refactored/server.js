var http = require('http');
	

var dataParser = require('./dataParser'),
	logger = require('./logger.js'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	resourceNotFoundHandler = require('./resourceNotFoundHandler');


var server = http.createServer(function(req, res){
	dataParser(req, res);
	logger(req, res);
	serveStatic(req, res);
	calculatorHandler(req, res);
	resourceNotFoundHandler(req, res);
});

server.listen(8080);

//res.statusCode = 404