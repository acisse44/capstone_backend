const { DataTypes } = require("sequelize");
const db = require("../db.js");

//Our Friend table with the following attributes for each

const Friendship = db.define(
    'Friendship',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

module.exports = Friendship;
