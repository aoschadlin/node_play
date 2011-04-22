var Andre = function() {};

Andre.prototype.hello = function() {
    console.log('Hello');
}

Andre.prototype.goodbye = function() {
    console.log('Goodbye');
}

var myAndre = new Andre();

myAndre.hello();

myAndre.goodbye();
