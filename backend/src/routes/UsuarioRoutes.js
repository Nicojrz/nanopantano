const express = require("express");
const AuthController = require("../controller/UsuarioController");
const authService = require("../service/UsuarioService");

const router = express.Router();
const authController = new AuthController(authService);

router.get("/Login", authController.login);

module.exports = router;
