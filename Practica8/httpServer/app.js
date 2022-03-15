var http = require('http');

http.createServer((req, res) => { // < 4.- Cambiada por notación de flecha
   
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n')

}).listen(1337, '127.0.0.1')

// 3.- Ve a la línea de comandos y ejecuta : node app.js, ¿qué sucede?
// No aparece nada en la terminal

// 7.- ¿Qué es lo que sucede?
// Aparece el hello world escrito en el codigo dentro de la pagina

// 9.- ¿qué es lo que hay ahí?
// Se muestran varios datos, entre ellos la dirección que declaramos
// "127.0.0.1:1337" ademas del tipo de contenido tambien mencionado