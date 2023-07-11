require("dotenv").config();
const { Sequelize } = require("sequelize");

const { name } = require("../package.json");

console.log(process.env.USERNAME);
//creation of singleton database
const db = new Sequelize(name, process.env.USERNAME, process.env.PASSWORD, 
{
  host : 'localhost',
  logging: true,
  dialect: 'postgres'

});

//make sure this is the singleton you are defining the table on
module.exports = db;