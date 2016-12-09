var fs = require('fs'),
	path = require('path');

var staticExtns = ['.html', '.css', '.js', '.ico', '.png', '.xml', '.json'];
function isStatic(resourceName){
	return staticExtns.indexOf(path.extname(resourceName)) !== -1
}

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
	
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
	}
}