const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Friendship = db.define("friendship", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending", // You can use "pending", "accepted", "rejected", etc.
  },
});

module.exports = Friendship;
