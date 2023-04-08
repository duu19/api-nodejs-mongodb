const router = require("express").Router();
const authController = require("../controller/controller-auth");

router.post("/login", authController.loginController);

module.exports = router;