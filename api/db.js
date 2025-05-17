const mysql = require('mysql2');
require('dotenv').config();

let db;

function connectWithRetry() {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
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
