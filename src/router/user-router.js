// rotas e endpoints
const express = require("express");
const router = express.Router();
// passar controller nas rotas
const usuarioController = require("../controller/user-controller");

// validar token no meio da requisição
const authMiddleware = require("../middleware/auth-middle");
const { validarUser, validarId } = require("../middleware/validar-middleware");

// buscar usuário por ID específico
router.get("/findById/:id", authMiddleware, validarId, usuarioController.findUserByIdController);

// buscar todos usuários
router.get("/findAllUsers", authMiddleware, usuarioController.findAllUsersController);

// criar usuário
router.post("/create", validarUser, usuarioController.createUserController);

// conferir endereço
router.post("/addAddress/:id", authMiddleware, validarId,usuarioController.addUserAddressController);

// buscar produto favorito
router.post("/addFavProduct/:id", authMiddleware, validarId,usuarioController.addUserFavProductController);

// atualizar usuário
router.put("/update/:id", authMiddleware, validarId, validarUser, usuarioController.updateUserController);

// deletar usuário
router.delete("/remove/:id", authMiddleware, validarId, usuarioController.removeUserController);

// deletar endereço
router.delete("/removeAddress", authMiddleware, usuarioController.removeUserAddressController);

// deletar produto favorito
router.delete("/removeFavProduct/:id", validarId, authMiddleware, usuarioController.removeUserFavProductController);

module.exports = router;