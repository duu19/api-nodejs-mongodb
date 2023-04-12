const router = require("express").Router();
const authMiddleware = require("../middleware/auth-middle");
const carrinhoController = require("../controller/carrinho-controller");
const { validarCarrinhos, validarIdParams, validarProdutosCarrinhoPedido } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");


// por ID - GET
router.get("/findById/:id", authMiddleware, validarIdParams, carrinhoController.findCarrinhoByIdController);
// todas categorias - GET
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhosController);
// criar carrinho - POST
router.post("/create", authMiddleware, validarProdutosCarrinhoPedido, validarCarrinhos, carrinhoController.createCarrinhoController);
// atualizar carrinho - PUT
router.put("/update/:id", authMiddleware, validarIdParams, validarCarrinhos, carrinhoController.updateCarrinhoController);
// deletar carrinho - DEL
router.delete("/remove/:id", authMiddleware, validarIdParams, carrinhoController.removeCarrinhoController);

module.exports = router;