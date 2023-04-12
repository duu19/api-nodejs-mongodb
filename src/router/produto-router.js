const router = require("express").Router();
const produtoController = require("../controller/produto-controller");
const authMiddleware = require("../middleware/auth-middle");
const { validarProdutos, validarId } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");

// get
router.get("/findById/:id", authMiddleware, validarId, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductsController);
// post 
router.post("/create", authMiddleware, validarProdutos, produtoController.createProductController);
// adicionar categoria
router.post("/addCategoria/:id", authMiddleware, validarId,produtoController.addCategoriaProductController);
// put
router.put("/update/:id", authMiddleware, validarId, validarProdutos, produtoController.updateProductController);
// delete
router.delete("/remove/:id", authMiddleware, validarId, produtoController.deleteProductController);
// deletar categoria / corrigir
router.delete("/removeCategoria/:id", validarId, authMiddleware, produtoController.removeCategoriaProductController);

module.exports = router;
