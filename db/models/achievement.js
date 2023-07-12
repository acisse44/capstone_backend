const { DataTypes } = require("sequelize");
const db = require("../db.js")

//Our achievement table with the following attributes for each
const Achievement = db.define("achievement", {
  achievementName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  criteria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageURL: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

module.exports = Achievement;