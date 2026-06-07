const util = require("util");

class UserModel {
  constructor(dbConfig) {
    this.dbConfig = dbConfig;
  }

  async findByCredentials(username, password) {
    const connection = this.dbConfig.createConnection();
    const query = util.promisify(connection.query).bind(connection);

    try {
      const rows = await query("SELECT * FROM login WHERE USERNAME = ? AND PASSWORD = ?", [username, password]);
      return rows[0] || null;
    } finally {
      connection.end();
    }
  }
}

module.exports = UserModel;
