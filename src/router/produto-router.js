const router = require("express").Router();
const produtoController = require("../controller/produto-controller");
const authMiddleware = require("../middleware/auth-middle");

// get
router.get("/findById/:id", authMiddleware, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, produtoController.findAllProductsController);
// post 
router.post("/create", authMiddleware, produtoController.createProductController);
// adicionar categoria
router.post("/addCategoria/:id", authMiddleware, produtoController.addCategoriaProductController);
// put
router.put("/update/:id", authMiddleware, produtoController.updateProductController);
// delete
router.delete("/remove/:id", authMiddleware, produtoController.deleteProductController);
// deletar categoria / corrigir
router.delete("/removeCategoria/:id", authMiddleware, produtoController.removeCategoriaProductController);

module.exports = router;
