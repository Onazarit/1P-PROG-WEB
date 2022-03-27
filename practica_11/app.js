var express = require('express'); // Importamos la dependencia
var app = express(); // Declaramos una App de Express
var port = process.env.PORT || 3000; // Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});
app.get('/', function (req, res) { // Primera ruta (está al nivel de la raíz /), Hello World!
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello world!</h1></body></html>`);
});
app.get('/api', function (req, res) { // Segunda ruta /api, regresa un objeto JSON
    res.json({ firstname: 'John', lastname: 'Doe' });
});
app.get('/person/:id', function (req, res) { // Tercera ruta, recibe un parametro
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port); // Levantar el server y ponerlo a la escucha