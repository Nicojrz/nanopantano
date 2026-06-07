const UserModel = require("../model/UserModel");

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async login(username, password) {
    if (!username || !password) {
      return { status: "no", tipo: "nodefinido" };
    }

    const user = await this.userModel.findOne({
      where: {
        USERNAME: username,
        PASSWORD: password,
      },
    });

    if (!user) {
      return { status: "no", tipo: "nodefinido" };
    }

    return { status: "yes", tipo: user.TIPOUSUARIO || "nodefinido" };
  }
}

module.exports = new UserService(UserModel);
