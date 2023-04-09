// rotas categorias
const router = require("express").Router();
const authMiddleware = require("../middleware/auth-middle");
const categoriaController = require("../controller/categoria-controller");

// por ID get
router.get("/find/:id", authMiddleware, categoriaController.findCategoriaByIdController);
// todas categorias
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);
// criar post
router.post("/create", authMiddleware, categoriaController.createCategoriaController);
// atualizar put
router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController);
// deletar delete
router.delete("/remove/:id", authMiddleware, categoriaController.deleteCategoriaController);

module.exports = router;