const express = require("express");
require("dotenv").config(); // dotenv antes de qlqr arquivo (security - substituir)
const cors = require("cors"); // cors - chrome
const connectToDatabase = require("./src/database/database"); // conexão mongodb
const usuario = require("./src/router/user-router"); // rotas usuário
const auth = require("./src/router/auth-router");
const produto = require("./src/router/produto-router"); // rotas produtos
const categoria = require("./src/router/categoria-router"); // rotas categorias
const carrinho = require("./src/router/carrinho-router"); // rotas carrinho
const pedido = require("./src/router/pedido-router"); // rotas pedidos
const docs = require("./src/router/docs-router"); // rota swagger

const app = express();
const port = 3021;

app.use(express.json());
app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
));

connectToDatabase(); // conectando ao banco

// rotas (endpoints)
app.use("/usuario", usuario); 
app.use("/auth", auth);
app.use("/produto", produto);
app.use("/categoria", categoria);
app.use("/carrinho", carrinho);
app.use("/pedido", pedido);
app.use("/docs", docs);

app.get("/", (req, res) => {
    res.send({
        message: "Seja bem vindo ao nosso e-commerce!"
    });
});

app.listen(port, () => {
    console.log(`server on: http://localhost:${port}`);
});