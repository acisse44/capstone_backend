const { DataTypes } = require("sequelize");
const db = require("../db.js")

//Our lesson  table with the following attributes for each
const Lesson = db.define("lesson ", {
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});

module.exports = Lesson;