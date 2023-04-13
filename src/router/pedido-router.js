const router = require("express").Router();
const pedidoController = require("../controller/pedido-controller");
const authMiddleware = require("../middleware/auth-middle");
const { validarPedidos, validarIdParams, validarProdutosCarrinhoPedido } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");


// get
router.get("/findById/:id", authMiddleware, validarIdParams, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidosController);
// patch
router.patch("/updateStatus/:id", authMiddleware, validarIdParams, pedidoController.updateStatusPedidoController);
// post 
router.post("/create", authMiddleware, validarProdutosCarrinhoPedido, validarPedidos, pedidoController.createPedidoController);
// delete
router.delete("/remove/:id", authMiddleware, validarIdParams, pedidoController.removePedidoController);

module.exports = router;
