const { DataTypes } = require("sequelize");
const db =  require("../db.js")

//Our test table with the following attributes for each
const Test = db.define("test", {

  testID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  languageID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  testName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  
});

module.exports = Test;