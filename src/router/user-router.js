// rotas e endpoints
const express = require("express");
const router = express.Router();
// passar controller nas rotas
const usuarioController = require("../controller/user-controller");

// validar token no meio da requisição
const authMiddleware = require("../middleware/auth-middle");
const { validarUser } = require("../middleware/validar-middleware");

// buscar usuário por ID específico
router.get("/findById/:id", authMiddleware, validarUser, usuarioController.findUserByIdController);

// buscar todos usuários
router.get("/findAllUsers", authMiddleware, usuarioController.findAllUsersController);

// criar usuário
router.post("/create", validarUser, usuarioController.createUserController);

// conferir endereço
router.post("/addAddress/:id", authMiddleware, usuarioController.addUserAddressController);

// buscar produto favorito
router.post("/addFavProduct/:id", authMiddleware, usuarioController.addUserFavProductController);

// atualizar usuário
router.put("/update/:id", authMiddleware, validarUser, usuarioController.updateUserController);

// deletar usuário
router.delete("/remove/:id", authMiddleware, usuarioController.removeUserController);

// deletar endereço
router.delete("/removeAddress", authMiddleware, usuarioController.removeUserAddressController);

// deletar produto favorito
router.delete("/removeFavProduct/:id", authMiddleware, usuarioController.removeUserFavProductController);

module.exports = router;