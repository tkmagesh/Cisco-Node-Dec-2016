module.exports = function(){
	var result = 0;
	console.log('loading accumlator.js');
	return {
		add : function(n){
			result += n;
		},
		subtract : function(n){
			result -= n;
		},
		multiply : function(n){
			result *= n;
		},
		divide : function(n){
			result /= n;
		},
		getResult : function(){
			return result;
		}
	}
}