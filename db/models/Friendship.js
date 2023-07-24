const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Friendship = db.define("friendship", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Friendship;
