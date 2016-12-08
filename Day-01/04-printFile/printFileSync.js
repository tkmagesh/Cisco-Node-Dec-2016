var fs = require('fs');

try {
	var fileContents = fs.readFileSync('sample1.txt', {encoding : 'utf8'});
	console.log(fileContents);
} catch (e){
	console.log('something went wrong')
	console.log(e);
}

