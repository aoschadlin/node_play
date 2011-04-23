var http = require('http')
  , url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request received for ' + pathname);

    route(handle, pathname);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started...');
}

exports.start = start;
