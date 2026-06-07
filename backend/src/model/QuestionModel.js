class QuestionModel {
  constructor(dbConfig) {
    this.dbConfig = dbConfig;
  }

  async findById(id) {
    const connection = this.dbConfig.createConnection();

    try {
      const [rows] = await connection.query("SELECT * FROM tablajson WHERE idEjercicio = ?", [id]);
      return rows.map(QuestionModel.parseRow);
    } finally {
      await connection.end();
    }
  }

  async findAll() {
    const connection = this.dbConfig.createConnection();

    try {
      const [rows] = await connection.query("SELECT * FROM tablajson");
      return rows.map(QuestionModel.parseRow);
    } finally {
      await connection.end();
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
