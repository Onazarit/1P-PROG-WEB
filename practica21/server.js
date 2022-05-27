const mongoose = require('mongoose');
const express = require('express');
const personsRoutes = require('./routes/persons');

mongoose.Promise = global.Promise;
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personsRoutes);

mongoose.connect(`mongodb+srv://onazarit:contraseña@cluster0.ujfzc.mongodb.net/Test?retryWrites=true`,
    {
        // userNewUrlParser: true,
        // useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Conexion exitosa");
});

app.listen(3000);