const router = require("express").Router();
const authController = require("../controller/auth-controller");
const { validarLogin } = require("../middleware/validar-middleware");

router.post("/login", validarLogin, authController.loginController);

module.exports = router;