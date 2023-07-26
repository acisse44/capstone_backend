const { DataTypes } = require("sequelize");
const db = require("../db.js");

const UserAchievement = db.define("userAchievement", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
  },
  achievementId: {
    type: DataTypes.INTEGER,
    references: {
      model: "achievements",
      key: "id",
    },
  },
});

module.exports = UserAchievement;
