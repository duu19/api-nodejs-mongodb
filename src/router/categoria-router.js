// rotas categorias
const router = require("express").Router();
const authMiddleware = require("../middleware/auth-middle");
const categoriaController = require("../controller/categoria-controller");
const { validarCategorias, validarId } = require("../middleware/validar-middleware");
const paginacao = require("../middleware/paginacao-middleware");


// por ID - GET
router.get("/findById/:id", authMiddleware, validarId, categoriaController.findCategoriaByIdController);
// todas categorias - GET
router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoriaController);
// criar - POST
router.post("/create", authMiddleware, validarCategorias, categoriaController.createCategoriaController);
// atualizar - PUT
router.put("/update/:id", authMiddleware, validarId, validarCategorias, categoriaController.updateCategoriaController);
// deletar - DEL
router.delete("/remove/:id", authMiddleware, validarId, categoriaController.deleteCategoriaController);

module.exports = router;