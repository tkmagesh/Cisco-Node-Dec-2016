var http = require('http');
	

var dataParser = require('./dataParser'),
	logger = require('./logger.js'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	resourceNotFoundHandler = require('./resourceNotFoundHandler'),
	app = require('./app');

app.use(dataParser);
app.use(logger);
app.use(serveStatic);
app.use(calculatorHandler);
app.use(resourceNotFoundHandler);

http.createServer(app).listen(8080);
