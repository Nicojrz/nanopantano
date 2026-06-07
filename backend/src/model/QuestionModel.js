const { DataTypes } = require("sequelize");
const sequelize = require("../config/DatabaseSequelize");

const Question = sequelize.define(
  "tablajson",
  {
    idEjercicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    columnajson: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: "tablajson",
    timestamps: false,
  }
);

module.exports = Question;
