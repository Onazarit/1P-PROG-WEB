var express = require('express'); // Importamos la dependencia
var app = express(); // Declaramos una App de Express
var port = process.env.PORT || 3000; // Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});
app.get('/', function (req, res) { // Primera ruta (está al nivel de la raíz /), Hello World!
    res.render('index');
});
app.get('/api', function (req, res) { // Segunda ruta /api, regresa un objeto JSON
    res.json({ firstname: 'John', lastname: 'Doe' });
});
app.get('/person/:id', function (req, res) { // Tercera ruta, recibe un parametro
    res.render('person', { ID: req.params.id});
});

app.get('/numbers/:id', function (req, res) { // Cuarta Ruta, PRACTICA_13
    res.render('numbers', { number: req.params.id});
});

app.listen(port); // Levantar el server y ponerlo a la escucha