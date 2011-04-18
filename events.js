var utils = require('util'),
    EventEmitter = require('events').EventEmitter;

var Server = function() {
  console.log('init');
};

utils.inherits(Server, EventEmitter);

var s = new Server();

s.on('andre', function(a) {
  console.log('andre');
});

s.emit('andre');

