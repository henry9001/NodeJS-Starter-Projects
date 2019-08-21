var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(error, list) {
    if (error) {
        throw error;
    }   
    var extension = "." + process.argv[3];

    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === extension) {
            console.log(list[i]);
        }
    } 
});
