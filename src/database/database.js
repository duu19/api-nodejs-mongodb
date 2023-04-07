// conectar mongodb
const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("mongodb://localhost:27017/e-commerce", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB conectado.")
    }).catch((err) => {
        return console.log(`erro ao conectar com o banco: ${err}`);
    })
}

module.exports = connectToDatabase;