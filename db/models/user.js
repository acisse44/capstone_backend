const crypto = require("crypto");
const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class User extends Model {
  static async generateSalt() {
    return crypto.randomBytes(16).toString("base64");
  }

  static async encryptPassword(pw, salt) {
    return crypto
      .createHash("RSA-SHA256")
      .update(pw)
      .update(salt)
      .digest("hex");
  }
  // 1e38b6a36f6e3ac36e63f64892f2e1cf4291e7e3666902c9b97dc5af01546c06
  // Salt aUYqF5jlAZVseb9gxB8e9Q==

  // instance method to check pw
  // async correctPassword(pwAttempt) {
  //   return User.encryptPassword(pwAttempt, this.salt) === this.password;
  // }
  async correctPassword(pwAttempt) {
    return (await User.encryptPassword(pwAttempt, this.salt)) === this.password;
  }

  isAchievementUnlocked(achievementId) {
    return this.achievements.includes(achievementId);
  }
}

//Our users table with the following attributes for each
User.init(
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Invalid Email Format",
        },
      },
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    googleId: {
      // For OAuth purposes
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "User",
    hooks: {
      //Single
      beforeSave: async (user) => {
        if (user.changed("password")) {
          user.salt = await User.generateSalt();
          user.password = await User.encryptPassword(user.password, user.salt);
        }
      },
      // Many created
      beforeBulkCreate: async (users) => {
        users.forEach(async (user) => {
          if (user.changed("password")) {
            user.salt = await User.generateSalt();
            user.password = await User.encryptPassword(
              user.password,
              user.salt
            );
          }
        });
      },
    },
    validate: {
      googleLogIn() {
        if (this.googleId) {
          console.log("user has google ID");
          return;
        } //google id - good
        if (!this.password) {
          console.log("no password ERROR");
          throw new Error("account not created");
        } //not allowed
      },
    },
  }
);

module.exports = User;
