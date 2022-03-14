// var Emitter = require('./emitter');
var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

// console.log('Hello!');
// emtr.emit('greet');
// Como los 2 logs estan asignados a greet, al usar el emit se muestram
// los logs en orden, sin antes primero mostrar el log anterior del emit

emtr.on('jump', () => {
    console.log('Someone jumped!');
});

console.log(emtr);
emtr.emit('jump');
// Muestra los eventos que contiene Emitter, en este caso
// muestra greet y jump con sus funciones anonimas correspondientes
// luego en el emit se llama a jump que muestra el log asignado en el
// emtr.on que se hizo en la linea 18-20