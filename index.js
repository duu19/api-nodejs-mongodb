const express = require("express");
require("dotenv").config(); // dotenv antes de qlqr arquivo (security - substituir)
const connectToDatabase = require("./src/database/database"); // conexão mongodb
const usuario = require("./src/router/user-router"); // rotas do usuário
const auth = require("./src/router/auth-router");
const produto = require("./src/router/produto-router"); // rotas dos produtos
const categoria = require("./src/router/categoria-router"); // rotas das categorias

const app = express();

const port = 3021;

app.use(express.json());

connectToDatabase(); // conectando ao banco

// rotas
app.use("/usuario", usuario); 
app.use("/auth", auth);
app.use("/produto", produto);
app.use("/categoria", categoria)

app.get("/", (req, res) => {
    res.send({
        message: "Seja bem vindo ao nosso e-commerce!"
    });
});

app.listen(port, () => {
    console.log(`server on: http://localhost:${port}`);
});