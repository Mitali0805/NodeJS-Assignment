var http = require('http');
var port = 3000;

var server = http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("Success,i'm listening from port:"+port)

    console.log('request was made:'+ request.url)
    
});

server.listen(port,'127.0.0.1');
console.log("Success,i'm listening from port:"+port)