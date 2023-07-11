const { DataTypes } = require("sequelize");
const db = require("../db.js")

//Our achievement table with the following attributes for each
const Achievement= db.define("achievement", {

  achievementID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  achievementName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  criteria: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageURL: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  
});

module.exports = Achievement;