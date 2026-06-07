const util = require("util");

class QuestionModel {
  constructor(dbConfig) {
    this.dbConfig = dbConfig;
  }

  async findById(id) {
    const connection = this.dbConfig.createConnection();
    const query = util.promisify(connection.query).bind(connection);

    try {
      const rows = await query("SELECT * FROM tablajson WHERE idEjercicio = ?", [id]);
      return rows.map(QuestionModel.parseRow);
    } finally {
      connection.end();
    }
  }

  async findAll() {
    const connection = this.dbConfig.createConnection();
    const query = util.promisify(connection.query).bind(connection);

    try {
      const rows = await query("SELECT * FROM tablajson");
      return rows.map(QuestionModel.parseRow);
    } finally {
      connection.end();
    }
  }

  static parseRow(row) {
    if (!row || row.columnajson == null) {
      return null;
    }

    try {
      return JSON.parse(row.columnajson);
    } catch {
      return row.columnajson;
    }
  }
}

module.exports = QuestionModel;
