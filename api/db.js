const mysql = require('mysql');
require('dotenv').config();

let db;

function connectWithRetry() {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  db.connect(error => {
    if (error) {
      console.error('Failed to connect to the database. Retrying...', error);
      setTimeout(connectWithRetry, 5000); // Wait 5 seconds then retry
    } else {
      console.log("Successfully connected to the database.");
    }
  });
}

connectWithRetry();

module.exports = db;
