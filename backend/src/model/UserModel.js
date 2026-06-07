const { DataTypes } = require("sequelize");
const sequelize = require("../config/DatabaseSequelize");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    user_type: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "User",
    timestamps: false,
  }
);

module.exports = User;
