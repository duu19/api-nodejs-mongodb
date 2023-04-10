// rotas categorias
const router = require("express").Router();
const authMiddleware = require("../middleware/auth-middle");
const categoriaController = require("../controller/categoria-controller");

// por ID - GET
router.get("/find/:id", authMiddleware, categoriaController.findCategoriaByIdController);
// todas categorias - GET
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);
// criar - POST
router.post("/create", authMiddleware, categoriaController.createCategoriaController);
// atualizar - PUT
router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController);
// deletar - DEL
router.delete("/remove/:id", authMiddleware, categoriaController.deleteCategoriaController);

module.exports = router;