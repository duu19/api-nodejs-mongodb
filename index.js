const express = require("express");
const connectToDatabase = require("./src/database/database"); // conexão mongodb
const usuario = require("./src/router/user-router"); // rotas do usuário

const app = express();

const port = 3025;

app.use(express.json());

connectToDatabase(); // conectando ao banco

app.use("/usuario", usuario); // puxando as rotas

app.get("/", (req, res) => {
    res.send({
        message: "Seja bem vindo ao nosso e-commerce!"
    });
});

app.listen(port, () => {
    console.log(`server on: http://localhost:${port}`);
});