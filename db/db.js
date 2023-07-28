const { Sequelize } = require("sequelize");
require("dotenv").config();

const { name } = require("../package.json");

console.log("EnvUsername", process.env.USERNAME);
//creation of singleton database
const db = new Sequelize(name, process.env.USERNAME, process.env.PASSWORD, 
{
  host : 'localhost',
  logging: false,
  dialect: 'postgres'

});

//make sure this is the singleton you are defining the table on
module.exports = db;