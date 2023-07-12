const { DataTypes } = require("sequelize");
const db =  require("../db.js")

//Our users table with the following attributes for each
const User = db.define("user", {
  // userID: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   allowNull: false,
  // },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // friend: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  // language: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  // achievement: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  // roleID: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },


});

module.exports = User;