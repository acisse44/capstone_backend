require("dotenv").config();
const { Sequelize } = require("sequelize");

const { name } = require("../package.json");

const db = new Sequelize(`postgres://localhost:5432/${name}`, {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  logging: false,
});

module.exports = db;