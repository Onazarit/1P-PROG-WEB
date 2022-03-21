// Oscar Alberto Nazarit Campos 4°H

// inicialmente nodemon pidio que fuera index.js enves de app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => { // route handler
  res.send('Hello World, this is the root route');
});

app.listen(3000);

app.get('/uno', (req, res) => { // route handler
    res.send('Hello World, from route one');
  });

app.get('/Prueba', (req, res) => { // route handler
    res.send('<h1>Hola</h1> <br> <h2>desde prueba</h2>');
  });