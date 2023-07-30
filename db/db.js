require("dotenv").config();

const Sequelize = require("sequelize");
const { name } = require("../package.json");

//creation of singleton database
const db = process.env.NODE_ENV == "dev"
? new Sequelize(name, process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD,
{
  host : 'localhost',
  logging: false,
  dialect: 'postgres'

}): new Sequelize(process.env.DATABASE_URL);

require("pg");

//make sure this is the singleton you are defining the table on
module.exports = db;
