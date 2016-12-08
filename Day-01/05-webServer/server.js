var http = require('http');

var server = http.createServer(function(req, res){
	console.log(req.url);
	res.write('<h1>Welcome to node</h1>');
	res.end();
});

server.listen(8080);