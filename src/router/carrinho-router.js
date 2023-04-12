const router = require("express").Router();
const authMiddleware = require("../middleware/auth-middle");
const carrinhoController = require("../controller/carrinho-controller");
const { validarCarrinhos, validarId } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");


// por ID - GET
router.get("/findById/:id", authMiddleware, validarId, carrinhoController.findCarrinhoByIdController);
// todas categorias - GET
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhosController);
// criar carrinho - POST
router.post("/create", authMiddleware, validarCarrinhos, carrinhoController.createCarrinhoController);
// atualizar carrinho - PUT
router.put("/update/:id", authMiddleware, validarId, validarCarrinhos, carrinhoController.updateCarrinhoController);
// deletar carrinho - DEL
router.delete("/remove/:id", authMiddleware, validarId, carrinhoController.removeCarrinhoController);

module.exports = router;