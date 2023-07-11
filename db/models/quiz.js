const { DataTypes } = require("sequelize");
const db = require("../index.js");

//Our quiz table with the following attributes for each
const Quiz = db.define("quiz", {

  quizID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  languageID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  quizName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  
});

module.exports = Quiz;