// rotas e endpoints
const express = requier("express");
const router = express.Router();
const usuarioController = require("../controller/user-controller");

// buscar usuário por ID específico
router.get("/findByID:id");
// buscar todos usuários
router.get("/findAll");
// criar usuário
router.post("/create");
// conferir endereço
router.post("/addAddress/:id");
// buscar produto favorito
router.post("/addFavProduct/:id");
// atualizar usuário
router.put("/update/:id");
// deletar usuário
router.delete("/remove/:id");
// deletar endereço
router.delete("/removeAddress")
// deletar produto favorito
router.delete("/removeFavProduct");

module.exports = router;