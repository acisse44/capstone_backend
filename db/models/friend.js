const { DataTypes } = require("sequelize");
const db = require("../index.js");

//Our Friend table with the following attributes for each
const Friend = db.define("friend", {

  friendID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  userID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
 
});

module.exports = Friend;