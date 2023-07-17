const { DataTypes } = require("sequelize");
const db = require("../db.js")
//const User = require("./user.js"); // Import the User model


//Our Message table with the following attributes for each, will store the message data between users
const Message = db.define("message", {
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

module.exports = Message;