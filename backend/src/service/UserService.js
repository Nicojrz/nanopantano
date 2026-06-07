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
        user_name: username,
        user_password: password,
      },
    });

    if (!user) {
      return { status: "no", tipo: "nodefinido" };
    }

    return { status: "yes", tipo: user.user_type || "nodefinido" };
  }
}

module.exports = new UserService(UserModel);
