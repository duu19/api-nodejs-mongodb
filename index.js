const express = require("express");
require("dotenv").config(); // dotenv antes de qlqr arquivo (security - substituir)
const connectToDatabase = require("./src/database/database"); // conexão mongodb
const usuario = require("./src/router/user-router"); // rotas do usuário
const auth = require("./src/router/router-auth");

const app = express();

const port = 3021;

app.use(express.json());

connectToDatabase(); // conectando ao banco

// rotas
app.use("/usuario", usuario); 
app.use("/auth", auth);

app.get("/", (req, res) => {
    res.send({
        message: "Seja bem vindo ao nosso e-commerce!"
    });
});

app.listen(port, () => {
    console.log(`server on: http://localhost:${port}`);
});