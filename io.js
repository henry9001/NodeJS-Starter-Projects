var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString();

var splt = buffer.split('\n');


console.log(splt.length - 1);
