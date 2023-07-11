const { DataTypes } = require("sequelize");
const db = require("../db");

//Our users table with the following attributes for each
const User = db.define("user", {
  userID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  points: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  friend: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  achievement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },


});

module.exports = User;