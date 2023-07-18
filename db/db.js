require("dotenv").config();
const { Sequelize } = require("sequelize");

const { name } = require("../package.json");

console.log(process.env.USERNAME);
//creation of singleton database
const db = new Sequelize(name, process.env.USER_NAME, process.env.PASSWORD, 
{
  host : 'localhost',
  logging: false,
  dialect: 'postgres'

});

//make sure this is the singleton you are defining the table on
module.exports = db;