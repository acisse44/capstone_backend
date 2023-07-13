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
  async correctPassword(pwAttempt) {
    return User.encryptPassword(pwAttempt, this.salt) === this.password;
  }
}

//Our users table with the following attributes for each
User.init(
  {
    // userID: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   allowNull: false,
    // },
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
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    googleId: {
      // For OAuth purposes
      type: DataTypes.STRING,
    },
    // isAdmin: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
    // friend: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // language: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // achievement: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // roleID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
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
  }
);

module.exports = User;
