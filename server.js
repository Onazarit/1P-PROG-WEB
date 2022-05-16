const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://onazarit:contraseña@cluster0.ujfzc.mongodb.net/?retryWrites=true&w=majority0', {});
const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error: "));
    db.once("open", () => {
        console.log("Conectado correctamente");
    });