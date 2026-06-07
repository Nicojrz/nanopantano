const mysql = require("mysql2");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });

class DatabaseConfig {
  constructor() {
    this.host = process.env.MYSQL_HOST;
    this.user = process.env.MYSQL_USER;
    this.password = process.env.MYSQL_PASSWORD;
    this.port = Number(process.env.MYSQL_PORT);
    this.database = process.env.MYSQL_DATABASE;
  }

  createConnection() {
    return mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database,
      port: this.port,
    }).promise();
  }
}

module.exports = new DatabaseConfig();
