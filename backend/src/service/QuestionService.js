const QuestionModel = require("../model/QuestionModel");

class QuestionService {
  constructor(questionModel) {
    this.questionModel = questionModel;
  }

  async getQuestionById(id) {
    if (!id) {
      throw new Error("El id de ejercicio es requerido.");
    }

    const parsedId = Number(id);
    if (Number.isNaN(parsedId)) {
      throw new Error("El id de ejercicio debe ser un número válido.");
    }

    return this.questionModel.findById(parsedId);
  }

  async getAllQuestions() {
    return this.questionModel.findAll();
  }
}

module.exports = new QuestionService(new QuestionModel(require("../config/DatabaseConfig")));
