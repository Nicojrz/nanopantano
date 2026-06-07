class UserController {
  constructor(authService) {
    this.authService = authService;
    this.login = this.login.bind(this);
  }

  async login(req, res, next) {
    try {
      const { user, password } = req.query;
      const result = await this.authService.login(user, password);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
