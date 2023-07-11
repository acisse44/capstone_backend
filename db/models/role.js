const { DataTypes } = require("sequelize");
const db = require("../index.js");

//Our test Questions table with the following attributes for each
const Role = db.define("role", {

  roleID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
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