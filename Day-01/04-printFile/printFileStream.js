var fs = require('fs');

var stream = fs.createReadStream('sample.txt', {encoding : 'utf8'});

/* Readable Stream - events (open, data, end, close, error) */

var readCount = 0;
stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);
});

stream.on('end', function(){
	console.log('--------- Thats all folks! with [', readCount,  '] readcounts -------');
});

stream.on('error', function(err){
	console.log('something went wrong');
	console.log(err);
});

