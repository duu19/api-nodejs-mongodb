// rotas e endpoints
const express = require("express");
const router = express.Router();
// passar controller nas rotas
const usuarioController = require("../controller/user-controller");

// validar token no meio da requisição
const authMiddleware = require("../middleware/auth-middle");
const { validarUser, validarIdParams, validar_IdBody, validarEnderecos } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");


// buscar usuário por ID específico
router.get("/findById/:id", authMiddleware, validarIdParams, usuarioController.findUserByIdController);

// buscar todos usuários
router.get("/findAllUsers", authMiddleware, paginacao, usuarioController.findAllUsersController);

// criar usuário
router.post("/create", validarUser, usuarioController.createUserController);

// conferir endereço
router.post("/addAddress/:id", authMiddleware, validarIdParams, validarEnderecos, usuarioController.addUserAddressController);

// buscar produto favorito
router.post("/addFavProduct/:id", authMiddleware, validarIdParams, validar_IdBody,usuarioController.addUserFavProductController);

// atualizar usuário
router.put("/update/:id", authMiddleware, validarIdParams, validarUser, usuarioController.updateUserController);

// deletar usuário
router.delete("/remove/:id", authMiddleware, validarIdParams, usuarioController.removeUserController);

// deletar endereço
router.delete("/removeAddress", authMiddleware, usuarioController.removeUserAddressController);

// deletar produto favorito
router.delete("/removeFavProduct/:id", validarIdParams, authMiddleware, usuarioController.removeUserFavProductController);

module.exports = router;