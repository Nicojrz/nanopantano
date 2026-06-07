class UserModel {
  constructor(dbConfig) {
    this.dbConfig = dbConfig;
  }

  async findByCredentials(username, password) {
    const connection = this.dbConfig.createConnection();

    try {
      const [rows] = await connection.query("SELECT * FROM login WHERE USERNAME = ? AND PASS = ?", [username, password]);
      return rows[0] || null;
    } finally {
      await connection.end();
    }
  }
}

module.exports = UserModel;
