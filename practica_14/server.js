const express = require('express'); // Importamos la dependencia
let app = express(); // Declaramos una App de Express
let port = process.env.PORT || 3000; // Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) { // Primera ruta (está al nivel de la raíz /), Hello World!
    res.send(`<!DOCTYPE html> <html lang="en"><head><link href=assets/style.css type=text/css rel=stylesheet />
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    </body></html>`);
});

app.get('/person/:id',(req, res)=>{ // Tercera ruta, recibe un parametro
    res.render('person', {ID: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.listen(port); // Levantar el server y ponerlo a la escuchas