//require the singleton
const db = require("./db");
//this includes the assoicates when you require the model
require("./models")
//exports out modifed database for server
module.exports = db;
