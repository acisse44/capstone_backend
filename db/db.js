require("dotenv").config();
const { Sequelize } = require("sequelize");

const { name } = require("../package.json");

console.log(process.env.USERNAME);

const db = new Sequelize(`postgres://localhost:5432/${name}`, {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  logging: console.log,

});
module.exports = db;