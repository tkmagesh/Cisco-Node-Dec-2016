module.exports = function(req, res){
	console.log(req.method + '\t' + req.urlObj.pathname);
}