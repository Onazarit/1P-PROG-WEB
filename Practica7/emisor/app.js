// var Emitter = require('./emitter');
var config = require('./config')
// ^ Al usar config podemos usar los valores definidos en este para
// referenciar a los valores previos que usabamos para guardar,
// Por eso al llamarlos se ejecutan correctamente

var Emitter = require('events'); 
// ^ El codigo se ejecuta de igual manera que con el emitter creado por nostoros
// Aunque este muestre mas cosas y algunos nombres esten declarados diferentes,
// Las funciones que agregamos siguen funcionando de igual manera

var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

// console.log('Hello!');
emtr.emit('greet');
// Como los 2 logs estan asignados a greet, al usar el emit se muestram
// los logs en orden, sin antes primero mostrar el log anterior del emit

emtr.on(config.events.JUMP, () => {
    console.log('Someone jumped!');
});

console.log(emtr);
emtr.emit('jump');
// Muestra los eventos que contiene Emitter, en este caso
// muestra greet y jump con sus funciones anonimas correspondientes
// luego en el emit se llama a jump que muestra el log asignado en el
// emtr.on que se hizo en la linea 18-20