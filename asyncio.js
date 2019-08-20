

var fs = require('fs');

fs.readFile(process.argv[2], function(error, data) {
    if (error) {
        throw error;
    } 
    var newLines = data.toString().split('\n');
    console.log(newLines.length - 1);
});
