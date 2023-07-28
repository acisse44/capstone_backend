const { Sequelize } = require("sequelize");
require("dotenv").config();

const { name } = require("../package.json");

console.log("EnvUsername", process.env.USERNAME);
//creation of singleton database
const db =  process.env.NODE_ENV == "dev"
? new Sequelize(name, process.env.USERNAME, process.env.PASSWORD, 
{
  host : 'localhost',
  logging: false,
  dialect: 'postgres'

}): new Sequelize(process.env.DATABASE_URL);

//make sure this is the singleton you are defining the table on
module.exports = db;