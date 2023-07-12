const { DataTypes } = require("sequelize");
const db =  require("../db.js")

//Our test Questions table with the following attributes for each
const TestQuestion = db.define("TestQuestion", {
  // testID: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pointWorth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
});

module.exports = TestQuestion;