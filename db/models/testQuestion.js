const { DataTypes } = require("sequelize");
const db = require("../db");

//Our test Questions table with the following attributes for each
const TestQuestion = db.define("TestQuestion", {
  ID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  testID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  testChoice: {
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

module.exports = TestQuestion;