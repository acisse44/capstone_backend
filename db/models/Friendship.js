const { DataTypes } = require("sequelize");
const db = require("../db.js");

//Our Friend table with the following attributes for each

const Friendship = db.define(
    'Friendship',
    {
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
