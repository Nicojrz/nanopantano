class UsuarioController {
  constructor(authService) {
    this.authService = authService;
    this.login = this.login.bind(this);
  }

  async login(req, res, next) {
    try {
      const usuario_name = req.query.usuario_name || req.query.user;
      const usuario_password = req.query.usuario_password || req.query.password;
      const result = await this.authService.login(usuario_name, usuario_password);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsuarioController;
