const { DataTypes } = require("sequelize");
const db =  require("../db.js")

//Our Friend table with the following attributes for each
const Friend = db.define("friend", {

  friendID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
});

module.exports = Friend;