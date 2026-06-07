const UsuarioModel = require("../model/UsuarioModel");

class UsuarioService {
  constructor(usuarioModel) {
    this.usuarioModel = usuarioModel;
  }

  async login(usuario_name, usuario_password) {
    if (!usuario_name || !usuario_password) {
      return { status: "no", tipo: "nodefinido" };
    }

    const user = await this.usuarioModel.findOne({
      where: {
        usuario_name: usuario_name,
        usuario_password: usuario_password,
      },
    });

    if (!user) {
      return { status: "no", tipo: "nodefinido" };
    }

    return { status: "yes", tipo: user.usuario_type || "nodefinido" };
  }
}

module.exports = new UsuarioService(UsuarioModel);
