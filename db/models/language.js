const { DataTypes } = require("sequelize");
const db = require("../db");

//Our Language table with the following attributes for each
const Language= db.define("language", {

  languageID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  languageName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cetegory: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  
});

module.exports = Language;