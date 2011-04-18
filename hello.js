var http = require('http');

http.createServer(defaultResponse).listen(8124, "127.0.0.1");

function defaultResponse(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world\n');
}

console.log("Server running at http://127.0.0.1:8124/");
