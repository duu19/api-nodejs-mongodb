// rotas e endpoints
const express = require("express");
const router = express.Router();
// passar controller nas rotas
const usuarioController = require("../controller/user-controller");

// buscar usuário por ID específico
router.get("/findByID:id", usuarioController.findUserByIdController);

// buscar todos usuários
router.get("/findAll", usuarioController.findAllUsersController);

// criar usuário
router.post("/create", usuarioController.createUserController);

// conferir endereço
router.post("/addAddress/:id", usuarioController.addUserAddressController);

// buscar produto favorito
router.post("/addFavProduct/:id", usuarioController.addUserFavProduct);

// atualizar usuário
router.put("/update/:id", usuarioController.updateUserController);

// deletar usuário
router.delete("/remove/:id", usuarioController.removeUserController);

// deletar endereço
router.delete("/removeAddress", usuarioController.removeUserAddressController);

// deletar produto favorito
router.delete("/removeFavProduct", usuarioController.removeUserFavProduct);

module.exports = router;