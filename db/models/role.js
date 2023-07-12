const { DataTypes } = require("sequelize");
const db =  require("../db.js")

//Our test Questions table with the following attributes for each
const Role = db.define("role", {
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  
});

module.exports = Role;