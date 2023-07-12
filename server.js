require('dotenv').config();
const express = require("express");

//make sure you are imported the moded the database where you require the db
const db = require("./db");
const PORT = "8080";
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Mount on API
//app.use("/api", require("./api"));

// Syncing DB Function
const syncDB = () => db.sync();

// Run server function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

async function init() { 
  try {
    await syncDB(); 
    serverRun(); 

  } catch(error) {
      console.log('ERROR => ', error)
  }
}

init();

module.exports = app;
