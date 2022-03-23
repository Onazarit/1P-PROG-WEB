var express = require('express'); // Importamos la dependencia
var app = express(); // Declaramos una App de Express

var port = process.env.PORT || 3000; // Setteamos el puerto para que escuche el servidor

// Primera ruta (está al nivel de la raíz /), Hello World!
app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Doe' })
});
//tecera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
});
app.listen(port); // Levantar el server y ponerlo a la escucha