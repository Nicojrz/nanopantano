class QuestionController {
  constructor(questionService) {
    this.questionService = questionService;
    this.getQuestionById = this.getQuestionById.bind(this);
    this.getAllQuestions = this.getAllQuestions.bind(this);
  }

  async getQuestionById(req, res, next) {
    try {
      const questions = await this.questionService.getQuestionById(req.query.id);
      return res.json(questions);
    } catch (error) {
      next(error);
    }
  }

  async getAllQuestions(req, res, next) {
    try {
      const questions = await this.questionService.getAllQuestions();
      return res.json(questions);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = QuestionController;
