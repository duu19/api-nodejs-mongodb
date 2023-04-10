const router = require("express").Router();
const authMiddleware = require("../middleware/auth-middle");
const carrinhoController = require("../controller/carrinho-controller");

// por ID - GET
router.get("/find/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
// todas categorias - GET
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhosController);
// criar carrinho - POST
router.post("/create", authMiddleware, carrinhoController.createCarrinhoController);
// atualizar carrinho - PUT
router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController);
// deletar carrinho - DEL
router.delete("/remove/:id", authMiddleware, carrinhoController.removeCarrinhoController);

module.exports = router;