var http = require('http'),
	fs = require('fs'),
	path = require('path');

var staticExtns = ['.html', '.css', '.js', '.ico', '.png', '.xml', '.json'];
function isStatic(resourceName){
	return staticExtns.indexOf(path.extname(resourceName)) !== -1
}
var server = http.createServer(function(req, res){
	console.log(req.url);
	var resourceName = req.url === '/' ? '/index.html' : req.url;
	if (isStatic(resourceName)){
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
	} else if (req.url === '/calculator'){
		res.write('calculator requests - coming soon!!');
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);

//res.statusCode = 404