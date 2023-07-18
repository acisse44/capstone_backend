const { DataTypes } = require("sequelize");
const db = require("../db.js")
//const User = require("./user.js"); // Import the User model


//Our achievement table with the following attributes for each
const Avatar = db.define("avatar", {
  imageURL: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

module.exports = Avatar;