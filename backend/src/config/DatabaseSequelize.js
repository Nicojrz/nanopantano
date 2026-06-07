const { Sequelize } = require("sequelize");
const config = require("./DatabaseConfig");
const sequelize = new Sequelize(config.development);

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
    await sequelize.sync();
    console.log("Modelos sincronizados con la base de datos.");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    process.exit(1);
  }
}

initializeDatabase();

module.exports = sequelize;
