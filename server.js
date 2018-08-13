var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    // when request comes in you generate a response with a string and what url it came through
    response.end('Yay! It works! Path: ' + request.url);

}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

    server1.listen(PORT1, function() {
        console.log('You are great!');
    });




server2.listen(PORT2, function() {
    console.log('You are awful!');
})
