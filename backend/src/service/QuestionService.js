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

    const question = await this.questionModel.findByPk(parsedId);
    return question ? [question.columnajson] : [];
  }

  async getAllQuestions() {
    const questions = await this.questionModel.findAll();
    return questions.map((question) => question.columnajson);
  }
}

module.exports = new QuestionService(QuestionModel);
