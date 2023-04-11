const router = require("express").Router();
const pedidoController = require("../controller/pedido-controller");
const authMiddleware = require("../middleware/auth-middle");

// get
router.get("/findById/:id", authMiddleware, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoController.findAllPedidosController);
// patch
router.patch("/updateStatus/:id", authMiddleware, pedidoController.updateStatusPedidoController);
// post 
router.post("/create", authMiddleware, pedidoController.createPedidoController);
// delete
router.delete("/remove/:id", authMiddleware, pedidoController.removePedidoController);

module.exports = router;
