const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1605',
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;

/* const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'StoreManager',
  port: 3306,
});

module.exports = connection; */