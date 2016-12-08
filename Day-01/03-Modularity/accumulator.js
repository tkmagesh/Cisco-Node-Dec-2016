var result = 0;
console.log('loading accumlator.js');
module.exports = {
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