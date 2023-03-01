require("dotenv").config();

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "dbgofit",
});

module.exports = conn;
