const router = require("express").Router();
const produtoController = require("../controller/produto-controller");
const authMiddleware = require("../middleware/auth-middle");
const { validarProdutos, validarIdParams, validar_IdBody } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");

// get
router.get("/findById/:id", authMiddleware, validarIdParams, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductsController);
// post 
router.post("/create", authMiddleware, validarProdutos, produtoController.createProductController);
// adicionar categoria
router.post("/addCategoria/:id", authMiddleware, validarIdParams, validar_IdBody,produtoController.addCategoriaProductController);
// put
router.put("/update/:id", authMiddleware, validarIdParams, validarProdutos, produtoController.updateProductController);
// delete
router.delete("/remove/:id", authMiddleware, validarIdParams, produtoController.deleteProductController);
// deletar categoria / corrigir
router.delete("/removeCategoria/:id", validarIdParams, authMiddleware, produtoController.removeCategoriaProductController);

module.exports = router;
