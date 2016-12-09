var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticExtns = ['.html', '.css', '.js', '.ico', '.png', '.xml', '.json'];
function isStatic(resourceName){
	return staticExtns.indexOf(path.extname(resourceName)) !== -1
}
var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	var resourceName = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;
	console.log(req.method + '\t' + urlObj.pathname);
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
	} else if (resourceName === '/calculator' && req.method === 'GET'){
		var queryData = querystring.parse(urlObj.query);
		var op = queryData.op,
			n1 = parseInt(queryData.n1, 10),
			n2 = parseInt(queryData.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (resourceName === '/calculator' && req.method === 'POST'){
		var inputData = '';
		req.on('data', function(chunk){
			inputData += chunk;
		});
		req.on('end', function(){
			var bodyData = querystring.parse(inputData);
			var op = bodyData.op,
				n1 = parseInt(bodyData.n1, 10),
				n2 = parseInt(bodyData.n2, 10);
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		})
		
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);

//res.statusCode = 404