const { DataTypes } = require("sequelize");
const db = require("../db");

//Our lesson  table with the following attributes for each
const Lesson = db.define("lesson ", {

  lessonID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  lessonName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  languageID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  
});

module.exports = Lesson ;