const { DataTypes } = require("sequelize");
const db =  require("../db.js")

//Our quiz table with the following attributes for each
const Quiz = db.define("quiz", {
  languageId: {
    type: DataTypes.INTEGER,
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
  completed:{
    type: DataTypes.BOOLEAN,
    allowNull: false, 
  }
});

module.exports = Quiz;