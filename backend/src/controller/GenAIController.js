class GenAIController {
  constructor(genAIService) {
    this.genAIService = genAIService;
    this.generateImage = this.generateImage.bind(this);
  }

  async generateImage(req, res, next) {
    try {
      const { sesion_id, usuario_id, prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "prompt es requerido" });
      }

      const result = await this.genAIService.generateImage({ prompt, sesion_id, usuario_id });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GenAIController;
