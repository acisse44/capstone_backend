const { DataTypes } = require("sequelize");
const db = require("../index.js");

//Our test Questions table with the following attributes for each
const QuizQuestion = db.define("QuizQuestion", {
  ID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  quizID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quizChoice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correctChoice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userScore: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  pointWorth: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  
});

module.exports = QuizQuestion;