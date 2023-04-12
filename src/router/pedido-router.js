const router = require("express").Router();
const pedidoController = require("../controller/pedido-controller");
const authMiddleware = require("../middleware/auth-middle");
const { validarPedidos, validarId } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");


// get
router.get("/findById/:id", authMiddleware, validarId, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidosController);
// patch
router.patch("/updateStatus/:id", authMiddleware, validarId,pedidoController.updateStatusPedidoController);
// post 
router.post("/create", authMiddleware, validarPedidos, pedidoController.createPedidoController);
// delete
router.delete("/remove/:id", authMiddleware, validarId, pedidoController.removePedidoController);

module.exports = router;
