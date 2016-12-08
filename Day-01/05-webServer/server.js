var http = require('http'),
	fs = require('fs'),
	path = require('path');

var server = http.createServer(function(req, res){
	var resourceName = req.url === '/' ? '/index.html' : req.url;
	var resourcePath = path.join(__dirname, resourceName);
	fs.stat(resourcePath, function(err, stats){
		if (err && err.code === 'ENOENT'){
			res.statusCode = 404;
			res.end();
			return;
		}
		if (err){
			res.statusCode = 500;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	});
	
});

server.listen(8080);

//res.statusCode = 404