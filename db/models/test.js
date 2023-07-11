const { DataTypes } = require("sequelize");
const db = require("../index.js");

//Our test table with the following attributes for each
const Test = db.define("test", {

  testID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  languageID: {
    type: DataTypes.NUMBER,
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