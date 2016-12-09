module.exports = function(req, res, next){
	console.log('[@resourceNotFoundHandler] serving 404');
	res.statusCode = 404;
	res.end();
	next();
}