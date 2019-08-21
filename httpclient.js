var http = require('http');

var url = process.argv[2]

http.get(url, function(response) {
    response.on('data', function(data) {
        var content = data.toString();
        console.log(content);
    }).on('error', function(error) {
        if (error) {
            console.log('Got Error' + error.message);
        }
    });
}).on('error', function(error) {
    console.log('Got Error' + error.message);
});

