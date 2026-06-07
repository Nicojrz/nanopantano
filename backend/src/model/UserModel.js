const { DataTypes } = require("sequelize");
const sequelize = require("../config/DatabaseSequelize");

const User = sequelize.define(
  "login",
  {
    idLOGIN: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    USERNAME: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    PASSWORD: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    TIPOUSUARIO: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "login",
    timestamps: false,
  }
);

module.exports = User;
