var http = require('http'),
	path = require('path');
	

var dataParser = require('./dataParser'),
	logger = require('./logger.js'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	resourceNotFoundHandler = require('./resourceNotFoundHandler'),
	app = require('./app');

app.use(dataParser);
app.use(logger);
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(calculatorHandler);
app.use(resourceNotFoundHandler);

http.createServer(app).listen(8080);
