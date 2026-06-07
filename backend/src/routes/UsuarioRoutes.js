const express = require("express");
const QuestionController = require("../controller/QuestionController");
const AuthController = require("../controller/UsuarioController");
const questionService = require("../service/QuestionService");
const authService = require("../service/UsuarioService");

const router = express.Router();
const questionController = new QuestionController(questionService);
const authController = new AuthController(authService);

router.get("/Pregunta", questionController.getQuestionById);
router.get("/Preguntas", questionController.getAllQuestions);
router.get("/Login", authController.login);

module.exports = router;
